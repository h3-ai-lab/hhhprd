const STR = {
  zh: {
    brandSub: "客户沟通工作台",
    navGroup: "用户管理",
    navUsers: "用户列表",
    navLine: "LINE消息",
    serviceOnline: "消息服务运行中",
    crumbCrm: "Dino CRM",
    pageTitle: "LINE消息",
    scope: "全业务线",
    roleName: "运营管理员",
    roleSub: "消息发送",
    introTitle: "客户消息",
    introText: "查看客户与 dinoAI 官方账号的绑定状态，多选 1–100 位已关注且已授权的客户，通过 Multicast 批量发送同一文本消息。",
    lastSync: "LINE 状态已同步",
    metricBound: "已绑定客户数",
    metricSendable: "可发送客户数",
    metricAccepted: "近30天批次受理率",
    metricBoundFoot: "当前筛选范围内，关系有效的客户",
    metricSendableFoot: "已关注、已授权，且状态已确认",
    metricAcceptedFoot: "LINE 已受理批次 ÷ 进入消息服务的批次",
    customerList: "客户列表",
    customerCount: "共 {count} 位",
    searchPlaceholder: "搜索用户 ID、姓名或手机号",
    filterBinding: "LINE 绑定",
    filterFriend: "关注状态",
    filterConsent: "营销授权",
    filterBindingShort: "绑定",
    filterFriendShort: "关注",
    filterConsentShort: "授权",
    filterAll: "全部状态",
    colSelect: "选择",
    colUser: "客户",
    colBusiness: "业务线",
    colBinding: "LINE 绑定",
    colFriend: "关注状态",
    colConsent: "营销授权",
    colSendable: "可发送",
    colUpdated: "最近更新",
    previous: "上一页",
    next: "下一页",
    page: "第 1 页",
    selectedCount: "已选 {count} / 100",
    selectPage: "选择当前页",
    clearSelection: "清空选择",
    batchSend: "批量发送",
    batchLimit: "单次最多 100 位",
    maxSelected: "单次最多选择 100 位客户",
    selectedNone: "请先选择可发送客户",
    noCustomers: "当前条件下没有客户",
    noCustomersSub: "调整搜索或筛选条件后重试",
    detailTitle: "客户详情",
    refreshStatus: "刷新 LINE 状态",
    sendableOkTitle: "可以发送消息",
    sendableOkText: "客户已绑定、已关注官方账号并同意接收消息。",
    blockedTitle: "暂时不能发送",
    customerId: "用户 ID",
    businessLine: "业务线",
    lineUserId: "LINE 用户 ID",
    phone: "手机号",
    confirmedAt: "状态确认时间",
    messageTitle: "发送文本消息",
    charCount: "{count} / 5000",
    templateGreeting: "课程提醒",
    templateFollowup: "顾问回访",
    templatePromotion: "活动通知",
    messagePlaceholder: "输入要发送给客户的文本消息",
    sendNote: "发送后仅表示 LINE 已受理，不代表已读",
    send: "发送消息",
    historyTitle: "发送批次",
    historyCount: "最近 {count} 个",
    historyEmpty: "暂无发送批次",
    retry: "重试",
    accepted: "LINE 已受理",
    failed: "发送失败",
    pending: "发送中",
    bindingActive: "已绑定",
    bindingConflict: "绑定冲突",
    bindingReleased: "已解除",
    bindingUnbound: "未绑定",
    friendFollowing: "已关注",
    friendNotFollowing: "未关注",
    friendUnknown: "待确认",
    consentConsented: "已授权",
    consentWithdrawn: "已撤回",
    consentUnknown: "未授权",
    yes: "可发送",
    no: "不可发送",
    reasonUnbound: "客户尚未绑定 LINE 账号。",
    reasonNotFollowing: "客户尚未关注 dinoAI 官方账号。",
    reasonNoConsent: "客户未授权接收 CRM 消息。",
    reasonUnknown: "LINE 状态暂时无法确认，请刷新后重试。",
    reasonConflict: "当前绑定存在冲突，请联系管理员处理后重试。",
    modalTitle: "确认发送消息",
    batchModalTitle: "批量发送消息",
    modalCustomer: "接收客户",
    modalBusiness: "业务线",
    modalLineId: "LINE 用户 ID",
    modalPreview: "消息内容",
    modalRecipients: "接收客户",
    modalRecipientCount: "共 {count} 位客户",
    modalEligible: "可发送 {count} 位",
    modalExcluded: "已排除 {count} 位",
    batchAccepted: "批次已受理",
    recipientCount: "{count} 位客户",
    cancel: "取消",
    confirmSend: "确认发送",
    toastRefreshed: "LINE 状态已刷新",
    toastSent: "消息已提交，等待 LINE 受理",
    toastAccepted: "LINE 已受理该批次",
    toastRetried: "已使用原消息 ID 重新提交",
    close: "关闭",
    greetingTemplate: "您好 {name}，您的下一节课程即将开始，请提前进入课堂。",
    followupTemplate: "您好 {name}，想了解一下您近期的学习安排，如需帮助请直接回复我们。",
    promotionTemplate: "您好 {name}，dinoAI 近期活动已开放报名，详情请查看 App 内通知。",
    msgFailedContent: "课程提醒：您的课堂链接已更新，请重新查看。",
    msgFailedReason: "LINE 服务暂时不可用，系统已完成 3 次重试。",
    msg1: "您好，您的试听课程已预约成功，请提前 5 分钟进入教室。",
    msg2: "您好，顾问将在今天下午与您联系，请留意 LINE 消息。",
    prevPage: "上一页",
    nextPage: "下一页"
  },
  en: {
    brandSub: "Customer messaging workspace",
    navGroup: "User Management",
    navUsers: "User List",
    navLine: "LINE Messages",
    serviceOnline: "Messaging service online",
    crumbCrm: "Dino CRM",
    pageTitle: "LINE Messages",
    scope: "All Business Lines",
    roleName: "Operations Admin",
    roleSub: "Messaging",
    introTitle: "Customer messages",
    introText: "Review each customer's link to the dinoAI Official Account and send one text message to 1–100 opted-in followers through Multicast.",
    lastSync: "LINE status synced",
    metricBound: "Linked Customers",
    metricSendable: "Message-ready Customers",
    metricAccepted: "30-day Batch Acceptance Rate",
    metricBoundFoot: "Customers with an active link in the current filters",
    metricSendableFoot: "Following, opted in, and recently verified",
    metricAcceptedFoot: "Accepted batches ÷ batches sent to the service",
    customerList: "Customers",
    customerCount: "{count} customers",
    searchPlaceholder: "Search user ID, name, or phone",
    filterBinding: "LINE Link",
    filterFriend: "Follow Status",
    filterConsent: "Marketing Opt-in",
    filterBindingShort: "Link",
    filterFriendShort: "Following",
    filterConsentShort: "Opt-in",
    filterAll: "All statuses",
    colSelect: "Select",
    colUser: "Customer",
    colBusiness: "Business Line",
    colBinding: "LINE Link",
    colFriend: "Following",
    colConsent: "Opt-in",
    colSendable: "Message-ready",
    colUpdated: "Last Updated",
    previous: "Previous",
    next: "Next",
    page: "Page 1",
    selectedCount: "Selected {count} / 100",
    selectPage: "Select Current Page",
    clearSelection: "Clear",
    batchSend: "Send in Batch",
    batchLimit: "Maximum 100 recipients",
    maxSelected: "You can select up to 100 customers",
    selectedNone: "Select at least one message-ready customer",
    noCustomers: "No customers match these filters",
    noCustomersSub: "Adjust the search or filters and try again",
    detailTitle: "Customer Details",
    refreshStatus: "Refresh LINE Status",
    sendableOkTitle: "Ready to message",
    sendableOkText: "The customer is linked, follows the Official Account, and has opted in.",
    blockedTitle: "Messaging unavailable",
    customerId: "User ID",
    businessLine: "Business Line",
    lineUserId: "LINE User ID",
    phone: "Phone",
    confirmedAt: "Status Verified",
    messageTitle: "Send a Text Message",
    charCount: "{count} / 5000",
    templateGreeting: "Class reminder",
    templateFollowup: "Advisor follow-up",
    templatePromotion: "Campaign notice",
    messagePlaceholder: "Enter the message to send",
    sendNote: "Accepted by LINE does not mean the message was read",
    send: "Send Message",
    historyTitle: "Send Batches",
    historyCount: "Latest {count}",
    historyEmpty: "No send batches yet",
    retry: "Retry",
    accepted: "Accepted by LINE",
    failed: "Send failed",
    pending: "Sending",
    bindingActive: "Linked",
    bindingConflict: "Link conflict",
    bindingReleased: "Released",
    bindingUnbound: "Not linked",
    friendFollowing: "Following",
    friendNotFollowing: "Not following",
    friendUnknown: "Pending check",
    consentConsented: "Opted in",
    consentWithdrawn: "Withdrawn",
    consentUnknown: "No opt-in",
    yes: "Ready",
    no: "Unavailable",
    reasonUnbound: "The customer has not linked a LINE account.",
    reasonNotFollowing: "The customer does not follow the dinoAI Official Account.",
    reasonNoConsent: "The customer has not opted in to CRM messages.",
    reasonUnknown: "LINE status cannot be confirmed. Refresh and try again.",
    reasonConflict: "The line link has a conflict. Ask an administrator to resolve it.",
    modalTitle: "Confirm Message",
    batchModalTitle: "Send in Batch",
    modalCustomer: "Recipient",
    modalBusiness: "Business Line",
    modalLineId: "LINE User ID",
    modalPreview: "Message",
    modalRecipients: "Recipients",
    modalRecipientCount: "{count} customers",
    modalEligible: "{count} ready to message",
    modalExcluded: "{count} excluded",
    batchAccepted: "Batch accepted by LINE",
    recipientCount: "{count} customers",
    cancel: "Cancel",
    confirmSend: "Confirm & Send",
    toastRefreshed: "LINE status refreshed",
    toastSent: "Message submitted for LINE acceptance",
    toastAccepted: "LINE accepted the batch",
    toastRetried: "Resubmitted with the same message ID",
    close: "Close",
    greetingTemplate: "Hi {name}, your next class is about to begin. Please join the classroom a few minutes early.",
    followupTemplate: "Hi {name}, I'd like to check in on your recent learning plan. Reply here if you need help.",
    promotionTemplate: "Hi {name}, registration is now open for the latest dinoAI campaign. See the notice in the app.",
    msgFailedContent: "Class reminder: your classroom link has changed. Please check it again.",
    msgFailedReason: "LINE was temporarily unavailable after 3 automatic retries.",
    msg1: "Your trial class is booked. Please join the classroom 5 minutes early.",
    msg2: "An advisor will contact you this afternoon. Please watch for our LINE message.",
    prevPage: "Previous",
    nextPage: "Next"
  }
};

const ago = (minutes) => new Date(Date.now() - minutes * 60_000).toISOString();

const CUSTOMERS = [
  {
    userId: "2119933744832167937", name: "Prasert S.", businessLine: "TH", phone: "•••• 4218",
    binding: "ACTIVE", friend: "FOLLOWING", consent: "CONSENTED", lineUserId: "U8f2c5b9d19374ae8c71e2aed6a91",
    confirmedAt: ago(8), updatedAt: ago(8),
    messages: [
      { id: "MSG-261113-0814", textKey: "msg1", at: ago(1320), status: "ACCEPTED" },
      { id: "MSG-261112-1732", textKey: "msg2", at: ago(2680), status: "ACCEPTED" }
    ]
  },
  {
    userId: "211993114542575618", name: "Narin K.", businessLine: "TH", phone: "•••• 9024",
    binding: "ACTIVE", friend: "FOLLOWING", consent: "WITHDRAWN", lineUserId: "U3a48e1bdb0e46eeabf014b3f23c2",
    confirmedAt: ago(14), updatedAt: ago(45),
    messages: [{ id: "MSG-261110-1021", textKey: "msg1", at: ago(4310), status: "ACCEPTED" }]
  },
  {
    userId: "211993582872029762", name: "Linh Pham", businessLine: "VN", phone: "•••• 6170",
    binding: "ACTIVE", friend: "NOT_FOLLOWING", consent: "CONSENTED", lineUserId: "U71df5fbc0e47c45fbdcb4092d88e",
    confirmedAt: ago(21), updatedAt: ago(21),
    messages: []
  },
  {
    userId: "211993414302876441", name: "Dung Tran", businessLine: "VN", phone: "•••• 3381",
    binding: "UNBOUND", friend: "UNKNOWN", consent: "UNKNOWN", lineUserId: "",
    confirmedAt: null, updatedAt: ago(80),
    messages: []
  },
  {
    userId: "211993778120431105", name: "Giang Vo", businessLine: "TH", phone: "•••• 7256",
    binding: "ACTIVE", friend: "UNKNOWN", consent: "CONSENTED", lineUserId: "U99a2d1c0f27d49ae8c03acff2b88",
    confirmedAt: ago(1670), updatedAt: ago(1670),
    messages: [{ id: "MSG-261112-0918", textKey: "msgFailedContent", at: ago(1480), status: "FAILED", errorKey: "msgFailedReason" }]
  },
  {
    userId: "211993723590118302", name: "Khanh Lam", businessLine: "MY", phone: "•••• 1408",
    binding: "CONFLICT", friend: "FOLLOWING", consent: "CONSENTED", lineUserId: "U12ab55de987d4d3ba187aad10c44",
    confirmedAt: ago(31), updatedAt: ago(31),
    messages: []
  },
  {
    userId: "211993690918140527", name: "Nam Hoang", businessLine: "TH", phone: "•••• 5713",
    binding: "ACTIVE", friend: "FOLLOWING", consent: "CONSENTED", lineUserId: "U5481cb479ce346cc80d1f9213b7f",
    confirmedAt: ago(3), updatedAt: ago(3),
    messages: [{ id: "MSG-261113-1048", textKey: "msg2", at: ago(88), status: "ACCEPTED" }]
  }
];

const requestedLanguage = new URLSearchParams(location.search).get("lang");
const state = {
  lang: requestedLanguage === "en" || (!requestedLanguage && localStorage.getItem("crm-line-lang") === "en") ? "en" : "zh",
  selectedId: CUSTOMERS[0].userId,
  query: "",
  binding: "all",
  friend: "all",
  consent: "all",
  selectedUsers: new Set()
};

const content = document.querySelector("#content");
const modalLayer = document.querySelector("#modal-layer");
const modal = document.querySelector("#modal");
const toast = document.querySelector("#toast");
let toastTimer;

function t(key, vars = {}) {
  let value = STR[state.lang][key] ?? key;
  Object.entries(vars).forEach(([name, replacement]) => {
    value = value.replaceAll(`{${name}}`, replacement);
  });
  return value;
}

function esc(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function icon(name) {
  return `<svg aria-hidden="true"><use href="#i-${name}"></use></svg>`;
}

function businessLineLabel(code) {
  const labels = state.lang === "zh"
    ? { TH: "泰国业务线", VN: "越南业务线", MY: "马来西亚业务线" }
    : { TH: "Thailand Business Line", VN: "Vietnam Business Line", MY: "Malaysia Business Line" };
  return labels[code] || code;
}

function bindingLabel(value) {
  return t({ ACTIVE: "bindingActive", CONFLICT: "bindingConflict", RELEASED: "bindingReleased", UNBOUND: "bindingUnbound" }[value]);
}

function friendLabel(value) {
  return t({ FOLLOWING: "friendFollowing", NOT_FOLLOWING: "friendNotFollowing", UNKNOWN: "friendUnknown" }[value]);
}

function consentLabel(value) {
  return t({ CONSENTED: "consentConsented", WITHDRAWN: "consentWithdrawn", UNKNOWN: "consentUnknown" }[value]);
}

function statusTag(label, kind) {
  return `<span class="tag tag-${kind}">${esc(label)}</span>`;
}

function bindingKind(value) {
  return value === "ACTIVE" ? "success" : value === "CONFLICT" ? "danger" : "neutral";
}

function friendKind(value) {
  return value === "FOLLOWING" ? "success" : value === "NOT_FOLLOWING" ? "warning" : "neutral";
}

function consentKind(value) {
  return value === "CONSENTED" ? "success" : value === "WITHDRAWN" ? "danger" : "warning";
}

function isFresh(customer) {
  return customer.confirmedAt && Date.now() - new Date(customer.confirmedAt).getTime() <= 24 * 60 * 60_000;
}

function isSendable(customer) {
  return customer.binding === "ACTIVE"
    && customer.friend === "FOLLOWING"
    && customer.consent === "CONSENTED"
    && isFresh(customer);
}

function blockedReason(customer) {
  if (customer.binding === "CONFLICT") return t("reasonConflict");
  if (customer.binding !== "ACTIVE") return t("reasonUnbound");
  if (customer.friend === "NOT_FOLLOWING") return t("reasonNotFollowing");
  if (customer.consent !== "CONSENTED") return t("reasonNoConsent");
  if (customer.friend === "UNKNOWN" || !isFresh(customer)) return t("reasonUnknown");
  return "";
}

function formatTime(value) {
  if (!value) return "—";
  return new Intl.DateTimeFormat(state.lang === "zh" ? "zh-CN" : "en-GB", {
    timeZone: "Asia/Bangkok",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false
  }).format(new Date(value));
}

function maskedLineId(value) {
  if (!value) return "—";
  return `${value.slice(0, 4)}••••••${value.slice(-4)}`;
}

function messageText(message) {
  const keys = ["msg1", "msg2", "msgFailedContent"];
  return keys.includes(message.textKey) ? t(message.textKey) : message.textKey;
}

function filteredCustomers() {
  const query = state.query.trim().toLowerCase();
  return CUSTOMERS.filter((customer) => {
    const matchesQuery = !query
      || customer.userId.toLowerCase().includes(query)
      || customer.name.toLowerCase().includes(query)
      || customer.phone.toLowerCase().includes(query);
    return matchesQuery
      && (state.binding === "all" || customer.binding === state.binding)
      && (state.friend === "all" || customer.friend === state.friend)
      && (state.consent === "all" || customer.consent === state.consent);
  });
}

function selectedCustomer() {
  return CUSTOMERS.find((customer) => customer.userId === state.selectedId) || filteredCustomers()[0] || null;
}

function metricStats(customers) {
  const bound = customers.filter((customer) => customer.binding === "ACTIVE").length;
  const sendable = customers.filter(isSendable).length;
  const batches = new Map();
  customers.flatMap((customer) => customer.messages).forEach((message) => {
    if (!batches.has(message.id)) batches.set(message.id, message);
  });
  const attempted = [...batches.values()].filter((batch) => ["ACCEPTED", "FAILED"].includes(batch.status));
  const accepted = attempted.filter((message) => message.status === "ACCEPTED");
  return {
    bound,
    sendable,
    acceptedRate: attempted.length ? `${(accepted.length / attempted.length * 100).toFixed(1)}%` : "—",
    acceptedRatio: `${accepted.length} / ${attempted.length}`
  };
}

function renderAll() {
  const customers = filteredCustomers();
  if (!customers.some((customer) => customer.userId === state.selectedId)) {
    state.selectedId = customers[0]?.userId || null;
  }
  const stats = metricStats(customers);
  content.innerHTML = `
    <section class="page-intro">
      <div>
        <h2>${esc(t("introTitle"))}</h2>
        <p>${esc(t("introText"))}</p>
      </div>
      <div class="sync-text">${icon("clock")}<span>${esc(t("lastSync"))} ${formatTime(ago(2))}</span></div>
    </section>

    <section class="metrics" aria-label="${esc(t("customerList"))}">
      <article class="metric">
        <div class="metric-label"><span>${esc(t("metricBound"))}</span><span class="info-dot" title="${esc(t("metricBoundFoot"))}">i</span></div>
        <div class="metric-value">${stats.bound}<small>${state.lang === "zh" ? "位" : "customers"}</small></div>
        <div class="metric-foot">${esc(t("metricBoundFoot"))}</div>
      </article>
      <article class="metric primary">
        <div class="metric-label"><span>${esc(t("metricSendable"))}</span><span class="info-dot" title="${esc(t("metricSendableFoot"))}">i</span></div>
        <div class="metric-value">${stats.sendable}<small>${state.lang === "zh" ? "位" : "customers"}</small></div>
        <div class="metric-foot">${esc(t("metricSendableFoot"))}</div>
      </article>
      <article class="metric">
        <div class="metric-label"><span>${esc(t("metricAccepted"))}</span><span class="info-dot" title="${esc(t("metricAcceptedFoot"))}">i</span></div>
        <div class="metric-value">${esc(stats.acceptedRate)}</div>
        <div class="metric-foot">${esc(t("metricAcceptedFoot"))} · ${esc(stats.acceptedRatio)}</div>
      </article>
    </section>

    <section class="workspace-grid">
      <article class="card">
        <div class="card-head">
          <div><h3>${esc(t("customerList"))}</h3><p>${esc(t("customerCount", { count: customers.length }))}</p></div>
          <span class="count-pill" id="visible-count">${customers.length}</span>
        </div>
        <div class="bulk-bar" id="bulk-bar">
          <div class="bulk-selection">
            <strong id="selected-count">${esc(t("selectedCount", { count: 0 }))}</strong>
            <span>${esc(t("batchLimit"))}</span>
          </div>
          <div class="bulk-actions">
            <button class="btn btn-small" id="clear-selection" disabled>${esc(t("clearSelection"))}</button>
            <button class="btn btn-primary btn-small" id="batch-send" disabled>${icon("send")}<span>${esc(t("batchSend"))}</span></button>
          </div>
        </div>
        <div class="filter-bar">
          <div class="search-box">${icon("search")}<input id="search" class="control" value="${esc(state.query)}" placeholder="${esc(t("searchPlaceholder"))}" aria-label="${esc(t("searchPlaceholder"))}"></div>
          <select id="filter-binding" class="control" aria-label="${esc(t("filterBinding"))}">
            <option value="all">${esc(t("filterBindingShort"))}: ${esc(t("filterAll"))}</option>
            <option value="ACTIVE">${esc(t("bindingActive"))}</option>
            <option value="CONFLICT">${esc(t("bindingConflict"))}</option>
            <option value="UNBOUND">${esc(t("bindingUnbound"))}</option>
          </select>
          <select id="filter-friend" class="control" aria-label="${esc(t("filterFriend"))}">
            <option value="all">${esc(t("filterFriendShort"))}: ${esc(t("filterAll"))}</option>
            <option value="FOLLOWING">${esc(t("friendFollowing"))}</option>
            <option value="NOT_FOLLOWING">${esc(t("friendNotFollowing"))}</option>
            <option value="UNKNOWN">${esc(t("friendUnknown"))}</option>
          </select>
          <select id="filter-consent" class="control" aria-label="${esc(t("filterConsent"))}">
            <option value="all">${esc(t("filterConsentShort"))}: ${esc(t("filterAll"))}</option>
            <option value="CONSENTED">${esc(t("consentConsented"))}</option>
            <option value="WITHDRAWN">${esc(t("consentWithdrawn"))}</option>
            <option value="UNKNOWN">${esc(t("consentUnknown"))}</option>
          </select>
        </div>
        <div class="table-wrap">
          <table>
            <thead><tr>
              <th class="select-column"><input type="checkbox" id="select-page" aria-label="${esc(t("selectPage"))}"></th>
              <th>${esc(t("colUser"))}</th><th>${esc(t("colBusiness"))}</th><th>${esc(t("colBinding"))}</th>
              <th>${esc(t("colFriend"))}</th><th>${esc(t("colConsent"))}</th><th>${esc(t("colSendable"))}</th><th>${esc(t("colUpdated"))}</th>
            </tr></thead>
            <tbody id="customer-body"></tbody>
          </table>
        </div>
        <div class="pager">
          <span id="pager-label">${esc(t("customerCount", { count: customers.length }))}</span>
          <div class="pager-actions"><button class="page-btn" aria-label="${esc(t("prevPage"))}">‹</button><button class="page-btn is-active">1</button><button class="page-btn" aria-label="${esc(t("nextPage"))}">›</button></div>
        </div>
      </article>
      <article class="card detail-card" id="detail-card"></article>
    </section>
  `;
  applySelectValues();
  renderCustomerTable();
  renderDetail();
  bindPageEvents();
  updateBulkControls();
  updateChrome();
}

function applySelectValues() {
  document.querySelector("#filter-binding").value = state.binding;
  document.querySelector("#filter-friend").value = state.friend;
  document.querySelector("#filter-consent").value = state.consent;
}

function renderCustomerTable() {
  const customers = filteredCustomers();
  const body = document.querySelector("#customer-body");
  if (!body) return;
  if (!customers.length) {
    body.innerHTML = `<tr><td colspan="8"><div class="empty"><strong>${esc(t("noCustomers"))}</strong><span>${esc(t("noCustomersSub"))}</span></div></td></tr>`;
    return;
  }
  body.innerHTML = customers.map((customer) => `
    <tr data-user="${esc(customer.userId)}" class="${customer.userId === state.selectedId ? "is-selected" : ""}" tabindex="0">
      <td class="select-column"><input type="checkbox" data-select-user="${esc(customer.userId)}" aria-label="${esc(customer.name)}" ${state.selectedUsers.has(customer.userId) ? "checked" : ""} ${isSendable(customer) ? "" : "disabled"}></td>
      <td><div class="customer-cell"><strong>${esc(customer.name)}</strong><span class="user-id">${esc(customer.userId)}</span></div></td>
      <td>${esc(businessLineLabel(customer.businessLine))}</td>
      <td>${statusTag(bindingLabel(customer.binding), bindingKind(customer.binding))}</td>
      <td>${statusTag(friendLabel(customer.friend), friendKind(customer.friend))}</td>
      <td>${statusTag(consentLabel(customer.consent), consentKind(customer.consent))}</td>
      <td>${statusTag(t(isSendable(customer) ? "yes" : "no"), isSendable(customer) ? "success" : "neutral")}</td>
      <td>${formatTime(customer.updatedAt)}</td>
    </tr>
  `).join("");
  body.querySelectorAll("tr[data-user]").forEach((row) => {
    const choose = () => {
      state.selectedId = row.dataset.user;
      renderCustomerTable();
      renderDetail();
    };
    row.addEventListener("click", choose);
    row.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        choose();
      }
    });
  });
  body.querySelectorAll("[data-select-user]").forEach((checkbox) => {
    checkbox.addEventListener("click", (event) => event.stopPropagation());
    checkbox.addEventListener("change", () => toggleCustomerSelection(checkbox.dataset.selectUser, checkbox.checked));
  });
  updateSelectPageControl(customers);
}

function toggleCustomerSelection(userId, checked) {
  const customer = CUSTOMERS.find((item) => item.userId === userId);
  if (!customer || !isSendable(customer)) return;
  if (checked && state.selectedUsers.size >= 100) {
    showToast(t("maxSelected"));
    renderCustomerTable();
    updateBulkControls();
    return;
  }
  if (checked) state.selectedUsers.add(userId);
  else state.selectedUsers.delete(userId);
  renderCustomerTable();
  updateBulkControls();
}

function clearSelection() {
  state.selectedUsers.clear();
  renderCustomerTable();
  updateBulkControls();
}

function updateBulkControls() {
  [...state.selectedUsers].forEach((userId) => {
    const customer = CUSTOMERS.find((item) => item.userId === userId);
    if (!customer || !isSendable(customer)) state.selectedUsers.delete(userId);
  });
  const count = state.selectedUsers.size;
  const countNode = document.querySelector("#selected-count");
  if (countNode) countNode.textContent = t("selectedCount", { count });
  const clearButton = document.querySelector("#clear-selection");
  const sendButton = document.querySelector("#batch-send");
  if (clearButton) clearButton.disabled = count === 0;
  if (sendButton) sendButton.disabled = count === 0;
}

function updateSelectPageControl(customers) {
  const checkbox = document.querySelector("#select-page");
  if (!checkbox) return;
  const selectable = customers.filter(isSendable);
  const selectedVisible = selectable.filter((customer) => state.selectedUsers.has(customer.userId));
  checkbox.disabled = selectable.length === 0;
  checkbox.checked = selectable.length > 0 && selectedVisible.length === selectable.length;
  checkbox.indeterminate = selectedVisible.length > 0 && selectedVisible.length < selectable.length;
}

function selectCurrentPage() {
  const selectable = filteredCustomers().filter(isSendable);
  const allSelected = selectable.length > 0 && selectable.every((customer) => state.selectedUsers.has(customer.userId));
  if (allSelected) {
    selectable.forEach((customer) => state.selectedUsers.delete(customer.userId));
  } else {
    for (const customer of selectable) {
      if (state.selectedUsers.size >= 100) {
        showToast(t("maxSelected"));
        break;
      }
      state.selectedUsers.add(customer.userId);
    }
  }
  renderCustomerTable();
  updateBulkControls();
}

function renderDetail() {
  const card = document.querySelector("#detail-card");
  const customer = selectedCustomer();
  if (!card) return;
  if (!customer) {
    card.innerHTML = `<div class="empty"><strong>${esc(t("noCustomers"))}</strong><span>${esc(t("noCustomersSub"))}</span></div>`;
    return;
  }
  const sendable = isSendable(customer);
  const reason = blockedReason(customer);
  const messages = [...customer.messages].sort((a, b) => new Date(b.at) - new Date(a.at));
  card.innerHTML = `
    <div class="card-head">
      <div class="detail-heading">
        <h3>${esc(customer.name)}</h3>
        <div class="detail-id">${esc(customer.userId)}</div>
      </div>
      <button class="icon-btn" id="refresh-status" aria-label="${esc(t("refreshStatus"))}" title="${esc(t("refreshStatus"))}">${icon("refresh")}</button>
    </div>
    <div class="detail-body">
      <div class="eligibility ${sendable ? "ok" : "blocked"}">
        ${icon(sendable ? "check" : "alert")}
        <div><strong>${esc(t(sendable ? "sendableOkTitle" : "blockedTitle"))}</strong><span>${esc(sendable ? t("sendableOkText") : reason)}</span></div>
      </div>
      <div class="identity-grid">
        <div class="identity"><label>${esc(t("businessLine"))}</label><strong>${esc(businessLineLabel(customer.businessLine))}</strong></div>
        <div class="identity"><label>${esc(t("phone"))}</label><strong>${esc(customer.phone)}</strong></div>
        <div class="identity wide"><label>${esc(t("lineUserId"))}</label><strong>${esc(maskedLineId(customer.lineUserId))}</strong></div>
        <div class="identity wide"><label>${esc(t("confirmedAt"))}</label><strong>${formatTime(customer.confirmedAt)}</strong></div>
      </div>
      <div class="status-row">
        ${statusTag(bindingLabel(customer.binding), bindingKind(customer.binding))}
        ${statusTag(friendLabel(customer.friend), friendKind(customer.friend))}
        ${statusTag(consentLabel(customer.consent), consentKind(customer.consent))}
      </div>
      <div class="composer">
        <div class="composer-label"><label for="message-text">${esc(t("messageTitle"))}</label><span class="char-count" id="char-count">${esc(t("charCount", { count: 0 }))}</span></div>
        <div class="templates">
          <button class="template-btn" data-template="greetingTemplate" ${sendable ? "" : "disabled"}>${esc(t("templateGreeting"))}</button>
          <button class="template-btn" data-template="followupTemplate" ${sendable ? "" : "disabled"}>${esc(t("templateFollowup"))}</button>
          <button class="template-btn" data-template="promotionTemplate" ${sendable ? "" : "disabled"}>${esc(t("templatePromotion"))}</button>
        </div>
        <textarea id="message-text" class="message-input" maxlength="5000" placeholder="${esc(t("messagePlaceholder"))}" ${sendable ? "" : "disabled"}></textarea>
        <div class="composer-actions">
          <span class="composer-note">${esc(t("sendNote"))}</span>
          <button class="btn btn-primary" id="send-button" ${sendable ? "" : "disabled"}>${icon("send")}<span>${esc(t("send"))}</span></button>
        </div>
      </div>
      <div class="history">
        <div class="history-title"><strong>${esc(t("historyTitle"))}</strong><span>${esc(t("historyCount", { count: messages.length }))}</span></div>
        ${messages.length ? messages.map(renderMessage).join("") : `<div class="history-empty">${esc(t("historyEmpty"))}</div>`}
      </div>
    </div>
  `;
  bindDetailEvents(customer, sendable);
}

function renderMessage(message) {
  const statusKey = message.status === "ACCEPTED" && message.batchId
    ? "batchAccepted"
    : { ACCEPTED: "accepted", FAILED: "failed", PENDING: "pending" }[message.status];
  const statusClass = { ACCEPTED: "ok", FAILED: "fail", PENDING: "wait" }[message.status];
  const recipientMeta = message.recipientCount > 1 ? ` · ${t("recipientCount", { count: message.recipientCount })}` : "";
  return `
    <div class="history-item">
      <div class="history-top">
        <span class="history-status ${statusClass}">${statusClass === "ok" ? icon("check") : icon("alert")}${esc(t(statusKey))}</span>
        <span class="history-meta">${formatTime(message.at)} · ${esc(message.id)}${esc(recipientMeta)}</span>
      </div>
      <div class="history-text">${esc(messageText(message))}</div>
      ${message.status === "FAILED" ? `<div class="history-error">${esc(t(message.errorKey))}</div><button class="retry-btn" data-retry="${esc(message.id)}">${esc(t("retry"))}</button>` : ""}
    </div>
  `;
}

function bindPageEvents() {
  const search = document.querySelector("#search");
  search.addEventListener("input", (event) => {
    state.query = event.target.value;
    state.selectedUsers.clear();
    updateFilteredView();
  });
  ["binding", "friend", "consent"].forEach((key) => {
    document.querySelector(`#filter-${key}`).addEventListener("change", (event) => {
      state[key] = event.target.value;
      state.selectedUsers.clear();
      updateFilteredView();
    });
  });
  document.querySelector("#select-page").addEventListener("change", selectCurrentPage);
  document.querySelector("#clear-selection").addEventListener("click", clearSelection);
  document.querySelector("#batch-send").addEventListener("click", () => {
    const recipients = CUSTOMERS.filter((customer) => state.selectedUsers.has(customer.userId) && isSendable(customer));
    if (!recipients.length) {
      showToast(t("selectedNone"));
      return;
    }
    openBatchModal(recipients);
  });
}

function updateFilteredView() {
  const customers = filteredCustomers();
  if (!customers.some((customer) => customer.userId === state.selectedId)) {
    state.selectedId = customers[0]?.userId || null;
  }
  renderCustomerTable();
  renderDetail();
  const stats = metricStats(customers);
  const metricValues = document.querySelectorAll(".metric-value");
  if (metricValues.length === 3) {
    metricValues[0].innerHTML = `${stats.bound}<small>${state.lang === "zh" ? "位" : "customers"}</small>`;
    metricValues[1].innerHTML = `${stats.sendable}<small>${state.lang === "zh" ? "位" : "customers"}</small>`;
    metricValues[2].textContent = stats.acceptedRate;
    document.querySelectorAll(".metric-foot")[2].textContent = `${t("metricAcceptedFoot")} · ${stats.acceptedRatio}`;
  }
  const count = document.querySelector("#visible-count");
  if (count) count.textContent = customers.length;
  const pager = document.querySelector("#pager-label");
  if (pager) pager.textContent = t("customerCount", { count: customers.length });
  updateBulkControls();
}

function bindDetailEvents(customer, sendable) {
  document.querySelector("#refresh-status")?.addEventListener("click", () => {
    customer.confirmedAt = ago(0);
    customer.updatedAt = ago(0);
    if (customer.friend === "UNKNOWN" && customer.binding === "ACTIVE") customer.friend = "FOLLOWING";
    renderCustomerTable();
    renderDetail();
    updateFilteredView();
    showToast(t("toastRefreshed"));
  });

  const textarea = document.querySelector("#message-text");
  const count = document.querySelector("#char-count");
  textarea?.addEventListener("input", () => {
    count.textContent = t("charCount", { count: textarea.value.length });
  });
  document.querySelectorAll("[data-template]").forEach((button) => {
    button.addEventListener("click", () => {
      textarea.value = t(button.dataset.template, { name: customer.name.split(" ")[0] });
      textarea.dispatchEvent(new Event("input"));
      textarea.focus();
    });
  });
  document.querySelector("#send-button")?.addEventListener("click", () => {
    const text = textarea.value.trim();
    if (!sendable || !text) {
      if (!text) textarea.focus();
      return;
    }
    openSendModal(customer, text);
  });
  document.querySelectorAll("[data-retry]").forEach((button) => {
    button.addEventListener("click", () => retryMessage(customer, button.dataset.retry));
  });
}

function openSendModal(customer, text) {
  modal.innerHTML = `
    <div class="modal-head">
      <h3 id="modal-title">${esc(t("modalTitle"))}</h3>
      <button class="icon-btn" data-action="close-modal" aria-label="${esc(t("close"))}">${icon("close")}</button>
    </div>
    <div class="modal-body">
      <div class="modal-review">
        <div><span>${esc(t("modalCustomer"))}</span><strong>${esc(customer.name)} · ${esc(customer.userId)}</strong></div>
        <div><span>${esc(t("modalBusiness"))}</span><strong>${esc(businessLineLabel(customer.businessLine))}</strong></div>
        <div><span>${esc(t("modalLineId"))}</span><strong>${esc(maskedLineId(customer.lineUserId))}</strong></div>
      </div>
      <div class="modal-preview">${esc(text)}</div>
    </div>
    <div class="modal-foot">
      <button class="btn" data-action="close-modal">${esc(t("cancel"))}</button>
      <button class="btn btn-primary" id="confirm-send">${icon("send")}<span>${esc(t("confirmSend"))}</span></button>
    </div>
  `;
  modalLayer.classList.add("is-open");
  modalLayer.setAttribute("aria-hidden", "false");
  modalLayer.querySelectorAll("[data-action='close-modal']").forEach((button) => button.addEventListener("click", closeModal));
  document.querySelector("#confirm-send").addEventListener("click", () => {
    closeModal();
    submitMessage(customer, text);
  });
}

function openBatchModal(recipients) {
  modal.innerHTML = `
    <div class="modal-head">
      <h3 id="modal-title">${esc(t("batchModalTitle"))}</h3>
      <button class="icon-btn" data-action="close-modal" aria-label="${esc(t("close"))}">${icon("close")}</button>
    </div>
    <div class="modal-body">
      <div class="modal-review">
        <div><span>${esc(t("modalRecipients"))}</span><strong>${esc(t("modalRecipientCount", { count: recipients.length }))}</strong></div>
        <div><span>${esc(t("modalEligible", { count: recipients.length }))}</span><strong>${esc(t("modalExcluded", { count: 0 }))}</strong></div>
      </div>
      <div class="batch-recipient-names">${esc(recipients.map((customer) => customer.name).join(" · "))}</div>
      <div class="batch-compose">
        <div class="composer-label"><label for="batch-message-text">${esc(t("messageTitle"))}</label><span class="char-count" id="batch-char-count">${esc(t("charCount", { count: 0 }))}</span></div>
        <div class="templates">
          <button class="template-btn" data-batch-template="greetingTemplate">${esc(t("templateGreeting"))}</button>
          <button class="template-btn" data-batch-template="followupTemplate">${esc(t("templateFollowup"))}</button>
          <button class="template-btn" data-batch-template="promotionTemplate">${esc(t("templatePromotion"))}</button>
        </div>
        <textarea id="batch-message-text" class="message-input" maxlength="5000" placeholder="${esc(t("messagePlaceholder"))}"></textarea>
      </div>
    </div>
    <div class="modal-foot">
      <button class="btn" data-action="close-modal">${esc(t("cancel"))}</button>
      <button class="btn btn-primary" id="confirm-batch-send">${icon("send")}<span>${esc(t("confirmSend"))}</span></button>
    </div>
  `;
  modalLayer.classList.add("is-open");
  modalLayer.setAttribute("aria-hidden", "false");
  const textarea = document.querySelector("#batch-message-text");
  textarea.addEventListener("input", () => {
    document.querySelector("#batch-char-count").textContent = t("charCount", { count: textarea.value.length });
  });
  modal.querySelectorAll("[data-batch-template]").forEach((button) => {
    button.addEventListener("click", () => {
      textarea.value = t(button.dataset.batchTemplate, { name: recipients[0].name.split(" ")[0] });
      textarea.dispatchEvent(new Event("input"));
      textarea.focus();
    });
  });
  modalLayer.querySelectorAll("[data-action='close-modal']").forEach((button) => button.addEventListener("click", closeModal));
  document.querySelector("#confirm-batch-send").addEventListener("click", () => {
    const text = textarea.value.trim();
    if (!text) {
      textarea.focus();
      return;
    }
    closeModal();
    submitBatch(recipients, text);
  });
}

function closeModal() {
  modalLayer.classList.remove("is-open");
  modalLayer.setAttribute("aria-hidden", "true");
  modal.innerHTML = "";
}

function submitMessage(customer, text) {
  submitBatch([customer], text);
}

function submitBatch(recipients, text) {
  if (!recipients.length || recipients.length > 100) return;
  const id = `MSG-${new Date().toISOString().slice(2, 10).replaceAll("-", "")}-${Math.floor(1000 + Math.random() * 9000)}`;
  const at = new Date().toISOString();
  const recipientIds = recipients.map((customer) => customer.userId);
  recipients.forEach((customer) => {
    customer.messages.push({
      id,
      textKey: text,
      at,
      status: "PENDING",
      batchId: id,
      recipientIds,
      recipientCount: recipients.length
    });
    customer.updatedAt = at;
  });
  state.selectedUsers.clear();
  renderCustomerTable();
  renderDetail();
  updateFilteredView();
  showToast(t("toastSent"));
  window.setTimeout(() => {
    CUSTOMERS.forEach((item) => {
      item.messages.filter((message) => message.id === id).forEach((message) => {
        message.status = "ACCEPTED";
        message.at = new Date().toISOString();
      });
    });
    renderDetail();
    updateFilteredView();
    showToast(t("toastAccepted"));
  }, 900);
}

function retryMessage(customer, messageId) {
  const message = customer.messages.find((item) => item.id === messageId);
  if (!message || !isSendable(customer)) return;
  CUSTOMERS.flatMap((item) => item.messages).filter((item) => item.id === messageId).forEach((item) => {
    item.status = "PENDING";
  });
  renderDetail();
  showToast(t("toastRetried"));
  window.setTimeout(() => {
    CUSTOMERS.flatMap((item) => item.messages).filter((item) => item.id === messageId).forEach((item) => {
      item.status = "ACCEPTED";
      item.at = new Date().toISOString();
      delete item.errorKey;
    });
    customer.updatedAt = new Date().toISOString();
    renderCustomerTable();
    renderDetail();
    updateFilteredView();
    showToast(t("toastAccepted"));
  }, 800);
}

function showToast(text) {
  clearTimeout(toastTimer);
  toast.textContent = text;
  toast.classList.add("is-visible");
  toastTimer = window.setTimeout(() => toast.classList.remove("is-visible"), 2200);
}

function updateChrome() {
  document.documentElement.lang = state.lang === "zh" ? "zh-CN" : "en";
  document.title = state.lang === "zh" ? "Dino CRM · LINE消息" : "Dino CRM · LINE Messages";
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    element.textContent = t(element.dataset.i18n);
  });
  document.querySelectorAll("[data-lang]").forEach((element) => {
    element.classList.toggle("is-active", element.dataset.lang === state.lang);
  });
  document.querySelector("#lang-switch").setAttribute("aria-label", state.lang === "zh" ? "Switch to English" : "切换到中文");
  document.querySelectorAll(".side-nav [aria-label]").forEach((element) => element.removeAttribute("aria-label"));
}

document.querySelector("#lang-switch").addEventListener("click", () => {
  state.lang = state.lang === "zh" ? "en" : "zh";
  localStorage.setItem("crm-line-lang", state.lang);
  renderAll();
});

modalLayer.querySelector(".modal-scrim").addEventListener("click", closeModal);
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && modalLayer.classList.contains("is-open")) closeModal();
});

renderAll();
