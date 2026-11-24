const STATE_KEY = "crmSnapshotCollectorState";
const SCHEMA = "dino-crm-dom-snapshot/v1";
const ALLOWED_HOSTS = new Set(["crm.dinoai.ai", "sa-manager.lionabc.com"]);
const APP_PREFIXES = ["/dino-omnicenter/", "/omnicenter/"];
const BLOCKED_PATH = /(?:^|\/)(?:login|logout|signout|download|export|delete|remove|revoke|approve|reject|create|add|edit|update|save|submit|send|refund|transfer|401|403|error)(?:\/|$)/i;
const BLOCKED_FILE = /\.(?:pdf|zip|rar|7z|xls|xlsx|csv|doc|docx|png|jpe?g|gif|webp|mp3|mp4)$/i;
const LONG_ID_SEGMENT = /(?:^|\/)[A-Za-z_-]*\d{8,}(?:\/|$)/;

let captureRunning = false;
let cancelRequested = false;

function isAllowedUrl(rawUrl) {
  try {
    const url = new URL(rawUrl);
    return url.protocol === "https:" && ALLOWED_HOSTS.has(url.hostname)
      && APP_PREFIXES.some((prefix) => url.pathname.startsWith(prefix));
  } catch {
    return false;
  }
}

function normalizeAllowedUrl(rawUrl, baseUrl) {
  try {
    const url = new URL(rawUrl, baseUrl);
    if (url.protocol !== "https:" || !ALLOWED_HOSTS.has(url.hostname)) return null;
    if (!APP_PREFIXES.some((prefix) => url.pathname.startsWith(prefix))) return null;
    if (BLOCKED_PATH.test(url.pathname) || BLOCKED_FILE.test(url.pathname) || LONG_ID_SEGMENT.test(url.pathname)) return null;
    return `${url.origin}${url.pathname}`;
  } catch {
    return null;
  }
}

async function writeState(patch) {
  const stored = await chrome.storage.local.get(STATE_KEY);
  const previous = stored[STATE_KEY] || {};
  await chrome.storage.local.set({
    [STATE_KEY]: {
      ...previous,
      ...patch
    }
  });
}

function extractionFunction() {
  const MAX_TEXT = 160;
  const emailPattern = /\b[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}\b/gi;
  const phonePattern = /(?:\+?\d[\s()-]*){7,}\d/g;
  const longIdPattern = /\b\d{9,}\b/g;

  const clean = (value) => String(value ?? "")
    .replace(/\s+/g, " ")
    .trim()
    .replace(emailPattern, "[redacted-email]")
    .replace(phonePattern, "[redacted-phone]")
    .replace(longIdPattern, "[redacted-id]")
    .slice(0, MAX_TEXT);

  const isVisible = (element) => {
    const style = window.getComputedStyle(element);
    const rect = element.getBoundingClientRect();
    return style.display !== "none" && style.visibility !== "hidden"
      && Number(style.opacity || 1) > 0 && rect.width > 0 && rect.height > 0;
  };

  const unique = (values) => [...new Set(values.map(clean).filter(Boolean))];
  const insideDataRow = (element) => Boolean(element.closest(
    "tbody, tr, [role='row'], [class*='table-row']"
  ));
  const textOf = (selector, root = document) => unique(
    [...root.querySelectorAll(selector)]
      .filter(isVisible)
      .map((node) => node.innerText || node.textContent)
  );
  const controlTextOf = (selector) => unique(
    [...document.querySelectorAll(selector)]
      .filter(isVisible)
      .filter((node) => !insideDataRow(node))
      .map((node) => node.innerText || node.textContent)
  );
  const safeLink = (href) => {
    try {
      const url = new URL(href);
      return `${url.origin}${url.pathname}`;
    } catch {
      return "";
    }
  };

  const navigationLinks = [...document.querySelectorAll(
    "nav a[href], aside a[href], [role='navigation'] a[href], .ant-menu a[href], .ant-layout-sider a[href]"
  )]
    .filter(isVisible)
    .map((anchor) => ({
      text: clean(anchor.innerText || anchor.textContent || anchor.getAttribute("aria-label") || anchor.title),
      href: safeLink(anchor.href)
    }))
    .filter((item) => item.text && item.href);

  const discoveryLinks = [...document.querySelectorAll("a[href]")]
    .filter(isVisible)
    .filter((anchor) => !insideDataRow(anchor))
    .map((anchor) => ({
      text: clean(anchor.innerText || anchor.textContent || anchor.getAttribute("aria-label") || anchor.title),
      href: safeLink(anchor.href)
    }))
    .filter((item) => item.href && !BLOCKED_FILE_TEST(item.href));

  function BLOCKED_FILE_TEST(href) {
    try {
      const path = new URL(href).pathname;
      return /(?:^|\/)(?:login|logout|signout|download|export|delete|remove|revoke|approve|reject|create|add|edit|update|save|submit|send|refund|transfer|401|403|error)(?:\/|$)|\.(?:pdf|zip|rar|7z|xls|xlsx|csv|doc|docx|png|jpe?g|gif|webp|mp3|mp4)$/i.test(path)
        || /(?:^|\/)[A-Za-z_-]*\d{8,}(?:\/|$)/.test(path);
    } catch {
      return true;
    }
  }

  return {
    url: safeLink(location.href),
    title: clean(document.title),
    appName: clean(document.documentElement.dataset.appName),
    appVersion: clean(document.documentElement.dataset.indexVersion),
    headings: textOf("h1, h2, h3"),
    breadcrumbs: textOf("[class*='breadcrumb'], [aria-label*='breadcrumb'], [aria-label*='面包屑']"),
    tabs: textOf("[role='tab'], [class*='tabs'] [class*='tab']"),
    buttons: controlTextOf("button, [role='button'], input[type='button'], input[type='submit']"),
    formLabels: textOf("label, [class*='form-item'] > label, [class*='field-label']"),
    filterLabels: textOf(
      "[class*='filter'] label, [class*='filter'] [class*='label'], [class*='search'] label, [class*='search'] [class*='label']"
    ),
    placeholders: unique(
      [...document.querySelectorAll("input[placeholder], textarea[placeholder]")]
        .filter(isVisible)
        .map((input) => input.getAttribute("placeholder"))
    ),
    tableHeaders: textOf("table thead th, [role='table'] [role='columnheader'], [class*='table'] [class*='thead'] th"),
    navigationLinks,
    activeNavigation: textOf("[aria-current='page'], .ant-menu-item-selected, [class*='menu'] [class*='active']"),
    emptyState: textOf("[class*='empty']"),
    discoveryLinks
  };
}

function waitForTabReady(tabId, waitMs) {
  return new Promise((resolve, reject) => {
    let settled = false;
    const timeout = setTimeout(() => finish(new Error("页面加载超时")), 25000);

    const onUpdated = (updatedTabId, changeInfo, tab) => {
      if (updatedTabId !== tabId || changeInfo.status !== "complete") return;
      finish(null, tab);
    };

    const onRemoved = (removedTabId) => {
      if (removedTabId === tabId) finish(new Error("采集标签页已关闭"));
    };

    function finish(error, tab) {
      if (settled) return;
      settled = true;
      clearTimeout(timeout);
      chrome.tabs.onUpdated.removeListener(onUpdated);
      chrome.tabs.onRemoved.removeListener(onRemoved);
      if (error) {
        reject(error);
        return;
      }
      setTimeout(() => resolve(tab), waitMs);
    }

    chrome.tabs.onUpdated.addListener(onUpdated);
    chrome.tabs.onRemoved.addListener(onRemoved);
  });
}

async function capturePage(tabId, url, waitMs) {
  const ready = waitForTabReady(tabId, waitMs);
  await chrome.tabs.update(tabId, { url });
  const tab = await ready;
  if (!isAllowedUrl(tab.url)) {
    throw new Error(`页面跳转到登录或无权限地址：${tab.url || "未知地址"}`);
  }
  const [injection] = await chrome.scripting.executeScript({
    target: { tabId },
    func: extractionFunction
  });
  if (!injection?.result) throw new Error("未取得页面结构");
  return injection.result;
}

async function startCapture({ mode, maxPages, waitMs }) {
  if (captureRunning) return { ok: false, error: "已有采集任务正在运行" };

  const [activeTab] = await chrome.tabs.query({ active: true, currentWindow: true });
  if (!activeTab?.id || !isAllowedUrl(activeTab.url)) {
    return { ok: false, error: "请先登录 CRM，并停留在允许采集的页面" };
  }

  const startUrl = normalizeAllowedUrl(activeTab.url, activeTab.url);
  if (!startUrl) return { ok: false, error: "当前页面不在允许采集的 CRM 路径内" };

  captureRunning = true;
  cancelRequested = false;
  const queue = [startUrl];
  const seen = new Set();
  const pages = [];
  await chrome.storage.local.set({
    [STATE_KEY]: {
      phase: "running",
      message: mode === "discovered" ? "正在发现并采集导航页面" : "正在采集当前页面",
      pages,
      total: mode === "discovered" ? maxPages : 1
    }
  });

  try {
    while (queue.length && pages.length < maxPages) {
      if (cancelRequested) {
        await writeState({
          phase: "done",
          message: `已停止采集，保留 ${pages.length} 个页面`,
          pages,
          total: pages.length,
          snapshot: {
            schema: SCHEMA,
            collectorVersion: "1.0.0",
            capturedAt: new Date().toISOString(),
            origin: new URL(startUrl).origin,
            privacy: {
              cookies: false,
              tokens: false,
              networkResponses: false,
              tableRows: false,
              inputValues: false
            },
            pages
          }
        });
        return { ok: true };
      }
      const url = queue.shift();
      if (seen.has(url)) continue;
      seen.add(url);
      await writeState({
        phase: "running",
        message: `正在采集：${new URL(url).pathname}`,
        pages,
        total: mode === "discovered" ? Math.min(maxPages, Math.max(queue.length + pages.length + 1, pages.length + 1)) : 1
      });

      const page = await capturePage(activeTab.id, url, waitMs);
      page.url = url;
      page.capturedAt = new Date().toISOString();
      pages.push(page);

      if (mode === "discovered") {
        for (const item of page.discoveryLinks || []) {
          const next = normalizeAllowedUrl(item.href, url);
          if (next && !seen.has(next) && !queue.includes(next)) queue.push(next);
        }
      }
    }

    const snapshot = {
      schema: SCHEMA,
      collectorVersion: "1.0.0",
      capturedAt: new Date().toISOString(),
      origin: new URL(startUrl).origin,
      privacy: {
        cookies: false,
        tokens: false,
        networkResponses: false,
        tableRows: false,
        inputValues: false
      },
      pages
    };
    await writeState({
      phase: "done",
      message: `已完成 ${pages.length} 个页面`,
      pages,
      total: pages.length,
      snapshot
    });
  } catch (error) {
    await writeState({
      phase: "error",
      message: error instanceof Error ? error.message : String(error),
      pages,
      total: mode === "discovered" ? maxPages : 1
    });
  } finally {
    captureRunning = false;
    cancelRequested = false;
  }
  return { ok: true };
}

chrome.runtime.onMessage.addListener((message, _sender, sendResponse) => {
  if (message?.type === "STOP_CAPTURE") {
    cancelRequested = captureRunning;
    sendResponse({ ok: true, stopping: cancelRequested });
    return false;
  }
  if (message?.type !== "START_CAPTURE") return false;
  startCapture({
    mode: message.mode === "discovered" ? "discovered" : "current",
    maxPages: Math.max(1, Math.min(200, Number(message.maxPages) || 80)),
    waitMs: Math.max(600, Math.min(10000, Number(message.waitMs) || 1600))
  }).then(sendResponse).catch((error) => {
    sendResponse({ ok: false, error: error instanceof Error ? error.message : String(error) });
  });
  return true;
});
