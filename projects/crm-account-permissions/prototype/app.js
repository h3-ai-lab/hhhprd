const state = {
  route: "system",
  systemTab: "organization",
  selectedOrg: "r1",
  selectedOrgSearch: "",
  memberFilters: { search: "", line: "", orgId: "", roleId: "", status: "" },
  memberSearchDraft: "",
  salesTab: "pool",
  salesOrg: "r1",
  salesSearch: "",
  salesStage: "",
  salesStatus: "",
  dashboardTab: "cohort",
  dashboardOrg: "r1",
  dashboardCC: "",
  dashboardDate: "",
  logModule: "",
  logs: [
    { time: "2026-11-11 16:24:08", module: "组织架构", action: "新增", target: "越南业务线 / 1区 / A部 / A1组", actor: "lin.yue@dinoai.ai" },
    { time: "2026-11-11 16:20:31", module: "成员账号", action: "编辑", target: "林悦 · 数据授权", actor: "chen.ming@dinoai.ai" },
    { time: "2026-11-11 15:48:12", module: "组织架构", action: "编辑", target: "越南业务线 / 1区 / B部 · 负责人", actor: "lin.yue@dinoai.ai" },
    { time: "2026-11-11 14:36:09", module: "角色权限", action: "编辑", target: "区域管理员 · 管理看板查看", actor: "admin@dinoai.ai" },
    { time: "2026-11-11 11:17:43", module: "成员账号", action: "新增", target: "周宁 · A2组", actor: "lin.yue@dinoai.ai" }
  ]
};

const roles = [
  { id: "role_super", name: "超级管理员", desc: "全部功能与全局组织数据", builtin: true, users: 1 },
  { id: "role_line", name: "业务线管理员", desc: "业务线组织、成员、销售和看板管理", builtin: false, users: 2 },
  { id: "role_region", name: "区域管理员兼销售", desc: "区域管理、线索跟进与转派", builtin: false, users: 3 },
  { id: "role_sales", name: "销售", desc: "本人线索外呼与跟进", builtin: false, users: 28 }
];

let orgs = [
  { id: "vn", name: "越南业务线", line: "越南", level: 1, parentId: null, leaderId: "m_line", status: "启用" },
  { id: "r1", name: "1区", line: "越南", level: 2, parentId: "vn", leaderId: "m_region", status: "启用" },
  { id: "a", name: "A部", line: "越南", level: 3, parentId: "r1", leaderId: "m_region", status: "启用" },
  { id: "a1", name: "A1组", line: "越南", level: 4, parentId: "a", leaderId: "m_s1", status: "启用" },
  { id: "a2", name: "A2组", line: "越南", level: 4, parentId: "a", leaderId: "m_s2", status: "启用" },
  { id: "b", name: "B部", line: "越南", level: 3, parentId: "r1", leaderId: "m_region", status: "启用" },
  { id: "b1", name: "B1组", line: "越南", level: 4, parentId: "b", leaderId: "m_s3", status: "启用" },
  { id: "b2", name: "B2组", line: "越南", level: 4, parentId: "b", leaderId: "m_s4", status: "启用" },
  { id: "r2", name: "2区", line: "越南", level: 2, parentId: "vn", leaderId: "m_u3", status: "启用" },
  { id: "c", name: "C部", line: "越南", level: 3, parentId: "r2", leaderId: "m_u3", status: "启用" },
  { id: "c1", name: "C1组", line: "越南", level: 4, parentId: "c", leaderId: "m_s5", status: "启用" }
];

let members = [
  { id: "m_super", name: "系统管理员", email: "admin@dinoai.ai", userType: "其他", roleId: "role_super", line: "全部业务线", scope: "global", orgIds: [], primaryOrgId: "vn", status: "启用", lastLogin: "2026-11-11 16:31:09" },
  { id: "m_line", name: "陈鸣", email: "chen.ming@dinoai.ai", userType: "其他", roleId: "role_line", line: "越南", scope: "line", orgIds: [], primaryOrgId: "vn", status: "启用", lastLogin: "2026-11-11 16:18:42" },
  { id: "m_region", name: "林悦", email: "lin.yue@dinoai.ai", userType: "CC", roleId: "role_region", line: "越南", scope: "nodes", orgIds: ["r1"], primaryOrgId: "r1", status: "启用", lastLogin: "2026-11-11 16:22:17" },
  { id: "m_u3", name: "吴越", email: "wu.yue@dinoai.ai", userType: "其他", roleId: "role_region", line: "越南", scope: "nodes", orgIds: ["r2"], primaryOrgId: "r2", status: "启用", lastLogin: "2026-11-11 15:42:10" },
  { id: "m_s1", name: "宋佳", email: "song.jia@dinoai.ai", userType: "CC", roleId: "role_sales", line: "越南", scope: "self", orgIds: [], primaryOrgId: "a1", status: "启用", lastLogin: "2026-11-11 16:27:53" },
  { id: "m_s2", name: "周宁", email: "zhou.ning@dinoai.ai", userType: "CC", roleId: "role_sales", line: "越南", scope: "self", orgIds: [], primaryOrgId: "a2", status: "启用", lastLogin: "2026-11-11 16:02:18" },
  { id: "m_s3", name: "何安", email: "he.an@dinoai.ai", userType: "CC", roleId: "role_sales", line: "越南", scope: "self", orgIds: [], primaryOrgId: "b1", status: "启用", lastLogin: "2026-11-11 15:59:06" },
  { id: "m_s4", name: "陆晨", email: "lu.chen@dinoai.ai", userType: "CC", roleId: "role_sales", line: "越南", scope: "self", orgIds: [], primaryOrgId: "b2", status: "启用", lastLogin: "2026-11-11 15:50:33" },
  { id: "m_s5", name: "沈青", email: "shen.qing@dinoai.ai", userType: "CC", roleId: "role_sales", line: "越南", scope: "self", orgIds: [], primaryOrgId: "c1", status: "启用", lastLogin: "2026-11-11 15:38:44" }
];

const leads = [
  { id: "LD-20261111-0181", name: "Nguyen Minh Anh", intent: "有意向", status: "已注册", type: "正式用户", age: "成人", course: "L3", account: "anh.nguyen@mail.vn", source: "TikTok · 越南英语提升", orgId: "a1", ownerId: "m_s1", stage: "跟进中", calls: 3, connected: 2, paid: false, phone: "**** 0186", register: "2026-11-11 09:32" },
  { id: "LD-20261111-0179", name: "Tran Bao Chau", intent: "有意向", status: "已注册", type: "正式用户", age: "青少年", course: "L2", account: "chau.tran@mail.vn", source: "Meta · 体验课", orgId: "a1", ownerId: "", stage: "待领取", calls: 0, connected: 0, paid: false, phone: "**** 0281", register: "2026-11-11 09:18" },
  { id: "LD-20261111-0173", name: "Le Thu Ha", intent: "未填写", status: "已注册", type: "正式用户", age: "成人", course: "L1", account: "ha.le@mail.vn", source: "Messenger · 在线咨询", orgId: "a2", ownerId: "m_s2", stage: "已预约", calls: 4, connected: 3, paid: true, phone: "**** 0366", register: "2026-11-11 08:56" },
  { id: "LD-20261111-0168", name: "Pham Gia Linh", intent: "有意向", status: "已注册", type: "正式用户", age: "成人", course: "L4", account: "linh.pham@mail.vn", source: "离屏 · A部活动", orgId: "a1", ownerId: "", stage: "待领取", calls: 0, connected: 0, paid: false, phone: "**** 0412", register: "2026-11-11 08:21" },
  { id: "LD-20261111-0154", name: "Vo Minh Khang", intent: "有意向", status: "已付费", type: "正式用户", age: "成人", course: "L3", account: "khang.vo@mail.vn", source: "Google · Search", orgId: "b1", ownerId: "m_s3", stage: "已付费", calls: 2, connected: 2, paid: true, phone: "**** 0573", register: "2026-11-10 21:08" },
  { id: "LD-20261111-0148", name: "Do Ngoc Mai", intent: "无意向", status: "已注册", type: "正式用户", age: "青少年", course: "L2", account: "mai.do@mail.vn", source: "TikTok · B1组", orgId: "b1", ownerId: "m_s3", stage: "暂不跟进", calls: 2, connected: 1, paid: false, phone: "**** 0649", register: "2026-11-10 20:46" },
  { id: "LD-20261111-0141", name: "Bui Anh Tuan", intent: "未填写", status: "已注册", type: "正式用户", age: "成人", course: "L1", account: "tuan.bui@mail.vn", source: "B2组 · WhatsApp", orgId: "b2", ownerId: "m_s4", stage: "跟进中", calls: 1, connected: 1, paid: false, phone: "**** 0731", register: "2026-11-10 19:23" },
  { id: "LD-20261111-0138", name: "Hoang Kim Ngan", intent: "有意向", status: "已注册", type: "正式用户", age: "成人", course: "L3", account: "ngan.hoang@mail.vn", source: "1区活动页", orgId: "r1", ownerId: "m_region", stage: "已预约", calls: 3, connected: 2, paid: true, phone: "**** 0854", register: "2026-11-10 18:59" },
  { id: "LD-20261111-0127", name: "Dang Quoc Huy", intent: "有意向", status: "已注册", type: "正式用户", age: "成人", course: "L4", account: "huy.dang@mail.vn", source: "B部转派", orgId: "b", ownerId: "m_region", stage: "跟进中", calls: 2, connected: 1, paid: false, phone: "**** 0962", register: "2026-11-10 17:41" },
  { id: "LD-20261111-0119", name: "Truong My Linh", intent: "有意向", status: "已注册", type: "正式用户", age: "青少年", course: "L2", account: "linh.truong@mail.vn", source: "C1组 · 体验课", orgId: "c1", ownerId: "m_s5", stage: "跟进中", calls: 2, connected: 1, paid: false, phone: "**** 1048", register: "2026-11-10 16:18" }
];

const el = {
  content: document.getElementById("content"),
  sidebar: document.getElementById("sidebar"),
  pageTitle: document.getElementById("page-title"),
  breadcrumb: document.getElementById("breadcrumb"),
  modalLayer: document.getElementById("modal-layer"),
  modal: document.getElementById("modal"),
  toast: document.getElementById("toast")
};

const icon = (name) => `<svg aria-hidden="true"><use href="#i-${name}"></use></svg>`;
const roleName = (id) => roles.find((role) => role.id === id)?.name ?? "未配置";
const memberName = (id) => members.find((member) => member.id === id)?.name ?? "未设置";
const orgById = (id) => orgs.find((org) => org.id === id);
const childrenOf = (id) => orgs.filter((org) => org.parentId === id);
const descendantsOf = (id) => {
  const output = [];
  const walk = (parentId) => childrenOf(parentId).forEach((child) => {
    output.push(child);
    walk(child.id);
  });
  walk(id);
  return output;
};
const subtreeIds = (id) => id ? [id, ...descendantsOf(id).map((org) => org.id)] : [];
const OPERATOR_SCOPE_ROOTS = ["r1"];
const operatorAllowedIds = () => new Set(OPERATOR_SCOPE_ROOTS.flatMap((id) => subtreeIds(id)));
const orgPath = (id) => {
  const parts = [];
  let current = orgById(id);
  while (current) {
    parts.unshift(current.name);
    current = current.parentId ? orgById(current.parentId) : null;
  }
  return parts.join(" / ") || "—";
};
const levelName = (level) => ({ 1: "国家", 2: "区", 3: "部", 4: "组" })[level] || "—";
const escapeHtml = (value = "") => String(value).replace(/[&<>"']/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[char]);
const memberOptions = (selectedId = "", onlyWithin = "") => {
  const allowed = new Set(subtreeIds(onlyWithin));
  return members
    .filter((member) => member.status === "启用" && allowed.has(member.primaryOrgId))
    .map((member) => `<option value="${member.id}" ${member.id === selectedId ? "selected" : ""}>${escapeHtml(member.name)} · ${escapeHtml(orgPath(member.primaryOrgId))}</option>`)
    .join("");
};
const orgOptions = (line = "", selected = "", allowRoot = true) => {
  const allowed = operatorAllowedIds();
  return orgs
  .filter((org) => allowed.has(org.id) && (!line || org.line === line) && (allowRoot || org.level > 1))
  .map((org) => `<option value="${org.id}" ${org.id === selected ? "selected" : ""}>${"　".repeat(org.level - 1)}${escapeHtml(org.name)} · ${levelName(org.level)}</option>`)
  .join("");
};

function orgParentOptions(editing) {
  const allowed = operatorAllowedIds();
  const descendantIds = new Set(editing ? descendantsOf(editing.id).map((org) => org.id) : []);
  return orgs
    .filter((org) => org.level < 4 && org.id !== editing?.id && !descendantIds.has(org.id)
      && (allowed.has(org.id) || org.id === editing?.parentId))
    .map((org) => `<option value="${org.id}" ${org.id === editing?.parentId ? "selected" : ""}>${"　".repeat(org.level - 1)}${escapeHtml(org.name)} · ${levelName(org.level)}</option>`)
    .join("");
}

function countMembers(orgId) {
  return members.filter((member) => member.primaryOrgId === orgId && member.status === "启用").length;
}

function scopeLabel(member) {
  if (member.scope === "self") return "本人数据";
  if (member.scope === "global") return "全部业务线";
  if (member.scope === "line") return "业务线全部";
  const names = member.orgIds.map((id) => orgById(id)?.name).filter(Boolean);
  return names.length ? `${names.join("、")}及下级` : "指定组织及下级";
}

function setChrome() {
  const configs = {
    system: ["系统管理 / 系统配置", "系统配置"],
    sales: ["销售管理 / 销售中心", "销售中心"],
    dashboard: ["业务中心 / 管理看板", "管理看板"]
  };
  const [crumb, title] = configs[state.route];
  el.breadcrumb.innerHTML = `Dino CRM <span>/</span> ${crumb.replace(" / ", " <span>/</span> ")}`;
  el.pageTitle.textContent = title;
  document.title = `Dino CRM · ${title}`;
  document.querySelectorAll(".nav-item").forEach((item) => item.classList.toggle("is-active", item.dataset.route === state.route));
}

function showToast(message) {
  el.toast.textContent = message;
  el.toast.classList.add("is-visible");
  clearTimeout(showToast.timer);
  showToast.timer = setTimeout(() => el.toast.classList.remove("is-visible"), 1900);
}

function openModal(html) {
  el.modal.innerHTML = html;
  el.modalLayer.classList.add("is-open");
  el.modalLayer.setAttribute("aria-hidden", "false");
}

function closeModal() {
  el.modalLayer.classList.remove("is-open");
  el.modalLayer.setAttribute("aria-hidden", "true");
}

function treeHtml(parentId = null, depth = 0) {
  const allowed = operatorAllowedIds();
  return childrenOf(parentId).filter((org) => org.id === "vn" || allowed.has(org.id)).map((org) => {
    const keyword = state.selectedOrgSearch.trim().toLowerCase();
    const matches = !keyword || orgPath(org.id).toLowerCase().includes(keyword);
    const childHtml = treeHtml(org.id, depth + 1);
    if (!matches && !childHtml) return "";
    return `<button class="tree-row ${state.selectedOrg === org.id ? "is-active" : ""}" style="--indent:${depth * 14}px" data-org-select="${org.id}">
      <span class="tree-dot"></span><span>${escapeHtml(org.name)}</span><span class="node-level">${levelName(org.level)}</span>
    </button>${childHtml}`;
  }).join("");
}

function renderSystemTabs() {
  const tabs = [
    ["organization", "组织架构"],
    ["members", "成员账号"],
    ["roles", "角色权限"],
    ["logs", "操作日志"]
  ];
  return `<div class="tabs">${tabs.map(([key, label]) => `<button class="tab ${state.systemTab === key ? "is-active" : ""}" data-system-tab="${key}">${label}</button>`).join("")}</div>`;
}

function renderOrganizationTab() {
  const selected = orgById(state.selectedOrg) ?? orgById("r1");
  const rows = selected ? [selected, ...descendantsOf(selected.id)] : orgs;
  return `<div class="org-layout">
    <aside class="side-panel">
      <div class="side-panel-title">组织架构</div>
      <input class="field tree-search" id="org-search" placeholder="搜索组织" value="${escapeHtml(state.selectedOrgSearch)}">
      <div class="org-tree">${treeHtml()}</div>
    </aside>
    <section>
      <div class="org-summary">
        <div><h2>${escapeHtml(selected?.name ?? "组织架构")}</h2><p>${escapeHtml(orgPath(selected?.id))} · ${selected?.status ?? ""}</p></div>
        <div class="toolbar-group">
          <button class="btn" data-action="edit-org" ${selected?.level === 1 ? "disabled" : ""}>${icon("edit")}编辑</button>
          <button class="btn primary" data-action="add-org" ${selected?.level >= 4 ? "disabled" : ""}>${icon("plus")}新增下级</button>
        </div>
      </div>
      <div class="table-wrap"><table>
        <thead><tr><th>组织名称</th><th>所属业务线</th><th>上级组织</th><th>层级</th><th>负责人</th><th>成员数</th><th>状态</th><th>操作</th></tr></thead>
        <tbody>${rows.map((org) => `<tr>
          <td><span class="primary-text">${escapeHtml(org.name)}</span><div class="secondary-text">${escapeHtml(orgPath(org.id))}</div></td>
          <td><span class="tag">${escapeHtml(org.line)}</span></td>
          <td>${org.parentId ? escapeHtml(orgById(org.parentId)?.name) : "—"}</td>
          <td>${levelName(org.level)}</td>
          <td>${escapeHtml(memberName(org.leaderId))}</td>
          <td>${countMembers(org.id)}</td>
          <td><span class="tag ${org.status === "启用" ? "green" : ""}">${org.status}</span></td>
          <td><button class="btn ghost" data-org-edit="${org.id}" ${org.level === 1 ? "disabled" : ""}>编辑</button></td>
        </tr>`).join("")}</tbody>
      </table></div>
    </section>
  </div>`;
}

function renderMembersTab() {
  const f = state.memberFilters;
  const allowed = operatorAllowedIds();
  const candidates = orgs.filter((org) => allowed.has(org.id) && (!f.line || org.line === f.line));
  const filtered = members.filter((member) => {
    const keyword = f.search.trim().toLowerCase();
    return allowed.has(member.primaryOrgId)
      && (!keyword || member.name.toLowerCase().includes(keyword) || member.email.toLowerCase().includes(keyword))
      && (!f.line || member.line === f.line)
      && (!f.orgId || subtreeIds(f.orgId).includes(member.primaryOrgId))
      && (!f.roleId || member.roleId === f.roleId)
      && (!f.status || member.status === f.status);
  });
  return `<div class="filters">
    <input class="field search-field" id="member-search" placeholder="按邮箱 / 昵称搜索" value="${escapeHtml(state.memberSearchDraft)}">
    <select class="select" id="member-line-filter"><option value="">全部业务线</option>${["越南","泰国"].map((line) => `<option ${f.line === line ? "selected" : ""}>${line}</option>`).join("")}</select>
    <select class="select" id="member-org-filter"><option value="">全部组织架构</option>${candidates.map((org) => `<option value="${org.id}" ${f.orgId === org.id ? "selected" : ""}>${"　".repeat(org.level - 1)}${escapeHtml(org.name)}</option>`).join("")}</select>
    <select class="select" id="member-role-filter"><option value="">全部角色</option>${roles.map((role) => `<option value="${role.id}" ${f.roleId === role.id ? "selected" : ""}>${role.name}</option>`).join("")}</select>
    <select class="select" id="member-status-filter"><option value="">全部状态</option>${["启用","停用"].map((status) => `<option ${f.status === status ? "selected" : ""}>${status}</option>`).join("")}</select>
    <div class="actions"><button class="btn" data-action="reset-member-filter">重置</button><button class="btn primary" data-action="search-members">${icon("search")}搜索</button><button class="btn" data-action="add-member">${icon("plus")}新增成员</button></div>
  </div>
  <div class="table-wrap"><table>
    <thead><tr><th>成员账号</th><th>姓名</th><th>人员类型</th><th>功能角色</th><th>数据授权</th><th>主组织</th><th>状态</th><th>最近登录</th><th>外呼能力</th><th>操作</th></tr></thead>
    <tbody>${filtered.map((member) => `<tr>
      <td>${escapeHtml(member.email)}</td>
      <td><div class="member-name"><span class="primary-text">${escapeHtml(member.name)}</span></div></td>
      <td><span class="tag ${member.userType === "CC" ? "blue" : ""}">${member.userType === "CC" ? "一线销售" : member.userType}</span></td>
      <td><span class="tag blue">${escapeHtml(roleName(member.roleId))}</span></td>
      <td><div class="role-line"><span>${escapeHtml(member.line)} · ${escapeHtml(scopeLabel(member))}</span><span class="secondary-text">${member.scope === "nodes" ? member.orgIds.map(orgPath).join("；") : ""}</span></div></td>
      <td><div class="path">${escapeHtml(orgPath(member.primaryOrgId))}</div></td>
      <td><span class="tag ${member.status === "启用" ? "green" : ""}">${member.status}</span></td>
      <td>${member.lastLogin || "—"}</td>
      <td>${member.userType === "CC" ? '<span class="tag blue">已绑定</span>' : "—"}</td>
      <td>${member.scope === "global" ? '<span class="secondary-text">系统内置</span>' : `<button class="btn ghost" data-member-edit="${member.id}">编辑成员</button>`}</td>
    </tr>`).join("") || '<tr><td colspan="10" class="secondary-text">暂无匹配成员</td></tr>'}</tbody>
  </table></div>`;
}

function renderRolesTab() {
  const modules = [
    ["管理看板", "查看", "查看", "查看", "无"],
    ["销售中心", "操作", "操作", "操作", "本人操作"],
    ["系统配置", "操作", "按范围操作", "按范围操作", "无"],
    ["成员账号", "操作", "按范围操作", "按范围操作", "无"],
    ["组织架构", "操作", "按范围操作", "按范围操作", "无"]
  ];
  return `<div class="toolbar"><div class="muted-note">成员只能绑定一个功能角色</div><button class="btn primary" data-action="add-role">${icon("plus")}新增角色</button></div>
  <div class="table-wrap"><table>
    <thead><tr><th>角色</th><th>职责说明</th><th>成员数</th><th>操作</th></tr></thead>
    <tbody>${roles.map((role) => `<tr><td><span class="primary-text">${role.name}</span> ${role.builtin ? '<span class="tag blue">内置</span>' : ""}</td><td>${role.desc}</td><td>${role.users}</td><td><button class="btn ghost" data-action="edit-role">编辑权限</button></td></tr>`).join("")}</tbody>
  </table></div>
  <div class="dashboard-panel" style="margin-top:16px">
    <div class="panel-title"><h2>权限矩阵</h2></div>
    <div class="table-wrap"><table><thead><tr><th>模块</th>${roles.map((role) => `<th>${role.name}</th>`).join("")}</tr></thead><tbody>
      ${modules.map((row) => `<tr><td>${row[0]}</td>${roles.map((_, index) => `<td>${row[index + 1]}</td>`).join("")}</tr>`).join("")}
    </tbody></table></div>
  </div>`;
}

function renderLogsTab() {
  const logs = state.logs.filter((log) => !state.logModule || log.module === state.logModule);
  return `<div class="filters">
    <select class="select" id="log-module-filter"><option value="">全部模块</option>${["组织架构","成员账号","角色权限"].map((module) => `<option ${state.logModule === module ? "selected" : ""}>${module}</option>`).join("")}</select>
    <input class="field search-field" placeholder="按操作人邮箱搜索">
    <input class="field" type="date" value="2026-11-01">
    <span class="secondary-text">至</span>
    <input class="field" type="date" value="2026-11-11">
    <div class="actions"><button class="btn">重置</button><button class="btn primary">${icon("search")}搜索</button></div>
  </div>
  <div class="table-wrap"><table><thead><tr><th>模块</th><th>操作行为</th><th>操作对象</th><th>操作人</th><th>操作时间</th></tr></thead>
    <tbody>${logs.map((log) => `<tr><td>${log.module}</td><td><span class="tag ${log.action === "新增" ? "green" : "blue"}">${log.action}</span></td><td>${escapeHtml(log.target)}</td><td>${escapeHtml(log.actor)}</td><td>${log.time}</td></tr>`).join("")}</tbody>
  </table></div>`;
}

function renderSystem() {
  const panels = {
    organization: renderOrganizationTab,
    members: renderMembersTab,
    roles: renderRolesTab,
    logs: renderLogsTab
  };
  el.content.innerHTML = `<section class="page-card">
    <div class="page-heading"><div class="section-title">系统配置</div></div>
    ${renderSystemTabs()}
    <div class="tab-panel">${panels[state.systemTab]()}</div>
  </section>`;
}

function allowedU2Orgs() {
  return subtreeIds("r1").map(orgById).filter(Boolean);
}

function renderSales() {
  const allowed = allowedU2Orgs();
  const selectedIds = new Set(subtreeIds(state.salesOrg));
  const rows = leads.filter((lead) => selectedIds.has(lead.orgId)
    && (!state.salesSearch || `${lead.name}${lead.account}${lead.id}`.toLowerCase().includes(state.salesSearch.toLowerCase()))
    && (!state.salesStage || lead.stage === state.salesStage)
    && (!state.salesStatus || lead.status === state.salesStatus)
    && (state.salesTab !== "pool" || !lead.ownerId)
    && (state.salesTab !== "follow" || !!lead.ownerId)
    && state.salesTab !== "calls");
  el.content.innerHTML = `<section class="page-card">
    <div class="page-heading"><div class="section-title">销售线索</div><button class="btn" data-action="sales-settings">${icon("filter")}分配与掉库设置</button></div>
    <div class="table-tabs">
      <button class="${state.salesTab === "pool" ? "is-active" : ""}" data-sales-tab="pool">公海 (${leads.filter((lead) => !lead.ownerId && subtreeIds("r1").includes(lead.orgId)).length})</button>
      <button class="${state.salesTab === "follow" ? "is-active" : ""}" data-sales-tab="follow">我的跟进 (${leads.filter((lead) => lead.ownerId && subtreeIds("r1").includes(lead.orgId)).length})</button>
      <button class="${state.salesTab === "calls" ? "is-active" : ""}" data-sales-tab="calls">通话记录</button>
    </div>
    <div class="filters">
      <input class="field search-field" id="sales-search" placeholder="搜索用户 ID / 姓名 / 登录账号" value="${escapeHtml(state.salesSearch)}">
      <select class="select"><option>越南</option></select>
      <select class="select" id="sales-org-filter"><option value="r1" ${state.salesOrg === "r1" ? "selected" : ""}>全部授权组织</option>${allowed.map((org) => `<option value="${org.id}" ${state.salesOrg === org.id ? "selected" : ""}>${"　".repeat(org.level - 2)}${escapeHtml(org.name)}</option>`).join("")}</select>
      <select class="select"><option>全部 CC</option>${members.filter((m) => m.userType === "CC" && allowed.some((org) => org.id === m.primaryOrgId)).map((m) => `<option>${m.name}</option>`).join("")}</select>
      <select class="select" id="sales-stage-filter"><option value="">全部跟进阶段</option>${["跟进中","已预约","已付费","暂不跟进","待领取"].map((stage) => `<option ${state.salesStage === stage ? "selected" : ""}>${stage}</option>`).join("")}</select>
      <select class="select" id="sales-status-filter"><option value="">全部用户状态</option>${["已注册","已付费"].map((status) => `<option ${state.salesStatus === status ? "selected" : ""}>${status}</option>`).join("")}</select>
      <div class="actions"><button class="btn" data-action="reset-sales">重置筛选</button><button class="btn">${icon("download")}下载数据</button></div>
    </div>
    <div class="table-wrap"><table>
      <thead><tr><th>用户 ID</th><th>学生姓名</th><th>购买意向</th><th>用户状态</th><th>用户类型</th><th>年龄段</th><th>课程等级</th><th>登录账号</th><th>渠道来源-落地页</th><th>国家</th><th>归属组织</th><th>预约外呼</th><th>注册时间</th><th>CC</th><th>跟进阶段</th><th>操作</th></tr></thead>
      <tbody>${rows.map((lead) => `<tr>
        <td><span class="primary-text">${lead.id}</span></td><td>${escapeHtml(lead.name)}</td><td><span class="tag ${lead.intent === "有意向" ? "green" : lead.intent === "无意向" ? "red" : ""}">${lead.intent}</span></td>
        <td><span class="tag ${lead.status === "已付费" ? "green" : "blue"}">${lead.status}</span></td><td>${lead.type}</td><td>${lead.age}</td><td>${lead.course}</td><td>${lead.account}</td><td>${lead.source}</td><td>越南</td>
        <td><span class="path">${escapeHtml(orgPath(lead.orgId))}</span></td><td><span class="tag">${lead.phone}</span></td><td>${lead.register}</td><td>${lead.ownerId ? escapeHtml(memberName(lead.ownerId)) : "—"}</td><td>${lead.stage}</td>
        <td>${!lead.ownerId ? `<button class="btn ghost" data-lead-assign="${lead.id}">分配</button>` : `<button class="btn ghost" data-action="view-lead">${icon("phone")}外呼</button>`}</td>
      </tr>`).join("") || `<tr><td colspan="16" class="secondary-text">当前筛选范围暂无线索</td></tr>`}</tbody>
    </table></div>
    <div class="muted-note" style="margin-top:10px">数据范围：1区及下级</div>
  </section>`;
}

function aggregateFor(orgId) {
  const ids = new Set(subtreeIds(orgId));
  const scoped = leads.filter((lead) => ids.has(lead.orgId));
  const assigned = scoped.filter((lead) => !!lead.ownerId);
  const calls = scoped.reduce((sum, lead) => sum + lead.calls, 0);
  const connected = scoped.reduce((sum, lead) => sum + lead.connected, 0);
  const paid = scoped.filter((lead) => lead.paid);
  return {
    leads: scoped.length,
    assigned: assigned.length,
    calls,
    connected,
    paid: paid.length,
    revenue: paid.length * 3290000
  };
}

function renderDashboard() {
  const allowed = allowedU2Orgs();
  const data = aggregateFor(state.dashboardOrg);
  const org = orgById(state.dashboardOrg) || orgById("r1");
  const assignedRate = data.leads ? Math.round(data.assigned / data.leads * 1000) / 10 : 0;
  const connectRate = data.calls ? Math.round(data.connected / data.calls * 1000) / 10 : 0;
  const paidRate = data.leads ? Math.round(data.paid / data.leads * 1000) / 10 : 0;
  const tabs = [["cohort","转化总览"],["followup","销售跟进"],["payments","支付结果"]];
  const metricsByTab = {
    cohort: [
      ["线索数", data.leads, "当前组织范围"],
      ["已分配", data.assigned, `分配率 ${assignedRate}%`],
      ["已接通", data.connected, `通话接通率 ${connectRate}%`],
      ["已付费", data.paid, `线索付费率 ${paidRate}%`]
    ],
    followup: [
      ["线索库存", data.leads - data.paid, "尚未付费"],
      ["外呼次数", data.calls, "有效外呼"],
      ["接通次数", data.connected, "最终状态"],
      ["通话接通率", `${connectRate}%`, "接通次数 ÷ 外呼次数"]
    ],
    payments: [
      ["付费人数", data.paid, "按用户去重"],
      ["付费订单", data.paid, "按订单去重"],
      ["实付金额", (data.revenue / 1000000).toFixed(1) + "M", "VND"],
      ["人均实付", data.paid ? Math.round(data.revenue / data.paid).toLocaleString("en-US") : "—", "VND"]
    ]
  };
  el.content.innerHTML = `<section class="page-card">
    <div class="page-heading"><div class="section-title">管理看板</div></div>
    <div class="table-tabs" style="margin-top:14px">${tabs.map(([key,label]) => `<button class="${state.dashboardTab === key ? "is-active" : ""}" data-dashboard-tab="${key}">${label}</button>`).join("")}</div>
    <div class="filters">
      <select class="select"><option>越南</option></select>
      <select class="select" id="dashboard-org-filter"><option value="r1" ${state.dashboardOrg === "r1" ? "selected" : ""}>1区及全部下级</option>${allowed.slice(1).map((item) => `<option value="${item.id}" ${state.dashboardOrg === item.id ? "selected" : ""}>${"　".repeat(item.level - 2)}${escapeHtml(item.name)}</option>`).join("")}</select>
      <select class="select"><option>全部 CC</option>${members.filter((m) => m.userType === "CC" && allowed.some((org) => org.id === m.primaryOrgId)).map((m) => `<option>${m.name}</option>`).join("")}</select>
      <input class="field" type="date" value="2026-11-01">
      <span class="secondary-text">至</span>
      <input class="field" type="date" value="2026-11-11">
      <div class="actions"><button class="btn primary">查询</button></div>
    </div>
    <div class="org-summary"><div><h2>${escapeHtml(org.name)}</h2><p>${escapeHtml(orgPath(org.id))} · 数据更新于 2026-11-11 16:30</p></div><span class="tag blue">Asia/Ho_Chi_Minh</span></div>
    <div class="metric-grid">
      ${metricsByTab[state.dashboardTab].map(([label,value,foot]) => `<article class="metric-card"><div class="metric-label">${label}</div><div class="metric-value">${value}</div><div class="metric-foot">${foot}</div></article>`).join("")}
    </div>
    <div class="dashboard-panel">
      <div class="panel-title"><h2>${state.dashboardTab === "payments" ? "支付分布" : "线索转化"}</h2><p>${state.dashboardTab === "cohort" ? "同一批线索的当前结果" : state.dashboardTab === "followup" ? "当前组织范围内的销售跟进情况" : "按订单支付结果统计"}</p></div>
      <div class="bar-chart">
          ${(state.dashboardTab === "payments" ? [
          ["已付费", data.paid, Math.max(data.leads,1)],
          ["未付费", data.leads - data.paid, Math.max(data.leads,1)],
          ["有效通话", data.connected, Math.max(data.calls,1)]
        ] : [
          ["线索", data.leads, Math.max(data.leads,1)],
          ["已分配", data.assigned, Math.max(data.leads,1)],
          ["已接通", data.connected, Math.max(data.calls,1)],
          ["已付费", data.paid, Math.max(data.leads,1)]
        ]).map(([label,value,max]) => `<div class="bar-row"><span>${label}</span><div class="bar-track"><div class="bar-fill" style="width:${Math.min(100, value / max * 100)}%"></div></div><span class="bar-value">${value}</span></div>`).join("")}
      </div>
    </div>
  </section>`;
}

function render() {
  setChrome();
  if (state.route === "system") renderSystem();
  if (state.route === "sales") renderSales();
  if (state.route === "dashboard") renderDashboard();
}

function setRoute(route, tab) {
  state.route = route;
  if (route === "system" && tab) state.systemTab = tab;
  const hash = route === "system" ? `/system/${state.systemTab}` : `/${route}`;
  history.replaceState(null, "", `#${hash}`);
  el.sidebar.classList.remove("is-open");
  render();
}

function routeFromHash() {
  const path = location.hash.replace(/^#\/?/, "");
  if (path.startsWith("system/")) {
    state.route = "system";
    state.systemTab = path.split("/")[1] || "organization";
  } else if (path === "sales" || path === "dashboard") {
    state.route = path;
  } else {
    state.route = "system";
    state.systemTab = "organization";
  }
}

function openOrgModal(mode, orgId = state.selectedOrg) {
  const editing = mode === "edit" ? orgById(orgId) : null;
  const parent = editing?.parentId ?? (orgById(orgId)?.level < 4 ? orgId : orgById(orgId)?.parentId);
  const nextLevel = (orgById(parent)?.level ?? 0) + 1;
  openModal(`<form id="org-form">
    <div class="modal-head"><h2 id="modal-title">${editing ? "编辑组织" : "新增下级组织"}</h2><button class="icon-btn" type="button" data-action="close-modal">${icon("close")}</button></div>
    <div class="form-section">组织信息</div>
    <div class="form-grid">
      <div class="form-item"><label>业务线 <em>*</em></label><select class="select" name="line"><option>越南</option></select></div>
      <div class="form-item"><label>上级组织 <em>*</em></label><select class="select" name="parentId">${editing ? orgParentOptions(editing) : orgOptions("越南", parent || "")}</select></div>
      <div class="form-item full"><label>组织名称 <em>*</em></label><input class="field" name="name" value="${escapeHtml(editing?.name || "")}" placeholder="请输入组织名称"></div>
      <div class="form-item"><label>组织层级</label><input class="field" value="${levelName(editing?.level || nextLevel)}" disabled></div>
      <div class="form-item"><label>负责人</label><select class="select" name="leaderId"><option value="">暂不设置</option>${memberOptions(editing?.leaderId || "")}</select></div>
      <div class="form-item"><label>状态</label><select class="select" name="status"><option ${editing?.status !== "停用" ? "selected" : ""}>启用</option><option ${editing?.status === "停用" ? "selected" : ""}>停用</option></select></div>
    </div>
    <div class="form-error" id="org-error"></div>
    <div class="modal-actions"><button class="btn" type="button" data-action="close-modal">取消</button><button class="btn primary" type="submit">保存</button></div>
  </form>`);
  document.getElementById("org-form").addEventListener("submit", (event) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = String(form.get("name") || "").trim();
    const parentId = String(form.get("parentId") || "");
    const parentOrg = orgById(parentId);
    if (!name) return setError("org-error", "请输入组织名称");
    if (!parentOrg || parentOrg.level >= 4) return setError("org-error", "组织最多四层，不能继续新增下级");
    const maxDescendantDepth = Math.max(0, ...descendantsOf(editing?.id).map((org) => org.level - (editing?.level || 1)));
    if (editing && parentOrg.level + 1 + maxDescendantDepth > 4) return setError("org-error", "移动后会超过四层，请先调整下级组织");
    if (orgs.some((org) => org.id !== editing?.id && org.parentId === parentId && org.name === name)) return setError("org-error", "同一上级下已存在同名组织");
    if (editing) {
      Object.assign(editing, { name, parentId, leaderId: String(form.get("leaderId") || ""), status: String(form.get("status") || "启用"), level: parentOrg.level + 1 });
      state.logs.unshift({ time: "2026-11-11 16:36:20", module: "组织架构", action: "编辑", target: orgPath(editing.id), actor: "lin.yue@dinoai.ai" });
    } else {
      const org = { id: `org_${Date.now()}`, name, line: String(form.get("line") || "越南"), parentId, leaderId: String(form.get("leaderId") || ""), status: String(form.get("status") || "启用"), level: parentOrg.level + 1 };
      orgs.push(org);
      state.selectedOrg = org.id;
      state.logs.unshift({ time: "2026-11-11 16:36:20", module: "组织架构", action: "新增", target: orgPath(org.id), actor: "lin.yue@dinoai.ai" });
    }
    closeModal();
    render();
    showToast("组织配置已保存");
  });
}

function setError(id, text) {
  const target = document.getElementById(id);
  if (target) target.textContent = text;
}

function memberGrantOrgs(line) {
  const allowed = operatorAllowedIds();
  return orgs.filter((org) => org.line === line && allowed.has(org.id));
}

function hasSelectedAncestor(org, selectedIds) {
  let parent = org.parentId ? orgById(org.parentId) : null;
  while (parent) {
    if (selectedIds.has(parent.id)) return true;
    parent = parent.parentId ? orgById(parent.parentId) : null;
  }
  return false;
}

function memberOrgSelectorHtml(line) {
  const selectedIds = window.__memberGrantIds || new Set();
  const nodes = memberGrantOrgs(line);
  const chips = [...selectedIds].map((id) => ({ id, org: orgById(id) })).filter((item) => item.org && item.org.line === line)
    .map(({ id, org }) => `<span class="org-chip" data-chip="${id}">${escapeHtml(org.name)}及下级<button type="button" data-remove-grant="${id}" aria-label="移除${escapeHtml(org.name)}">×</button></span>`).join("");
  const rows = nodes.map((org) => {
    const covered = hasSelectedAncestor(org, selectedIds);
    const checked = selectedIds.has(org.id) || covered;
    return `<label class="org-check-row ${covered ? "is-covered" : ""}" style="--tree-indent:${(org.level - 2) * 16}px">
      <input type="checkbox" data-grant-org="${org.id}" ${checked ? "checked" : ""} ${covered ? "disabled" : ""}>
      <span>${escapeHtml(org.name)}</span><span class="level-badge">L${org.level} · ${levelName(org.level)}${selectedIds.has(org.id) ? " · 含下级" : ""}</span>
    </label>`;
  }).join("");
  return `<div class="org-multiselect">
    <div class="org-select-trigger ${window.__memberSelectorOpen ? "is-open" : ""}" role="button" tabindex="0" data-action="toggle-member-org-panel">
      <span class="org-chip-list">${chips || '<span class="secondary-text">请选择组织，可多选</span>'}</span><span class="select-caret">⌄</span>
    </div>
    ${window.__memberSelectorOpen ? `<div class="org-select-panel" id="member-org-panel">
      <div class="org-select-panel-head"><span>可选择父节点或任意下级</span><span>父节点自动包含全部下级</span></div>
      ${rows || '<div class="org-select-empty">当前操作人没有可选组织</div>'}
    </div>` : ""}
  </div>`;
}

function openMemberModal(memberId = "") {
  const member = members.find((item) => item.id === memberId);
  const scope = member?.scope || "self";
  const line = member?.line === "全部业务线" ? "越南" : member?.line || "越南";
  window.__memberGrantIds = new Set(member?.orgIds || []);
  window.__memberSelectorOpen = false;
  const assignableRoles = roles.filter((role) => ["role_region", "role_sales"].includes(role.id));
  openModal(`<form id="member-form">
    <div class="modal-head"><h2 id="modal-title">${member ? "编辑成员" : "新增成员"}</h2><button class="icon-btn" type="button" data-action="close-modal">${icon("close")}</button></div>
    <div class="form-section">基本信息</div>
    <div class="form-grid">
      <div class="form-item"><label>姓名 <em>*</em></label><input class="field" name="name" value="${escapeHtml(member?.name || "")}" placeholder="请输入姓名"></div>
      <div class="form-item"><label>登录邮箱 <em>*</em></label><input class="field" name="email" value="${escapeHtml(member?.email || "")}" placeholder="name@dinoai.ai"></div>
      <div class="form-item full"><label>人员类型 <em>*</em></label><select class="select" name="userType"><option ${member?.userType === "CC" ? "selected" : ""}>CC</option><option ${member?.userType !== "CC" ? "selected" : ""}>其他</option></select></div>
    </div>
    <div class="form-section" style="margin-top:18px">权限配置</div>
    <div class="form-grid">
      <div class="form-item full"><label>功能角色 <em>*</em></label><select class="select" name="roleId"><option value="">请选择功能角色</option>${assignableRoles.map((role) => `<option value="${role.id}" ${member?.roleId === role.id ? "selected" : ""}>${role.name}</option>`).join("")}</select></div>
      <div class="form-item"><label>业务线 <em>*</em></label><select class="select" name="line"><option>越南</option></select></div>
      <div class="form-item"><label>数据范围 <em>*</em></label><select class="select" name="scope" id="member-scope">
        <option value="self" ${scope === "self" ? "selected" : ""}>本人</option>
        <option value="nodes" ${scope === "nodes" ? "selected" : ""}>指定组织及下级</option>
        <option value="line" ${scope === "line" ? "selected" : ""}>业务线全部</option>
      </select></div>
      <div class="form-item full" id="member-org-grant" style="${scope === "nodes" ? "" : "display:none"}">
        <label>授权组织 <em>*</em></label>
        <div id="member-org-selector">${memberOrgSelectorHtml(line)}</div>
      </div>
      <div class="form-item full"><label>主组织 <em>*</em></label><select class="select" name="primaryOrgId" id="member-primary-org">${orgOptions(line, member?.primaryOrgId || "")}</select></div>
    </div>
    <div class="form-error" id="member-error"></div>
    <div class="modal-actions"><button class="btn" type="button" data-action="close-modal">取消</button><button class="btn primary" type="submit">保存</button></div>
  </form>`);

  const refreshGrantSelector = () => {
    document.getElementById("member-org-selector").innerHTML = memberOrgSelectorHtml(document.querySelector('#member-form [name="line"]').value);
  };
  const scopeSelect = document.getElementById("member-scope");
  scopeSelect.addEventListener("change", () => {
    document.getElementById("member-org-grant").style.display = scopeSelect.value === "nodes" ? "" : "none";
  });
  document.getElementById("member-form").addEventListener("change", (event) => {
    if (event.target.id === "member-scope") return;
    if (event.target.name === "line") {
      window.__memberGrantIds.clear();
      window.__memberSelectorOpen = false;
      document.getElementById("member-primary-org").innerHTML = orgOptions(event.target.value, "");
      refreshGrantSelector();
      return;
    }
    if (event.target.matches("[data-grant-org]")) {
      const id = event.target.dataset.grantOrg;
      const org = orgById(id);
      if (event.target.checked) {
        window.__memberGrantIds.add(id);
        descendantsOf(id).forEach((node) => window.__memberGrantIds.delete(node.id));
      } else {
        window.__memberGrantIds.delete(id);
      }
      refreshGrantSelector();
    }
  });
  document.getElementById("member-form").addEventListener("click", (event) => {
    if (event.target.closest('[data-action="toggle-member-org-panel"]')) {
      window.__memberSelectorOpen = !window.__memberSelectorOpen;
      refreshGrantSelector();
    }
    const remove = event.target.closest("[data-remove-grant]");
    if (remove) {
      window.__memberGrantIds.delete(remove.dataset.removeGrant);
      refreshGrantSelector();
    }
  });
  document.getElementById("member-form").addEventListener("submit", (event) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = String(form.get("name") || "").trim();
    const email = String(form.get("email") || "").trim().toLowerCase();
    const roleId = String(form.get("roleId") || "");
    const selectedLine = String(form.get("line") || "");
    const selectedScope = String(form.get("scope") || "self");
    const primaryOrgId = String(form.get("primaryOrgId") || "");
    const selectedOrgIds = [...window.__memberGrantIds];
    const allowed = operatorAllowedIds();
    if (!name || !email || !roleId || !primaryOrgId) return setError("member-error", "请完整填写姓名、邮箱、角色和主组织");
    if (!email.includes("@")) return setError("member-error", "请输入有效邮箱");
    if (members.some((item) => item.id !== member?.id && item.email === email)) return setError("member-error", "登录邮箱已存在");
    if (!allowed.has(primaryOrgId)) return setError("member-error", "主组织超出当前操作人的数据权限");
    if (orgById(primaryOrgId)?.line !== selectedLine) return setError("member-error", "主组织必须属于所选业务线");
    if (selectedScope === "nodes" && !selectedOrgIds.length) return setError("member-error", "请至少选择一个授权组织");
    if (selectedScope === "nodes" && selectedOrgIds.some((id) => !allowed.has(id))) return setError("member-error", "授权组织超出当前操作人的数据权限");
    const next = {
      id: member?.id || `m_${Date.now()}`,
      name,
      email,
      userType: String(form.get("userType") || "其他"),
      roleId,
      line: selectedLine,
      scope: selectedScope,
      orgIds: selectedScope === "nodes" ? selectedOrgIds : [],
      primaryOrgId,
      status: member?.status || "启用",
      lastLogin: member?.lastLogin || "—"
    };
    if (member) Object.assign(member, next);
    else members.unshift(next);
    state.logs.unshift({ time: "2026-11-11 16:38:47", module: "成员账号", action: member ? "编辑" : "新增", target: `${name} · ${orgPath(primaryOrgId)}`, actor: "lin.yue@dinoai.ai" });
    closeModal();
    render();
    showToast("成员配置已保存");
  });
}

function openAssignmentModal(leadId) {
  const lead = leads.find((item) => item.id === leadId);
  if (!lead) return;
  const candidates = members.filter((member) => member.status === "启用" && member.line === "越南" && member.userType === "CC");
  openModal(`<form id="assign-form">
    <div class="modal-head"><h2 id="modal-title">分配线索</h2><button class="icon-btn" type="button" data-action="close-modal">${icon("close")}</button></div>
    <div class="form-grid">
      <div class="form-item full"><label>线索</label><input class="field" value="${lead.id} · ${escapeHtml(lead.name)}" disabled></div>
      <div class="form-item full"><label>当前归属组织</label><input class="field" value="${escapeHtml(orgPath(lead.orgId))}" disabled></div>
      <div class="form-item full"><label>目标销售 <em>*</em></label><select class="select" name="ownerId"><option value="">请选择目标销售</option>${candidates.map((member) => `<option value="${member.id}">${escapeHtml(member.name)} · ${escapeHtml(orgPath(member.primaryOrgId))}</option>`).join("")}</select></div>
      <div class="form-item full"><label>分配原因</label><textarea class="field" name="reason" style="height:76px;padding-top:9px" placeholder="选填"></textarea></div>
    </div>
    <div class="form-error" id="assign-error"></div>
    <div class="modal-actions"><button class="btn" type="button" data-action="close-modal">取消</button><button class="btn primary" type="submit">确认分配</button></div>
  </form>`);
  document.getElementById("assign-form").addEventListener("submit", (event) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const ownerId = String(form.get("ownerId") || "");
    const target = members.find((member) => member.id === ownerId);
    if (!target) return setError("assign-error", "请选择目标销售");
    lead.ownerId = target.id;
    lead.orgId = target.primaryOrgId;
    lead.stage = "跟进中";
    state.logs.unshift({ time: "2026-11-11 16:40:15", module: "销售中心", action: "分配", target: `${lead.id} → ${target.name} · ${orgPath(target.primaryOrgId)}`, actor: "lin.yue@dinoai.ai" });
    closeModal();
    render();
    showToast("线索分配成功");
  });
}

el.content.addEventListener("click", (event) => {
  const systemTab = event.target.closest("[data-system-tab]");
  if (systemTab) return setRoute("system", systemTab.dataset.systemTab);
  const treeNode = event.target.closest("[data-org-select]");
  if (treeNode) {
    state.selectedOrg = treeNode.dataset.orgSelect;
    return render();
  }
  const orgEdit = event.target.closest("[data-org-edit]");
  if (orgEdit) return openOrgModal("edit", orgEdit.dataset.orgEdit);
  const memberEdit = event.target.closest("[data-member-edit]");
  if (memberEdit) return openMemberModal(memberEdit.dataset.memberEdit);
  const salesTab = event.target.closest("[data-sales-tab]");
  if (salesTab) {
    state.salesTab = salesTab.dataset.salesTab;
    return render();
  }
  const dashboardTab = event.target.closest("[data-dashboard-tab]");
  if (dashboardTab) {
    state.dashboardTab = dashboardTab.dataset.dashboardTab;
    return render();
  }
  const assign = event.target.closest("[data-lead-assign]");
  if (assign) return openAssignmentModal(assign.dataset.leadAssign);
  const action = event.target.closest("[data-action]")?.dataset.action;
  if (!action) return;
  if (action === "close-modal") return closeModal();
  if (action === "add-org") return openOrgModal("add");
  if (action === "edit-org") return openOrgModal("edit", state.selectedOrg);
  if (action === "add-member") return openMemberModal();
  if (action === "reset-member-filter") {
    state.memberFilters = { search: "", line: "", orgId: "", roleId: "", status: "" };
    state.memberSearchDraft = "";
    return render();
  }
  if (action === "search-members") {
    const search = document.getElementById("member-search");
    state.memberSearchDraft = search?.value || "";
    state.memberFilters = {
      search: state.memberSearchDraft,
      line: document.getElementById("member-line-filter")?.value || "",
      orgId: document.getElementById("member-org-filter")?.value || "",
      roleId: document.getElementById("member-role-filter")?.value || "",
      status: document.getElementById("member-status-filter")?.value || ""
    };
    return render();
  }
  if (action === "reset-sales") {
    state.salesSearch = "";
    state.salesStage = "";
    state.salesStatus = "";
    state.salesOrg = "r1";
    return render();
  }
  if (action === "sales-settings") return showToast("分配与掉库设置");
  if (action === "view-lead") return showToast("已打开外呼");
  if (action === "add-role" || action === "edit-role") return showToast("角色权限编辑");
});

el.content.addEventListener("input", (event) => {
  if (event.target.id === "org-search") {
    state.selectedOrgSearch = event.target.value;
    const panel = event.target.closest(".side-panel");
    panel.querySelector(".org-tree").innerHTML = treeHtml();
  }
  if (event.target.id === "member-search") state.memberSearchDraft = event.target.value;
  if (event.target.id === "sales-search") {
    state.salesSearch = event.target.value;
    clearTimeout(window.__salesSearchTimer);
    window.__salesSearchTimer = setTimeout(render, 180);
  }
});

el.content.addEventListener("change", (event) => {
  if (event.target.id === "member-line-filter") {
    state.memberFilters.line = event.target.value;
    state.memberFilters.orgId = "";
    render();
  }
  if (event.target.id === "member-org-filter") state.memberFilters.orgId = event.target.value;
  if (event.target.id === "member-role-filter") state.memberFilters.roleId = event.target.value;
  if (event.target.id === "member-status-filter") state.memberFilters.status = event.target.value;
  if (event.target.id === "sales-org-filter") {
    state.salesOrg = event.target.value;
    render();
  }
  if (event.target.id === "sales-stage-filter") {
    state.salesStage = event.target.value;
    render();
  }
  if (event.target.id === "sales-status-filter") {
    state.salesStatus = event.target.value;
    render();
  }
  if (event.target.id === "dashboard-org-filter") {
    state.dashboardOrg = event.target.value;
    render();
  }
  if (event.target.id === "log-module-filter") {
    state.logModule = event.target.value;
    render();
  }
});

el.modalLayer.addEventListener("click", (event) => {
  if (event.target.closest('[data-action="close-modal"]') || event.target.classList.contains("modal-scrim")) closeModal();
});

document.querySelector(".side-nav").addEventListener("click", (event) => {
  const nav = event.target.closest("[data-route]");
  if (nav) setRoute(nav.dataset.route);
});

document.getElementById("menu-toggle").addEventListener("click", () => el.sidebar.classList.toggle("is-open"));
window.addEventListener("hashchange", () => {
  routeFromHash();
  render();
});

routeFromHash();
render();
