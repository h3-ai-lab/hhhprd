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
    "nav.community": "社群上传",
    "nav.bindings": "拉新关系维护",
    "bindings.title": "拉新关系维护",
    "community.title": "社群上传",
    "nav.system": "系统管理",
    "nav.settings": "系统配置",
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
    "metric.success.formula": "已发放关系数 ÷ 已发起权益发放关系数。重试不重复计入分母；分母为 0 时显示“—”。",
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
    "common.days": "天",
    "option.thailand": "泰国",
    "option.vietnam": "越南",
    "option.allSources": "全部来源",
    "option.allCc": "全部 CC",
    "option.allStatuses": "全部状态",
    "source.referral": "拉新推荐",
    "source.social": "社群上传",
    "source.regular": "常规赠送",
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
    "status.paid": "已付费",
    "status.trial": "体验中",
    "table.referrer": "推荐人",
    "table.referred": "被推荐人",
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
    "bindings.newSocial": "登记社群上传",
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
    "orders.title": "订单中心",
    "orders.subtitle": "查询付款订单与系统赠送订单",
    "orders.allOrders": "全部订单",
    "orders.giftOrders": "赠送订单",
    "orders.searchPlaceholder": "订单 ID / 用户 ID / 手机号",
    "orders.orderTypeAll": "订单类型：全部",
    "orders.membershipGrant": "会员赠送",
    "orders.paid": "付费订单",
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
    "users.maintainBinding": "维护拉新关系",
    "users.editInfo": "修改信息",
    "users.web": "网页",
    "users.count": "共 {count} 条记录",
    "grant.title": "添加会员 · {id}",
    "grant.subtitle": "为当前用户添加会员权益",
    "grant.openType": "开通类型",
    "grant.trialDays": "添加体验天数",
    "grant.trialDays.note": "用户可继续通过付费墙购买",
    "grant.manualTransfer": "手动银行转账",
    "grant.manualTransfer.note": "按普通会员开通",
    "grant.source": "权益来源",
    "grant.referredPhone": "被推荐人手机号",
    "grant.referredPhone.placeholder": "输入带国际区号的完整手机号",
    "grant.verify": "核验",
    "grant.verify.note": "按推荐人所属业务线匹配手机号，并核验注册状态、推荐唯一性和有效付费会员订单",
    "grant.contentLink": "内容链接",
    "grant.contentLink.note": "社群上传由营销中心独立审核列表维护",
    "grant.validityDays": "有效期天数",
    "grant.systemReward": "系统核验奖励",
    "grant.reason": "开通原因",
    "grant.reason.note": "拉新推荐会写入推荐人、被推荐人和订单，无需再手工备注 referral",
    "grant.confirm": "确认发放",
    "grant.issuing": "发放中…",
    "grant.helper.regular": "新用户从当前时间起算；未付费体验中的用户在现体验到期时间上累加。",
    "grant.helper.social": "社群上传由独立审核列表维护，并按审核和选中结果自动发奖。",
    "grant.helper.referral": "拉新推荐奖励由订单套餐自动确定，有效期单位不可修改。",
    "grant.reason.friend": "好友推荐活动权益",
    "grant.reason.social": "社群上传活动权益 · 审核有效",
    "grant.reason.generated": "拉新推荐 · {referrer}推荐{referred} · {plan}套餐 · 对应订单 {order}",
    "grant.error.empty": "请输入被推荐人手机号",
    "grant.error.format": "手机号格式无效，请输入带国际区号的完整手机号",
    "grant.error.self": "该手机号属于推荐人本人，不能绑定自荐关系",
    "grant.error.notFound": "该手机号在推荐人所属业务线下没有匹配账号",
    "grant.error.businessLine": "手机号用户属于{userLine}业务线，与推荐人所属{referrerLine}业务线不一致",
    "grant.error.multiple": "该手机号在同一业务线下匹配多个账号，请联系管理员核实",
    "grant.error.unverified": "请先完成被推荐人与订单核验",
    "grant.error.social": "请输入社群上传内容链接",
    "grant.verify.passed": "核验通过",
    "grant.verifiedUser": "{name} · 正式用户",
    "grant.userId": "用户 ID",
    "grant.phone": "手机号",
    "grant.businessLine": "业务线",
    "grant.businessLineMatch": "业务线匹配",
    "grant.businessLineMatched": "与推荐人一致",
    "grant.referrerBusinessLine": "推荐人业务线",
    "grant.referredBusinessLine": "被推荐人业务线",
    "grant.attributedOrder": "归因订单",
    "grant.plan": "套餐",
    "grant.amount": "实付金额",
    "grant.paidAt": "支付时间",
    "grant.thailand": "泰国",
    "grant.vietnam": "越南",
    "grant.maskedPhone": "+66 81 **** 5678",
    "grant.months": "{count} 个月",
    "grant.rewardMonths": "+{count} 个月",
    "toast.refreshed": "数据已刷新",
    "toast.referralSuccess": "推荐关系已绑定，权益已发放",
    "toast.socialSuccess": "社群上传记录已保存",
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
    "nav.community": "Community Uploads",
    "nav.bindings": "Growth Relationships",
    "bindings.title": "Growth Relationships",
    "community.title": "Community Uploads",
    "nav.system": "System",
    "nav.settings": "System Settings",
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
    "metric.success.formula": "Issued relationships ÷ relationships with an issuance request. Retries do not increase the denominator; show “—” when the denominator is zero.",
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
    "common.days": "days",
    "option.thailand": "Thailand",
    "option.vietnam": "Vietnam",
    "option.allSources": "All sources",
    "option.allCc": "All CCs",
    "option.allStatuses": "All statuses",
    "source.referral": "Referral",
    "source.social": "Community upload",
    "source.regular": "Standard grant",
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
    "status.paid": "Paid",
    "status.trial": "On trial",
    "table.referrer": "Referrer",
    "table.referred": "Referred user",
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
    "bindings.newSocial": "Record community upload",
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
    "orders.title": "Order Center",
    "orders.subtitle": "Paid orders and system gift orders",
    "orders.allOrders": "All orders",
    "orders.giftOrders": "Gift orders",
    "orders.searchPlaceholder": "Order ID / user ID / phone",
    "orders.orderTypeAll": "Order type: All",
    "orders.membershipGrant": "Membership grant",
    "orders.paid": "Paid order",
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
    "users.maintainBinding": "Manage referral relationship",
    "users.editInfo": "Edit info",
    "users.web": "Web",
    "users.count": "{count} records",
    "grant.title": "Add membership · {id}",
    "grant.subtitle": "Add a membership benefit for this user",
    "grant.openType": "Activation type",
    "grant.trialDays": "Add trial days",
    "grant.trialDays.note": "The user can still purchase through the paywall",
    "grant.manualTransfer": "Manual bank transfer",
    "grant.manualTransfer.note": "Activate as a standard membership",
    "grant.source": "Benefit source",
    "grant.referredPhone": "Referred user phone",
    "grant.referredPhone.placeholder": "Enter the full phone number with country code",
    "grant.verify": "Verify",
    "grant.verify.note": "Match the phone within the referrer's business line, then verify registration, referral uniqueness, and a valid paid membership order",
    "grant.contentLink": "Content link",
    "grant.contentLink.note": "Community uploads are managed in the dedicated review list",
    "grant.validityDays": "Validity",
    "grant.systemReward": "Verified reward",
    "grant.reason": "Grant reason",
    "grant.reason.note": "A referral saves the referrer, referred user, and order automatically; a manual referral note is not required",
    "grant.confirm": "Confirm and issue",
    "grant.issuing": "Issuing…",
    "grant.helper.regular": "New users start from the current time. Unpaid users on trial receive the benefit after their current trial end date.",
    "grant.helper.social": "Community uploads are managed in a dedicated review list and rewarded automatically from review and selection outcomes.",
    "grant.helper.referral": "The referral reward is determined by the order plan. The validity unit cannot be edited.",
    "grant.reason.friend": "Friend referral benefit",
    "grant.reason.social": "Community upload benefit · Approved content",
    "grant.reason.generated": "Referral · {referrer} referred {referred} · {plan} plan · Order {order}",
    "grant.error.empty": "Enter the referred user's phone number",
    "grant.error.format": "Invalid phone number. Enter the full number with its country code.",
    "grant.error.self": "This phone number belongs to the referrer and cannot be used for self-referral",
    "grant.error.notFound": "No account with this phone number was found in the referrer's business line",
    "grant.error.businessLine": "The phone account belongs to the {userLine} business line, which does not match the referrer's {referrerLine} business line",
    "grant.error.multiple": "This phone number matches multiple accounts in the same business line. Contact an administrator.",
    "grant.error.unverified": "Verify the referred user and order first",
    "grant.error.social": "Enter the community upload content link",
    "grant.verify.passed": "Verified",
    "grant.verifiedUser": "{name} · Registered",
    "grant.userId": "User ID",
    "grant.phone": "Phone",
    "grant.businessLine": "Business line",
    "grant.businessLineMatch": "Business-line match",
    "grant.businessLineMatched": "Matches referrer",
    "grant.referrerBusinessLine": "Referrer business line",
    "grant.referredBusinessLine": "Referred business line",
    "grant.attributedOrder": "Attributed order",
    "grant.plan": "Plan",
    "grant.amount": "Paid amount",
    "grant.paidAt": "Paid at",
    "grant.thailand": "Thailand",
    "grant.vietnam": "Vietnam",
    "grant.maskedPhone": "+66 81 **** 5678",
    "grant.months": "{count} months",
    "grant.rewardMonths": "+{count} months",
    "toast.refreshed": "Data refreshed",
    "toast.referralSuccess": "Referral linked and benefit issued",
    "toast.socialSuccess": "Community upload saved",
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

const state = {
  lang: detectLanguage(),
  view: "dashboard",
  dateField: "bind",
  source: "",
  cc: "",
  status: "",
  keyword: "",
  verified: false,
  verifiedUser: null,
  submitted: false,
  selectedId: "",
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

const REFERRER_CONTEXT = {
  phone: "+66 82 111 2233",
  businessLine: "thailand",
};

const PHONE_DIRECTORY = {
  "66812345678": {
    userId: "2120302295478341",
    name: "Narin K.",
    businessLine: "thailand",
    maskedPhone: "+66 81 **** 5678",
  },
  "84912345678": {
    userId: "2120302295479900",
    name: "Linh N.",
    businessLine: "vietnam",
    maskedPhone: "+84 91 **** 5678",
  },
  "66821112233": {
    userId: "2120302255148482561",
    name: "Pimchanok S.",
    businessLine: "thailand",
    maskedPhone: "+66 82 **** 2233",
  },
};

function t(key, values = {}) {
  const template = I18N[state.lang]?.[key] ?? I18N.zh[key] ?? key;
  return template.replace(/\{(\w+)\}/g, (_, name) => String(values[name] ?? `{${name}}`));
}

function sourceLabel(source) {
  return t(source === "social" ? "source.social" : "source.referral");
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

function normalizePhone(value) {
  return value.replace(/[^\d+]/g, "").replace(/(?!^)\+/g, "");
}

function businessLineLabel(line) {
  return t(line === "vietnam" ? "grant.vietnam" : "grant.thailand");
}

function money(value) {
  return `฿${Number(value).toLocaleString("en-US")}`;
}

function applyStaticTranslations() {
  document.documentElement.lang = state.lang === "en" ? "en" : "zh-CN";
  document.title = t("document.title");
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    if (element.closest("#bindingsView, #communityView, #communityReviewModal, #referralModal, #socialModal")) return;
    element.textContent = t(element.dataset.i18n);
  });
  document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => {
    if (element.closest("#bindingsView, #communityView, #communityReviewModal, #referralModal, #socialModal")) return;
    element.placeholder = t(element.dataset.i18nPlaceholder);
  });
  document.querySelectorAll("[data-i18n-aria-label]").forEach((element) => {
    if (element.closest("#bindingsView, #communityView, #communityReviewModal, #referralModal, #socialModal")) return;
    element.setAttribute("aria-label", t(element.dataset.i18nAriaLabel));
  });
  document.querySelectorAll("[data-lang]").forEach((button) => {
    button.classList.toggle("active", button.dataset.lang === state.lang);
  });
  document.getElementById("usersRowSummary").textContent = countLabel("users.count", 3);
  document.getElementById("grantTitle").textContent = t("grant.title", { id: "2120302255148482561" });
  document.getElementById("rewardSummaryValue").textContent = ruleLabel(1);
  const viewTitle = state.view === "dashboard" ? "nav.growth" : state.view === "community" ? "community.title" : state.view === "sales" ? "sales.title" : state.view === "orders" ? "orders.title" : "users.title";
  const viewCrumb = state.view === "dashboard" || state.view === "community" ? "crumb.growth" : state.view === "sales" ? "nav.sales" : state.view === "orders" ? "nav.orders" : "crumb.users";
  document.getElementById("pageTitle").textContent = t(viewTitle);
  document.getElementById("crumb").textContent = t(viewCrumb);
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

function setView(view) {
  state.view = view;
  const dashboard = view === "dashboard";
  const community = view === "community";
  const sales = view === "sales";
  const orders = view === "orders";
  document.getElementById("dashboardView").hidden = !dashboard;
  document.getElementById("bindingsView").hidden = true;
  document.getElementById("communityView").hidden = !community;
  document.getElementById("salesView").hidden = !sales;
  document.getElementById("ordersView").hidden = !orders;
  document.getElementById("usersView").hidden = dashboard || community || sales || orders;
  document.getElementById("pageTitle").textContent = t(dashboard ? "nav.growth" : community ? "community.title" : sales ? "sales.title" : orders ? "orders.title" : "users.title");
  document.getElementById("crumb").textContent = t(dashboard || community ? "crumb.growth" : sales ? "nav.sales" : orders ? "nav.orders" : "crumb.users");
  document.querySelectorAll(".nav-item[data-view]").forEach((item) => item.classList.toggle("active", item.dataset.view === view));
  document.getElementById("sidebar").classList.remove("open");
  if (dashboard) window.GrowthBindingView?.activate();
  if (community) window.CommunityUploadView?.activate();
}

function resetGrantForm() {
  state.verified = false;
  state.verifiedUser = null;
  state.submitted = false;
  document.getElementById("sourceSelect").value = "regular";
  document.getElementById("referredPhone").value = "";
  document.getElementById("socialLink").value = "";
  document.getElementById("verifyResult").hidden = true;
  document.getElementById("rewardSummary").hidden = true;
  document.getElementById("daysInput").readOnly = false;
  document.getElementById("daysInput").value = "30";
  document.getElementById("reasonInput").value = t("grant.reason.friend");
  document.getElementById("grantNotice").classList.remove("show");
  document.getElementById("confirmGrant").disabled = false;
  document.getElementById("confirmGrant").textContent = t("grant.confirm");
  handleSourceChange();
}

function handleSourceChange() {
  const source = document.getElementById("sourceSelect").value;
  document.getElementById("referralFields").hidden = source !== "referral";
  document.getElementById("socialFields").hidden = source !== "social";
  document.getElementById("rewardSummary").hidden = true;
  document.getElementById("daysInput").readOnly = false;
  document.getElementById("confirmGrant").disabled = source === "referral" && !state.verified;
  if (source === "social") {
    document.getElementById("daysInput").value = "5";
    document.getElementById("reasonInput").value = t("grant.reason.social");
    document.getElementById("daysHelper").textContent = t("grant.helper.social");
  } else if (source === "referral") {
    document.getElementById("daysHelper").textContent = t("grant.helper.referral");
    document.getElementById("reasonInput").value = t("grant.reason.friend");
  } else {
    document.getElementById("daysHelper").textContent = t("grant.helper.regular");
    document.getElementById("reasonInput").value = t("grant.reason.friend");
  }
}

function renderVerifiedReferral() {
  const user = state.verifiedUser;
  if (!user) return;
  document.getElementById("verifyResult").innerHTML = `
    <div class="verify-title"><strong>${t("grant.verifiedUser", { name: user.name })}</strong><span>${t("grant.verify.passed")}</span></div>
    <div class="verify-grid">
      <div><b>${t("grant.phone")}</b><span class="mono">${user.maskedPhone}</span></div>
      <div><b>${t("grant.userId")}</b><span class="mono">${user.userId}</span></div>
      <div><b>${t("grant.referrerBusinessLine")}</b><span>${businessLineLabel(REFERRER_CONTEXT.businessLine)}</span></div>
      <div><b>${t("grant.referredBusinessLine")}</b><span>${businessLineLabel(user.businessLine)} · ${t("grant.businessLineMatched")}</span></div>
      <div><b>${t("grant.attributedOrder")}</b><span class="mono">PO202611020018</span></div>
      <div><b>${t("grant.plan")}</b><span>${planLabel(3)}</span></div>
      <div><b>${t("grant.amount")}</b><span>฿3,490</span></div>
      <div><b>${t("grant.paidAt")}</b><span>2026-11-02</span></div>
    </div>`;
  document.getElementById("rewardSummary").hidden = false;
  document.getElementById("rewardSummaryValue").textContent = ruleLabel(1);
  document.getElementById("daysInput").readOnly = true;
  document.getElementById("daysInput").value = "";
  document.getElementById("reasonInput").value = t("grant.reason.generated", {
    referrer: "Pimchanok S.",
    referred: user.name,
    plan: planLabel(3),
    order: "PO202611020018",
  });
}

function verifyReferredUser() {
  const input = document.getElementById("referredPhone").value.trim();
  const box = document.getElementById("verifyResult");
  const confirm = document.getElementById("confirmGrant");
  state.verified = false;
  state.verifiedUser = null;
  confirm.disabled = true;
  document.getElementById("rewardSummary").hidden = true;
  box.hidden = false;

  if (!input) {
    box.innerHTML = `<div class="verify-error">${t("grant.error.empty")}</div>`;
    return;
  }

  const normalizedPhone = normalizePhone(input);
  if (!/^\+?[1-9]\d{7,14}$/.test(normalizedPhone)) {
    box.innerHTML = `<div class="verify-error">${t("grant.error.format")}</div>`;
    return;
  }

  const user = PHONE_DIRECTORY[normalizedPhone.replace(/^\+/, "")];
  if (!user) {
    box.innerHTML = `<div class="verify-error">${t("grant.error.notFound")}</div>`;
    return;
  }

  if (user.userId === "2120302255148482561") {
    box.innerHTML = `<div class="verify-error">${t("grant.error.self")}</div>`;
    return;
  }

  if (user.businessLine !== REFERRER_CONTEXT.businessLine) {
    box.innerHTML = `<div class="verify-error">${t("grant.error.businessLine", {
      userLine: businessLineLabel(user.businessLine),
      referrerLine: businessLineLabel(REFERRER_CONTEXT.businessLine),
    })}</div>`;
    return;
  }

  state.verifiedUser = user;
  state.verified = true;
  confirm.disabled = false;
  renderVerifiedReferral();
}

function openGrant() {
  setView("dashboard");
  window.GrowthBindingView?.openReferral();
}

function closeGrant() {
  document.getElementById("grantModal").hidden = true;
}

function confirmGrant() {
  const source = document.getElementById("sourceSelect").value;
  const notice = document.getElementById("grantNotice");
  if (source === "referral" && !state.verified) {
    notice.textContent = t("grant.error.unverified");
    notice.classList.add("show");
    return;
  }
  if (source === "social" && !document.getElementById("socialLink").value.trim()) {
    notice.textContent = t("grant.error.social");
    notice.classList.add("show");
    return;
  }

  state.submitted = true;
  document.getElementById("confirmGrant").disabled = true;
  document.getElementById("confirmGrant").textContent = t("grant.issuing");

  if (source === "referral" && !relationships.some((row) => row.referredId === state.verifiedUser.userId)) {
    relationships.unshift({
      id: "RR-202611-0128",
      referrerId: "2120302255148482561",
      referrer: "Pimchanok S.",
      referredId: state.verifiedUser.userId,
      referred: state.verifiedUser.name,
      referredPhone: "66812345678",
      referredPhoneMasked: state.verifiedUser.maskedPhone,
      source: "referral",
      orderId: "PO202611020018",
      planMonths: 3,
      amount: 3490,
      orderAt: "2026-11-02",
      bindAt: "2026-11-09",
      operator: "Thanya C.",
      owner: "Thanya C.",
      ruleMonths: 1,
      status: "success",
    });
  }

  window.setTimeout(() => {
    document.getElementById("confirmGrant").textContent = t("grant.confirm");
    closeGrant();
    renderRows();
    showToast(t(source === "referral" ? "toast.referralSuccess" : "toast.socialSuccess"));
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
  const viewTitle = state.view === "dashboard" ? "nav.growth" : state.view === "community" ? "community.title" : state.view === "sales" ? "sales.title" : state.view === "orders" ? "orders.title" : "users.title";
  document.getElementById("pageTitle").textContent = t(viewTitle);
  document.getElementById("crumb").textContent = t(state.view === "dashboard" || state.view === "community" ? "crumb.growth" : state.view === "sales" ? "nav.sales" : state.view === "orders" ? "nav.orders" : "crumb.users");
  renderRows();
  if (!document.getElementById("grantModal").hidden) {
    if (state.verified) renderVerifiedReferral();
    else {
      document.getElementById("verifyResult").hidden = true;
      handleSourceChange();
    }
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

document.querySelectorAll(".date-tab").forEach((button) => {
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
document.getElementById("openGrantBtn").addEventListener("click", openGrant);
document.querySelectorAll(".open-grant-secondary").forEach((button) => button.addEventListener("click", openGrant));
document.getElementById("sourceSelect").addEventListener("change", handleSourceChange);
document.getElementById("verifyBtn").addEventListener("click", verifyReferredUser);
document.getElementById("referredPhone").addEventListener("keydown", (event) => {
  if (event.key === "Enter") verifyReferredUser();
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
document.addEventListener("click", (event) => {
  if (!event.target.closest(".stat")) document.querySelectorAll(".metric-pop").forEach((pop) => { pop.hidden = true; });
});

applyStaticTranslations();
renderRows();
window.dispatchEvent(new CustomEvent("growth-language-change", { detail: { lang: state.lang } }));
