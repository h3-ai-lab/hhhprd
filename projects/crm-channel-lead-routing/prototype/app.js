const COPY = {
  zh: {
    brand: "Dino CRM",
    brandSub: "销售管理",
    navGroup: "销售管理",
    navSales: "销售中心",
    crumb: "Dino CRM / 销售管理 / 销售中心",
    pageTitle: "销售中心",
    accountName: "胡海昊",
    accountRole: "业务线管理员",
    leadTitle: "我的跟进",
    leadSubtitle: "最近更新的线索",
    settings: "分配与掉库设置",
    leadPool: "公海",
    myLeads: "我的跟进",
    paid: "已付费",
    user: "学生",
    businessLine: "业务线",
    source: "渠道来源",
    owner: "当前 CC",
    stage: "当前跟进阶段",
    modalTitle: "分配与掉库设置",
    lineLabel: "所属业务线",
    rulesTab: "分组规则",
    weightsTab: "销售权重",
    dropTab: "掉库规则",
    groupRules: "渠道分配到小组",
    addRule: "新增规则",
    channel: "渠道",
    targetGroup: "目标小组",
    receiverStatus: "接收状态",
    status: "启用",
    actions: "操作",
    edit: "编辑",
    delete: "删除",
    saveRule: "保存规则",
    cancelRule: "取消",
    cancel: "取消",
    save: "保存",
    close: "关闭",
    available: "可分配",
    noReceiver: "无接收人",
    noRules: "暂无分组规则",
    noRulesHint: "配置后，新线索会先进入目标小组。",
    selectChannel: "请选择渠道",
    selectGroup: "请选择目标小组",
    duplicateChannel: "该渠道已配置目标小组",
    requiredError: "请选择渠道和目标小组",
    noReceiverHint: "该组暂无接收人，线索将进入小组待分配池。",
    deleteConfirm: "确认删除这条规则？",
    confirmDelete: "删除",
    keepRule: "保留",
    weightsTitle: "线索分配比例",
    recipient: "领取人",
    weight: "分配权重",
    email: "Email",
    weightHint: "权重为 0 表示不参与自动分配。",
    dropEnabled: "领取后自动掉库",
    dropDescription: "无跟进记录时自动掉库并重新分配",
    dropOff: "关闭",
    dropOn: "开启",
    minutes: "分钟",
    saved: "已保存，新的渠道线索将按规则分配",
    discarded: "未保存的配置已取消",
    savedRule: "规则已加入草稿",
    deletedDraft: "规则已从草稿删除",
    weightChanged: "权重已更新为 {value}",
    noGroups: "暂无可用小组",
    editRule: "编辑分组规则",
    newRule: "新增分组规则",
    allBusinessLines: "全部业务线",
    demoLead1: "Ethan",
    demoLead2: "Friend3143",
    demoLead3: "Noah",
    stage1: "待外呼",
    stage2: "已接通 · 待预约",
    stage3: "暂不跟进"
  },
  en: {
    brand: "Dino CRM",
    brandSub: "Sales Management",
    navGroup: "Sales Management",
    navSales: "Sales Center",
    crumb: "Dino CRM / Sales Management / Sales Center",
    pageTitle: "Sales Center",
    accountName: "Huhaihao",
    accountRole: "Business Line Admin",
    leadTitle: "My Follow-ups",
    leadSubtitle: "Recently updated leads",
    settings: "Assignment & Auto-release",
    leadPool: "Lead Pool",
    myLeads: "My Follow-ups",
    paid: "Paid",
    user: "Student",
    businessLine: "Business Line",
    source: "Channel",
    owner: "Current CC",
    stage: "Stage",
    modalTitle: "Assignment & Auto-release",
    lineLabel: "Business Line",
    rulesTab: "Group Rules",
    weightsTab: "Sales Weights",
    dropTab: "Auto-release",
    groupRules: "Channel to Group",
    addRule: "Add Rule",
    channel: "Channel",
    targetGroup: "Target Group",
    receiverStatus: "Receivers",
    status: "Enabled",
    actions: "Actions",
    edit: "Edit",
    delete: "Delete",
    saveRule: "Save Rule",
    cancelRule: "Cancel",
    cancel: "Cancel",
    save: "Save",
    close: "Close",
    available: "Available",
    noReceiver: "No receivers",
    noRules: "No group rules",
    noRulesHint: "New leads will first route to the selected group after setup.",
    selectChannel: "Select channel",
    selectGroup: "Select target group",
    duplicateChannel: "This channel already has a target group.",
    requiredError: "Select a channel and target group.",
    noReceiverHint: "This group has no receiver. New leads will enter its group pool.",
    deleteConfirm: "Delete this rule?",
    confirmDelete: "Delete",
    keepRule: "Keep",
    weightsTitle: "Lead Allocation Ratio",
    recipient: "Assignee",
    weight: "Weight",
    email: "Email",
    weightHint: "A weight of 0 excludes the person from automatic assignment.",
    dropEnabled: "Auto-release after assignment",
    dropDescription: "Release without follow-up and reassign",
    dropOff: "Off",
    dropOn: "On",
    minutes: "minutes",
    saved: "Saved. New channel leads will follow these rules.",
    discarded: "Unsaved changes were discarded.",
    savedRule: "Rule added to draft",
    deletedDraft: "Rule removed from draft",
    weightChanged: "Weight updated to {value}",
    noGroups: "No groups available",
    editRule: "Edit group rule",
    newRule: "Add group rule",
    allBusinessLines: "All Business Lines",
    demoLead1: "Ethan",
    demoLead2: "Friend3143",
    demoLead3: "Noah",
    stage1: "To call",
    stage2: "Connected · Needs booking",
    stage3: "Paused"
  }
};

const LINES = [
  { id: "TH", zh: "泰国业务线", en: "Thailand Business Line" },
  { id: "MY", zh: "马来西亚业务线", en: "Malaysia Business Line" }
];

const GROUPS = {
  TH: [
    { id: "th_g1", zh: "泰国业务线 / 泰国一组", nameZh: "泰国一组", nameEn: "Thailand Group 1", members: ["sinhoong.tan", "tracy.tam"] },
    { id: "th_g2", zh: "泰国业务线 / 泰国二组", nameZh: "泰国二组", nameEn: "Thailand Group 2", members: ["pimnara", "pimmada"] },
    { id: "th_g3", zh: "泰国业务线 / 泰国三组", nameZh: "泰国三组", nameEn: "Thailand Group 3", members: [] }
  ],
  MY: [
    { id: "my_g1", zh: "马来西亚业务线 / 马来西亚一组", nameZh: "马来西亚一组", nameEn: "Malaysia Group 1", members: ["carmens.sam", "jiawei.loh"] },
    { id: "my_g2", zh: "马来西亚业务线 / 马来西亚二组", nameZh: "马来西亚二组", nameEn: "Malaysia Group 2", members: ["xiaoqian.tan", "joanna.loh"] }
  ]
};

const CHANNELS = {
  TH: [
    { id: "th_tt", code: "TH-TT-LF", zh: "TikTok LeadForm TH", en: "TikTok LeadForm TH" },
    { id: "th_fb", code: "TH-FB-LF", zh: "Facebook Lead Form TH", en: "Facebook Lead Form TH" },
    { id: "th_app", code: "TH-APP", zh: "App Store / Google Play", en: "App Store / Google Play" },
    { id: "th_google", code: "TH-GOOGLE", zh: "Google", en: "Google" },
    { id: "th_organic", code: "TH-ORGANIC", zh: "自然流量", en: "Organic" },
    { id: "th_line", code: "TH-LINE", zh: "LINE", en: "LINE" }
  ],
  MY: [
    { id: "my_fb", code: "MY-FB-LF", zh: "Facebook Lead Form MY", en: "Facebook Lead Form MY" },
    { id: "my_tt", code: "MY-TT-LF", zh: "TikTok LeadForm MY", en: "TikTok LeadForm MY" },
    { id: "my_app", code: "MY-APP", zh: "App Store / Google Play", en: "App Store / Google Play" },
    { id: "my_organic", code: "MY-ORGANIC", zh: "自然流量", en: "Organic" }
  ]
};

const WEIGHTS = {
  TH: [
    { name: "sinhoong.tan", email: "sinhoong.tan@dinoai.ai", weight: 4 },
    { name: "tracy.tam", email: "tracy.tam@dinoai.ai", weight: 4 },
    { name: "pimnara", email: "pimnara@dinoai.ai", weight: 3 },
    { name: "pimmada", email: "pimmada@dinoai.ai", weight: 3 },
    { name: "prasong.boonmak", email: "prasong.boonmak@dinoai.ai", weight: 0 }
  ],
  MY: [
    { name: "carmens.sam", email: "carmens.sam@dinoai.ai", weight: 4 },
    { name: "jiawei.loh", email: "jiawei.loh@dinoai.ai", weight: 3 },
    { name: "xiaoqian.tan", email: "xiaoqian.tan@dinoai.ai", weight: 3 },
    { name: "joanna.loh", email: "joanna.loh@dinoai.ai", weight: 0 }
  ]
};

const persisted = {
  TH: {
    rules: [
      { id: "rule_th_tt", channelId: "th_tt", groupId: "th_g1", enabled: true },
      { id: "rule_th_fb", channelId: "th_fb", groupId: "th_g2", enabled: true },
      { id: "rule_th_app", channelId: "th_app", groupId: "th_g3", enabled: true }
    ],
    weights: clone(WEIGHTS.TH),
    drop: { enabled: true, minutes: 7200 }
  },
  MY: {
    rules: [
      { id: "rule_my_fb", channelId: "my_fb", groupId: "my_g2", enabled: true },
      { id: "rule_my_tt", channelId: "my_tt", groupId: "my_g1", enabled: false }
    ],
    weights: clone(WEIGHTS.MY),
    drop: { enabled: false, minutes: 7200 }
  }
};

let current = clone(persisted);
let draft = clone(persisted);
let lang = localStorage.getItem("channelRoutingLang") === "en" ? "en" : "zh";
let modalOpen = true;
let activeTab = "rules";
let lineId = "TH";
let forms = { TH: null, MY: null };
let deleteConfirmId = null;
let toastTimer = null;

function clone(value) {
  return JSON.parse(JSON.stringify(value));
}

function copy() {
  return COPY[lang];
}

function lineName(line) {
  return line[lang] || line.zh;
}

function groupName(group) {
  return lang === "zh" ? group.nameZh : group.nameEn;
}

function groupPath(group) {
  if (lang === "zh") return group.zh;
  const line = LINES.find((item) => item.id === lineId);
  return `${lineName(line)} / ${group.nameEn}`;
}

function channel(id) {
  return CHANNELS[lineId].find((item) => item.id === id);
}

function channelName(item) {
  return item ? item[lang] || item.zh : "";
}

function activeMembers(group) {
  return group.members.filter((name) => {
    const member = draft[lineId].weights.find((item) => item.name === name);
    return member && member.weight > 0;
  });
}

function hasDuplicate(channelId, ruleId, targetLine = lineId) {
  return draft[targetLine].rules.some((rule) => rule.channelId === channelId && rule.id !== ruleId);
}

function showToast(message, isError = false) {
  const node = document.getElementById("toast");
  node.textContent = message;
  node.className = `toast show${isError ? " error" : ""}`;
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => {
    node.className = "toast";
  }, 2600);
}

function setLang(next) {
  if (lang === next) return;
  lang = next;
  localStorage.setItem("channelRoutingLang", lang);
  document.documentElement.lang = lang === "zh" ? "zh-CN" : "en";
  render();
}

function openSettings() {
  draft = clone(current);
  forms = { TH: null, MY: null };
  deleteConfirmId = null;
  modalOpen = true;
  activeTab = "rules";
  render();
}

function closeSettings(showDiscard = true) {
  draft = clone(current);
  forms = { TH: null, MY: null };
  deleteConfirmId = null;
  modalOpen = false;
  render();
  if (showDiscard) showToast(copy().discarded);
}

function saveSettings() {
  if (!commitAllRuleForms()) return;
  current = clone(draft);
  modalOpen = false;
  forms = { TH: null, MY: null };
  deleteConfirmId = null;
  render();
  showToast(copy().saved);
}

function setTab(tab) {
  activeTab = tab;
  deleteConfirmId = null;
  render();
}

function setLine(value) {
  lineId = value;
  deleteConfirmId = null;
  render();
}

function startRule(rule = null) {
  forms[lineId] = rule
    ? { mode: "edit", id: rule.id, channelId: rule.channelId, groupId: rule.groupId, error: "" }
    : { mode: "add", id: null, channelId: "", groupId: "", error: "" };
  deleteConfirmId = null;
  render();
}

function cancelRule() {
  forms[lineId] = null;
  render();
}

function updateFormField(field, value) {
  const form = forms[lineId];
  if (!form) return;
  form[field] = value;
  form.error = "";
  render();
}

function commitRuleForm(targetLine, focusError = false) {
  const form = forms[targetLine];
  if (!form) return true;
  if (!form.channelId || !form.groupId) {
    form.error = copy().requiredError;
    if (focusError) {
      modalOpen = true;
      lineId = targetLine;
      activeTab = "rules";
      render();
    }
    return false;
  }
  if (hasDuplicate(form.channelId, form.id, targetLine)) {
    form.error = copy().duplicateChannel;
    if (focusError) {
      modalOpen = true;
      lineId = targetLine;
      activeTab = "rules";
      render();
    }
    return false;
  }
  if (form.mode === "edit") {
    const row = draft[targetLine].rules.find((rule) => rule.id === form.id);
    row.channelId = form.channelId;
    row.groupId = form.groupId;
  } else {
    draft[targetLine].rules.push({
      id: `rule_${targetLine}_${Date.now()}_${draft[targetLine].rules.length}`,
      channelId: form.channelId,
      groupId: form.groupId,
      enabled: true
    });
  }
  forms[targetLine] = null;
  return true;
}

function commitAllRuleForms() {
  return LINES.every((line) => commitRuleForm(line.id, true));
}

function saveRule() {
  if (!commitRuleForm(lineId, true)) return;
  render();
  showToast(copy().savedRule);
}

function toggleRule(id) {
  const rule = draft[lineId].rules.find((item) => item.id === id);
  if (rule) {
    rule.enabled = !rule.enabled;
    render();
  }
}

function askDelete(id) {
  deleteConfirmId = id;
  render();
}

function cancelDelete() {
  deleteConfirmId = null;
  render();
}

function confirmDelete(id) {
  draft[lineId].rules = draft[lineId].rules.filter((rule) => rule.id !== id);
  deleteConfirmId = null;
  render();
  showToast(copy().deletedDraft);
}

function adjustWeight(index, delta) {
  const item = draft[lineId].weights[index];
  item.weight = Math.max(0, Math.min(999, Number(item.weight || 0) + delta));
  render();
  showToast(copy().weightChanged.replace("{value}", item.weight));
}

function setWeight(index, rawValue) {
  const item = draft[lineId].weights[index];
  item.weight = Math.max(0, Math.min(999, Number(rawValue || 0)));
  render();
}

function toggleDrop() {
  draft[lineId].drop.enabled = !draft[lineId].drop.enabled;
  render();
}

function adjustDrop(delta) {
  const value = Number(draft[lineId].drop.minutes || 0) + delta * 30;
  draft[lineId].drop.minutes = Math.max(30, Math.min(10080, value));
  render();
}

function setDropMinutes(value) {
  draft[lineId].drop.minutes = Math.max(30, Math.min(10080, Number(value || 30)));
  render();
}

function tabs() {
  return [
    ["rules", copy().rulesTab],
    ["weights", copy().weightsTab],
    ["drop", copy().dropTab]
  ];
}

function renderShell() {
  const t = copy();
  return `
    <div class="app-shell">
      <aside class="sidebar">
        <div class="brand">
          <div class="brand-mark">D</div>
          <div><strong>${t.brand}</strong><span>${t.brandSub}</span></div>
        </div>
        <div class="nav-label">${t.navGroup}</div>
        <div class="nav-item active"><span class="nav-icon">S</span><span>${t.navSales}</span></div>
      </aside>
      <div class="workspace">
        <header class="topbar">
          <div>
            <div class="crumb">${t.crumb}</div>
            <h1>${t.pageTitle}</h1>
          </div>
          <div class="top-actions">
            <div class="lang-switch" aria-label="Language">
              <button class="${lang === "zh" ? "active" : ""}" data-lang="zh">中</button>
              <button class="${lang === "en" ? "active" : ""}" data-lang="en">EN</button>
            </div>
            <button class="btn" data-action="open-settings">${t.settings}</button>
            <div class="account">
              <div class="avatar">H</div>
              <div><strong>${t.accountName}</strong><span>${t.accountRole}</span></div>
            </div>
          </div>
        </header>
        <main class="content">
          <section class="workspace-card">
            <div class="workspace-toolbar">
              <div><h2>${t.leadTitle}</h2><p>${t.leadSubtitle}</p></div>
            </div>
            <div class="tabs">
              <span class="tab">${t.leadPool}</span>
              <span class="tab active">${t.myLeads}</span>
              <span class="tab">${t.paid}</span>
            </div>
            <table class="lead-table">
              <thead>
                <tr><th>${t.user}</th><th>${t.businessLine}</th><th>${t.source}</th><th>${t.owner}</th><th>${t.stage}</th></tr>
              </thead>
              <tbody>
                <tr><td>${t.demoLead1}</td><td>${lineName(LINES[0])}</td><td>TikTok LeadForm TH</td><td>sinhoong.tan</td><td><span class="tag">${t.stage1}</span></td></tr>
                <tr><td>${t.demoLead2}</td><td>${lineName(LINES[0])}</td><td>Facebook Lead Form TH</td><td>pimmada</td><td><span class="tag">${t.stage2}</span></td></tr>
                <tr><td>${t.demoLead3}</td><td>${lineName(LINES[1])}</td><td>Facebook Lead Form MY</td><td>xiaoqian.tan</td><td><span class="tag">${t.stage3}</span></td></tr>
              </tbody>
            </table>
          </section>
        </main>
      </div>
    </div>`;
}

function renderRules() {
  const t = copy();
  const form = forms[lineId];
  const rules = draft[lineId].rules;
  const channels = CHANNELS[lineId];
  const groups = GROUPS[lineId];
  const selectedGroup = form ? groups.find((group) => group.id === form.groupId) : null;
  const showNoReceiverHint = selectedGroup && activeMembers(selectedGroup).length === 0;
  return `
    <div class="section-toolbar">
      <h3>${t.groupRules}</h3>
      <button class="btn primary small" data-action="add-rule">${t.addRule}</button>
    </div>
    ${form ? `
      <div class="rule-form">
        <div class="field-control">
          <label for="channel-select">${t.channel}</label>
          <select class="select" id="channel-select" data-field="channelId">
            <option value="">${t.selectChannel}</option>
            ${channels.map((item) => `<option value="${item.id}" ${form.channelId === item.id ? "selected" : ""}>${channelName(item)} · ${item.code}</option>`).join("")}
          </select>
        </div>
        <div class="field-control">
          <label for="group-select">${t.targetGroup}</label>
          <select class="select" id="group-select" data-field="groupId" ${groups.length ? "" : "disabled"}>
            <option value="">${groups.length ? t.selectGroup : t.noGroups}</option>
            ${groups.map((group) => `<option value="${group.id}" ${form.groupId === group.id ? "selected" : ""}>${groupPath(group)}</option>`).join("")}
          </select>
        </div>
        <div class="form-actions">
          <button class="btn primary small" data-action="save-rule">${t.saveRule}</button>
          <button class="btn small" data-action="cancel-rule">${t.cancelRule}</button>
        </div>
        ${form.error ? `<div class="field-error">${form.error}</div>` : ""}
        ${showNoReceiverHint ? `<div class="form-hint">${t.noReceiverHint}</div>` : ""}
      </div>` : ""}
    ${rules.length ? `
      <div class="config-table">
        <table>
          <thead><tr><th>${t.channel}</th><th>${t.targetGroup}</th><th>${t.receiverStatus}</th><th>${t.status}</th><th>${t.actions}</th></tr></thead>
          <tbody>
            ${rules.map((rule) => {
              const ch = channels.find((item) => item.id === rule.channelId);
              const group = groups.find((item) => item.id === rule.groupId);
              const receiverCount = group ? activeMembers(group).length : 0;
              const deleting = deleteConfirmId === rule.id;
              return `<tr>
                <td><span class="channel-name">${channelName(ch)}</span><span class="channel-code">${ch ? ch.code : ""}</span></td>
                <td>${group ? groupPath(group) : "—"}</td>
                <td><span class="receiver-state ${receiverCount ? "" : "warning"}">${receiverCount ? t.available : t.noReceiver}</span></td>
                <td><button class="toggle ${rule.enabled ? "on" : ""}" role="switch" aria-checked="${rule.enabled}" aria-label="${t.status}" data-rule-toggle="${rule.id}"></button></td>
                <td>
                  ${deleting ? `
                    <span class="delete-confirm">
                      <span>${t.deleteConfirm}</span>
                      <button class="link-btn danger" data-confirm-delete="${rule.id}">${t.confirmDelete}</button>
                      <button class="link-btn" data-cancel-delete="${rule.id}">${t.keepRule}</button>
                    </span>` : `
                    <span class="row-actions">
                      <button class="link-btn" data-edit-rule="${rule.id}">${t.edit}</button>
                      <button class="link-btn danger" data-delete-rule="${rule.id}">${t.delete}</button>
                    </span>`}
                </td>
              </tr>`;
            }).join("")}
          </tbody>
        </table>
      </div>` : `
      <div class="empty-state">
        <strong>${t.noRules}</strong>
        <span>${t.noRulesHint}</span>
      </div>`}`;
}

function renderWeights() {
  const t = copy();
  return `
    <div class="section-toolbar">
      <h3>${t.weightsTitle}</h3>
    </div>
    <div class="config-table">
      <table>
        <thead><tr><th>${t.recipient}</th><th>${t.weight}</th><th>${t.email}</th></tr></thead>
        <tbody>
          ${draft[lineId].weights.map((item, index) => `
            <tr>
              <td>${item.name}</td>
              <td>
                <span class="weight-stepper">
                  <button data-weight-minus="${index}" aria-label="Decrease">−</button>
                  <input type="number" min="0" max="999" value="${item.weight}" data-weight-input="${index}" aria-label="${t.weight}">
                  <button data-weight-plus="${index}" aria-label="Increase">+</button>
                </span>
              </td>
              <td class="muted">${item.email}</td>
            </tr>`).join("")}
        </tbody>
      </table>
    </div>
    <p class="muted">${t.weightHint}</p>`;
}

function renderDrop() {
  const t = copy();
  const drop = draft[lineId].drop;
  return `
    <div class="drop-card">
      <div class="drop-row">
        <div class="drop-copy">
          <strong>${t.dropEnabled}</strong>
          <span>${t.dropDescription}</span>
        </div>
        <button class="toggle ${drop.enabled ? "on" : ""}" role="switch" aria-checked="${drop.enabled}" aria-label="${t.dropEnabled}" data-action="toggle-drop"></button>
        <span class="muted">${drop.enabled ? t.dropOn : t.dropOff}</span>
      </div>
      <div class="drop-row">
        <div class="drop-copy">
          <strong>${t.dropDescription}</strong>
        </div>
        <div class="minute-control">
          <button class="btn small" data-action="drop-minus" ${drop.enabled ? "" : "disabled"}>−</button>
          <input class="number-input" type="number" min="30" max="10080" value="${drop.minutes}" data-drop-input aria-label="${t.minutes}" ${drop.enabled ? "" : "disabled"}>
          <button class="btn small" data-action="drop-plus" ${drop.enabled ? "" : "disabled"}>+</button>
          <span>${t.minutes}</span>
        </div>
      </div>
    </div>`;
}

function renderModal() {
  const t = copy();
  const activeLine = LINES.find((line) => line.id === lineId);
  const body = activeTab === "rules" ? renderRules() : activeTab === "weights" ? renderWeights() : renderDrop();
  return `
    <div class="modal-layer" role="presentation">
      <button class="modal-scrim" data-action="close-settings" aria-label="${t.close}"></button>
      <section class="settings-modal" role="dialog" aria-modal="true" aria-labelledby="settings-title">
        <header class="modal-head">
          <h2 id="settings-title">${t.modalTitle}</h2>
          <div class="modal-head-actions">
            <div class="lang-switch" aria-label="Language">
              <button class="${lang === "zh" ? "active" : ""}" data-lang="zh">中</button>
              <button class="${lang === "en" ? "active" : ""}" data-lang="en">EN</button>
            </div>
            <button class="close-btn" data-action="close-settings" aria-label="${t.close}">×</button>
          </div>
        </header>
        <div class="line-row">
          <label for="line-select">${t.lineLabel}</label>
          <select class="select" id="line-select" data-line-select>
            ${LINES.map((line) => `<option value="${line.id}" ${line.id === lineId ? "selected" : ""}>${lineName(line)}</option>`).join("")}
          </select>
        </div>
        <nav class="settings-tabs" aria-label="${t.modalTitle}">
          ${tabs().map(([id, label]) => `<button class="settings-tab ${activeTab === id ? "active" : ""}" data-tab="${id}">${label}</button>`).join("")}
        </nav>
        <div class="modal-body">${body}</div>
        <footer class="modal-foot">
          <button class="btn" data-action="cancel-settings">${t.cancel}</button>
          <button class="btn primary" data-action="save-settings">${t.save}</button>
        </footer>
      </section>
    </div>`;
}

function render() {
  document.documentElement.lang = lang === "zh" ? "zh-CN" : "en";
  document.title = `Dino CRM · ${copy().pageTitle}`;
  document.getElementById("app").innerHTML = renderShell() + (modalOpen ? renderModal() : "");
}

document.addEventListener("click", (event) => {
  const target = event.target.closest("button, select");
  if (!target) return;

  if (target.dataset.lang) setLang(target.dataset.lang);
  if (target.dataset.action === "open-settings") openSettings();
  if (target.dataset.action === "close-settings") closeSettings(true);
  if (target.dataset.action === "cancel-settings") closeSettings(true);
  if (target.dataset.action === "save-settings") saveSettings();
  if (target.dataset.tab) setTab(target.dataset.tab);
  if (target.dataset.action === "add-rule") startRule();
  if (target.dataset.action === "cancel-rule") cancelRule();
  if (target.dataset.action === "save-rule") saveRule();
  if (target.dataset.ruleToggle) toggleRule(target.dataset.ruleToggle);
  if (target.dataset.editRule) startRule(draft[lineId].rules.find((rule) => rule.id === target.dataset.editRule));
  if (target.dataset.deleteRule) askDelete(target.dataset.deleteRule);
  if (target.dataset.cancelDelete) cancelDelete();
  if (target.dataset.confirmDelete) confirmDelete(target.dataset.confirmDelete);
  if (target.dataset.weightMinus) adjustWeight(Number(target.dataset.weightMinus), -1);
  if (target.dataset.weightPlus) adjustWeight(Number(target.dataset.weightPlus), 1);
  if (target.dataset.action === "toggle-drop") toggleDrop();
  if (target.dataset.action === "drop-minus") adjustDrop(-1);
  if (target.dataset.action === "drop-plus") adjustDrop(1);
});

document.addEventListener("change", (event) => {
  const target = event.target;
  if (target.matches("[data-line-select]")) setLine(target.value);
  if (target.matches("[data-field]")) updateFormField(target.dataset.field, target.value);
  if (target.matches("[data-weight-input]")) setWeight(Number(target.dataset.weightInput), target.value);
  if (target.matches("[data-drop-input]")) setDropMinutes(target.value);
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && modalOpen) closeSettings(true);
});

render();
