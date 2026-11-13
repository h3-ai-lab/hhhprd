(() => {
const TEXT = {
  zh: {
    "community.title": "社群上传",
    "community.subtitle": "审核用户上传内容，按审核和官方选中结果自动发奖",
    "community.pendingReview": "待审核",
    "community.pendingReviewNote": "需要社群运营处理",
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
    "community.lesson": "课堂信息",
    "community.submittedAt": "提交时间",
    "community.empty": "当前筛选下没有社群上传记录",
    "community.count": "共 {count} 条记录",
    "community.upload": "App 社群上传",
    "community.socialLink": "外部平台链接",
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
    "communityReview.title": "审核社群上传",
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
    "communityReview.success": "社群上传审核结果已保存",
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
    "community.title": "Community Uploads",
    "community.subtitle": "Review user uploads and issue rewards automatically based on review and official-selection outcomes",
    "community.pendingReview": "Pending review",
    "community.pendingReviewNote": "Requires community operations review",
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
    "community.lesson": "Lesson",
    "community.submittedAt": "Submitted at",
    "community.empty": "No community uploads match the current filters",
    "community.count": "{count} records",
    "community.upload": "App community upload",
    "community.socialLink": "External platform link",
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
    "communityReview.title": "Review Community Upload",
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
    "communityReview.success": "Community upload review saved",
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
};

const submissions = [
  {
    id: "CMT-202611-0038",
    userId: "2120302255148482561",
    user: "Pimchanok S.",
    channel: "community.upload",
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
    channel: "community.upload",
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
    channel: "community.socialLink",
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
    channel: "community.upload",
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
    const keywordMatch = !keyword || [row.id, row.userId, row.user, row.giftOrderId].some((value) => String(value || "").toLowerCase().includes(keyword));
    const date = row.submittedAt.slice(0, 10);
    return reviewMatch && selectionMatch && keywordMatch && (!start || date >= start) && (!end || date <= end);
  });
  document.getElementById("communityRows").innerHTML = rows.map((row) => `
    <tr>
      <td class="mono">${row.id}</td>
      <td>${row.user}<span class="secondary mono">${row.userId}</span></td>
      <td>${t(row.channel)}</td>
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

function applyTranslations() {
  ["communityView", "communityReviewModal"].forEach((id) => {
    const root = document.getElementById(id);
    root.querySelectorAll("[data-i18n]").forEach((element) => { element.textContent = t(element.dataset.i18n); });
    root.querySelectorAll("[data-i18n-placeholder]").forEach((element) => { element.placeholder = t(element.dataset.i18nPlaceholder); });
    root.querySelectorAll("[data-i18n-aria-label]").forEach((element) => { element.setAttribute("aria-label", t(element.dataset.i18nAriaLabel)); });
  });
  renderRows();
  if (state.noticeKey) document.getElementById("communityReviewNotice").textContent = t(state.noticeKey);
  if (state.toastKey) document.getElementById("toast").textContent = t(state.toastKey);
}

function openReview(id) {
  const row = submissions.find((item) => item.id === id);
  if (!row) return;
  state.selectedId = id;
  document.getElementById("communityReviewId").textContent = row.id;
  document.getElementById("communitySubmissionSummary").innerHTML =
    `<strong>${row.user} · ${row.userId}</strong><span>${t(row.channel)} · ${t(row.contentType)} · ${row.lesson}</span><span>${t(row.authorized ? "communityAuth.authorized" : "communityAuth.notAuthorized")}</span>`;
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
