const FLOW_STEPS = [
  { key: "share", title: "邀请人分享", summary: "生成邀请链接或推荐码", trigger: "邀请人进入 Refer a Friend 并选择分享。", output: "推荐码、邀请链接、分享渠道", failure: "无效链接不阻断登录，只提示未绑定关系。", system: "App / 推荐服务" },
  { key: "bind", title: "好友绑定", summary: "登录后确认推荐关系", trigger: "好友打开链接或输入推荐码。", output: "唯一推荐关系、来源记录、Lead", failure: "自荐、同手机号、已试听或已有邀请人时拒绝绑定并记录原因。", system: "App / CRM" },
  { key: "trial", title: "首次试听", summary: "完成首节体验课触发 +14 天", trigger: "课程服务确认首节体验课已完成。", output: "试听奖励事件", failure: "未预约、未到课、取消或技术异常均不触发。", system: "课程服务 / 奖励服务" },
  { key: "purchase", title: "首次购买", summary: "3/6/12 个月奖励 1/2/3 个月", trigger: "好友首笔会员订单支付成功。", output: "购买奖励事件", failure: "待支付、失败、取消、退款或非泰国会员商品不触发。", system: "订单与支付 / 奖励服务" },
  { key: "issue", title: "权益发放", summary: "会员时长顺延并通知邀请人", trigger: "奖励事件通过幂等和资格校验。", output: "延长后的会员到期时间、发放审计", failure: "权益服务超时进入失败重试，超过阈值转人工。", system: "会员权益服务 / 通知" },
  { key: "reverse", title: "退款冲正", summary: "只处理对应购买奖励", trigger: "订单退款、撤销或拒付最终成立。", output: "未来会员时长冲正、异常记录", failure: "部分退款或争议进入人工审核，不追溯已使用时长。", system: "订单 / 财务 / 奖励服务" }
];

const REFERRALS = [
  { id: "REF-TH-1024", inviter: "Malee S.", friend: "Nok P.", owner: "Aom", bound: "10-24 09:12", trial: "已完成", plan: "6 个月", reward: "+14 天 / +2 个月", status: "已发放" },
  { id: "REF-TH-1023", inviter: "Ploy K.", friend: "Kanya T.", owner: "Aom", bound: "10-24 08:40", trial: "已完成", plan: "3 个月", reward: "+14 天 / +1 个月", status: "已发放" },
  { id: "REF-TH-1021", inviter: "Fah R.", friend: "Nam W.", owner: "Mint", bound: "10-23 18:06", trial: "已完成", plan: "12 个月", reward: "+14 天 / +3 个月", status: "待发放" },
  { id: "REF-TH-1018", inviter: "Mali S.", friend: "Pim A.", owner: "Mint", bound: "10-22 14:35", trial: "未预约", plan: "—", reward: "待触发", status: "跟进中" },
  { id: "REF-TH-1016", inviter: "Jane D.", friend: "Pond C.", owner: "Beam", bound: "10-21 20:18", trial: "已完成", plan: "6 个月", reward: "+14 天 / +2 个月", status: "发放失败" },
  { id: "REF-TH-1012", inviter: "May N.", friend: "Tao L.", owner: "Beam", bound: "10-19 12:03", trial: "已完成", plan: "3 个月", reward: "+14 天 / +1 个月", status: "已发放" },
  { id: "REF-TH-1008", inviter: "Malee S.", friend: "Joy S.", owner: "Aom", bound: "10-18 10:11", trial: "未到课", plan: "—", reward: "—", status: "无效" }
];

let SOCIAL_POSTS = [
  { id: "POST-TH-1068", user: "Malee S.", content: "孩子在课堂完成第一个口语练习", channel: "Facebook", submitted: "11-08 18:20", consent: "已授权", status: "待审核" },
  { id: "POST-TH-1066", user: "Ploy K.", content: "课堂作品照片与学习打卡", channel: "Instagram", submitted: "11-08 15:42", consent: "未授权", status: "待审核" },
  { id: "POST-TH-1062", user: "Fah R.", content: "课堂视频片段", channel: "Facebook", submitted: "11-07 21:10", consent: "已授权", status: "有效待选择" },
  { id: "POST-TH-1054", user: "May N.", content: "家庭复习视频", channel: "TikTok", submitted: "11-06 19:06", consent: "已授权", status: "官方选中" },
  { id: "POST-TH-1048", user: "Jane D.", content: "重复转载的课堂视频", channel: "Facebook", submitted: "11-05 12:44", consent: "已授权", status: "无效" }
];

const REWARD_EVENTS = [
  { event: "RW-TH-24081", user: "Malee S.", type: "首次试听", amount: "+14 天", before: "2026-11-18", after: "2026-12-02", status: "已发放" },
  { event: "RW-TH-24082", user: "Malee S.", type: "购买 6 个月", amount: "+2 个月", before: "2026-12-02", after: "2027-02-02", status: "已发放" },
  { event: "RW-TH-24077", user: "Fah R.", type: "购买 12 个月", amount: "+3 个月", before: "2026-12-20", after: "2027-03-20", status: "待发放" },
  { event: "RW-TH-24069", user: "Jane D.", type: "购买 6 个月", amount: "+2 个月", before: "2026-12-08", after: "2027-02-08", status: "发放失败" },
  { event: "RW-TH-24041", user: "May N.", type: "社媒投稿", amount: "+5 天", before: "2027-01-04", after: "2027-01-09", status: "已发放" }
];

const OPEN_ITEMS = [
  "邀请人是否必须为有效会员",
  "未选中额外 +15 天是否最终生效",
  "1 个月和周包是否发放购买奖励",
  "会员过期后奖励何时发放",
  "社媒审核 SLA 与申诉机制",
  "邀请码有效期和单人邀请上限"
];

const EXCEPTIONS = [
  { id: "R-03", scenario: "自荐、同手机号、已试听或已购买", action: "拒绝绑定并记录原因", recovery: "继续普通注册或购买" },
  { id: "R-06", scenario: "邀请人无有效 CC owner", action: "回退泰国自动分配", recovery: "保留原分配来源" },
  { id: "R-07", scenario: "未到课、取消或改期", action: "不触发 +14 天", recovery: "后续完成首节试听仍可触发" },
  { id: "R-10", scenario: "试听和购买事件同时到达", action: "生成两条独立奖励", recovery: "按业务时间串行发放" },
  { id: "R-12", scenario: "非泰国、零金额或非会员商品", action: "不触发购买奖励", recovery: "不做人工推断" },
  { id: "R-14", scenario: "重复购买回调", action: "返回原奖励结果", recovery: "不重复增加会员" },
  { id: "R-16", scenario: "奖励发放后发生退款", action: "冻结购买奖励", recovery: "最终退款成立后冲正未来会员" },
  { id: "R-18", scenario: "邀请人会员已过期", action: "奖励保留待发放", recovery: "重新有效会员后发放" },
  { id: "R-19", scenario: "权益服务超时或结果未知", action: "保存幂等键并进入失败", recovery: "查询或重试直到确认" },
  { id: "R-20", scenario: "多个奖励并发发放", action: "同一用户按时间串行", recovery: "防止覆盖会员到期时间" },
  { id: "R-23", scenario: "未授权官方使用但内容有效", action: "按有效未选中处理", recovery: "取得授权后可重新审核" },
  { id: "R-24", scenario: "审核误操作", action: "管理员纠正并留痕", recovery: "记录前后状态和原因" }
];

const state = {
  route: "",
  flow: "bind",
  activitySearch: "",
  activityStatus: "all",
  socialFilter: "全部",
  appScreen: "invite",
  rewardTrial: true,
  rewardPlan: 6,
  appBound: false,
  ledgerStatus: "all"
};

const pageTitles = {
  overview: "推荐奖励概览",
  activity: "推荐活动",
  social: "社媒审核",
  app: "App 邀请体验",
  ledger: "奖励流水",
  rules: "规则与异常"
};

const content = document.querySelector("#content");
const pageTitle = document.querySelector("#page-title");
const drawerLayer = document.querySelector("#drawer-layer");
const drawer = document.querySelector("#drawer");
const toast = document.querySelector("#toast");

function esc(value) {
  return String(value ?? "").replace(/[&<>"']/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[char]);
}
function icon(name) { return `<svg aria-hidden="true"><use href="#i-${name}"></use></svg>`; }
function parseRoute() {
  const route = location.hash.replace(/^#\/?/, "") || "overview";
  return pageTitles[route] ? route : "overview";
}
function navigate(route) { location.hash = `#/${route}`; }
function statusTone(status) {
  if (["已发放", "官方选中", "有效待选择"].includes(status)) return "success";
  if (["待发放", "技术开发中"].includes(status)) return "info";
  if (["发放失败", "无效"].includes(status)) return "danger";
  if (["待审核", "跟进中", "待触发"].includes(status)) return "warning";
  return "neutral";
}
function statusTag(status) { return `<span class="tag tag-${statusTone(status)} tag-dot">${esc(status)}</span>`; }
function priorityTag(priority) { return `<span class="tag tag-${priority.toLowerCase()}">${priority}</span>`; }
function notify(message) {
  toast.textContent = message;
  toast.classList.add("is-visible");
  clearTimeout(notify.timer);
  notify.timer = setTimeout(() => toast.classList.remove("is-visible"), 2200);
}
function pageHeading(eyebrow, title, description, actions = "") {
  return `<div class="page-heading"><div><div class="eyebrow">${esc(eyebrow)}</div><h2>${esc(title)}</h2><p>${esc(description)}</p></div>${actions ? `<div class="heading-actions">${actions}</div>` : ""}</div>`;
}

function render() {
  state.route = parseRoute();
  pageTitle.textContent = pageTitles[state.route];
  document.title = `${pageTitles[state.route]} · Referrals & Rewards`;
  document.querySelectorAll(".nav-item").forEach((item) => item.classList.toggle("is-active", item.dataset.route === state.route));
  if (state.route === "overview") content.innerHTML = renderOverview();
  else if (state.route === "activity") content.innerHTML = renderActivity();
  else if (state.route === "social") content.innerHTML = renderSocial();
  else if (state.route === "app") content.innerHTML = renderApp();
  else if (state.route === "ledger") content.innerHTML = renderLedger();
  else content.innerHTML = renderRules();
  content.firstElementChild?.classList.add("page-enter");
}

function renderOverview() {
  const flow = FLOW_STEPS.find((item) => item.key === state.flow) || FLOW_STEPS[1];
  return `<section>
    ${pageHeading("Thailand · Referrals & Rewards", "让每一次推荐和分享，都自动变成可核对的会员权益", "泰国老用户邀请好友、分享课堂内容，符合条件后由系统自动延长会员，并在 CRM 可追踪、审核和追溯。", `<span class="tag tag-info">待评审</span><span class="tag tag-neutral">REQ-TH-001</span>`)}
    <div class="feature-hero">
      <div><div class="eyebrow">Growth Loop</div><h2>邀请、试听、购买、增值，形成完整奖励闭环</h2><p>本期只覆盖泰国业务线。奖励只延长会员，不发现金、优惠券或积分。</p><div class="feature-meta"><span class="tag tag-info">App 分享</span><span class="tag tag-success">自动奖励</span><span class="tag tag-purple">CRM 审核</span><span class="tag tag-neutral">Asia/Bangkok</span></div></div>
      <div class="reward-orbit"><div class="reward-core">+14<span>天</span></div><span class="orbit-chip c1">试听奖励</span><span class="orbit-chip c2">购买奖励</span><span class="orbit-chip c3">社媒奖励</span></div>
    </div>
    <div class="reward-grid">
      <div class="reward-card"><small>好友完成首次试听</small><strong>+14 天</strong><p>邀请人会员从当前到期日顺延 14 个自然日。</p><em>与购买奖励叠加</em></div>
      <div class="reward-card"><small>好友购买会员</small><strong>+1 / +2 / +3 个月</strong><p>分别对应 3 / 6 / 12 个月会员套餐。</p><em>每名好友仅触发一次</em></div>
      <div class="reward-card"><small>用户发布社媒内容</small><strong>+5 天</strong><p>被官方选中额外 +2 个月；有效未选中 +15 天。</p><em>内容与授权均需审核</em></div>
    </div>
    <div class="card" style="margin-bottom:18px">
      <div class="card-head"><div><h3 class="section-title">端到端奖励流程</h3><p>点击节点查看触发条件、系统输出与失败处理</p></div><span class="tag tag-neutral">6 个关键节点</span></div>
      <div class="card-body">
        <div class="flow-map">${FLOW_STEPS.map((step, index) => `<button class="flow-step ${step.key === state.flow ? "is-active" : ""}" data-flow="${step.key}"><span class="step-index">0${index + 1}</span><strong>${esc(step.title)}</strong><span>${esc(step.summary)}</span></button>`).join("")}</div>
        <div class="flow-inspector" id="flow-inspector"><div><h4>${esc(flow.title)}</h4><p>${esc(flow.trigger)}</p></div><dl class="kv"><dt>系统</dt><dd>${esc(flow.system)}</dd><dt>业务输出</dt><dd>${esc(flow.output)}</dd><dt>失败处理</dt><dd>${esc(flow.failure)}</dd></dl></div>
      </div>
    </div>
    <div class="scope-grid">
      <div class="scope-box"><h4>本期覆盖</h4><ul><li>邀请链接、推荐码和唯一推荐关系</li><li>好友 Lead 创建与 CC 自动归属</li><li>首次试听、首次购买自动奖励</li><li>社媒投稿录入、审核和奖励</li><li>奖励重试、审计和状态追踪</li></ul></div>
      <div class="scope-box"><h4>明确不做</h4><ul><li>KOL / KOC 商业合作结算</li><li>现金返佣、钱包、优惠券或积分</li><li>非泰国、跨国家、跨业务线推荐</li><li>自动识别 Facebook 官方是否发布</li><li>上线前历史推荐和投稿补发</li></ul></div>
    </div>
  </section>`;
}

function renderActivity() {
  const rows = filteredReferrals();
  return `<section>
    ${pageHeading("CRM Operations", "Referrals & Rewards", "查看推荐关系、首次试听、购买套餐和奖励发放状态。当前为演示数据。", `<button class="btn btn-secondary btn-small" data-route="social">进入社媒审核</button><button class="btn btn-primary btn-small" data-route="app">查看 App 原型</button>`)}
    <div class="card">
      <div class="subtoolbar"><div><h3>推荐活动</h3><p>泰国业务线 · 最近 30 天演示数据</p></div><span class="tag tag-info">实时视图</span></div>
      <div class="crm-metrics">
        <div class="crm-metric"><span>已邀请好友</span><strong>128</strong><small>本月 +24</small></div>
        <div class="crm-metric"><span>完成首次试听</span><strong>86</strong><small>67.2% 试听率</small></div>
        <div class="crm-metric"><span>已付费转化</span><strong>34</strong><small>26.6% 付费率</small></div>
        <div class="crm-metric is-pending"><span>待处理奖励</span><strong>16</strong><small>含 3 条失败</small></div>
      </div>
      <div class="filter-bar">
        <div class="search-box">${icon("search")}<input class="input" id="activity-search" value="${esc(state.activitySearch)}" placeholder="搜索推荐 ID、邀请人、好友或 CC"></div>
        <select class="select" id="activity-status"><option value="all">全部奖励状态</option>${["已发放", "待发放", "发放失败", "跟进中", "无效"].map((status) => `<option value="${status}" ${state.activityStatus === status ? "selected" : ""}>${status}</option>`).join("")}</select>
        <span class="filter-count" id="activity-count">${rows.length} / ${REFERRALS.length} 条</span>
      </div>
      <div class="table-wrap"><table class="data-table"><thead><tr><th>Referral ID</th><th>邀请关系</th><th>CC Owner</th><th>绑定时间</th><th>首次试听</th><th>购买套餐</th><th>累计奖励</th><th>奖励状态</th></tr></thead><tbody id="activity-body">${activityRows(rows)}</tbody></table></div>
      <div class="table-footer"><span>点击记录查看奖励明细与发放时间线</span><span>手机号默认脱敏</span></div>
    </div>
  </section>`;
}

function filteredReferrals() {
  const query = state.activitySearch.trim().toLowerCase();
  return REFERRALS.filter((row) => (state.activityStatus === "all" || row.status === state.activityStatus) && (!query || [row.id, row.inviter, row.friend, row.owner, row.reward].join(" ").toLowerCase().includes(query)));
}
function activityRows(rows) {
  if (!rows.length) return `<tr><td colspan="8"><div class="empty-state"><strong>没有匹配记录</strong>调整筛选条件后再试。</div></td></tr>`;
  return rows.map((row) => `<tr data-referral="${row.id}"><td class="mono">${row.id}</td><td><span class="cell-title">${row.inviter} → ${row.friend}</span><span class="cell-sub">推荐关系已建立</span></td><td>${row.owner}</td><td>${row.bound}</td><td>${row.trial}</td><td>${row.plan}</td><td><strong>${row.reward}</strong></td><td>${statusTag(row.status)}</td></tr>`).join("");
}

function renderSocial() {
  const rows = SOCIAL_POSTS.filter((post) => state.socialFilter === "全部" || post.status === state.socialFilter);
  return `<section>
    ${pageHeading("Content Review", "Social Post Review", "审核课堂内容、授权状态和官方选中结果，审核通过后自动发放对应会员奖励。")}
    <div class="card">
      <div class="subtoolbar"><div><h3>社媒投稿</h3><p>有效投稿 +5 天；官方选中 +2 个月；有效未选中 +15 天</p></div><div class="segmented">${["全部", "待审核", "有效待选择", "有效未选中", "官方选中", "无效"].map((filter) => `<button class="${state.socialFilter === filter ? "is-active" : ""}" data-social-filter="${filter}">${filter}</button>`).join("")}</div></div>
      <div class="review-layout">${rows.length ? rows.map((post) => `<div class="review-card"><div><h4>${esc(post.content)}</h4><p>${esc(post.user)} · ${esc(post.channel)}</p><div class="review-meta"><span class="mono">${post.id}</span><span>${post.submitted}</span><span class="tag ${post.consent === "已授权" ? "tag-success" : "tag-neutral"}">${post.consent}</span>${statusTag(post.status)}</div></div><div class="review-actions"><button class="btn btn-small" data-review="${post.id}">查看与审核</button></div></div>`).join("") : `<div class="empty-state"><strong>当前筛选下没有投稿</strong>切换状态查看其他记录。</div>`}</div>
    </div>
  </section>`;
}

function renderApp() {
  const screens = [["invite", "邀请首页", "邀请链接、推荐码与奖励规则"], ["claim", "好友确认", "登录后确认推荐关系"], ["progress", "奖励进度", "试听、购买与到期时间"]];
  return `<section>
    ${pageHeading("Mobile Experience", "App 邀请体验", "模拟老用户发起邀请、好友确认绑定和奖励到账后的会员到期时间。")}
    <div class="phone-layout">
      <div class="phone-stage"><div class="phone"><div class="phone-screen"><div class="phone-notch"></div><div class="phone-content">${phoneContent()}</div></div></div></div>
      <div class="prototype-controls">
        <div class="control-card"><h3>切换 App 页面</h3><div class="screen-switch">${screens.map(([key, label, desc], index) => `<button class="${state.appScreen === key ? "is-active" : ""}" data-app-screen="${key}"><span>${label}<small style="display:block;color:var(--muted);font-size:10px">${desc}</small></span><b>0${index + 1}</b></button>`).join("")}</div></div>
        <div class="control-card"><h3>奖励模拟器</h3><div class="toggle-row"><div><strong style="display:block;font-size:12px">好友完成首次试听</strong><span style="color:var(--muted);font-size:10px">触发 +14 天</span></div><label class="switch"><input id="trial-complete" type="checkbox" ${state.rewardTrial ? "checked" : ""}><span></span></label></div><div style="margin-top:14px"><span style="display:block;margin-bottom:7px;color:var(--muted);font-size:10px">好友购买套餐</span><div class="option-row">${[3, 6, 12].map((months) => `<button class="${state.rewardPlan === months ? "is-active" : ""}" data-plan="${months}">${months} 个月</button>`).join("")}</div></div>${rewardCalculation()}</div>
        <div class="control-card"><h3>原型状态</h3><div class="timeline"><div class="timeline-item is-done"><strong>邀请链接已生成</strong><span>唯一推荐码 TH-MALEE-24</span></div><div class="timeline-item ${state.appBound ? "is-done" : "is-current"}"><strong>${state.appBound ? "好友已确认绑定" : "等待好友确认绑定"}</strong><span>${state.appBound ? "推荐关系已进入 CRM" : "在“好友确认”页面完成模拟"}</span></div><div class="timeline-item ${state.rewardTrial ? "is-done" : ""}"><strong>${state.rewardTrial ? "试听奖励已触发" : "首次试听待完成"}</strong><span>按照课程服务的完课事件判断</span></div></div></div>
      </div>
    </div>
  </section>`;
}

function phoneContent() {
  if (state.appScreen === "claim") return `<div class="phone-top"><div class="phone-logo"><i>D</i>Dino English</div><span class="phone-close">×</span></div><div class="invite-illustration"><div class="gift-illustration">${icon("gift")}</div></div><h2 class="phone-title">Malee 邀请你一起学英语</h2><p class="phone-copy">登录并确认推荐关系。你完成首次试听后，Malee 会获得 14 天会员奖励。</p><div class="invite-code-box"><span>推荐码</span><strong>TH-MALEE-24</strong></div><div class="phone-stats"><div><strong>+14</strong><span>邀请人奖励</span></div><div><strong>1 次</strong><span>仅可绑定一次</span></div><div><strong>TH</strong><span>泰国限定</span></div></div><button class="phone-cta" data-action="confirm-bind">${state.appBound ? "已确认推荐关系" : "确认并继续"}</button><button class="phone-ghost" data-app-screen="invite">返回邀请首页</button>`;
  if (state.appScreen === "progress") return `<div class="phone-top"><div class="phone-logo"><i>D</i>Refer a Friend</div><span class="phone-close">×</span></div><h2 class="phone-title">我的推荐奖励</h2><p class="phone-copy">奖励会在满足条件后自动延长会员有效期。</p><div class="phone-stats"><div><strong>8</strong><span>已邀请</span></div><div><strong>5</strong><span>已试听</span></div><div><strong>2</strong><span>已购买</span></div></div><div class="phone-timeline"><div class="phone-timeline-row is-done"><div class="phone-timeline-dot">✓</div><div><strong>Nok 已完成首次试听</strong><span>+14 天已发放</span></div></div><div class="phone-timeline-row ${state.rewardTrial ? "is-done" : "is-current"}"><div class="phone-timeline-dot">${state.rewardTrial ? "✓" : "2"}</div><div><strong>${state.rewardTrial ? "试听奖励已到账" : "等待好友完成试听"}</strong><span>会员到期日同步更新</span></div></div><div class="phone-timeline-row ${state.appBound ? "is-current" : ""}"><div class="phone-timeline-dot">3</div><div><strong>${state.rewardPlan} 个月套餐待购买</strong><span>首笔有效支付后奖励 ${state.rewardPlan === 3 ? 1 : state.rewardPlan === 6 ? 2 : 3} 个月</span></div></div></div><button class="phone-cta" data-route="activity">查看 CRM 奖励记录</button>`;
  return `<div class="phone-top"><div class="phone-logo"><i>D</i>Dino English</div><span class="phone-close">×</span></div><div class="invite-illustration"><div class="gift-illustration">${icon("gift")}</div></div><div class="eyebrow">REFER A FRIEND</div><h2 class="phone-title">把好课堂，分享给朋友</h2><p class="phone-copy">好友完成首次试听，你得 14 天会员；好友购买会员，最多再得 3 个月。</p><div class="invite-code-box"><span>你的专属推荐码</span><strong>TH-MALEE-24</strong></div><div class="phone-stats"><div><strong>8</strong><span>已邀请</span></div><div><strong>5</strong><span>已试听</span></div><div><strong>+44</strong><span>累计天数</span></div></div><button class="phone-cta" data-action="copy-code">复制邀请链接</button><button class="phone-ghost" data-app-screen="progress">查看奖励进度</button>`;
}

function addDays(date, days) { const result = new Date(date); result.setDate(result.getDate() + days); return result; }
function addMonths(date, months) { const result = new Date(date); result.setMonth(result.getMonth() + months); return result; }
function formatDate(date) { return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`; }
function rewardCalculation() {
  let expiry = new Date("2026-12-20T00:00:00+07:00");
  if (state.rewardTrial) expiry = addDays(expiry, 14);
  const months = state.rewardPlan === 3 ? 1 : state.rewardPlan === 6 ? 2 : 3;
  expiry = addMonths(expiry, months);
  return `<div class="calc-box"><div class="calc-line"><span>好友首次试听</span><strong>${state.rewardTrial ? "+14 天" : "未触发"}</strong></div><div class="calc-line"><span>好友购买 ${state.rewardPlan} 个月</span><strong>+${months} 个月</strong></div><div class="calc-line calc-total"><span>模拟新到期日</span><strong>${formatDate(expiry)}</strong></div></div>`;
}

function renderLedger() {
  const rows = REWARD_EVENTS.filter((row) => state.ledgerStatus === "all" || row.status === state.ledgerStatus);
  return `<section>
    ${pageHeading("Reward Ledger", "奖励流水", "每个奖励事件保留类型、时长、发放前后到期时间与当前状态。")}
    <div class="card">
      <div class="subtoolbar"><div><h3>Reward Events</h3><p>同一业务事件使用唯一 ID 幂等发放</p></div><select class="select" id="ledger-status"><option value="all">全部状态</option>${["已发放", "待发放", "发放失败"].map((status) => `<option value="${status}" ${state.ledgerStatus === status ? "selected" : ""}>${status}</option>`).join("")}</select></div>
      <div class="table-wrap"><table class="data-table"><thead><tr><th>奖励事件</th><th>邀请人</th><th>奖励类型</th><th>奖励时长</th><th>发放前到期</th><th>发放后到期</th><th>状态</th></tr></thead><tbody id="ledger-body">${ledgerRows(rows)}</tbody></table></div>
      <div class="table-footer"><span>所有奖励发放和冲正写入审计</span><span>${rows.length} / ${REWARD_EVENTS.length} 条</span></div>
    </div>
  </section>`;
}
function ledgerRows(rows) {
  return rows.length ? rows.map((row) => `<tr style="cursor:default"><td class="mono">${row.event}</td><td>${row.user}</td><td>${row.type}</td><td><span class="reward-amount">${row.amount}</span></td><td>${row.before}</td><td>${row.after}</td><td>${statusTag(row.status)}</td></tr>`).join("") : `<tr><td colspan="7"><div class="empty-state"><strong>当前筛选下没有奖励流水</strong></div></td></tr>`;
}

function renderRules() {
  return `<section>
    ${pageHeading("Business Rules", "规则与异常", "奖励单位、幂等、退款冲正和关键失败场景。")}
    <div class="rules-grid"><div class="rule-card"><div class="rule-icon">${icon("gift")}</div><h3>奖励单位</h3><p>试听和社媒按自然日，购买按自然月延长会员。本期不发现金、优惠券或积分。</p></div><div class="rule-card"><div class="rule-icon">${icon("check")}</div><h3>幂等与一次奖励</h3><p>同一业务事件只生成一条奖励；每个好友的试听奖励和购买奖励各一次。</p></div><div class="rule-card"><div class="rule-icon">${icon("decision")}</div><h3>退款冲正</h3><p>先冻结，退款最终成立后从未来会员时长尾部扣回；不回溯已经使用的时长。</p></div></div>
    <div class="decision-strip"><strong>待确认</strong>${OPEN_ITEMS.map((item) => `<span class="tag tag-warning">${esc(item)}</span>`).join("")}</div>
    <div class="card"><div class="card-head"><div><h3 class="section-title">关键异常矩阵</h3><p>场景、系统处理与恢复方式</p></div><button class="btn btn-small btn-secondary" data-action="copy-rules">复制规则摘要</button></div><div class="table-wrap"><table class="data-table"><thead><tr><th>ID</th><th>场景</th><th>系统处理</th><th>恢复方式</th></tr></thead><tbody>${EXCEPTIONS.map((item) => `<tr style="cursor:default"><td class="mono">${item.id}</td><td class="cell-title">${esc(item.scenario)}</td><td>${esc(item.action)}</td><td>${esc(item.recovery)}</td></tr>`).join("")}</tbody></table></div></div>
  </section>`;
}

function openDrawer(header, body) {
  drawer.innerHTML = `<div class="drawer-head"><div>${header}</div><button class="icon-btn" data-action="close-drawer" aria-label="关闭">${icon("close")}</button></div><div class="drawer-body">${body}</div>`;
  drawerLayer.classList.add("is-open");
  drawerLayer.setAttribute("aria-hidden", "false");
}
function closeDrawer() {
  drawerLayer.classList.remove("is-open");
  drawerLayer.setAttribute("aria-hidden", "true");
  setTimeout(() => { if (!drawerLayer.classList.contains("is-open")) drawer.innerHTML = ""; }, 230);
}
function openReferral(id) {
  const row = REFERRALS.find((item) => item.id === id);
  if (!row) return;
  openDrawer(`<div><small>${row.id}</small><h3>${row.inviter} → ${row.friend}</h3></div>`, `<div class="drawer-block"><dl class="drawer-facts"><dt>CC Owner</dt><dd>${row.owner}</dd><dt>绑定时间</dt><dd>${row.bound}</dd><dt>首次试听</dt><dd>${row.trial}</dd><dt>购买套餐</dt><dd>${row.plan}</dd><dt>累计奖励</dt><dd>${row.reward}</dd><dt>奖励状态</dt><dd>${statusTag(row.status)}</dd></dl></div><div class="drawer-block"><h4>奖励时间线</h4><div class="timeline"><div class="timeline-item is-done"><strong>推荐关系已绑定</strong><span>${row.bound} · 来源已记录</span></div><div class="timeline-item ${row.trial === "已完成" ? "is-done" : "is-current"}"><strong>${row.trial === "已完成" ? "首次试听完成，+14 天已触发" : "等待首次试听结果"}</strong><span>课程服务事件驱动</span></div><div class="timeline-item ${row.plan !== "—" ? "is-done" : ""}"><strong>${row.plan !== "—" ? `${row.plan}购买奖励已生成` : "尚未产生有效购买"}</strong><span>订单支付成功后才触发</span></div><div class="timeline-item ${row.status === "已发放" ? "is-done" : "is-current"}"><strong>${row.status}</strong><span>会员权益服务与审计</span></div></div></div><div class="drawer-actions"><button class="btn btn-small btn-secondary" data-action="copy" data-copy="${row.id}">复制 Referral ID</button></div>`);
}
function openReview(id) {
  const post = SOCIAL_POSTS.find((item) => item.id === id);
  if (!post) return;
  const canSelect = post.consent === "已授权";
  openDrawer(`<div><small>${post.id}</small><h3>审核社媒投稿</h3></div>`, `<div class="drawer-block"><dl class="drawer-facts"><dt>用户</dt><dd>${esc(post.user)}</dd><dt>渠道</dt><dd>${esc(post.channel)}</dd><dt>提交时间</dt><dd>${post.submitted}</dd><dt>内容</dt><dd>${esc(post.content)}</dd><dt>官方授权</dt><dd>${post.consent}</dd><dt>当前状态</dt><dd>${statusTag(post.status)}</dd></dl></div><div class="drawer-block"><h4>审核规则</h4><div class="drawer-note">有效内容先奖励 +5 天。官方选中再 +2 个月；有效但未选中再 +15 天。未授权官方使用时不能标记为已选中。</div></div><div class="drawer-actions"><button class="btn btn-primary btn-small" data-review-action="valid" data-review-id="${post.id}">标记有效并 +5 天</button><button class="btn btn-small" data-review-action="selected" data-review-id="${post.id}" ${canSelect ? "" : "disabled"}>官方选中</button><button class="btn btn-small" data-review-action="not-selected" data-review-id="${post.id}">有效未选中</button><button class="btn btn-danger btn-small" data-review-action="invalid" data-review-id="${post.id}">标记无效</button></div>`);
}

function updateActivity() {
  const rows = filteredReferrals();
  const body = document.querySelector("#activity-body");
  if (!body) return;
  body.innerHTML = activityRows(rows);
  document.querySelector("#activity-count").textContent = `${rows.length} / ${REFERRALS.length} 条`;
}
function updateLedger() {
  const rows = REWARD_EVENTS.filter((row) => state.ledgerStatus === "all" || row.status === state.ledgerStatus);
  document.querySelector("#ledger-body").innerHTML = ledgerRows(rows);
  document.querySelector(".table-footer:last-child span:last-child").textContent = `${rows.length} / ${REWARD_EVENTS.length} 条`;
}

document.addEventListener("click", (event) => {
  const route = event.target.closest("[data-route]");
  if (route) {
    navigate(route.dataset.route);
    document.querySelector("#sidebar").classList.remove("is-open");
    return;
  }
  const referral = event.target.closest("[data-referral]");
  if (referral) return openReferral(referral.dataset.referral);
  const review = event.target.closest("[data-review]");
  if (review) return openReview(review.dataset.review);
  const flow = event.target.closest("[data-flow]");
  if (flow) {
    state.flow = flow.dataset.flow;
    const step = FLOW_STEPS.find((item) => item.key === state.flow);
    document.querySelectorAll("[data-flow]").forEach((item) => item.classList.toggle("is-active", item === flow));
    document.querySelector("#flow-inspector").innerHTML = `<div><h4>${esc(step.title)}</h4><p>${esc(step.trigger)}</p></div><dl class="kv"><dt>系统</dt><dd>${esc(step.system)}</dd><dt>业务输出</dt><dd>${esc(step.output)}</dd><dt>失败处理</dt><dd>${esc(step.failure)}</dd></dl>`;
    return;
  }
  const screen = event.target.closest("[data-app-screen]");
  if (screen) { state.appScreen = screen.dataset.appScreen; render(); return; }
  const plan = event.target.closest("[data-plan]");
  if (plan) { state.rewardPlan = Number(plan.dataset.plan); render(); return; }
  const socialFilter = event.target.closest("[data-social-filter]");
  if (socialFilter) { state.socialFilter = socialFilter.dataset.socialFilter; render(); return; }
  const reviewAction = event.target.closest("[data-review-action]");
  if (reviewAction) {
    const post = SOCIAL_POSTS.find((item) => item.id === reviewAction.dataset.reviewId);
    if (!post) return;
    const action = reviewAction.dataset.reviewAction;
    post.status = action === "invalid" ? "无效" : action === "selected" ? "官方选中" : action === "not-selected" ? "有效未选中" : "有效待选择";
    render();
    openReview(post.id);
    notify("原型状态已更新，未写入真实业务数据");
    return;
  }
  const action = event.target.closest("[data-action]")?.dataset.action;
  if (!action) return;
  if (action === "close-drawer") return closeDrawer();
  if (action === "confirm-bind") { state.appBound = true; render(); notify("推荐关系已确认，CRM 将创建或关联 Lead"); return; }
  if (action === "copy-code") { if (navigator.clipboard) navigator.clipboard.writeText("https://dino.ai/invite/TH-MALEE-24").catch(() => {}); notify("邀请链接已复制"); return; }
  if (action === "copy-rules") { if (navigator.clipboard) navigator.clipboard.writeText("首次试听 +14 天；购买 3/6/12 个月奖励 1/2/3 个月；社媒 +5 天，官方选中 +2 个月，未选中 +15 天。").catch(() => {}); notify("奖励规则摘要已复制"); return; }
  if (action === "copy") { const copy = event.target.closest("[data-copy]")?.dataset.copy || ""; if (navigator.clipboard) navigator.clipboard.writeText(copy).catch(() => {}); notify(`${copy} 已复制`); }
});

document.addEventListener("input", (event) => {
  if (event.target.id === "activity-search") { state.activitySearch = event.target.value; updateActivity(); }
});
document.addEventListener("change", (event) => {
  if (event.target.id === "activity-status") { state.activityStatus = event.target.value; updateActivity(); }
  if (event.target.id === "ledger-status") { state.ledgerStatus = event.target.value; updateLedger(); }
  if (event.target.id === "trial-complete") { state.rewardTrial = event.target.checked; render(); }
});

document.querySelector("#menu-toggle").addEventListener("click", () => document.querySelector("#sidebar").classList.toggle("is-open"));
document.addEventListener("keydown", (event) => { if (event.key === "Escape") closeDrawer(); });
window.addEventListener("hashchange", () => { closeDrawer(); render(); window.scrollTo({ top: 0, behavior: "smooth" }); });

render();
