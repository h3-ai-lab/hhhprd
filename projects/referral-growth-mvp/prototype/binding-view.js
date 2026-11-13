(() => {
const TEXT = {
  zh: {
    "document.title": "拉新关系 · Dino CRM",
    "nav.business": "业务管理",
    "nav.dashboard": "管理看板",
    "nav.userList": "用户列表",
    "nav.sales": "销售中心",
    "nav.orders": "订单中心",
    "nav.marketing": "营销与增长",
    "nav.growth": "拉新关系",
    "nav.bindings": "拉新关系维护",
    "nav.users": "用户管理",
    "nav.system": "系统管理",
    "nav.settings": "系统配置",
    "footer.status": "服务运行正常",
    "footer.updated": "数据更新于刚刚",
    "env.production": "生产环境",
    "aria.openMenu": "展开菜单",
    "crumb.marketing": "营销中心",
    "bindings.title": "拉新关系维护",
    "bindings.subtitle": "先绑定关系，后由业务事件自动发放权益",
    "bindings.newSocial": "登记社媒推荐",
    "bindings.newReferral": "新建好友推荐",
    "bindings.bound": "已绑定关系",
    "bindings.boundNote": "等待首课、购买或归属异常处理",
    "bindings.pending": "待注册绑定",
    "bindings.pendingNote": "注册后按手机号自动关联用户",
    "bindings.automatic": "自动发放",
    "bindings.automaticNote": "首课、购买与社媒事件",
    "bindings.tabReferral": "好友推荐",
    "bindings.tabSocial": "社媒推荐",
    "bindings.tabEvents": "奖励事件",
    "bindings.referralList": "好友推荐关系",
    "bindings.ruleOne": "规则：",
    "bindings.ruleOneText": "先绑定，后自动发奖",
    "bindings.socialList": "社媒推荐内容",
    "bindings.platformNote": "数据：",
    "bindings.platformNoteText": "平台、内容类型、授权状态、内容状态",
    "bindings.eventList": "自动奖励事件",
    "bindings.eventNote": "说明：",
    "bindings.eventNoteText": "绑定状态和奖励状态分开维护",
    "bindings.page": "第 1 页",
    "bindings.count": "共 {count} 条记录",
    "unified.title": "统一拉新记录",
    "unified.note": "口径：",
    "unified.noteText": "绑定、奖励事件、赠送订单和权益状态在同一列表追踪",
    "unified.empty": "当前筛选下没有拉新记录",
    "unified.keywordPlaceholder": "用户 ID / 手机号 / 事件 ID / 订单 ID",
    "unified.count": "共 {count} 条记录",
    "business.thailand": "泰国",
    "table.referrer": "推荐人",
    "table.referred": "被推荐人",
    "table.referredPhone": "被推荐人手机号",
    "table.businessLine": "业务线",
    "table.owner": "归属 CC",
    "table.bindStatus": "绑定状态",
    "table.boundAt": "绑定时间",
    "table.nextTrigger": "下一触发",
    "table.latestReward": "最近奖励",
    "table.user": "用户",
    "table.platform": "平台",
    "table.contentType": "内容类型",
    "table.contentStatus": "内容状态",
    "table.authorization": "官方使用授权",
    "table.publishedAt": "发布时间",
    "table.operator": "操作 CC",
    "table.reward": "奖励",
    "table.status": "权益状态",
    "table.eventType": "事件类型",
    "table.eventSourceId": "业务事件 ID",
    "table.triggeredAt": "触发时间",
    "table.benefit": "奖励值",
    "table.failureReason": "失败原因",
    "table.record": "业务记录",
    "table.related": "关联对象",
    "table.triggerEvent": "触发事件",
    "table.giftOrder": "赠送订单",
    "source.referral": "拉新推荐",
    "source.social": "社媒推荐",
    "bindStatus.bound": "已绑定",
    "bindStatus.pending": "待注册",
    "bindStatus.invalid": "已失效",
    "eventStatus.waiting": "待触发",
    "eventStatus.processing": "待发放",
    "eventStatus.issued": "已发放",
    "eventStatus.failed": "发放失败",
    "giftStatus.CREATED": "已生成，待发放",
    "giftStatus.FULFILLED": "已完成",
    "giftStatus.NOT_CREATED": "未生成",
    "trigger.firstTrial": "等待首课完课",
    "trigger.purchase": "等待首次购买",
    "trigger.socialReview": "等待社媒状态",
    "trigger.assignment": "处理归属异常",
    "reward.firstTrial": "+14 天",
    "reward.purchase": "+{count} 个月",
    "reward.published": "+5 天",
    "reward.notSelected": "+15 天",
    "reward.selected": "+2 个月",
    "reward.none": "—",
    "platform.facebook": "Facebook",
    "platform.instagram": "Instagram",
    "platform.tiktok": "TikTok",
    "platform.youtube": "YouTube",
    "platform.other": "其他",
    "social.photo": "图片",
    "social.video": "视频",
    "social.authorized": "已授权",
    "social.notAuthorized": "未授权",
    "social.published": "已发布",
    "social.notSelected": "有效未选中",
    "social.selected": "官方选中",
    "social.invalid": "无效",
    "referralModal.title": "新建好友推荐",
    "referralModal.subtitle": "仅绑定关系，不发放会员权益",
    "referralModal.referrer": "推荐人",
    "referralModal.phone": "被推荐人手机号",
    "referralModal.verify": "核验",
    "referralModal.verifyNote": "按推荐人业务线匹配；未注册手机号可创建待注册预绑定",
    "referralModal.note": "绑定备注",
    "referralModal.notePlaceholder": "例如父母与孩子的对应关系",
    "referralModal.enumLabel": "绑定状态枚举：",
    "referralModal.confirm": "确认绑定",
    "referralModal.empty": "请输入被推荐人手机号",
    "referralModal.invalidPhone": "手机号格式无效",
    "referralModal.self": "该手机号属于推荐人本人，不能绑定自荐关系",
    "referralModal.otherLine": "手机号用户属于越南业务线，与推荐人泰国业务线不一致",
    "referralModal.existing": "Narin K. · 同业务线已注册用户",
    "referralModal.eligible": "可绑定：用户与推荐人同属泰国业务线",
    "referralModal.pending": "该手机号尚未注册，将创建待注册预绑定",
    "referralModal.success": "关系已绑定，奖励将在业务事件到达后自动发放",
    "socialModal.title": "登记社媒推荐",
    "socialModal.subtitle": "先保存内容记录，状态变化后自动发奖",
    "socialModal.user": "发布用户",
    "socialModal.platform": "发布平台",
    "socialModal.contentType": "内容类型",
    "socialModal.link": "内容链接",
    "socialModal.authorization": "官方使用授权",
    "socialModal.status": "内容状态",
    "socialModal.enumLabel": "数据枚举：",
    "socialModal.confirm": "保存记录",
    "socialModal.emptyLink": "请输入内容链接",
    "socialModal.authRequired": "选择官方选中前必须取得官方使用授权",
    "socialModal.success": "社媒推荐已保存，奖励事件已按状态自动生成",
    "common.cancel": "取消",
    "common.close": "关闭",
    "toast.registered": "已打开推荐人 Pimchanok S. 的关系维护",
  },
  en: {
    "document.title": "Growth Relationships · Dino CRM",
    "nav.business": "Business",
    "nav.dashboard": "Management Dashboard",
    "nav.userList": "User List",
    "nav.sales": "Sales Center",
    "nav.orders": "Order Center",
    "nav.marketing": "Marketing & Growth",
    "nav.growth": "Growth Relationships",
    "nav.bindings": "Growth Relationships",
    "nav.users": "User Management",
    "nav.system": "System",
    "nav.settings": "System Settings",
    "footer.status": "All services operational",
    "footer.updated": "Data updated just now",
    "env.production": "Production",
    "aria.openMenu": "Open navigation",
    "crumb.marketing": "Marketing",
    "bindings.title": "Growth Relationships",
    "bindings.subtitle": "Link the relationship first; issue benefits later from business events",
    "bindings.newSocial": "Add social recommendation",
    "bindings.newReferral": "New friend referral",
    "bindings.bound": "Linked relationships",
    "bindings.boundNote": "Awaiting first lesson, purchase, or assignment review",
    "bindings.pending": "Pending registration",
    "bindings.pendingNote": "Phone is linked to a user after registration",
    "bindings.automatic": "Automatic issuance",
    "bindings.automaticNote": "First lesson, purchase, and social events",
    "bindings.tabReferral": "Friend referrals",
    "bindings.tabSocial": "Social recommendations",
    "bindings.tabEvents": "Reward events",
    "bindings.referralList": "Friend Referral Relationships",
    "bindings.ruleOne": "Rule: ",
    "bindings.ruleOneText": "Link first, issue automatically later",
    "bindings.socialList": "Social Recommendation Content",
    "bindings.platformNote": "Data: ",
    "bindings.platformNoteText": "Platform, content type, authorization, content status",
    "bindings.eventList": "Automatic Reward Events",
    "bindings.eventNote": "Note: ",
    "bindings.eventNoteText": "Binding status and reward status are independent",
    "bindings.page": "Page 1",
    "bindings.count": "{count} records",
    "unified.title": "Unified Growth Records",
    "unified.note": "Scope: ",
    "unified.noteText": "Binding, reward events, gift orders, and benefit status are tracked in one list",
    "unified.empty": "No growth records match the current filters",
    "unified.keywordPlaceholder": "User ID / phone / event ID / order ID",
    "unified.count": "{count} records",
    "business.thailand": "Thailand",
    "table.referrer": "Referrer",
    "table.referred": "Referred user",
    "table.referredPhone": "Referred phone",
    "table.businessLine": "Business line",
    "table.owner": "Owner CC",
    "table.bindStatus": "Binding status",
    "table.boundAt": "Linked at",
    "table.nextTrigger": "Next trigger",
    "table.latestReward": "Latest reward",
    "table.user": "User",
    "table.platform": "Platform",
    "table.contentType": "Content type",
    "table.contentStatus": "Content status",
    "table.authorization": "Official-use authorization",
    "table.publishedAt": "Published at",
    "table.operator": "Operator CC",
    "table.reward": "Reward",
    "table.status": "Benefit status",
    "table.eventType": "Event type",
    "table.eventSourceId": "Business event ID",
    "table.triggeredAt": "Triggered at",
    "table.benefit": "Benefit",
    "table.failureReason": "Failure reason",
    "table.record": "Business record",
    "table.related": "Related object",
    "table.triggerEvent": "Trigger event",
    "table.giftOrder": "Gift order",
    "source.referral": "Referral",
    "source.social": "Social recommendation",
    "bindStatus.bound": "Linked",
    "bindStatus.pending": "Pending registration",
    "bindStatus.invalid": "Invalid",
    "eventStatus.waiting": "Waiting",
    "eventStatus.processing": "Pending issuance",
    "eventStatus.issued": "Issued",
    "eventStatus.failed": "System failure",
    "giftStatus.CREATED": "Created, pending fulfillment",
    "giftStatus.FULFILLED": "Fulfilled",
    "giftStatus.NOT_CREATED": "Not created",
    "trigger.firstTrial": "Awaiting first lesson completion",
    "trigger.purchase": "Awaiting first purchase",
    "trigger.socialReview": "Awaiting social status",
    "trigger.assignment": "Assignment review",
    "reward.firstTrial": "+14 days",
    "reward.purchase": "+{count} months",
    "reward.published": "+5 days",
    "reward.notSelected": "+15 days",
    "reward.selected": "+2 months",
    "reward.none": "—",
    "platform.facebook": "Facebook",
    "platform.instagram": "Instagram",
    "platform.tiktok": "TikTok",
    "platform.youtube": "YouTube",
    "platform.other": "Other",
    "social.photo": "Photo",
    "social.video": "Video",
    "social.authorized": "Authorized",
    "social.notAuthorized": "Not authorized",
    "social.published": "Published",
    "social.notSelected": "Valid, not selected",
    "social.selected": "Officially selected",
    "social.invalid": "Invalid",
    "referralModal.title": "New Friend Referral",
    "referralModal.subtitle": "Link the relationship only; no membership benefit is issued",
    "referralModal.referrer": "Referrer",
    "referralModal.phone": "Referred user phone",
    "referralModal.verify": "Verify",
    "referralModal.verifyNote": "Match within the referrer's business line; an unregistered phone can be reserved",
    "referralModal.note": "Binding note",
    "referralModal.notePlaceholder": "For example, the parent-child relationship",
    "referralModal.enumLabel": "Binding status enums: ",
    "referralModal.confirm": "Confirm link",
    "referralModal.empty": "Enter the referred user's phone number",
    "referralModal.invalidPhone": "Invalid phone number",
    "referralModal.self": "This phone belongs to the referrer and cannot be used for self-referral",
    "referralModal.otherLine": "This phone belongs to the Vietnam business line, which does not match the referrer's Thailand business line",
    "referralModal.existing": "Narin K. · Registered in the same business line",
    "referralModal.eligible": "Eligible: the user and referrer are both in the Thailand business line",
    "referralModal.pending": "This phone is not registered yet. A pending-registration link will be created.",
    "referralModal.success": "Relationship linked. Rewards will be issued automatically when business events arrive.",
    "socialModal.title": "Add Social Recommendation",
    "socialModal.subtitle": "Save the content first; status changes trigger rewards automatically",
    "socialModal.user": "Publishing user",
    "socialModal.platform": "Platform",
    "socialModal.contentType": "Content type",
    "socialModal.link": "Content link",
    "socialModal.authorization": "Official-use authorization",
    "socialModal.status": "Content status",
    "socialModal.enumLabel": "Data enums: ",
    "socialModal.confirm": "Save record",
    "socialModal.emptyLink": "Enter the content link",
    "socialModal.authRequired": "Official-use authorization is required before selecting the official-selection status",
    "socialModal.success": "Social recommendation saved. Reward events were generated from the content status.",
    "common.cancel": "Cancel",
    "common.close": "Close",
    "toast.registered": "Opened relationship management for referrer Pimchanok S.",
  },
};

const state = {
  lang: "zh",
  tab: "referral",
  bindingType: "",
  verified: false,
  phoneUser: null,
  bindingResult: null,
  socialNoticeKey: "",
  toastKey: "",
  referrer: {
    id: "2120302255148482561",
    name: "Pimchanok S.",
    owner: "Thanya C.",
  },
};

const referrals = [
  {
    id: "BIND-202611-0198",
    referrerId: "2120302255148482561",
    referrer: "Pimchanok S.",
    referredId: "2120302295478341",
    referred: "Narin K.",
    phone: "+66 81 **** 5678",
    line: "thailand",
    owner: "Thanya C.",
    bindingStatus: "bound",
    boundAt: "2026-11-08",
    nextTrigger: "trigger.purchase",
    latestReward: "reward.firstTrial",
    rewardStatus: "issued",
    planMonths: 3,
    giftOrderId: "GRT202611080041",
    giftOrderStatus: "FULFILLED",
  },
  {
    id: "BIND-202611-0204",
    referrerId: "2120302281472036721",
    referrer: "Kanya R.",
    referredId: "",
    referred: "—",
    phone: "+66 90 **** 2018",
    line: "thailand",
    owner: "Mina P.",
    bindingStatus: "pending",
    boundAt: "2026-11-09",
    nextTrigger: "trigger.firstTrial",
    latestReward: "reward.none",
    rewardStatus: "waiting",
    giftOrderId: "—",
    giftOrderStatus: "NOT_CREATED",
  },
  {
    id: "BIND-202611-0186",
    referrerId: "2120302210461928824",
    referrer: "Arunee T.",
    referredId: "2120302273820914407",
    referred: "Siriporn W.",
    phone: "+66 88 **** 1234",
    line: "thailand",
    owner: "Nok S.",
    bindingStatus: "bound",
    boundAt: "2026-11-06",
    nextTrigger: "trigger.assignment",
    latestReward: "reward.purchase",
    planMonths: 12,
    rewardMonths: 3,
    rewardStatus: "processing",
    giftOrderId: "GRT202611090018",
    giftOrderStatus: "CREATED",
  },
  {
    id: "BIND-202611-0172",
    referrerId: "2120302266318527041",
    referrer: "Chanida B.",
    referredId: "2120302229098319490",
    referred: "Araya N.",
    phone: "+66 95 **** 7777",
    line: "thailand",
    owner: "Mina P.",
    bindingStatus: "bound",
    boundAt: "2026-11-04",
    nextTrigger: "trigger.firstTrial",
    latestReward: "reward.none",
    rewardStatus: "waiting",
    giftOrderId: "—",
    giftOrderStatus: "NOT_CREATED",
  },
];

const socialRecords = [
  {
    id: "SOC-202611-0031",
    user: "Pimchanok S.",
    platform: "FACEBOOK",
    contentType: "social.photo",
    contentStatus: "social.selected",
    authorization: "social.authorized",
    publishedAt: "2026-11-06",
    operator: "Mira T.",
    reward: "reward.published",
    rewardDetail: "reward.selected",
    status: "issued",
    giftOrderId: "GRT202611080056",
    giftOrderStatus: "FULFILLED",
  },
  {
    id: "SOC-202611-0034",
    user: "Kanya R.",
    platform: "TIKTOK",
    contentType: "social.video",
    contentStatus: "social.notSelected",
    authorization: "social.notAuthorized",
    publishedAt: "2026-11-07",
    operator: "Mira T.",
    reward: "reward.published",
    rewardDetail: "reward.notSelected",
    status: "issued",
    giftOrderId: "GRT202611090072",
    giftOrderStatus: "FULFILLED",
  },
  {
    id: "SOC-202611-0038",
    user: "Arunee T.",
    platform: "INSTAGRAM",
    contentType: "social.photo",
    contentStatus: "social.published",
    authorization: "social.notAuthorized",
    publishedAt: "2026-11-09",
    operator: "Mira T.",
    reward: "reward.published",
    rewardDetail: "",
    status: "processing",
    giftOrderId: "GRT202611090069",
    giftOrderStatus: "CREATED",
  },
];

const rewardEvents = [
  {
    type: "REFERRAL_FIRST_TRIAL_COMPLETED",
    sourceId: "LSN-20261108-3041",
    triggeredAt: "2026-11-08 16:42",
    benefit: "reward.firstTrial",
    status: "issued",
    giftOrderId: "GRT202611080041",
  },
  {
    type: "REFERRAL_FIRST_PURCHASE_3M",
    sourceId: "ORD-PO202611090021",
    triggeredAt: "2026-11-09 20:16",
    benefit: "reward.purchase",
    months: 1,
    status: "processing",
    giftOrderId: "GRT202611090018",
  },
  {
    type: "SOCIAL_POST_PUBLISHED",
    sourceId: "SOC-202611-0031",
    triggeredAt: "2026-11-06 19:18",
    benefit: "reward.published",
    status: "issued",
    giftOrderId: "GRT202611060033",
  },
  {
    type: "SOCIAL_POST_OFFICIALLY_SELECTED",
    sourceId: "SOC-202611-0031",
    triggeredAt: "2026-11-08 11:20",
    benefit: "reward.selected",
    status: "issued",
    giftOrderId: "GRT202611080056",
  },
  {
    type: "SOCIAL_POST_NOT_SELECTED",
    sourceId: "SOC-202611-0034",
    triggeredAt: "2026-11-09 15:05",
    benefit: "reward.notSelected",
    status: "issued",
    giftOrderId: "GRT202611090072",
  },
];

function t(key, values = {}) {
  const template = TEXT[state.lang]?.[key] ?? TEXT.zh[key] ?? key;
  return template.replace(/\{(\w+)\}/g, (_, name) => String(values[name] ?? `{${name}}`));
}

function normalizePhone(value) {
  return value.replace(/[^\d+]/g, "").replace(/(?!^)\+/g, "");
}

function maskPhone(value) {
  const normalized = normalizePhone(value);
  if (normalized.length < 8) return normalized;
  const prefix = normalized.slice(0, 4);
  const suffix = normalized.slice(-4);
  return `${prefix} **** ${suffix}`;
}

function statusLabel(key) {
  return `<span class="status ${key === "bound" ? "bound" : key}">${t(`bindStatus.${key}`)}</span>`;
}

function rewardStatusLabel(key) {
  const cls = key === "issued" ? "success" : key === "failed" ? "failed" : "processing";
  return `<span class="status ${cls}">${t(`eventStatus.${key}`)}</span>`;
}

function renderBindingResult() {
  const result = document.getElementById("bindingResult");
  if (!state.bindingResult) {
    result.hidden = true;
    result.textContent = "";
    return;
  }
  result.hidden = false;
  result.className = "relation-hint";
  if (state.bindingResult.kind === "existing") {
    result.innerHTML = `<strong>${t("referralModal.existing")}</strong><span>${t("referralModal.eligible")}</span><span class="mono">2120302295478341</span>`;
    return;
  }
  if (state.bindingResult.kind === "pending") {
    result.textContent = t("referralModal.pending");
    result.classList.add("is-pending");
    return;
  }
  result.textContent = t(state.bindingResult.key);
  result.classList.add("is-error");
}

function platformLabel(value) {
  if (value === "OTHER") return t("platform.other");
  return value.charAt(0) + value.slice(1).toLowerCase();
}

function bindingSourceLabel(value) {
  return t(value === "social" ? "source.social" : "source.referral");
}

function renderReferrerSummary() {
  document.getElementById("referrerSummary").textContent =
    `${state.referrer.name} · ${state.referrer.id} · ${t("business.thailand")} · CC: ${state.referrer.owner}`;
}

function renderReferrals() {
  document.getElementById("referralRows").innerHTML = referrals.map((row) => `
    <tr>
      <td><span class="mono">${row.referrerId}</span><span class="secondary">${row.referrer}</span></td>
      <td><span class="mono">${row.referredId || "—"}</span><span class="secondary">${row.referred}</span></td>
      <td class="mono">${row.phone}</td>
      <td>${t("business.thailand")}</td>
      <td>${row.owner}</td>
      <td>${statusLabel(row.bindingStatus)}</td>
      <td>${row.boundAt}</td>
      <td>${t(row.nextTrigger)}</td>
      <td>${t(row.latestReward, { count: row.rewardMonths })} ${rewardStatusLabel(row.rewardStatus)}</td>
    </tr>`).join("");
  document.getElementById("referralCount").textContent = t("bindings.count", { count: referrals.length });
}

function renderSocial() {
  document.getElementById("socialRows").innerHTML = socialRecords.map((row) => {
    const rewardText = row.rewardDetail ? `${t(row.reward)} + ${t(row.rewardDetail)}` : t(row.reward);
    return `
      <tr>
        <td>${row.user}</td>
        <td>${platformLabel(row.platform)}</td>
        <td>${t(row.contentType)}</td>
        <td>${t(row.contentStatus)}</td>
        <td>${t(row.authorization)}</td>
        <td>${row.publishedAt}</td>
        <td>${row.operator}</td>
        <td>${rewardText}</td>
        <td>${rewardStatusLabel(row.status)}</td>
      </tr>`;
  }).join("");
  document.getElementById("socialCount").textContent = t("bindings.count", { count: socialRecords.length });
  if (state.socialNoticeKey) document.getElementById("socialNotice").textContent = t(state.socialNoticeKey);
}

function renderEvents() {
  document.getElementById("eventRows").innerHTML = rewardEvents.map((row) => `
    <tr>
      <td><span class="event-type">${row.type}</span></td>
      <td class="mono">${row.sourceId}</td>
      <td>${row.triggeredAt}</td>
      <td class="event-value ${row.benefit.includes("purchase") || row.benefit.includes("selected") ? "month" : "benefit"}">${t(row.benefit, { count: row.months })}</td>
      <td>${rewardStatusLabel(row.status)}</td>
      <td>${row.status === "failed" ? "ENTITLEMENT_REQUEST_TIMEOUT" : "—"}</td>
    </tr>`).join("");
  document.getElementById("eventCount").textContent = t("bindings.count", { count: rewardEvents.length });
}

function unifiedRows() {
  const referralRows = referrals.map((row) => ({
    id: row.id,
    source: "referral",
    user: row.referrer,
    userId: row.referrerId,
    related: row.referredId ? `${row.referred} · ${row.phone}` : `${row.referred} · ${row.phone}`,
    owner: row.owner,
    bindingStatus: row.bindingStatus,
    eventType: row.latestReward === "reward.firstTrial"
      ? "REFERRAL_FIRST_TRIAL_COMPLETED"
      : row.latestReward === "reward.purchase"
        ? `REFERRAL_FIRST_PURCHASE_${row.planMonths}M`
        : "—",
    reward: t(row.latestReward, { count: row.rewardMonths }),
    rewardStatus: row.rewardStatus,
    giftOrderId: row.giftOrderId,
    giftOrderStatus: row.giftOrderStatus,
    date: row.boundAt,
    keywords: [row.id, row.referrerId, row.referredId, row.phone, row.giftOrderId, row.referrer, row.referred],
  }));
  const socialRows = socialRecords.map((row) => ({
    id: row.id,
    source: "social",
    user: row.user,
    userId: "",
    related: `${platformLabel(row.platform)} · ${t(row.contentType)}`,
    owner: "Thanya C.",
    bindingStatus: "bound",
    bindingText: row.contentStatus,
    eventType: row.rewardDetail ? `SOCIAL_POST_${row.rewardDetail === "reward.selected" ? "OFFICIALLY_SELECTED" : "NOT_SELECTED"}` : "SOCIAL_POST_PUBLISHED",
    reward: row.rewardDetail ? `${t(row.reward)} + ${t(row.rewardDetail)}` : t(row.reward),
    rewardStatus: row.status,
    giftOrderId: row.giftOrderId,
    giftOrderStatus: row.giftOrderStatus,
    date: row.publishedAt,
    keywords: [row.id, row.user, row.giftOrderId, row.platform, t(row.contentStatus)],
  }));
  return [...referralRows, ...socialRows];
}

function renderUnified() {
  const source = document.getElementById("unifiedSourceFilter").value;
  const owner = document.getElementById("unifiedCcFilter").value;
  const bindingStatus = document.getElementById("unifiedBindingFilter").value;
  const rewardStatus = document.getElementById("unifiedRewardFilter").value;
  const keyword = document.getElementById("unifiedKeywordFilter").value.trim().toLowerCase();
  const start = document.getElementById("unifiedStartDate").value;
  const end = document.getElementById("unifiedEndDate").value;
  const rows = unifiedRows().filter((row) => {
    const sourceMatch = !source || row.source === source;
    const ownerMatch = !owner || row.owner === owner;
    const bindingMatch = !bindingStatus || row.bindingStatus === bindingStatus;
    const rewardMatch = !rewardStatus || row.rewardStatus === rewardStatus;
    const keywordMatch = !keyword || row.keywords.some((value) => String(value || "").toLowerCase().includes(keyword));
    const dateMatch = (!start || row.date >= start) && (!end || row.date <= end);
    return sourceMatch && ownerMatch && bindingMatch && rewardMatch && keywordMatch && dateMatch;
  });
  const body = document.getElementById("unifiedRows");
  body.innerHTML = rows.map((row) => `
    <tr>
      <td><span class="mono">${row.id}</span><span class="secondary">${row.date}</span></td>
      <td><span class="source ${row.source === "social" ? "social" : ""}">${bindingSourceLabel(row.source)}</span></td>
      <td><span>${row.user}</span>${row.userId ? `<span class="secondary mono">${row.userId}</span>` : ""}</td>
      <td>${row.related}</td>
      <td>${row.owner}</td>
      <td>${row.bindingStatus === "pending" ? `<span class="status pending">${t("bindStatus.pending")}</span>` : `<span class="status bound">${row.bindingText ? t(row.bindingText) : t("bindStatus.bound")}</span>`}</td>
      <td><span class="event-type">${row.eventType}</span></td>
      <td>${row.reward}</td>
      <td><span class="mono">${row.giftOrderId}</span><span class="secondary">${t(`giftStatus.${row.giftOrderStatus}`)} · ฿0</span></td>
      <td>${rewardStatusLabel(row.rewardStatus)}</td>
    </tr>`).join("");
  document.getElementById("unifiedEmpty").hidden = rows.length > 0;
  document.getElementById("unifiedCount").textContent = t("unified.count", { count: rows.length });
}

function applyTranslations() {
  const roots = ["bindingsView", "referralModal", "socialModal"].map((id) => document.getElementById(id));
  roots.forEach((root) => {
    root.querySelectorAll("[data-i18n]").forEach((element) => {
      element.textContent = t(element.dataset.i18n);
    });
    root.querySelectorAll("[data-i18n-placeholder]").forEach((element) => {
      element.placeholder = t(element.dataset.i18nPlaceholder);
    });
    root.querySelectorAll("[data-i18n-aria-label]").forEach((element) => {
      element.setAttribute("aria-label", t(element.dataset.i18nAriaLabel));
    });
  });
  renderReferrals();
  renderSocial();
  renderEvents();
  renderUnified();
  renderBindingResult();
  renderReferrerSummary();
  if (state.toastKey) document.getElementById("toast").textContent = t(state.toastKey);
}

function setBindingLanguage(lang) {
  state.lang = lang;
  applyTranslations();
}

function setTab(tab) {
  state.tab = tab;
  document.getElementById("referralPanel").hidden = tab !== "referral";
  document.getElementById("socialPanel").hidden = tab !== "social";
  document.getElementById("eventsPanel").hidden = tab !== "events";
  document.querySelectorAll(".section-tab").forEach((button) => button.classList.toggle("active", button.dataset.tab === tab));
}

function openReferralModal(referrer = null) {
  if (referrer) state.referrer = referrer;
  state.verified = false;
  state.phoneUser = null;
  state.bindingResult = null;
  document.getElementById("bindingPhone").value = "";
  document.getElementById("bindingNote").value = "";
  document.getElementById("referralNotice").classList.remove("show");
  document.getElementById("confirmBinding").disabled = true;
  document.getElementById("referralModal").hidden = false;
  renderReferrerSummary();
  renderBindingResult();
}

function closeReferralModal() {
  document.getElementById("referralModal").hidden = true;
}

function verifyPhone() {
  const value = document.getElementById("bindingPhone").value.trim();
  const result = document.getElementById("bindingResult");
  const confirm = document.getElementById("confirmBinding");
  state.verified = false;
  state.phoneUser = null;
  state.bindingResult = null;
  confirm.disabled = true;

  const phone = normalizePhone(value);
  if (!/^\+?[1-9]\d{7,14}$/.test(phone)) {
    state.bindingResult = { kind: "error", key: value ? "referralModal.invalidPhone" : "referralModal.empty" };
    renderBindingResult();
    return;
  }

  if (phone === "+66821112233") {
    state.bindingResult = { kind: "error", key: "referralModal.self" };
    renderBindingResult();
    return;
  }

  if (phone === "+84912345678") {
    state.bindingResult = { kind: "error", key: "referralModal.otherLine" };
    renderBindingResult();
    return;
  }

  if (phone === "+66812345678") {
    state.phoneUser = {
      status: "bound",
      userId: "2120302295478341",
      name: "Narin K.",
      phone: "+66 81 **** 5678",
    };
    state.bindingResult = { kind: "existing" };
    state.verified = true;
    confirm.disabled = false;
    renderBindingResult();
    return;
  }

  state.phoneUser = {
    status: "pending",
    userId: "",
    name: "—",
    phone: maskPhone(value),
  };
  state.verified = true;
  confirm.disabled = false;
  state.bindingResult = { kind: "pending" };
  renderBindingResult();
}

function confirmBinding() {
  if (!state.verified) return;
  const bound = state.phoneUser.status === "bound";
  const activeReferrer = { ...state.referrer };
  referrals.unshift({
    id: `BIND-202611-${String(210 + referrals.length).padStart(4, "0")}`,
    referrerId: activeReferrer.id,
    referrer: activeReferrer.name,
    referredId: state.phoneUser.userId,
    referred: state.phoneUser.name,
    phone: state.phoneUser.phone,
    line: "thailand",
    owner: activeReferrer.owner,
    bindingStatus: bound ? "bound" : "pending",
    boundAt: "2026-11-13",
    nextTrigger: "trigger.firstTrial",
    latestReward: "reward.none",
    rewardStatus: "waiting",
    giftOrderId: "—",
    giftOrderStatus: "NOT_CREATED",
  });
  state.referrer = {
    id: "2120302255148482561",
    name: "Pimchanok S.",
    owner: "Thanya C.",
  };
  closeReferralModal();
  setTab("referral");
  renderReferrals();
  renderUnified();
  showToast("referralModal.success");
}

function openSocialModal() {
  document.getElementById("socialUrl").value = "";
  state.socialNoticeKey = "";
  document.getElementById("socialNotice").classList.remove("show");
  document.getElementById("socialModal").hidden = false;
}

function closeSocialModal() {
  document.getElementById("socialModal").hidden = true;
}

function getSocialReward(status) {
  if (status === "OFFICIALLY_SELECTED") return ["reward.published", "reward.selected"];
  if (status === "VALID_NOT_SELECTED") return ["reward.published", "reward.notSelected"];
  if (status === "PUBLISHED") return ["reward.published", ""];
  return ["reward.none", ""];
}

function confirmSocial() {
  const link = document.getElementById("socialUrl").value.trim();
  const status = document.getElementById("socialStatus").value;
  const authorization = document.getElementById("socialAuthorization").value;
  const notice = document.getElementById("socialNotice");
  if (!link) {
    state.socialNoticeKey = "socialModal.emptyLink";
    notice.textContent = t(state.socialNoticeKey);
    notice.classList.add("show");
    return;
  }
  if (status === "OFFICIALLY_SELECTED" && authorization !== "AUTHORIZED_OFFICIAL_USE") {
    state.socialNoticeKey = "socialModal.authRequired";
    notice.textContent = t(state.socialNoticeKey);
    notice.classList.add("show");
    return;
  }
  state.socialNoticeKey = "";
  notice.classList.remove("show");
  const [reward, rewardDetail] = getSocialReward(status);
  const statusKey = {
    PUBLISHED: "social.published",
    VALID_NOT_SELECTED: "social.notSelected",
    OFFICIALLY_SELECTED: "social.selected",
    INVALID: "social.invalid",
  }[status];
  const giftOrderId = status === "INVALID" ? "—" : `GRT202611${String(130 + socialRecords.length).padStart(4, "0")}`;
  socialRecords.unshift({
    id: `SOC-202611-${String(40 + socialRecords.length).padStart(4, "0")}`,
    user: "Pimchanok S.",
    platform: document.getElementById("socialPlatform").value,
    contentType: document.getElementById("socialType").value === "PHOTO" ? "social.photo" : "social.video",
    contentStatus: statusKey,
    authorization: authorization === "AUTHORIZED_OFFICIAL_USE" ? "social.authorized" : "social.notAuthorized",
    publishedAt: "2026-11-13",
    operator: "Thanya C.",
    reward,
    rewardDetail,
    status: status === "INVALID" ? "failed" : "processing",
    giftOrderId,
    giftOrderStatus: status === "INVALID" ? "NOT_CREATED" : "CREATED",
  });
  if (status !== "INVALID") {
    rewardEvents.unshift({
      type: status === "PUBLISHED" ? "SOCIAL_POST_PUBLISHED" : status === "VALID_NOT_SELECTED" ? "SOCIAL_POST_NOT_SELECTED" : "SOCIAL_POST_OFFICIALLY_SELECTED",
      sourceId: socialRecords[0].id,
      triggeredAt: "2026-11-13 10:30",
      benefit: rewardDetail || reward,
      status: "processing",
    });
  }
  closeSocialModal();
  setTab("social");
  renderSocial();
  renderEvents();
  renderUnified();
  showToast("socialModal.success");
}

function showToast(key) {
  const toast = document.getElementById("toast");
  state.toastKey = key;
  toast.textContent = t(key);
  toast.classList.remove("show");
  void toast.offsetWidth;
  toast.classList.add("show");
  setTimeout(() => {
    toast.classList.remove("show");
    state.toastKey = "";
  }, 2400);
}

document.querySelectorAll(".section-tab").forEach((button) => button.addEventListener("click", () => setTab(button.dataset.tab)));
document.querySelectorAll("[data-unified-date]").forEach((button) => {
  button.addEventListener("click", () => {
    button.parentElement.querySelectorAll("[data-unified-date]").forEach((item) => item.classList.toggle("active", item === button));
  });
});
document.getElementById("newReferralBtn").addEventListener("click", openReferralModal);
document.getElementById("newSocialBtn").addEventListener("click", openSocialModal);
["unifiedBusinessFilter", "unifiedSourceFilter", "unifiedCcFilter", "unifiedBindingFilter", "unifiedRewardFilter", "unifiedStartDate", "unifiedEndDate"].forEach((id) => {
  document.getElementById(id).addEventListener("change", renderUnified);
});
document.getElementById("unifiedKeywordFilter").addEventListener("input", renderUnified);
document.getElementById("unifiedReset").addEventListener("click", () => {
  document.getElementById("unifiedSourceFilter").value = "";
  document.getElementById("unifiedCcFilter").value = "";
  document.getElementById("unifiedBindingFilter").value = "";
  document.getElementById("unifiedRewardFilter").value = "";
  document.getElementById("unifiedKeywordFilter").value = "";
  document.getElementById("unifiedStartDate").value = "2026-11-01";
  document.getElementById("unifiedEndDate").value = "2026-11-30";
  renderUnified();
});
document.querySelectorAll(".open-binding-sales").forEach((button) => {
  button.addEventListener("click", () => {
    openReferralModal({
      id: button.dataset.referrerId,
      name: button.dataset.referrerName,
      owner: button.dataset.owner,
    });
  });
});
document.getElementById("verifyBindingPhone").addEventListener("click", verifyPhone);
document.getElementById("bindingPhone").addEventListener("input", () => {
  state.verified = false;
  state.phoneUser = null;
  state.bindingResult = null;
  document.getElementById("confirmBinding").disabled = true;
  renderBindingResult();
});
document.getElementById("bindingPhone").addEventListener("keydown", (event) => {
  if (event.key === "Enter") verifyPhone();
});
document.getElementById("confirmBinding").addEventListener("click", confirmBinding);
document.getElementById("confirmSocial").addEventListener("click", confirmSocial);
document.querySelectorAll(".close-binding-modal").forEach((button) => button.addEventListener("click", closeReferralModal));
document.querySelectorAll(".close-social-modal").forEach((button) => button.addEventListener("click", closeSocialModal));
document.getElementById("referralModal").addEventListener("click", (event) => {
  if (event.target.id === "referralModal") closeReferralModal();
});
document.getElementById("socialModal").addEventListener("click", (event) => {
  if (event.target.id === "socialModal") closeSocialModal();
});
window.addEventListener("growth-language-change", (event) => {
  if (event.detail?.lang === "zh" || event.detail?.lang === "en") setBindingLanguage(event.detail.lang);
});
window.GrowthBindingView = {
  activate() {
    renderReferrals();
    renderSocial();
    renderEvents();
    renderUnified();
  },
  openReferral(referrer = null) {
    openReferralModal(referrer);
  },
};
})();
