const stateKey = "crmSnapshotCollectorState";
const configKey = "crmSnapshotCollectorConfig";

const elements = {
  maxPages: document.querySelector("#max-pages"),
  waitMs: document.querySelector("#wait-ms"),
  captureCurrent: document.querySelector("#capture-current"),
  captureDiscovered: document.querySelector("#capture-discovered"),
  stopCapture: document.querySelector("#stop-capture"),
  download: document.querySelector("#download"),
  clear: document.querySelector("#clear"),
  statusDot: document.querySelector("#status-dot"),
  statusTitle: document.querySelector("#status-title"),
  statusDetail: document.querySelector("#status-detail"),
  statusMeta: document.querySelector("#status-meta")
};

let collectorState = null;

function setStateView(state) {
  collectorState = state || {};
  const phase = collectorState.phase || "idle";
  const labels = {
    idle: "等待开始",
    running: "正在采集",
    done: "采集完成",
    error: "采集失败"
  };
  elements.statusDot.className = `dot ${phase}`;
  elements.statusTitle.textContent = labels[phase] || labels.idle;
  elements.statusDetail.textContent = collectorState.message || "请先登录 CRM，并停留在允许访问的页面。";

  const capturedPages = collectorState.pages?.length || 0;
  const targetPages = collectorState.total || 0;
  elements.statusMeta.textContent = targetPages
    ? `已采集 ${capturedPages} / ${targetPages} 页`
    : capturedPages
      ? `已采集 ${capturedPages} 页`
      : "";

  const running = phase === "running";
  elements.captureCurrent.disabled = running;
  elements.captureDiscovered.disabled = running;
  elements.stopCapture.disabled = !running;
  elements.download.disabled = !collectorState.pages?.length;
}

async function refreshState() {
  const stored = await chrome.storage.local.get(stateKey);
  setStateView(stored[stateKey]);
}

async function saveConfig() {
  await chrome.storage.local.set({
    [configKey]: {
      maxPages: Number(elements.maxPages.value),
      waitMs: Number(elements.waitMs.value)
    }
  });
}

function startCapture(mode) {
  const maxPages = Math.max(1, Math.min(200, Number(elements.maxPages.value) || 80));
  const waitMs = Math.max(600, Math.min(10000, Number(elements.waitMs.value) || 1600));
  elements.maxPages.value = String(maxPages);
  elements.waitMs.value = String(waitMs);
  saveConfig();
  chrome.runtime.sendMessage({ type: "START_CAPTURE", mode, maxPages, waitMs }, (response) => {
    if (chrome.runtime.lastError || response?.ok === false) {
      setStateView({
        phase: "error",
        message: response?.error || chrome.runtime.lastError?.message || "无法启动采集"
      });
    }
    refreshState();
  });
}

function downloadSnapshot() {
  if (!collectorState?.pages?.length) return;
  const json = JSON.stringify(collectorState.snapshot, null, 2);
  const blob = new Blob([json], { type: "application/json;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  const time = new Date().toISOString().replace(/[:.]/g, "-");
  link.href = url;
  link.download = `crm-snapshot-${time}.json`;
  link.click();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}

function stopCapture() {
  chrome.runtime.sendMessage({ type: "STOP_CAPTURE" }, refreshState);
}

async function clearSnapshot() {
  await chrome.storage.local.remove(stateKey);
  setStateView(null);
}

elements.captureCurrent.addEventListener("click", () => startCapture("current"));
elements.captureDiscovered.addEventListener("click", () => startCapture("discovered"));
elements.stopCapture.addEventListener("click", stopCapture);
elements.download.addEventListener("click", downloadSnapshot);
elements.clear.addEventListener("click", clearSnapshot);

(async () => {
  const stored = await chrome.storage.local.get([stateKey, configKey]);
  const config = stored[configKey];
  if (config?.maxPages) elements.maxPages.value = String(config.maxPages);
  if (config?.waitMs) elements.waitMs.value = String(config.waitMs);
  setStateView(stored[stateKey]);
  setInterval(refreshState, 800);
})();
