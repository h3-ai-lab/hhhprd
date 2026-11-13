(() => {
const TEXT = {
  zh: {
    "community.title": "社媒推荐",
    "community.subtitle": "CC 代用户登记内容，社媒运营审核，按审核和官方选中结果自动发奖",
    "community.create": "登记社媒推荐",
    "community.pendingReview": "待审核",
    "community.pendingReviewNote": "需要社媒运营处理",
    "community.awaitingSelection": "待确认选中",
    "community.awaitingSelectionNote": "基础 +5 天已处理",
    "community.selected": "官方选中",
    "community.selectedNote": "额外 +2 个月",
    "community.rejected": "审核无效",
    "community.rejectedNote": "不发放权益",
    "community.listTitle": "投稿审核",
    "community.reviewStatus": "审核状态",
    "community.selectionStatus": "选中状态",
    "community.pending": "待审核",
    "community.approved": "审核通过",
    "community.invalid": "审核无效",
    "community.pendingSelection": "待选择",
    "community.officiallySelected": "官方选中",
    "community.notSelected": "未选中",
    "community.keywordPlaceholder": "用户 ID / 投稿 ID / 订单 ID",
    "community.submissionId": "投稿 ID",
    "community.channel": "提交渠道",
    "community.platform": "平台",
    "community.lesson": "课堂信息",
    "community.submittedAt": "提交时间",
    "community.empty": "当前筛选下没有社媒推荐记录",
    "community.count": "共 {count} 条记录",
    "community.ccEntry": "CC 登记",
    "community.platformFacebook": "Facebook",
    "community.platformInstagram": "Instagram",
    "community.platformTiktok": "TikTok",
    "community.platformYoutube": "YouTube",
    "community.platformOther": "其他",
    "community.businessThailand": "泰国业务线",
    "community.photo": "图片",
    "community.video": "视频",
    "community.baseReward": "+5 天",
    "community.selectedReward": "+2 个月",
    "community.notSelectedReward": "+15 天",
    "community.action": "审核",
    "community.status.pendingReview": "待审核",
    "community.status.processing": "待发放",
    "community.status.issued": "已发放",
    "community.status.failed": "发放失败",
    "giftStatus.CREATED": "已生成，待发放",
    "giftStatus.FULFILLED": "已完成",
    "giftStatus.NOT_CREATED": "未生成",
    "communityReview.title": "审核社媒推荐",
    "communityReview.result": "审核结果",
    "communityReview.reason": "无效原因",
    "communityReview.note": "审核备注",
    "communityReview.notePlaceholder": "补充无效原因或审核说明",
    "communityReview.enumLabel": "本次发奖规则：",
    "communityReview.rewardHint": "有效投稿 +5 天；官方选中 +2 个月；未选中 +15 天。",
    "communityReview.save": "保存审核结果",
    "communityReview.rejected": "请选择无效原因",
    "communityReview.noteRequired": "拒绝投稿时必须填写审核备注",
    "communityReview.authRequired": "官方选中前必须取得官方使用授权",
    "communityReview.success": "社媒推荐审核结果已保存",
    "communityReview.approvedBase": "投稿有效，已创建基础 +5 天奖励订单",
    "communityReview.selectedTotal": "投稿有效，已生成 +5 天与 +2 个月奖励订单",
    "communityReview.notSelectedTotal": "投稿有效，已生成 +5 天与 +15 天奖励订单",
    "communityReview.rejectedHint": "审核无效，不生成奖励事件和赠送订单",
    "communityReason.contentNotFound": "内容不存在或无法访问",
    "communityReason.notOwnContent": "非本人内容",
    "communityReason.notDinoClass": "不属于 Dino AI 课堂",
    "communityReason.duplicateContent": "重复内容",
    "communityReason.other": "其他",
    "communityAuth.authorized": "已授权官方使用",
    "communityAuth.notAuthorized": "未授权官方使用",
    "communityCreate.title": "登记社媒推荐",
    "communityCreate.subtitle": "代用户登记内容，提交后进入社媒运营审核",
    "communityCreate.userId": "用户 ID",
    "communityCreate.userIdPlaceholder": "输入完整用户 ID",
    "communityCreate.verify": "核验",
    "communityCreate.verifyNote": "精确核验用户、正式注册状态、业务线和可关联的课堂记录",
    "communityCreate.lesson": "课堂证据",
    "communityCreate.lessonPlaceholder": "请选择用户课堂",
    "communityCreate.authorization": "官方使用授权",
    "communityCreate.contentRefType": "内容凭证类型",
    "communityCreate.externalLink": "外部内容链接",
    "communityCreate.uploadedFile": "上传文件凭证",
    "communityCreate.contentLink": "内容链接",
    "communityCreate.contentFile": "内容文件",
    "communityCreate.contentLinkPlaceholder": "输入可访问的内容链接",
    "communityCreate.note": "登记备注",
    "communityCreate.notePlaceholder": "补充线下核验信息",
    "communityCreate.enumLabel": "提交渠道：",
    "communityCreate.registrationHint": "登记成功后进入 PENDING_REVIEW，不立即发放权益。",
    "communityCreate.save": "提交登记",
    "communityCreate.emptyUser": "请输入用户 ID",
    "communityCreate.invalidUser": "用户 ID 格式无效，请输入完整数字 ID",
    "communityCreate.notFound": "未找到可登记的正式注册用户",
    "communityCreate.verified": "已核验正式用户",
    "communityCreate.lessonRequired": "请选择该用户的课堂记录",
    "communityCreate.linkRequired": "请输入可访问的内容链接",
    "communityCreate.linkInvalid": "内容链接必须为完整的 http 或 https 地址",
    "communityCreate.fileRequired": "请上传可核验的内容文件",
    "communityCreate.duplicate": "同一用户已登记该内容链接",
    "communityCreate.success": "社媒推荐已登记，等待社媒运营审核",
    "table.user": "用户",
    "table.contentType": "内容类型",
    "table.reward": "奖励",
    "table.giftOrder": "赠送订单",
    "table.action": "操作",
    "filter.keyword": "关键词",
    "filter.dateRange": "日期范围",
    "filter.to": "至",
    "option.allStatuses": "全部状态",
    "common.reset": "重置筛选",
    "common.cancel": "取消",
    "common.close": "关闭",
    "bindings.page": "第 1 页",
  },
  en: {
    "community.title": "Social Media Recommendations",
    "community.subtitle": "CCs register social media recommendations for users; operations review submissions and rewards are issued automatically",
    "community.create": "Register social media recommendation",
    "community.pendingReview": "Pending review",
    "community.pendingReviewNote": "Requires social media operations review",
    "community.awaitingSelection": "Awaiting selection",
    "community.awaitingSelectionNote": "Base +5 days processed",
    "community.selected": "Officially selected",
    "community.selectedNote": "Additional +2 months",
    "community.rejected": "Rejected",
    "community.rejectedNote": "No benefit issued",
    "community.listTitle": "Submission Review",
    "community.reviewStatus": "Review status",
    "community.selectionStatus": "Selection status",
    "community.pending": "Pending review",
    "community.approved": "Approved",
    "community.invalid": "Rejected",
    "community.pendingSelection": "Pending selection",
    "community.officiallySelected": "Officially selected",
    "community.notSelected": "Not selected",
    "community.keywordPlaceholder": "User ID / submission ID / order ID",
    "community.submissionId": "Submission ID",
    "community.channel": "Submission channel",
    "community.platform": "Platform",
    "community.lesson": "Lesson",
    "community.submittedAt": "Submitted at",
    "community.empty": "No social media recommendations match the current filters",
    "community.count": "{count} records",
    "community.ccEntry": "CC entry",
    "community.platformFacebook": "Facebook",
    "community.platformInstagram": "Instagram",
    "community.platformTiktok": "TikTok",
    "community.platformYoutube": "YouTube",
    "community.platformOther": "Other",
    "community.businessThailand": "Thailand business line",
    "community.photo": "Photo",
    "community.video": "Video",
    "community.baseReward": "+5 days",
    "community.selectedReward": "+2 months",
    "community.notSelectedReward": "+15 days",
    "community.action": "Review",
    "community.status.pendingReview": "Pending review",
    "community.status.processing": "Pending issuance",
    "community.status.issued": "Issued",
    "community.status.failed": "System failure",
    "giftStatus.CREATED": "Created, pending fulfillment",
    "giftStatus.FULFILLED": "Fulfilled",
    "giftStatus.NOT_CREATED": "Not created",
    "communityReview.title": "Review Social Media Recommendation",
    "communityReview.result": "Review result",
    "communityReview.reason": "Rejection reason",
    "communityReview.note": "Review note",
    "communityReview.notePlaceholder": "Explain the rejection or add a review note",
    "communityReview.enumLabel": "Reward rules: ",
    "communityReview.rewardHint": "Approved +5 days; officially selected +2 months; not selected +15 days.",
    "communityReview.save": "Save review result",
    "communityReview.rejected": "Select a rejection reason",
    "communityReview.noteRequired": "A review note is required when rejecting a submission",
    "communityReview.authRequired": "Official-use authorization is required before official selection",
    "communityReview.success": "Social media recommendation review saved",
    "communityReview.approvedBase": "Content approved; base +5-day reward order created",
    "communityReview.selectedTotal": "Content approved; +5-day and +2-month reward orders created",
    "communityReview.notSelectedTotal": "Content approved; +5-day and +15-day reward orders created",
    "communityReview.rejectedHint": "Rejected; no reward event or gift order is created",
    "communityReason.contentNotFound": "Content not found or inaccessible",
    "communityReason.notOwnContent": "Content does not belong to the user",
    "communityReason.notDinoClass": "Not a Dino AI class",
    "communityReason.duplicateContent": "Duplicate content",
    "communityReason.other": "Other",
    "communityAuth.authorized": "Authorized for official use",
    "communityAuth.notAuthorized": "Not authorized for official use",
    "communityCreate.title": "Register Social Media Recommendation",
    "communityCreate.subtitle": "Register content on behalf of the user; the record then enters operations review",
    "communityCreate.userId": "User ID",
    "communityCreate.userIdPlaceholder": "Enter the complete user ID",
    "communityCreate.verify": "Verify",
    "communityCreate.verifyNote": "Verify the user, registration type, business line, and eligible lesson records",
    "communityCreate.lesson": "Lesson evidence",
    "communityCreate.lessonPlaceholder": "Select a user lesson",
    "communityCreate.authorization": "Official-use authorization",
    "communityCreate.contentRefType": "Evidence type",
    "communityCreate.externalLink": "External content link",
    "communityCreate.uploadedFile": "Upload evidence file",
    "communityCreate.contentLink": "Content link",
    "communityCreate.contentFile": "Content file",
    "communityCreate.contentLinkPlaceholder": "Enter an accessible content link",
    "communityCreate.note": "Registration note",
    "communityCreate.notePlaceholder": "Add offline verification details",
    "communityCreate.enumLabel": "Submission channel: ",
    "communityCreate.registrationHint": "A successful registration enters PENDING_REVIEW and does not issue a benefit.",
    "communityCreate.save": "Submit registration",
    "communityCreate.emptyUser": "Enter the user ID",
    "communityCreate.invalidUser": "Invalid user ID. Enter the complete numeric ID.",
    "communityCreate.notFound": "No eligible registered user was found",
    "communityCreate.verified": "Verified registered user",
    "communityCreate.lessonRequired": "Select a lesson record for this user",
    "communityCreate.linkRequired": "Enter an accessible content link",
    "communityCreate.linkInvalid": "The content link must be a complete http or https URL",
    "communityCreate.fileRequired": "Upload a verifiable content file",
    "communityCreate.duplicate": "This content link is already registered for the user",
    "communityCreate.success": "Social media recommendation registered and sent for operations review",
    "table.user": "User",
    "table.contentType": "Content type",
    "table.reward": "Reward",
    "table.giftOrder": "Gift order",
    "table.action": "Action",
    "filter.keyword": "Keyword",
    "filter.dateRange": "Date range",
    "filter.to": "to",
    "option.allStatuses": "All statuses",
    "common.reset": "Reset filters",
    "common.cancel": "Cancel",
    "common.close": "Close",
    "bindings.page": "Page 1",
  },
};

const state = {
  lang: "zh",
  selectedId: "",
  noticeKey: "",
  toastKey: "",
  createUser: null,
  createNoticeKey: "",
};

const COMMUNITY_USERS = {
  "2120302255148482561": {
    id: "2120302255148482561",
    name: "Pimchanok S.",
    businessLine: "community.businessThailand",
    currentOwner: "Thanya C.",
    lessons: ["Dino Starter · Nov 08", "Dino Explorer · Nov 07"],
  },
  "2120302281472036721": {
    id: "2120302281472036721",
    name: "Kanya R.",
    businessLine: "community.businessThailand",
    currentOwner: "Mina P.",
    lessons: ["Dino Explorer · Nov 07", "Dino Creator · Nov 06"],
  },
  "2120302210461928824": {
    id: "2120302210461928824",
    name: "Arunee T.",
    businessLine: "community.businessThailand",
    currentOwner: "Nok S.",
    lessons: ["Dino Creator · Nov 06", "Dino Starter · Nov 05"],
  },
};

const submissions = [
  {
    id: "CMT-202611-0038",
    userId: "2120302255148482561",
    user: "Pimchanok S.",
    channel: "community.ccEntry",
    platform: "community.platformFacebook",
    registeredBy: "Thanya C.",
    contentRefType: "EXTERNAL_LINK",
    contentLink: "https://facebook.com/share/p/20261109038",
    contentType: "community.photo",
    lesson: "Dino Starter · Nov 08",
    submittedAt: "2026-11-09 18:20",
    authorized: true,
    reviewStatus: "PENDING_REVIEW",
    selectionStatus: "PENDING_SELECTION",
    reward: "—",
    giftOrderId: "—",
    giftOrderStatus: "NOT_CREATED",
    rewardStatus: "pendingReview",
    reviewNote: "",
  },
  {
    id: "CMT-202611-0034",
    userId: "2120302281472036721",
    user: "Kanya R.",
    channel: "community.ccEntry",
    platform: "community.platformFacebook",
    registeredBy: "Mina P.",
    contentRefType: "EXTERNAL_LINK",
    contentLink: "https://facebook.com/share/p/20261108034",
    contentType: "community.video",
    lesson: "Dino Explorer · Nov 07",
    submittedAt: "2026-11-08 15:42",
    authorized: false,
    reviewStatus: "APPROVED",
    selectionStatus: "NOT_SELECTED",
    reward: "community.baseReward|community.notSelectedReward",
    giftOrderId: "GRT202611080072",
    giftOrderStatus: "FULFILLED",
    rewardStatus: "issued",
    reviewNote: "",
  },
  {
    id: "CMT-202611-0029",
    userId: "2120302210461928824",
    user: "Arunee T.",
    channel: "community.ccEntry",
    platform: "community.platformInstagram",
    registeredBy: "Nok S.",
    contentRefType: "EXTERNAL_LINK",
    contentLink: "https://instagram.com/p/20261107029",
    contentType: "community.photo",
    lesson: "Dino Creator · Nov 06",
    submittedAt: "2026-11-07 20:08",
    authorized: true,
    reviewStatus: "APPROVED",
    selectionStatus: "OFFICIALLY_SELECTED",
    reward: "community.baseReward|community.selectedReward",
    giftOrderId: "GRT202611070081",
    giftOrderStatus: "FULFILLED",
    rewardStatus: "issued",
    reviewNote: "",
  },
  {
    id: "CMT-202611-0022",
    userId: "2120302295478341",
    user: "Narin K.",
    channel: "community.ccEntry",
    platform: "community.platformTiktok",
    registeredBy: "Thanya C.",
    contentRefType: "EXTERNAL_LINK",
    contentLink: "https://tiktok.com/@dino/video/20261106022",
    contentType: "community.video",
    lesson: "Dino Starter · Nov 05",
    submittedAt: "2026-11-06 12:14",
    authorized: false,
    reviewStatus: "APPROVED",
    selectionStatus: "PENDING_SELECTION",
    reward: "community.baseReward",
    giftOrderId: "GRT202611060066",
    giftOrderStatus: "CREATED",
    rewardStatus: "processing",
    reviewNote: "",
  },
];

function t(key, values = {}) {
  const template = TEXT[state.lang]?.[key] ?? TEXT.zh[key] ?? key;
  return template.replace(/\{(\w+)\}/g, (_, name) => String(values[name] ?? `{${name}}`));
}

function statusClass(status) {
  if (status === "APPROVED" || status === "OFFICIALLY_SELECTED" || status === "NOT_SELECTED") return "success";
  if (status === "REJECTED") return "failed";
  return "processing";
}

function reviewLabel(status) {
  if (status === "APPROVED") return t("community.approved");
  if (status === "REJECTED") return t("community.invalid");
  return t("community.pending");
}

function selectionLabel(status) {
  if (status === "PENDING_SELECTION") return t("community.pendingSelection");
  if (status === "OFFICIALLY_SELECTED") return t("community.officiallySelected");
  if (status === "NOT_SELECTED") return t("community.notSelected");
  return "—";
}

function rewardText(row) {
  if (row.reviewStatus === "PENDING_REVIEW" || row.reviewStatus === "REJECTED") return "—";
  return row.reward.split("|").map((key) => t(key)).join(" + ");
}

function renderRows() {
  const review = document.getElementById("communityReviewFilter").value;
  const selection = document.getElementById("communitySelectionFilter").value;
  const keyword = document.getElementById("communityKeyword").value.trim().toLowerCase();
  const start = document.getElementById("communityStartDate").value;
  const end = document.getElementById("communityEndDate").value;
  const rows = submissions.filter((row) => {
    const reviewMatch = !review || row.reviewStatus === review;
    const selectionMatch = !selection || row.selectionStatus === selection;
    const keywordMatch = !keyword || [row.id, row.userId, row.user, row.giftOrderId, row.contentLink, row.registeredBy, t(row.platform)].some((value) => String(value || "").toLowerCase().includes(keyword));
    const date = row.submittedAt.slice(0, 10);
    return reviewMatch && selectionMatch && keywordMatch && (!start || date >= start) && (!end || date <= end);
  });
  document.getElementById("communityRows").innerHTML = rows.map((row) => `
    <tr>
      <td class="mono">${row.id}</td>
      <td>${row.user}<span class="secondary mono">${row.userId}</span></td>
      <td>${t(row.channel)}<span class="secondary">${row.registeredBy}</span></td>
      <td>${t(row.platform)}</td>
      <td>${t(row.contentType)}</td>
      <td>${row.lesson}</td>
      <td>${row.submittedAt}</td>
      <td><span class="status ${statusClass(row.reviewStatus)}">${reviewLabel(row.reviewStatus)}</span></td>
      <td>${selectionLabel(row.selectionStatus)}</td>
      <td>${rewardText(row)}</td>
      <td><span class="mono">${row.giftOrderId}</span><span class="secondary">${t(`giftStatus.${row.giftOrderStatus}`)} · ฿0</span></td>
      <td><button class="btn small review-submission" data-id="${row.id}">${t("community.action")}</button></td>
    </tr>`).join("");
  document.getElementById("communityEmpty").hidden = rows.length > 0;
  document.getElementById("communityCount").textContent = t("community.count", { count: rows.length });
  document.getElementById("communityPendingCount").textContent = submissions.filter((row) => row.reviewStatus === "PENDING_REVIEW").length;
  document.getElementById("communityAwaitingSelectionCount").textContent = submissions.filter((row) => row.reviewStatus === "APPROVED" && row.selectionStatus === "PENDING_SELECTION").length;
  document.getElementById("communitySelectedCount").textContent = submissions.filter((row) => row.selectionStatus === "OFFICIALLY_SELECTED").length;
  document.getElementById("communityRejectedCount").textContent = submissions.filter((row) => row.reviewStatus === "REJECTED").length;
  document.querySelectorAll(".review-submission").forEach((button) => button.addEventListener("click", () => openReview(button.dataset.id)));
}

function showCreateNotice(key) {
  state.createNoticeKey = key;
  const notice = document.getElementById("communityCreateNotice");
  notice.textContent = t(key);
  notice.classList.add("show");
}

function renderCreateUserResult() {
  const result = document.getElementById("communityCreateUserResult");
  if (!state.createUser) {
    result.hidden = true;
    result.textContent = "";
    return;
  }
  const user = state.createUser;
  result.hidden = false;
  result.className = "relation-hint";
  result.innerHTML = `
    <strong>${t("communityCreate.verified")}</strong>
    <span>${user.name} · ${user.id}</span>
    <span>${t(user.businessLine)}</span>
    <span>${t("table.owner")}: ${user.currentOwner}</span>`;
}

function updateCreateLessonOptions(user) {
  const select = document.getElementById("communityCreateLesson");
  const lessonOptions = user?.lessons || [];
  select.innerHTML = `<option value="">${t("communityCreate.lessonPlaceholder")}</option>${lessonOptions.map((lesson) => `<option value="${lesson}">${lesson}</option>`).join("")}`;
}

function toggleCreateContentRef() {
  const upload = document.getElementById("communityCreateRefType").value === "UPLOADED_FILE";
  document.getElementById("communityContentLinkField").hidden = upload;
  document.getElementById("communityContentFileField").hidden = !upload;
}

function openCommunityCreate(prefill = null) {
  state.createUser = null;
  state.createNoticeKey = "";
  document.getElementById("communityCreateNotice").classList.remove("show");
  document.getElementById("communityCreateUserId").value = prefill?.userId || "";
  document.getElementById("communityCreatePlatform").value = "community.platformFacebook";
  document.getElementById("communityCreateType").value = "community.photo";
  document.getElementById("communityCreateAuthorization").value = "AUTHORIZED";
  document.getElementById("communityCreateRefType").value = "EXTERNAL_LINK";
  document.getElementById("communityCreateContentLink").value = "";
  document.getElementById("communityCreateContentFile").value = "";
  document.getElementById("communityCreateNote").value = "";
  document.getElementById("saveCommunityCreate").disabled = true;
  updateCreateLessonOptions(null);
  toggleCreateContentRef();
  renderCreateUserResult();
  document.getElementById("communityCreateModal").hidden = false;
  if (prefill?.userId) verifyCommunityUser();
}

function closeCommunityCreate() {
  document.getElementById("communityCreateModal").hidden = true;
}

function verifyCommunityUser() {
  const value = document.getElementById("communityCreateUserId").value.trim();
  state.createUser = null;
  document.getElementById("saveCommunityCreate").disabled = true;
  updateCreateLessonOptions(null);

  if (!value) {
    showCreateNotice("communityCreate.emptyUser");
    renderCreateUserResult();
    return;
  }
  if (!/^\d{10,24}$/.test(value)) {
    showCreateNotice("communityCreate.invalidUser");
    renderCreateUserResult();
    return;
  }
  const user = COMMUNITY_USERS[value];
  if (!user) {
    showCreateNotice("communityCreate.notFound");
    renderCreateUserResult();
    return;
  }

  state.createUser = user;
  state.createNoticeKey = "";
  document.getElementById("communityCreateNotice").classList.remove("show");
  document.getElementById("saveCommunityCreate").disabled = false;
  updateCreateLessonOptions(user);
  renderCreateUserResult();
}

function saveCommunityCreate() {
  if (!state.createUser) {
    showCreateNotice("communityCreate.notFound");
    return;
  }
  const lesson = document.getElementById("communityCreateLesson").value;
  const refType = document.getElementById("communityCreateRefType").value;
  const contentLink = document.getElementById("communityCreateContentLink").value.trim();
  if (!lesson) {
    showCreateNotice("communityCreate.lessonRequired");
    return;
  }
  let contentRef = contentLink;
  if (refType === "EXTERNAL_LINK") {
    if (!contentLink) {
      showCreateNotice("communityCreate.linkRequired");
      return;
    }
    try {
      const url = new URL(contentLink);
      if (url.protocol !== "http:" && url.protocol !== "https:") throw new Error("invalid");
    } catch {
      showCreateNotice("communityCreate.linkInvalid");
      return;
    }
  } else {
    const file = document.getElementById("communityCreateContentFile").files?.[0];
    if (!file) {
      showCreateNotice("communityCreate.fileRequired");
      return;
    }
    contentRef = `upload://${file.name}`;
  }
  if (submissions.some((row) => row.userId === state.createUser.id && row.contentLink?.toLowerCase() === contentRef.toLowerCase())) {
    showCreateNotice("communityCreate.duplicate");
    return;
  }

  submissions.unshift({
    id: `CMT-202611-${String(100 + submissions.length).padStart(4, "0")}`,
    userId: state.createUser.id,
    user: state.createUser.name,
    channel: "community.ccEntry",
    platform: document.getElementById("communityCreatePlatform").value,
    registeredBy: "Thanya C.",
    contentRefType: refType,
    contentLink: contentRef,
    contentType: document.getElementById("communityCreateType").value,
    lesson,
    submittedAt: "2026-11-13 17:30",
    authorized: document.getElementById("communityCreateAuthorization").value === "AUTHORIZED",
    reviewStatus: "PENDING_REVIEW",
    selectionStatus: "PENDING_SELECTION",
    reward: "—",
    giftOrderId: "—",
    giftOrderStatus: "NOT_CREATED",
    rewardStatus: "pendingReview",
    reviewNote: document.getElementById("communityCreateNote").value.trim(),
  });
  closeCommunityCreate();
  showToast("communityCreate.success");
  renderRows();
}

function applyTranslations() {
  ["communityView", "communityCreateModal", "communityReviewModal"].forEach((id) => {
    const root = document.getElementById(id);
    root.querySelectorAll("[data-i18n]").forEach((element) => { element.textContent = t(element.dataset.i18n); });
    root.querySelectorAll("[data-i18n-placeholder]").forEach((element) => { element.placeholder = t(element.dataset.i18nPlaceholder); });
    root.querySelectorAll("[data-i18n-aria-label]").forEach((element) => { element.setAttribute("aria-label", t(element.dataset.i18nAriaLabel)); });
  });
  renderRows();
  if (state.noticeKey) document.getElementById("communityReviewNotice").textContent = t(state.noticeKey);
  if (state.createNoticeKey) document.getElementById("communityCreateNotice").textContent = t(state.createNoticeKey);
  renderCreateUserResult();
  if (state.toastKey) document.getElementById("toast").textContent = t(state.toastKey);
}

function openReview(id) {
  const row = submissions.find((item) => item.id === id);
  if (!row) return;
  state.selectedId = id;
  document.getElementById("communityReviewId").textContent = row.id;
  document.getElementById("communitySubmissionSummary").innerHTML =
    `<strong>${row.user} · ${row.userId}</strong><span>${t(row.channel)} · ${t(row.platform)} · ${t(row.contentType)} · ${row.lesson}</span><span>${t(row.authorized ? "communityAuth.authorized" : "communityAuth.notAuthorized")} · CC: ${row.registeredBy}</span>`;
  document.getElementById("communityReviewResult").value = row.reviewStatus === "REJECTED" ? "REJECTED" : "APPROVED";
  document.getElementById("communitySelectionStatus").value = row.selectionStatus || "PENDING_SELECTION";
  document.getElementById("communityReviewNote").value = row.reviewNote || "";
  state.noticeKey = "";
  document.getElementById("communityReviewNotice").classList.remove("show");
  toggleReason();
  document.getElementById("communityReviewModal").hidden = false;
}

function toggleReason() {
  const rejected = document.getElementById("communityReviewResult").value === "REJECTED";
  document.getElementById("communityReasonField").hidden = !rejected;
  document.getElementById("communityReasonNoteField").hidden = !rejected;
  document.getElementById("communitySelectionField").hidden = rejected;
}

function showToast(message) {
  state.toastKey = message;
  const toast = document.getElementById("toast");
  toast.textContent = t(message);
  toast.classList.remove("show");
  void toast.offsetWidth;
  toast.classList.add("show");
  setTimeout(() => { toast.classList.remove("show"); state.toastKey = ""; }, 2200);
}

function saveReview() {
  const row = submissions.find((item) => item.id === state.selectedId);
  if (!row) return;
  const reviewStatus = document.getElementById("communityReviewResult").value;
  const selectionStatus = document.getElementById("communitySelectionStatus").value;
  const reviewReason = document.getElementById("communityReviewReason").value;
  const reviewNote = document.getElementById("communityReviewNote").value.trim();
  const notice = document.getElementById("communityReviewNotice");
  if (reviewStatus === "REJECTED") {
    if (!reviewReason || !reviewNote) {
      state.noticeKey = "communityReview.noteRequired";
      notice.textContent = t(state.noticeKey);
      notice.classList.add("show");
      return;
    }
    row.reviewStatus = "REJECTED";
    row.selectionStatus = null;
    row.reviewReason = reviewReason;
    row.reviewNote = reviewNote;
    row.reward = "—";
    row.giftOrderId = "—";
    row.giftOrderStatus = "NOT_CREATED";
    row.rewardStatus = "pendingReview";
    state.noticeKey = "communityReview.rejectedHint";
  } else {
    if (selectionStatus === "OFFICIALLY_SELECTED" && !row.authorized) {
      state.noticeKey = "communityReview.authRequired";
      notice.textContent = t(state.noticeKey);
      notice.classList.add("show");
      return;
    }
    row.reviewStatus = "APPROVED";
    row.selectionStatus = selectionStatus;
    row.reviewReason = "";
    row.reviewNote = reviewNote;
    row.reward = selectionStatus === "OFFICIALLY_SELECTED"
      ? "community.baseReward|community.selectedReward"
      : selectionStatus === "NOT_SELECTED"
        ? "community.baseReward|community.notSelectedReward"
        : "community.baseReward";
    row.giftOrderId = row.giftOrderId === "—" ? `GRT202611${String(160 + submissions.indexOf(row)).padStart(4, "0")}` : row.giftOrderId;
    row.giftOrderStatus = "CREATED";
    row.rewardStatus = "processing";
    state.noticeKey = selectionStatus === "PENDING_SELECTION"
      ? "communityReview.approvedBase"
      : selectionStatus === "OFFICIALLY_SELECTED"
        ? "communityReview.selectedTotal"
        : "communityReview.notSelectedTotal";
  }
  document.getElementById("communityReviewModal").hidden = true;
  showToast(state.noticeKey);
  renderRows();
}

document.getElementById("openCommunityCreate").addEventListener("click", () => openCommunityCreate());
document.querySelectorAll(".open-community-create").forEach((button) => button.addEventListener("click", () => {
  openCommunityCreate({
    userId: button.dataset.userId,
    userName: button.dataset.userName,
  });
}));
document.getElementById("verifyCommunityUser").addEventListener("click", verifyCommunityUser);
document.getElementById("communityCreateUserId").addEventListener("input", () => {
  state.createUser = null;
  state.createNoticeKey = "";
  document.getElementById("communityCreateNotice").classList.remove("show");
  document.getElementById("saveCommunityCreate").disabled = true;
  updateCreateLessonOptions(null);
  renderCreateUserResult();
});
document.getElementById("communityCreateUserId").addEventListener("keydown", (event) => {
  if (event.key === "Enter") verifyCommunityUser();
});
document.getElementById("communityCreateRefType").addEventListener("change", toggleCreateContentRef);
document.getElementById("saveCommunityCreate").addEventListener("click", saveCommunityCreate);
document.getElementById("closeCommunityCreate").addEventListener("click", closeCommunityCreate);
document.getElementById("cancelCommunityCreate").addEventListener("click", closeCommunityCreate);
document.getElementById("communityCreateModal").addEventListener("click", (event) => {
  if (event.target.id === "communityCreateModal") closeCommunityCreate();
});
document.getElementById("communityReviewResult").addEventListener("change", toggleReason);
document.getElementById("saveCommunityReview").addEventListener("click", saveReview);
document.getElementById("closeCommunityReview").addEventListener("click", () => { document.getElementById("communityReviewModal").hidden = true; });
document.getElementById("cancelCommunityReview").addEventListener("click", () => { document.getElementById("communityReviewModal").hidden = true; });
document.getElementById("communityReviewModal").addEventListener("click", (event) => {
  if (event.target.id === "communityReviewModal") event.currentTarget.hidden = true;
});
["communityReviewFilter", "communitySelectionFilter", "communityStartDate", "communityEndDate"].forEach((id) => {
  document.getElementById(id).addEventListener("change", renderRows);
});
document.getElementById("communityKeyword").addEventListener("input", renderRows);
document.getElementById("communityReset").addEventListener("click", () => {
  document.getElementById("communityReviewFilter").value = "";
  document.getElementById("communitySelectionFilter").value = "";
  document.getElementById("communityKeyword").value = "";
  document.getElementById("communityStartDate").value = "2026-11-01";
  document.getElementById("communityEndDate").value = "2026-11-30";
  renderRows();
});

window.addEventListener("growth-language-change", (event) => {
  if (event.detail?.lang === "zh" || event.detail?.lang === "en") {
    state.lang = event.detail.lang;
    applyTranslations();
  }
});
window.CommunityUploadView = {
  activate() {
    renderRows();
  },
};
})();
