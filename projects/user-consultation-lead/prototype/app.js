const people = [
  {
    id: "2122176303201611778",
    name: "Trường An",
    business: "vn",
    userStatus: "unpaid_new",
    userType: "formal",
    intent: "unfilled",
    age: "6-8",
    level: "Level 2",
    register: "phone",
    login: "+84 387 886 669",
    sourceLanding: "facebook_LF (FB_VN_Nov)",
    salesConsult: "not_booked",
    appointmentTime: "2026-11-16T10:30:00+07:00"
  },
  {
    id: "2122122239944200194",
    name: "Swizanne",
    business: "my",
    userStatus: "unpaid_new",
    userType: "formal",
    intent: "unfilled",
    age: "6-8",
    level: "Level 2",
    register: "phone",
    login: "+60 175 374 055",
    sourceLanding: "facebook_LF (MY_Dec)",
    salesConsult: "not_booked",
    appointmentTime: ""
  },
  {
    id: "2121962524417232898",
    name: "Sushi",
    business: "vn",
    userStatus: "trial",
    userType: "formal",
    intent: "interested",
    age: "6-8",
    level: "Level 1",
    register: "phone",
    login: "+84 347 424 249",
    sourceLanding: "google_Search_VN",
    salesConsult: "booked",
    appointmentTime: "2026-11-15T18:08:00+07:00"
  },
  {
    id: "2121817259869851649",
    name: "Cu Mì",
    business: "vn",
    userStatus: "unpaid_new",
    userType: "formal",
    intent: "not_interested",
    age: "6-8",
    level: "Level 1",
    register: "phone",
    login: "+84 962 456 709",
    sourceLanding: "tiktok_Leads_VN",
    salesConsult: "not_booked",
    appointmentTime: ""
  },
  {
    id: "2121420893679112194",
    name: "Tony",
    business: "vn",
    userStatus: "paid",
    userType: "formal",
    intent: "interested",
    age: "3-5",
    level: "Level 1",
    register: "phone",
    login: "+84 933 031 989",
    sourceLanding: "facebook_LF (FB_VN_Oct)",
    salesConsult: "booked",
    appointmentTime: "2026-10-14T11:31:28+07:00"
  },
  {
    id: "2121915168615399425",
    name: "Jensen wong",
    business: "my",
    userStatus: "trial",
    userType: "formal",
    intent: "unfilled",
    age: "3-5",
    level: "Level 2",
    register: "phone",
    login: "+60 146 899 088",
    sourceLanding: "google_Search_MY",
    salesConsult: "not_booked",
    appointmentTime: ""
  },
  {
    id: "2121891737731694593",
    name: "Zhun Lin",
    business: "my",
    userStatus: "paid",
    userType: "test",
    intent: "interested",
    age: "6-8",
    level: "Level 3",
    register: "google",
    login: "zhun.lin@example.com",
    sourceLanding: "referral_Test",
    salesConsult: "booked",
    appointmentTime: "2026-11-15T13:09:00+08:00"
  },
  {
    id: "2121711733731694511",
    name: "Mai Anh",
    business: "vn",
    userStatus: "unpaid_new",
    userType: "formal",
    intent: "unfilled",
    age: "9-12",
    level: "Level 3",
    register: "phone",
    login: "+84 905 146 703",
    sourceLanding: "facebook_LF (FB_VN_Nov)",
    salesConsult: "not_booked",
    appointmentTime: ""
  }
];

const messages = {
  zh: {
    brandSub: "客户经营工作台",
    customerOps: "客户经营",
    sales: "销售中心",
    users: "用户中心",
    systemOnline: "系统运行正常",
    accountRole: "销售运营组长",
    salesCrumb: "Dino CRM / 销售管理 / 销售中心",
    usersCrumb: "Dino CRM / 用户管理 / 用户中心",
    salesTitle: "销售中心",
    usersTitle: "用户中心",
    followTitle: "我的跟进",
    userListTitle: "用户列表",
    search: "查询",
    searchSales: "搜索手机号 / 用户 ID / 姓名",
    searchUsers: "用户 ID / 姓名 / 登录账号",
    reset: "重置筛选",
    export: "导出",
    download: "下载数据",
    business: "业务线",
    all: "全部",
    vn: "越南",
    my: "马来西亚",
    id: "印度尼西亚",
    th: "泰国",
    userStatus: "用户状态",
    unpaidNew: "未付费未体验",
    trial: "未付费体验中",
    paid: "已付费",
    userType: "用户类型",
    formal: "正式用户",
    test: "测试用户",
    salesConsult: "销售咨询预约",
    userConsult: "用户咨询预约",
    booked: "已预约",
    notBooked: "未预约",
    appointmentTime: "用户预约时间",
    userID: "用户 ID",
    student: "学生姓名",
    intent: "购买意向",
    interested: "有意向",
    notInterested: "无意向",
    unfilled: "未填写",
    age: "年龄段",
    level: "课程等级",
    register: "注册方式",
    phone: "手机号",
    google: "Google",
    login: "登录账号",
    landing: "渠道来源-落地页",
    action: "操作",
    dial: "拨号",
    noValue: "—",
    latest: "最近更新 11:24",
    count: "{count} 条",
    page: "第 {page} / {pages} 页，共 {total} 条",
    emptyTitle: "暂无符合条件的数据",
    emptyText: "请调整筛选条件后重试。",
    exportTitle: "下载当前筛选结果",
    exportSub: "文件将使用当前筛选和现有数据权限。",
    exportCount: "共 {count} 条记录",
    exportFields: "包含字段：用户 ID、用户咨询预约、用户预约时间",
    cancel: "取消",
    confirm: "确认下载",
    exported: "文件已生成。",
    dialStarted: "已打开该客户的拨号准备。",
    loaded: "筛选已更新。"
  },
  en: {
    brandSub: "Customer Operations",
    customerOps: "CUSTOMER OPERATIONS",
    sales: "Sales Center",
    users: "User Center",
    systemOnline: "All systems operational",
    accountRole: "Sales Operations Lead",
    salesCrumb: "Dino CRM / Sales / Sales Center",
    usersCrumb: "Dino CRM / Users / User Center",
    salesTitle: "Sales Center",
    usersTitle: "User Center",
    followTitle: "My Follow-ups",
    userListTitle: "Users",
    search: "Search",
    searchSales: "Search phone / user ID / name",
    searchUsers: "User ID / name / login",
    reset: "Reset filters",
    export: "Export",
    download: "Download data",
    business: "Business Line",
    all: "All",
    vn: "Vietnam",
    my: "Malaysia",
    id: "Indonesia",
    th: "Thailand",
    userStatus: "User Status",
    unpaidNew: "Unpaid, not started",
    trial: "Unpaid, in trial",
    paid: "Paid",
    userType: "User Type",
    formal: "Formal",
    test: "Test",
    salesConsult: "Sales Consultation Appointment",
    userConsult: "User Consultation Request",
    booked: "Requested",
    notBooked: "Not requested",
    appointmentTime: "Appointment Time",
    userID: "User ID",
    student: "Student Name",
    intent: "Purchase Intent",
    interested: "Interested",
    notInterested: "Not interested",
    unfilled: "Not provided",
    age: "Age Range",
    level: "Course Level",
    register: "Registration Method",
    phone: "Phone",
    google: "Google",
    login: "Login Account",
    landing: "Channel Source – Landing Page",
    action: "Actions",
    dial: "Call",
    noValue: "—",
    latest: "Updated 11:24",
    count: "{count} records",
    page: "Page {page} of {pages}, {total} records",
    emptyTitle: "No matching data",
    emptyText: "Adjust the filters and try again.",
    exportTitle: "Download Current Results",
    exportSub: "The file uses the current filters and existing data permissions.",
    exportCount: "{count} records",
    exportFields: "Fields: User ID, Consultation Request, Appointment Time",
    cancel: "Cancel",
    confirm: "Download",
    exported: "File generated.",
    dialStarted: "Call preparation opened for this customer.",
    loaded: "Filters updated."
  }
};

const state = {
  route: "sales",
  lang: localStorage.getItem("user_consult_lang") || "zh",
  page: 1,
  pageSize: 5,
  filters: defaultFilters()
};

function defaultFilters() {
  return {
    search: "",
    business: "all",
    userStatus: "all",
    userType: "all",
    salesConsult: "all",
    consult: "all"
  };
}

const $ = selector => document.querySelector(selector);
const $$ = selector => [...document.querySelectorAll(selector)];
const t = (key, values = {}) => {
  let text = messages[state.lang][key] || key;
  Object.entries(values).forEach(([name, value]) => { text = text.replace(`{${name}}`, value); });
  return text;
};

function statusLabel(value) {
  return { unpaid_new: t("unpaidNew"), trial: t("trial"), paid: t("paid") }[value] || value;
}

function businessLabel(value) {
  return { vn: t("vn"), my: t("my"), id: t("id"), th: t("th") }[value] || value;
}

function options(values, selected) {
  return `<option value="all">${t("all")}</option>` + values.map(([value, label]) =>
    `<option value="${value}" ${value === selected ? "selected" : ""}>${label}</option>`
  ).join("");
}

function filteredRows() {
  const f = state.filters;
  return people.filter(person => {
    const text = `${person.id} ${person.name} ${person.login}`.toLowerCase();
    if (f.search && !text.includes(f.search.toLowerCase())) return false;
    if (f.business !== "all" && person.business !== f.business) return false;
    if (f.userStatus !== "all" && person.userStatus !== f.userStatus) return false;
    if (f.userType !== "all" && person.userType !== f.userType) return false;
    if (f.salesConsult !== "all" && person.salesConsult !== f.salesConsult) return false;
    if (f.consult === "booked" && !person.appointmentTime) return false;
    if (f.consult === "not" && person.appointmentTime) return false;
    return true;
  });
}

function formatTime(value) {
  if (!value) return `<span class="muted">${t("noValue")}</span>`;
  const locale = state.lang === "zh" ? "zh-CN" : "en-GB";
  return new Intl.DateTimeFormat(locale, {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false
  }).format(new Date(value)).replace(/\//g, "-");
}

function consultationStatus(person) {
  return person.appointmentTime
    ? `<span class="status booked">${t("booked")}</span>`
    : `<span class="status not-booked">${t("notBooked")}</span>`;
}

function filterForm() {
  const f = state.filters;
  const business = options([["vn", t("vn")], ["my", t("my")], ["id", t("id")], ["th", t("th")]], f.business);
  const userStatus = options([["unpaid_new", t("unpaidNew")], ["trial", t("trial")], ["paid", t("paid")]], f.userStatus);
  const userType = options([["formal", t("formal")], ["test", t("test")]], f.userType);
  const salesConsult = options([["booked", t("booked")], ["not_booked", t("notBooked")]], f.salesConsult);
  const consult = options([["booked", t("booked")], ["not", t("notBooked")]], f.consult);
  const searchPlaceholder = state.route === "sales" ? t("searchSales") : t("searchUsers");
  return `<section class="filter-card">
    <div class="filter-grid">
      <div class="field"><label>${t("search")}</label><div class="input-wrap"><svg><use href="#i-search"></use></svg><input class="control" id="filter-search" value="${escapeAttr(f.search)}" placeholder="${searchPlaceholder}"></div></div>
      <div class="field"><label>${t("business")}</label><div class="select-wrap"><select class="control" id="filter-business">${business}</select><svg><use href="#i-chevron"></use></svg></div></div>
      <div class="field"><label>${t("userStatus")}</label><div class="select-wrap"><select class="control" id="filter-user-status">${userStatus}</select><svg><use href="#i-chevron"></use></svg></div></div>
      ${state.route === "sales" ? `<div class="field"><label>${t("salesConsult")}</label><div class="select-wrap"><select class="control" id="filter-sales-consult">${salesConsult}</select><svg><use href="#i-chevron"></use></svg></div></div>` : `<div class="field"><label>${t("userType")}</label><div class="select-wrap"><select class="control" id="filter-user-type">${userType}</select><svg><use href="#i-chevron"></use></svg></div></div>`}
      <div class="field"><label>${t("userConsult")}</label><div class="select-wrap"><select class="control" id="filter-consult">${consult}</select><svg><use href="#i-chevron"></use></svg></div></div>
    </div>
    <div class="filter-foot"><span class="muted">${t("userConsult")}</span><div class="filter-actions"><button class="button" id="reset-filters">${t("reset")}</button><button class="button primary" id="apply-filters">${t("search")}</button></div></div>
  </section>`;
}

function salesTable(rows, paged, pages) {
  return `<section class="table-card">
    <div class="table-head"><div class="table-title"><h3>${t("followTitle")}</h3><span class="count-badge">${rows.length}</span></div><span class="table-meta">${t("latest")}</span></div>
    <div class="table-scroll"><table>
      <thead><tr><th>${t("userID")}</th><th>${t("student")}</th><th>${t("intent")}</th><th>${t("userStatus")}</th><th>${t("userConsult")}</th><th>${t("appointmentTime")}</th><th>${t("userType")}</th><th>${t("age")}</th><th>${t("level")}</th><th>${t("login")}</th><th>${t("landing")}</th><th>${t("action")}</th></tr></thead>
      <tbody>${paged.map(person => `<tr>
        <td><span class="mono">${person.id}</span></td>
        <td><strong>${escapeHTML(person.name)}</strong></td>
        <td><span class="tag-neutral">${{ interested: t("interested"), not_interested: t("notInterested"), unfilled: t("unfilled") }[person.intent]}</span></td>
        <td><span class="status ${person.userStatus === "paid" ? "paid" : person.userStatus === "trial" ? "trial" : "unpaid"}">${statusLabel(person.userStatus)}</span></td>
        <td>${consultationStatus(person)}</td>
        <td>${formatTime(person.appointmentTime)}</td>
        <td>${t(person.userType)}</td><td>${person.age}</td><td>${person.level}</td><td>${escapeHTML(person.login)}</td><td>${escapeHTML(person.sourceLanding)}</td>
        <td><button class="mini-btn" data-dial="${person.id}"><svg><use href="#i-phone"></use></svg>${t("dial")}</button></td>
      </tr>`).join("")}</tbody>
    </table>${emptyState(rows)}</div>
    ${pagination(rows.length, pages)}
  </section>`;
}

function usersTable(rows, paged, pages) {
  return `<section class="table-card">
    <div class="table-head"><div class="table-title"><h3>${t("userListTitle")}</h3><span class="count-badge">${rows.length}</span></div><span class="table-meta">${t("latest")}</span></div>
    <div class="table-scroll"><table>
      <thead><tr><th>${t("userID")}</th><th>${t("student")}</th><th>${t("userStatus")}</th><th>${t("userConsult")}</th><th>${t("appointmentTime")}</th><th>${t("userType")}</th><th>${t("age")}</th><th>${t("level")}</th><th>${t("register")}</th><th>${t("login")}</th><th>${t("landing")}</th></tr></thead>
      <tbody>${paged.map(person => `<tr>
        <td><span class="mono">${person.id}</span></td>
        <td><strong>${escapeHTML(person.name)}</strong></td>
        <td><span class="status ${person.userStatus === "paid" ? "paid" : person.userStatus === "trial" ? "trial" : "unpaid"}">${statusLabel(person.userStatus)}</span></td>
        <td>${consultationStatus(person)}</td>
        <td>${formatTime(person.appointmentTime)}</td>
        <td>${t(person.userType)}</td><td>${person.age}</td><td>${person.level}</td><td>${t(person.register)}</td><td>${escapeHTML(person.login)}</td><td>${escapeHTML(person.sourceLanding)}</td>
      </tr>`).join("")}</tbody>
    </table>${emptyState(rows)}</div>
    ${pagination(rows.length, pages)}
  </section>`;
}

function emptyState(rows) {
  return rows.length ? "" : `<div class="empty-state"><div class="empty-inner"><div class="empty-icon"><svg><use href="#i-users"></use></svg></div><h4>${t("emptyTitle")}</h4><p>${t("emptyText")}</p><button class="button" data-reset-empty>${t("reset")}</button></div></div>`;
}

function pagination(total, pages) {
  const buttons = [];
  for (let page = 1; page <= pages; page += 1) {
    buttons.push(`<button class="page-btn ${page === state.page ? "is-active" : ""}" data-page="${page}">${page}</button>`);
  }
  return `<footer class="pagination"><span class="page-info">${t("page", { page: state.page, pages, total })}</span><div class="pager"><button class="page-btn" data-page="${state.page - 1}" ${state.page === 1 ? "disabled" : ""}>‹</button>${buttons.join("")}<button class="page-btn" data-page="${state.page + 1}" ${state.page === pages ? "disabled" : ""}>›</button></div></footer>`;
}

function render() {
  document.documentElement.lang = state.lang === "zh" ? "zh-CN" : "en";
  $$(".lang-btn").forEach(button => button.classList.toggle("is-active", button.dataset.lang === state.lang));
  $$(".nav-item").forEach(button => button.classList.toggle("is-active", button.dataset.route === state.route));
  $$("[data-i18n]").forEach(element => { element.textContent = t(element.dataset.i18n); });

  const rows = filteredRows();
  const pages = Math.max(1, Math.ceil(rows.length / state.pageSize));
  if (state.page > pages) state.page = pages;
  const start = (state.page - 1) * state.pageSize;
  const paged = rows.slice(start, start + state.pageSize);

  $("#breadcrumb").textContent = state.route === "sales" ? t("salesCrumb") : t("usersCrumb");
  $("#page-title").textContent = state.route === "sales" ? t("salesTitle") : t("usersTitle");
  $("#content").innerHTML = `<section class="page-enter">
    <div class="page-heading"><div><h2>${state.route === "sales" ? t("followTitle") : t("userListTitle")}</h2></div><div class="page-actions"><button class="button" data-export><svg><use href="#i-download"></use></svg>${state.route === "sales" ? t("download") : t("export")}</button></div></div>
    ${filterForm()}
    ${state.route === "sales" ? salesTable(rows, paged, pages) : usersTable(rows, paged, pages)}
  </section>`;
  bindEvents();
}

function bindEvents() {
  const fields = {
    "filter-search": "search",
    "filter-business": "business",
    "filter-user-status": "userStatus",
    "filter-user-type": "userType",
    "filter-sales-consult": "salesConsult",
    "filter-consult": "consult"
  };
  Object.entries(fields).forEach(([id, key]) => {
    const element = document.getElementById(id);
    if (!element) return;
    element.addEventListener(element.tagName === "INPUT" ? "input" : "change", event => {
      state.filters[key] = event.target.value;
    });
  });
  $("#apply-filters").addEventListener("click", () => {
    const search = $("#filter-search");
    if (search) state.filters.search = search.value.trim();
    state.page = 1;
    render();
    toast(t("loaded"));
  });
  $("#reset-filters").addEventListener("click", reset);
  $$("[data-page]").forEach(button => button.addEventListener("click", () => {
    const page = Number(button.dataset.page);
    if (page >= 1 && page <= Math.ceil(filteredRows().length / state.pageSize)) {
      state.page = page;
      render();
    }
  }));
  $$("[data-dial]").forEach(button => button.addEventListener("click", () => toast(t("dialStarted"))));
  $("[data-reset-empty]")?.addEventListener("click", reset);
  $("[data-export]")?.addEventListener("click", openExport);
}

function reset() {
  state.filters = defaultFilters();
  state.page = 1;
  render();
}

function openExport() {
  const rows = filteredRows();
  $("#export-modal").innerHTML = `<h3 id="export-title">${t("exportTitle")}</h3><p class="modal-sub">${t("exportSub")}</p><div class="export-summary"><strong>${t("exportCount", { count: rows.length })}</strong><span>${t("exportFields")}</span></div><div class="modal-actions"><button class="button" id="cancel-export">${t("cancel")}</button><button class="button primary" id="confirm-export" ${rows.length ? "" : "disabled"}>${t("confirm")}</button></div>`;
  $("#export-layer").classList.add("is-open");
  $("#export-layer").setAttribute("aria-hidden", "false");
  $("#cancel-export").addEventListener("click", closeExport);
  $("#confirm-export").addEventListener("click", () => download(rows));
}

function closeExport() {
  $("#export-layer").classList.remove("is-open");
  $("#export-layer").setAttribute("aria-hidden", "true");
}

function download(rows) {
  const csv = [["user_id", "user_consultation_booking_status", "user_appointment_time"], ...rows.map(person => [person.id, person.appointmentTime ? "BOOKED" : "NOT_BOOKED", person.appointmentTime || ""])]
    .map(row => row.map(value => `"${String(value).replace(/"/g, '""')}"`).join(","))
    .join("\n");
  const blob = new Blob([`\ufeff${csv}`], { type: "text/csv;charset=utf-8" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = `user-appointment-${new Date().toISOString().slice(0, 10)}.csv`;
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(link.href);
  closeExport();
  toast(t("exported"));
}

function escapeHTML(value) {
  return String(value).replace(/[&<>"']/g, character => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[character]);
}

function escapeAttr(value) {
  return escapeHTML(value).replace(/`/g, "&#96;");
}

let timer;
function toast(message) {
  const element = $("#toast");
  element.textContent = message;
  element.classList.add("is-visible");
  clearTimeout(timer);
  timer = setTimeout(() => element.classList.remove("is-visible"), 2200);
}

$$(".lang-btn").forEach(button => button.addEventListener("click", () => {
  state.lang = button.dataset.lang;
  localStorage.setItem("user_consult_lang", state.lang);
  render();
}));

$$(".nav-item").forEach(button => button.addEventListener("click", () => {
  state.route = button.dataset.route;
  state.filters = defaultFilters();
  state.page = 1;
  render();
  $("#content").focus({ preventScroll: true });
}));

$("#export-scrim").addEventListener("click", closeExport);
document.addEventListener("keydown", event => {
  if (event.key === "Escape") closeExport();
});

render();

