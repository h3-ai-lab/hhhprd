const I18N = {
  zh: {
    "document.title": "拉新关系 · Dino CRM",
    "nav.business": "业务管理",
    "nav.dashboard": "管理看板",
    "nav.users": "用户管理",
    "nav.userList": "用户列表",
    "nav.sales": "销售中心",
    "nav.orders": "订单中心",
    "nav.marketing": "营销与增长",
    "nav.growth": "拉新关系",
    "nav.community": "社媒推荐",
    "nav.bindings": "拉新关系维护",
    "bindings.title": "拉新关系维护",
    "community.title": "社媒推荐",
    "footer.status": "服务运行正常",
    "footer.updated": "数据更新于刚刚",
    "env.production": "生产环境",
    "aria.openMenu": "展开菜单",
    "crumb.growth": "营销中心",
    "crumb.users": "用户管理",
    "dashboard.subtitle": "泰国业务线 · 关系、业务事件、赠送订单与权益结果",
    "common.refresh": "刷新数据",
    "metric.referrers": "推荐人数",
    "metric.referrers.note": "按推荐人用户 ID 去重",
    "metric.referred": "被推荐人数",
    "metric.referred.note": "按被推荐人用户 ID 去重",
    "metric.gmv": "裂变 GMV",
    "metric.gmv.note": "每条关系唯一归因订单",
    "metric.success": "权益发放成功率",
    "metric.formula": "口径：",
    "metric.referrers.formula": "关系集合中至少有一条记录的推荐人用户数。单位：人；去重键：推荐人用户 ID。",
    "metric.referred.formula": "关系集合中至少有一条记录的被推荐人用户数。单位：人；去重键：被推荐人用户 ID。",
    "metric.gmv.formula": "关系集合内各条有效关系唯一归因订单的实付金额之和。单位：THB；去重键：订单 ID；排除取消、退款和测试订单。",
    "metric.success.formula": "已发放奖励事件数 ÷ 已发起权益发放的奖励事件数。重试不重复计入分母；分母为 0 时显示“—”。",
    "records.title": "归因记录",
    "records.bindDate": "关系绑定时间",
    "records.orderDate": "订单支付时间",
    "records.empty": "当前筛选下没有归因记录",
    "records.count": "共 {count} 条记录",
    "filter.dateRange": "日期范围",
    "filter.to": "至",
    "filter.businessLine": "业务线",
    "filter.source": "来源",
    "filter.ownerCc": "归属 CC",
    "filter.status": "权益状态",
    "filter.bindingStatus": "绑定状态",
    "filter.keyword": "关键词",
    "filter.keyword.placeholder": "用户 ID / 手机号 / 订单 ID",
    "common.reset": "重置筛选",
    "common.search": "搜索",
    "common.cancel": "取消",
    "common.close": "关闭",
    "common.save": "保存",
    "common.days": "天",
    "option.thailand": "泰国",
    "option.vietnam": "越南",
    "option.saudi": "沙特阿拉伯",
    "option.allBusinessLines": "全部业务线",
    "option.allPlatforms": "全部平台",
    "option.allSources": "全部来源",
    "option.allCc": "全部 CC",
    "option.allStatuses": "全部状态",
    "source.referral": "拉新推荐",
    "source.social": "社媒推荐",
    "status.success": "已发放",
    "status.processing": "待发放",
    "status.failed": "发放失败",
    "status.invalid": "归因失效",
    "bindStatus.active": "已生效",
    "bindStatus.pendingTransfer": "待原 CC 转移",
    "bindStatus.invalid": "已失效",
    "eventStatus.issued": "已发放",
    "eventStatus.processing": "待发放",
    "eventStatus.failed": "发放失败",
    "eventStatus.waiting": "待触发",
    "eventStatus.invalid": "归因失效",
    "status.paid": "已付费",
    "status.trial": "体验中",
    "status.disabled": "已停用",
    "table.referrer": "推荐人",
    "table.referred": "被推荐人",
    "table.businessLine": "业务线",
    "table.user": "用户",
    "table.referredPhone": "被推荐人手机号",
    "table.source": "来源",
    "table.order": "归因订单",
    "table.plan": "套餐",
    "table.amount": "实付金额",
    "table.paidAt": "订单支付时间",
    "table.boundAt": "绑定时间",
    "table.operator": "操作 CC",
    "table.owner": "归属 CC",
    "table.rule": "奖励规则",
    "table.reward": "奖励",
    "table.status": "权益状态",
    "table.bindStatus": "绑定/内容状态",
    "table.record": "业务记录",
    "table.related": "关联对象",
    "table.triggerEvent": "触发事件",
    "table.giftOrder": "赠送订单",
    "table.action": "操作",
    "table.targetOwner": "目标归属 CC",
    "table.currentOwner": "当前归属 CC",
    "unified.title": "统一拉新记录",
    "unified.note": "口径：",
    "unified.noteText": "绑定、奖励事件、赠送订单和权益状态在同一列表追踪",
    "unified.empty": "当前筛选下没有拉新记录",
    "unified.keywordPlaceholder": "用户 ID / 事件 ID / 订单 ID",
    "bindings.page": "第 1 页",
    "community.create": "登记社媒推荐",
    "bindings.newSocial": "登记社媒推荐",
    "bindings.newReferral": "新建好友推荐",
    "sales.title": "销售中心",
    "sales.subtitle": "我的跟进与已付费客户",
    "sales.followUps": "我的跟进",
    "sales.paid": "已付费",
    "sales.allStage": "全部跟进阶段",
    "sales.pendingCall": "待外呼",
    "sales.connected": "已接通",
    "sales.stage": "跟进阶段",
    "sales.call": "拨号",
    "sales.followUp": "更新跟进",
    "sales.addDuration": "增加用户时长",
    "orders.title": "订单中心",
    "orders.subtitle": "查询付款订单与系统赠送订单",
    "orders.allOrders": "全部订单",
    "orders.giftOrders": "赠送订单",
    "orders.searchPlaceholder": "订单 ID / 用户 ID / 手机号",
    "orders.orderTypeAll": "订单类型：全部",
    "orders.membershipGrant": "会员赠送",
    "orders.paid": "付费订单",
    "orders.directPurchase": "直接购买",
    "orders.orderId": "订单 ID",
    "orders.orderType": "订单类型",
    "orders.businessSource": "业务来源",
    "orders.phone": "手机号",
    "orders.followingCc": "创建时跟进 CC",
    "orders.orderStatus": "订单状态",
    "orders.benefitChange": "权益变化",
    "orders.fulfilled": "已完成",
    "orders.created": "已生成待发放",
    "orders.benefit14d": "+14 天",
    "orders.benefit2m": "+2 个月",
    "orders.benefit3m": "+3 个月",
    "users.title": "用户中心",
    "users.subtitle": "查找用户并处理账号或会员操作",
    "users.searchPlaceholder": "用户 ID / 姓名 / 登录账号",
    "users.userTypeAll": "用户类型：全部",
    "users.formal": "正式用户",
    "users.guest": "游客用户",
    "users.userStatusAll": "用户状态：全部",
    "users.businessTh": "业务线：泰国",
    "users.businessVn": "业务线：越南",
    "users.userId": "用户 ID",
    "users.name": "姓名",
    "users.userStatus": "用户状态",
    "users.userType": "用户类型",
    "users.signup": "注册方式",
    "users.loginAccount": "登录账号",
    "users.channel": "渠道来源",
    "users.actions": "操作",
    "users.addMember": "添加会员",
    "users.addDuration": "增加用户时长",
    "users.maintainBinding": "维护拉新关系",
    "users.editInfo": "修改信息",
    "users.web": "网页",
    "users.count": "共 {count} 条记录",
    "grant.title": "增加用户时长 · {id}",
    "grant.subtitle": "为当前用户增加会员时长",
    "grant.openType": "开通类型",
    "grant.trialDays": "添加体验天数",
    "grant.trialDays.note": "用户可继续通过付费墙购买",
    "grant.manualTransfer": "手动银行转账",
    "grant.manualTransfer.note": "按普通会员开通",
    "grant.validityDays": "有效期天数",
    "grant.reason": "开通原因",
    "grant.reason.note": "记录本次手工增加用户时长的业务原因",
    "grant.confirm": "确认增加",
    "grant.issuing": "处理中…",
    "grant.helper.regular": "新用户从当前时间起算；未付费体验中的用户在现体验到期时间上累加。",
    "grant.reason.friend": "运营补充用户时长",
    "grant.error.days": "请输入有效的有效期天数",
    "grant.error.reason": "请输入开通原因",
    "toast.refreshed": "数据已刷新",
    "toast.referralSuccess": "推荐关系已绑定，权益已发放",
    "toast.socialSuccess": "社媒推荐记录已保存",
    "toast.grantSuccess": "用户时长已增加",
    "drawer.title": "推荐关系详情",
    "drawer.relationInfo": "关系信息",
    "drawer.referrer": "推荐人",
    "drawer.referred": "被推荐人",
    "drawer.referredPhone": "被推荐人手机号",
    "drawer.source": "来源",
    "drawer.boundAt": "绑定时间",
    "drawer.relationStatus": "关系状态",
    "drawer.orderInfo": "归因订单",
    "drawer.orderId": "订单 ID",
    "drawer.plan": "套餐",
    "drawer.amount": "实付金额",
    "drawer.paidAt": "支付时间",
    "drawer.orderStatus": "订单状态",
    "drawer.refunded": "最终退款",
    "drawer.paid": "已支付",
    "drawer.operation": "操作与权益",
    "drawer.operator": "操作 CC",
    "drawer.owner": "归属 CC",
    "drawer.rule": "奖励规则",
    "drawer.entitlement": "权益流水",
    "drawer.pendingEntitlement": "等待权益服务确认",
    "drawer.failureReason": "失败原因",
    "drawer.systemFailure": "系统异常：权益服务请求超时",
    "drawer.reason": "开通原因",
    "drawer.timeline": "处理轨迹",
    "drawer.paymentDone": "被推荐人完成支付",
    "drawer.boundDone": "推荐关系已绑定",
    "drawer.operatorLine": "操作人 {name}",
    "drawer.failedDetail": "系统异常导致权益服务请求超时，可使用同一幂等键重试",
    "drawer.invalidDetail": "归因订单退款，历史记录保留",
    "drawer.auditDetail": "权益服务与审计",
    "drawer.generatedReason": "拉新推荐 · {referrer}推荐{referred} · {plan}套餐",
    "plan.months": "{count} 个月",
    "rule.months": "+{count} 个月",
  },
  en: {
    "document.title": "Referral Attribution · Dino CRM",
    "nav.business": "Business",
    "nav.dashboard": "Management Dashboard",
    "nav.users": "User Management",
    "nav.userList": "User List",
    "nav.sales": "Sales Center",
    "nav.orders": "Order Center",
    "nav.marketing": "Marketing & Growth",
    "nav.growth": "Growth Relationships",
    "nav.community": "Social Media Recommendations",
    "nav.bindings": "Growth Relationships",
    "bindings.title": "Growth Relationships",
    "community.title": "Social Media Recommendations",
    "footer.status": "All services operational",
    "footer.updated": "Data updated just now",
    "env.production": "Production",
    "aria.openMenu": "Open navigation",
    "crumb.growth": "Marketing",
    "crumb.users": "User Management",
    "dashboard.subtitle": "Thailand business line · Relationships, business events, gift orders, and benefits",
    "common.refresh": "Refresh",
    "metric.referrers": "Referrers",
    "metric.referrers.note": "Unique by referrer user ID",
    "metric.referred": "Referred users",
    "metric.referred.note": "Unique by referred user ID",
    "metric.gmv": "Referral GMV",
    "metric.gmv.note": "One attributed order per relationship",
    "metric.success": "Benefit success rate",
    "metric.formula": "Definition: ",
    "metric.referrers.formula": "Distinct referrer user IDs with at least one relationship record. Unit: people; deduplication key: referrer user ID.",
    "metric.referred.formula": "Distinct referred user IDs with at least one relationship record. Unit: people; deduplication key: referred user ID.",
    "metric.gmv.formula": "Sum of paid amounts from each relationship's single attributed order. Unit: THB; deduplication key: order ID; canceled, refunded, and test orders are excluded.",
    "metric.success.formula": "Issued reward events ÷ reward events sent for benefit issuance. Retries do not increase the denominator; show “—” when the denominator is zero.",
    "records.title": "Attribution Records",
    "records.bindDate": "Relationship linked",
    "records.orderDate": "Order paid",
    "records.empty": "No attribution records match the current filters",
    "records.count": "{count} records",
    "filter.dateRange": "Date range",
    "filter.to": "to",
    "filter.businessLine": "Business line",
    "filter.source": "Source",
    "filter.ownerCc": "Owner CC",
    "filter.status": "Benefit status",
    "filter.bindingStatus": "Binding status",
    "filter.keyword": "Keyword",
    "filter.keyword.placeholder": "User ID / phone / order ID",
    "common.reset": "Reset filters",
    "common.search": "Search",
    "common.cancel": "Cancel",
    "common.close": "Close",
    "common.save": "Save",
    "common.days": "days",
    "option.thailand": "Thailand",
    "option.vietnam": "Vietnam",
    "option.saudi": "Saudi Arabia",
    "option.allBusinessLines": "All business lines",
    "option.allPlatforms": "All platforms",
    "option.allSources": "All sources",
    "option.allCc": "All CCs",
    "option.allStatuses": "All statuses",
    "source.referral": "Referral",
    "source.social": "Social media recommendation",
    "status.success": "Issued",
    "status.processing": "Pending",
    "status.failed": "Failed",
    "status.invalid": "Attribution invalid",
    "bindStatus.active": "Active",
    "bindStatus.pendingTransfer": "Pending original-CC transfer",
    "bindStatus.invalid": "Invalid",
    "eventStatus.issued": "Issued",
    "eventStatus.processing": "Pending issuance",
    "eventStatus.failed": "System failure",
    "eventStatus.waiting": "Waiting",
    "eventStatus.invalid": "Attribution invalid",
    "status.paid": "Paid",
    "status.trial": "On trial",
    "status.disabled": "Disabled",
    "table.referrer": "Referrer",
    "table.referred": "Referred user",
    "table.businessLine": "Business line",
    "table.user": "User",
    "table.referredPhone": "Referred phone",
    "table.source": "Source",
    "table.order": "Attributed order",
    "table.plan": "Plan",
    "table.amount": "Paid amount",
    "table.paidAt": "Order paid at",
    "table.boundAt": "Linked at",
    "table.operator": "Operator CC",
    "table.owner": "Owner CC",
    "table.rule": "Reward rule",
    "table.reward": "Reward",
    "table.status": "Benefit status",
    "table.bindStatus": "Binding/content status",
    "table.record": "Business record",
    "table.related": "Related object",
    "table.triggerEvent": "Trigger event",
    "table.giftOrder": "Gift order",
    "table.action": "Action",
    "table.targetOwner": "Target owner CC",
    "table.currentOwner": "Current owner CC",
    "unified.title": "Unified Growth Records",
    "unified.note": "Scope: ",
    "unified.noteText": "Binding, reward events, gift orders, and benefit status are tracked in one list",
    "unified.empty": "No growth records match the current filters",
    "unified.keywordPlaceholder": "User ID / event ID / order ID",
    "bindings.page": "Page 1",
    "community.create": "Register social media recommendation",
    "bindings.newSocial": "Record social media recommendation",
    "bindings.newReferral": "New friend referral",
    "sales.title": "Sales Center",
    "sales.subtitle": "My follow-ups and paid customers",
    "sales.followUps": "My follow-ups",
    "sales.paid": "Paid",
    "sales.allStage": "All follow-up stages",
    "sales.pendingCall": "Pending call",
    "sales.connected": "Connected",
    "sales.stage": "Follow-up stage",
    "sales.call": "Call",
    "sales.followUp": "Log follow-up",
    "sales.addDuration": "Add user duration",
    "orders.title": "Order Center",
    "orders.subtitle": "Paid orders and system gift orders",
    "orders.allOrders": "All orders",
    "orders.giftOrders": "Gift orders",
    "orders.searchPlaceholder": "Order ID / user ID / phone",
    "orders.orderTypeAll": "Order type: All",
    "orders.membershipGrant": "Membership grant",
    "orders.paid": "Paid order",
    "orders.directPurchase": "Direct purchase",
    "orders.orderId": "Order ID",
    "orders.orderType": "Order type",
    "orders.businessSource": "Business source",
    "orders.phone": "Phone",
    "orders.followingCc": "Following CC at creation",
    "orders.orderStatus": "Order status",
    "orders.benefitChange": "Benefit change",
    "orders.fulfilled": "Fulfilled",
    "orders.created": "Created, pending fulfillment",
    "orders.benefit14d": "+14 days",
    "orders.benefit2m": "+2 months",
    "orders.benefit3m": "+3 months",
    "users.title": "User Center",
    "users.subtitle": "Find users and manage account or membership actions",
    "users.searchPlaceholder": "User ID / name / login account",
    "users.userTypeAll": "User type: All",
    "users.formal": "Registered",
    "users.guest": "Guest",
    "users.userStatusAll": "User status: All",
    "users.businessTh": "Business line: Thailand",
    "users.businessVn": "Business line: Vietnam",
    "users.userId": "User ID",
    "users.name": "Name",
    "users.userStatus": "User status",
    "users.userType": "User type",
    "users.signup": "Signup method",
    "users.loginAccount": "Login account",
    "users.channel": "Channel",
    "users.actions": "Actions",
    "users.addMember": "Add membership",
    "users.addDuration": "Add user duration",
    "users.maintainBinding": "Manage referral relationship",
    "users.editInfo": "Edit info",
    "users.web": "Web",
    "users.count": "{count} records",
    "grant.title": "Add user duration · {id}",
    "grant.subtitle": "Increase membership duration for this user",
    "grant.openType": "Activation type",
    "grant.trialDays": "Add trial days",
    "grant.trialDays.note": "The user can still purchase through the paywall",
    "grant.manualTransfer": "Manual bank transfer",
    "grant.manualTransfer.note": "Activate as a standard membership",
    "grant.validityDays": "Validity",
    "grant.reason": "Grant reason",
    "grant.reason.note": "Record the business reason for this manual duration increase",
    "grant.confirm": "Confirm increase",
    "grant.issuing": "Processing…",
    "grant.helper.regular": "New users start from the current time. Unpaid users on trial receive the benefit after their current trial end date.",
    "grant.reason.friend": "Manual duration increase",
    "grant.error.days": "Enter a valid validity period",
    "grant.error.reason": "Enter a grant reason",
    "toast.refreshed": "Data refreshed",
    "toast.referralSuccess": "Referral linked and benefit issued",
    "toast.socialSuccess": "Social media recommendation saved",
    "toast.grantSuccess": "User duration increased",
    "drawer.title": "Referral Relationship",
    "drawer.relationInfo": "Relationship",
    "drawer.referrer": "Referrer",
    "drawer.referred": "Referred user",
    "drawer.referredPhone": "Referred phone",
    "drawer.source": "Source",
    "drawer.boundAt": "Linked at",
    "drawer.relationStatus": "Relationship status",
    "drawer.orderInfo": "Attributed Order",
    "drawer.orderId": "Order ID",
    "drawer.plan": "Plan",
    "drawer.amount": "Paid amount",
    "drawer.paidAt": "Paid at",
    "drawer.orderStatus": "Order status",
    "drawer.refunded": "Refunded",
    "drawer.paid": "Paid",
    "drawer.operation": "Operator and Benefit",
    "drawer.operator": "Operator CC",
    "drawer.owner": "Owner CC",
    "drawer.rule": "Reward rule",
    "drawer.entitlement": "Entitlement transaction",
    "drawer.pendingEntitlement": "Awaiting entitlement service confirmation",
    "drawer.failureReason": "Failure reason",
    "drawer.systemFailure": "System error: entitlement service request timed out",
    "drawer.reason": "Grant reason",
    "drawer.timeline": "Activity Timeline",
    "drawer.paymentDone": "Referred user completed payment",
    "drawer.boundDone": "Referral relationship linked",
    "drawer.operatorLine": "Operator: {name}",
    "drawer.failedDetail": "A system error caused the entitlement request to time out. Retry with the same idempotency key.",
    "drawer.invalidDetail": "The attributed order was refunded. The historical record is retained.",
    "drawer.auditDetail": "Entitlement service and audit",
    "drawer.generatedReason": "Referral · {referrer} referred {referred} · {plan} plan",
    "plan.months": "{count}-month plan",
    "rule.months": "+{count} months",
  },
};

function detectLanguage() {
  try {
    const queryLanguage = new URLSearchParams(window.location.search).get("lang");
    if (queryLanguage === "en" || queryLanguage === "zh") return queryLanguage;
    const savedLanguage = window.localStorage.getItem("referral-growth-language");
    if (savedLanguage === "en" || savedLanguage === "zh") return savedLanguage;
  } catch {
    // Local file previews may disable storage.
  }
  return "zh";
}

function detectInitialView() {
  try {
    const requested = new URLSearchParams(window.location.search).get("view");
    if (["dashboard", "users", "sales", "orders", "community"].includes(requested)) return requested;
  } catch {
    // Local file previews may block URL parsing.
  }
  return "dashboard";
}

const state = {
  lang: detectLanguage(),
  view: detectInitialView(),
  dateField: "bind",
  salesTab: "following",
  orderTab: "all",
  source: "",
  cc: "",
  status: "",
  keyword: "",
  verified: false,
  verifiedUser: null,
  submitted: false,
  selectedId: "",
  grantContext: null,
};

const CURRENT_USER = {
  name: "Thanya C.",
};

const relationships = [
  {
    id: "RR-202611-0086",
    referrerId: "2120302255148482561",
    referrer: "Pimchanok S.",
    referredId: "2120302295478341",
    referred: "Narin K.",
    referredPhone: "66812345678",
    referredPhoneMasked: "+66 81 **** 5678",
    source: "referral",
    orderId: "PO202611020018",
    planMonths: 3,
    amount: 3490,
    orderAt: "2026-11-02",
    bindAt: "2026-11-04",
    operator: "Thanya C.",
    owner: "Thanya C.",
    ruleMonths: 1,
    status: "success",
  },
  {
    id: "RR-202611-0091",
    referrerId: "2120302281472036721",
    referrer: "Kanya R.",
    referredId: "2120302246091874272",
    referred: "Mali P.",
    referredPhone: "66827654321",
    referredPhoneMasked: "+66 82 **** 4321",
    source: "referral",
    orderId: "PO202611030024",
    planMonths: 6,
    amount: 5890,
    orderAt: "2026-11-03",
    bindAt: "2026-11-05",
    operator: "Mina P.",
    owner: "Mina P.",
    ruleMonths: 2,
    status: "success",
  },
  {
    id: "RR-202611-0103",
    referrerId: "2120302210461928824",
    referrer: "Arunee T.",
    referredId: "2120302273820914407",
    referred: "Siriporn W.",
    referredPhone: "66885551234",
    referredPhoneMasked: "+66 88 **** 1234",
    source: "referral",
    orderId: "PO202611040031",
    planMonths: 12,
    amount: 8990,
    orderAt: "2026-11-04",
    bindAt: "2026-11-06",
    operator: "Nok S.",
    owner: "Nok S.",
    ruleMonths: 3,
    status: "processing",
  },
  {
    id: "RR-202611-0111",
    referrerId: "2120302247228042882",
    referrer: "Waraporn L.",
    referredId: "2120302201833059300",
    referred: "Pattara M.",
    referredPhone: "66912223333",
    referredPhoneMasked: "+66 91 **** 3333",
    source: "referral",
    orderId: "PO202611050044",
    planMonths: 3,
    amount: 3490,
    orderAt: "2026-11-05",
    bindAt: "2026-11-07",
    operator: "Thanya C.",
    owner: "Thanya C.",
    ruleMonths: 1,
    status: "failed",
  },
  {
    id: "RR-202611-0116",
    referrerId: "2120302266318527041",
    referrer: "Chanida B.",
    referredId: "2120302229098319490",
    referred: "Araya N.",
    referredPhone: "66958887777",
    referredPhoneMasked: "+66 95 **** 7777",
    source: "referral",
    orderId: "PO202611060008",
    planMonths: 6,
    amount: 5890,
    orderAt: "2026-11-06",
    bindAt: "2026-11-08",
    operator: "Mina P.",
    owner: "Mina P.",
    ruleMonths: 2,
    status: "success",
  },
  {
    id: "RR-202611-0122",
    referrerId: "2120302238814957263",
    referrer: "Nicha K.",
    referredId: "2120302256403910560",
    referred: "Suda P.",
    referredPhone: "66874446666",
    referredPhoneMasked: "+66 87 **** 6666",
    source: "referral",
    orderId: "PO202611070013",
    planMonths: 12,
    amount: 8990,
    orderAt: "2026-11-07",
    bindAt: "2026-11-09",
    operator: "Nok S.",
    owner: "Nok S.",
    ruleMonths: 3,
    status: "invalid",
  },
];


function t(key, values = {}) {
  const template = I18N[state.lang]?.[key] ?? I18N.zh[key] ?? key;
  return template.replace(/\{(\w+)\}/g, (_, name) => String(values[name] ?? `{${name}}`));
}

function sourceLabel(source) {
  return t(`source.${source}`);
}

function statusEntry(status) {
  return [t(`status.${status}`), status];
}

function planLabel(months) {
  return t("plan.months", { count: months });
}

function ruleLabel(months) {
  return t("rule.months", { count: months });
}

function countLabel(key, count) {
  return t(key, { count });
}

function money(value) {
  return `฿${Number(value).toLocaleString("en-US")}`;
}

function viewMeta(view) {
  if (view === "dashboard") return { title: "nav.growth", crumb: "crumb.growth" };
  if (view === "community") return { title: "community.title", crumb: "crumb.growth" };
  if (view === "sales") return { title: "sales.title", crumb: "nav.sales" };
  if (view === "orders") return { title: "orders.title", crumb: "nav.orders" };
  return { title: "users.title", crumb: "crumb.users" };
}

function applyStaticTranslations() {
  document.documentElement.lang = state.lang === "en" ? "en" : "zh-CN";
  document.title = t("document.title");
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    if (element.closest("#bindingsView, #communityView, #communityCreateModal, #communityReviewModal, #referralModal, #socialModal")) return;
    element.textContent = t(element.dataset.i18n);
  });
  document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => {
    if (element.closest("#bindingsView, #communityView, #communityCreateModal, #communityReviewModal, #referralModal, #socialModal")) return;
    element.placeholder = t(element.dataset.i18nPlaceholder);
  });
  document.querySelectorAll("[data-i18n-aria-label]").forEach((element) => {
    if (element.closest("#bindingsView, #communityView, #communityCreateModal, #communityReviewModal, #referralModal, #socialModal")) return;
    element.setAttribute("aria-label", t(element.dataset.i18nAriaLabel));
  });
  document.querySelectorAll("[data-lang]").forEach((button) => {
    button.classList.toggle("active", button.dataset.lang === state.lang);
  });
  document.getElementById("usersRowSummary").textContent = countLabel("users.count", document.querySelectorAll("#usersView tbody tr").length);
  const meta = viewMeta(state.view);
  document.getElementById("pageTitle").textContent = t(meta.title);
  document.getElementById("crumb").textContent = t(meta.crumb);
}

function renderRows() {
  const filtered = relationships.filter((row) => {
    const sourceMatch = !state.source || row.source === state.source;
    const ccMatch = !state.cc || row.owner === state.cc;
    const statusMatch = !state.status || row.status === state.status;
    const term = state.keyword.trim().toLowerCase();
    const keywordMatch = !term || [row.referrerId, row.referredId, row.referredPhone, row.referredPhoneMasked, row.orderId, row.referrer, row.referred]
      .some((value) => value.toLowerCase().includes(term));
    return sourceMatch && ccMatch && statusMatch && keywordMatch;
  });

  const body = document.getElementById("growthRows");
  if (!filtered.length) {
    body.innerHTML = "";
    document.getElementById("emptyState").hidden = false;
    document.getElementById("rowSummary").textContent = countLabel("records.count", 0);
    return;
  }

  document.getElementById("emptyState").hidden = true;
  body.innerHTML = filtered.map((row) => {
    const [label, cls] = statusEntry(row.status);
    return `
      <tr data-id="${row.id}">
        <td><span class="mono">${row.referrerId}</span><span class="secondary">${row.referrer}</span></td>
        <td><span class="mono">${row.referredId}</span><span class="secondary">${row.referred}</span></td>
        <td class="mono">${row.referredPhoneMasked}</td>
        <td><span class="source ${row.source === "social" ? "social" : ""}">${sourceLabel(row.source)}</span></td>
        <td class="mono">${row.orderId}</td>
        <td>${planLabel(row.planMonths)}</td>
        <td>${money(row.amount)}</td>
        <td>${row.orderAt}</td>
        <td>${row.bindAt}</td>
        <td>${row.operator}</td>
        <td>${row.owner}</td>
        <td>${ruleLabel(row.ruleMonths)}</td>
        <td><span class="status ${cls}">${label}</span></td>
      </tr>`;
  }).join("");
  document.getElementById("rowSummary").textContent = countLabel("records.count", filtered.length);

  body.querySelectorAll("tr").forEach((tr) => {
    tr.addEventListener("click", () => openDrawer(tr.dataset.id));
  });
}

function openDrawer(id) {
  const row = relationships.find((item) => item.id === id);
  if (!row) return;
  state.selectedId = id;
  const [statusLabel, statusClass] = statusEntry(row.status);
  document.getElementById("drawerId").textContent = row.id;
  document.getElementById("drawerBody").innerHTML = `
    <div class="detail-block">
      <h4>${t("drawer.relationInfo")}</h4>
      <dl class="facts">
        <dt>${t("drawer.referrer")}</dt><dd><span class="mono">${row.referrerId}</span><br>${row.referrer}</dd>
        <dt>${t("drawer.referred")}</dt><dd><span class="mono">${row.referredId}</span><br>${row.referred}</dd>
        <dt>${t("drawer.referredPhone")}</dt><dd class="mono">${row.referredPhoneMasked}</dd>
        <dt>${t("drawer.source")}</dt><dd>${sourceLabel(row.source)}</dd>
        <dt>${t("drawer.boundAt")}</dt><dd>${row.bindAt} 14:32</dd>
        <dt>${t("drawer.relationStatus")}</dt><dd><span class="status ${statusClass}">${statusLabel}</span></dd>
      </dl>
    </div>
    <div class="detail-block">
      <h4>${t("drawer.orderInfo")}</h4>
      <dl class="facts">
        <dt>${t("drawer.orderId")}</dt><dd class="mono">${row.orderId}</dd>
        <dt>${t("drawer.plan")}</dt><dd>${planLabel(row.planMonths)}</dd>
        <dt>${t("drawer.amount")}</dt><dd>${money(row.amount)}</dd>
        <dt>${t("drawer.paidAt")}</dt><dd>${row.orderAt} 19:48</dd>
        <dt>${t("drawer.orderStatus")}</dt><dd>${t(row.status === "invalid" ? "drawer.refunded" : "drawer.paid")}</dd>
      </dl>
    </div>
    <div class="detail-block">
      <h4>${t("drawer.operation")}</h4>
      <dl class="facts">
        <dt>${t("drawer.operator")}</dt><dd>${row.operator}</dd>
        <dt>${t("drawer.owner")}</dt><dd>${row.owner}</dd>
        <dt>${t("drawer.rule")}</dt><dd>${ruleLabel(row.ruleMonths)}</dd>
        <dt>${t("drawer.entitlement")}</dt><dd class="mono">${row.status === "processing" ? t("drawer.pendingEntitlement") : `ENT-${row.id.slice(-4)}-TH`}</dd>
        ${row.status === "failed" ? `<dt>${t("drawer.failureReason")}</dt><dd>${t("drawer.systemFailure")}</dd>` : ""}
        <dt>${t("drawer.reason")}</dt><dd>${t("drawer.generatedReason", { referrer: row.referrer, referred: row.referred, plan: planLabel(row.planMonths) })}</dd>
      </dl>
    </div>
    <div class="detail-block">
      <h4>${t("drawer.timeline")}</h4>
      <div class="timeline">
        <div class="timeline-item done"><strong>${t("drawer.paymentDone")}</strong><span>${row.orderAt} · ${money(row.amount)}</span></div>
        <div class="timeline-item done"><strong>${t("drawer.boundDone")}</strong><span>${row.bindAt} · ${t("drawer.operatorLine", { name: row.operator })}</span></div>
        <div class="timeline-item ${row.status === "success" ? "done" : ""}"><strong>${statusLabel}</strong><span>${row.status === "failed" ? t("drawer.failedDetail") : row.status === "invalid" ? t("drawer.invalidDetail") : t("drawer.auditDetail")}</span></div>
      </div>
    </div>`;
  document.getElementById("detailDrawer").hidden = false;
}

function applySalesTab(tab) {
  state.salesTab = tab;
  const rows = [...document.querySelectorAll(".sales-row")];
  rows.forEach((row) => {
    row.hidden = row.dataset.salesView !== tab;
  });
  document.querySelectorAll("[data-sales-tab]").forEach((button) => {
    button.classList.toggle("active", button.dataset.salesTab === tab);
  });
  document.getElementById("salesCount").textContent = String(rows.filter((row) => !row.hidden).length);
}

function applyOrderTab(tab) {
  state.orderTab = tab;
  const rows = [...document.querySelectorAll(".order-row")];
  rows.forEach((row) => {
    row.hidden = tab !== "all" && row.dataset.orderType !== tab;
  });
  document.querySelectorAll("[data-order-tab]").forEach((button) => {
    button.classList.toggle("active", button.dataset.orderTab === tab);
  });
  document.getElementById("ordersCount").textContent = String(rows.filter((row) => !row.hidden).length);
}

function setView(view) {
  state.view = view;
  const dashboard = view === "dashboard";
  const community = view === "community";
  const sales = view === "sales";
  const orders = view === "orders";
  const users = view === "users";
  document.getElementById("dashboardView").hidden = !dashboard;
  document.getElementById("bindingsView").hidden = true;
  document.getElementById("communityView").hidden = !community;
  document.getElementById("salesView").hidden = !sales;
  document.getElementById("ordersView").hidden = !orders;
  document.getElementById("usersView").hidden = !users;
  const meta = viewMeta(view);
  document.getElementById("pageTitle").textContent = t(meta.title);
  document.getElementById("crumb").textContent = t(meta.crumb);
  document.querySelectorAll(".nav-item[data-view]").forEach((item) => item.classList.toggle("active", item.dataset.view === view));
  document.getElementById("sidebar").classList.remove("open");
  if (dashboard) window.GrowthBindingView?.activate();
  if (community) window.CommunityUploadView?.activate();
  if (sales) applySalesTab(state.salesTab);
  if (orders) applyOrderTab(state.orderTab);
}

function resetGrantForm() {
  state.verified = false;
  state.verifiedUser = null;
  state.submitted = false;
  document.getElementById("daysInput").readOnly = false;
  document.getElementById("daysInput").value = "30";
  document.getElementById("reasonInput").value = t("grant.reason.friend");
  document.getElementById("grantNotice").classList.remove("show");
  document.getElementById("confirmGrant").disabled = false;
  document.getElementById("confirmGrant").textContent = t("grant.confirm");
}

function openGrant(button) {
  state.grantContext = {
    userId: button.dataset.userId,
    userName: button.dataset.userName,
  };
  document.getElementById("grantTitle").textContent = t("grant.title", { id: state.grantContext.userId });
  resetGrantForm();
  document.getElementById("grantModal").hidden = false;
}

function closeGrant() {
  document.getElementById("grantModal").hidden = true;
}

function confirmGrant() {
  const notice = document.getElementById("grantNotice");
  const days = Number(document.getElementById("daysInput").value);
  const reason = document.getElementById("reasonInput").value.trim();
  if (!Number.isInteger(days) || days < 1 || days > 365) {
    notice.textContent = t("grant.error.days");
    notice.classList.add("show");
    return;
  }
  if (!reason) {
    notice.textContent = t("grant.error.reason");
    notice.classList.add("show");
    return;
  }
  notice.classList.remove("show");

  state.submitted = true;
  document.getElementById("confirmGrant").disabled = true;
  document.getElementById("confirmGrant").textContent = t("grant.issuing");

  window.setTimeout(() => {
    document.getElementById("confirmGrant").textContent = t("grant.confirm");
    closeGrant();
    showToast(t("toast.grantSuccess"));
  }, 450);
}

function showToast(message) {
  const toast = document.getElementById("toast");
  toast.textContent = message;
  toast.classList.remove("show");
  void toast.offsetWidth;
  toast.classList.add("show");
  window.setTimeout(() => toast.classList.remove("show"), 2200);
}

function setLanguage(language) {
  if (language !== "zh" && language !== "en") return;
  state.lang = language;
  try {
    window.localStorage.setItem("referral-growth-language", language);
  } catch {
    // Local file previews may disable storage.
  }
  const url = new URL(window.location.href);
  if (language === "en") url.searchParams.set("lang", "en");
  else url.searchParams.delete("lang");
  try {
    window.history.replaceState({}, "", url);
  } catch {
    // Local file previews may block history updates.
  }
  applyStaticTranslations();
  const meta = viewMeta(state.view);
  document.getElementById("pageTitle").textContent = t(meta.title);
  document.getElementById("crumb").textContent = t(meta.crumb);
  renderRows();
  if (!document.getElementById("grantModal").hidden) {
    document.getElementById("grantTitle").textContent = t("grant.title", { id: state.grantContext?.userId ?? "" });
  }
  if (state.selectedId && !document.getElementById("detailDrawer").hidden) openDrawer(state.selectedId);
  window.dispatchEvent(new CustomEvent("growth-language-change", { detail: { lang: state.lang } }));
}

document.querySelectorAll("[data-lang]").forEach((button) => {
  button.addEventListener("click", () => setLanguage(button.dataset.lang));
});
document.querySelectorAll("button[data-view]").forEach((item) => {
  item.addEventListener("click", () => setView(item.dataset.view));
});

document.querySelectorAll(".metric-info").forEach((button) => {
  button.addEventListener("click", (event) => {
    event.stopPropagation();
    document.querySelectorAll(".metric-pop").forEach((pop) => {
      if (pop.id !== button.dataset.pop) pop.hidden = true;
    });
    const pop = document.getElementById(button.dataset.pop);
    pop.hidden = !pop.hidden;
  });
});

document.querySelectorAll("[data-date-field]").forEach((button) => {
  button.addEventListener("click", () => {
    state.dateField = button.dataset.dateField;
    document.querySelectorAll(".date-tab").forEach((tab) => tab.classList.toggle("active", tab === button));
    renderRows();
  });
});

document.getElementById("sourceFilter").addEventListener("change", (event) => {
  state.source = event.target.value;
  renderRows();
});
document.getElementById("ccFilter").addEventListener("change", (event) => {
  state.cc = event.target.value;
  renderRows();
});
document.getElementById("statusFilter").addEventListener("change", (event) => {
  state.status = event.target.value;
  renderRows();
});
document.getElementById("keywordFilter").addEventListener("input", (event) => {
  state.keyword = event.target.value;
  renderRows();
});
document.getElementById("resetFilters").addEventListener("click", () => {
  state.source = "";
  state.cc = "";
  state.status = "";
  state.keyword = "";
  document.getElementById("sourceFilter").value = "";
  document.getElementById("ccFilter").value = "";
  document.getElementById("statusFilter").value = "";
  document.getElementById("keywordFilter").value = "";
  renderRows();
});
document.getElementById("refreshBtn").addEventListener("click", () => showToast(t("toast.refreshed")));
document.querySelectorAll(".open-grant-user").forEach((button) => button.addEventListener("click", () => openGrant(button)));
document.querySelectorAll("[data-sales-tab]").forEach((button) => {
  button.addEventListener("click", () => applySalesTab(button.dataset.salesTab));
});
document.querySelectorAll("[data-order-tab]").forEach((button) => {
  button.addEventListener("click", () => applyOrderTab(button.dataset.orderTab));
});
document.getElementById("closeGrant").addEventListener("click", closeGrant);
document.getElementById("cancelGrant").addEventListener("click", closeGrant);
document.getElementById("confirmGrant").addEventListener("click", confirmGrant);
document.getElementById("grantModal").addEventListener("click", (event) => {
  if (event.target.id === "grantModal") closeGrant();
});
document.getElementById("closeDrawer").addEventListener("click", () => {
  document.getElementById("detailDrawer").hidden = true;
});
document.getElementById("detailDrawer").addEventListener("click", (event) => {
  if (event.target.id === "detailDrawer") document.getElementById("detailDrawer").hidden = true;
});
document.getElementById("menuBtn").addEventListener("click", () => {
  document.getElementById("sidebar").classList.toggle("open");
});
document.addEventListener("keydown", (event) => {
  if (event.key !== "Escape") return;
  if (!document.getElementById("grantModal").hidden) closeGrant();
  if (!document.getElementById("detailDrawer").hidden) document.getElementById("detailDrawer").hidden = true;
});
document.addEventListener("click", (event) => {
  if (!event.target.closest(".stat")) document.querySelectorAll(".metric-pop").forEach((pop) => { pop.hidden = true; });
});

setView(state.view);
applyStaticTranslations();
renderRows();
applySalesTab(state.salesTab);
applyOrderTab(state.orderTab);
window.dispatchEvent(new CustomEvent("growth-language-change", { detail: { lang: state.lang } }));
