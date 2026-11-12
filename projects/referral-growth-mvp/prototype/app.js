const state = {
  view: "dashboard",
  dateField: "bind",
  source: "",
  cc: "",
  status: "",
  keyword: "",
  verified: false,
  submitted: false,
};

const relationships = [
  {
    id: "RR-202611-0086",
    referrerId: "2120302255148482561",
    referrer: "Pimchanok S.",
    referredId: "2120302295478341",
    referred: "Narin K.",
    source: "referral",
    orderId: "PO202611020018",
    plan: "3 个月",
    amount: 3490,
    orderAt: "2026-11-02",
    bindAt: "2026-11-04",
    operator: "Thanya C.",
    owner: "Thanya C.",
    rule: "+1 个月",
    status: "success",
  },
  {
    id: "RR-202611-0091",
    referrerId: "2120302281472036721",
    referrer: "Kanya R.",
    referredId: "2120302246091874272",
    referred: "Mali P.",
    source: "referral",
    orderId: "PO202611030024",
    plan: "6 个月",
    amount: 5890,
    orderAt: "2026-11-03",
    bindAt: "2026-11-05",
    operator: "Mina P.",
    owner: "Mina P.",
    rule: "+2 个月",
    status: "success",
  },
  {
    id: "RR-202611-0103",
    referrerId: "2120302210461928824",
    referrer: "Arunee T.",
    referredId: "2120302273820914407",
    referred: "Siriporn W.",
    source: "referral",
    orderId: "PO202611040031",
    plan: "12 个月",
    amount: 8990,
    orderAt: "2026-11-04",
    bindAt: "2026-11-06",
    operator: "Nok S.",
    owner: "Nok S.",
    rule: "+3 个月",
    status: "processing",
  },
  {
    id: "RR-202611-0111",
    referrerId: "2120302247228042882",
    referrer: "Waraporn L.",
    referredId: "2120302201833059300",
    referred: "Pattara M.",
    source: "referral",
    orderId: "PO202611050044",
    plan: "3 个月",
    amount: 3490,
    orderAt: "2026-11-05",
    bindAt: "2026-11-07",
    operator: "Thanya C.",
    owner: "Thanya C.",
    rule: "+1 个月",
    status: "failed",
  },
  {
    id: "RR-202611-0116",
    referrerId: "2120302266318527041",
    referrer: "Chanida B.",
    referredId: "2120302229098319490",
    referred: "Araya N.",
    source: "referral",
    orderId: "PO202611060008",
    plan: "6 个月",
    amount: 5890,
    orderAt: "2026-11-06",
    bindAt: "2026-11-08",
    operator: "Mina P.",
    owner: "Mina P.",
    rule: "+2 个月",
    status: "success",
  },
  {
    id: "RR-202611-0122",
    referrerId: "2120302238814957263",
    referrer: "Nicha K.",
    referredId: "2120302256403910560",
    referred: "Suda P.",
    source: "referral",
    orderId: "PO202611070013",
    plan: "12 个月",
    amount: 8990,
    orderAt: "2026-11-07",
    bindAt: "2026-11-09",
    operator: "Nok S.",
    owner: "Nok S.",
    rule: "+3 个月",
    status: "invalid",
  },
];

const statusMap = {
  success: ["已发放", "success"],
  processing: ["待发放", "processing"],
  failed: ["发放失败", "failed"],
  invalid: ["归因失效", "invalid"],
};

function money(value) {
  return `฿${Number(value).toLocaleString("en-US")}`;
}

function renderRows() {
  const filtered = relationships.filter((row) => {
    const sourceMatch = !state.source || row.source === state.source;
    const ccMatch = !state.cc || row.owner === state.cc;
    const statusMatch = !state.status || row.status === state.status;
    const term = state.keyword.trim().toLowerCase();
    const keywordMatch = !term || [row.referrerId, row.referredId, row.orderId, row.referrer, row.referred]
      .some((value) => value.toLowerCase().includes(term));
    return sourceMatch && ccMatch && statusMatch && keywordMatch;
  });

  const body = document.getElementById("growthRows");
  if (!filtered.length) {
    body.innerHTML = "";
    document.getElementById("emptyState").hidden = false;
    document.getElementById("rowSummary").textContent = "共 0 条记录";
    return;
  }

  document.getElementById("emptyState").hidden = true;
  body.innerHTML = filtered.map((row) => {
    const [label, cls] = statusMap[row.status];
    return `
      <tr data-id="${row.id}">
        <td><span class="mono">${row.referrerId}</span><span class="secondary">${row.referrer}</span></td>
        <td><span class="mono">${row.referredId}</span><span class="secondary">${row.referred}</span></td>
        <td><span class="source ${row.source === "social" ? "social" : ""}">${row.source === "social" ? "社媒分享" : "拉新推荐"}</span></td>
        <td class="mono">${row.orderId}</td>
        <td>${row.plan}</td>
        <td>${money(row.amount)}</td>
        <td>${row.orderAt}</td>
        <td>${row.bindAt}</td>
        <td>${row.operator}</td>
        <td>${row.owner}</td>
        <td>${row.rule}</td>
        <td><span class="status ${cls}">${label}</span></td>
      </tr>`;
  }).join("");
  document.getElementById("rowSummary").textContent = `共 ${filtered.length} 条记录`;

  body.querySelectorAll("tr").forEach((tr) => {
    tr.addEventListener("click", () => openDrawer(tr.dataset.id));
  });
}

function openDrawer(id) {
  const row = relationships.find((item) => item.id === id);
  if (!row) return;
  const [statusLabel, statusClass] = statusMap[row.status];
  document.getElementById("drawerId").textContent = row.id;
  document.getElementById("drawerBody").innerHTML = `
    <div class="detail-block">
      <h4>关系信息</h4>
      <dl class="facts">
        <dt>推荐人</dt><dd><span class="mono">${row.referrerId}</span><br>${row.referrer}</dd>
        <dt>被推荐人</dt><dd><span class="mono">${row.referredId}</span><br>${row.referred}</dd>
        <dt>来源</dt><dd>${row.source === "social" ? "社媒分享" : "拉新推荐"}</dd>
        <dt>绑定时间</dt><dd>${row.bindAt} 14:32</dd>
        <dt>关系状态</dt><dd><span class="status ${statusClass}">${statusLabel}</span></dd>
      </dl>
    </div>
    <div class="detail-block">
      <h4>归因订单</h4>
      <dl class="facts">
        <dt>订单 ID</dt><dd class="mono">${row.orderId}</dd>
        <dt>套餐</dt><dd>${row.plan}</dd>
        <dt>实付金额</dt><dd>${money(row.amount)}</dd>
        <dt>支付时间</dt><dd>${row.orderAt} 19:48</dd>
        <dt>订单状态</dt><dd>${row.status === "invalid" ? "最终退款" : "已支付"}</dd>
      </dl>
    </div>
    <div class="detail-block">
      <h4>操作与权益</h4>
      <dl class="facts">
        <dt>操作 CC</dt><dd>${row.operator}</dd>
        <dt>归属 CC</dt><dd>${row.owner}</dd>
        <dt>奖励规则</dt><dd>${row.rule}</dd>
        <dt>权益流水</dt><dd class="mono">${row.status === "processing" ? "等待权益服务确认" : `ENT-${row.id.slice(-4)}-TH`}</dd>
        <dt>开通原因</dt><dd>拉新推荐 · ${row.referrer}推荐${row.referred} · ${row.plan}套餐</dd>
      </dl>
    </div>
    <div class="detail-block">
      <h4>处理轨迹</h4>
      <div class="timeline">
        <div class="timeline-item done"><strong>被推荐人完成支付</strong><span>${row.orderAt} · ${money(row.amount)}</span></div>
        <div class="timeline-item done"><strong>推荐关系已绑定</strong><span>${row.bindAt} · 操作人 ${row.operator}</span></div>
        <div class="timeline-item ${row.status === "success" ? "done" : ""}"><strong>${statusLabel}</strong><span>${row.status === "failed" ? "权益服务返回超时，可发起幂等重试" : row.status === "invalid" ? "归因订单退款，历史记录保留" : "权益服务与审计"}</span></div>
      </div>
    </div>`;
  document.getElementById("detailDrawer").hidden = false;
}

function setView(view) {
  state.view = view;
  const dashboard = view === "dashboard";
  document.getElementById("dashboardView").hidden = !dashboard;
  document.getElementById("usersView").hidden = dashboard;
  document.getElementById("pageTitle").textContent = dashboard ? "拉新归因" : "用户中心";
  document.getElementById("crumb").textContent = dashboard ? "营销中心" : "用户管理";
  document.querySelectorAll(".nav-item[data-view]").forEach((item) => item.classList.toggle("active", item.dataset.view === view));
  document.getElementById("sidebar").classList.remove("open");
}

function resetGrantForm() {
  state.verified = false;
  state.submitted = false;
  document.getElementById("sourceSelect").value = "regular";
  document.getElementById("referredId").value = "";
  document.getElementById("socialLink").value = "";
  document.getElementById("verifyResult").hidden = true;
  document.getElementById("rewardSummary").hidden = true;
  document.getElementById("daysInput").readOnly = false;
  document.getElementById("daysInput").value = "30";
  document.getElementById("reasonInput").value = "好友推荐活动权益";
  document.getElementById("grantNotice").classList.remove("show");
  document.getElementById("confirmGrant").disabled = false;
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
    document.getElementById("reasonInput").value = "社媒分享活动权益 · 有效发布";
    document.getElementById("daysHelper").textContent = "社媒分享本期沿用现有手动天数，保存来源、链接、CC 和权益流水。";
  } else if (source === "referral") {
    document.getElementById("daysHelper").textContent = "拉新推荐奖励由订单套餐自动确定，有效期单位不可修改。";
    document.getElementById("reasonInput").value = "好友推荐活动权益";
  } else {
    document.getElementById("daysHelper").textContent = "新用户从当前时间起算；未付费体验中的用户在现体验到期时间上累加。";
    document.getElementById("reasonInput").value = "好友推荐活动权益";
  }
}

function verifyReferredUser() {
  const input = document.getElementById("referredId").value.trim();
  const box = document.getElementById("verifyResult");
  const confirm = document.getElementById("confirmGrant");
  state.verified = false;
  confirm.disabled = true;
  document.getElementById("rewardSummary").hidden = true;
  box.hidden = false;

  if (!input) {
    box.innerHTML = '<div class="verify-error">请输入被推荐人用户 ID</div>';
    return;
  }

  if (input === "2120302255148482561") {
    box.innerHTML = '<div class="verify-error">不能使用推荐人自己的用户 ID 绑定推荐关系</div>';
    return;
  }

  if (input !== "2120302295478341") {
    box.innerHTML = '<div class="verify-error">未找到符合条件且未绑定推荐人的用户</div>';
    return;
  }

  state.verified = true;
  confirm.disabled = false;
  box.innerHTML = `
    <div class="verify-title"><strong>Narin K. · 正式用户</strong><span>核验通过</span></div>
    <div class="verify-grid">
      <div><b>用户 ID</b><span class="mono">2120302295478341</span></div>
      <div><b>业务线</b><span>泰国</span></div>
      <div><b>归因订单</b><span class="mono">PO202611020018</span></div>
      <div><b>套餐</b><span>3 个月</span></div>
      <div><b>实付金额</b><span>฿3,490</span></div>
      <div><b>支付时间</b><span>2026-11-02</span></div>
    </div>`;
  document.getElementById("rewardSummary").hidden = false;
  document.getElementById("daysInput").readOnly = true;
  document.getElementById("daysInput").value = "";
  document.getElementById("reasonInput").value = "拉新推荐 · Pimchanok S.推荐Narin K. · 3个月套餐 · 对应订单 PO202611020018";
}

function openGrant() {
  resetGrantForm();
  document.getElementById("grantModal").hidden = false;
}

function closeGrant() {
  document.getElementById("grantModal").hidden = true;
}

function confirmGrant() {
  const source = document.getElementById("sourceSelect").value;
  const notice = document.getElementById("grantNotice");
  if (source === "referral" && !state.verified) {
    notice.textContent = "请先完成被推荐人与订单核验";
    notice.classList.add("show");
    return;
  }
  if (source === "social" && !document.getElementById("socialLink").value.trim()) {
    notice.textContent = "请输入社媒内容链接";
    notice.classList.add("show");
    return;
  }

  state.submitted = true;
  document.getElementById("confirmGrant").disabled = true;
  document.getElementById("confirmGrant").textContent = "发放中…";

  if (source === "referral" && !relationships.some((row) => row.referredId === "2120302295478341")) {
    relationships.unshift({
      id: "RR-202611-0128",
      referrerId: "2120302255148482561",
      referrer: "Pimchanok S.",
      referredId: "2120302295478341",
      referred: "Narin K.",
      source: "referral",
      orderId: "PO202611020018",
      plan: "3 个月",
      amount: 3490,
      orderAt: "2026-11-02",
      bindAt: "2026-11-09",
      operator: "Thanya C.",
      owner: "Thanya C.",
      rule: "+1 个月",
      status: "success",
    });
  }

  window.setTimeout(() => {
    document.getElementById("confirmGrant").textContent = "确认发放";
    closeGrant();
    renderRows();
    showToast(source === "referral" ? "推荐关系已绑定，权益已发放" : "社媒分享记录已保存");
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

document.querySelectorAll(".nav-item[data-view]").forEach((item) => {
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
document.getElementById("refreshBtn").addEventListener("click", () => showToast("数据已刷新"));
document.getElementById("openGrantBtn").addEventListener("click", openGrant);
document.querySelectorAll(".open-grant-secondary").forEach((button) => button.addEventListener("click", openGrant));
document.getElementById("sourceSelect").addEventListener("change", handleSourceChange);
document.getElementById("verifyBtn").addEventListener("click", verifyReferredUser);
document.getElementById("referredId").addEventListener("keydown", (event) => {
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

renderRows();
