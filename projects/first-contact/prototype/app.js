const LEADS = [
  {
    id: "LD-261109-1048", userId: "2119933744832167937", name: "Nguyễn Minh Anh", businessLine: "Vietnam",
    firstCc: "Linh Pham", firstCcId: "cc_vn_1024", firstCcEmail: "linh.pham@dino.ai",
    currentCc: "Minh Tran", currentCcId: "tmk_vn_021", currentTeam: "TMK",
    assignedText: "2026-11-09 09:12 (+07)", outboundText: "2026-11-09 09:18 (+07)", connectedText: "2026-11-09 09:26 (+07)",
    assignedDate: "2026-11-09", currentAssignedText: "2026-11-09 17:42 (+07)",
    hasOutbound: true, history: "complete", stage: "电话营销跟进中",
    attempts: 4, connected: 2, outcome: "有意向", view: "following", stopped: false
  },
  {
    id: "LD-261109-1051", userId: "211993114542575618", name: "Bảo Lê", businessLine: "Thailand",
    firstCc: "Linh Pham", firstCcId: "cc_vn_1024", firstCcEmail: "linh.pham@dino.ai",
    currentCc: "Minh Tran", currentCcId: "tmk_vn_021", currentTeam: "TMK",
    assignedText: "2026-11-09 09:28 (+07)", outboundText: "2026-11-09 10:04 (+07)", connectedText: "2026-11-09 10:10 (+07)",
    assignedDate: "2026-11-09", currentAssignedText: "2026-11-09 18:03 (+07)",
    hasOutbound: true, history: "complete", stage: "电话营销跟进中",
    attempts: 3, connected: 1, outcome: "未填写", view: "following", stopped: false
  },
  {
    id: "LD-261109-1067", userId: "211993582872029762", name: "Chi Phạm", businessLine: "Malaysia",
    firstCc: "Linh Pham", firstCcId: "cc_vn_1024", firstCcEmail: "linh.pham@dino.ai",
    currentCc: "Linh Pham", currentCcId: "cc_vn_1024", currentTeam: "CC",
    assignedText: "2026-11-09 11:05 (+07)", outboundText: "—", connectedText: "—",
    assignedDate: "2026-11-09", currentAssignedText: "2026-11-09 11:05 (+07)",
    hasOutbound: false, history: "complete", stage: "首次跟进",
    attempts: 0, connected: 0, outcome: "未填写", view: "following", stopped: false
  },
  {
    id: "LD-261108-0934", userId: "211993414302876441", name: "Dung Trần", businessLine: "Vietnam",
    firstCc: "Mai Nguyen", firstCcId: "cc_vn_1031", firstCcEmail: "mai.nguyen@dino.ai",
    currentCc: "Minh Tran", currentCcId: "tmk_vn_021", currentTeam: "TMK",
    assignedText: "2026-11-08 14:22 (+07)", outboundText: "2026-11-08 14:31 (+07)", connectedText: "2026-11-08 14:40 (+07)",
    assignedDate: "2026-11-08", currentAssignedText: "2026-11-09 09:14 (+07)",
    hasOutbound: true, history: "complete", stage: "电话营销已接通",
    attempts: 5, connected: 3, outcome: "已预约", view: "following", stopped: false
  },
  {
    id: "LD-261108-0948", userId: "211993778120431105", name: "Giang Võ", businessLine: "Thailand",
    firstCc: "Mai Nguyen", firstCcId: "cc_vn_1031", firstCcEmail: "mai.nguyen@dino.ai",
    currentCc: "Hà Nguyễn", currentCcId: "cc_vn_1042", currentTeam: "CC",
    assignedText: "2026-11-08 16:08 (+07)", outboundText: "2026-11-08 16:16 (+07)", connectedText: "—",
    assignedDate: "2026-11-08", currentAssignedText: "2026-11-09 10:20 (+07)",
    hasOutbound: true, history: "complete", stage: "销售跟进中",
    attempts: 2, connected: 0, outcome: "无人接听", view: "following", stopped: false
  },
  {
    id: "LD-261110-1122", userId: "211993011548763924", name: "Hạnh Đỗ", businessLine: "Vietnam",
    firstCc: "Quyen Do", firstCcId: "cc_vn_1039", firstCcEmail: "quyen.do@dino.ai",
    currentCc: "Minh Tran", currentCcId: "tmk_vn_021", currentTeam: "TMK",
    assignedText: "2026-11-10 08:11 (+07)", outboundText: "2026-11-10 08:19 (+07)", connectedText: "2026-11-10 08:22 (+07)",
    assignedDate: "2026-11-10", currentAssignedText: "2026-11-10 08:25 (+07)",
    hasOutbound: true, history: "complete", stage: "电话营销待跟进",
    attempts: 1, connected: 1, outcome: "未填写", view: "following", stopped: false
  },
  {
    id: "LD-261110-1140", userId: "211993723590118302", name: "Khanh Lâm", businessLine: "Malaysia",
    firstCc: "Quyen Do", firstCcId: "cc_vn_1039", firstCcEmail: "quyen.do@dino.ai",
    currentCc: "Quyen Do", currentCcId: "cc_vn_1039", currentTeam: "CC",
    assignedText: "2026-11-10 09:47 (+08)", outboundText: "—", connectedText: "—",
    assignedDate: "2026-11-10", currentAssignedText: "2026-11-10 09:47 (+08)",
    hasOutbound: false, history: "complete", stage: "首次跟进",
    attempts: 0, connected: 0, outcome: "未填写", view: "following", stopped: false
  },
  {
    id: "LD-260918-0502", userId: "211993665881039421", name: "Tú Phan", businessLine: "Thailand",
    firstCc: null, firstCcId: null, firstCcEmail: null,
    currentCc: "Bảo Trân", currentCcId: "cc_vn_1051", currentTeam: "CC",
    assignedText: "—", outboundText: "2026-09-18 10:32 (+07)", connectedText: "2026-09-18 10:36 (+07)",
    assignedDate: "", currentAssignedText: "历史未知",
    hasOutbound: true, history: "missing", stage: "电话营销已接通",
    attempts: 2, connected: 1, outcome: "未填写", view: "following", stopped: false
  },
  {
    id: "LD-260907-0471", userId: "211993090470273734", name: "Minh Châu", businessLine: "Vietnam",
    firstCc: "An Vo", firstCcId: "cc_vn_1006", firstCcEmail: "an.vo@dino.ai",
    currentCc: "Bảo Trân", currentCcId: "cc_vn_1051", currentTeam: "CC",
    assignedText: "2026-09-07 10:02 (+07)", outboundText: "2026-09-07 10:20 (+07)", connectedText: "2026-09-07 10:25 (+07)",
    assignedDate: "2026-09-07", currentAssignedText: "2026-09-08 08:54 (+07)",
    hasOutbound: true, history: "complete", stage: "续费跟进",
    attempts: 6, connected: 4, outcome: "已付费", view: "paid", stopped: true
  },
  {
    id: "LD-261012-0619", userId: "211993690918140527", name: "Nam Hoàng", businessLine: "Thailand",
    firstCc: "Linh Pham", firstCcId: "cc_vn_1024", firstCcEmail: "linh.pham@dino.ai",
    currentCc: "Minh Tran", currentCcId: "tmk_vn_021", currentTeam: "TMK",
    assignedText: "2026-10-12 13:26 (+07)", outboundText: "2026-10-12 13:40 (+07)", connectedText: "2026-10-12 13:48 (+07)",
    assignedDate: "2026-10-12", currentAssignedText: "2026-10-13 09:03 (+07)",
    hasOutbound: true, history: "complete", stage: "续费跟进",
    attempts: 8, connected: 5, outcome: "已付费", view: "paid", stopped: false
  },
  {
    id: "LD-261020-0752", userId: "211993207845610980", name: "Oanh Nguyễn", businessLine: "Malaysia",
    firstCc: "Mai Nguyen", firstCcId: "cc_vn_1031", firstCcEmail: "mai.nguyen@dino.ai",
    currentCc: "Mai Nguyen", currentCcId: "cc_vn_1031", currentTeam: "CC",
    assignedText: "2026-10-20 15:16 (+08)", outboundText: "2026-10-20 15:24 (+08)", connectedText: "2026-10-20 15:29 (+08)",
    assignedDate: "2026-10-20", currentAssignedText: "2026-10-20 15:16 (+08)",
    hasOutbound: true, history: "complete", stage: "续费跟进",
    attempts: 3, connected: 2, outcome: "已付费", view: "paid", stopped: false
  },
  {
    id: "LD-260903-0428", userId: "211993519107422668", name: "Phú Nguyễn", businessLine: "Thailand",
    firstCc: null, firstCcId: null, firstCcEmail: null,
    currentCc: "Bảo Trân", currentCcId: "cc_vn_1051", currentTeam: "CC",
    assignedText: "—", outboundText: "2026-09-03 11:18 (+07)", connectedText: "—",
    assignedDate: "", currentAssignedText: "历史未知",
    hasOutbound: true, history: "missing", stage: "电话营销跟进中",
    attempts: 2, connected: 1, outcome: "已付费", view: "paid", stopped: false
  },
  {
    id: "LD-261110-1168", userId: "211993880651174930", name: "Quyên Lý", businessLine: "Vietnam",
    firstCc: "Linh Pham", firstCcId: "cc_vn_1024", firstCcEmail: "linh.pham@dino.ai",
    currentCc: "未分配", currentCcId: null, currentTeam: "POOL",
    assignedText: "2026-11-10 10:11 (+07)", outboundText: "2026-11-10 10:15 (+07)", connectedText: "—",
    assignedDate: "2026-11-10", currentAssignedText: "2026-11-10 11:03 (+07)",
    hasOutbound: true, history: "complete", stage: "已退回公海",
    attempts: 1, connected: 0, outcome: "无人接听", view: "pool", stopped: false
  },
  {
    id: "LD-260922-0563", userId: "211993440781025116", name: "Sơn Đặng", businessLine: "Malaysia",
    firstCc: null, firstCcId: null, firstCcEmail: null,
    currentCc: "未分配", currentCcId: null, currentTeam: "POOL",
    assignedText: "—", outboundText: "—", connectedText: "—",
    assignedDate: "", currentAssignedText: "历史未知",
    hasOutbound: false, history: "missing", stage: "待领取",
    attempts: 0, connected: 0, outcome: "未填写", view: "pool", stopped: false
  }
];

const FIRST_CC = ["Linh Pham", "Mai Nguyen", "Quyen Do", "An Vo"];
const CURRENT_CC = ["Minh Tran", "Linh Pham", "Hà Nguyễn", "Quyen Do", "Bảo Trân", "Mai Nguyen", "未分配"];
const BUSINESS_LINES = ["Vietnam", "Thailand", "Malaysia"];
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
  filters: {
    query: "",
    businessLine: "all",
    firstCc: "all",
    currentCc: "all",
    outbound: "all",
    connected: "all",
    history: "all",
    from: "2026-11-01",
    to: "2026-11-10"
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

function historyTag(value) {
  return value === "complete" ? tag("完整", "success") : tag("历史未知", "danger");
}

function businessLineLabel(value) {
  return value === "Vietnam" ? "越南" : value === "Thailand" ? "泰国" : value === "Malaysia" ? "马来西亚" : value;
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
    if (f.firstCc !== "all" && lead.firstCc !== f.firstCc) return false;
    if (f.currentCc !== "all" && lead.currentCc !== f.currentCc) return false;
    if (f.outbound === "has" && !lead.hasOutbound) return false;
    if (f.outbound === "none" && lead.hasOutbound) return false;
    if (f.outbound === "unknown" && lead.history !== "missing") return false;
    if (f.connected === "yes" && lead.connectedText === "—") return false;
    if (f.connected === "no" && lead.connectedText !== "—") return false;
    if (f.connected === "unknown" && lead.history !== "missing") return false;
    if (f.history !== "all" && lead.history !== f.history) return false;
    if (f.from && lead.assignedDate && lead.assignedDate < f.from) return false;
    if (f.to && lead.assignedDate && lead.assignedDate > f.to) return false;
    return true;
  });
}

function statsFor(rows) {
  const covered = rows.filter((row) => row.history === "complete").length;
  const outbound = rows.filter((row) => row.hasOutbound).length;
  const connected = rows.filter((row) => row.connectedText !== "—").length;
  const changed = rows.filter((row) => row.firstCcId && row.currentCcId && row.currentCcId !== row.firstCcId).length;
  return {
    total: rows.length,
    covered,
    coverage: rows.length ? Math.round((covered / rows.length) * 100) : 0,
    outbound,
    connected,
    changed,
    missing: rows.length - covered
  };
}

function statCards(rows) {
  const stats = statsFor(rows);
  return `<div class="stat-grid">
    <article class="stat-card"><span class="stat-label">当前筛选线索</span><strong>${stats.total}</strong><small>按 Lead ID 去重</small><span class="stat-icon">${icon("list")}</span></article>
    <article class="stat-card is-success"><span class="stat-label">首位 CC 覆盖率</span><strong>${stats.coverage}%</strong><small>${stats.covered} / ${stats.total} 可确认</small><span class="stat-icon">${icon("check")}</span></article>
    <article class="stat-card is-warning"><span class="stat-label">已有首次外呼</span><strong>${stats.outbound}</strong><small>不区分外呼状态</small><span class="stat-icon">${icon("phone")}</span></article>
    <article class="stat-card is-purple"><span class="stat-label">已有首次接通</span><strong>${stats.connected}</strong><small>与首次外呼时间独立记录</small><span class="stat-icon">${icon("arrow")}</span></article>
  </div>`;
}

function selectOptions(items, selected, allLabel) {
  return [`<option value="all">${esc(allLabel)}</option>`]
    .concat(items.map((item) => `<option value="${esc(item)}" ${item === selected ? "selected" : ""}>${esc(item)}</option>`))
    .join("");
}

function filtersPanel(rows) {
  const f = state.filters;
  return `<section class="filter-card">
    <div class="filter-grid">
      <label class="field"><span class="field-label">搜索线索</span><span class="search-box">${icon("search")}<input class="input" id="filter-query" value="${esc(f.query)}" placeholder="Lead ID / User ID / 姓名"></span></label>
      <label class="field"><span class="field-label">业务线</span><select class="select" id="filter-business-line">${selectOptions(BUSINESS_LINES, f.businessLine, "全部业务线")}</select></label>
      <label class="field"><span class="field-label">首位 CC</span><select class="select" id="filter-first-cc">${selectOptions(FIRST_CC, f.firstCc, "全部首位 CC")}</select></label>
      <label class="field"><span class="field-label">当前 CC</span><select class="select" id="filter-current-cc">${selectOptions(CURRENT_CC, f.currentCc, "全部当前 CC")}</select></label>
      <label class="field"><span class="field-label">首次外呼状态</span><select class="select" id="filter-outbound">
        <option value="all">全部状态</option><option value="has" ${f.outbound === "has" ? "selected" : ""}>有外呼记录</option>
        <option value="none" ${f.outbound === "none" ? "selected" : ""}>无外呼记录</option>
        <option value="unknown" ${f.outbound === "unknown" ? "selected" : ""}>历史未知</option>
      </select></label>
    </div>
    <div class="filter-grid second">
      <label class="field"><span class="field-label">首次接通状态</span><select class="select" id="filter-connected">
        <option value="all">全部状态</option><option value="yes" ${f.connected === "yes" ? "selected" : ""}>已接通</option>
        <option value="no" ${f.connected === "no" ? "selected" : ""}>未接通</option>
        <option value="unknown" ${f.connected === "unknown" ? "selected" : ""}>历史未知</option>
      </select></label>
      <label class="field"><span class="field-label">历史完整度</span><select class="select" id="filter-history">
        <option value="all">全部记录</option><option value="complete" ${f.history === "complete" ? "selected" : ""}>完整</option>
        <option value="missing" ${f.history === "missing" ? "selected" : ""}>历史缺失</option>
      </select></label>
      <label class="field"><span class="field-label">首次分配日期（起）</span><input class="input" type="date" id="filter-from" value="${esc(f.from)}"></label>
      <label class="field"><span class="field-label">首次分配日期（止）</span><input class="input" type="date" id="filter-to" value="${esc(f.to)}"></label>
      <div class="field"><span class="field-label">当前视图</span><button class="btn" style="width:100%" disabled>${state.tab === "following" ? "我的跟进" : state.tab === "paid" ? "已付费" : "公海"}</button></div>
    </div>
    <div class="filter-actions">
      <button class="btn btn-primary" data-action="apply-filters">${icon("filter")} 应用筛选</button>
      <button class="btn" data-action="reset-filters">重置筛选</button>
      <span class="filter-count">当前视图 ${rows.length} 条结果</span>
    </div>
  </section>`;
}

function activeFilterChips() {
  const f = state.filters;
  const chips = [];
  if (f.query) chips.push(`关键词：${f.query}`);
  if (f.businessLine !== "all") chips.push(`业务线：${businessLineLabel(f.businessLine)}`);
  if (f.firstCc !== "all") chips.push(`首位 CC：${f.firstCc}`);
  if (f.currentCc !== "all") chips.push(`当前 CC：${f.currentCc}`);
  if (f.outbound !== "all") chips.push(`首次外呼：${f.outbound === "has" ? "有记录" : f.outbound === "none" ? "无记录" : "历史未知"}`);
  if (f.connected !== "all") chips.push(`首次接通：${f.connected === "yes" ? "已接通" : f.connected === "no" ? "未接通" : "历史未知"}`);
  if (f.history !== "all") chips.push(`历史：${f.history === "complete" ? "完整" : "缺失"}`);
  return chips.map((text) => `<span class="filter-chip">${esc(text)}</span>`).join("");
}

function leadRows(rows) {
  if (!rows.length) {
    return `<tr><td colspan="8"><div class="empty-state"><strong>当前筛选下没有线索</strong><p>调整业务线、首位 CC、外呼状态或日期范围后重试。</p></div></td></tr>`;
  }
  return rows.map((lead) => {
    const firstUser = lead.firstCc
      ? `<div class="user-cell"><span class="user-avatar">${initials(lead.firstCc)}</span><span class="user-copy"><strong>${esc(lead.firstCc)}${lead.stopped ? ` ${tag("已停用", "neutral")}` : ""}</strong><span>${esc(lead.firstCcEmail)}</span></span></div><span class="preserved">首次分配后不变</span>`
      : `<div class="user-cell"><span class="user-avatar missing">?</span><span class="user-copy"><strong>历史未知</strong><span>无可确认分配事件</span></span></div>`;
    const sameOwner = lead.firstCcId && lead.currentCcId === lead.firstCcId;
    const ownerState = !lead.currentCcId ? "当前未分配" : sameOwner ? "与首位 CC 相同" : "当前 CC 已发生变化";
    const currentUser = `<div class="user-cell"><span class="user-avatar ${lead.currentTeam === "TMK" ? "tmk" : "missing"}">${initials(lead.currentCc)}</span><span class="user-copy"><strong>${esc(lead.currentCc)}</strong><span>${ownerState}</span></span></div>`;
    return `<tr data-lead="${lead.id}">
      <td><span class="cell-title">${esc(lead.name)}</span><span class="cell-sub">${esc(businessLineLabel(lead.businessLine))} · <span class="mono">${esc(lead.id)}</span></span><span class="cell-sub">${esc(lead.userId)}</span></td>
      <td class="is-first">${firstUser}</td>
      <td>${lead.assignedText === "—" ? '<span class="empty-time">—</span>' : esc(lead.assignedText)}</td>
      <td>${lead.outboundText === "—" ? '<span class="empty-time">—</span>' : esc(lead.outboundText)}</td>
      <td>${lead.connectedText === "—" ? '<span class="empty-time">—</span>' : esc(lead.connectedText)}</td>
      <td>${currentUser}</td>
      <td><span class="cell-title">${esc(lead.stage)}</span><span class="cell-sub">外呼 ${lead.attempts} 次</span></td>
      <td>${historyTag(lead.history)}</td>
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
    ${statCards(rows)}
    <div class="view-tabs" role="tablist" aria-label="销售中心页签">
      <button class="view-tab ${state.tab === "pool" ? "is-active" : ""}" data-tab="pool">公海 <em>${VIEW_COUNTS.pool}</em></button>
      <button class="view-tab ${state.tab === "following" ? "is-active" : ""}" data-tab="following">我的跟进 <em>${VIEW_COUNTS.following}</em></button>
      <button class="view-tab ${state.tab === "paid" ? "is-active" : ""}" data-tab="paid">已付费 <em>${VIEW_COUNTS.paid}</em></button>
    </div>
    ${filtersPanel(rows)}
    <section class="table-card">
      <div class="table-toolbar">
        <div><strong>线索明细</strong><p>点击任一行查看完整分配历史</p></div>
        <div class="spacer"></div>
        <div class="active-filters">${activeFilterChips()}</div>
        <button class="btn btn-small" data-action="open-export" ${rows.length ? "" : "disabled"}>${icon("download")} 预览并下载</button>
      </div>
      <div class="table-wrap"><table class="data-table">
        <thead><tr><th>线索 / 用户</th><th class="is-first">首位 CC</th><th>首次分配时间</th><th>首次外呼时间</th><th>首次接通时间</th><th>当前 CC</th><th>跟进阶段</th><th>历史完整度</th></tr></thead>
        <tbody>${leadRows(pageRows)}</tbody>
      </table></div>
      <div class="table-footer"><span>显示 ${rows.length ? start + 1 : 0}–${Math.min(start + PAGE_SIZE, rows.length)} / ${rows.length} 条 · 下载使用完整筛选范围</span>${pageButtons(rows.length)}</div>
    </section>
  </section>`;
}

function periodRows() {
  return LEADS.filter((lead) => (
    lead.history === "complete" && lead.assignedDate >= "2026-11-01" && lead.assignedDate <= "2026-11-10"
  ));
}

function productivityRows() {
  const source = periodRows().filter((lead) => lead.firstCc);
  return FIRST_CC.map((name) => {
    const rows = source.filter((lead) => lead.firstCc === name);
    const outbound = rows.filter((lead) => lead.hasOutbound).length;
    const connected = rows.filter((lead) => lead.connectedText !== "—").length;
    const changed = rows.filter((lead) => lead.currentCcId && lead.currentCcId !== lead.firstCcId).length;
    return {
      name,
      assigned: rows.length,
      outbound,
      connected,
      changed,
      outboundRate: rows.length ? Math.round((outbound / rows.length) * 100) : 0
    };
  });
}

function renderMonitor() {
  const completeRows = periodRows();
  const stats = statsFor(completeRows);
  const productivity = productivityRows();
  const connectedRate = stats.total ? Math.round((stats.connected / stats.total) * 100) : 0;
  content.innerHTML = `<section class="page-enter">
    ${statCards(completeRows)}
    <div class="monitor-grid">
      <section class="card">
        <div class="card-head"><div><h3>首位 CC 生产力</h3><p>首次分配、首次外呼和首次接通按 Lead ID 去重</p></div></div>
        <div class="table-wrap"><table class="agent-table">
          <thead><tr><th>首位 CC</th><th>首次分配</th><th>首次外呼</th><th>外呼覆盖率</th><th>首次接通</th><th>负责人变化</th></tr></thead>
          <tbody>${productivity.map((row) => `<tr data-agent="${esc(row.name)}">
            <td><div class="user-cell"><span class="user-avatar">${initials(row.name)}</span><span class="user-copy"><strong>${esc(row.name)}</strong><span>点击查看明细</span></span></div></td>
            <td><strong>${row.assigned}</strong></td><td>${row.outbound}</td>
            <td class="progress-cell"><div class="progress-row"><div class="progress-track"><div class="progress-fill" style="width:${row.outboundRate}%"></div></div><b>${row.outboundRate}%</b></div></td>
            <td>${row.connected}</td><td>${row.changed}</td>
          </tr>`).join("")}</tbody>
        </table></div>
      </section>
      <div>
        <section class="card">
          <div class="card-head"><div><h3>外呼与接通</h3><p>首次外呼不区分结果，首次接通单独统计</p></div>${tag("外呼链路", "purple")}</div>
          <div class="card-body"><div class="watch-list">
            <div class="watch-item"><div class="watch-head"><strong>首次外呼</strong><span>不区分外呼状态</span></div><div class="watch-value">${stats.outbound}</div><p>该数字包含未接通、拒接、无人接听等外呼记录</p></div>
            <div class="watch-item"><div class="watch-head"><strong>首次接通</strong><span>${connectedRate}% 覆盖率</span></div><div class="watch-value">${stats.connected}</div><p>只统计首次产生接通记录的线索</p></div>
          </div></div>
        </section>
        <section class="card">
          <div class="card-head"><div><h3>负责人变化</h3><p>直接比较两个负责人字段</p></div>${tag("派生判断", "info")}</div>
          <div class="card-body"><div class="watch-item"><div class="watch-head"><strong>当前 CC 已不同于首位 CC</strong><span>${stats.total ? Math.round((stats.changed / stats.total) * 100) : 0}%</span></div><div class="watch-value">${stats.changed}</div><p>不校验流转类型、目标岗位或销售阶段。</p></div></div>
        </section>
        <section class="card">
          <div class="card-head"><div><h3>数据完整度</h3><p>历史未知不参与承接量分母</p></div>${icon("info")}</div>
          <div class="card-body"><div class="watch-item"><div class="watch-head"><strong>可确认首位 CC</strong><span>${stats.coverage}% 覆盖</span></div><div class="watch-value">${stats.covered}</div><p>${stats.missing} 条历史记录缺少可验证分配事件，需人工核对。</p></div></div>
        </section>
      </div>
    </div>
  </section>`;
}

function render() {
  const titles = {
    leads: "我的跟进 · 首位联系人",
    monitor: "首位 CC 与负责人变化监控"
  };
  document.querySelector("#page-title").textContent = titles[state.route];
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
    firstCc: document.querySelector("#filter-first-cc").value,
    currentCc: document.querySelector("#filter-current-cc").value,
    outbound: document.querySelector("#filter-outbound").value,
    connected: document.querySelector("#filter-connected").value,
    history: document.querySelector("#filter-history").value,
    from: document.querySelector("#filter-from").value,
    to: document.querySelector("#filter-to").value
  };
}

function applyFilters() {
  const next = readFilters();
  if (next.from && next.to && next.from > next.to) {
    notify("开始日期不能晚于结束日期");
    return;
  }
  state.filters = next;
  state.page = 1;
  render();
  notify(`已应用筛选，共 ${filteredRows().length} 条结果`);
}

function resetFilters() {
  state.filters = {
    query: "", businessLine: "all", firstCc: "all", currentCc: "all", outbound: "all", connected: "all", history: "all",
    from: "2026-11-01", to: "2026-11-10"
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
    ? `<li class="timeline-item first"><span class="timeline-dot"></span><strong>首次分配给 ${esc(lead.firstCc)}</strong><span>${esc(lead.assignedText)} · 写入首位 CC 与分配历史</span></li>`
    : `<li class="timeline-item first"><span class="timeline-dot"></span><strong>历史归属无法确认</strong><span>缺少可验证分配事件 · 不使用当前负责人倒推</span></li>`;
  const outboundLine = lead.hasOutbound
    ? `<li class="timeline-item"><span class="timeline-dot"></span><strong>首次外呼</strong><span>${esc(lead.outboundText)} · 不区分本次外呼结果</span></li>`
    : `<li class="timeline-item"><span class="timeline-dot"></span><strong>尚未产生首次外呼</strong><span>首次外呼时间保持为空</span></li>`;
  const connectedLine = lead.connectedText !== "—"
    ? `<li class="timeline-item"><span class="timeline-dot"></span><strong>首次接通</strong><span>${esc(lead.connectedText)} · 首次接通独立记录</span></li>`
    : `<li class="timeline-item"><span class="timeline-dot"></span><strong>尚未产生首次接通</strong><span>首次接通时间保持为空</span></li>`;
  const sameOwner = lead.firstCcId && lead.currentCcId === lead.firstCcId;
  const transferLine = !lead.firstCcId
    ? `<li class="timeline-item"><span class="timeline-dot"></span><strong>负责人变化无法判断</strong><span>首位 CC 历史未知 · 当前 CC 为 ${esc(lead.currentCc)}</span></li>`
    : !lead.currentCcId
      ? `<li class="timeline-item"><span class="timeline-dot"></span><strong>当前未分配</strong><span>${esc(lead.currentAssignedText)} · 不计为负责人变化</span></li>`
      : sameOwner
        ? `<li class="timeline-item"><span class="timeline-dot"></span><strong>当前仍由 ${esc(lead.currentCc)} 负责</strong><span>${esc(lead.stage)} · 当前 CC 与首位 CC 相同</span></li>`
        : `<li class="timeline-item tmk"><span class="timeline-dot"></span><strong>当前负责人为 ${esc(lead.currentCc)}</strong><span>${esc(lead.currentAssignedText)} · 当前 CC 已不同于首位 CC</span></li>`;
  drawer.innerHTML = `<div class="drawer-head"><div><small>${esc(lead.id)}</small><h3>${esc(lead.name)}</h3></div><button class="icon-btn" data-action="close-drawer" aria-label="关闭">${icon("close")}</button></div>
    <div class="drawer-body">
      <div class="drawer-block"><h4>首位联系人与关键时间</h4><dl class="facts">
        <dt>业务线</dt><dd>${esc(businessLineLabel(lead.businessLine))}</dd>
        <dt>首位 CC</dt><dd>${lead.firstCc ? esc(lead.firstCc) : "历史未知"}</dd>
        <dt>首次分配</dt><dd>${esc(lead.assignedText)}</dd>
        <dt>首次外呼</dt><dd>${esc(lead.outboundText)}</dd>
        <dt>首次接通</dt><dd>${esc(lead.connectedText)}</dd>
        <dt>当前 CC</dt><dd>${esc(lead.currentCc)}</dd>
        <dt>负责人变化</dt><dd>${lead.firstCcId ? (sameOwner ? "否，当前 CC 与首位 CC 相同" : "是，当前 CC 已不同于首位 CC") : "历史未知"}</dd>
        <dt>历史完整度</dt><dd>${historyTag(lead.history)}</dd>
      </dl></div>
      <div class="drawer-block"><h4>Lead &gt; Update 分配历史</h4><ol class="timeline">${firstLine}${outboundLine}${connectedLine}${transferLine}</ol></div>
      <div class="drawer-block"><div class="drawer-note"><strong>事实字段不可编辑。</strong> 首位 CC 只在第一次成功分配时写入；负责人是否变化不单独存储，直接比较当前 CC 与首位 CC。</div></div>
      <div class="drawer-block"><h4>当前跟进</h4><dl class="facts">
        <dt>销售阶段</dt><dd>${esc(lead.stage)}</dd>
        <dt>外呼尝试</dt><dd>${lead.attempts} 次</dd>
        <dt>接通次数</dt><dd>${lead.connected} 次</dd>
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

function openExport() {
  const rows = filteredRows();
  if (!rows.length) {
    notify("当前筛选没有可导出的数据");
    return;
  }
  const firstDate = rows.map((row) => row.assignedDate).filter(Boolean).sort()[0] || "—";
  const lastDate = rows.map((row) => row.assignedDate).filter(Boolean).sort().at(-1) || "—";
  exportModal.innerHTML = `<div class="modal-head"><div><h3 id="export-title">下载当前筛选数据</h3><p>预览确认后生成 CSV，内容与当前列表口径一致。</p></div><button class="icon-btn" data-action="close-export" aria-label="关闭">${icon("close")}</button></div>
    <div class="modal-body">
      <div class="export-summary"><div class="export-metric"><span>数据行数</span><strong>${rows.length}</strong></div><div class="export-metric"><span>日期范围</span><strong style="font-size:13px">${firstDate} 至 ${lastDate}</strong></div><div class="export-metric"><span>时间口径</span><strong style="font-size:13px">按业务线时区</strong></div></div>
      <div class="field-list">${["lead_id", "user_id", "business_line", "first_cc_id", "first_cc_name", "first_assigned_at", "first_outbound_at", "first_connected_at", "current_cc_id", "history_status"].map((field) => `<code>${field}</code>`).join("")}</div>
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
  const rows = filteredRows();
  const header = ["lead_id", "user_id", "business_line", "first_cc_id", "first_cc_name", "first_assigned_at", "first_outbound_at", "first_connected_at", "current_cc_id", "history_status"];
  const body = rows.map((row) => [
    row.id, row.userId, row.businessLine, row.firstCcId, row.firstCc, row.assignedText,
    row.outboundText === "—" ? "" : row.outboundText,
    row.connectedText === "—" ? "" : row.connectedText,
    row.currentCcId,
    row.history
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
    notify(`已下钻到首位 CC：${agent.dataset.agent}`);
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
  if (action === "close-drawer") closeDrawer();
  if (action === "open-export") openExport();
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
