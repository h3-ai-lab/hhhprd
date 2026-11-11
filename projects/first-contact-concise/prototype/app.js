const LEADS = [
  {
    id: "LD-261109-1048", userId: "2119933744832167937", name: "Nguyễn Minh Anh", businessLine: "Vietnam",
    firstCc: "Linh Pham", firstCcId: "cc_vn_1024", firstCcEmail: "linh.pham@dino.ai",
    currentCc: "Minh Tran", currentCcId: "tmk_vn_021", currentTeam: "TMK",
    assignedText: "2026-11-09 09:12 (+07)", outboundText: "2026-11-09 09:18 (+07)", connectedText: "2026-11-09 09:26 (+07)",
    registrationDate: "2026-10-24", assignedDate: "2026-11-09", currentAssignedText: "2026-11-09 17:42 (+07)",
    hasOutbound: true, stage: "电话营销跟进中",
    attempts: 4, connected: 2, outcome: "有意向", view: "following", stopped: false
  },
  {
    id: "LD-261109-1051", userId: "211993114542575618", name: "Bảo Lê", businessLine: "Thailand",
    firstCc: "Linh Pham", firstCcId: "cc_vn_1024", firstCcEmail: "linh.pham@dino.ai",
    currentCc: "Minh Tran", currentCcId: "tmk_vn_021", currentTeam: "TMK",
    assignedText: "2026-11-09 09:28 (+07)", outboundText: "2026-11-09 10:04 (+07)", connectedText: "2026-11-09 10:10 (+07)",
    registrationDate: "2026-10-30", assignedDate: "2026-11-09", currentAssignedText: "2026-11-09 18:03 (+07)",
    hasOutbound: true, stage: "电话营销跟进中",
    attempts: 3, connected: 1, outcome: "未填写", view: "following", stopped: false
  },
  {
    id: "LD-261109-1067", userId: "211993582872029762", name: "Chi Phạm", businessLine: "Malaysia",
    firstCc: "Linh Pham", firstCcId: "cc_vn_1024", firstCcEmail: "linh.pham@dino.ai",
    currentCc: "Linh Pham", currentCcId: "cc_vn_1024", currentTeam: "CC",
    assignedText: "2026-11-09 11:05 (+07)", outboundText: "—", connectedText: "—",
    registrationDate: "2026-11-02", assignedDate: "2026-11-09", currentAssignedText: "2026-11-09 11:05 (+07)",
    hasOutbound: false, stage: "首次跟进",
    attempts: 0, connected: 0, outcome: "未填写", view: "following", stopped: false
  },
  {
    id: "LD-261108-0934", userId: "211993414302876441", name: "Dung Trần", businessLine: "Vietnam",
    firstCc: "Mai Nguyen", firstCcId: "cc_vn_1031", firstCcEmail: "mai.nguyen@dino.ai",
    currentCc: "Minh Tran", currentCcId: "tmk_vn_021", currentTeam: "TMK",
    assignedText: "2026-11-08 14:22 (+07)", outboundText: "2026-11-08 14:31 (+07)", connectedText: "2026-11-08 14:40 (+07)",
    registrationDate: "2026-11-01", assignedDate: "2026-11-08", currentAssignedText: "2026-11-09 09:14 (+07)",
    hasOutbound: true, stage: "电话营销已接通",
    attempts: 5, connected: 3, outcome: "已预约", view: "following", stopped: false
  },
  {
    id: "LD-261108-0948", userId: "211993778120431105", name: "Giang Võ", businessLine: "Thailand",
    firstCc: "Mai Nguyen", firstCcId: "cc_vn_1031", firstCcEmail: "mai.nguyen@dino.ai",
    currentCc: "Hà Nguyễn", currentCcId: "cc_vn_1042", currentTeam: "CC",
    assignedText: "2026-11-08 16:08 (+07)", outboundText: "2026-11-08 16:16 (+07)", connectedText: "—",
    registrationDate: "2026-10-29", assignedDate: "2026-11-08", currentAssignedText: "2026-11-09 10:20 (+07)",
    hasOutbound: true, stage: "销售跟进中",
    attempts: 2, connected: 0, outcome: "无人接听", view: "following", stopped: false
  },
  {
    id: "LD-261110-1122", userId: "211993011548763924", name: "Hạnh Đỗ", businessLine: "Vietnam",
    firstCc: "Quyen Do", firstCcId: "cc_vn_1039", firstCcEmail: "quyen.do@dino.ai",
    currentCc: "Minh Tran", currentCcId: "tmk_vn_021", currentTeam: "TMK",
    assignedText: "2026-11-10 08:11 (+07)", outboundText: "2026-11-10 08:19 (+07)", connectedText: "2026-11-10 08:22 (+07)",
    registrationDate: "2026-11-09", assignedDate: "2026-11-10", currentAssignedText: "2026-11-10 08:25 (+07)",
    hasOutbound: true, stage: "电话营销待跟进",
    attempts: 1, connected: 1, outcome: "未填写", view: "following", stopped: false
  },
  {
    id: "LD-261110-1140", userId: "211993723590118302", name: "Khanh Lâm", businessLine: "Malaysia",
    firstCc: "Quyen Do", firstCcId: "cc_vn_1039", firstCcEmail: "quyen.do@dino.ai",
    currentCc: "Quyen Do", currentCcId: "cc_vn_1039", currentTeam: "CC",
    assignedText: "2026-11-10 09:47 (+08)", outboundText: "—", connectedText: "—",
    registrationDate: "2026-11-10", assignedDate: "2026-11-10", currentAssignedText: "2026-11-10 09:47 (+08)",
    hasOutbound: false, stage: "首次跟进",
    attempts: 0, connected: 0, outcome: "未填写", view: "following", stopped: false
  },
  {
    id: "LD-260918-0502", userId: "211993665881039421", name: "Tú Phan", businessLine: "Thailand",
    firstCc: null, firstCcId: null, firstCcEmail: null,
    currentCc: "Bảo Trân", currentCcId: "cc_vn_1051", currentTeam: "CC",
    assignedText: "—", outboundText: "2026-09-18 10:32 (+07)", connectedText: "2026-09-18 10:36 (+07)",
    registrationDate: "2026-09-02", assignedDate: "", currentAssignedText: "历史未知",
    hasOutbound: true, stage: "电话营销已接通",
    attempts: 2, connected: 1, outcome: "未填写", view: "following", stopped: false
  },
  {
    id: "LD-260907-0471", userId: "211993090470273734", name: "Minh Châu", businessLine: "Vietnam",
    firstCc: "An Vo", firstCcId: "cc_vn_1006", firstCcEmail: "an.vo@dino.ai",
    currentCc: "Bảo Trân", currentCcId: "cc_vn_1051", currentTeam: "CC",
    assignedText: "2026-09-07 10:02 (+07)", outboundText: "2026-09-07 10:20 (+07)", connectedText: "2026-09-07 10:25 (+07)",
    registrationDate: "2026-08-28", assignedDate: "2026-09-07", currentAssignedText: "2026-09-08 08:54 (+07)",
    hasOutbound: true, stage: "续费跟进",
    attempts: 6, connected: 4, outcome: "已付费", view: "paid", stopped: true
  },
  {
    id: "LD-261012-0619", userId: "211993690918140527", name: "Nam Hoàng", businessLine: "Thailand",
    firstCc: "Linh Pham", firstCcId: "cc_vn_1024", firstCcEmail: "linh.pham@dino.ai",
    currentCc: "Minh Tran", currentCcId: "tmk_vn_021", currentTeam: "TMK",
    assignedText: "2026-10-12 13:26 (+07)", outboundText: "2026-10-12 13:40 (+07)", connectedText: "2026-10-12 13:48 (+07)",
    registrationDate: "2026-10-03", assignedDate: "2026-10-12", currentAssignedText: "2026-10-13 09:03 (+07)",
    hasOutbound: true, stage: "续费跟进",
    attempts: 8, connected: 5, outcome: "已付费", view: "paid", stopped: false
  },
  {
    id: "LD-261020-0752", userId: "211993207845610980", name: "Oanh Nguyễn", businessLine: "Malaysia",
    firstCc: "Mai Nguyen", firstCcId: "cc_vn_1031", firstCcEmail: "mai.nguyen@dino.ai",
    currentCc: "Mai Nguyen", currentCcId: "cc_vn_1031", currentTeam: "CC",
    assignedText: "2026-10-20 15:16 (+08)", outboundText: "2026-10-20 15:24 (+08)", connectedText: "2026-10-20 15:29 (+08)",
    registrationDate: "2026-10-12", assignedDate: "2026-10-20", currentAssignedText: "2026-10-20 15:16 (+08)",
    hasOutbound: true, stage: "续费跟进",
    attempts: 3, connected: 2, outcome: "已付费", view: "paid", stopped: false
  },
  {
    id: "LD-260903-0428", userId: "211993519107422668", name: "Phú Nguyễn", businessLine: "Thailand",
    firstCc: null, firstCcId: null, firstCcEmail: null,
    currentCc: "Bảo Trân", currentCcId: "cc_vn_1051", currentTeam: "CC",
    assignedText: "—", outboundText: "2026-09-03 11:18 (+07)", connectedText: "—",
    registrationDate: "2026-08-25", assignedDate: "", currentAssignedText: "历史未知",
    hasOutbound: true, stage: "电话营销跟进中",
    attempts: 2, connected: 1, outcome: "已付费", view: "paid", stopped: false
  },
  {
    id: "LD-261110-1168", userId: "211993880651174930", name: "Quyên Lý", businessLine: "Vietnam",
    firstCc: "Linh Pham", firstCcId: "cc_vn_1024", firstCcEmail: "linh.pham@dino.ai",
    currentCc: "未分配", currentCcId: null, currentTeam: "POOL",
    assignedText: "2026-11-10 10:11 (+07)", outboundText: "2026-11-10 10:15 (+07)", connectedText: "—",
    registrationDate: "2026-11-08", assignedDate: "2026-11-10", currentAssignedText: "2026-11-10 11:03 (+07)",
    hasOutbound: true, stage: "已退回公海",
    attempts: 1, connected: 0, outcome: "无人接听", view: "pool", stopped: false
  },
  {
    id: "LD-260922-0563", userId: "211993440781025116", name: "Sơn Đặng", businessLine: "Malaysia",
    firstCc: null, firstCcId: null, firstCcEmail: null,
    currentCc: "未分配", currentCcId: null, currentTeam: "POOL",
    assignedText: "—", outboundText: "—", connectedText: "—",
    registrationDate: "2026-09-15", assignedDate: "", currentAssignedText: "历史未知",
    hasOutbound: false, stage: "待领取",
    attempts: 0, connected: 0, outcome: "未填写", view: "pool", stopped: false
  }
];

const FIRST_CC = ["Linh Pham", "Mai Nguyen", "Quyen Do", "An Vo"];
const CURRENT_CC = ["Minh Tran", "Linh Pham", "Hà Nguyễn", "Quyen Do", "Bảo Trân", "Mai Nguyen", "未分配"];
const BUSINESS_LINES = ["Vietnam", "Thailand", "Malaysia"];
const LEAD_PROFILE = {
  "LD-261109-1048": { intent: "有意向", userStatus: "未付费已体验", userType: "正式用户", age: "6–8", course: "L1", login: "minh.anh@student.vn", source: "Facebook_LF (VN)" },
  "LD-261109-1051": { intent: "未填写", userStatus: "未付费未体验", userType: "正式用户", age: "9–12", course: "L2", login: "bao.le@student.th", source: "TikTok Thailand" },
  "LD-261109-1067": { intent: "有意向", userStatus: "未付费已体验", userType: "正式用户", age: "3–5", course: "L1", login: "chi.pham@student.my", source: "Facebook_LF (MY)" },
  "LD-261108-0934": { intent: "有意向", userStatus: "未付费已体验", userType: "正式用户", age: "6–8", course: "L2", login: "dung.tran@student.vn", source: "Google Search" },
  "LD-261108-0948": { intent: "无意向", userStatus: "未付费未体验", userType: "正式用户", age: "9–12", course: "L1", login: "giang.vo@student.th", source: "App Organic" },
  "LD-261110-1122": { intent: "有意向", userStatus: "未付费已体验", userType: "正式用户", age: "3–5", course: "L1", login: "hanh.do@student.vn", source: "TikTok Vietnam" },
  "LD-261110-1140": { intent: "未填写", userStatus: "未付费未体验", userType: "测试用户", age: "—", course: "—", login: "khanh.lam@student.my", source: "Facebook_LF (MY)" },
  "LD-260918-0502": { intent: "无意向", userStatus: "未付费已体验", userType: "正式用户", age: "9–12", course: "L2", login: "tu.phan@student.th", source: "Facebook_LF (TH)" },
  "LD-260907-0471": { intent: "有意向", userStatus: "付费", userType: "正式用户", age: "6–8", course: "L3", login: "minh.chau@student.vn", source: "TikTok Vietnam" },
  "LD-261012-0619": { intent: "有意向", userStatus: "付费", userType: "正式用户", age: "9–12", course: "L4", login: "nam.hoang@student.th", source: "Facebook_LF (TH)" },
  "LD-261020-0752": { intent: "未填写", userStatus: "付费", userType: "正式用户", age: "6–8", course: "L2", login: "oanh.nguyen@student.my", source: "App Organic" },
  "LD-260903-0428": { intent: "有意向", userStatus: "付费", userType: "正式用户", age: "3–5", course: "L1", login: "phu.nguyen@student.th", source: "Facebook_LF (TH)" },
  "LD-261110-1168": { intent: "无意向", userStatus: "未付费已体验", userType: "正式用户", age: "6–8", course: "L1", login: "quyen.ly@student.vn", source: "Google Search" },
  "LD-260922-0563": { intent: "未填写", userStatus: "未付费未体验", userType: "正式用户", age: "—", course: "—", login: "son.dang@student.my", source: "Facebook_LF (MY)" }
};
const VIEW_COUNTS = {
  pool: LEADS.filter((lead) => lead.view === "pool").length,
  following: LEADS.filter((lead) => lead.view === "following").length,
  paid: LEADS.filter((lead) => lead.view === "paid").length
};
const PAGE_SIZE = 8;

const state = {
  route: routeFromHash(),
  tab: "following",
  page: 1,
  exportRows: [],
  filters: {
    query: "",
    businessLine: "all",
    intent: "all",
    firstCc: "all",
    currentCc: "all",
    stage: "all",
    age: "all",
    course: "all",
    sourceLanding: "all",
    sourceApp: "all",
    userStatus: "all",
    consultAppointment: "all",
    appointmentOutbound: "all",
    outbound: "all",
    connected: "all",
    outboundMin: "",
    outboundMax: "",
    connectedMin: "",
    connectedMax: "",
    dateField: "registration",
    from: "",
    to: ""
  }
};

const content = document.querySelector("#content");
const drawerLayer = document.querySelector("#drawer-layer");
const drawer = document.querySelector("#drawer");
const exportLayer = document.querySelector("#export-layer");
const exportModal = document.querySelector("#export-modal");
const toast = document.querySelector("#toast");

function routeFromHash() {
  const route = location.hash.replace(/^#\/?/, "");
  return ["leads", "monitor"].includes(route) ? route : "leads";
}

function icon(name) {
  return `<svg aria-hidden="true"><use href="#i-${name}"></use></svg>`;
}

function esc(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function initials(name) {
  if (!name) return "?";
  return name.split(/\s+/).slice(-2).map((part) => part[0]).join("").toUpperCase();
}

function tag(text, kind = "neutral") {
  return `<span class="tag tag-${kind}">${esc(text)}</span>`;
}

function businessLineLabel(value) {
  return value === "Vietnam" ? "越南" : value === "Thailand" ? "泰国" : value === "Malaysia" ? "马来西亚" : value;
}

function sourceApp(source) {
  if (source.startsWith("Facebook")) return "Facebook";
  if (source.startsWith("TikTok")) return "TikTok";
  if (source.startsWith("Google")) return "Google";
  if (source.startsWith("App")) return "App";
  return "其他";
}

function leadMatchesOption(lead, key, value) {
  if (value === "all") return true;
  const profile = LEAD_PROFILE[lead.id];
  if (key === "intent") return profile.intent === value;
  if (key === "stage") return lead.stage === value;
  if (key === "age") return profile.age === value;
  if (key === "course") return profile.course === value;
  if (key === "sourceLanding") return profile.source === value;
  if (key === "sourceApp") return sourceApp(profile.source) === value;
  if (key === "userStatus") return profile.userStatus === value;
  if (key === "consultAppointment") return (lead.outcome === "已预约" ? "已预约" : "未预约") === value;
  if (key === "appointmentOutbound") return (lead.hasOutbound ? "已外呼" : "未外呼") === value;
  return true;
}

function withinRange(value, minimum, maximum) {
  if (minimum !== "" && value < Number(minimum)) return false;
  if (maximum !== "" && value > Number(maximum)) return false;
  return true;
}

function formatPercent(numerator, denominator) {
  return denominator > 0 ? `${(numerator / denominator * 100).toFixed(1)}%` : "—";
}

function dateFieldLabel(value) {
  return value === "assigned" ? "首次分配时间" : "注册时间";
}

function matchesDateFilter(lead, filters = state.filters) {
  const value = filters.dateField === "assigned" ? lead.assignedDate : lead.registrationDate;
  if (!filters.from && !filters.to) return true;
  if (!value) return false;
  if (filters.from && value < filters.from) return false;
  if (filters.to && value > filters.to) return false;
  return true;
}

function currentFilters() {
  return { ...state.filters };
}

function filteredRows(includeTab = true) {
  const f = state.filters;
  return LEADS.filter((lead) => {
    if (includeTab && lead.view !== state.tab) return false;
    if (f.query) {
      const haystack = `${lead.id} ${lead.userId} ${lead.name}`.toLowerCase();
      if (!haystack.includes(f.query.toLowerCase())) return false;
    }
    if (f.businessLine !== "all" && lead.businessLine !== f.businessLine) return false;
    for (const key of ["intent", "stage", "age", "course", "sourceLanding", "sourceApp", "userStatus", "consultAppointment", "appointmentOutbound"]) {
      if (!leadMatchesOption(lead, key, f[key])) return false;
    }
    if (f.firstCc !== "all" && lead.firstCc !== f.firstCc) return false;
    if (f.currentCc !== "all" && lead.currentCc !== f.currentCc) return false;
    if (f.outbound === "has" && !lead.hasOutbound) return false;
    if (f.outbound === "none" && lead.hasOutbound) return false;
    if (f.outbound === "unknown" && lead.firstCcId) return false;
    if (f.connected === "yes" && lead.connectedText === "—") return false;
    if (f.connected === "no" && lead.connectedText !== "—") return false;
    if (f.connected === "unknown" && lead.firstCcId) return false;
    if (!withinRange(lead.attempts, f.outboundMin, f.outboundMax)) return false;
    if (!withinRange(lead.connected, f.connectedMin, f.connectedMax)) return false;
    if (!matchesDateFilter(lead, f)) return false;
    return true;
  });
}

const METRIC_HELP = {
  assigned: "首跟承接量：筛选范围内首跟 CC 非空的去重 Lead 数。",
  coverage: "首跟覆盖率：首跟 CC 非空的去重 Lead 数 ÷ 筛选范围内全部去重 Lead 数。",
  outboundLeads: "首次外呼线索数：首跟集合中首次外呼时间非空的去重 Lead 数。",
  outboundCoverage: "首次外呼覆盖率：首次外呼时间非空的去重 Lead 数 ÷ 首跟集合去重 Lead 数。",
  connectedLeads: "首次接通线索数：首跟集合中首次接通时间非空的去重 Lead 数。",
  connectedCoverage: "首次接通覆盖率：首次接通时间非空的去重 Lead 数 ÷ 首跟集合去重 Lead 数。",
  outboundTotal: "外呼次数：首跟集合内全部外呼记录之和，按 Call ID 去重，单位是“通”。",
  connectedTotal: "接通次数：首跟集合内状态为接通的 Call ID 去重数，单位是“通”；卡片下方外呼接通率 = 接通次数 ÷ 外呼次数，外呼次数为 0 时显示“—”。"
};

function metricHelp(key) {
  const text = `${METRIC_HELP[key] || ""} 统计范围：当前业务线、首跟 CC、日期类型和日期范围筛选后的线索；时间按所选日期字段和业务线时区统计；人数类按 Lead ID 去重，次数类按 Call ID 去重；分母为 0 时显示“—”。`;
  return `<button type="button" class="metric-help" data-metric-help="${esc(text)}" title="${esc(text)}" aria-label="${esc(text)}">口径</button>`;
}

function statsFor(rows, cohortRows = rows) {
  const covered = rows.filter((row) => row.firstCcId).length;
  const outbound = rows.filter((row) => row.hasOutbound).length;
  const connected = rows.filter((row) => row.connectedText !== "—").length;
  const outboundCalls = rows.reduce((sum, row) => sum + row.attempts, 0);
  const connectedCalls = rows.reduce((sum, row) => sum + row.connected, 0);
  const total = cohortRows.length;
  return {
    total,
    covered,
    coverage: total ? covered / total * 100 : 0,
    outbound,
    outboundRate: covered ? outbound / covered * 100 : 0,
    connected,
    connectedRate: covered ? connected / covered * 100 : 0,
    outboundCalls,
    connectedCalls,
    outboundConnectRate: outboundCalls ? connectedCalls / outboundCalls * 100 : 0,
    missing: total - covered
  };
}

function statCards(rows, cohortRows) {
  const stats = statsFor(rows, cohortRows);
  return `<div class="stat-grid">
    <div class="stat-card" role="button" tabindex="0" data-monitor-stat="all"><span class="stat-label">首跟承接量</span><strong>${stats.covered}</strong><small>筛选线索 ${stats.total}</small>${metricHelp("assigned")}</div>
    <div class="stat-card is-success" role="button" tabindex="0" data-monitor-stat="all"><span class="stat-label">首跟覆盖率</span><strong>${formatPercent(stats.covered, stats.total)}</strong><small>${stats.covered} / ${stats.total}</small>${metricHelp("coverage")}</div>
    <div class="stat-card is-warning" role="button" tabindex="0" data-monitor-stat="outbound"><span class="stat-label">外呼次数</span><strong>${stats.outboundCalls}</strong><small>首次外呼线索 ${stats.outbound}</small>${metricHelp("outboundTotal")}</div>
    <div class="stat-card is-purple" role="button" tabindex="0" data-monitor-stat="connected"><span class="stat-label">接通次数</span><strong>${stats.connectedCalls}</strong><small>${formatPercent(stats.connectedCalls, stats.outboundCalls)} 外呼接通率</small>${metricHelp("connectedTotal")}</div>
  </div>`;
}

function selectOptions(items, selected, allLabel) {
  return [`<option value="all">${esc(allLabel)}</option>`]
    .concat(items.map((item) => `<option value="${esc(item)}" ${item === selected ? "selected" : ""}>${esc(item)}</option>`))
    .join("");
}

function filtersPanel(rows) {
  const f = state.filters;
  const profiles = LEADS.map((lead) => LEAD_PROFILE[lead.id]);
  const stages = [...new Set(LEADS.map((lead) => lead.stage))];
  const ages = [...new Set(profiles.map((profile) => profile.age))];
  const courses = [...new Set(profiles.map((profile) => profile.course))];
  const sources = [...new Set(profiles.map((profile) => profile.source))];
  const apps = [...new Set(profiles.map((profile) => sourceApp(profile.source)))];
  const statuses = [...new Set(profiles.map((profile) => profile.userStatus))];
  return `<section class="filter-card">
    <div class="filter-grid">
      <label class="field search-field"><span class="field-label">搜索</span><span class="search-box">${icon("search")}<input class="input" id="filter-query" value="${esc(f.query)}" placeholder="手机号 / 用户ID / 姓名"></span></label>
      <label class="field"><span class="field-label">业务线</span><select class="select" id="filter-business-line">${selectOptions(BUSINESS_LINES, f.businessLine, "全部业务线")}</select></label>
      <label class="field"><span class="field-label">购买意向</span><select class="select" id="filter-intent">${selectOptions(["有意向", "无意向", "未填写"], f.intent, "全部意向")}</select></label>
      <label class="field"><span class="field-label">首跟 CC</span><select class="select" id="filter-first-cc">${selectOptions(FIRST_CC, f.firstCc, "全部首跟 CC")}</select></label>
      <label class="field"><span class="field-label">CC</span><select class="select" id="filter-current-cc">${selectOptions(CURRENT_CC, f.currentCc, "全部 CC")}</select></label>
    </div>
    <div class="filter-grid second">
      <label class="field"><span class="field-label">当前跟进阶段</span><select class="select" id="filter-stage">${selectOptions(stages, f.stage, "全部阶段")}</select></label>
      <label class="field"><span class="field-label">年龄段</span><select class="select" id="filter-age">${selectOptions(ages, f.age, "全部年龄")}</select></label>
      <label class="field"><span class="field-label">课程等级</span><select class="select" id="filter-course">${selectOptions(courses, f.course, "全部等级")}</select></label>
      <label class="field"><span class="field-label">渠道来源-落地页</span><select class="select" id="filter-source-landing">${selectOptions(sources, f.sourceLanding, "全部落地页")}</select></label>
      <label class="field"><span class="field-label">渠道来源-App</span><select class="select" id="filter-source-app">${selectOptions(apps, f.sourceApp, "全部 App")}</select></label>
    </div>
    <div class="filter-grid third">
      <label class="field"><span class="field-label">用户状态</span><select class="select" id="filter-user-status">${selectOptions(statuses, f.userStatus, "全部状态")}</select></label>
      <label class="field"><span class="field-label">销售咨询预约</span><select class="select" id="filter-consult-appointment">${selectOptions(["已预约", "未预约"], f.consultAppointment, "全部")}</select></label>
      <label class="field"><span class="field-label">预约外呼</span><select class="select" id="filter-appointment-outbound">${selectOptions(["已外呼", "未外呼"], f.appointmentOutbound, "全部")}</select></label>
      <div class="field date-range-field">
        <span class="field-label">日期</span>
        <div class="date-range-row">
          <select class="select" id="filter-date-field">
            <option value="registration" ${f.dateField === "registration" ? "selected" : ""}>注册日期</option>
            <option value="assigned" ${f.dateField === "assigned" ? "selected" : ""}>首次分配时间</option>
          </select>
          <input class="input" type="date" id="filter-from" value="${esc(f.from)}" aria-label="开始日期">
          <span>至</span>
          <input class="input" type="date" id="filter-to" value="${esc(f.to)}" aria-label="结束日期">
        </div>
      </div>
    </div>
    <div class="filter-grid fourth">
      <label class="field"><span class="field-label">首次外呼状态</span><select class="select" id="filter-outbound">
        <option value="all">全部状态</option><option value="has" ${f.outbound === "has" ? "selected" : ""}>有外呼记录</option>
        <option value="none" ${f.outbound === "none" ? "selected" : ""}>无外呼记录</option>
        <option value="unknown" ${f.outbound === "unknown" ? "selected" : ""}>历史未知</option>
      </select></label>
      <label class="field"><span class="field-label">首次接通状态</span><select class="select" id="filter-connected">
        <option value="all">全部状态</option><option value="yes" ${f.connected === "yes" ? "selected" : ""}>已接通</option>
        <option value="no" ${f.connected === "no" ? "selected" : ""}>未接通</option>
        <option value="unknown" ${f.connected === "unknown" ? "selected" : ""}>历史未知</option>
      </select></label>
      <div class="field range-field"><span class="field-label">外呼次数</span><div class="range-inputs"><input class="input" type="number" min="0" step="1" id="filter-outbound-min" value="${esc(f.outboundMin)}" placeholder="最小值"><span>至</span><input class="input" type="number" min="0" step="1" id="filter-outbound-max" value="${esc(f.outboundMax)}" placeholder="最大值"></div></div>
      <div class="field range-field"><span class="field-label">外呼接通次数</span><div class="range-inputs"><input class="input" type="number" min="0" step="1" id="filter-connected-min" value="${esc(f.connectedMin)}" placeholder="最小值"><span>至</span><input class="input" type="number" min="0" step="1" id="filter-connected-max" value="${esc(f.connectedMax)}" placeholder="最大值"></div></div>
    </div>
    <div class="filter-actions">
      <button class="btn btn-primary" data-action="apply-filters">${icon("filter")} 应用筛选</button>
      <button class="btn" data-action="reset-filters">重置筛选</button>
      <span class="filter-count">${rows.length} 条结果</span>
    </div>
  </section>`;
}

function activeFilterChips() {
  const f = state.filters;
  const chips = [];
  if (f.query) chips.push(`关键词：${f.query}`);
  if (f.businessLine !== "all") chips.push(`业务线：${businessLineLabel(f.businessLine)}`);
  if (f.intent !== "all") chips.push(`购买意向：${f.intent}`);
  if (f.firstCc !== "all") chips.push(`首跟 CC：${f.firstCc}`);
  if (f.currentCc !== "all") chips.push(`CC：${f.currentCc}`);
  if (f.stage !== "all") chips.push(`跟进阶段：${f.stage}`);
  if (f.age !== "all") chips.push(`年龄段：${f.age}`);
  if (f.course !== "all") chips.push(`课程等级：${f.course}`);
  if (f.sourceLanding !== "all") chips.push(`落地页：${f.sourceLanding}`);
  if (f.sourceApp !== "all") chips.push(`App：${f.sourceApp}`);
  if (f.userStatus !== "all") chips.push(`用户状态：${f.userStatus}`);
  if (f.consultAppointment !== "all") chips.push(`销售咨询预约：${f.consultAppointment}`);
  if (f.appointmentOutbound !== "all") chips.push(`预约外呼：${f.appointmentOutbound}`);
  if (f.outbound !== "all") chips.push(`首次外呼：${f.outbound === "has" ? "有记录" : f.outbound === "none" ? "无记录" : "历史未知"}`);
  if (f.connected !== "all") chips.push(`首次接通：${f.connected === "yes" ? "已接通" : f.connected === "no" ? "未接通" : "历史未知"}`);
  if (f.outboundMin !== "" || f.outboundMax !== "") chips.push(`外呼次数：${f.outboundMin || "0"}–${f.outboundMax || "不限"}`);
  if (f.connectedMin !== "" || f.connectedMax !== "") chips.push(`接通次数：${f.connectedMin || "0"}–${f.connectedMax || "不限"}`);
  if (f.from || f.to) chips.push(`${dateFieldLabel(f.dateField)}：${f.from || "不限"}–${f.to || "不限"}`);
  return chips.map((text) => `<span class="filter-chip">${esc(text)}</span>`).join("");
}

function leadRows(rows) {
  if (!rows.length) {
    return `<tr><td colspan="18"><div class="empty-state"><strong>当前筛选下没有线索</strong><p>调整业务线、首跟 CC、外呼状态、次数区间或日期范围后重试。</p></div></td></tr>`;
  }
  return rows.map((lead) => {
    const profile = LEAD_PROFILE[lead.id];
    const firstUser = lead.firstCc
      ? `<div class="user-cell"><span class="user-avatar">${initials(lead.firstCc)}</span><span class="user-copy"><strong>${esc(lead.firstCc)}${lead.stopped ? ` ${tag("已停用", "neutral")}` : ""}</strong><span>${esc(lead.firstCcEmail)}</span></span></div>`
      : `<div class="user-cell"><span class="user-avatar missing">?</span><span class="user-copy"><strong>历史未知</strong><span>无可确认分配事件</span></span></div>`;
    const teamLabel = lead.currentTeam === "TMK" ? "电话营销" : lead.currentTeam === "POOL" ? "待分配" : "客户关怀";
    const currentUser = `<div class="user-cell"><span class="user-avatar ${lead.currentTeam === "TMK" ? "tmk" : "missing"}">${initials(lead.currentCc)}</span><span class="user-copy"><strong>${esc(lead.currentCc)}</strong><span>${teamLabel}</span></span></div>`;
    return `<tr data-lead="${lead.id}">
      <td><span class="mono">${esc(lead.userId)}</span><span class="cell-sub">${esc(businessLineLabel(lead.businessLine))}</span></td>
      <td><span class="cell-title">${esc(lead.name)}</span><span class="cell-sub mono">${esc(lead.id)}</span></td>
      <td>${esc(profile.intent)}</td>
      <td>${esc(profile.userStatus)}</td>
      <td>${esc(profile.userType)}</td>
      <td>${esc(profile.age)}</td>
      <td>${esc(profile.course)}</td>
      <td>${esc(profile.login)}</td>
      <td>${esc(profile.source)}</td>
      <td>${firstUser}</td>
      <td>${currentUser}</td>
      <td><span class="cell-title">${esc(lead.stage)}</span></td>
      <td>${lead.assignedText === "—" ? '<span class="empty-time">—</span>' : esc(lead.assignedText)}</td>
      <td>${lead.outboundText === "—" ? '<span class="empty-time">—</span>' : esc(lead.outboundText)}</td>
      <td>${lead.connectedText === "—" ? '<span class="empty-time">—</span>' : esc(lead.connectedText)}</td>
      <td><strong>${lead.attempts}</strong></td>
      <td><strong>${lead.connected}</strong></td>
      <td><button class="btn btn-small btn-secondary" data-lead="${lead.id}">查看</button></td>
    </tr>`;
  }).join("");
}

function pageButtons(total) {
  const pages = Math.max(1, Math.ceil(total / PAGE_SIZE));
  let buttons = "";
  for (let page = 1; page <= Math.min(pages, 5); page += 1) {
    buttons += `<button class="${page === state.page ? "is-active" : ""}" data-page="${page}">${page}</button>`;
  }
  return `<div class="page-buttons"><button data-page="${Math.max(1, state.page - 1)}" aria-label="上一页">‹</button>${buttons}<button data-page="${Math.min(pages, state.page + 1)}" aria-label="下一页">›</button></div>`;
}

function renderLeads() {
  const rows = filteredRows();
  const start = (state.page - 1) * PAGE_SIZE;
  const pageRows = rows.slice(start, start + PAGE_SIZE);
  content.innerHTML = `<section class="page-enter">
    <div class="view-tabs" role="tablist" aria-label="销售中心页签">
      <button class="view-tab ${state.tab === "pool" ? "is-active" : ""}" data-tab="pool">公海 <em>${VIEW_COUNTS.pool}</em></button>
      <button class="view-tab ${state.tab === "following" ? "is-active" : ""}" data-tab="following">我的跟进 <em>${VIEW_COUNTS.following}</em></button>
      <button class="view-tab ${state.tab === "paid" ? "is-active" : ""}" data-tab="paid">已付费 <em>${VIEW_COUNTS.paid}</em></button>
    </div>
    ${filtersPanel(rows)}
    <section class="table-card">
      <div class="table-toolbar">
        <div><strong>线索明细</strong></div>
        <div class="spacer"></div>
        <div class="active-filters">${activeFilterChips()}</div>
        <button class="btn btn-small" data-action="open-export" ${rows.length ? "" : "disabled"}>${icon("download")} 预览并下载</button>
      </div>
      <div class="table-wrap"><table class="data-table">
        <thead><tr>
          <th>用户 ID</th><th>学生姓名</th><th>购买意向</th><th>用户状态</th><th>用户类型</th><th>年龄段</th><th>课程等级</th><th>登录账号</th><th>渠道来源-落地页</th>
          <th>首跟 CC</th><th>当前 CC</th><th>跟进阶段</th><th>首次分配时间</th><th>首次外呼时间</th><th>首次接通时间</th><th>外呼次数</th><th>外呼接通次数</th><th>操作</th>
        </tr></thead>
        <tbody>${leadRows(pageRows)}</tbody>
      </table></div>
      <div class="table-footer"><span>显示 ${rows.length ? start + 1 : 0}–${Math.min(start + PAGE_SIZE, rows.length)} / ${rows.length} 条 · 下载使用完整筛选范围</span>${pageButtons(rows.length)}</div>
    </section>
  </section>`;
}

function monitorRows() {
  return LEADS.filter((lead) => (
    (state.filters.businessLine === "all" || lead.businessLine === state.filters.businessLine)
    && (state.filters.firstCc === "all" || lead.firstCc === state.filters.firstCc)
    && matchesDateFilter(lead)
  ));
}

function periodRows() {
  return monitorRows().filter((lead) => lead.firstCcId);
}

function monitorFiltersPanel(rows) {
  const f = state.filters;
  return `<section class="filter-card monitor-filter-card">
    <div class="filter-grid second">
      <label class="field"><span class="field-label">业务线</span><select class="select" id="monitor-business-line">${selectOptions(BUSINESS_LINES, f.businessLine, "全部业务线")}</select></label>
      <label class="field"><span class="field-label">首跟 CC</span><select class="select" id="monitor-first-cc">${selectOptions(FIRST_CC, f.firstCc, "全部首跟 CC")}</select></label>
      <label class="field"><span class="field-label">日期类型</span><select class="select" id="monitor-date-field">
        <option value="registration" ${f.dateField === "registration" ? "selected" : ""}>注册时间</option>
        <option value="assigned" ${f.dateField === "assigned" ? "selected" : ""}>首次分配时间</option>
      </select></label>
      <label class="field"><span class="field-label">开始日期</span><input class="input" type="date" id="monitor-from" value="${esc(f.from)}"></label>
      <label class="field"><span class="field-label">结束日期</span><input class="input" type="date" id="monitor-to" value="${esc(f.to)}"></label>
    </div>
    <div class="filter-actions">
      <button class="btn btn-primary" data-action="apply-monitor-filters">${icon("filter")} 应用筛选</button>
      <button class="btn" data-action="reset-monitor-filters">重置筛选</button>
      <button class="btn" data-action="monitor-export">${icon("download")} 导出当前视图</button>
      <span class="filter-count">当前汇总 ${rows.length} 条</span>
    </div>
  </section>`;
}

function productivityRows() {
  const source = periodRows().filter((lead) => lead.firstCc);
  return FIRST_CC.map((name) => {
    const rows = source.filter((lead) => lead.firstCc === name);
    const outbound = rows.filter((lead) => lead.hasOutbound).length;
    const connected = rows.filter((lead) => lead.connectedText !== "—").length;
    return {
      name,
      assigned: rows.length,
      outbound,
      connected,
      outboundCalls: rows.reduce((sum, lead) => sum + lead.attempts, 0),
      connectedCalls: rows.reduce((sum, lead) => sum + lead.connected, 0),
      outboundRate: rows.length ? outbound / rows.length * 100 : 0,
      connectedRate: rows.length ? connected / rows.length * 100 : 0
    };
  });
}

function renderMonitor() {
  const allRows = monitorRows();
  const completeRows = allRows.filter((lead) => lead.firstCcId);
  const stats = statsFor(completeRows, allRows);
  const productivity = productivityRows();
  content.innerHTML = `<section class="page-enter">
    ${monitorFiltersPanel(completeRows)}
    ${statCards(completeRows, allRows)}
    <div class="monitor-grid">
      <section class="card">
        <div class="card-head"><div><h3>首跟 CC 生产力</h3><p>承接、首次外呼和首次接通按 Lead ID 去重</p></div></div>
        <div class="table-wrap"><table class="agent-table">
          <thead><tr><th>首跟 CC</th><th>首跟承接量 ${metricHelp("assigned")}</th><th>首次外呼线索 ${metricHelp("outboundLeads")}</th><th>首次外呼覆盖率 ${metricHelp("outboundCoverage")}</th><th>首次接通线索 ${metricHelp("connectedLeads")}</th><th>首次接通覆盖率 ${metricHelp("connectedCoverage")}</th><th>外呼次数 ${metricHelp("outboundTotal")}</th><th>接通次数 ${metricHelp("connectedTotal")}</th></tr></thead>
          <tbody>${productivity.map((row) => `<tr data-agent="${esc(row.name)}">
            <td><div class="user-cell"><span class="user-avatar">${initials(row.name)}</span><span class="user-copy"><strong>${esc(row.name)}</strong><span>点击查看明细</span></span></div></td>
            <td><strong>${row.assigned}</strong></td><td>${row.outbound}</td>
            <td class="progress-cell"><div class="progress-row"><div class="progress-track"><div class="progress-fill" style="width:${row.outboundRate}%"></div></div><b>${formatPercent(row.outbound, row.assigned)}</b></div></td>
            <td>${row.connected}</td>
            <td class="progress-cell"><div class="progress-row"><div class="progress-track"><div class="progress-fill" style="width:${row.connectedRate}%"></div></div><b>${formatPercent(row.connected, row.assigned)}</b></div></td>
            <td><strong>${row.outboundCalls}</strong></td>
            <td><strong>${row.connectedCalls}</strong></td>
          </tr>`).join("")}</tbody>
        </table></div>
      </section>
      <div>
        <section class="card">
          <div class="card-head"><div><h3>外呼与接通</h3><p>首次外呼不区分结果，首次接通单独统计</p></div>${tag("外呼链路", "purple")}</div>
          <div class="card-body"><div class="watch-list">
            <div class="watch-item">${metricHelp("outboundCoverage")}<div class="watch-head"><strong>首次外呼线索数</strong><span>${formatPercent(stats.outbound, stats.covered)} 覆盖率</span></div><div class="watch-value">${stats.outbound}</div><p>${stats.outbound} / ${stats.covered}</p></div>
            <div class="watch-item">${metricHelp("connectedCoverage")}<div class="watch-head"><strong>首次接通线索数</strong><span>${formatPercent(stats.connected, stats.covered)} 覆盖率</span></div><div class="watch-value">${stats.connected}</div><p>${stats.connected} / ${stats.covered}</p></div>
          </div></div>
        </section>
      </div>
    </div>
  </section>`;
}

function render() {
  const titles = {
    leads: "销售中心",
    monitor: "团队监控"
  };
  document.querySelector("#page-title").textContent = titles[state.route];
  document.querySelector("#breadcrumb").innerHTML = state.route === "monitor"
    ? "Dino CRM <span>/</span> 销售管理 <span>/</span> 团队监控"
    : "Dino CRM <span>/</span> 销售管理 <span>/</span> 销售中心";
  document.querySelectorAll(".nav-item").forEach((item) => item.classList.toggle("is-active", item.dataset.route === state.route));
  if (state.route === "monitor") renderMonitor();
  else renderLeads();
}

function navigate(route) {
  state.route = route;
  if (location.hash !== `#/${route}`) location.hash = `#/${route}`;
  else render();
  document.querySelector("#sidebar").classList.remove("is-open");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function readFilters() {
  return {
    query: document.querySelector("#filter-query").value.trim(),
    businessLine: document.querySelector("#filter-business-line").value,
    intent: document.querySelector("#filter-intent").value,
    firstCc: document.querySelector("#filter-first-cc").value,
    currentCc: document.querySelector("#filter-current-cc").value,
    stage: document.querySelector("#filter-stage").value,
    age: document.querySelector("#filter-age").value,
    course: document.querySelector("#filter-course").value,
    sourceLanding: document.querySelector("#filter-source-landing").value,
    sourceApp: document.querySelector("#filter-source-app").value,
    userStatus: document.querySelector("#filter-user-status").value,
    consultAppointment: document.querySelector("#filter-consult-appointment").value,
    appointmentOutbound: document.querySelector("#filter-appointment-outbound").value,
    outbound: document.querySelector("#filter-outbound").value,
    connected: document.querySelector("#filter-connected").value,
    outboundMin: document.querySelector("#filter-outbound-min").value,
    outboundMax: document.querySelector("#filter-outbound-max").value,
    connectedMin: document.querySelector("#filter-connected-min").value,
    connectedMax: document.querySelector("#filter-connected-max").value,
    dateField: document.querySelector("#filter-date-field").value,
    from: document.querySelector("#filter-from").value,
    to: document.querySelector("#filter-to").value
  };
}

function readMonitorFilters() {
  return {
    businessLine: document.querySelector("#monitor-business-line").value,
    firstCc: document.querySelector("#monitor-first-cc").value,
    dateField: document.querySelector("#monitor-date-field").value,
    from: document.querySelector("#monitor-from").value,
    to: document.querySelector("#monitor-to").value
  };
}

function applyMonitorFilters() {
  const next = readMonitorFilters();
  if (next.from && next.to && next.from > next.to) {
    notify("开始日期不能晚于结束日期");
    return;
  }
  state.filters = { ...state.filters, ...next };
  render();
  notify(`团队监控已更新，共 ${periodRows().length} 条汇总数据`);
}

function resetMonitorFilters() {
  state.filters = {
    ...state.filters,
    businessLine: "all",
    firstCc: "all",
    dateField: "registration",
    from: "",
    to: ""
  };
  render();
  notify("团队监控筛选已重置");
}

function applyFilters() {
  const next = readFilters();
  if (next.from && next.to && next.from > next.to) {
    notify("开始日期不能晚于结束日期");
    return;
  }
  const ranges = [
    ["外呼次数", next.outboundMin, next.outboundMax],
    ["外呼接通次数", next.connectedMin, next.connectedMax]
  ];
  for (const [label, minimum, maximum] of ranges) {
    if ((minimum !== "" && (!Number.isInteger(Number(minimum)) || Number(minimum) < 0))
      || (maximum !== "" && (!Number.isInteger(Number(maximum)) || Number(maximum) < 0))) {
      notify(`${label}必须填写大于等于 0 的整数`);
      return;
    }
    if (minimum !== "" && maximum !== "" && Number(minimum) > Number(maximum)) {
      notify(`${label}下限不能高于上限`);
      return;
    }
  }
  state.filters = next;
  state.page = 1;
  render();
  notify(`已应用筛选，共 ${filteredRows().length} 条结果`);
}

function resetFilters() {
  state.filters = {
    query: "", businessLine: "all", intent: "all", firstCc: "all", currentCc: "all",
    stage: "all", age: "all", course: "all", sourceLanding: "all", sourceApp: "all",
    userStatus: "all", consultAppointment: "all", appointmentOutbound: "all",
    outbound: "all", connected: "all", outboundMin: "", outboundMax: "", connectedMin: "", connectedMax: "",
    dateField: "registration", from: "", to: ""
  };
  state.page = 1;
  render();
  notify("筛选条件已重置");
}

function notify(message) {
  toast.textContent = message;
  toast.classList.add("is-visible");
  clearTimeout(notify.timer);
  notify.timer = setTimeout(() => toast.classList.remove("is-visible"), 2400);
}

function openDrawer(lead) {
  const firstLine = lead.firstCc
    ? `<li class="timeline-item first"><span class="timeline-dot"></span><strong>首次分配给 ${esc(lead.firstCc)}</strong><span>${esc(lead.assignedText)} · 写入首跟 CC 与分配历史</span></li>`
    : `<li class="timeline-item first"><span class="timeline-dot"></span><strong>历史归属无法确认</strong><span>缺少可验证分配事件 · 不使用当前负责人倒推</span></li>`;
  const outboundLine = lead.hasOutbound
    ? `<li class="timeline-item"><span class="timeline-dot"></span><strong>首次外呼</strong><span>${esc(lead.outboundText)} · 不区分本次外呼结果</span></li>`
    : `<li class="timeline-item"><span class="timeline-dot"></span><strong>尚未产生首次外呼</strong><span>首次外呼时间保持为空</span></li>`;
  const connectedLine = lead.connectedText !== "—"
    ? `<li class="timeline-item"><span class="timeline-dot"></span><strong>首次接通</strong><span>${esc(lead.connectedText)} · 首次接通独立记录</span></li>`
    : `<li class="timeline-item"><span class="timeline-dot"></span><strong>尚未产生首次接通</strong><span>首次接通时间保持为空</span></li>`;
  const transferLine = !lead.firstCcId
    ? `<li class="timeline-item"><span class="timeline-dot"></span><strong>当前负责人为 ${esc(lead.currentCc)}</strong><span>首跟 CC 历史未知</span></li>`
    : !lead.currentCcId
      ? `<li class="timeline-item"><span class="timeline-dot"></span><strong>当前未分配</strong><span>${esc(lead.currentAssignedText)}</span></li>`
      : `<li class="timeline-item ${lead.currentTeam === "TMK" ? "tmk" : ""}"><span class="timeline-dot"></span><strong>当前负责人为 ${esc(lead.currentCc)}</strong><span>${esc(lead.currentAssignedText)}</span></li>`;
  drawer.innerHTML = `<div class="drawer-head"><div><small>${esc(lead.id)}</small><h3>${esc(lead.name)}</h3></div><button class="icon-btn" data-action="close-drawer" aria-label="关闭">${icon("close")}</button></div>
    <div class="drawer-body">
      <div class="drawer-block"><h4>首跟节点与关键时间</h4><dl class="facts">
        <dt>业务线</dt><dd>${esc(businessLineLabel(lead.businessLine))}</dd>
        <dt>首跟 CC</dt><dd>${lead.firstCc ? esc(lead.firstCc) : "历史未知"}</dd>
        <dt>首次分配</dt><dd>${esc(lead.assignedText)}</dd>
        <dt>首次外呼</dt><dd>${esc(lead.outboundText)}</dd>
        <dt>首次接通</dt><dd>${esc(lead.connectedText)}</dd>
        <dt>当前 CC</dt><dd>${esc(lead.currentCc)}</dd>
      </dl></div>
      <div class="drawer-block"><h4>Lead &gt; Update 分配历史</h4><ol class="timeline">${firstLine}${outboundLine}${connectedLine}${transferLine}</ol></div>
      <div class="drawer-block"><div class="drawer-note"><strong>事实字段不可编辑。</strong> 首跟 CC 只在第一次成功分配时写入；可直接比较当前 CC 与首跟 CC。</div></div>
      <div class="drawer-block"><h4>当前跟进</h4><dl class="facts">
        <dt>销售阶段</dt><dd>${esc(lead.stage)}</dd>
        <dt>外呼次数</dt><dd>${lead.attempts} 次</dd>
        <dt>外呼接通次数</dt><dd>${lead.connected} 次</dd>
        <dt>最近结果</dt><dd>${esc(lead.outcome)}</dd>
      </dl></div>
    </div>`;
  drawerLayer.classList.add("is-open");
  drawerLayer.setAttribute("aria-hidden", "false");
}

function closeDrawer() {
  drawerLayer.classList.remove("is-open");
  drawerLayer.setAttribute("aria-hidden", "true");
}

function openExport(sourceRows = filteredRows(), scope = "线索筛选") {
  const rows = sourceRows;
  state.exportRows = rows;
  if (!rows.length) {
    notify("当前筛选没有可导出的数据");
    return;
  }
  const dateValues = rows.map((row) => state.filters.dateField === "assigned" ? row.assignedDate : row.registrationDate).filter(Boolean).sort();
  const firstDate = dateValues[0] || "不限";
  const lastDate = dateValues.at(-1) || "不限";
  exportModal.innerHTML = `<div class="modal-head"><div><h3 id="export-title">下载当前筛选数据</h3><p>来源：${esc(scope)}。预览确认后生成 CSV，内容与当前筛选口径一致。</p></div><button class="icon-btn" data-action="close-export" aria-label="关闭">${icon("close")}</button></div>
    <div class="modal-body">
      <div class="export-summary"><div class="export-metric"><span>数据行数</span><strong>${rows.length}</strong></div><div class="export-metric"><span>${dateFieldLabel(state.filters.dateField)}范围</span><strong style="font-size:13px">${firstDate} 至 ${lastDate}</strong></div><div class="export-metric"><span>时间口径</span><strong style="font-size:13px">按业务线时区</strong></div></div>
      <div class="field-list">${["lead_id", "user_id", "business_line", "first_cc_id", "first_cc_name", "first_assigned_at", "first_outbound_at", "first_connected_at", "outbound_count", "outbound_connected_count", "current_cc_id"].map((field) => `<code>${field}</code>`).join("")}</div>
      <div class="drawer-note" style="margin-top:12px">下载会记录操作人、筛选条件、数据范围和行数。联系方式与录音字段继续遵循现有导出权限，不在本需求中扩大。</div>
    </div>
    <div class="modal-foot"><button class="btn" data-action="close-export">取消</button><button class="btn btn-primary" data-action="download-csv">${icon("download")} 生成 CSV</button></div>`;
  exportLayer.classList.add("is-open");
  exportLayer.setAttribute("aria-hidden", "false");
}

function closeExport() {
  exportLayer.classList.remove("is-open");
  exportLayer.setAttribute("aria-hidden", "true");
}

function csvCell(value) {
  return `"${String(value ?? "").replaceAll('"', '""')}"`;
}

function downloadCSV() {
  const rows = state.exportRows?.length ? state.exportRows : filteredRows();
  const header = ["lead_id", "user_id", "business_line", "first_cc_id", "first_cc_name", "first_assigned_at", "first_outbound_at", "first_connected_at", "outbound_count", "outbound_connected_count", "current_cc_id"];
  const body = rows.map((row) => [
    row.id, row.userId, row.businessLine, row.firstCcId, row.firstCc, row.assignedText,
    row.outboundText === "—" ? "" : row.outboundText,
    row.connectedText === "—" ? "" : row.connectedText,
    row.attempts,
    row.connected,
    row.currentCcId
  ].map(csvCell).join(","));
  const blob = new Blob(["\ufeff" + [header.map(csvCell).join(","), ...body].join("\n")], { type: "text/csv;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `first-contact-${new Date().toISOString().slice(0, 10)}.csv`;
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
  closeExport();
  notify(`已生成 ${rows.length} 行 CSV，并记录导出审计`);
}

document.addEventListener("click", (event) => {
  const metric = event.target.closest("[data-metric-help]");
  if (metric) {
    event.stopPropagation();
    notify(metric.dataset.metricHelp);
    return;
  }
  const route = event.target.closest("[data-route]");
  if (route) {
    if (route.tagName === "BUTTON") event.preventDefault();
    navigate(route.dataset.route);
    return;
  }
  const tab = event.target.closest("[data-tab]");
  if (tab) {
    state.tab = tab.dataset.tab;
    state.page = 1;
    render();
    return;
  }
  const monitorStat = event.target.closest("[data-monitor-stat]");
  if (monitorStat) {
    state.tab = "following";
    state.page = 1;
    if (monitorStat.dataset.monitorStat === "outbound") state.filters.outbound = "has";
    else if (monitorStat.dataset.monitorStat === "connected") state.filters.connected = "yes";
    else {
      state.filters.outbound = "all";
      state.filters.connected = "all";
    }
    navigate("leads");
    notify("已下钻到同口径线索明细");
    return;
  }
  const leadRow = event.target.closest("[data-lead]");
  if (leadRow) {
    const lead = LEADS.find((item) => item.id === leadRow.dataset.lead);
    if (lead) openDrawer(lead);
    return;
  }
  const agent = event.target.closest("[data-agent]");
  if (agent) {
    state.filters = { ...state.filters, firstCc: agent.dataset.agent, query: "" };
    state.tab = "following";
    state.page = 1;
    navigate("leads");
    notify(`已下钻到首跟 CC：${agent.dataset.agent}`);
    return;
  }
  const page = event.target.closest("[data-page]");
  if (page) {
    const pages = Math.max(1, Math.ceil(filteredRows().length / PAGE_SIZE));
    state.page = Math.max(1, Math.min(pages, Number(page.dataset.page)));
    render();
    const tableTop = document.querySelector(".table-card")?.getBoundingClientRect().top ?? 0;
    window.scrollBy({ top: tableTop - 80, behavior: "smooth" });
    return;
  }
  const action = event.target.closest("[data-action]")?.dataset.action;
  if (!action) return;
  if (action === "apply-filters") applyFilters();
  if (action === "reset-filters") resetFilters();
  if (action === "apply-monitor-filters") applyMonitorFilters();
  if (action === "reset-monitor-filters") resetMonitorFilters();
  if (action === "close-drawer") closeDrawer();
  if (action === "open-export") openExport();
  if (action === "monitor-export") openExport(periodRows(), "团队监控");
  if (action === "close-export") closeExport();
  if (action === "download-csv") downloadCSV();
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Enter" && event.target.id === "filter-query") applyFilters();
  if (event.key === "Escape") {
    closeDrawer();
    closeExport();
    document.querySelector("#sidebar").classList.remove("is-open");
  }
});

document.querySelector("#menu-toggle").addEventListener("click", () => {
  document.querySelector("#sidebar").classList.toggle("is-open");
});

window.addEventListener("hashchange", () => {
  state.route = routeFromHash();
  closeDrawer();
  closeExport();
  render();
  window.scrollTo({ top: 0, behavior: "smooth" });
});

render();
