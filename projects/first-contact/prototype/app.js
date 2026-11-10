const LEADS = [
  {
    id: "VN-261109-1048", userId: "2119933744832167937", name: "Nguyễn Minh Anh",
    firstCc: "Linh Pham", firstCcId: "cc_vn_1024", firstCcEmail: "linh.pham@dino.ai",
    currentCc: "Minh Tran", currentCcId: "tmk_vn_021", currentTeam: "TMK",
    assignedText: "2026-11-09 09:12 (+07)", contactText: "2026-11-09 09:18 (+07)",
    assignedDate: "2026-11-09", handoverText: "2026-11-09 17:42 (+07)",
    contacted: true, handover: "handed", history: "complete", stage: "TMK 已触达",
    attempts: 4, connected: 2, outcome: "有意向", view: "following", stopped: false
  },
  {
    id: "VN-261109-1051", userId: "211993114542575618", name: "Bảo Lê",
    firstCc: "Linh Pham", firstCcId: "cc_vn_1024", firstCcEmail: "linh.pham@dino.ai",
    currentCc: "Minh Tran", currentCcId: "tmk_vn_021", currentTeam: "TMK",
    assignedText: "2026-11-09 09:28 (+07)", contactText: "2026-11-09 10:04 (+07)",
    assignedDate: "2026-11-09", handoverText: "2026-11-09 18:03 (+07)",
    contacted: true, handover: "handed", history: "complete", stage: "TMK 跟进中",
    attempts: 3, connected: 1, outcome: "未填写", view: "following", stopped: false
  },
  {
    id: "VN-261109-1067", userId: "211993582872029762", name: "Chi Phạm",
    firstCc: "Linh Pham", firstCcId: "cc_vn_1024", firstCcEmail: "linh.pham@dino.ai",
    currentCc: "Linh Pham", currentCcId: "cc_vn_1024", currentTeam: "CC",
    assignedText: "2026-11-09 11:05 (+07)", contactText: "—",
    assignedDate: "2026-11-09", handoverText: "—",
    contacted: false, handover: "not", history: "complete", stage: "首次跟进",
    attempts: 0, connected: 0, outcome: "未填写", view: "following", stopped: false
  },
  {
    id: "VN-261108-0934", userId: "211993414302876441", name: "Dung Trần",
    firstCc: "Mai Nguyen", firstCcId: "cc_vn_1031", firstCcEmail: "mai.nguyen@dino.ai",
    currentCc: "Minh Tran", currentCcId: "tmk_vn_021", currentTeam: "TMK",
    assignedText: "2026-11-08 14:22 (+07)", contactText: "2026-11-08 14:31 (+07)",
    assignedDate: "2026-11-08", handoverText: "2026-11-09 09:14 (+07)",
    contacted: true, handover: "handed", history: "complete", stage: "TMK 已触达",
    attempts: 5, connected: 3, outcome: "已预约", view: "following", stopped: false
  },
  {
    id: "VN-261108-0948", userId: "211993778120431105", name: "Giang Võ",
    firstCc: "Mai Nguyen", firstCcId: "cc_vn_1031", firstCcEmail: "mai.nguyen@dino.ai",
    currentCc: "Hà Nguyễn", currentCcId: "cc_vn_1042", currentTeam: "CC",
    assignedText: "2026-11-08 16:08 (+07)", contactText: "2026-11-08 16:16 (+07)",
    assignedDate: "2026-11-08", handoverText: "—",
    contacted: true, handover: "not", history: "complete", stage: "销售跟进中",
    attempts: 2, connected: 1, outcome: "有意向", view: "following", stopped: false
  },
  {
    id: "VN-261110-1122", userId: "211993011548763924", name: "Hạnh Đỗ",
    firstCc: "Quyen Do", firstCcId: "cc_vn_1039", firstCcEmail: "quyen.do@dino.ai",
    currentCc: "Minh Tran", currentCcId: "tmk_vn_021", currentTeam: "TMK",
    assignedText: "2026-11-10 08:11 (+07)", contactText: "2026-11-10 08:19 (+07)",
    assignedDate: "2026-11-10", handoverText: "2026-11-10 08:25 (+07)",
    contacted: true, handover: "handed", history: "complete", stage: "TMK 待跟进",
    attempts: 1, connected: 1, outcome: "未填写", view: "following", stopped: false
  },
  {
    id: "VN-261110-1140", userId: "211993723590118302", name: "Khanh Lâm",
    firstCc: "Quyen Do", firstCcId: "cc_vn_1039", firstCcEmail: "quyen.do@dino.ai",
    currentCc: "Quyen Do", currentCcId: "cc_vn_1039", currentTeam: "CC",
    assignedText: "2026-11-10 09:47 (+07)", contactText: "—",
    assignedDate: "2026-11-10", handoverText: "—",
    contacted: false, handover: "not", history: "complete", stage: "首次跟进",
    attempts: 0, connected: 0, outcome: "未填写", view: "following", stopped: false
  },
  {
    id: "VN-260918-0502", userId: "211993665881039421", name: "Tú Phan",
    firstCc: null, firstCcId: null, firstCcEmail: null,
    currentCc: "Bảo Trân", currentCcId: "cc_vn_1051", currentTeam: "CC",
    assignedText: "—", contactText: "2026-09-18 10:32 (+07)",
    assignedDate: "", handoverText: "待确认角色",
    contacted: true, handover: "unknown", history: "missing", stage: "TMK 已触达",
    attempts: 2, connected: 1, outcome: "未填写", view: "following", stopped: false
  },
  {
    id: "VN-260907-0471", userId: "211993090470273734", name: "Minh Châu",
    firstCc: "An Vo", firstCcId: "cc_vn_1006", firstCcEmail: "an.vo@dino.ai",
    currentCc: "Bảo Trân", currentCcId: "cc_vn_1051", currentTeam: "CC",
    assignedText: "2026-09-07 10:02 (+07)", contactText: "2026-09-07 10:20 (+07)",
    assignedDate: "2026-09-07", handoverText: "2026-09-08 08:54 (+07)",
    contacted: true, handover: "handed", history: "complete", stage: "TMK 已触达",
    attempts: 6, connected: 4, outcome: "已付费", view: "paid", stopped: true
  },
  {
    id: "VN-261012-0619", userId: "211993690918140527", name: "Nam Hoàng",
    firstCc: "Linh Pham", firstCcId: "cc_vn_1024", firstCcEmail: "linh.pham@dino.ai",
    currentCc: "Minh Tran", currentCcId: "tmk_vn_021", currentTeam: "TMK",
    assignedText: "2026-10-12 13:26 (+07)", contactText: "2026-10-12 13:40 (+07)",
    assignedDate: "2026-10-12", handoverText: "2026-10-13 09:03 (+07)",
    contacted: true, handover: "handed", history: "complete", stage: "续费跟进",
    attempts: 8, connected: 5, outcome: "已付费", view: "paid", stopped: false
  },
  {
    id: "VN-261020-0752", userId: "211993207845610980", name: "Oanh Nguyễn",
    firstCc: "Mai Nguyen", firstCcId: "cc_vn_1031", firstCcEmail: "mai.nguyen@dino.ai",
    currentCc: "Mai Nguyen", currentCcId: "cc_vn_1031", currentTeam: "CC",
    assignedText: "2026-10-20 15:16 (+07)", contactText: "2026-10-20 15:24 (+07)",
    assignedDate: "2026-10-20", handoverText: "—",
    contacted: true, handover: "not", history: "complete", stage: "续费跟进",
    attempts: 3, connected: 2, outcome: "已付费", view: "paid", stopped: false
  },
  {
    id: "VN-260903-0428", userId: "211993519107422668", name: "Phú Nguyễn",
    firstCc: null, firstCcId: null, firstCcEmail: null,
    currentCc: "Bảo Trân", currentCcId: "cc_vn_1051", currentTeam: "CC",
    assignedText: "—", contactText: "2026-09-03 11:18 (+07)",
    assignedDate: "", handoverText: "待确认角色",
    contacted: true, handover: "unknown", history: "missing", stage: "TMK 已触达",
    attempts: 2, connected: 1, outcome: "已付费", view: "paid", stopped: false
  },
  {
    id: "VN-261110-1168", userId: "211993880651174930", name: "Quyên Lý",
    firstCc: "Linh Pham", firstCcId: "cc_vn_1024", firstCcEmail: "linh.pham@dino.ai",
    currentCc: "无人负责", currentCcId: null, currentTeam: "POOL",
    assignedText: "2026-11-10 10:11 (+07)", contactText: "2026-11-10 10:15 (+07)",
    assignedDate: "2026-11-10", handoverText: "—",
    contacted: true, handover: "not", history: "complete", stage: "已退回公海",
    attempts: 1, connected: 0, outcome: "无人接听", view: "pool", stopped: false
  },
  {
    id: "VN-260922-0563", userId: "211993440781025116", name: "Sơn Đặng",
    firstCc: null, firstCcId: null, firstCcEmail: null,
    currentCc: "无人负责", currentCcId: null, currentTeam: "POOL",
    assignedText: "—", contactText: "—",
    assignedDate: "", handoverText: "待确认角色",
    contacted: false, handover: "unknown", history: "missing", stage: "待领取",
    attempts: 0, connected: 0, outcome: "未填写", view: "pool", stopped: false
  }
];

const FIRST_CC = ["Linh Pham", "Mai Nguyen", "Quyen Do", "An Vo"];
const CURRENT_CC = ["Minh Tran", "Linh Pham", "Hà Nguyễn", "Quyen Do", "Bảo Trân", "Mai Nguyen", "无人负责"];
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
    firstCc: "all",
    currentCc: "all",
    contact: "all",
    handover: "all",
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
  return ["leads", "monitor", "rules"].includes(route) ? route : "leads";
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

function pageHeading(eyebrow, title, copy, actions = "") {
  return `<div class="page-heading">
    <div><div class="eyebrow">${esc(eyebrow)}</div><h2>${esc(title)}</h2><p>${esc(copy)}</p></div>
    ${actions ? `<div class="heading-actions">${actions}</div>` : ""}
  </div>`;
}

function tag(text, kind = "neutral") {
  return `<span class="tag tag-${kind}">${esc(text)}</span>`;
}

function handoverLabel(value) {
  return value === "handed" ? "已交接" : value === "not" ? "未交接" : "待确认角色";
}

function handoverTag(value) {
  return tag(handoverLabel(value), value === "handed" ? "purple" : value === "not" ? "neutral" : "warning");
}

function historyTag(value) {
  return value === "complete" ? tag("完整", "success") : tag("历史未知", "danger");
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
    if (f.firstCc !== "all" && lead.firstCc !== f.firstCc) return false;
    if (f.currentCc !== "all" && lead.currentCc !== f.currentCc) return false;
    if (f.contact === "contacted" && !lead.contacted) return false;
    if (f.contact === "not-contacted" && lead.contacted) return false;
    if (f.contact === "unknown" && lead.history !== "missing") return false;
    if (f.handover !== "all" && lead.handover !== f.handover) return false;
    if (f.history !== "all" && lead.history !== f.history) return false;
    if (f.from && lead.assignedDate && lead.assignedDate < f.from) return false;
    if (f.to && lead.assignedDate && lead.assignedDate > f.to) return false;
    return true;
  });
}

function statsFor(rows) {
  const covered = rows.filter((row) => row.history === "complete").length;
  const contacted = rows.filter((row) => row.contacted).length;
  const handed = rows.filter((row) => row.handover === "handed").length;
  return {
    total: rows.length,
    covered,
    coverage: rows.length ? Math.round((covered / rows.length) * 100) : 0,
    contacted,
    handed,
    missing: rows.length - covered
  };
}

function statCards(rows) {
  const stats = statsFor(rows);
  return `<div class="stat-grid">
    <article class="stat-card"><span class="stat-label">当前筛选线索</span><strong>${stats.total}</strong><small>按 Lead ID 去重</small><span class="stat-icon">${icon("list")}</span></article>
    <article class="stat-card is-success"><span class="stat-label">首位 CC 覆盖率</span><strong>${stats.coverage}%</strong><small>${stats.covered} / ${stats.total} 可确认</small><span class="stat-icon">${icon("check")}</span></article>
    <article class="stat-card is-warning"><span class="stat-label">已触达线索</span><strong>${stats.contacted}</strong><small>至少一次有效外呼尝试</small><span class="stat-icon">${icon("phone")}</span></article>
    <article class="stat-card is-purple"><span class="stat-label">已交接 TMK</span><strong>${stats.handed}</strong><small>首位 CC 保持不变</small><span class="stat-icon">${icon("arrow")}</span></article>
  </div>`;
}

function hero(rows) {
  const stats = statsFor(rows);
  return `<section class="hero">
    <div class="hero-main">
      <div>
        <div class="eyebrow">VIETNAM · FIRST CONTACT TRACE</div>
        <h2>负责人可以交接，首次归属必须留下</h2>
        <p>首位 CC 完成本轮工作后把线索交给 TMK，列表、下载和监控继续使用同一位首位 CC，避免负责人变化后丢失工作量。</p>
      </div>
      <div class="hero-note"><span>当前视图可确认</span><strong>${stats.covered} 条</strong><small>${stats.missing} 条历史未知 · 不计入承接量</small></div>
    </div>
    <div class="handoff-rail" aria-label="首位联系人交接链路">
      <div class="rail-node first"><i>01</i><div><strong>线索归属</strong>首次 CC 写入</div></div>
      <div class="rail-arrow">${icon("arrow")}</div>
      <div class="rail-node"><i>02</i><div><strong>完成跟进</strong>首次联络留痕</div></div>
      <div class="rail-arrow">${icon("arrow")}</div>
      <div class="rail-node"><i>03</i><div><strong>交接 TMK</strong>只更新当前 CC</div></div>
      <div class="rail-arrow">${icon("arrow")}</div>
      <div class="rail-node"><i>04</i><div><strong>批量监控</strong>筛选、下载、核对</div></div>
    </div>
  </section>`;
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
      <label class="field"><span class="field-label">首位 CC</span><select class="select" id="filter-first-cc">${selectOptions(FIRST_CC, f.firstCc, "全部首位 CC")}</select></label>
      <label class="field"><span class="field-label">当前 CC</span><select class="select" id="filter-current-cc">${selectOptions(CURRENT_CC, f.currentCc, "全部当前 CC")}</select></label>
      <label class="field"><span class="field-label">首次联络状态</span><select class="select" id="filter-contact">
        <option value="all">全部状态</option><option value="contacted" ${f.contact === "contacted" ? "selected" : ""}>已触达</option>
        <option value="not-contacted" ${f.contact === "not-contacted" ? "selected" : ""}>未触达</option>
        <option value="unknown" ${f.contact === "unknown" ? "selected" : ""}>历史未知</option>
      </select></label>
      <label class="field"><span class="field-label">TMK 交接</span><select class="select" id="filter-handover">
        <option value="all">全部交接状态</option><option value="handed" ${f.handover === "handed" ? "selected" : ""}>已交接</option>
        <option value="not" ${f.handover === "not" ? "selected" : ""}>未交接</option>
        <option value="unknown" ${f.handover === "unknown" ? "selected" : ""}>待确认角色</option>
      </select></label>
    </div>
    <div class="filter-grid second">
      <label class="field"><span class="field-label">历史完整度</span><select class="select" id="filter-history">
        <option value="all">全部记录</option><option value="complete" ${f.history === "complete" ? "selected" : ""}>完整</option>
        <option value="missing" ${f.history === "missing" ? "selected" : ""}>历史缺失</option>
      </select></label>
      <label class="field"><span class="field-label">首次归属日期（起）</span><input class="input" type="date" id="filter-from" value="${esc(f.from)}"></label>
      <label class="field"><span class="field-label">首次归属日期（止）</span><input class="input" type="date" id="filter-to" value="${esc(f.to)}"></label>
      <div class="field"><span class="field-label">时间口径</span><button class="btn" style="width:100%" disabled>Asia/Ho_Chi_Minh</button></div>
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
  if (f.firstCc !== "all") chips.push(`首位 CC：${f.firstCc}`);
  if (f.currentCc !== "all") chips.push(`当前 CC：${f.currentCc}`);
  if (f.contact !== "all") chips.push(`联络：${f.contact === "contacted" ? "已触达" : f.contact === "not-contacted" ? "未触达" : "历史未知"}`);
  if (f.handover !== "all") chips.push(`交接：${handoverLabel(f.handover)}`);
  if (f.history !== "all") chips.push(`历史：${f.history === "complete" ? "完整" : "缺失"}`);
  return chips.map((text) => `<span class="filter-chip">${esc(text)}</span>`).join("");
}

function leadRows(rows) {
  if (!rows.length) {
    return `<tr><td colspan="9"><div class="empty-state"><strong>当前筛选下没有线索</strong><p>调整首位 CC、首次联络状态或日期范围后重试。</p></div></td></tr>`;
  }
  return rows.map((lead) => {
    const firstUser = lead.firstCc
      ? `<div class="user-cell"><span class="user-avatar">${initials(lead.firstCc)}</span><span class="user-copy"><strong>${esc(lead.firstCc)}${lead.stopped ? ` ${tag("已停用", "neutral")}` : ""}</strong><span>${esc(lead.firstCcEmail)}</span></span></div><span class="preserved">首次归属后不变</span>`
      : `<div class="user-cell"><span class="user-avatar missing">?</span><span class="user-copy"><strong>历史未知</strong><span>无可确认分配事件</span></span></div>`;
    const currentUser = `<div class="user-cell"><span class="user-avatar ${lead.currentTeam === "TMK" ? "tmk" : "missing"}">${initials(lead.currentCc)}</span><span class="user-copy"><strong>${esc(lead.currentCc)}</strong><span>${lead.currentTeam === "TMK" ? "TMK 电话营销" : lead.currentTeam === "POOL" ? "待领取" : "CC 客户关怀"}</span></span></div>`;
    return `<tr data-lead="${lead.id}">
      <td><span class="cell-title">${esc(lead.name)}</span><span class="cell-sub mono">${esc(lead.id)}</span><span class="cell-sub">${esc(lead.userId)}</span></td>
      <td class="is-first">${firstUser}</td>
      <td>${lead.assignedText === "—" ? '<span class="empty-time">—</span>' : esc(lead.assignedText)}</td>
      <td>${lead.contactText === "—" ? '<span class="empty-time">—</span>' : esc(lead.contactText)}</td>
      <td>${currentUser}</td>
      <td><span class="cell-title">${esc(lead.stage)}</span><span class="cell-sub">外呼 ${lead.attempts} 次</span></td>
      <td>${handoverTag(lead.handover)}</td>
      <td>${lead.attempts > 0 ? tag(`已触达 · ${lead.connected} 次接通`, "success") : tag("未触达", "neutral")}</td>
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
    ${pageHeading("SALES CENTER OVERVIEW", "越南首位联系人", "围绕线索首次归属建立可筛选、可下载、可追溯的团队视图。", `<button class="btn btn-secondary btn-small" data-route="monitor">${icon("pulse")} 查看团队监控</button>`)}
    ${hero(rows)}
    ${statCards(rows)}
    <div class="notice">${icon("info")}<span><strong>当前列表已增加首位 CC。</strong> 首位 CC 是历史事实，不会随当前负责人改变；历史缺失记录不会被猜测回填。</span><button class="btn btn-quiet btn-small" data-route="rules">查看字段定义</button></div>
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
        <thead><tr><th>线索 / 用户</th><th class="is-first">首位 CC</th><th>首次归属时间</th><th>首次联络时间</th><th>当前 CC</th><th>跟进阶段</th><th>TMK 交接</th><th>触达状态</th><th>历史完整度</th></tr></thead>
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
    const contacted = rows.filter((lead) => lead.contacted).length;
    const handed = rows.filter((lead) => lead.handover === "handed").length;
    return { name, assigned: rows.length, contacted, handed, rate: rows.length ? Math.round((contacted / rows.length) * 100) : 0 };
  });
}

function renderMonitor() {
  const completeRows = periodRows();
  const stats = statsFor(completeRows);
  const productivity = productivityRows();
  const tmkReceived = completeRows.filter((lead) => lead.handover === "handed").length;
  const tmkContacted = completeRows.filter((lead) => lead.handover === "handed" && lead.currentTeam === "TMK" && lead.contacted).length;
  content.innerHTML = `<section class="page-enter">
    ${pageHeading("TEAM PRODUCTIVITY", "首位 CC 与 TMK 监控", "数据范围：越南业务线、2026-11-01 至 2026-11-10。所有数字可回到同口径明细。", `<button class="btn btn-secondary btn-small" data-route="leads">${icon("list")} 返回线索列表</button>`)}
    ${statCards(completeRows)}
    <div class="monitor-grid">
      <section class="card">
        <div class="card-head"><div><h3>首位 CC 生产力</h3><p>承接、触达与 TMK 交接按 Lead ID 去重</p></div>${tag("当前演示数据", "info")}</div>
        <div class="table-wrap"><table class="agent-table">
          <thead><tr><th>首位 CC</th><th>承接</th><th>已触达</th><th>触达覆盖率</th><th>交接 TMK</th><th>未触达</th></tr></thead>
          <tbody>${productivity.map((row) => `<tr data-agent="${esc(row.name)}">
            <td><div class="user-cell"><span class="user-avatar">${initials(row.name)}</span><span class="user-copy"><strong>${esc(row.name)}</strong><span>点击查看明细</span></span></div></td>
            <td><strong>${row.assigned}</strong></td><td>${row.contacted}</td>
            <td class="progress-cell"><div class="progress-row"><div class="progress-track"><div class="progress-fill" style="width:${row.rate}%"></div></div><b>${row.rate}%</b></div></td>
            <td>${row.handed}</td><td>${row.assigned - row.contacted}</td>
          </tr>`).join("")}</tbody>
        </table></div>
      </section>
      <div>
        <section class="card">
          <div class="card-head"><div><h3>TMK 输入与触达</h3><p>只看已发生交接的线索</p></div>${tag("交接后", "purple")}</div>
          <div class="card-body"><div class="watch-list">
            <div class="watch-item"><div class="watch-head"><strong>收到线索</strong><span>交接量</span></div><div class="watch-value">${tmkReceived}</div><p>首位 CC 完成交接后进入 TMK</p></div>
            <div class="watch-item"><div class="watch-head"><strong>已触达</strong><span>${tmkReceived ? Math.round((tmkContacted / tmkReceived) * 100) : 0}% 覆盖</span></div><div class="watch-value">${tmkContacted}</div><p>保留首次 CC 维度，可继续追踪 TMK 产出</p></div>
          </div></div>
        </section>
        <section class="card">
          <div class="card-head"><div><h3>数据完整度</h3><p>历史未知不参与承接量分母</p></div>${icon("info")}</div>
          <div class="card-body"><div class="watch-item"><div class="watch-head"><strong>可确认首位 CC</strong><span>${stats.coverage}% 覆盖</span></div><div class="watch-value">${stats.covered}</div><p>${stats.missing} 条历史记录缺少可验证分配事件，需人工核对。</p></div></div>
        </section>
      </div>
    </div>
    <div class="notice">${icon("info")}<span><strong>口径一致：</strong> 首位 CC 承接量只统计可确认数据；TMK 交接量按成功转派事件去重，不把普通转派算作 TMK。</span><button class="btn btn-quiet btn-small" data-route="rules">查看计算规则</button></div>
  </section>`;
}

function renderRules() {
  content.innerHTML = `<section class="page-enter">
    ${pageHeading("FIELD CONTRACT", "字段与业务规则", "把历史事实、当前状态和外部事件分开，保证列表、筛选、下载与监控不会互相矛盾。")}
    <div class="definition-grid">
      <article class="definition-card"><span class="number">FACT 01</span><h3>首位 CC</h3><p>线索进入销售中心后第一次取得归属的 CC。首次归属成功后永久保留，不随转派、掉库、回池或再领取变化。</p></article>
      <article class="definition-card"><span class="number">FACT 02</span><h3>首次联络时间</h3><p>首位 CC 在线索上产生的第一条有效外呼或跟进记录时间。它和首位 CC 负责人是不同字段。</p></article>
      <article class="definition-card"><span class="number">FACT 03</span><h3>当前 CC</h3><p>当前正在处理线索的负责人，可由领取、自动分配、转派或管理操作更新。</p></article>
      <article class="definition-card"><span class="number">FACT 04</span><h3>TMK 交接时间</h3><p>负责人首次从非 TMK 变为 TMK 的时间。必须由成功转派事件和角色组共同确认。</p></article>
      <article class="definition-card"><span class="number">FACT 05</span><h3>历史完整度</h3><p>只有可验证的分配历史才标为完整；缺失时显示历史未知，不允许拿当前 CC 倒推首位 CC。</p></article>
      <article class="definition-card"><span class="number">FACT 06</span><h3>名称快照</h3><p>保留首次归属时的 CC 名称。人员离职或改名后仍可按历史名称筛选，并显示当前账号状态。</p></article>
    </div>
    <section class="card" style="margin-top:16px">
      <div class="card-head"><div><h3>一次成功归属的数据写入</h3><p>首位事实和分配历史必须处于同一事务</p></div>${tag("幂等写入", "info")}</div>
      <div class="rule-flow">
        <div class="rule-step"><small>STEP 01</small><strong>成功取得归属</strong><span>领取 / 自动分配 / 直接分配</span></div>
        <div class="rule-step"><small>STEP 02</small><strong>检查首位字段</strong><span>仅当为空时写入</span></div>
        <div class="rule-step"><small>STEP 03</small><strong>记录事件</strong><span>负责人、时间、来源、原因</span></div>
        <div class="rule-step"><small>STEP 04</small><strong>转派当前负责人</strong><span>首位字段保持不变</span></div>
        <div class="rule-step"><small>STEP 05</small><strong>筛选与下载</strong><span>同口径核对</span></div>
      </div>
    </section>
    <section class="card">
      <div class="card-head"><div><h3>关键边界</h3><p>最容易产生错误统计的场景</p></div></div>
      <div class="card-body"><div class="rule-list">
        <div class="rule-row"><strong>并发领取</strong><p>数据库唯一约束保证只有一个领取成功；只有成功事件可以写入首位 CC 和分配历史。</p></div>
        <div class="rule-row"><strong>回池后再领取</strong><p>首位 CC 仍是第一次归属者；新领取人只成为当前 CC。回池不重置历史。</p></div>
        <div class="rule-row"><strong>普通转派与 TMK</strong><p>负责人变化并不自动代表 TMK 交接，必须同时确认新负责人属于 TMK 角色组。</p></div>
        <div class="rule-row"><strong>历史缺失</strong><p>没有审计事件时不使用“最早可见通话”或“当前 CC”倒推。数据不完整比猜测更可解释。</p></div>
        <div class="rule-row"><strong>离职与改名</strong><p><code>first_cc_id</code> 不变，展示首次名称快照；账号状态单独展示，不影响历史筛选。</p></div>
        <div class="rule-row"><strong>筛选后下载</strong><p>下载使用完整筛选结果与当前权限，不受当前分页限制，也不能绕过筛选导出全量。</p></div>
      </div></div>
    </section>
  </section>`;
}

function render() {
  const titles = {
    leads: "我的跟进 · 首位联系人",
    monitor: "首位 CC 与 TMK 监控",
    rules: "字段与业务规则"
  };
  document.querySelector("#page-title").textContent = titles[state.route];
  document.querySelectorAll(".nav-item").forEach((item) => item.classList.toggle("is-active", item.dataset.route === state.route));
  if (state.route === "monitor") renderMonitor();
  else if (state.route === "rules") renderRules();
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
    firstCc: document.querySelector("#filter-first-cc").value,
    currentCc: document.querySelector("#filter-current-cc").value,
    contact: document.querySelector("#filter-contact").value,
    handover: document.querySelector("#filter-handover").value,
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
    query: "", firstCc: "all", currentCc: "all", contact: "all", handover: "all", history: "all",
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
  const contactLine = lead.contacted
    ? `<li class="timeline-item"><span class="timeline-dot"></span><strong>首次有效联络</strong><span>${esc(lead.contactText)} · ${lead.attempts} 次外呼，${lead.connected} 次接通</span></li>`
    : `<li class="timeline-item"><span class="timeline-dot"></span><strong>尚未产生首次联络</strong><span>触达时间保持为空</span></li>`;
  const transferLine = lead.currentCc !== lead.firstCc
    ? `<li class="timeline-item ${lead.currentTeam === "TMK" ? "tmk" : ""}"><span class="timeline-dot"></span><strong>当前负责人变更为 ${esc(lead.currentCc)}</strong><span>${esc(lead.handoverText)} · 首位 CC 保持不变</span></li>`
    : `<li class="timeline-item"><span class="timeline-dot"></span><strong>当前仍由 ${esc(lead.currentCc)} 负责</strong><span>${esc(lead.stage)}</span></li>`;
  drawer.innerHTML = `<div class="drawer-head"><div><small>${esc(lead.id)}</small><h3>${esc(lead.name)}</h3></div><button class="icon-btn" data-action="close-drawer" aria-label="关闭">${icon("close")}</button></div>
    <div class="drawer-body">
      <div class="drawer-block"><h4>首位归属</h4><dl class="facts">
        <dt>首位 CC</dt><dd>${lead.firstCc ? esc(lead.firstCc) : "历史未知"}</dd>
        <dt>首次归属</dt><dd>${esc(lead.assignedText)}</dd>
        <dt>首次联络</dt><dd>${esc(lead.contactText)}</dd>
        <dt>当前 CC</dt><dd>${esc(lead.currentCc)}</dd>
        <dt>交接状态</dt><dd>${handoverTag(lead.handover)}</dd>
        <dt>历史完整度</dt><dd>${historyTag(lead.history)}</dd>
      </dl></div>
      <div class="drawer-block"><h4>Lead &gt; Update 分配历史</h4><ol class="timeline">${firstLine}${contactLine}${transferLine}</ol></div>
      <div class="drawer-block"><div class="drawer-note"><strong>事实字段不可编辑。</strong> 首位 CC 只在第一次成功归属时写入；这里展示的是历史快照。当前业务状态变化只更新当前 CC 与阶段。</div></div>
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
      <div class="export-summary"><div class="export-metric"><span>数据行数</span><strong>${rows.length}</strong></div><div class="export-metric"><span>日期范围</span><strong style="font-size:13px">${firstDate} 至 ${lastDate}</strong></div><div class="export-metric"><span>时间口径</span><strong style="font-size:13px">Asia/Ho_Chi_Minh</strong></div></div>
      <div class="field-list">${["lead_id", "user_id", "first_cc_id", "first_cc_name", "first_assigned_at", "first_contacted_at", "current_cc_id", "tmk_handover_at", "history_status"].map((field) => `<code>${field}</code>`).join("")}</div>
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
  const header = ["lead_id", "user_id", "first_cc_id", "first_cc_name", "first_assigned_at", "first_contacted_at", "current_cc_id", "tmk_handover_at", "history_status"];
  const body = rows.map((row) => [
    row.id, row.userId, row.firstCcId, row.firstCc, row.assignedText,
    row.contactText === "—" ? "" : row.contactText, row.currentCcId,
    row.handoverText === "—" || row.handoverText === "待确认角色" ? "" : row.handoverText,
    row.history
  ].map(csvCell).join(","));
  const blob = new Blob(["\ufeff" + [header.map(csvCell).join(","), ...body].join("\n")], { type: "text/csv;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `vn-first-contact-${new Date().toISOString().slice(0, 10)}.csv`;
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
