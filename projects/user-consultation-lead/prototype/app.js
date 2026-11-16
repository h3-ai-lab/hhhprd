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
    dialCode: "+84",
    phone: "387 886 669",
    sourceLanding: "facebook_LF (FB_VN_Nov)",
    sourceApp: "register",
    registeredAt: "2026-11-16T10:04:00+07:00",
    stage: "new",
    cc: "Linh Nguyen",
    salesConsult: "not_booked",
    outbound: "not_called",
    consultation: {
      status: "booked",
      source: "register",
      submittedAt: "2026-11-16T10:30:00+07:00",
      clientEventAt: "2026-11-16T10:29:56+07:00",
      requestId: "CONS-20261116-00128",
      phone: "+84 387 886 669"
    }
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
    dialCode: "+60",
    phone: "175 374 055",
    sourceLanding: "facebook_LF (MY_Dec)",
    sourceApp: "register",
    registeredAt: "2026-11-16T06:19:04+08:00",
    stage: "new",
    cc: "Aisyah Tan",
    salesConsult: "not_booked",
    outbound: "not_called",
    consultation: { status: "not_booked" }
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
    dialCode: "+84",
    phone: "347 424 249",
    sourceLanding: "google_Search_VN",
    sourceApp: "paywall_return",
    registeredAt: "2026-11-15T16:24:25+07:00",
    stage: "contacted",
    cc: "Linh Nguyen",
    salesConsult: "booked",
    outbound: "called",
    consultation: {
      status: "booked",
      source: "paywall",
      submittedAt: "2026-11-15T18:08:00+07:00",
      clientEventAt: "2026-11-15T18:07:52+07:00",
      requestId: "CONS-20261115-00119",
      phone: "+84 347 424 249"
    }
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
    dialCode: "+84",
    phone: "962 456 709",
    sourceLanding: "tiktok_Leads_VN",
    sourceApp: "register",
    registeredAt: "2026-11-15T14:07:11+07:00",
    stage: "new",
    cc: "Linh Nguyen",
    salesConsult: "not_booked",
    outbound: "not_called",
    consultation: { status: "not_booked" }
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
    dialCode: "+84",
    phone: "933 031 989",
    sourceLanding: "facebook_LF (FB_VN_Oct)",
    sourceApp: "register",
    registeredAt: "2026-10-14T11:12:10+07:00",
    stage: "paid",
    cc: "Linh Nguyen",
    salesConsult: "booked",
    outbound: "called",
    consultation: {
      status: "booked",
      source: "historical",
      submittedAt: "2026-10-14T11:31:28+07:00",
      clientEventAt: null,
      requestId: "CONS-20261014-00074",
      phone: "+84 933 031 989"
    }
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
    dialCode: "+60",
    phone: "146 899 088",
    sourceLanding: "google_Search_MY",
    sourceApp: "register",
    registeredAt: "2026-11-15T13:56:14+08:00",
    stage: "trial",
    cc: "Aisyah Tan",
    salesConsult: "not_booked",
    outbound: "not_called",
    consultation: { status: "not_booked" }
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
    dialCode: "+60",
    phone: "182 304 335",
    sourceLanding: "referral_Test",
    sourceApp: "paid",
    registeredAt: "2026-11-15T12:49:48+08:00",
    stage: "paid",
    cc: "Aisyah Tan",
    salesConsult: "booked",
    outbound: "called",
    consultation: {
      status: "booked",
      source: "historical",
      submittedAt: "2026-11-15T13:09:00+08:00",
      clientEventAt: null,
      requestId: "CONS-20261115-00112",
      phone: "+60 182 304 335"
    }
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
    dialCode: "+84",
    phone: "905 146 703",
    sourceLanding: "facebook_LF (FB_VN_Nov)",
    sourceApp: "register",
    registeredAt: "2026-11-14T20:18:00+07:00",
    stage: "new",
    cc: "Linh Nguyen",
    salesConsult: "not_booked",
    outbound: "not_called",
    consultation: {
      status: "review",
      source: "register",
      submittedAt: "2026-11-14T20:41:00+07:00",
      clientEventAt: "2026-11-14T20:40:48+07:00",
      requestId: "CONS-20261114-00106",
      phone: "+84 905 146 703",
      reviewReason: "USER_LINK_PENDING"
    }
  }
];

const i18n = {
  zh: {
    brandSub: "客户经营工作台",
    customerOps: "客户经营",
    salesCenter: "销售中心",
    userCenter: "用户中心",
    systemOnline: "系统运行正常",
    accountName: "Linh Nguyen",
    accountRole: "销售运营组长",
    salesBreadcrumb: "Dino CRM / 销售管理 / 销售中心",
    usersBreadcrumb: "Dino CRM / 用户管理 / 用户中心",
    salesTitle: "销售中心",
    usersTitle: "用户中心",
    salesPageTitle: "我的跟进",
    salesPageSub: "在现有线索跟进中识别用户主动申请顾问回电的节点",
    usersPageTitle: "用户列表",
    usersPageSub: "查询用户资料、状态和主动咨询预约信息",
    export: "导出",
    download: "下载数据",
    reset: "重置筛选",
    search: "查询",
    searchPhoneUser: "搜索手机号 / 用户 ID / 姓名",
    searchUser: "用户 ID / 姓名 / 登录账号",
    businessLine: "业务线",
    all: "全部",
    vn: "越南",
    my: "马来西亚",
    id: "印度尼西亚",
    th: "泰国",
    purchaseIntent: "购买意向",
    interested: "有意向",
    notInterested: "无意向",
    unfilled: "未填写",
    cc: "CC",
    allCc: "全部 CC",
    stage: "当前跟进阶段",
    stageNew: "待首次联系",
    stageContacted: "已联系",
    stageTrial: "体验中",
    stagePaid: "已付费",
    age: "年龄段",
    level: "课程等级",
    sourceLanding: "渠道来源-落地页",
    sourceApp: "渠道来源-App",
    userStatus: "用户状态",
    statusUnpaidNew: "未付费未体验",
    statusTrial: "未付费体验中",
    statusPaid: "已付费",
    salesConsult: "销售咨询预约",
    userConsult: "用户咨询预约",
    appointmentOutbound: "预约外呼",
    called: "已外呼",
    notCalled: "未外呼",
    dateType: "注册时间",
    startDate: "开始日期",
    endDate: "结束日期",
    dateAll: "全部时间",
    registerDate: "注册时间",
    booked: "已预约",
    notBooked: "未预约",
    review: "待核对",
    userType: "用户类型",
    formal: "正式用户",
    test: "测试用户",
    registerMethod: "注册方式",
    phone: "手机号",
    google: "Google",
    activeFilters: "当前筛选",
    noFilter: "未设置筛选",
    myFollow: "我的跟进",
    rowsCount: "{count} 位客户",
    latestUpdate: "最近更新 11:24",
    currentRange: "当前页面显示 {start}–{end}，共 {total} 条",
    pageInfo: "第 {page} / {pages} 页，共 {total} 条",
    userCount: "{count} 位用户",
    userPageInfo: "第 {page} / {pages} 页，共 {total} 位用户",
    prev: "上一页",
    next: "下一页",
    userID: "用户 ID",
    studentName: "学生姓名",
    loginAccount: "登录账号",
    consultationTime: "提交意向时间",
    channelLanding: "渠道来源-落地页",
    operation: "操作",
    dial: "拨号",
    more: "更多",
    viewCustomer: "查看客户",
    viewRequest: "查看预约节点",
    updateFollow: "更新跟进",
    noSource: "—",
    sourceRegister: "注册后邀请",
    sourcePaywall: "Paywall 返回后邀请",
    sourceHistorical: "历史数据",
    emptyTitle: "暂无符合条件的客户",
    emptyText: "请调整筛选条件后重试，或重置筛选。",
    userEmptyTitle: "暂无符合条件的用户",
    userEmptyText: "请调整用户类型、业务线或咨询预约状态。",
    loadError: "客户数据加载失败，当前结果可能不完整。",
    retry: "重新加载",
    detailTitle: "客户详情",
    detailSub: "用户与线索使用同一预约事实",
    basicInfo: "基本信息",
    userStatusLabel: "用户状态",
    businessLineLabel: "业务线",
    consultSection: "用户咨询预约",
    submitTime: "提交意向时间",
    requestSource: "预约来源",
    requestId: "预约记录 ID",
    clientEventTime: "客户端点击时间",
    phoneSnapshot: "咨询联系电话",
    revealPhone: "显示完整号码",
    hidePhone: "隐藏号码",
    notBookedHint: "当前没有成功的顾问电话咨询申请，不代表用户看到了邀请或明确拒绝。",
    reviewHint: "预约记录已保存，用户关联仍在核对。该记录不会归入“未预约”。",
    leadSection: "线索跟进",
    currentCc: "当前 CC",
    followStage: "跟进阶段",
    timeline: "跟进节点",
    registeredEvent: "完成注册",
    consultationEvent: "用户主动申请顾问电话咨询",
    leadAssigned: "线索分配",
    showFull: "查看完整内容",
    closed: "关闭",
    exportTitle: "下载预约摘要",
    exportSub: "将按当前筛选和权限范围生成文件。",
    exportScope: "当前筛选范围",
    exportCount: "{count} 条记录",
    exportFields: "包含字段",
    exportPhone: "联系电话按现有权限脱敏",
    cancel: "取消",
    confirmDownload: "确认下载",
    downloadStarted: "文件已生成，联系电话沿用现有导出权限。",
    dialStarted: "已打开该客户的拨号准备。",
    followOpened: "已进入该客户的跟进更新流程。",
    loadSuccess: "数据已重新加载。",
    sourceFilterLabel: "预约来源",
    allSources: "全部来源",
    relationshipReview: "用户关联待核对",
    accessDeniedTitle: "暂无可查看的预约信息",
    accessDeniedText: "当前角色没有用户咨询预约字段权限。"
  },
  en: {
    brandSub: "Customer Operations",
    customerOps: "CUSTOMER OPERATIONS",
    salesCenter: "Sales Center",
    userCenter: "User Center",
    systemOnline: "All systems operational",
    accountName: "Linh Nguyen",
    accountRole: "Sales Operations Lead",
    salesBreadcrumb: "Dino CRM / Sales / Sales Center",
    usersBreadcrumb: "Dino CRM / Users / User Center",
    salesTitle: "Sales Center",
    usersTitle: "User Center",
    salesPageTitle: "My Follow-ups",
    salesPageSub: "Identify customers who requested an advisor call within the existing lead workflow",
    usersPageTitle: "Users",
    usersPageSub: "Review user details, status, and advisor consultation requests",
    export: "Export",
    download: "Download data",
    reset: "Reset filters",
    search: "Search",
    searchPhoneUser: "Search phone / user ID / name",
    searchUser: "User ID / name / login",
    businessLine: "Business Line",
    all: "All",
    vn: "Vietnam",
    my: "Malaysia",
    id: "Indonesia",
    th: "Thailand",
    purchaseIntent: "Purchase Intent",
    interested: "Interested",
    notInterested: "Not interested",
    unfilled: "Not provided",
    cc: "CC",
    allCc: "All CC",
    stage: "Current Follow-up Stage",
    stageNew: "New",
    stageContacted: "Contacted",
    stageTrial: "In trial",
    stagePaid: "Paid",
    age: "Age Range",
    level: "Course Level",
    sourceLanding: "Channel Source – Landing Page",
    sourceApp: "Channel Source – App",
    userStatus: "User Status",
    statusUnpaidNew: "Unpaid, not started",
    statusTrial: "Unpaid, in trial",
    statusPaid: "Paid",
    salesConsult: "Sales Consultation Appointment",
    userConsult: "User Consultation Request",
    appointmentOutbound: "Appointment Call",
    called: "Called",
    notCalled: "Not called",
    dateType: "Registration Date",
    startDate: "Start date",
    endDate: "End date",
    dateAll: "All dates",
    registerDate: "Registered At",
    booked: "Requested",
    notBooked: "Not requested",
    review: "Needs review",
    userType: "User Type",
    formal: "Formal",
    test: "Test",
    registerMethod: "Registration Method",
    phone: "Phone",
    google: "Google",
    activeFilters: "Active filters",
    noFilter: "No filters applied",
    myFollow: "My Follow-ups",
    rowsCount: "{count} customers",
    latestUpdate: "Updated 11:24",
    currentRange: "Showing {start}–{end} of {total}",
    pageInfo: "Page {page} of {pages}, {total} records",
    userCount: "{count} users",
    userPageInfo: "Page {page} of {pages}, {total} users",
    prev: "Previous page",
    next: "Next page",
    userID: "User ID",
    studentName: "Student Name",
    loginAccount: "Login Account",
    consultationTime: "Submitted At",
    channelLanding: "Channel Source – Landing Page",
    operation: "Actions",
    dial: "Call",
    more: "More",
    viewCustomer: "View customer",
    viewRequest: "View request",
    updateFollow: "Update follow-up",
    noSource: "—",
    sourceRegister: "Registration invite",
    sourcePaywall: "Paywall return invite",
    sourceHistorical: "Historical data",
    emptyTitle: "No matching customers",
    emptyText: "Adjust the filters or reset them to see more customers.",
    userEmptyTitle: "No matching users",
    userEmptyText: "Adjust user type, business line, or consultation status.",
    loadError: "Customer data could not be loaded. Results may be incomplete.",
    retry: "Reload",
    detailTitle: "Customer Details",
    detailSub: "The user and lead views use the same consultation event",
    basicInfo: "Basic Information",
    userStatusLabel: "User Status",
    businessLineLabel: "Business Line",
    consultSection: "Advisor Consultation Request",
    submitTime: "Submitted At",
    requestSource: "Request Source",
    requestId: "Request ID",
    clientEventTime: "Client Click Time",
    phoneSnapshot: "Consultation Phone",
    revealPhone: "Show full number",
    hidePhone: "Hide number",
    notBookedHint: "There is no successful advisor call request. This does not mean the user saw or declined the invitation.",
    reviewHint: "The request is stored while user association is being verified. It is not counted as not requested.",
    leadSection: "Lead Follow-up",
    currentCc: "Current CC",
    followStage: "Follow-up Stage",
    timeline: "Follow-up Timeline",
    registeredEvent: "Registration completed",
    consultationEvent: "User requested an advisor call",
    leadAssigned: "Lead assigned",
    showFull: "View full detail",
    closed: "Close",
    exportTitle: "Download Request Summary",
    exportSub: "The file uses the current filters and data permissions.",
    exportScope: "Current scope",
    exportCount: "{count} records",
    exportFields: "Fields included",
    exportPhone: "Phone follows existing masking permissions",
    cancel: "Cancel",
    confirmDownload: "Download",
    downloadStarted: "File generated. Phone visibility follows existing export permissions.",
    dialStarted: "Call preparation opened for this customer.",
    followOpened: "The follow-up update flow is ready for this customer.",
    loadSuccess: "Data reloaded.",
    sourceFilterLabel: "Request Source",
    allSources: "All sources",
    relationshipReview: "User association needs review",
    accessDeniedTitle: "Consultation information unavailable",
    accessDeniedText: "Your role does not have field permission for user consultation requests."
  }
};

const state = {
  route: "sales",
  lang: localStorage.getItem("user_consult_lang") || "zh",
  pageSize: 5,
  currentPage: 1,
  selected: new Set(),
  showFullPhone: false,
  currentDetailId: null,
  filters: {
    search: "",
    business: "all",
    intent: "all",
    cc: "all",
    stage: "all",
    age: "all",
    level: "all",
    sourceLanding: "all",
    sourceApp: "all",
    userStatus: "all",
    salesConsult: "all",
    consult: "all",
    outbound: "all",
    dateFrom: "",
    dateTo: "",
    userType: "all",
    register: "all"
  }
};

const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];
const t = (key, vars = {}) => {
  let text = i18n[state.lang][key] ?? key;
  Object.entries(vars).forEach(([name, value]) => { text = text.replace(`{${name}}`, value); });
  return text;
};

function optionList(values, selected, allLabel) {
  return `<option value="all">${allLabel}</option>` + values.map(([value, label]) =>
    `<option value="${value}" ${value === selected ? "selected" : ""}>${label}</option>`
  ).join("");
}

function sourceLabel(source) {
  return { register: t("sourceRegister"), paywall: t("sourcePaywall"), historical: t("sourceHistorical") }[source] || t("noSource");
}

function businessLabel(value) {
  return { vn: t("vn"), my: t("my"), id: t("id"), th: t("th") }[value] || value;
}

function userStatusLabel(value) {
  return { unpaid_new: t("statusUnpaidNew"), trial: t("statusTrial"), paid: t("statusPaid") }[value] || value;
}

function consultMarkup(person) {
  const consultation = person.consultation;
  const cls = consultation.status === "booked" ? "booked" : consultation.status === "review" ? "review" : "not-booked";
  const label = consultation.status === "booked" ? t("booked") : consultation.status === "review" ? t("review") : t("notBooked");
  const sub = consultation.status === "not_booked" ? "" : `<span class="cell-sub">${sourceLabel(consultation.source)}</span>`;
  return `<div class="cell-stack"><span class="status ${cls}">${label}</span>${sub}</div>`;
}

function formatTime(value) {
  if (!value) return t("noSource");
  const timezone = state.lang === "zh" ? "zh-CN" : "en-GB";
  return new Intl.DateTimeFormat(timezone, {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false
  }).format(new Date(value)).replace(/\//g, "-");
}

function allFilteredRows() {
  const f = state.filters;
  return people.filter(person => {
    const haystack = `${person.id} ${person.name} ${person.login} ${person.phone}`.toLowerCase();
    if (f.search && !haystack.includes(f.search.toLowerCase())) return false;
    if (f.business !== "all" && person.business !== f.business) return false;
    if (f.intent !== "all" && person.intent !== f.intent) return false;
    if (f.cc !== "all" && person.cc !== f.cc) return false;
    if (f.stage !== "all" && person.stage !== f.stage) return false;
    if (f.age !== "all" && person.age !== f.age) return false;
    if (f.level !== "all" && person.level !== f.level) return false;
    if (f.sourceLanding !== "all" && person.sourceLanding !== f.sourceLanding) return false;
    if (f.sourceApp !== "all" && person.sourceApp !== f.sourceApp) return false;
    if (f.userStatus !== "all" && person.userStatus !== f.userStatus) return false;
    if (f.salesConsult !== "all" && person.salesConsult !== f.salesConsult) return false;
    if (f.outbound !== "all" && person.outbound !== f.outbound) return false;
    if (f.userType !== "all" && person.userType !== f.userType) return false;
    if (f.register !== "all" && person.register !== f.register) return false;
    if (f.consult !== "all") {
      const status = person.consultation.status;
      if (status === "review") return false;
      if (f.consult === "booked" && status !== "booked") return false;
      if (f.consult === "not" && status !== "not_booked") return false;
    }
    if (f.dateFrom && new Date(person.registeredAt) < new Date(`${f.dateFrom}T00:00:00`)) return false;
    if (f.dateTo && new Date(person.registeredAt) > new Date(`${f.dateTo}T23:59:59`)) return false;
    return true;
  });
}

function activeFilterChips() {
  const chips = [];
  if (state.filters.search) chips.push(`${t("search")}: ${state.filters.search}`);
  if (state.filters.business !== "all") chips.push(`${t("businessLine")}: ${businessLabel(state.filters.business)}`);
  if (state.filters.consult !== "all") chips.push(`${t("userConsult")}: ${state.filters.consult === "booked" ? t("booked") : t("notBooked")}`);
  if (state.filters.userStatus !== "all") chips.push(`${t("userStatus")}: ${userStatusLabel(state.filters.userStatus)}`);
  if (state.filters.intent !== "all") chips.push(`${t("purchaseIntent")}: ${{ interested: t("interested"), not_interested: t("notInterested"), unfilled: t("unfilled") }[state.filters.intent]}`);
  if (state.filters.cc !== "all") chips.push(`CC: ${state.filters.cc}`);
  if (state.filters.userType !== "all") chips.push(`${t("userType")}: ${t(state.filters.userType)}`);
  if (state.filters.dateFrom || state.filters.dateTo) chips.push(`${t("registerDate")}: ${state.filters.dateFrom || "…"} – ${state.filters.dateTo || "…"}`);
  return chips.length ? chips.map(chip => `<span class="filter-chip">${chip}</span>`).join("") : `<span class="muted">${t("noFilter")}</span>`;
}

function salesFilterMarkup() {
  const f = state.filters;
  return `
    <section class="filter-card">
      <div class="filter-grid">
        <div class="field search-field">
          <label>${t("search")}</label>
          <div class="input-wrap"><svg><use href="#i-search"></use></svg><input class="control" id="filter-search" value="${escapeAttr(f.search)}" placeholder="${t("searchPhoneUser")}"></div>
        </div>
        <div class="field"><label>${t("businessLine")}</label><div class="select-wrap"><select class="control" id="filter-business">${optionList([["vn", t("vn")], ["my", t("my")], ["id", t("id")], ["th", t("th")]], f.business, t("all"))}</select><svg><use href="#i-chevron"></use></svg></div></div>
        <div class="field"><label>${t("purchaseIntent")}</label><div class="select-wrap"><select class="control" id="filter-intent">${optionList([["interested", t("interested")], ["not_interested", t("notInterested")], ["unfilled", t("unfilled")]], f.intent, t("all"))}</select><svg><use href="#i-chevron"></use></svg></div></div>
        <div class="field"><label>${t("cc")}</label><div class="select-wrap"><select class="control" id="filter-cc">${optionList([["Linh Nguyen", "Linh Nguyen"], ["Aisyah Tan", "Aisyah Tan"]], f.cc, t("allCc"))}</select><svg><use href="#i-chevron"></use></svg></div></div>
        <div class="field"><label>${t("stage")}</label><div class="select-wrap"><select class="control" id="filter-stage">${optionList([["new", t("stageNew")], ["contacted", t("stageContacted")], ["trial", t("stageTrial")], ["paid", t("stagePaid")]], f.stage, t("all"))}</select><svg><use href="#i-chevron"></use></svg></div></div>
        <div class="field"><label>${t("age")}</label><div class="select-wrap"><select class="control" id="filter-age">${optionList([["3-5", "3-5"], ["6-8", "6-8"], ["9-12", "9-12"]], f.age, t("all"))}</select><svg><use href="#i-chevron"></use></svg></div></div>
        <div class="field"><label>${t("level")}</label><div class="select-wrap"><select class="control" id="filter-level">${optionList([["Level 1", "Level 1"], ["Level 2", "Level 2"], ["Level 3", "Level 3"]], f.level, t("all"))}</select><svg><use href="#i-chevron"></use></svg></div></div>
        <div class="field"><label>${t("sourceLanding")}</label><div class="select-wrap"><select class="control" id="filter-landing">${optionList([["facebook_LF (FB_VN_Nov)", "facebook_LF (FB_VN_Nov)"], ["facebook_LF (MY_Dec)", "facebook_LF (MY_Dec)"], ["google_Search_VN", "google_Search_VN"], ["tiktok_Leads_VN", "tiktok_Leads_VN"]], f.sourceLanding, t("all"))}</select><svg><use href="#i-chevron"></use></svg></div></div>
        <div class="field"><label>${t("sourceApp")}</label><div class="select-wrap"><select class="control" id="filter-source-app">${optionList([["register", t("sourceRegister")], ["paywall_return", t("sourcePaywall")], ["paid", t("statusPaid")]], f.sourceApp, t("all"))}</select><svg><use href="#i-chevron"></use></svg></div></div>
        <div class="field"><label>${t("userStatus")}</label><div class="select-wrap"><select class="control" id="filter-user-status">${optionList([["unpaid_new", t("statusUnpaidNew")], ["trial", t("statusTrial")], ["paid", t("statusPaid")]], f.userStatus, t("all"))}</select><svg><use href="#i-chevron"></use></svg></div></div>
        <div class="field"><label>${t("salesConsult")}</label><div class="select-wrap"><select class="control" id="filter-sales-consult">${optionList([["booked", t("booked")], ["not_booked", t("notBooked")]], f.salesConsult, t("all"))}</select><svg><use href="#i-chevron"></use></svg></div></div>
        <div class="field"><label>${t("userConsult")}</label><div class="select-wrap"><select class="control" id="filter-consult">${optionList([["booked", t("booked")], ["not", t("notBooked")]], f.consult, t("all"))}</select><svg><use href="#i-chevron"></use></svg></div></div>
        <div class="field"><label>${t("appointmentOutbound")}</label><div class="select-wrap"><select class="control" id="filter-outbound">${optionList([["called", t("called")], ["not_called", t("notCalled")]], f.outbound, t("all"))}</select><svg><use href="#i-chevron"></use></svg></div></div>
        <div class="field" style="grid-column:span 2"><label>${t("dateType")}</label><div class="date-range"><select class="control" id="filter-date-type"><option>${t("registerDate")}</option></select><input class="control" type="date" id="filter-date-from" value="${f.dateFrom}" aria-label="${t("startDate")}"><input class="control" type="date" id="filter-date-to" value="${f.dateTo}" aria-label="${t("endDate")}"></div></div>
      </div>
      <div class="filter-foot"><div class="active-filters">${activeFilterChips()}</div><div class="filter-actions"><button class="button" id="reset-filters">${t("reset")}</button><button class="button primary" id="apply-filters">${t("search")}</button></div></div>
    </section>`;
}

function usersFilterMarkup() {
  const f = state.filters;
  return `
    <section class="filter-card">
      <div class="filter-grid user-grid">
        <div class="field"><label>${t("search")}</label><div class="input-wrap"><svg><use href="#i-search"></use></svg><input class="control" id="filter-search" value="${escapeAttr(f.search)}" placeholder="${t("searchUser")}"></div></div>
        <div class="field"><label>${t("userType")}</label><div class="select-wrap"><select class="control" id="filter-user-type">${optionList([["formal", t("formal")], ["test", t("test")]], f.userType, t("all"))}</select><svg><use href="#i-chevron"></use></svg></div></div>
        <div class="field"><label>${t("registerMethod")}</label><div class="select-wrap"><select class="control" id="filter-register">${optionList([["phone", t("phone")], ["google", t("google")]], f.register, t("all"))}</select><svg><use href="#i-chevron"></use></svg></div></div>
        <div class="field"><label>${t("sourceLanding")}</label><div class="select-wrap"><select class="control" id="filter-landing">${optionList([["facebook_LF (FB_VN_Nov)", "facebook_LF (FB_VN_Nov)"], ["facebook_LF (MY_Dec)", "facebook_LF (MY_Dec)"], ["google_Search_VN", "google_Search_VN"], ["tiktok_Leads_VN", "tiktok_Leads_VN"]], f.sourceLanding, t("all"))}</select><svg><use href="#i-chevron"></use></svg></div></div>
        <div class="field"><label>${t("sourceApp")}</label><div class="select-wrap"><select class="control" id="filter-source-app">${optionList([["register", t("sourceRegister")], ["paywall_return", t("sourcePaywall")], ["paid", t("statusPaid")]], f.sourceApp, t("all"))}</select><svg><use href="#i-chevron"></use></svg></div></div>
        <div class="field"><label>${t("businessLine")}</label><div class="select-wrap"><select class="control" id="filter-business">${optionList([["vn", t("vn")], ["my", t("my")], ["id", t("id")], ["th", t("th")]], f.business, t("all"))}</select><svg><use href="#i-chevron"></use></svg></div></div>
        <div class="field"><label>${t("userStatus")}</label><div class="select-wrap"><select class="control" id="filter-user-status">${optionList([["unpaid_new", t("statusUnpaidNew")], ["trial", t("statusTrial")], ["paid", t("statusPaid")]], f.userStatus, t("all"))}</select><svg><use href="#i-chevron"></use></svg></div></div>
        <div class="field"><label>${t("userConsult")}</label><div class="select-wrap"><select class="control" id="filter-consult">${optionList([["booked", t("booked")], ["not", t("notBooked")]], f.consult, t("all"))}</select><svg><use href="#i-chevron"></use></svg></div></div>
      </div>
      <div class="filter-foot"><div class="active-filters">${activeFilterChips()}</div><div class="filter-actions"><button class="button" id="reset-filters">${t("reset")}</button><button class="button primary" id="apply-filters">${t("search")}</button></div></div>
    </section>`;
}

function salesTable(rows, paged, total, pages) {
  const start = total ? (state.currentPage - 1) * state.pageSize + 1 : 0;
  const end = Math.min(state.currentPage * state.pageSize, total);
  return `
    <section class="table-card">
      <div class="table-head">
        <div class="table-title"><h3>${t("myFollow")}</h3><span class="count-badge">${total}</span></div>
        <span class="table-meta">${t("latestUpdate")}</span>
      </div>
      <div class="table-scroll">
        <table>
          <thead><tr>
            <th><input class="checkbox" type="checkbox" id="select-all" ${paged.length && paged.every(person => state.selected.has(person.id)) ? "checked" : ""} aria-label="select all"></th>
            <th>${t("userID")}</th><th>${t("studentName")}</th><th>${t("purchaseIntent")}</th><th>${t("userStatus")}</th><th>${t("userConsult")}</th><th>${t("consultationTime")}</th><th>${t("userType")}</th><th>${t("age")}</th><th>${t("level")}</th><th>${t("loginAccount")}</th><th>${t("channelLanding")}</th><th>${t("operation")}</th>
          </tr></thead>
          <tbody>${paged.length ? paged.map(person => `
            <tr>
              <td><input class="checkbox row-check" type="checkbox" data-id="${person.id}" ${state.selected.has(person.id) ? "checked" : ""} aria-label="${escapeAttr(person.name)}"></td>
              <td><span class="mono">${person.id}</span></td>
              <td><strong>${escapeHTML(person.name)}</strong></td>
              <td><span class="tag-neutral">${{ interested: t("interested"), not_interested: t("notInterested"), unfilled: t("unfilled") }[person.intent]}</span></td>
              <td><span class="status ${person.userStatus === "paid" ? "paid" : person.userStatus === "trial" ? "trial" : "unpaid"}">${userStatusLabel(person.userStatus)}</span></td>
              <td>${consultMarkup(person)}</td>
              <td>${person.consultation.submittedAt ? formatTime(person.consultation.submittedAt) : `<span class="muted">${t("noSource")}</span>`}</td>
              <td>${t(person.userType)}</td>
              <td>${person.age}</td>
              <td>${person.level}</td>
              <td>${escapeHTML(person.login)}</td>
              <td><span title="${escapeAttr(person.sourceLanding)}">${escapeHTML(person.sourceLanding)}</span></td>
              <td><div class="operation"><button class="mini-btn" data-action="dial" data-id="${person.id}"><svg><use href="#i-phone"></use></svg>${t("dial")}</button><button class="mini-btn icon-only" data-action="more" data-id="${person.id}" aria-label="${t("more")}"><svg><use href="#i-more"></use></svg></button></div></td>
            </tr>`).join("") : ""}</tbody>
        </table>
        ${paged.length ? "" : `<div class="empty-state"><div class="empty-inner"><div class="empty-icon"><svg><use href="#i-users"></use></svg></div><h4>${t("emptyTitle")}</h4><p>${t("emptyText")}</p><button class="button" data-action="clear-empty">${t("reset")}</button></div></div>`}
      </div>
      <footer class="pagination">
        <span class="page-info">${paged.length ? t("pageInfo", { page: state.currentPage, pages, total }) : t("pageInfo", { page: 1, pages: 1, total: 0 })}</span>
        ${pagerMarkup(total, pages)}
      </footer>
    </section>`;
}

function usersTable(rows, paged, total, pages) {
  return `
    <section class="table-card">
      <div class="table-head">
        <div class="table-title"><h3>${t("usersPageTitle")}</h3><span class="count-badge">${total}</span></div>
        <span class="table-meta">${t("latestUpdate")}</span>
      </div>
      <div class="table-scroll">
        <table>
          <thead><tr><th>${t("userID")}</th><th>${t("studentName")}</th><th>${t("userStatus")}</th><th>${t("userConsult")}</th><th>${t("consultationTime")}</th><th>${t("userType")}</th><th>${t("age")}</th><th>${t("level")}</th><th>${t("registerMethod")}</th><th>${t("loginAccount")}</th><th>${t("channelLanding")}</th><th>${t("operation")}</th></tr></thead>
          <tbody>${paged.length ? paged.map(person => `
            <tr>
              <td><span class="mono">${person.id}</span></td>
              <td><strong>${escapeHTML(person.name)}</strong></td>
              <td><span class="status ${person.userStatus === "paid" ? "paid" : person.userStatus === "trial" ? "trial" : "unpaid"}">${userStatusLabel(person.userStatus)}</span></td>
              <td>${consultMarkup(person)}</td>
              <td>${person.consultation.submittedAt ? formatTime(person.consultation.submittedAt) : `<span class="muted">${t("noSource")}</span>`}</td>
              <td>${t(person.userType)}</td>
              <td>${person.age}</td>
              <td>${person.level}</td>
              <td>${t(person.register)}</td>
              <td>${escapeHTML(person.login)}</td>
              <td><span title="${escapeAttr(person.sourceLanding)}">${escapeHTML(person.sourceLanding)}</span></td>
              <td><div class="operation"><button class="mini-btn icon-only" data-action="more" data-id="${person.id}" aria-label="${t("more")}"><svg><use href="#i-more"></use></svg></button></div></td>
            </tr>`).join("") : ""}</tbody>
        </table>
        ${paged.length ? "" : `<div class="empty-state"><div class="empty-inner"><div class="empty-icon"><svg><use href="#i-users"></use></svg></div><h4>${t("userEmptyTitle")}</h4><p>${t("userEmptyText")}</p><button class="button" data-action="clear-empty">${t("reset")}</button></div></div>`}
      </div>
      <footer class="pagination">
        <span class="page-info">${paged.length ? t("userPageInfo", { page: state.currentPage, pages, total }) : t("userPageInfo", { page: 1, pages: 1, total: 0 })}</span>
        ${pagerMarkup(total, pages)}
      </footer>
    </section>`;
}

function pagerMarkup(total, pages) {
  if (!total) return `<div class="pager"><button class="page-btn is-active" disabled>1</button></div>`;
  const buttons = [];
  for (let page = 1; page <= pages; page += 1) {
    buttons.push(`<button class="page-btn ${page === state.currentPage ? "is-active" : ""}" data-page="${page}">${page}</button>`);
  }
  return `<div class="pager"><button class="page-btn" data-page="${state.currentPage - 1}" ${state.currentPage === 1 ? "disabled" : ""} aria-label="${t("prev")}">‹</button>${buttons.join("")}<button class="page-btn" data-page="${state.currentPage + 1}" ${state.currentPage === pages ? "disabled" : ""} aria-label="${t("next")}">›</button></div>`;
}

function render() {
  document.documentElement.lang = state.lang === "zh" ? "zh-CN" : "en";
  $$(".lang-btn").forEach(button => button.classList.toggle("is-active", button.dataset.lang === state.lang));
  $$(".nav-item").forEach(item => item.classList.toggle("is-active", item.dataset.route === state.route));
  $$("[data-i18n]").forEach(element => { element.textContent = t(element.dataset.i18n); });

  const rows = allFilteredRows();
  const pages = Math.max(1, Math.ceil(rows.length / state.pageSize));
  if (state.currentPage > pages) state.currentPage = pages;
  const start = (state.currentPage - 1) * state.pageSize;
  const paged = rows.slice(start, start + state.pageSize);

  const content = $("#content");
  if (state.route === "sales") {
    $("#breadcrumb").textContent = t("salesBreadcrumb");
    $("#page-title").textContent = t("salesTitle");
    content.innerHTML = `<section class="page-enter">
      <div class="page-heading">
        <div><h2>${t("salesPageTitle")}</h2><p>${t("salesPageSub")}</p></div>
        <div class="page-actions"><button class="button" data-action="export"><svg><use href="#i-download"></use></svg>${t("download")}${state.selected.size ? ` · ${state.selected.size}` : ""}</button></div>
      </div>
      ${salesFilterMarkup()}
      ${salesTable(rows, paged, rows.length, pages)}
    </section>`;
  } else {
    $("#breadcrumb").textContent = t("usersBreadcrumb");
    $("#page-title").textContent = t("usersTitle");
    content.innerHTML = `<section class="page-enter">
      <div class="page-heading">
        <div><h2>${t("usersPageTitle")}</h2><p>${t("usersPageSub")}</p></div>
        <div class="page-actions"><button class="button" data-action="export"><svg><use href="#i-download"></use></svg>${t("export")}</button></div>
      </div>
      ${usersFilterMarkup()}
      ${usersTable(rows, paged, rows.length, pages)}
    </section>`;
  }
  bindPageEvents();
}

function bindPageEvents() {
  const map = {
    "filter-search": "search", "filter-business": "business", "filter-intent": "intent", "filter-cc": "cc",
    "filter-stage": "stage", "filter-age": "age", "filter-level": "level", "filter-landing": "sourceLanding",
    "filter-source-app": "sourceApp", "filter-user-status": "userStatus", "filter-sales-consult": "salesConsult",
    "filter-consult": "consult", "filter-outbound": "outbound", "filter-date-from": "dateFrom",
    "filter-date-to": "dateTo", "filter-user-type": "userType", "filter-register": "register"
  };
  Object.entries(map).forEach(([id, key]) => {
    const element = document.getElementById(id);
    if (!element) return;
    element.addEventListener(element.tagName === "INPUT" && element.type === "text" ? "input" : "change", event => {
      state.filters[key] = event.target.value;
      state.currentPage = 1;
      const active = $(".active-filters");
      if (active) active.innerHTML = activeFilterChips();
    });
  });
  $("#apply-filters")?.addEventListener("click", () => {
    syncTextSearch();
    state.currentPage = 1;
    render();
    showToast(t("loadSuccess"));
  });
  $("#reset-filters")?.addEventListener("click", () => resetFilters());
  $("#select-all")?.addEventListener("change", event => {
    const pagedIds = [...document.querySelectorAll(".row-check")].map(check => check.dataset.id);
    pagedIds.forEach(id => event.target.checked ? state.selected.add(id) : state.selected.delete(id));
    render();
  });
  $$(".row-check").forEach(check => check.addEventListener("change", event => {
    event.target.checked ? state.selected.add(event.target.dataset.id) : state.selected.delete(event.target.dataset.id);
    render();
  }));
  $$("[data-page]").forEach(button => button.addEventListener("click", () => {
    const page = Number(button.dataset.page);
    if (page >= 1 && page <= Math.max(1, Math.ceil(allFilteredRows().length / state.pageSize))) {
      state.currentPage = page;
      render();
    }
  }));
  $$("[data-action]").forEach(button => button.addEventListener("click", event => handleAction(event, button)));
}

function syncTextSearch() {
  const search = document.getElementById("filter-search");
  if (search) state.filters.search = search.value.trim();
}

function resetFilters() {
  clearFilterState();
  state.currentPage = 1;
  state.selected.clear();
  render();
}

function clearFilterState() {
  Object.keys(state.filters).forEach(key => { state.filters[key] = key === "business" || key === "intent" || key === "cc" || key === "stage" || key === "age" || key === "level" || key === "sourceLanding" || key === "sourceApp" || key === "userStatus" || key === "salesConsult" || key === "consult" || key === "outbound" || key === "userType" || key === "register" ? "all" : ""; });
}

function handleAction(event, button) {
  const action = button.dataset.action;
  if (action === "export") openExport();
  if (action === "dial") showToast(t("dialStarted"));
  if (action === "clear-empty") resetFilters();
  if (action === "more") {
    event.stopPropagation();
    const rect = button.getBoundingClientRect();
    openActionMenu(button.dataset.id, rect);
  }
  if (action === "view-detail") {
    closeActionMenu();
    openDrawer(button.dataset.id);
  }
  if (action === "update-follow") {
    closeActionMenu();
    showToast(t("followOpened"));
  }
}

function openActionMenu(id, rect) {
  const menu = $("#action-menu");
  menu.innerHTML = `
    <button data-menu-action="view-detail" data-id="${id}"><svg><use href="#i-user"></use></svg>${t("viewCustomer")}</button>
    <button data-menu-action="view-detail" data-id="${id}"><svg><use href="#i-clock"></use></svg>${t("viewRequest")}</button>
    <button data-menu-action="update-follow" data-id="${id}"><svg><use href="#i-list"></use></svg>${t("updateFollow")}</button>`;
  menu.style.left = `${Math.max(10, Math.min(window.innerWidth - 176, rect.right - 156))}px`;
  menu.style.top = `${Math.min(window.innerHeight - 122, rect.bottom + 5)}px`;
  menu.classList.add("is-open");
  menu.setAttribute("aria-hidden", "false");
  $$("[data-menu-action]", menu).forEach(item => item.addEventListener("click", () => handleAction({ stopPropagation() {} }, item.dataset.menuAction === "view-detail" ? { ...item, dataset: { action: "view-detail", id } } : { ...item, dataset: { action: "update-follow", id } })));
}

function closeActionMenu() {
  const menu = $("#action-menu");
  menu.classList.remove("is-open");
  menu.setAttribute("aria-hidden", "true");
}

function openDrawer(id) {
  const person = people.find(item => item.id === id);
  if (!person) return;
  state.currentDetailId = id;
  state.showFullPhone = false;
  const consultation = person.consultation;
  const booked = consultation.status === "booked";
  const review = consultation.status === "review";
  $("#drawer").innerHTML = `
    <div class="drawer-head">
      <div class="drawer-head-row"><div><h3>${escapeHTML(person.name)}</h3><p>${t("detailSub")}</p></div><button class="icon-btn" id="close-drawer" aria-label="${t("closed")}"><svg><use href="#i-close"></use></svg></button></div>
    </div>
    <div class="drawer-body">
      <section class="detail-section">
        <h4>${t("basicInfo")}</h4>
        <div class="detail-grid">
          <div class="detail-item"><span>${t("userID")}</span><strong class="mono">${person.id}</strong></div>
          <div class="detail-item"><span>${t("businessLineLabel")}</span><strong>${businessLabel(person.business)}</strong></div>
          <div class="detail-item"><span>${t("userStatusLabel")}</span><strong>${userStatusLabel(person.userStatus)}</strong></div>
          <div class="detail-item"><span>${t("registerDate")}</span><strong>${formatTime(person.registeredAt)}</strong></div>
        </div>
      </section>
      <section class="detail-section">
        <h4>${t("consultSection")}</h4>
        <div class="consult-card">
          <div class="consult-head"><strong>${t("consultSection")}</strong>${consultMarkup(person)}</div>
          ${booked || review ? `<div class="consult-meta">
            <div><span class="meta-label">${t("submitTime")}</span><span class="meta-value">${formatTime(consultation.submittedAt)}</span></div>
            <div><span class="meta-label">${t("requestSource")}</span><span class="meta-value">${sourceLabel(consultation.source)}</span></div>
            <div><span class="meta-label">${t("requestId")}</span><span class="meta-value mono">${consultation.requestId}</span></div>
            <div><span class="meta-label">${t("clientEventTime")}</span><span class="meta-value">${consultation.clientEventAt ? formatTime(consultation.clientEventAt) : t("noSource")}</span></div>
          </div>
          <div class="reveal-row"><div><span class="meta-label">${t("phoneSnapshot")}</span><span class="meta-value" id="phone-value">${state.showFullPhone ? consultation.phone : maskPhone(consultation.phone)}</span></div><button class="link-btn" id="toggle-phone">${state.showFullPhone ? t("hidePhone") : t("revealPhone")}</button></div>
          ${review ? `<div class="notice" style="margin-top:12px"><svg><use href="#i-alert"></use></svg><span>${t("reviewHint")}</span></div>` : ""}` : `<div class="notice" style="margin-top:12px"><svg><use href="#i-alert"></use></svg><span>${t("notBookedHint")}</span></div>`}
        </div>
      </section>
      <section class="detail-section">
        <h4>${t("leadSection")}</h4>
        <div class="detail-grid">
          <div class="detail-item"><span>${t("currentCc")}</span><strong>${escapeHTML(person.cc)}</strong></div>
          <div class="detail-item"><span>${t("followStage")}</span><strong>${{ new: t("stageNew"), contacted: t("stageContacted"), trial: t("stageTrial"), paid: t("stagePaid") }[person.stage]}</strong></div>
        </div>
      </section>
      <section class="detail-section">
        <h4>${t("timeline")}</h4>
        <div class="timeline">
          <div class="timeline-item"><strong>${t("registeredEvent")}</strong><span>${formatTime(person.registeredAt)}</span><p>${escapeHTML(person.login)}</p></div>
          ${booked || review ? `<div class="timeline-item"><strong>${t("consultationEvent")}</strong><span>${formatTime(consultation.submittedAt)}</span><p>${sourceLabel(consultation.source)} · ${consultation.requestId}</p></div>` : ""}
          <div class="timeline-item"><strong>${t("leadAssigned")}</strong><span>${person.cc}</span><p>${t("stageNew")}</p></div>
        </div>
      </section>
    </div>`;
  $("#drawer-layer").classList.add("is-open");
  $("#drawer-layer").setAttribute("aria-hidden", "false");
  $("#close-drawer").addEventListener("click", closeDrawer);
  $("#toggle-phone")?.addEventListener("click", () => {
    state.showFullPhone = !state.showFullPhone;
    $("#phone-value").textContent = state.showFullPhone ? consultation.phone : maskPhone(consultation.phone);
    $("#toggle-phone").textContent = state.showFullPhone ? t("hidePhone") : t("revealPhone");
  });
}

function closeDrawer() {
  $("#drawer-layer").classList.remove("is-open");
  $("#drawer-layer").setAttribute("aria-hidden", "true");
  state.showFullPhone = false;
  state.currentDetailId = null;
}

function openExport() {
  const rows = state.selected.size ? people.filter(person => state.selected.has(person.id)) : allFilteredRows();
  $("#export-modal").innerHTML = `
    <h3 id="export-title">${t("exportTitle")}</h3>
    <p class="modal-sub">${t("exportSub")}</p>
    <div class="export-summary"><strong>${t("exportScope")}</strong><span>${t("exportCount", { count: rows.length })} · ${t("exportPhone")}</span>
      <ul class="export-fields"><li>user_id</li><li>consultation_booking_status</li><li>consultation_submitted_at</li><li>consultation_source</li><li>consultation_request_id</li><li>phone_number</li></ul>
    </div>
    <div class="modal-actions"><button class="button" id="cancel-export">${t("cancel")}</button><button class="button primary" id="confirm-export" ${rows.length ? "" : "disabled"}>${t("confirmDownload")}</button></div>`;
  $("#export-layer").classList.add("is-open");
  $("#export-layer").setAttribute("aria-hidden", "false");
  $("#cancel-export").addEventListener("click", closeExport);
  $("#confirm-export").addEventListener("click", () => downloadCsv(rows));
}

function closeExport() {
  $("#export-layer").classList.remove("is-open");
  $("#export-layer").setAttribute("aria-hidden", "true");
}

function downloadCsv(rows) {
  const header = ["user_id", "consultation_booking_status", "consultation_submitted_at", "consultation_source", "consultation_request_id", "phone_number"];
  const body = rows.map(person => [
    person.id,
    person.consultation.status === "booked" ? "BOOKED" : person.consultation.status === "review" ? "NEEDS_REVIEW" : "NOT_BOOKED",
    person.consultation.submittedAt || "",
    person.consultation.source ? person.consultation.source.toUpperCase() : "",
    person.consultation.requestId || "",
    person.consultation.phone || ""
  ]);
  const csv = [header, ...body].map(row => row.map(csvCell).join(",")).join("\n");
  const blob = new Blob([`\ufeff${csv}`], { type: "text/csv;charset=utf-8" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = `user-consultation-${new Date().toISOString().slice(0, 10)}.csv`;
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(link.href);
  closeExport();
  showToast(t("downloadStarted"));
}

function csvCell(value) {
  const text = String(value ?? "");
  return `"${text.replace(/"/g, '""')}"`;
}

function maskPhone(phone) {
  if (!phone) return t("noSource");
  const digits = phone.replace(/\s/g, "");
  if (digits.length < 7) return "••••••";
  const prefix = digits.slice(0, 3);
  const suffix = digits.slice(-3);
  return `${prefix} ••• ${suffix}`;
}

function escapeHTML(value) {
  return String(value ?? "").replace(/[&<>"']/g, character => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[character]);
}

function escapeAttr(value) {
  return escapeHTML(value).replace(/`/g, "&#96;");
}

let toastTimer;
function showToast(message) {
  const toast = $("#toast");
  toast.textContent = message;
  toast.classList.add("is-visible");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("is-visible"), 2400);
}

$$(".lang-btn").forEach(button => button.addEventListener("click", () => {
  state.lang = button.dataset.lang;
  localStorage.setItem("user_consult_lang", state.lang);
  closeActionMenu();
  render();
}));
$$(".nav-item").forEach(button => button.addEventListener("click", () => {
  state.route = button.dataset.route;
  clearFilterState();
  state.currentPage = 1;
  state.selected.clear();
  closeActionMenu();
  render();
  $("#content").focus({ preventScroll: true });
}));
$("#drawer-scrim").addEventListener("click", closeDrawer);
$("#export-scrim").addEventListener("click", closeExport);
document.addEventListener("click", event => {
  if (!event.target.closest("#action-menu") && !event.target.closest("[data-action='more']")) closeActionMenu();
});
document.addEventListener("keydown", event => {
  if (event.key === "Escape") {
    closeDrawer();
    closeExport();
    closeActionMenu();
  }
});

render();

