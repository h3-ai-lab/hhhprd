const state = {
  currentUserId: "m_super",
  route: "system",
  systemTab: "organization",
  selectedOrg: "vn",
  selectedOrgSearch: "",
  memberFilters: { search: "", line: "", orgId: "", roleId: "", status: "" },
  memberSearchDraft: "",
  salesTab: "pool",
  salesOrg: "r1",
  salesSearch: "",
  salesFirstCc: "",
  salesCurrentCc: "",
  salesStage: "",
  salesStatus: "",
  dashboardOrg: "r1",
  logModule: "",
  logs: [
    { time: "2026-11-11 16:24:08", module: "组织架构", action: "新增", target: "越南业务线 / 1区 / A部 / A1组", actor: "lin.yue@dinoai.ai" },
    { time: "2026-11-11 16:20:31", module: "成员账号", action: "编辑", target: "林悦 · 数据授权", actor: "chen.ming@dinoai.ai" },
    { time: "2026-11-11 15:48:12", module: "组织架构", action: "编辑", target: "越南业务线 / 1区 / B部", actor: "lin.yue@dinoai.ai" },
    { time: "2026-11-11 14:36:09", module: "角色权限", action: "编辑", target: "区域管理员 · 管理看板查看", actor: "admin@dinoai.ai" },
    { time: "2026-11-11 11:17:43", module: "成员账号", action: "新增", target: "周宁 · A2组", actor: "lin.yue@dinoai.ai" }
  ]
};

const roles = [
  { id: "role_super", name: "超级管理员", desc: "全部功能与全局组织数据", builtin: true, users: 1 },
  { id: "role_line", name: "业务线管理员", desc: "业务线组织、成员、销售和看板管理", builtin: false, users: 2 },
  { id: "role_region", name: "区域管理员兼销售", desc: "区域管理、线索跟进与转派", builtin: false, users: 3 },
  { id: "role_sales", name: "销售", desc: "本人线索外呼、跟进及已配置的动作权限", builtin: false, users: 28 }
];

let orgs = [
  { id: "vn", name: "越南业务线", line: "越南", level: 1, parentId: null, status: "启用" },
  { id: "r1", name: "1区", line: "越南", level: 2, parentId: "vn", status: "启用" },
  { id: "a", name: "A部", line: "越南", level: 3, parentId: "r1", status: "启用" },
  { id: "a1", name: "A1组", line: "越南", level: 4, parentId: "a", status: "启用" },
  { id: "a2", name: "A2组", line: "越南", level: 4, parentId: "a", status: "启用" },
  { id: "b", name: "B部", line: "越南", level: 3, parentId: "r1", status: "启用" },
  { id: "b1", name: "B1组", line: "越南", level: 4, parentId: "b", status: "启用" },
  { id: "b2", name: "B2组", line: "越南", level: 4, parentId: "b", status: "启用" },
  { id: "r2", name: "2区", line: "越南", level: 2, parentId: "vn", status: "启用" },
  { id: "c", name: "C部", line: "越南", level: 3, parentId: "r2", status: "启用" },
  { id: "c1", name: "C1组", line: "越南", level: 4, parentId: "c", status: "启用" },
  { id: "th", name: "泰国业务线", line: "泰国", level: 1, parentId: null, status: "启用" },
  { id: "th1", name: "曼谷一区", line: "泰国", level: 2, parentId: "th", status: "启用" },
  { id: "th2", name: "曼谷二区", line: "泰国", level: 2, parentId: "th", status: "启用" },
  { id: "thd", name: "曼谷销售部", line: "泰国", level: 3, parentId: "th1", status: "启用" }
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
  { id: "m_s5", name: "沈青", email: "shen.qing@dinoai.ai", userType: "CC", roleId: "role_sales", line: "越南", scope: "self", orgIds: [], primaryOrgId: "c1", status: "启用", lastLogin: "2026-11-11 15:38:44" },
  { id: "m_th_line", name: "Narin", email: "narin@dinoai.ai", userType: "其他", roleId: "role_line", line: "泰国", scope: "line", orgIds: [], primaryOrgId: "th", status: "启用", lastLogin: "2026-11-11 15:22:08" }
];
members.forEach((member) => {
  member.grants = [{ line: member.line, scope: member.scope, orgIds: [...member.orgIds], primaryOrgId: member.primaryOrgId }];
});
members.find((member) => member.id === "m_region").grants.push({
  line: "泰国",
  scope: "nodes",
  orgIds: ["th1"],
  primaryOrgId: "th1"
});

const leads = [
  { id: "LD-20261111-0181", name: "Nguyen Minh Anh", intent: "有意向", status: "已注册", type: "正式用户", age: "成人", course: "L3", account: "anh.nguyen@mail.vn", source: "TikTok · 越南英语提升", orgId: "a1", ownerId: "m_s1", firstOwnerId: "m_s1", stage: "跟进中", calls: 3, connected: 2, paid: false, phone: "**** 0186", register: "2026-11-11 09:32" },
  { id: "LD-20261111-0179", name: "Tran Bao Chau", intent: "有意向", status: "已注册", type: "正式用户", age: "青少年", course: "L2", account: "chau.tran@mail.vn", source: "Meta · 体验课", orgId: "a1", ownerId: "", firstOwnerId: "m_s1", stage: "待领取", calls: 0, connected: 0, paid: false, phone: "**** 0281", register: "2026-11-11 09:18" },
  { id: "LD-20261111-0173", name: "Le Thu Ha", intent: "未填写", status: "已注册", type: "正式用户", age: "成人", course: "L1", account: "ha.le@mail.vn", source: "Messenger · 在线咨询", orgId: "a2", ownerId: "m_s2", firstOwnerId: "m_s1", stage: "已预约", calls: 4, connected: 3, paid: true, phone: "**** 0366", register: "2026-11-11 08:56" },
  { id: "LD-20261111-0168", name: "Pham Gia Linh", intent: "有意向", status: "已注册", type: "正式用户", age: "成人", course: "L4", account: "linh.pham@mail.vn", source: "离屏 · A部活动", orgId: "a1", ownerId: "", firstOwnerId: "m_s2", stage: "待领取", calls: 0, connected: 0, paid: false, phone: "**** 0412", register: "2026-11-11 08:21" },
  { id: "LD-20261111-0154", name: "Vo Minh Khang", intent: "有意向", status: "已付费", type: "正式用户", age: "成人", course: "L3", account: "khang.vo@mail.vn", source: "Google · Search", orgId: "b1", ownerId: "m_s3", firstOwnerId: "m_s3", stage: "已付费", calls: 2, connected: 2, paid: true, phone: "**** 0573", register: "2026-11-10 21:08" },
  { id: "LD-20261111-0148", name: "Do Ngoc Mai", intent: "无意向", status: "已注册", type: "正式用户", age: "青少年", course: "L2", account: "mai.do@mail.vn", source: "TikTok · B1组", orgId: "b1", ownerId: "m_s3", firstOwnerId: "m_s2", stage: "暂不跟进", calls: 2, connected: 1, paid: false, phone: "**** 0649", register: "2026-11-10 20:46" },
  { id: "LD-20261111-0141", name: "Bui Anh Tuan", intent: "未填写", status: "已注册", type: "正式用户", age: "成人", course: "L1", account: "tuan.bui@mail.vn", source: "B2组 · WhatsApp", orgId: "b2", ownerId: "m_s4", firstOwnerId: "m_s3", stage: "跟进中", calls: 1, connected: 1, paid: false, phone: "**** 0731", register: "2026-11-10 19:23" },
  { id: "LD-20261111-0138", name: "Hoang Kim Ngan", intent: "有意向", status: "已注册", type: "正式用户", age: "成人", course: "L3", account: "ngan.hoang@mail.vn", source: "1区活动页", orgId: "r1", ownerId: "m_region", firstOwnerId: "m_s5", stage: "已预约", calls: 3, connected: 2, paid: true, phone: "**** 0854", register: "2026-11-10 18:59" },
  { id: "LD-20261111-0127", name: "Dang Quoc Huy", intent: "有意向", status: "已注册", type: "正式用户", age: "成人", course: "L4", account: "huy.dang@mail.vn", source: "B部转派", orgId: "b", ownerId: "m_region", firstOwnerId: "m_s4", stage: "跟进中", calls: 2, connected: 1, paid: false, phone: "**** 0962", register: "2026-11-10 17:41" },
  { id: "LD-20261111-0119", name: "Truong My Linh", intent: "有意向", status: "已注册", type: "正式用户", age: "青少年", course: "L2", account: "linh.truong@mail.vn", source: "C1组 · 体验课", orgId: "c1", ownerId: "m_s5", firstOwnerId: "m_s3", stage: "跟进中", calls: 2, connected: 1, paid: false, phone: "**** 1048", register: "2026-11-10 16:18" }
];

const assignmentRules = [
  { id: "rule_a1_weekday", name: "A1组工作日常规分配", line: "越南", orgId: "a1", status: "启用" },
  { id: "rule_a2_weekday", name: "A2组工作日常规分配", line: "越南", orgId: "a2", status: "启用" },
  { id: "rule_a_weekend", name: "A部周末值班分配", line: "越南", orgId: "a", status: "启用" },
  { id: "rule_b1_weekday", name: "B1组工作日常规分配", line: "越南", orgId: "b1", status: "启用" },
  { id: "rule_b2_weekday", name: "B2组工作日常规分配", line: "越南", orgId: "b2", status: "启用" },
  { id: "rule_c1_weekday", name: "C1组工作日常规分配", line: "越南", orgId: "c1", status: "启用" },
  { id: "rule_thd_weekday", name: "曼谷销售部常规分配", line: "泰国", orgId: "thd", status: "启用" }
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
const orgImpact = (id) => {
  const affectedIds = new Set(subtreeIds(id));
  return {
    members: members.filter((member) => memberGrants(member).some((grant) =>
      affectedIds.has(grant.primaryOrgId) || (grant.orgIds || []).some((orgId) => affectedIds.has(orgId))
    )).length,
    leads: leads.filter((lead) => affectedIds.has(lead.orgId)).length,
    rules: assignmentRules.filter((rule) => rule.status === "启用" && affectedIds.has(rule.orgId)).length,
    organizations: affectedIds.size
  };
};
const updateOrgLevels = (rootId) => {
  const root = orgById(rootId);
  if (!root) return;
  root.level = root.parentId ? (orgById(root.parentId)?.level || 0) + 1 : 1;
  descendantsOf(rootId).forEach((org) => {
    org.level = (orgById(org.parentId)?.level || 0) + 1;
  });
};
const currentUser = () => members.find((member) => member.id === state.currentUserId) || members[0];
const memberGrants = (member) => member?.grants || [{ line: member?.line, scope: member?.scope, orgIds: [...(member?.orgIds || [])], primaryOrgId: member?.primaryOrgId }];
const operatorAllowedIds = () => {
  const user = currentUser();
  if (user.roleId === "role_super") return new Set(orgs.map((org) => org.id));
  const roots = memberGrants(user).flatMap((grant) => grant.scope === "line"
    ? orgs.filter((org) => org.level === 1 && org.line === grant.line).map((org) => org.id)
    : grant.orgIds || []);
  return new Set(roots.flatMap((id) => subtreeIds(id)));
};
const ancestorIdsOf = (id) => {
  const ancestors = [];
  let current = orgById(id);
  while (current?.parentId) {
    current = orgById(current.parentId);
    if (current) ancestors.push(current.id);
  }
  return ancestors;
};
const operatorVisibleIds = () => {
  const visible = operatorAllowedIds();
  [...visible].forEach((id) => ancestorIdsOf(id).forEach((ancestorId) => visible.add(ancestorId)));
  return visible;
};
const visibleBusinessLineRoots = () => {
  const visible = operatorVisibleIds();
  return orgs.filter((org) => org.level === 1 && visible.has(org.id));
};
const editableBusinessLineRoots = () => {
  const editable = operatorAllowedIds();
  return orgs.filter((org) => org.level === 1 && editable.has(org.id));
};
const operatorScopeLabel = () => {
  const user = currentUser();
  if (user.roleId === "role_super") return "全部业务线";
  const grants = memberGrants(user);
  if (grants.every((grant) => grant.scope === "line")) {
    return [...new Set(grants.map((grant) => grant.line.endsWith("业务线") ? grant.line : `${grant.line}业务线`))].join("、");
  }
  const names = grants.flatMap((grant) => grant.orgIds || []).map((id) => orgById(id)?.name).filter(Boolean);
  return names.length ? `${names.join("、")}及下级` : "本人";
};
const orgPath = (id) => {
  const parts = [];
  let current = orgById(id);
  while (current) {
    parts.unshift(current.name);
    current = current.parentId ? orgById(current.parentId) : null;
  }
  return parts.join(" / ") || "—";
};
const levelName = (level) => ({ 1: "业务线", 2: "区", 3: "部", 4: "组" })[level] || "—";
const escapeHtml = (value = "") => String(value).replace(/[&<>"']/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[char]);
const orgOptions = (line = "", selected = "", allowRoot = true) => {
  const allowed = operatorAllowedIds();
  return orgs
  .filter((org) => allowed.has(org.id) && (!line || org.line === line) && (allowRoot || org.level > 1))
  .map((org) => `<option value="${org.id}" ${org.id === selected ? "selected" : ""}>${"　".repeat(org.level - 1)}${escapeHtml(org.name)} · ${levelName(org.level)}</option>`)
  .join("");
};

function countMembers(orgId) {
  return members.filter((member) => member.status === "启用" && memberGrants(member).some((grant) => grant.primaryOrgId === orgId)).length;
}

function scopeLabel(grant) {
  if (grant.scope === "self") return "本人数据";
  if (grant.scope === "global") return "全部业务线";
  if (grant.scope === "line") return "业务线全部";
  const names = (grant.orgIds || []).map((id) => orgById(id)?.name).filter(Boolean);
  return names.length ? `${names.join("、")}及下级` : "指定组织及下级";
}

function setChrome() {
  const configs = {
    system: ["系统管理 / 系统配置", "系统配置"],
    sales: ["销售管理 / 销售中心", "销售中心"],
    dashboard: ["系统管理 / 数据权限", "数据权限"]
  };
  const [crumb, title] = configs[state.route];
  el.breadcrumb.innerHTML = `Dino CRM <span>/</span> ${crumb.replace(" / ", " <span>/</span> ")}`;
  el.pageTitle.textContent = title;
  document.title = `Dino CRM · ${title}`;
  document.querySelectorAll(".nav-item").forEach((item) => item.classList.toggle("is-active", item.dataset.route === state.route));
  const user = currentUser();
  document.getElementById("identity-switch").value = user.id;
  document.getElementById("scope-label").innerHTML = `<i></i>${escapeHtml(operatorScopeLabel())}`;
  document.getElementById("current-avatar").textContent = user.name.slice(0, 1);
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
  const visible = operatorVisibleIds();
  return childrenOf(parentId).filter((org) => visible.has(org.id)).map((org) => {
    const keyword = state.selectedOrgSearch.trim().toLowerCase();
    const matches = !keyword || orgPath(org.id).toLowerCase().includes(keyword);
    const childHtml = treeHtml(org.id, depth + 1);
    if (!matches && !childHtml) return "";
    const readonly = !allowed.has(org.id);
    return `<button class="tree-row ${state.selectedOrg === org.id ? "is-active" : ""} ${readonly ? "is-ancestor-readonly" : ""}" style="--indent:${depth * 14}px" data-org-select="${org.id}">
      <span class="tree-dot"></span><span>${escapeHtml(org.name)}</span>${readonly ? '<span class="node-level">只读</span>' : ""}
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
  const visible = operatorVisibleIds();
  const editable = operatorAllowedIds();
  const rows = (selected ? [selected, ...descendantsOf(selected.id)] : orgs).filter((org) => visible.has(org.id));
  const selectedEditable = !!selected && editable.has(selected.id);
  const canAddLine = currentUser().roleId === "role_super";
  return `<div class="org-layout">
    <aside class="side-panel">
      <div class="side-panel-title">组织架构</div>
      <input class="field tree-search" id="org-search" placeholder="搜索组织" value="${escapeHtml(state.selectedOrgSearch)}">
      <div class="org-tree">${treeHtml()}</div>
    </aside>
    <section>
      <div class="org-summary">
        <div><h2>${escapeHtml(selected?.name ?? "组织架构")}</h2><p>${escapeHtml(orgPath(selected?.id))} · ${selected?.status ?? ""}${selected && !selectedEditable ? " · 祖先路径只读" : ""}</p></div>
        <div class="toolbar-group">
          <button class="btn" data-action="add-business-line" ${canAddLine ? "" : "disabled"} title="${canAddLine ? "" : "仅超级管理员可新增业务线"}">${icon("plus")}新增业务线</button>
          <button class="btn" data-action="edit-org" ${selectedEditable ? "" : "disabled"}>${icon("edit")}编辑</button>
          <button class="btn primary" data-action="add-org" ${selectedEditable && selected?.level < 4 ? "" : "disabled"}>${icon("plus")}新增组织</button>
        </div>
      </div>
      <div class="table-wrap"><table>
        <thead><tr><th>组织名称</th><th>所属业务线</th><th>上级组织</th><th>成员数</th><th>状态</th><th>操作</th></tr></thead>
        <tbody>${rows.map((org) => `<tr>
          <td><span class="primary-text">${escapeHtml(org.name)}</span><div class="secondary-text">${escapeHtml(orgPath(org.id))}</div></td>
          <td><span class="tag">${escapeHtml(org.line)}</span></td>
          <td>${org.parentId ? escapeHtml(orgById(org.parentId)?.name) : "—"}</td>
          <td>${countMembers(org.id)}</td>
          <td><span class="tag ${org.status === "启用" ? "green" : ""}">${org.status}</span></td>
          <td><div class="row-actions">
            ${editable.has(org.id) ? `<button class="btn ghost" data-org-edit="${org.id}">编辑</button>` : '<span class="secondary-text">只读</span>'}
            ${editable.has(org.id) && org.level > 1 ? `<button class="btn ghost" data-org-move="${org.id}">更换上级</button><button class="btn ghost" data-org-merge="${org.id}">合并</button>` : ""}
            ${editable.has(org.id) ? (org.status === "启用"
              ? `<button class="btn ghost danger" data-org-disable="${org.id}">停用</button>`
              : `<button class="btn ghost" data-org-enable="${org.id}">启用</button>`) : ""}
          </div></td>
        </tr>`).join("")}</tbody>
      </table></div>
    </section>
  </div>`;
}

function renderMembersTab() {
  const f = state.memberFilters;
  const allowed = operatorAllowedIds();
  const lines = [...new Set(visibleBusinessLineRoots().map((org) => org.line))];
  const candidates = orgs.filter((org) => allowed.has(org.id) && (!f.line || org.line === f.line));
  const filtered = members.filter((member) => {
    const keyword = f.search.trim().toLowerCase();
    const grants = memberGrants(member);
    return grants.some((grant) => allowed.has(grant.primaryOrgId))
      && (!keyword || member.name.toLowerCase().includes(keyword) || member.email.toLowerCase().includes(keyword))
      && (!f.line || grants.some((grant) => grant.line === f.line))
      && (!f.orgId || grants.some((grant) => subtreeIds(f.orgId).includes(grant.primaryOrgId)))
      && (!f.roleId || member.roleId === f.roleId)
      && (!f.status || member.status === f.status);
  });
  return `<div class="filters">
    <input class="field search-field" id="member-search" placeholder="按邮箱 / 昵称搜索" value="${escapeHtml(state.memberSearchDraft)}">
    <select class="select" id="member-line-filter"><option value="">全部业务线</option>${lines.map((line) => `<option ${f.line === line ? "selected" : ""}>${line}</option>`).join("")}</select>
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
      <td><div class="role-line">${memberGrants(member).map((grant) => `<span>${escapeHtml(grant.line)} · ${escapeHtml(scopeLabel(grant))}</span><span class="secondary-text">${grant.scope === "nodes" ? (grant.orgIds || []).map(orgPath).join("；") : ""}</span>`).join("")}</div></td>
      <td><div class="path">${memberGrants(member).map((grant) => `${escapeHtml(grant.line)}：${escapeHtml(orgPath(grant.primaryOrgId))}`).join("<br>")}</div></td>
      <td><span class="tag ${member.status === "启用" ? "green" : ""}">${member.status}</span></td>
      <td>${member.lastLogin || "—"}</td>
      <td>${member.userType === "CC" ? '<span class="tag blue">已绑定</span>' : "—"}</td>
      <td>${memberGrants(member).some((grant) => grant.scope === "global") ? '<span class="secondary-text">系统内置</span>' : `<button class="btn ghost" data-member-edit="${member.id}">编辑成员</button>`}</td>
    </tr>`).join("") || '<tr><td colspan="10" class="secondary-text">暂无匹配成员</td></tr>'}</tbody>
  </table></div>`;
}

function renderRolesTab() {
  const modules = [
    ["管理看板", "查看", "查看", "查看", "无"],
    ["销售中心", "操作", "操作", "操作", "按角色权限"],
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
  <div class="table-wrap"><table><thead><tr><th>模块</th><th>操作行为</th><th>操作对象</th><th>变更摘要</th><th>操作人</th><th>操作时间</th></tr></thead>
    <tbody>${logs.map((log) => `<tr><td>${log.module}</td><td><span class="tag ${log.action === "新增" ? "green" : "blue"}">${log.action}</span></td><td>${escapeHtml(log.target)}</td><td>${escapeHtml(log.detail || "—")}</td><td>${escapeHtml(log.actor)}</td><td>${log.time}</td></tr>`).join("")}</tbody>
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

function allowedOperatorOrgs() {
  const allowed = operatorAllowedIds();
  return orgs.filter((org) => allowed.has(org.id));
}

function renderSales() {
  const allowed = allowedOperatorOrgs();
  const allowedIds = new Set(allowed.map((org) => org.id));
  if (!allowedIds.has(state.salesOrg)) state.salesOrg = currentUser().primaryOrgId;
  const selectedIds = new Set(subtreeIds(state.salesOrg));
  const scopedLeads = leads.filter((lead) => selectedIds.has(lead.orgId));
  const firstCcIds = [...new Set(scopedLeads.map((lead) => lead.firstOwnerId).filter(Boolean))];
  const currentCcIds = [...new Set(scopedLeads.map((lead) => lead.ownerId).filter(Boolean))];
  const rows = scopedLeads.filter((lead) =>
    (!state.salesSearch || `${lead.name}${lead.account}${lead.id}`.toLowerCase().includes(state.salesSearch.toLowerCase()))
    && (!state.salesFirstCc || lead.firstOwnerId === state.salesFirstCc)
    && (!state.salesCurrentCc || lead.ownerId === state.salesCurrentCc)
    && (!state.salesStage || lead.stage === state.salesStage)
    && (!state.salesStatus || lead.status === state.salesStatus)
    && (state.salesTab !== "pool" || !lead.ownerId)
    && (state.salesTab !== "follow" || !!lead.ownerId)
    && state.salesTab !== "calls");
  el.content.innerHTML = `<section class="page-card">
    <div class="page-heading"><div class="section-title">销售线索</div><button class="btn" data-action="sales-settings">${icon("filter")}分配与掉库设置</button></div>
    <div class="table-tabs">
      <button class="${state.salesTab === "pool" ? "is-active" : ""}" data-sales-tab="pool">公海 (${leads.filter((lead) => !lead.ownerId && selectedIds.has(lead.orgId)).length})</button>
      <button class="${state.salesTab === "follow" ? "is-active" : ""}" data-sales-tab="follow">我的跟进 (${leads.filter((lead) => lead.ownerId && selectedIds.has(lead.orgId)).length})</button>
      <button class="${state.salesTab === "calls" ? "is-active" : ""}" data-sales-tab="calls">通话记录</button>
    </div>
    <div class="filters">
      <input class="field search-field" id="sales-search" placeholder="搜索用户 ID / 姓名 / 登录账号" value="${escapeHtml(state.salesSearch)}">
      <select class="select"><option>越南</option></select>
      <select class="select" id="sales-org-filter">${allowed.map((org) => `<option value="${org.id}" ${state.salesOrg === org.id ? "selected" : ""}>${"　".repeat(Math.max(0, org.level - 2))}${escapeHtml(org.name)}</option>`).join("")}</select>
      <select class="select" id="sales-first-cc-filter"><option value="">全部首位 CC</option>${firstCcIds.map((id) => `<option value="${id}" ${state.salesFirstCc === id ? "selected" : ""}>${escapeHtml(memberName(id))}</option>`).join("")}</select>
      <select class="select" id="sales-current-cc-filter"><option value="">全部当前 CC</option>${currentCcIds.map((id) => `<option value="${id}" ${state.salesCurrentCc === id ? "selected" : ""}>${escapeHtml(memberName(id))}</option>`).join("")}</select>
      <select class="select" id="sales-stage-filter"><option value="">全部跟进阶段</option>${["跟进中","已预约","已付费","暂不跟进","待领取"].map((stage) => `<option ${state.salesStage === stage ? "selected" : ""}>${stage}</option>`).join("")}</select>
      <select class="select" id="sales-status-filter"><option value="">全部用户状态</option>${["已注册","已付费"].map((status) => `<option ${state.salesStatus === status ? "selected" : ""}>${status}</option>`).join("")}</select>
      <div class="actions"><button class="btn" data-action="reset-sales">重置筛选</button><button class="btn">${icon("download")}下载数据</button></div>
    </div>
    <div class="table-wrap"><table>
      <thead><tr><th>用户 ID</th><th>学生姓名</th><th>购买意向</th><th>用户状态</th><th>用户类型</th><th>年龄段</th><th>课程等级</th><th>登录账号</th><th>渠道来源-落地页</th><th>业务线</th><th>归属组织</th><th>预约外呼</th><th>注册时间</th><th>首位 CC</th><th>CC</th><th>跟进阶段</th><th>操作</th></tr></thead>
      <tbody>${rows.map((lead) => `<tr>
        <td><span class="primary-text">${lead.id}</span></td><td>${escapeHtml(lead.name)}</td><td><span class="tag ${lead.intent === "有意向" ? "green" : lead.intent === "无意向" ? "red" : ""}">${lead.intent}</span></td>
        <td><span class="tag ${lead.status === "已付费" ? "green" : "blue"}">${lead.status}</span></td><td>${lead.type}</td><td>${lead.age}</td><td>${lead.course}</td><td>${lead.account}</td><td>${lead.source}</td><td>越南</td>
        <td><span class="path">${escapeHtml(orgPath(lead.orgId))}</span></td><td><span class="tag">${lead.phone}</span></td><td>${lead.register}</td><td>${lead.firstOwnerId ? escapeHtml(memberName(lead.firstOwnerId)) : "—"}</td><td>${lead.ownerId ? escapeHtml(memberName(lead.ownerId)) : "—"}</td><td>${lead.stage}</td>
        <td>${!lead.ownerId ? `<button class="btn ghost" data-lead-assign="${lead.id}">分配</button>` : `<button class="btn ghost" data-action="view-lead">${icon("phone")}外呼</button>`}</td>
      </tr>`).join("") || `<tr><td colspan="17" class="secondary-text">当前筛选范围暂无线索</td></tr>`}</tbody>
    </table></div>
    <div class="muted-note" style="margin-top:10px">数据范围：${escapeHtml(operatorScopeLabel())}</div>
  </section>`;
}

function aggregateFor(orgId) {
  const ids = new Set(subtreeIds(orgId));
  const scoped = leads.filter((lead) => ids.has(lead.orgId));
  return {
    leads: scoped.length,
    directLeads: leads.filter((lead) => lead.orgId === orgId).length,
    members: members.filter((member) => member.status === "启用" && memberGrants(member).some((grant) => ids.has(grant.primaryOrgId))).length,
    organizations: ids.size
  };
}

const METRIC_HELP = {
  organizations: "可见组织：当前账号授权组织树中，所选节点及其全部下级、状态为启用的组织节点数。",
  members: "可见成员：主组织位于所选组织及全部下级、状态为启用的成员数，按成员 ID 去重。",
  leads: "所属范围线索：当前业务归属组织位于所选组织及全部下级的线索数，按 Lead ID 去重。",
  directLeads: "直属线索：当前业务归属组织恰好等于所选节点的线索数，按 Lead ID 去重。"
};

function metricHelp(key) {
  const text = `${METRIC_HELP[key]} 统计范围：当前业务线与所选组织；次数按业务唯一标识去重。`;
  return `<button class="metric-help" type="button" data-metric-help="${escapeHtml(text)}" title="${escapeHtml(text)}">口径</button>`;
}

function renderDashboard() {
  const allowed = allowedOperatorOrgs();
  if (!operatorAllowedIds().has(state.dashboardOrg)) state.dashboardOrg = currentUser().primaryOrgId;
  const data = aggregateFor(state.dashboardOrg);
  const org = orgById(state.dashboardOrg) || orgById("r1");
  const metrics = [
    ["visible-orgs", "可见组织", data.organizations, "当前组织及全部下级"],
    ["visible-members", "可见成员", data.members, "有效主组织落在范围内"],
    ["scope-leads", "所属范围线索", data.leads, "按 Lead ID 去重"],
    ["direct-leads", "直属线索", data.directLeads, "仅当前所选组织"]
  ];
  el.content.innerHTML = `<section class="page-card">
    <div class="page-heading"><div class="section-title">数据权限</div></div>
    <div class="filters">
      <select class="select"><option>越南业务线</option></select>
      <select class="select" id="dashboard-org-filter">${allowed.map((item) => `<option value="${item.id}" ${state.dashboardOrg === item.id ? "selected" : ""}>${"　".repeat(Math.max(0, item.level - 2))}${escapeHtml(item.name)}</option>`).join("")}</select>
    </div>
    <div class="org-summary"><div><h2>${escapeHtml(org.name)}</h2><p>${escapeHtml(orgPath(org.id))}</p></div><span class="tag blue">包含全部下级</span></div>
    <div class="metric-grid">
      ${metrics.map(([key, label, value, foot]) => `<article class="metric-card"><div class="metric-label">${label}</div><div class="metric-value">${value}</div><div class="metric-foot">${foot}</div>${metricHelp(key)}</article>`).join("")}
    </div>
    <div class="dashboard-panel">
      <div class="panel-title"><h2>权限范围说明</h2><p>当前身份：${escapeHtml(currentUser().name)} · ${escapeHtml(roleName(currentUser().roleId))}</p></div>
      <div class="table-wrap"><table><thead><tr><th>数据</th><th>访问规则</th><th>导出</th></tr></thead><tbody>
        <tr><td>销售线索</td><td>${escapeHtml(operatorScopeLabel())}</td><td>独立权限</td></tr>
        <tr><td>成员与组织</td><td>授权组织内查看和配置</td><td>本期不新增</td></tr>
        <tr><td>通话与跟进</td><td>继承关联线索范围</td><td>沿用现有权限</td></tr>
        <tr><td>管理层数据</td><td>汇总和下钻使用同一范围</td><td>独立权限</td></tr>
      </tbody></table></div>
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
  const line = editing?.line || orgById(parent)?.line || memberGrants(currentUser())[0]?.line;
  const title = editing ? "编辑组织" : nextLevel === 2 ? "新增区" : nextLevel === 3 ? "新增部" : "新增组";
  openModal(`<form id="org-form">
    <div class="modal-head"><h2 id="modal-title">${title}</h2><button class="icon-btn" type="button" data-action="close-modal">${icon("close")}</button></div>
    ${editing ? '<div class="permission-hint">更换上级、合并和停用请使用组织列表中的独立操作入口，系统会在保存前展示影响并要求填写原因。</div>' : ""}
    <div class="form-section">组织信息</div>
    <div class="form-grid">
      <div class="form-item"><label>业务线</label><input class="field" value="${escapeHtml(line || "—")}" disabled></div>
      ${editing?.level === 1
        ? '<div class="form-item"><label>上级组织</label><input class="field" value="—" disabled></div>'
        : editing
          ? `<div class="form-item"><label>上级组织</label><input class="field" value="${escapeHtml(orgById(editing.parentId)?.name || "—")}" disabled></div>`
          : `<div class="form-item"><label>上级组织 <em>*</em></label><select class="select" name="parentId">${orgOptions(line, parent || "")}</select></div>`}
      <div class="form-item full"><label>组织名称 <em>*</em></label><input class="field" name="name" value="${escapeHtml(editing?.name || "")}" placeholder="请输入组织名称"></div>
      <div class="form-item"><label>状态</label>${editing
        ? `<input class="field" value="${editing.status}" disabled>`
        : '<select class="select" name="status"><option>启用</option><option>停用</option></select>'}</div>
    </div>
    <div class="form-error" id="org-error"></div>
    <div class="modal-actions"><button class="btn" type="button" data-action="close-modal">取消</button><button class="btn primary" type="submit">保存</button></div>
  </form>`);
  document.getElementById("org-form").addEventListener("submit", (event) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = String(form.get("name") || "").trim();
    const parentId = editing ? editing.parentId : String(form.get("parentId") || "");
    const parentOrg = orgById(parentId);
    if (!name) return setError("org-error", "请输入组织名称");
    if (editing?.level !== 1) {
      if (!parentOrg || parentOrg.level >= 4) return setError("org-error", "组织最多四层，不能继续新增下级");
      if (!operatorAllowedIds().has(parentId)) return setError("org-error", "上级组织超出当前操作人的数据权限");
    }
    const maxDescendantDepth = Math.max(0, ...descendantsOf(editing?.id).map((org) => org.level - (editing?.level || 1)));
    if (editing && editing.level !== 1 && parentOrg.level + 1 + maxDescendantDepth > 4) return setError("org-error", "移动后会超过四层，请先调整下级组织");
    if (orgs.some((org) => org.id !== editing?.id && org.parentId === parentId && org.name === name)) return setError("org-error", "同一上级下已存在同名组织");
    if (editing) {
      Object.assign(editing, {
        name,
        parentId: editing.level === 1 ? null : parentId,
        status: editing.status,
        level: editing.level === 1 ? 1 : parentOrg.level + 1
      });
      state.logs.unshift({ time: "2026-11-11 16:36:20", module: "组织架构", action: "编辑", target: orgPath(editing.id), actor: "lin.yue@dinoai.ai" });
    } else {
      const org = { id: `org_${Date.now()}`, name, line: parentOrg.line, parentId, status: String(form.get("status") || "启用"), level: parentOrg.level + 1 };
      orgs.push(org);
      state.selectedOrg = org.id;
      state.logs.unshift({ time: "2026-11-11 16:36:20", module: "组织架构", action: "新增", target: orgPath(org.id), actor: "lin.yue@dinoai.ai" });
    }
    closeModal();
    render();
    showToast("组织配置已保存");
  });
}

function openBusinessLineModal() {
  openModal(`<form id="business-line-form">
    <div class="modal-head"><h2 id="modal-title">新增业务线</h2><button class="icon-btn" type="button" data-action="close-modal">${icon("close")}</button></div>
    <div class="form-section">业务线信息</div>
    <div class="form-grid">
      <div class="form-item full"><label>业务线名称 <em>*</em></label><input class="field" name="name" placeholder="请输入业务线名称"></div>
      <div class="form-item"><label>状态</label><select class="select" name="status"><option>启用</option><option>停用</option></select></div>
    </div>
    <div class="form-error" id="line-error"></div>
    <div class="modal-actions"><button class="btn" type="button" data-action="close-modal">取消</button><button class="btn primary" type="submit">保存</button></div>
  </form>`);
  document.getElementById("business-line-form").addEventListener("submit", (event) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = String(form.get("name") || "").trim();
    if (!name) return setError("line-error", "请输入业务线名称");
    if (orgs.some((org) => org.level === 1 && org.name === name)) return setError("line-error", "业务线名称不能重复");
    const org = { id: `line_${Date.now()}`, name, line: name, level: 1, parentId: null, status: String(form.get("status") || "启用") };
    orgs.push(org);
    state.selectedOrg = org.id;
    state.logs.unshift({ time: "2026-11-11 18:42:10", module: "组织架构", action: "新增业务线", target: name, actor: currentUser().email });
    closeModal();
    render();
    showToast("业务线已新增");
  });
}

function setError(id, text) {
  const target = document.getElementById(id);
  if (target) target.textContent = text;
}

function organizationChangeTargetOptions(org, mode) {
  const allowed = operatorAllowedIds();
  const affectedIds = new Set(subtreeIds(org.id));
  const descendantDepth = Math.max(0, ...descendantsOf(org.id).map((node) => node.level - org.level));
  return orgs
    .filter((candidate) => candidate.id !== org.id
      && candidate.line === org.line
      && candidate.status === "启用"
      && !affectedIds.has(candidate.id)
      && allowed.has(candidate.id)
      && (mode !== "move" || candidate.id !== org.parentId)
      && (mode !== "move" || candidate.level + descendantDepth + 1 <= 4))
    .map((candidate) => `<option value="${candidate.id}">${"　".repeat(candidate.level - 1)}${escapeHtml(candidate.name)} · ${levelName(candidate.level)}</option>`)
    .join("");
}

function impactSummaryHtml(impact) {
  return `<div class="impact-summary">
    <div class="impact-card"><span>受影响成员</span><strong>${impact.members}</strong><small>按成员去重</small></div>
    <div class="impact-card"><span>受影响线索</span><strong>${impact.leads}</strong><small>当前归属在节点子树内</small></div>
    <div class="impact-card"><span>受影响分配规则</span><strong>${impact.rules}</strong><small>状态为启用</small></div>
    <div class="impact-card"><span>涉及组织节点</span><strong>${impact.organizations}</strong><small>含当前节点及下级</small></div>
  </div>`;
}

function openOrganizationImpactModal(mode, orgId) {
  const org = orgById(orgId);
  if (!org || !operatorAllowedIds().has(org.id)) return;
  const impact = orgImpact(org.id);
  const configs = {
    move: {
      title: "更换上级",
      hint: "保存后，该节点及全部下级会进入新的组织路径，相关成员的数据范围和看板范围随之调整。",
      confirm: "确认更换",
      action: "更换上级"
    },
    merge: {
      title: "合并组织",
      hint: "合并后，当前成员、线索和分配规则按目标组织处理；已发生业务的组织快照不回写。",
      confirm: "确认合并",
      action: "合并"
    },
    disable: {
      title: "停用组织",
      hint: "停用后停止新增成员、授权和线索分配，历史数据仍可查看。",
      confirm: "确认停用",
      action: "停用"
    }
  };
  const config = configs[mode];
  const options = mode === "disable" ? "" : organizationChangeTargetOptions(org, mode);
  openModal(`<form id="org-impact-form">
    <div class="modal-head"><h2 id="modal-title">${config.title}</h2><button class="icon-btn" type="button" data-action="close-modal">${icon("close")}</button></div>
    <div class="permission-hint">操作对象：${escapeHtml(orgPath(org.id))}。${config.hint}</div>
    ${impactSummaryHtml(impact)}
    ${mode === "move" ? `<div class="form-section">调整后归属</div><div class="form-item full">
      <label>新的上级组织 <em>*</em></label>
      <select class="select" name="targetOrgId"><option value="">请选择新的上级组织</option>${options}</select>
    </div>` : ""}
    ${mode === "merge" ? `<div class="form-section">合并目标</div><div class="form-item full">
      <label>合并到 <em>*</em></label>
      <select class="select" name="targetOrgId"><option value="">请选择目标组织</option>${options}</select>
    </div>` : ""}
    <div class="form-item full" style="margin-top:14px">
      <label>操作原因 <em>*</em></label>
      <textarea class="field impact-reason" name="reason" placeholder="请填写本次组织调整的原因"></textarea>
    </div>
    <div class="form-error" id="org-impact-error"></div>
    <div class="modal-actions"><button class="btn" type="button" data-action="close-modal">取消</button><button class="btn primary" type="submit">${config.confirm}</button></div>
  </form>`);

  document.getElementById("org-impact-form").addEventListener("submit", (event) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const reason = String(form.get("reason") || "").trim();
    const targetId = String(form.get("targetOrgId") || "");
    if (!reason) return setError("org-impact-error", "请填写操作原因");
    if (mode !== "disable" && !targetId) return setError("org-impact-error", mode === "move" ? "请选择新的上级组织" : "请选择合并目标");

    const timestamp = "2026-11-11 19:12:36";
    if (mode === "move") {
      const oldParent = orgById(org.parentId)?.name || "—";
      const newParent = orgById(targetId);
      org.parentId = targetId;
      updateOrgLevels(org.id);
      state.logs.unshift({
        time: timestamp,
        module: "组织架构",
        action: "更换上级",
        target: orgPath(org.id),
        detail: `${oldParent} → ${newParent?.name || "—"}；原因：${reason}`,
        actor: currentUser().email
      });
      closeModal();
      render();
      return showToast("组织上级已更换");
    }

    if (mode === "merge") {
      const target = orgById(targetId);
      if (!target) return setError("org-impact-error", "目标组织已发生变化，请刷新后重试");
      const affectedIds = new Set(subtreeIds(org.id));
      childrenOf(org.id).forEach((child) => {
        child.parentId = target.id;
        updateOrgLevels(child.id);
      });
      members.forEach((member) => {
        memberGrants(member).forEach((grant) => {
          if (affectedIds.has(grant.primaryOrgId)) grant.primaryOrgId = target.id;
          grant.orgIds = [...new Set((grant.orgIds || []).map((nodeId) => affectedIds.has(nodeId) ? target.id : nodeId))];
        });
        const primary = memberGrants(member)[0];
        if (primary) {
          member.line = primary.line;
          member.scope = primary.scope;
          member.orgIds = [...(primary.orgIds || [])];
          member.primaryOrgId = primary.primaryOrgId;
        }
      });
      leads.forEach((lead) => {
        if (affectedIds.has(lead.orgId)) lead.orgId = target.id;
      });
      assignmentRules.forEach((rule) => {
        if (affectedIds.has(rule.orgId)) rule.orgId = target.id;
      });
      org.status = "停用";
      state.selectedOrg = target.id;
      state.logs.unshift({
        time: timestamp,
        module: "组织架构",
        action: "合并",
        target: `${orgPath(org.id)} → ${orgPath(target.id)}`,
        detail: `成员 ${impact.members}、线索 ${impact.leads}、规则 ${impact.rules}；原因：${reason}`,
        actor: currentUser().email
      });
      closeModal();
      render();
      return showToast("组织已合并");
    }

    org.status = "停用";
    state.logs.unshift({
      time: timestamp,
      module: "组织架构",
      action: "停用",
      target: orgPath(org.id),
      detail: `成员 ${impact.members}、线索 ${impact.leads}、规则 ${impact.rules}；原因：${reason}`,
      actor: currentUser().email
    });
    closeModal();
    render();
    showToast("组织已停用");
  });
}

function enableOrganization(orgId) {
  const org = orgById(orgId);
  if (!org || !operatorAllowedIds().has(org.id)) return;
  org.status = "启用";
  state.logs.unshift({
    time: "2026-11-11 19:15:08",
    module: "组织架构",
    action: "启用",
    target: orgPath(org.id),
    detail: "恢复新增成员、授权和线索分配",
    actor: currentUser().email
  });
  render();
  showToast("组织已启用");
}

function finishMemberSave({ member, next, name, grants, changedLines, affectedLeads, leadChoice }) {
  if (member) Object.assign(member, next);
  else members.unshift(next);

  if (affectedLeads.length) {
    for (const lead of affectedLeads) {
      if (leadChoice === "carry") {
        const line = orgById(lead.orgId)?.line;
        const targetGrant = grants.find((grant) => grant.line === line);
        if (targetGrant) lead.orgId = targetGrant.primaryOrgId;
      } else {
        lead.ownerId = "";
        lead.stage = "待领取";
        const fallbackOwner = members.find((candidate) => candidate.id !== member?.id
          && candidate.status === "启用"
          && candidate.userType === "CC"
          && memberGrants(candidate).some((grant) => grant.primaryOrgId === lead.orgId));
        if (fallbackOwner) {
          lead.ownerId = fallbackOwner.id;
          lead.stage = "跟进中";
        }
      }
    }
  }

  state.logs.unshift({
    time: "2026-11-11 18:58:24",
    module: "成员账号",
    action: member ? "编辑" : "新增",
    target: `${name} · ${grants.map((grant) => `${grant.line}/${orgPath(grant.primaryOrgId)}`).join("；")}`,
    actor: currentUser().email
  });
  if (affectedLeads.length) {
    state.logs.unshift({
      time: "2026-11-11 18:58:24",
      module: "成员账号",
      action: leadChoice === "carry" ? "调岗带走线索" : "调岗留存线索",
      target: `${name} · ${affectedLeads.length} 条 · ${[...changedLines].join("、")}`,
      actor: currentUser().email
    });
  }
  closeModal();
  render();
  showToast("成员配置已保存");
}

function openPrimaryOrgChangePrompt(saveContext) {
  const { name, affectedLeads, changedLines } = saveContext;
  openModal(`<div class="modal-head"><h2 id="modal-title">调整线索归属</h2><button class="icon-btn" type="button" data-action="close-modal">${icon("close")}</button></div>
    <div class="permission-hint">${escapeHtml(name)}的${escapeHtml([...changedLines].join("、"))}业务线主组织已变更，名下 ${affectedLeads.length} 条线索需要处理。</div>
    <div class="table-wrap"><table><thead><tr><th>线索</th><th>当前归属组织</th></tr></thead><tbody>
      ${affectedLeads.slice(0, 6).map((lead) => `<tr><td>${escapeHtml(lead.id)} · ${escapeHtml(lead.name)}</td><td>${escapeHtml(orgPath(lead.orgId))}</td></tr>`).join("")}
    </tbody></table></div>
    ${affectedLeads.length > 6 ? `<div class="secondary-text" style="margin-top:8px">另有 ${affectedLeads.length - 6} 条线索</div>` : ""}
    <div class="form-error" id="org-change-error"></div>
    <div class="modal-actions">
      <button class="btn" type="button" data-org-change-cancel>取消</button>
      <button class="btn" type="button" data-org-change-choice="leave">留在原组织自动分配</button>
      <button class="btn primary" type="button" data-org-change-choice="carry">直接带走</button>
    </div>`);
  el.modal.querySelector("[data-org-change-cancel]").addEventListener("click", closeModal);
  el.modal.querySelectorAll("[data-org-change-choice]").forEach((button) => {
    button.addEventListener("click", () => {
      finishMemberSave({ ...saveContext, leadChoice: button.dataset.orgChangeChoice });
    });
  });
}

function memberGrantOrgs(line) {
  const allowed = operatorAllowedIds();
  return orgs.filter((org) => org.line === line && org.level > 1 && allowed.has(org.id));
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
  const draft = window.__memberGrantDraft.get(line);
  const selectedIds = draft?.orgIds || new Set();
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
    <div class="org-select-trigger ${window.__openGrantLine === line ? "is-open" : ""}" role="button" tabindex="0" data-toggle-grant-panel="${line}">
      <span class="org-chip-list">${chips || '<span class="secondary-text">请选择组织，可多选</span>'}</span><span class="select-caret">⌄</span>
    </div>
    ${window.__openGrantLine === line ? `<div class="org-select-panel" id="member-org-panel">
      <div class="org-select-panel-head"><span>可选择父节点或任意下级</span><span>父节点自动包含全部下级</span></div>
      ${rows || '<div class="org-select-empty">当前操作人没有可选组织</div>'}
    </div>` : ""}
  </div>`;
}

function memberBusinessLineSelectorHtml() {
  const lines = visibleBusinessLineRoots();
  return `<div class="business-line-checks">${lines.map((org) => `
    <label class="business-line-check ${window.__memberGrantDraft.has(org.line) ? "is-selected" : ""}">
      <input type="checkbox" data-member-line="${escapeHtml(org.line)}" ${window.__memberGrantDraft.has(org.line) ? "checked" : ""}>
      <span>${escapeHtml(org.name)}</span>
    </label>`).join("")}</div>`;
}

function memberGrantCardsHtml() {
  const lines = [...window.__memberGrantDraft.keys()];
  if (!lines.length) return '<div class="org-select-empty">请至少选择一条业务线</div>';
  return lines.map((line) => {
    const draft = window.__memberGrantDraft.get(line);
    const displayName = orgs.find((org) => org.level === 1 && org.line === line)?.name || line;
    const rootOrg = orgs.find((org) => org.level === 1 && org.line === line);
    const canGrantLine = !!rootOrg && operatorAllowedIds().has(rootOrg.id);
    return `<section class="grant-card" data-grant-card="${escapeHtml(line)}">
      <div class="grant-card-head"><strong>${escapeHtml(displayName)}</strong><button class="btn ghost" type="button" data-remove-member-line="${escapeHtml(line)}">移除</button></div>
      <div class="form-grid">
        <div class="form-item"><label>数据范围 <em>*</em></label>
          <select class="select" data-grant-scope="${escapeHtml(line)}">
            <option value="self" ${draft.scope === "self" ? "selected" : ""}>本人</option>
            <option value="nodes" ${draft.scope === "nodes" ? "selected" : ""}>指定组织及下级</option>
            ${canGrantLine ? `<option value="line" ${draft.scope === "line" ? "selected" : ""}>业务线全部</option>` : ""}
          </select>
        </div>
        <div class="form-item"><label>主组织 <em>*</em></label>
          <select class="select" data-grant-primary="${escapeHtml(line)}"><option value="">请选择主组织</option>${orgOptions(line, draft.primaryOrgId || "")}</select>
        </div>
        ${draft.scope === "nodes" ? `<div class="form-item full"><label>授权组织 <em>*</em></label><div>${memberOrgSelectorHtml(line)}</div></div>` : ""}
        ${draft.scope === "self" ? '<div class="form-item full"><div class="scope-note">本人仅包含当前线索归属人为本人账号的线索及直接关联数据；不含公共池和其他成员线索。公共池领取由功能角色和主组织另行控制。</div></div>' : ""}
      </div>
    </section>`;
  }).join("");
}

function openMemberModal(memberId = "") {
  const member = members.find((item) => item.id === memberId);
  const existingGrants = member ? memberGrants(member).filter((grant) => grant.scope !== "global") : [];
  window.__memberGrantDraft = new Map(existingGrants.map((grant) => [grant.line, {
    scope: grant.scope,
    orgIds: new Set(grant.orgIds || []),
    primaryOrgId: grant.primaryOrgId || ""
  }]));
  window.__openGrantLine = "";
  const userRole = currentUser().roleId;
  const roleIds = userRole === "role_super" ? roles.map((role) => role.id) : userRole === "role_line" ? ["role_line", "role_region", "role_sales"] : ["role_region", "role_sales"];
  const assignableRoles = roles.filter((role) => roleIds.includes(role.id));
  openModal(`<form id="member-form">
    <div class="modal-head"><h2 id="modal-title">${member ? "编辑成员" : "新增成员"}</h2><button class="icon-btn" type="button" data-action="close-modal">${icon("close")}</button></div>
    <div class="form-section">基本信息</div>
    <div class="form-grid">
      <div class="form-item"><label>姓名 <em>*</em></label><input class="field" name="name" value="${escapeHtml(member?.name || "")}" placeholder="请输入姓名"></div>
      <div class="form-item"><label>登录邮箱 <em>*</em></label><input class="field" name="email" value="${escapeHtml(member?.email || "")}" placeholder="name@dinoai.ai"></div>
      <div class="form-item full"><label>人员类型 <em>*</em></label><select class="select" name="userType"><option ${member?.userType === "CC" ? "selected" : ""}>CC</option><option ${member?.userType !== "CC" ? "selected" : ""}>其他</option></select></div>
    </div>
    <div class="form-section" style="margin-top:18px">权限配置</div>
    <div class="permission-hint">功能角色决定可用功能；数据授权决定可操作的组织数据；主组织决定人员行政归属，不自动增加数据或管理权限。</div>
    <div class="form-grid">
      <div class="form-item full"><label>功能角色 <em>*</em></label><select class="select" name="roleId"><option value="">请选择功能角色</option>${assignableRoles.map((role) => `<option value="${role.id}" ${member?.roleId === role.id ? "selected" : ""}>${role.name}</option>`).join("")}</select></div>
      <div class="form-item full"><label>业务线（可多选） <em>*</em></label><div id="member-line-selector">${memberBusinessLineSelectorHtml()}</div></div>
      <div class="form-item full"><div id="member-grant-cards">${memberGrantCardsHtml()}</div></div>
    </div>
    <div class="form-error" id="member-error"></div>
    <div class="modal-actions"><button class="btn" type="button" data-action="close-modal">取消</button><button class="btn primary" type="submit">保存</button></div>
  </form>`);

  const refreshGrantEditor = () => {
    document.getElementById("member-line-selector").innerHTML = memberBusinessLineSelectorHtml();
    document.getElementById("member-grant-cards").innerHTML = memberGrantCardsHtml();
  };
  document.getElementById("member-form").addEventListener("change", (event) => {
    const memberLine = event.target.dataset.memberLine;
    if (memberLine) {
      if (event.target.checked) {
        window.__memberGrantDraft.set(memberLine, { scope: "self", orgIds: new Set(), primaryOrgId: "" });
      } else {
        window.__memberGrantDraft.delete(memberLine);
        if (window.__openGrantLine === memberLine) window.__openGrantLine = "";
      }
      refreshGrantEditor();
      return;
    }
    const grantLine = event.target.dataset.grantScope;
    if (grantLine) {
      const draft = window.__memberGrantDraft.get(grantLine);
      draft.scope = event.target.value;
      if (draft.scope !== "nodes") draft.orgIds.clear();
      if (draft.scope === "line") {
        const rootOrg = orgs.find((org) => org.level === 1 && org.line === grantLine);
        if (rootOrg) draft.primaryOrgId = rootOrg.id;
      }
      refreshGrantEditor();
      return;
    }
    const primaryLine = event.target.dataset.grantPrimary;
    if (primaryLine) {
      window.__memberGrantDraft.get(primaryLine).primaryOrgId = event.target.value;
      return;
    }
    if (event.target.matches("[data-grant-org]")) {
      const id = event.target.dataset.grantOrg;
      const line = orgById(id)?.line;
      const draft = window.__memberGrantDraft.get(line);
      if (event.target.checked) {
        draft.orgIds.add(id);
        descendantsOf(id).forEach((node) => draft.orgIds.delete(node.id));
      } else {
        draft.orgIds.delete(id);
      }
      refreshGrantEditor();
    }
  });
  document.getElementById("member-form").addEventListener("click", (event) => {
    const toggle = event.target.closest("[data-toggle-grant-panel]");
    if (toggle) {
      window.__openGrantLine = window.__openGrantLine === toggle.dataset.toggleGrantPanel ? "" : toggle.dataset.toggleGrantPanel;
      refreshGrantEditor();
    }
    const remove = event.target.closest("[data-remove-grant]");
    if (remove) {
      const line = orgById(remove.dataset.removeGrant)?.line;
      window.__memberGrantDraft.get(line)?.orgIds.delete(remove.dataset.removeGrant);
      refreshGrantEditor();
    }
    const removeLine = event.target.closest("[data-remove-member-line]");
    if (removeLine) {
      window.__memberGrantDraft.delete(removeLine.dataset.removeMemberLine);
      refreshGrantEditor();
    }
  });
  document.getElementById("member-form").addEventListener("submit", (event) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = String(form.get("name") || "").trim();
    const email = String(form.get("email") || "").trim().toLowerCase();
    const roleId = String(form.get("roleId") || "");
    const allowed = operatorAllowedIds();
    const grants = [...window.__memberGrantDraft.entries()].map(([line, draft]) => ({
      line,
      scope: draft.scope,
      orgIds: [...draft.orgIds],
      primaryOrgId: draft.primaryOrgId
    }));
    if (!name || !email || !roleId || !grants.length) return setError("member-error", "请完整填写姓名、邮箱、角色并至少选择一条业务线");
    if (!email.includes("@")) return setError("member-error", "请输入有效邮箱");
    if (members.some((item) => item.id !== member?.id && item.email === email)) return setError("member-error", "登录邮箱已存在");
    for (const grant of grants) {
      if (!grant.primaryOrgId) return setError("member-error", `${grant.line}业务线请选择主组织`);
      if (!allowed.has(grant.primaryOrgId)) return setError("member-error", "主组织超出当前操作人的数据权限");
      if (orgById(grant.primaryOrgId)?.line !== grant.line) return setError("member-error", "主组织必须属于对应业务线");
      const rootOrg = orgs.find((org) => org.level === 1 && org.line === grant.line);
      if (grant.scope === "line" && (!rootOrg || !allowed.has(rootOrg.id))) return setError("member-error", "当前操作人无权授予该业务线全部数据");
      if (grant.scope === "nodes" && !grant.orgIds.length) return setError("member-error", `${grant.line}业务线请至少选择一个授权组织`);
      if (grant.scope === "nodes" && grant.orgIds.some((id) => orgById(id)?.level === 1 || !allowed.has(id))) return setError("member-error", "授权组织超出当前操作人的数据权限");
    }
    const primary = grants[0];
    const next = {
      id: member?.id || `m_${Date.now()}`,
      name,
      email,
      userType: String(form.get("userType") || "其他"),
      roleId,
      line: primary.line,
      scope: primary.scope,
      orgIds: primary.scope === "nodes" ? primary.orgIds : [],
      primaryOrgId: primary.primaryOrgId,
      grants,
      status: member?.status || "启用",
      lastLogin: member?.lastLogin || "—"
    };
    const previousGrants = member ? memberGrants(member) : [];
    const changedLines = new Set(grants.filter((grant) => {
      const previous = previousGrants.find((item) => item.line === grant.line);
      return previous && previous.primaryOrgId !== grant.primaryOrgId;
    }).map((grant) => grant.line));
    const affectedLeads = member
      ? leads.filter((lead) => lead.ownerId === member.id && changedLines.has(orgById(lead.orgId)?.line))
      : [];
    const saveContext = { member, next, name, grants, changedLines, affectedLeads };
    if (affectedLeads.length) {
      openPrimaryOrgChangePrompt(saveContext);
    } else {
      finishMemberSave(saveContext);
    }
  });
}

function openAssignmentModal(leadId) {
  const lead = leads.find((item) => item.id === leadId);
  if (!lead) return;
  const leadLine = orgById(lead.orgId)?.line;
  const candidates = members.filter((member) => member.status === "启用" && member.userType === "CC"
    && memberGrants(member).some((grant) => grant.line === leadLine && grant.primaryOrgId));
  openModal(`<form id="assign-form">
    <div class="modal-head"><h2 id="modal-title">分配线索</h2><button class="icon-btn" type="button" data-action="close-modal">${icon("close")}</button></div>
    <div class="form-grid">
      <div class="form-item full"><label>线索</label><input class="field" value="${lead.id} · ${escapeHtml(lead.name)}" disabled></div>
      <div class="form-item full"><label>当前归属组织</label><input class="field" value="${escapeHtml(orgPath(lead.orgId))}" disabled></div>
      <div class="form-item full"><label>目标销售 <em>*</em></label><select class="select" name="ownerId"><option value="">请选择目标销售</option>${candidates.map((member) => {
        const grant = memberGrants(member).find((item) => item.line === leadLine);
        return `<option value="${member.id}">${escapeHtml(member.name)} · ${escapeHtml(orgPath(grant.primaryOrgId))}</option>`;
      }).join("")}</select></div>
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
    const targetGrant = memberGrants(target).find((grant) => grant.line === leadLine);
    if (!targetGrant) return setError("assign-error", "目标销售没有该业务线的主组织");
    lead.ownerId = target.id;
    lead.orgId = targetGrant.primaryOrgId;
    lead.stage = "跟进中";
    state.logs.unshift({ time: "2026-11-11 16:40:15", module: "销售中心", action: "分配", target: `${lead.id} → ${target.name} · ${orgPath(targetGrant.primaryOrgId)}`, actor: currentUser().email });
    closeModal();
    render();
    showToast("线索分配成功");
  });
}

el.content.addEventListener("click", (event) => {
  const metric = event.target.closest("[data-metric-help]");
  if (metric) return showToast(metric.dataset.metricHelp || "暂无口径说明");
  const systemTab = event.target.closest("[data-system-tab]");
  if (systemTab) return setRoute("system", systemTab.dataset.systemTab);
  const treeNode = event.target.closest("[data-org-select]");
  if (treeNode) {
    state.selectedOrg = treeNode.dataset.orgSelect;
    return render();
  }
  const orgEdit = event.target.closest("[data-org-edit]");
  if (orgEdit) return openOrgModal("edit", orgEdit.dataset.orgEdit);
  const orgMove = event.target.closest("[data-org-move]");
  if (orgMove) return openOrganizationImpactModal("move", orgMove.dataset.orgMove);
  const orgMerge = event.target.closest("[data-org-merge]");
  if (orgMerge) return openOrganizationImpactModal("merge", orgMerge.dataset.orgMerge);
  const orgDisable = event.target.closest("[data-org-disable]");
  if (orgDisable) return openOrganizationImpactModal("disable", orgDisable.dataset.orgDisable);
  const orgEnable = event.target.closest("[data-org-enable]");
  if (orgEnable) return enableOrganization(orgEnable.dataset.orgEnable);
  const memberEdit = event.target.closest("[data-member-edit]");
  if (memberEdit) return openMemberModal(memberEdit.dataset.memberEdit);
  const salesTab = event.target.closest("[data-sales-tab]");
  if (salesTab) {
    state.salesTab = salesTab.dataset.salesTab;
    return render();
  }
  const assign = event.target.closest("[data-lead-assign]");
  if (assign) return openAssignmentModal(assign.dataset.leadAssign);
  const action = event.target.closest("[data-action]")?.dataset.action;
  if (!action) return;
  if (action === "close-modal") return closeModal();
  if (action === "add-business-line") return openBusinessLineModal();
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
    state.salesFirstCc = "";
    state.salesCurrentCc = "";
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
  if (event.target.id === "sales-first-cc-filter") {
    state.salesFirstCc = event.target.value;
    render();
  }
  if (event.target.id === "sales-current-cc-filter") {
    state.salesCurrentCc = event.target.value;
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
document.getElementById("identity-switch").addEventListener("change", (event) => {
  state.currentUserId = event.target.value;
  const user = currentUser();
  const preferredOrg = memberGrants(user)[0]?.primaryOrgId;
  state.selectedOrg = operatorAllowedIds().has(preferredOrg) ? preferredOrg : [...operatorAllowedIds()][0] || preferredOrg;
  render();
});
window.addEventListener("hashchange", () => {
  routeFromHash();
  render();
});

routeFromHash();
render();
