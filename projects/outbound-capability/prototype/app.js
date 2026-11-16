const STR = {
  zh: {
    brandSub: "外呼管理工作台",
    navOutbound: "外呼管理",
    navNumbers: "号码池管理",
    navCalls: "通话记录",
    serviceOnline: "外呼服务运行中",
    crumbGroup: "外呼管理",
    scope: "全业务线",
    roleName: "系统管理员",
    roleSub: "外呼配置",
    close: "关闭",
    numbersTitle: "号码池管理",
    callsTitle: "通话记录",
    numberPanel: "主叫号码",
    totalNumbers: "共 {count} 个号码",
    searchNumbers: "搜索号码、供应商或线路",
    allSupplier: "全部供应商",
    allRoute: "全部线路",
    allBusinessLine: "全部业务线",
    allStatus: "全部状态",
    addNumber: "新增号码",
    importNumbers: "批量导入",
    refresh: "刷新",
    colNumber: "号码",
    colSupplier: "所属供应商",
    colRoute: "线路",
    colLines: "可用业务线",
    colStatus: "可用状态",
    colAvailableTime: "可用时间",
    colConcurrency: "并发",
    colFrequency: "被叫频次限制",
    colActions: "操作",
    enabled: "可用",
    disabled: "停用",
    perDay: "{count} 次/人/日",
    edit: "编辑",
    disable: "停用",
    enable: "启用",
    noNumbers: "暂无号码",
    noNumbersSub: "新增一个号码后即可用于外呼",
    noNumberResults: "当前条件下没有号码",
    noNumberResultsSub: "调整搜索或筛选条件后重试",
    resetFilters: "重置筛选",
    numberPage: "第 {page} / {pages} 页",
    numberTotalPage: "共 {count} 条",
    previous: "上一页",
    next: "下一页",
    addNumberTitle: "新增号码",
    editNumberTitle: "编辑号码",
    numberHint: "请输入含国家区号的国际格式号码",
    supplier: "所属供应商",
    route: "线路",
    businessLines: "可用业务线",
    status: "可用状态",
    concurrency: "并发",
    frequency: "被叫频次限制",
    concurrencyHint: "允许同时进行的最大通话数，1–100",
    frequencyHint: "同一被叫号码每日最多外呼次数，1–20",
    unlimitedTime: "不限",
    customTime: "每日时间段",
    availableTimeHint: "北京时间，支持跨午夜",
    timeRange: "{start}–{end}",
    cancel: "取消",
    create: "创建",
    save: "保存",
    requiredField: "请完整填写必填项",
    invalidPhone: "请输入有效的国际格式号码",
    duplicatePhone: "该号码已在号码池中",
    missingLines: "请至少选择一个可用业务线",
    invalidConcurrency: "并发必须为 1–100 的整数",
    invalidFrequency: "被叫频次必须为 1–20 的整数",
    savedNewNumber: "号码已新增",
    savedNumber: "号码配置已保存",
    statusChanged: "号码状态已更新",
    refreshed: "数据已刷新",
    callsPanel: "通话记录",
    totalCalls: "共 {count} 通",
    searchCalls: "搜索用户 ID、姓名、登录账号或主叫号码",
    callResult: "全部通话结果",
    allAgents: "全部外呼坐席",
    startTime: "开始时间",
    endTime: "结束时间",
    reset: "重置",
    exportData: "下载数据",
    exportTasks: "导出任务",
    colCallTime: "起呼时间",
    colUser: "用户 ID",
    colName: "姓名",
    colPhone: "手机号",
    colCaller: "主叫号码",
    colResult: "通话结果",
    colDuration: "时长",
    colRecording: "录音",
    colTranscript: "文字稿",
    colFollowup: "本次跟进记录",
    connected: "已接通",
    noAnswer: "无人接听",
    busy: "占线",
    callFailed: "呼叫失败",
    invalidNumber: "号码无效",
    playRecording: "播放录音",
    downloadTranscript: "下载文字稿",
    syncing: "同步中",
    transcribing: "转写中",
    unavailable: "暂不可用",
    noFollowup: "—",
    noCallResults: "当前条件下没有通话记录",
    noCallResultsSub: "调整搜索、业务线、通话结果或时间范围后重试",
    callPage: "第 {page} / {pages} 页",
    callTotalPage: "共 {count} 条",
    exportTitle: "下载通话记录",
    exportSubtitle: "将当前筛选范围内的全部结果生成导出文件",
    resultRows: "结果行数",
    connectedRows: "已接通行数",
    locatableGroups: "可定位录音组",
    missingFiles: "缺失文件",
    includeRecording: "是否导出录音",
    includeRecordingHint: "勾选后，将录音与逐字稿按通话归入同一导出包",
    bundleStructure: "导出包结构",
    bundleNotice: "每通电话使用 call_id 独立目录，manifest.csv 保存文件路径与缺失原因。",
    createExport: "创建导出任务",
    exportCreating: "正在创建任务…",
    exportProgress: "正在整理录音与逐字稿",
    exportProgressCount: "{done} / {total} 通",
    cancelTask: "取消任务",
    exportSuccess: "导出包已生成",
    exportSuccessMeta: "任务 {task} · {groups} 个录音目录 · {missing} 个缺失文件",
    downloadBundle: "下载导出包",
    dataExportSuccess: "导出文件已生成",
    dataExportMeta: "任务 {task} · {count} 条通话记录",
    downloadDataFile: "下载数据文件",
    close: "关闭",
    taskCanceled: "导出任务已取消",
    bundleDownloaded: "导出包已开始下载",
    dataDownloaded: "数据文件已开始下载",
    exportTaskTitle: "导出任务",
    noTasks: "暂无导出任务",
    noTasksSub: "从通话记录创建录音导出任务后会显示在这里",
    taskStatusDone: "已完成",
    taskStatusRunning: "处理中",
    taskStatusCanceled: "已取消",
    taskRows: "{count} 条记录 · {groups} 个录音目录",
    taskDataRows: "{count} 条记录",
    download: "下载",
    recordingTitle: "播放录音",
    recordingOwner: "通话 {callId}",
    play: "播放",
    pause: "暂停",
    audioDuration: "通话时长 {duration}",
    callDetail: "通话信息",
    detailCaller: "主叫号码",
    detailPhone: "手机号",
    detailResult: "通话结果",
    detailTime: "起呼时间",
    transcriptDownloaded: "文字稿已开始下载",
    followupConfirmedTrial: "已确认试听时间",
    followupCallback: "客户要求再次回访",
    followupAddedTrial: "已加入体验课",
    followupQuoteSent: "报价已发送",
    followupGradeUnclear: "未确认课程等级",
    importTitle: "批量导入号码",
    importSubtitle: "使用 CSV 模板上传号码，校验后导入有效行",
    downloadTemplate: "下载模板",
    chooseFile: "选择 CSV 文件",
    importFormatTitle: "导入字段",
    importFormatText: "号码、所属供应商、线路、可用业务线、可用状态、可用时间、并发、被叫频次限制",
    importRuleText: "可用业务线用 | 分隔；可用时间填写“不限”或“HH:mm-HH:mm”；最终以预览结果为准。",
    importFileError: "无法读取该文件，请使用 UTF-8 CSV 模板",
    importHeaderError: "CSV 表头与模板不一致，请重新下载模板",
    importPreviewTitle: "校验预览",
    importTotalRows: "总行数",
    importValidRows: "有效行",
    importInvalidRows: "无效行",
    importRow: "行号",
    importValidation: "校验结果",
    importReady: "可导入",
    importHasError: "需修正",
    importConfirm: "导入有效行",
    importNoValid: "没有可导入的有效行",
    importResultTitle: "导入完成",
    importResultMeta: "成功导入 {success} 个号码，跳过 {failed} 行",
    downloadFailedRows: "下载失败行",
    importAnother: "重新选择文件",
    errorPhone: "号码格式错误",
    errorSupplier: "供应商不在枚举中",
    errorRoute: "线路不在枚举中",
    errorLines: "业务线无效",
    errorStatus: "可用状态无效",
    errorTime: "可用时间格式错误",
    errorConcurrency: "并发必须为 1–100",
    errorFrequency: "频次必须为 1–20",
    errorDuplicateFile: "文件内号码重复",
    errorDuplicatePool: "号码已存在",
    agentNames: { "anh.nguyen@dino.ai": "Nguyễn Anh", "mali@dino.ai": "Mali Tan", "porn@dino.ai": "Porn K." }
  },
  en: {
    brandSub: "Outbound operations",
    navOutbound: "Outbound",
    navNumbers: "Number Pool",
    navCalls: "Call Records",
    serviceOnline: "Calling service online",
    crumbGroup: "Outbound",
    scope: "All Business Lines",
    roleName: "System Admin",
    roleSub: "Outbound Settings",
    close: "Close",
    numbersTitle: "Number Pool",
    callsTitle: "Call Records",
    numberPanel: "Caller Numbers",
    totalNumbers: "{count} numbers",
    searchNumbers: "Search number, supplier, or route",
    allSupplier: "All suppliers",
    allRoute: "All routes",
    allBusinessLine: "All business lines",
    allStatus: "All statuses",
    addNumber: "Add Number",
    importNumbers: "Bulk Import",
    refresh: "Refresh",
    colNumber: "Number",
    colSupplier: "Supplier",
    colRoute: "Route",
    colLines: "Business Lines",
    colStatus: "Status",
    colAvailableTime: "Available Time",
    colConcurrency: "Concurrency",
    colFrequency: "Callee Frequency Limit",
    colActions: "Actions",
    enabled: "Available",
    disabled: "Disabled",
    perDay: "{count} / callee / day",
    edit: "Edit",
    disable: "Disable",
    enable: "Enable",
    noNumbers: "No numbers yet",
    noNumbersSub: "Add a number to start using the outbound pool",
    noNumberResults: "No numbers match these filters",
    noNumberResultsSub: "Change the search or filters and try again",
    resetFilters: "Reset Filters",
    numberPage: "Page {page} of {pages}",
    numberTotalPage: "{count} total",
    previous: "Previous",
    next: "Next",
    addNumberTitle: "Add Number",
    editNumberTitle: "Edit Number",
    numberHint: "Enter an international number with country code",
    supplier: "Supplier",
    route: "Route",
    businessLines: "Available Business Lines",
    status: "Status",
    concurrency: "Concurrency",
    frequency: "Callee Frequency Limit",
    concurrencyHint: "Maximum simultaneous calls, 1–100",
    frequencyHint: "Maximum daily calls per callee, 1–20",
    unlimitedTime: "Any time",
    customTime: "Daily time range",
    availableTimeHint: "Beijing time; cross-midnight ranges are supported",
    timeRange: "{start}–{end}",
    cancel: "Cancel",
    create: "Create",
    save: "Save",
    requiredField: "Complete all required fields",
    invalidPhone: "Enter a valid international phone number",
    duplicatePhone: "This number is already in the pool",
    missingLines: "Select at least one business line",
    invalidConcurrency: "Concurrency must be an integer from 1 to 100",
    invalidFrequency: "Frequency must be an integer from 1 to 20",
    savedNewNumber: "Number added",
    savedNumber: "Number settings saved",
    statusChanged: "Number status updated",
    refreshed: "Data refreshed",
    callsPanel: "Call Records",
    totalCalls: "{count} calls",
    searchCalls: "Search user ID, name, login, or caller number",
    callResult: "All call results",
    allAgents: "All agents",
    startTime: "Start time",
    endTime: "End time",
    reset: "Reset",
    exportData: "Download Data",
    exportTasks: "Export Tasks",
    colCallTime: "Call Time",
    colUser: "User ID",
    colName: "Name",
    colPhone: "Phone",
    colCaller: "Caller Number",
    colResult: "Result",
    colDuration: "Duration",
    colRecording: "Recording",
    colTranscript: "Transcript",
    colFollowup: "Call Follow-up",
    connected: "Connected",
    noAnswer: "No answer",
    busy: "Busy",
    callFailed: "Call failed",
    invalidNumber: "Invalid number",
    playRecording: "Play",
    downloadTranscript: "Download",
    syncing: "Syncing",
    transcribing: "Transcribing",
    unavailable: "Unavailable",
    noFollowup: "—",
    noCallResults: "No call records match these filters",
    noCallResultsSub: "Change search, business line, call result, or date range and try again",
    callPage: "Page {page} of {pages}",
    callTotalPage: "{count} total",
    exportTitle: "Download Call Records",
    exportSubtitle: "Generate a file for every result in the current filters",
    resultRows: "Result rows",
    connectedRows: "Connected rows",
    locatableGroups: "Locatable recording groups",
    missingFiles: "Missing files",
    includeRecording: "Export recordings",
    includeRecordingHint: "Group each call's recording and transcript in the same export package",
    bundleStructure: "Package structure",
    bundleNotice: "Each call has a call_id folder. manifest.csv stores file paths and missing-file reasons.",
    createExport: "Create Export Task",
    exportCreating: "Creating task…",
    exportProgress: "Preparing recordings and transcripts",
    exportProgressCount: "{done} / {total} calls",
    cancelTask: "Cancel Task",
    exportSuccess: "Export package ready",
    exportSuccessMeta: "Task {task} · {groups} recording folders · {missing} missing files",
    downloadBundle: "Download Package",
    dataExportSuccess: "Export file ready",
    dataExportMeta: "Task {task} · {count} call records",
    downloadDataFile: "Download Data File",
    close: "Close",
    taskCanceled: "Export task canceled",
    bundleDownloaded: "Package download started",
    dataDownloaded: "Data file download started",
    exportTaskTitle: "Export Tasks",
    noTasks: "No export tasks",
    noTasksSub: "Recording export tasks created from Call Records will appear here",
    taskStatusDone: "Completed",
    taskStatusRunning: "Processing",
    taskStatusCanceled: "Canceled",
    taskRows: "{count} records · {groups} recording folders",
    taskDataRows: "{count} records",
    download: "Download",
    recordingTitle: "Play Recording",
    recordingOwner: "Call {callId}",
    play: "Play",
    pause: "Pause",
    audioDuration: "Duration {duration}",
    callDetail: "Call information",
    detailCaller: "Caller number",
    detailPhone: "Phone",
    detailResult: "Result",
    detailTime: "Call time",
    transcriptDownloaded: "Transcript download started",
    followupConfirmedTrial: "Trial time confirmed",
    followupCallback: "Customer requested a callback",
    followupAddedTrial: "Added to trial lesson",
    followupQuoteSent: "Quote sent",
    followupGradeUnclear: "Course level not confirmed",
    importTitle: "Bulk Import Numbers",
    importSubtitle: "Upload numbers from a CSV template and import the valid rows after review",
    downloadTemplate: "Download Template",
    chooseFile: "Choose CSV File",
    importFormatTitle: "Import Fields",
    importFormatText: "Number, Supplier, Route, Business Lines, Status, Available Time, Concurrency, Callee Frequency Limit",
    importRuleText: "Separate business lines with |. Enter “Any time” or HH:mm-HH:mm. The validation preview is authoritative.",
    importFileError: "Unable to read this file. Use the UTF-8 CSV template.",
    importHeaderError: "The CSV header does not match the template. Download the latest template and retry.",
    importPreviewTitle: "Validation Preview",
    importTotalRows: "Total rows",
    importValidRows: "Valid rows",
    importInvalidRows: "Invalid rows",
    importRow: "Row",
    importValidation: "Validation",
    importReady: "Ready",
    importHasError: "Needs correction",
    importConfirm: "Import Valid Rows",
    importNoValid: "There are no valid rows to import",
    importResultTitle: "Import Complete",
    importResultMeta: "{success} numbers imported; {failed} rows skipped",
    downloadFailedRows: "Download Failed Rows",
    importAnother: "Choose Another File",
    errorPhone: "Invalid number",
    errorSupplier: "Supplier is not in the fixed list",
    errorRoute: "Route is not in the fixed list",
    errorLines: "Invalid business line",
    errorStatus: "Invalid status",
    errorTime: "Invalid available time",
    errorConcurrency: "Concurrency must be from 1 to 100",
    errorFrequency: "Frequency must be from 1 to 20",
    errorDuplicateFile: "Duplicate number in file",
    errorDuplicatePool: "Number already exists",
    agentNames: { "anh.nguyen@dino.ai": "Nguyễn Anh", "mali@dino.ai": "Mali Tan", "porn@dino.ai": "Porn K." }
  }
};

const BUSINESS_LINES = [
  { value: "MY", zh: "马来西亚", en: "Malaysia" },
  { value: "VN", zh: "越南", en: "Vietnam" },
  { value: "TH", zh: "泰国", en: "Thailand" }
];
const SUPPLIERS = ["供应商1", "供应商2", "供应商3"];
const ROUTES = [
  { value: "ROUTE_1", zh: "线路1", en: "Route 1" },
  { value: "ROUTE_2", zh: "线路2", en: "Route 2" },
  { value: "ROUTE_3", zh: "线路3", en: "Route 3" }
];

let numbers = [
  { id: "n1", phone: "+60112345678", supplier: "供应商1", route: "ROUTE_1", lines: ["MY"], status: "active", availableWindow: null, concurrency: 12, frequency: 3 },
  { id: "n2", phone: "+60119876543", supplier: "供应商2", route: "ROUTE_2", lines: ["MY", "TH"], status: "active", availableWindow: { start: "08:30", end: "20:00" }, concurrency: 8, frequency: 2 },
  { id: "n3", phone: "+84912345678", supplier: "供应商1", route: "ROUTE_2", lines: ["VN"], status: "active", availableWindow: null, concurrency: 20, frequency: 3 },
  { id: "n4", phone: "+84987654321", supplier: "供应商3", route: "ROUTE_3", lines: ["VN", "TH"], status: "active", availableWindow: { start: "22:00", end: "02:00" }, concurrency: 10, frequency: 4 },
  { id: "n5", phone: "+66812345678", supplier: "供应商2", route: "ROUTE_1", lines: ["TH"], status: "active", availableWindow: { start: "09:00", end: "18:00" }, concurrency: 16, frequency: 3 },
  { id: "n6", phone: "+66898765432", supplier: "供应商3", route: "ROUTE_3", lines: ["TH"], status: "disabled", availableWindow: null, concurrency: 6, frequency: 2 },
  { id: "n7", phone: "+60321234567", supplier: "供应商1", route: "ROUTE_1", lines: ["MY"], status: "active", availableWindow: { start: "08:00", end: "17:30" }, concurrency: 4, frequency: 1 },
  { id: "n8", phone: "+84281234567", supplier: "供应商2", route: "ROUTE_2", lines: ["VN"], status: "disabled", availableWindow: null, concurrency: 5, frequency: 3 }
];

let calls = [
  { id:"call_9b6f3a2d", time:"2026-11-16 11:42:09", tz:"UTC+08:00", userId:"U-928104", name:"Linh Tran", phone:"+84901234567", caller:"+84912345678", line:"VN", result:"connected", duration:"12:48", agent:"anh.nguyen@dino.ai", recording:"play", transcript:"download", followup:"followupConfirmedTrial" },
  { id:"call_2f1e7c80", time:"2026-11-16 11:18:44", tz:"UTC+08:00", userId:"U-734219", name:"Aina Lim", phone:"+60123456789", caller:"+60112345678", line:"MY", result:"noAnswer", duration:"—", agent:"mali@dino.ai", recording:"syncing", transcript:"unavailable", followup:"—" },
  { id:"call_6ca40d1b", time:"2026-11-16 10:55:17", tz:"UTC+08:00", userId:"U-281904", name:"Kanya P.", phone:"+66823456789", caller:"+66812345678", line:"TH", result:"connected", duration:"04:31", agent:"porn@dino.ai", recording:"play", transcript:"transcribing", followup:"followupCallback" },
  { id:"call_04ed862f", time:"2026-11-16 10:31:02", tz:"UTC+08:00", userId:"U-681205", name:"Minh Nguyen", phone:"+84907654321", caller:"+84987654321", line:"VN", result:"connected", duration:"08:06", agent:"anh.nguyen@dino.ai", recording:"play", transcript:"download", followup:"followupAddedTrial" },
  { id:"call_f0a62d45", time:"2026-11-16 09:58:31", tz:"UTC+08:00", userId:"U-593882", name:"Siti R.", phone:"+60199887766", caller:"+60119876543", line:"MY", result:"busy", duration:"—", agent:"mali@dino.ai", recording:"unavailable", transcript:"unavailable", followup:"—" },
  { id:"call_11bd9c64", time:"2026-11-16 09:41:27", tz:"UTC+08:00", userId:"U-482016", name:"Pim S.", phone:"+66912345678", caller:"+66812345678", line:"TH", result:"connected", duration:"15:09", agent:"porn@dino.ai", recording:"play", transcript:"download", followup:"followupQuoteSent" },
  { id:"call_3b2fc810", time:"2026-11-15 18:23:04", tz:"UTC+08:00", userId:"U-176540", name:"Huy Le", phone:"+84911223344", caller:"+84912345678", line:"VN", result:"callFailed", duration:"—", agent:"anh.nguyen@dino.ai", recording:"unavailable", transcript:"unavailable", followup:"—" },
  { id:"call_98ca12e1", time:"2026-11-15 17:52:48", tz:"UTC+08:00", userId:"U-644921", name:"Nur A.", phone:"+60177889900", caller:"+60112345678", line:"MY", result:"connected", duration:"03:57", agent:"mali@dino.ai", recording:"play", transcript:"transcribing", followup:"followupGradeUnclear" },
  { id:"call_37edc2b4", time:"2026-11-15 16:10:19", tz:"UTC+08:00", userId:"U-320881", name:"Nok C.", phone:"+66888776655", caller:"+66812345678", line:"TH", result:"noAnswer", duration:"—", agent:"porn@dino.ai", recording:"syncing", transcript:"unavailable", followup:"—" }
];

const state = {
  page: "numbers",
  lang: localStorage.getItem("outbound-lang") || "zh",
  numberPage: 1,
  callPage: 1,
  numberFilters: { q: "", supplier: "", route: "", line: "", status: "" },
  callFilters: { q: "", line: "", result: "", agent: "", start: "", end: "" },
  modal: null,
  tasks: [],
  exportTimer: null,
  audioTimer: null
};

const $ = selector => document.querySelector(selector);
const t = (key, vars = {}) => {
  let value = STR[state.lang][key] ?? key;
  Object.entries(vars).forEach(([name, replacement]) => { value = value.replaceAll(`{${name}}`, String(replacement)); });
  return value;
};
const businessLabel = line => BUSINESS_LINES.find(item => item.value === line)?.[state.lang] || line;
const routeLabel = routeValue => ROUTES.find(item => item.value === routeValue)?.[state.lang] || routeValue;
const availableWindowLabel = windowValue => windowValue
  ? t("timeRange", { start: windowValue.start, end: windowValue.end })
  : t("unlimitedTime");
const esc = value => String(value ?? "").replace(/[&<>"']/g, char => ({ "&":"&amp;", "<":"&lt;", ">":"&gt;", '"':"&quot;", "'":"&#39;" }[char]));
const normalizePhone = value => value.replace(/[\s()-]/g, "");
const resultLabel = result => t(result);
const maskLine = line => businessLabel(line);

function applyStaticTranslations() {
  document.documentElement.lang = state.lang === "zh" ? "zh-CN" : "en";
  document.querySelectorAll("[data-i18n]").forEach(element => {
    element.textContent = t(element.dataset.i18n);
  });
  document.querySelectorAll("[data-i18n-aria]").forEach(element => {
    element.setAttribute("aria-label", t(element.dataset.i18nAria));
  });
  document.querySelectorAll("#lang-switch [data-lang]").forEach(element => {
    element.classList.toggle("is-active", element.dataset.lang === state.lang);
  });
  document.querySelectorAll(".nav-item").forEach(element => {
    element.classList.toggle("is-active", element.dataset.page === state.page);
  });
  $("#page-title").textContent = state.page === "numbers" ? t("numbersTitle") : t("callsTitle");
  $("#crumb-current").textContent = state.page === "numbers" ? t("navNumbers") : t("navCalls");
}

function showToast(message) {
  const toast = $("#toast");
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(showToast.timer);
  showToast.timer = setTimeout(() => toast.classList.remove("show"), 2200);
}

function filteredNumbers() {
  const f = state.numberFilters;
  const query = f.q.toLowerCase().trim();
  return numbers.filter(item => {
    const haystack = `${item.phone} ${item.supplier} ${routeLabel(item.route)} ${item.lines.map(businessLabel).join(" ")}`.toLowerCase();
    return (!query || haystack.includes(query))
      && (!f.supplier || item.supplier === f.supplier)
      && (!f.route || item.route === f.route)
      && (!f.line || item.lines.includes(f.line))
      && (!f.status || item.status === f.status);
  });
}

function filteredCalls() {
  const f = state.callFilters;
  const query = f.q.toLowerCase().trim();
  return calls.filter(item => {
    const login = item.name.toLowerCase().replace(/[^a-z]/g, "");
    const haystack = `${item.userId} ${item.name} ${login} ${item.caller}`.toLowerCase();
    const date = item.time.slice(0, 10);
    return (!query || haystack.includes(query))
      && (!f.line || item.line === f.line)
      && (!f.result || item.result === f.result)
      && (!f.agent || item.agent === f.agent)
      && (!f.start || date >= f.start)
      && (!f.end || date <= f.end);
  });
}

function renderPage() {
  applyStaticTranslations();
  if (state.page === "numbers") renderNumbersPage();
  else renderCallsPage();
}

function renderNumbersPage() {
  const rows = filteredNumbers();
  const perPage = 5;
  const pages = Math.max(1, Math.ceil(rows.length / perPage));
  state.numberPage = Math.min(state.numberPage, pages);
  const pageRows = rows.slice((state.numberPage - 1) * perPage, state.numberPage * perPage);
  const f = state.numberFilters;
  $("#content").innerHTML = `
    <section class="panel">
      <div class="panel-head">
        <div class="panel-title">${t("numberPanel")}<span class="count-pill">${t("totalNumbers", { count: rows.length })}</span></div>
        <div class="row-actions">
          <button class="button ghost" data-action="refresh-numbers"><svg><use href="#i-refresh"></use></svg>${t("refresh")}</button>
          <button class="button" data-action="open-import"><svg><use href="#i-download"></use></svg>${t("importNumbers")}</button>
          <button class="button primary" data-action="add-number"><svg><use href="#i-plus"></use></svg>${t("addNumber")}</button>
        </div>
      </div>
      <div class="toolbar">
        <div class="search-box">
          <svg><use href="#i-search"></use></svg>
          <input class="control" id="number-search" value="${esc(f.q)}" placeholder="${t("searchNumbers")}" aria-label="${t("searchNumbers")}">
        </div>
        <select class="control select" id="filter-supplier" aria-label="${t("colSupplier")}">
          <option value="">${t("allSupplier")}</option>
          ${SUPPLIERS.map(item => `<option value="${esc(item)}" ${f.supplier === item ? "selected" : ""}>${esc(item)}</option>`).join("")}
        </select>
        <select class="control select" id="filter-route" aria-label="${t("colRoute")}">
          <option value="">${t("allRoute")}</option>
          ${ROUTES.map(item => `<option value="${item.value}" ${f.route === item.value ? "selected" : ""}>${esc(item[state.lang])}</option>`).join("")}
        </select>
        <select class="control select" id="filter-line" aria-label="${t("colLines")}">
          <option value="">${t("allBusinessLine")}</option>
          ${BUSINESS_LINES.map(item => `<option value="${item.value}" ${f.line === item.value ? "selected" : ""}>${esc(item[state.lang])}</option>`).join("")}
        </select>
        <select class="control select" id="filter-status" aria-label="${t("colStatus")}">
          <option value="">${t("allStatus")}</option>
          <option value="active" ${f.status === "active" ? "selected" : ""}>${t("enabled")}</option>
          <option value="disabled" ${f.status === "disabled" ? "selected" : ""}>${t("disabled")}</option>
        </select>
      </div>
      ${pageRows.length ? `<div class="table-wrap"><table>
        <thead><tr>
          <th>${t("colNumber")}</th><th>${t("colSupplier")}</th><th>${t("colRoute")}</th>
          <th>${t("colLines")}</th><th>${t("colStatus")}</th><th>${t("colAvailableTime")}</th><th>${t("colConcurrency")}</th>
          <th>${t("colFrequency")}</th><th>${t("colActions")}</th>
        </tr></thead>
        <tbody>${pageRows.map(item => `
          <tr>
            <td><span class="number-cell">${esc(item.phone)}</span></td>
            <td>${esc(item.supplier)}</td>
            <td>${esc(routeLabel(item.route))}</td>
            <td><div class="line-tags">${item.lines.map(line => `<span class="tag blue">${esc(businessLabel(line))}</span>`).join("")}</div></td>
            <td><span class="status ${item.status}">${item.status === "active" ? t("enabled") : t("disabled")}</span></td>
            <td>${availableWindowLabel(item.availableWindow)}</td>
            <td><strong>${item.concurrency}</strong></td>
            <td>${t("perDay", { count: item.frequency })}</td>
            <td><div class="row-actions">
              <button class="text-button" data-action="edit-number" data-id="${item.id}">${t("edit")}</button>
              <button class="text-button ${item.status === "active" ? "danger" : ""}" data-action="toggle-number" data-id="${item.id}">${item.status === "active" ? t("disable") : t("enable")}</button>
            </div></td>
          </tr>`).join("")}</tbody>
      </table></div>` : `
        <div class="empty-state">
          <div class="empty-icon"><svg><use href="#i-phone"></use></svg></div>
          <strong>${numbers.length ? t("noNumberResults") : t("noNumbers")}</strong>
          <p>${numbers.length ? t("noNumberResultsSub") : t("noNumbersSub")}</p>
          ${numbers.length ? `<button class="button" data-action="reset-number-filters">${t("resetFilters")}</button>` : `<button class="button primary" data-action="add-number">${t("addNumber")}</button>`}
        </div>`}
      <div class="pagination">
        <span>${t("numberTotalPage", { count: rows.length })}</span>
        <div class="pager">
          <button class="pager-button" data-action="number-prev" ${state.numberPage <= 1 ? "disabled" : ""} aria-label="${t("previous")}"><svg style="transform:rotate(180deg)"><use href="#i-chevron"></use></svg></button>
          <span>${t("numberPage", { page: state.numberPage, pages })}</span>
          <button class="pager-button" data-action="number-next" ${state.numberPage >= pages ? "disabled" : ""} aria-label="${t("next")}"><svg><use href="#i-chevron"></use></svg></button>
        </div>
      </div>
    </section>`;
  bindNumberFilters();
}

function bindNumberFilters() {
  $("#number-search").addEventListener("input", event => {
    state.numberFilters.q = event.target.value;
    state.numberPage = 1;
    renderNumbersPage();
    const input = $("#number-search");
    input.focus();
    input.setSelectionRange(input.value.length, input.value.length);
  });
  [
    ["filter-supplier", "supplier"], ["filter-route", "route"], ["filter-line", "line"], ["filter-status", "status"]
  ].forEach(([id, key]) => {
    $(`#${id}`).addEventListener("change", event => {
      state.numberFilters[key] = event.target.value;
      state.numberPage = 1;
      renderNumbersPage();
    });
  });
}

function renderCallsPage() {
  const rows = filteredCalls();
  const perPage = 7;
  const pages = Math.max(1, Math.ceil(rows.length / perPage));
  state.callPage = Math.min(state.callPage, pages);
  const pageRows = rows.slice((state.callPage - 1) * perPage, state.callPage * perPage);
  const f = state.callFilters;
  const agents = [...new Set(calls.map(item => item.agent))];
  $("#content").innerHTML = `
    <div class="helper-banner"><svg><use href="#i-alert"></use></svg><span>${state.lang === "zh" ? "外呼系统与 CRM 轻量集成：坐席点击号码发起外呼，挂断后填写通话小结，系统自动归档到客户档案与销售跟进记录。" : "The calling system is integrated with CRM: agents dial from a lead, complete the call summary, and the system archives the call and follow-up."}</span></div>
    <section class="panel">
      <div class="panel-head">
        <div class="panel-title">${t("callsPanel")}<span class="count-pill">${t("totalCalls", { count: rows.length })}</span></div>
        <div class="export-tasks">
          <button class="button ghost" data-action="open-tasks"><svg><use href="#i-clock"></use></svg>${t("exportTasks")}${state.tasks.length ? ` (${state.tasks.length})` : ""}</button>
          <button class="button primary" data-action="open-export" ${rows.length ? "" : "disabled"}><svg><use href="#i-download"></use></svg>${t("exportData")}</button>
        </div>
      </div>
      <div class="toolbar">
        <div class="search-box">
          <svg><use href="#i-search"></use></svg>
          <input class="control" id="call-search" value="${esc(f.q)}" placeholder="${t("searchCalls")}" aria-label="${t("searchCalls")}">
        </div>
        <select class="control select" id="call-line" aria-label="${t("colLines")}">
          <option value="">${t("allBusinessLine")}</option>
          ${BUSINESS_LINES.map(item => `<option value="${item.value}" ${f.line === item.value ? "selected" : ""}>${esc(item[state.lang])}</option>`).join("")}
        </select>
        <select class="control select" id="call-result" aria-label="${t("colResult")}">
          <option value="">${t("callResult")}</option>
          ${["connected","noAnswer","busy","callFailed","invalidNumber"].map(value => `<option value="${value}" ${f.result === value ? "selected" : ""}>${t(value)}</option>`).join("")}
        </select>
        <select class="control select" id="call-agent" aria-label="${state.lang === "zh" ? "外呼坐席邮箱" : "Agent email"}">
          <option value="">${t("allAgents")}</option>
          ${agents.map(agent => `<option value="${agent}" ${f.agent === agent ? "selected" : ""}>${esc(agent)}</option>`).join("")}
        </select>
        <input class="control" id="call-start" type="date" value="${f.start}" aria-label="${t("startTime")}">
        <span style="color:var(--muted)">—</span>
        <input class="control" id="call-end" type="date" value="${f.end}" aria-label="${t("endTime")}">
        <button class="button" data-action="reset-call-filters">${t("reset")}</button>
      </div>
      ${pageRows.length ? `<div class="table-wrap"><table>
        <thead><tr>
          <th>${t("colCallTime")}</th><th>${t("colUser")}</th><th>${t("colName")}</th><th>${t("colPhone")}</th>
          <th>${t("colCaller")}</th><th>${t("colResult")}</th><th>${t("colDuration")}</th><th>${t("colRecording")}</th>
          <th>${t("colTranscript")}</th><th>${t("colFollowup")}</th>
        </tr></thead>
        <tbody>${pageRows.map(item => `
          <tr>
            <td><span class="call-time">${esc(item.time)}<small>${esc(item.tz)}</small></span></td>
            <td class="phone">${esc(item.userId)}</td>
            <td><div class="person"><strong>${esc(item.name)}</strong><span>${esc(item.agent)}</span></div></td>
            <td class="phone">${esc(item.phone)}</td>
            <td class="number-cell">${esc(item.caller)}</td>
            <td><span class="tag ${resultTone(item.result)}">${esc(resultLabel(item.result))}</span></td>
            <td>${esc(item.duration)}</td>
            <td>${assetCell(item, "recording")}</td>
            <td>${assetCell(item, "transcript")}</td>
            <td>${esc(item.followup === "—" ? t("noFollowup") : t(item.followup))}</td>
          </tr>`).join("")}</tbody>
      </table></div>` : `
        <div class="empty-state">
          <div class="empty-icon"><svg><use href="#i-call"></use></svg></div>
          <strong>${t("noCallResults")}</strong><p>${t("noCallResultsSub")}</p>
          <button class="button" data-action="reset-call-filters">${t("resetFilters")}</button>
        </div>`}
      <div class="pagination">
        <span>${t("callTotalPage", { count: rows.length })}</span>
        <div class="pager">
          <button class="pager-button" data-action="call-prev" ${state.callPage <= 1 ? "disabled" : ""} aria-label="${t("previous")}"><svg style="transform:rotate(180deg)"><use href="#i-chevron"></use></svg></button>
          <span>${t("callPage", { page: state.callPage, pages })}</span>
          <button class="pager-button" data-action="call-next" ${state.callPage >= pages ? "disabled" : ""} aria-label="${t("next")}"><svg><use href="#i-chevron"></use></svg></button>
        </div>
      </div>
    </section>`;
  bindCallFilters();
}

function resultTone(result) {
  if (result === "connected") return "green";
  if (result === "noAnswer" || result === "busy") return "amber";
  if (result === "callFailed" || result === "invalidNumber") return "red";
  return "";
}

function assetCell(item, type) {
  const status = item[type];
  if (status === "play") return `<div class="asset-actions"><button class="mini-button play" data-action="play-recording" data-id="${item.id}"><svg><use href="#i-play"></use></svg>${t("playRecording")}</button></div>`;
  if (status === "download") return `<div class="asset-actions"><button class="mini-button download" data-action="download-transcript" data-id="${item.id}"><svg><use href="#i-file"></use></svg>${t("downloadTranscript")}</button></div>`;
  if (status === "syncing") return `<span class="asset-state">${t("syncing")}</span>`;
  if (status === "transcribing") return `<span class="asset-state">${t("transcribing")}</span>`;
  return `<span class="asset-state">${t("unavailable")}</span>`;
}

function bindCallFilters() {
  $("#call-search").addEventListener("input", event => {
    state.callFilters.q = event.target.value;
    state.callPage = 1;
    renderCallsPage();
    const input = $("#call-search");
    input.focus();
    input.setSelectionRange(input.value.length, input.value.length);
  });
  [
    ["call-line", "line"], ["call-result", "result"], ["call-agent", "agent"], ["call-start", "start"], ["call-end", "end"]
  ].forEach(([id, key]) => {
    $(`#${id}`).addEventListener("change", event => {
      state.callFilters[key] = event.target.value;
      state.callPage = 1;
      renderCallsPage();
    });
  });
}

function openModal(content, wide = false) {
  $("#modal").className = `modal${wide ? " wide" : ""}`;
  $("#modal").innerHTML = content;
  $("#modal-layer").classList.add("is-open");
  $("#modal-layer").setAttribute("aria-hidden", "false");
}

function closeModal() {
  if (state.exportTimer && state.modal?.type === "export") {
    clearInterval(state.exportTimer);
    state.exportTimer = null;
  }
  if (state.audioTimer) {
    clearInterval(state.audioTimer);
    state.audioTimer = null;
  }
  state.modal = null;
  $("#modal-layer").classList.remove("is-open");
  $("#modal-layer").setAttribute("aria-hidden", "true");
  $("#modal").innerHTML = "";
  $("#modal").className = "modal";
}

function modalHeader(title, subtitle = "") {
  return `<div class="modal-head"><div><h2 id="modal-title">${esc(title)}</h2>${subtitle ? `<p>${esc(subtitle)}</p>` : ""}</div><button class="icon-button" data-action="close-modal" aria-label="${t("close")}"><svg><use href="#i-close"></use></svg></button></div>`;
}

function openNumberForm(id = null) {
  const item = id ? numbers.find(entry => entry.id === id) : null;
  state.modal = { type: "number-form", id };
  renderNumberForm(item);
}

function renderNumberForm(item) {
  const supplier = item?.supplier || SUPPLIERS[0];
  const selectedRoute = item?.route || ROUTES[0].value;
  const timeMode = item?.availableWindow ? "custom" : "unlimited";
  openModal(`
    ${modalHeader(item ? t("editNumberTitle") : t("addNumberTitle"), item ? esc(item.phone) : t("numberHint"))}
    <form id="number-form" novalidate>
      <div class="modal-body">
        <div class="form-error" id="number-form-error"></div>
        <div class="form-grid">
          <div class="field full">
            <label for="form-number">${t("colNumber")} *</label>
            <input id="form-number" name="phone" value="${esc(item?.phone || "")}" placeholder="+60 11 2345 6789" ${item ? "disabled" : ""} autocomplete="off">
            <span class="hint">${t("numberHint")}</span>
          </div>
          <div class="field">
            <label for="form-supplier">${t("supplier")} *</label>
            <select id="form-supplier" name="supplier">
              ${SUPPLIERS.map(value => `<option value="${esc(value)}" ${value === supplier ? "selected" : ""}>${esc(value)}</option>`).join("")}
            </select>
          </div>
          <div class="field">
            <label for="form-route">${t("route")} *</label>
            <select id="form-route" name="route">
              ${ROUTES.map(route => `<option value="${route.value}" ${route.value === selectedRoute ? "selected" : ""}>${esc(route[state.lang])}</option>`).join("")}
            </select>
          </div>
          <div class="field full">
            <label>${t("businessLines")} *</label>
            <div class="checks">
              ${BUSINESS_LINES.map(line => `<label class="check"><input type="checkbox" name="lines" value="${line.value}" ${item?.lines.includes(line.value) ? "checked" : ""}><span>${esc(line[state.lang])}</span></label>`).join("")}
            </div>
          </div>
          <div class="field full">
            <label>${t("status")} *</label>
            <div class="radio-row">
              <label><input type="radio" name="status" value="active" ${!item || item.status === "active" ? "checked" : ""}>${t("enabled")}</label>
              <label><input type="radio" name="status" value="disabled" ${item?.status === "disabled" ? "checked" : ""}>${t("disabled")}</label>
            </div>
          </div>
          <div class="field full">
            <label for="form-time-mode">${t("colAvailableTime")} *</label>
            <div class="time-config">
              <select id="form-time-mode" name="timeMode">
                <option value="unlimited" ${timeMode === "unlimited" ? "selected" : ""}>${t("unlimitedTime")}</option>
                <option value="custom" ${timeMode === "custom" ? "selected" : ""}>${t("customTime")}</option>
              </select>
              <div class="time-inputs" id="time-inputs">
                <input id="form-time-start" type="time" name="timeStart" value="${esc(item?.availableWindow?.start || "09:00")}" ${timeMode === "unlimited" ? "disabled" : ""} aria-label="${t("startTime")}">
                <span>—</span>
                <input id="form-time-end" type="time" name="timeEnd" value="${esc(item?.availableWindow?.end || "18:00")}" ${timeMode === "unlimited" ? "disabled" : ""} aria-label="${t("endTime")}">
              </div>
            </div>
            <span class="hint">${t("availableTimeHint")}</span>
          </div>
          <div class="field">
            <label for="form-concurrency">${t("concurrency")} *</label>
            <input id="form-concurrency" type="number" min="1" max="100" step="1" name="concurrency" value="${item?.concurrency ?? 1}">
            <span class="hint">${t("concurrencyHint")}</span>
          </div>
          <div class="field">
            <label for="form-frequency">${t("frequency")} *</label>
            <input id="form-frequency" type="number" min="1" max="20" step="1" name="frequency" value="${item?.frequency ?? 3}">
            <span class="hint">${t("frequencyHint")}</span>
          </div>
        </div>
      </div>
      <div class="modal-foot">
        <button type="button" class="button" data-action="close-modal">${t("cancel")}</button>
        <button type="submit" class="button primary">${item ? t("save") : t("create")}</button>
      </div>
    </form>`, false);
  $("#form-time-mode").addEventListener("change", event => {
    const custom = event.target.value === "custom";
    $("#form-time-start").disabled = !custom;
    $("#form-time-end").disabled = !custom;
  });
  $("#number-form").addEventListener("submit", submitNumberForm);
}

function submitNumberForm(event) {
  event.preventDefault();
  const data = new FormData(event.currentTarget);
  const id = state.modal?.id;
  const existing = id ? numbers.find(entry => entry.id === id) : null;
  const phone = normalizePhone(existing?.phone || data.get("phone") || "");
  const supplier = data.get("supplier");
  const route = data.get("route");
  const lines = data.getAll("lines");
  const status = data.get("status");
  const timeMode = data.get("timeMode");
  const timeStart = data.get("timeStart");
  const timeEnd = data.get("timeEnd");
  const concurrency = Number(data.get("concurrency"));
  const frequency = Number(data.get("frequency"));
  const error = $("#number-form-error");
  const fail = message => {
    error.textContent = message;
    error.classList.add("show");
  };
  if (!phone || !supplier || !route || !status || !lines.length) return fail(t("requiredField"));
  if (!/^\+[1-9]\d{7,14}$/.test(phone)) return fail(t("invalidPhone"));
  if (numbers.some(item => item.phone === phone && item.id !== id)) return fail(t("duplicatePhone"));
  if (!lines.length) return fail(t("missingLines"));
  if (!Number.isInteger(concurrency) || concurrency < 1 || concurrency > 100) return fail(t("invalidConcurrency"));
  if (!Number.isInteger(frequency) || frequency < 1 || frequency > 20) return fail(t("invalidFrequency"));
  if (timeMode === "custom" && (!timeStart || !timeEnd || timeStart === timeEnd)) return fail(t("errorTime"));
  const availableWindow = timeMode === "custom" ? { start: timeStart, end: timeEnd } : null;
  if (existing) {
    Object.assign(existing, { supplier, route, lines, status, availableWindow, concurrency, frequency });
    closeModal();
    renderNumbersPage();
    showToast(t("savedNumber"));
  } else {
    numbers.unshift({ id: `n${Date.now()}`, phone, supplier, route, lines, status, availableWindow, concurrency, frequency });
    state.numberPage = 1;
    closeModal();
    renderNumbersPage();
    showToast(t("savedNewNumber"));
  }
}

function openImportModal() {
  state.modal = { type: "import", stage: "upload", fileName: "", fileError: "", rows: [], result: null };
  renderImportModal();
}

function renderImportModal() {
  if (!state.modal) return;
  if (state.modal.stage === "upload") {
    openModal(`
      ${modalHeader(t("importTitle"), t("importSubtitle"))}
      <div class="modal-body">
        <div class="import-guide">
          <div><strong>${t("importFormatTitle")}</strong><p>${t("importFormatText")}</p></div>
          <button class="button" data-action="download-import-template"><svg><use href="#i-download"></use></svg>${t("downloadTemplate")}</button>
        </div>
        <div class="notice">${t("importRuleText")}</div>
        ${state.modal.fileError ? `<div class="form-error show">${esc(state.modal.fileError)}</div>` : ""}
        <label class="file-drop">
          <input id="import-file" type="file" accept=".csv,text/csv">
          <span class="file-drop-icon"><svg><use href="#i-file"></use></svg></span>
          <strong>${t("chooseFile")}</strong>
          <small>UTF-8 CSV</small>
        </label>
      </div>
      <div class="modal-foot"><button class="button" data-action="close-modal">${t("cancel")}</button></div>`, true);
    $("#import-file").addEventListener("change", handleImportFile);
  } else if (state.modal.stage === "preview") {
    const valid = state.modal.rows.filter(row => !row.errors.length);
    const invalid = state.modal.rows.length - valid.length;
    openModal(`
      ${modalHeader(t("importPreviewTitle"), state.modal.fileName)}
      <div class="modal-body">
        <div class="summary-grid import-summary">
          <div class="summary-item"><span>${t("importTotalRows")}</span><strong>${state.modal.rows.length}</strong></div>
          <div class="summary-item"><span>${t("importValidRows")}</span><strong>${valid.length}</strong></div>
          <div class="summary-item"><span>${t("importInvalidRows")}</span><strong>${invalid}</strong></div>
        </div>
        <div class="import-table-wrap">
          <table class="import-table">
            <thead><tr>
              <th>${t("importRow")}</th><th>${t("colNumber")}</th><th>${t("colSupplier")}</th><th>${t("colRoute")}</th>
              <th>${t("colLines")}</th><th>${t("colStatus")}</th><th>${t("colAvailableTime")}</th>
              <th>${t("colConcurrency")}</th><th>${t("colFrequency")}</th><th>${t("importValidation")}</th>
            </tr></thead>
            <tbody>${state.modal.rows.map(row => `<tr class="${row.errors.length ? "has-errors" : ""}">
              <td>${row.lineNo}</td><td class="phone">${esc(row.raw.phone)}</td><td>${esc(row.raw.supplier)}</td><td>${esc(row.raw.route)}</td>
              <td>${esc(row.raw.lines)}</td><td>${esc(row.raw.status)}</td><td>${esc(row.raw.time)}</td>
              <td>${esc(row.raw.concurrency)}</td><td>${esc(row.raw.frequency)}</td>
              <td>${row.errors.length ? `<div class="validation-tags">${row.errors.map(error => `<span class="tag red">${esc(error)}</span>`).join("")}</div>` : `<span class="tag green">${t("importReady")}</span>`}</td>
            </tr>`).join("")}</tbody>
          </table>
        </div>
      </div>
      <div class="modal-foot">
        <button class="button" data-action="reset-import">${t("importAnother")}</button>
        <button class="button primary" data-action="confirm-import" ${valid.length ? "" : "disabled"}>${t("importConfirm")} (${valid.length})</button>
      </div>`, true);
  } else if (state.modal.stage === "result") {
    const result = state.modal.result;
    openModal(`
      ${modalHeader(t("importResultTitle"))}
      <div class="modal-body">
        <div class="success-block">
          <div class="success-icon"><svg><use href="#i-check"></use></svg></div>
          <h3>${t("importResultTitle")}</h3>
          <p>${t("importResultMeta", { success: result.success, failed: result.failedRows.length })}</p>
        </div>
      </div>
      <div class="modal-foot">
        ${result.failedRows.length ? `<button class="button" data-action="download-import-errors">${t("downloadFailedRows")}</button>` : ""}
        <button class="button primary" data-action="close-modal">${t("close")}</button>
      </div>`, true);
  }
}

const IMPORT_HEADER_SETS = {
  zh: ["号码","所属供应商","线路","可用业务线","可用状态","可用时间","并发","被叫频次限制"],
  en: ["Number","Supplier","Route","Business Lines","Status","Available Time","Concurrency","Callee Frequency Limit"]
};

function csvParse(text) {
  const rows = [];
  let row = [], cell = "", quoted = false;
  const source = text.replace(/^\uFEFF/, "");
  for (let index = 0; index < source.length; index++) {
    const char = source[index];
    if (quoted && char === '"' && source[index + 1] === '"') {
      cell += '"';
      index++;
    } else if (char === '"') {
      quoted = !quoted;
    } else if (char === "," && !quoted) {
      row.push(cell);
      cell = "";
    } else if ((char === "\n" || char === "\r") && !quoted) {
      if (char === "\r" && source[index + 1] === "\n") index++;
      row.push(cell);
      if (row.some(value => value.trim() !== "")) rows.push(row);
      row = [];
      cell = "";
    } else {
      cell += char;
    }
  }
  row.push(cell);
  if (row.some(value => value.trim() !== "")) rows.push(row);
  return rows;
}

async function handleImportFile(event) {
  const file = event.target.files?.[0];
  if (!file || !state.modal) return;
  try {
    const parsed = csvParse(await file.text());
    if (!parsed.length) throw new Error("empty");
    const headers = parsed[0].map(value => value.trim());
    const headerSet = Object.values(IMPORT_HEADER_SETS).find(set => set.length === headers.length && set.every((value, index) => value === headers[index]));
    if (!headerSet) {
      state.modal.fileError = t("importHeaderError");
      renderImportModal();
      return;
    }
    const seen = new Set();
    const rows = parsed.slice(1).map((cells, index) => validateImportRow(cells, index + 2, seen));
    state.modal.fileName = file.name;
    state.modal.rows = rows;
    state.modal.fileError = "";
    state.modal.stage = "preview";
    renderImportModal();
  } catch {
    state.modal.fileError = t("importFileError");
    renderImportModal();
  }
}

function validateImportRow(cells, lineNo, seen) {
  const raw = {
    phone: (cells[0] || "").trim(),
    supplier: (cells[1] || "").trim(),
    route: (cells[2] || "").trim(),
    lines: (cells[3] || "").trim(),
    status: (cells[4] || "").trim(),
    time: (cells[5] || "").trim(),
    concurrency: (cells[6] || "").trim(),
    frequency: (cells[7] || "").trim()
  };
  const errors = [];
  const phone = normalizePhone(raw.phone);
  if (!/^\+[1-9]\d{7,14}$/.test(phone)) errors.push(t("errorPhone"));
  if (seen.has(phone)) errors.push(t("errorDuplicateFile"));
  if (numbers.some(item => item.phone === phone)) errors.push(t("errorDuplicatePool"));
  seen.add(phone);
  if (!SUPPLIERS.includes(raw.supplier)) errors.push(t("errorSupplier"));
  const route = ROUTES.find(item => [item.value,item.zh,item.en].includes(raw.route));
  if (!route) errors.push(t("errorRoute"));
  const lines = raw.lines.split("|").map(value => value.trim()).filter(Boolean).map(value => {
    const match = BUSINESS_LINES.find(item => [item.value,item.zh,item.en].includes(value));
    return match?.value;
  });
  if (!lines.length || lines.some(value => !value)) errors.push(t("errorLines"));
  const status = raw.status === "可用" || raw.status === "Available" ? "active"
    : raw.status === "停用" || raw.status === "Disabled" ? "disabled" : null;
  if (!status) errors.push(t("errorStatus"));
  let availableWindow = null;
  if (!["不限","Any time"].includes(raw.time)) {
    const match = raw.time.replace(/[–—]/g, "-").match(/^([0-2]\d:[0-5]\d)-([0-2]\d:[0-5]\d)$/);
    if (!match || match[1] === match[2] || Number(match[1].slice(0,2)) > 23 || Number(match[2].slice(0,2)) > 23) {
      errors.push(t("errorTime"));
    } else {
      availableWindow = { start: match[1], end: match[2] };
    }
  }
  const concurrency = Number(raw.concurrency);
  if (!Number.isInteger(concurrency) || concurrency < 1 || concurrency > 100) errors.push(t("errorConcurrency"));
  const frequency = Number(raw.frequency);
  if (!Number.isInteger(frequency) || frequency < 1 || frequency > 20) errors.push(t("errorFrequency"));
  return {
    lineNo,
    raw,
    errors,
    normalized: { phone, supplier: raw.supplier, route: route?.value, lines, status, availableWindow, concurrency, frequency }
  };
}

function downloadImportTemplate() {
  const headers = IMPORT_HEADER_SETS[state.lang];
  const sample = state.lang === "zh"
    ? ["+60123456789","供应商1","线路1","马来西亚|泰国","可用","不限","10","3"]
    : ["+60123456789","供应商1","线路1","Malaysia|Thailand","Available","Any time","10","3"];
  const csv = "\uFEFF" + [headers, sample].map(row => row.map(csvCell).join(",")).join("\r\n");
  downloadBlob(new Blob([csv], { type: "text/csv;charset=utf-8" }), state.lang === "zh" ? "号码池批量导入模板.csv" : "number_pool_import_template.csv");
}

function confirmImport() {
  if (!state.modal || state.modal.stage !== "preview") return;
  const validRows = state.modal.rows.filter(row => !row.errors.length);
  const failedRows = state.modal.rows.filter(row => row.errors.length);
  validRows.slice().reverse().forEach(row => {
    const item = row.normalized;
    numbers.unshift({ id: `n${Date.now()}${Math.random().toString(16).slice(2)}`, ...item });
  });
  state.modal.result = { success: validRows.length, failedRows };
  state.modal.stage = "result";
  state.numberPage = 1;
  renderNumbersPage();
  renderImportModal();
}

function downloadImportErrors() {
  if (!state.modal?.result?.failedRows?.length) return;
  const headers = [...IMPORT_HEADER_SETS[state.lang], state.lang === "zh" ? "错误原因" : "Errors"];
  const rows = state.modal.result.failedRows.map(row => [
    row.raw.phone,row.raw.supplier,row.raw.route,row.raw.lines,row.raw.status,row.raw.time,row.raw.concurrency,row.raw.frequency,row.errors.join("; ")
  ]);
  const csv = "\uFEFF" + [headers, ...rows].map(row => row.map(csvCell).join(",")).join("\r\n");
  downloadBlob(new Blob([csv], { type: "text/csv;charset=utf-8" }), state.lang === "zh" ? "号码池导入失败行.csv" : "number_pool_import_failed_rows.csv");
}

function resetImport() {
  if (!state.modal) return;
  state.modal.stage = "upload";
  state.modal.rows = [];
  state.modal.fileName = "";
  state.modal.fileError = "";
  state.modal.result = null;
  renderImportModal();
}

function openExportModal() {
  const rows = filteredCalls();
  state.modal = { type: "export", stage: "form", includeRecording: false, rows: rows.map(row => row.id), progress: 0 };
  renderExportModal();
}

function exportStats(rows) {
  const connected = rows.filter(item => item.result === "connected");
  const locatable = connected.filter(item => item.id && (item.recording === "play" || item.transcript === "download"));
  const missing = connected.reduce((total, item) => total + (item.recording === "play" ? 0 : 1) + (item.transcript === "download" ? 0 : 1), 0);
  return { rows: rows.length, connected: connected.length, locatable: locatable.length, missing };
}

function renderExportModal() {
  if (!state.modal) return;
  const rows = state.modal.rows.map(id => calls.find(item => item.id === id)).filter(Boolean);
  const stats = exportStats(rows);
  if (state.modal.stage === "form") {
    const include = state.modal.includeRecording;
    openModal(`
      ${modalHeader(t("exportTitle"), t("exportSubtitle"))}
      <div class="modal-body">
        <div class="summary-grid">
          <div class="summary-item"><span>${t("resultRows")}</span><strong>${stats.rows}</strong></div>
          <div class="summary-item"><span>${t("connectedRows")}</span><strong>${stats.connected}</strong></div>
          <div class="summary-item"><span>${t("locatableGroups")}</span><strong>${stats.locatable}</strong></div>
          <div class="summary-item"><span>${t("missingFiles")}</span><strong>${stats.missing}</strong></div>
        </div>
        <div class="export-option">
          <div><strong>${t("includeRecording")}</strong><p>${t("includeRecordingHint")}</p></div>
          <label class="switch"><input id="include-recording" type="checkbox" ${include ? "checked" : ""} aria-label="${t("includeRecording")}"><span></span></label>
        </div>
        ${include ? `
          <div class="bundle-preview">outbound_recording_ALL_20261116123000_OB20261116001.zip
├── manifest.csv
├── call-records.csv
└── files/
    └── {call_id}/
        ├── recording.{ext}
        └── transcript.{ext}</div>
          <div class="notice">${t("bundleNotice")}</div>` : ""}
      </div>
      <div class="modal-foot">
        <button class="button" data-action="close-modal">${t("cancel")}</button>
        <button class="button primary" data-action="start-export">${t("createExport")}</button>
      </div>`, true);
    $("#include-recording").addEventListener("change", event => {
      state.modal.includeRecording = event.target.checked;
      renderExportModal();
    });
  } else if (state.modal.stage === "progress") {
    openModal(`
      ${modalHeader(t("exportTitle"), t("exportProgress"))}
      <div class="modal-body">
        <div class="progress-wrap">
          <div class="progress-head"><span>${t("exportProgressCount", { done: state.modal.progress, total: stats.connected })}</span><strong>${Math.round((state.modal.progress / Math.max(1, stats.connected)) * 100)}%</strong></div>
          <div class="progress-track"><div class="progress-bar" style="width:${Math.round((state.modal.progress / Math.max(1, stats.connected)) * 100)}%"></div></div>
        </div>
        <div class="bundle-preview" style="margin-top:18px">manifest.csv
call-records.csv
files/{call_id}/recording.{ext}
files/{call_id}/transcript.{ext}</div>
      </div>
      <div class="modal-foot"><button class="button" data-action="cancel-export">${t("cancelTask")}</button></div>`, true);
  } else if (state.modal.stage === "success") {
    const task = state.tasks.find(item => item.id === state.modal.taskId);
    openModal(`
      ${modalHeader(t("exportTitle"))}
      <div class="modal-body">
        <div class="success-block">
          <div class="success-icon"><svg><use href="#i-check"></use></svg></div>
          <h3>${task.includeRecording ? t("exportSuccess") : t("dataExportSuccess")}</h3>
          <p>${task.includeRecording ? t("exportSuccessMeta", { task: task.id, groups: task.groups, missing: task.missing }) : t("dataExportMeta", { task: task.id, count: task.rows.length })}</p>
        </div>
      </div>
      <div class="modal-foot">
        <button class="button" data-action="close-modal">${t("close")}</button>
        <button class="button primary" data-action="download-task" data-id="${task.id}"><svg><use href="#i-download"></use></svg>${task.includeRecording ? t("downloadBundle") : t("downloadDataFile")}</button>
      </div>`, true);
  }
}

function startExport() {
  if (!state.modal) return;
  const rows = state.modal.rows.map(id => calls.find(item => item.id === id)).filter(Boolean);
  const stats = exportStats(rows);
  state.modal.stage = "progress";
  state.modal.progress = 0;
  renderExportModal();
  state.exportTimer = setInterval(() => {
    if (!state.modal || state.modal.stage !== "progress") return;
    state.modal.progress = Math.min(stats.connected, state.modal.progress + Math.max(1, Math.ceil(stats.connected / 6)));
    if (state.modal.progress >= stats.connected) {
      clearInterval(state.exportTimer);
      state.exportTimer = null;
      const task = {
        id: `OB${new Date().toISOString().replace(/\D/g,"").slice(0,14)}`,
        createdAt: new Date().toISOString(),
        rows: [...state.modal.rows],
        includeRecording: state.modal.includeRecording,
        status: "done",
        groups: state.modal.includeRecording ? stats.locatable : 0,
        missing: state.modal.includeRecording ? stats.missing : 0
      };
      state.tasks.unshift(task);
      state.modal.stage = "success";
      state.modal.taskId = task.id;
    }
    renderExportModal();
  }, 260);
}

function cancelExport() {
  if (state.exportTimer) clearInterval(state.exportTimer);
  state.exportTimer = null;
  closeModal();
  renderCallsPage();
  showToast(t("taskCanceled"));
}

function openTasks() {
  state.modal = { type: "tasks" };
  openModal(`
    ${modalHeader(t("exportTaskTitle"))}
    <div class="modal-body">
      ${state.tasks.length ? `<div class="task-list">${state.tasks.map(task => `
        <div class="task-item">
          <div><strong>${esc(task.id)}</strong><span>${task.includeRecording ? t("taskRows", { count: task.rows.length, groups: task.groups }) : t("taskDataRows", { count: task.rows.length })}</span><span>${t("taskStatusDone")}</span></div>
          <button class="button" data-action="download-task" data-id="${task.id}"><svg><use href="#i-download"></use></svg>${t("download")}</button>
        </div>`).join("")}</div>` : `<div class="empty-state"><div class="empty-icon"><svg><use href="#i-clock"></use></svg></div><strong>${t("noTasks")}</strong><p>${t("noTasksSub")}</p></div>`}
    </div>
    <div class="modal-foot"><button class="button" data-action="close-modal">${t("close")}</button></div>`, false);
}

function callById(id) {
  return calls.find(item => item.id === id);
}

function openRecording(id) {
  const call = callById(id);
  state.modal = { type: "audio", callId: id, progress: 0, playing: false };
  renderAudioModal(call);
}

function renderAudioModal(call) {
  if (!state.modal) return;
  const progress = state.modal.progress;
  openModal(`
    ${modalHeader(t("recordingTitle"), t("recordingOwner", { callId: call.id }))}
    <div class="modal-body">
      <div class="audio-card">
        <div class="audio-top">
          <button class="audio-play" data-action="toggle-audio" aria-label="${state.modal.playing ? t("pause") : t("play")}"><svg>${state.modal.playing ? '<path d="M9 7v10M15 7v10"/>' : '<path d="m9 7 8 5-8 5z"/>'}</svg></button>
          <div class="audio-info"><strong>${esc(call.caller)} → ${esc(call.phone)}</strong><span>${t("audioDuration", { duration: call.duration })}</span></div>
          <strong>${Math.round(progress)}%</strong>
        </div>
        <div class="audio-line"><div class="audio-progress" style="width:${progress}%"></div></div>
      </div>
      <dl class="detail-grid">
        <dt>${t("detailCaller")}</dt><dd>${esc(call.caller)}</dd>
        <dt>${t("detailPhone")}</dt><dd>${esc(call.phone)}</dd>
        <dt>${t("detailResult")}</dt><dd>${esc(resultLabel(call.result))}</dd>
        <dt>${t("detailTime")}</dt><dd>${esc(call.time)}</dd>
      </dl>
    </div>
    <div class="modal-foot"><button class="button" data-action="close-modal">${t("close")}</button></div>`, false);
}

function toggleAudio() {
  if (!state.modal || state.modal.type !== "audio") return;
  state.modal.playing = !state.modal.playing;
  if (state.audioTimer) clearInterval(state.audioTimer);
  state.audioTimer = null;
  if (state.modal.playing) {
    state.audioTimer = setInterval(() => {
      if (!state.modal || state.modal.type !== "audio") return;
      state.modal.progress = Math.min(100, state.modal.progress + 2);
      if (state.modal.progress >= 100) {
        state.modal.playing = false;
        clearInterval(state.audioTimer);
        state.audioTimer = null;
      }
      renderAudioModal(callById(state.modal.callId));
    }, 180);
  }
  renderAudioModal(callById(state.modal.callId));
}

function downloadTranscript(id) {
  const call = callById(id);
  const text = state.lang === "zh"
    ? `通话逐字稿\n通话编号：${call.id}\n主叫号码：${call.caller}\n被叫号码：${call.phone}\n起呼时间：${call.time}\n\n[00:00] 顾问：您好，这里是 DinoAI 课程顾问。\n[00:08] 客户：您好，我想了解体验课安排。\n[00:20] 顾问：可以，我先和您确认一下合适的上课时间。\n[01:04] 客户：本周四晚上可以。\n[01:18] 顾问：好的，我为您登记，稍后会发送确认信息。\n`
    : `Call Transcript\nCall ID: ${call.id}\nCaller: ${call.caller}\nPhone: ${call.phone}\nCall time: ${call.time}\n\n[00:00] Agent: Hello, this is a course advisor from DinoAI.\n[00:08] Customer: Hi, I would like to know about the trial lesson.\n[00:20] Agent: Certainly. Let me confirm a suitable time.\n[01:04] Customer: Thursday evening works for me.\n[01:18] Agent: I have registered it. A confirmation will follow shortly.\n`;
  downloadBlob(new Blob([text], { type: "text/plain;charset=utf-8" }), `${call.id}-transcript.txt`);
  showToast(t("transcriptDownloaded"));
}

function downloadTask(id) {
  const task = state.tasks.find(item => item.id === id);
  if (!task) return;
  const rows = task.rows.map(callId => callById(callId)).filter(Boolean);
  const resultData = buildResultCsv(rows);
  if (!task.includeRecording) {
    downloadBlob(new Blob([resultData], { type: "text/csv;charset=utf-8" }), `call-records_${task.id}.csv`);
    showToast(t("dataDownloaded"));
    return;
  }
  const manifest = buildManifest(rows, task);
  const files = [
    { name: "manifest.csv", data: manifest },
    { name: "call-records.csv", data: resultData },
    { name: "README.txt", data: state.lang === "zh"
      ? "录音与逐字稿按 call_id 存放。manifest.csv 中的 recording_path 和 transcript_path 为包内相对路径。\n"
      : "Recordings and transcripts are grouped by call_id. recording_path and transcript_path in manifest.csv are relative paths inside this package.\n" }
  ];
  rows.filter(call => call.result === "connected" && call.transcript === "download").forEach(call => {
    files.push({
      name: `files/${call.id}/transcript.txt`,
      data: state.lang === "zh"
        ? `通话 ${call.id}\n主叫号码：${call.caller}\n被叫号码：${call.phone}\n起呼时间：${call.time}\n`
        : `Call ${call.id}\nCaller: ${call.caller}\nPhone: ${call.phone}\nCall time: ${call.time}\n`
    });
  });
  rows.filter(call => call.result === "connected" && call.recording === "play").forEach(call => {
    files.push({ name: `files/${call.id}/recording.wav`, data: createSilentWav() });
  });
  downloadBlob(createZip(files), `outbound_recording_ALL_${task.id}.zip`);
  showToast(t("bundleDownloaded"));
}

function buildManifest(rows, task) {
  const header = ["export_row_no","call_id","user_id","business_line","callee_number","caller_number","call_started_at","call_result","recording_path","transcript_path","asset_status","missing_reason"];
  const body = rows.map((call, index) => {
    const recordingPath = call.recording === "play" ? `files/${call.id}/recording.wav` : "";
    const transcriptPath = call.transcript === "download" ? `files/${call.id}/transcript.txt` : "";
    let status = "BOTH_AVAILABLE";
    let reason = "";
    if (call.result !== "connected") { status = "NOT_CONNECTED"; reason = "Call not connected"; }
    else if (call.recording === "syncing" || call.transcript === "transcribing") { status = "SYNCING"; reason = "Media still syncing"; }
    else if (recordingPath && !transcriptPath) { status = "RECORDING_ONLY"; reason = "Transcript unavailable"; }
    else if (!recordingPath && transcriptPath) { status = "TRANSCRIPT_ONLY"; reason = "Recording unavailable"; }
    else if (!recordingPath && !transcriptPath) { status = "UNAVAILABLE"; reason = "Recording and transcript unavailable"; }
    return [index + 1, call.id, call.userId, call.line, call.phone, call.caller, call.time, call.result, recordingPath, transcriptPath, status, reason];
  });
  return [header, ...body].map(row => row.map(csvCell).join(",")).join("\r\n");
}

function buildResultCsv(rows) {
  const header = ["call_id","call_started_at","user_id","name","callee_number","caller_number","business_line","call_result","duration","agent_email","followup"];
  const body = rows.map(call => [call.id, call.time, call.userId, call.name, call.phone, call.caller, call.line, call.result, call.duration, call.agent, call.followup === "—" ? "" : t(call.followup)]);
  return "\uFEFF" + [header, ...body].map(row => row.map(csvCell).join(",")).join("\r\n");
}

function csvCell(value) {
  const text = String(value ?? "");
  return /[",\r\n]/.test(text) ? `"${text.replaceAll('"', '""')}"` : text;
}

function downloadBlob(blob, filename) {
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  link.remove();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}

const crcTable = (() => {
  const table = new Uint32Array(256);
  for (let index = 0; index < 256; index++) {
    let value = index;
    for (let bit = 0; bit < 8; bit++) value = (value & 1) ? (0xedb88320 ^ (value >>> 1)) : (value >>> 1);
    table[index] = value >>> 0;
  }
  return table;
})();

function crc32(bytes) {
  let crc = 0xffffffff;
  for (const byte of bytes) crc = crcTable[(crc ^ byte) & 0xff] ^ (crc >>> 8);
  return (crc ^ 0xffffffff) >>> 0;
}

function u16(value) {
  return new Uint8Array([value & 255, (value >>> 8) & 255]);
}
function u32(value) {
  return new Uint8Array([value & 255, (value >>> 8) & 255, (value >>> 16) & 255, (value >>> 24) & 255]);
}
function concatBytes(chunks) {
  const length = chunks.reduce((total, chunk) => total + chunk.length, 0);
  const output = new Uint8Array(length);
  let offset = 0;
  chunks.forEach(chunk => { output.set(chunk, offset); offset += chunk.length; });
  return output;
}

function createZip(files) {
  const encoder = new TextEncoder();
  const localParts = [];
  const centralParts = [];
  let offset = 0;
  const now = new Date();
  const dosTime = ((now.getHours() & 31) << 11) | ((now.getMinutes() & 63) << 5) | ((Math.floor(now.getSeconds() / 2)) & 31);
  const dosDate = (((now.getFullYear() - 1980) & 127) << 9) | (((now.getMonth() + 1) & 15) << 5) | (now.getDate() & 31);
  files.forEach(file => {
    const name = encoder.encode(file.name);
    const data = typeof file.data === "string" ? encoder.encode(file.data) : file.data;
    const crc = crc32(data);
    const localHeader = concatBytes([
      u32(0x04034b50), u16(20), u16(0x0800), u16(0), u16(dosTime), u16(dosDate),
      u32(crc), u32(data.length), u32(data.length), u16(name.length), u16(0)
    ]);
    localParts.push(localHeader, name, data);
    const centralHeader = concatBytes([
      u32(0x02014b50), u16(20), u16(20), u16(0x0800), u16(0), u16(dosTime), u16(dosDate),
      u32(crc), u32(data.length), u32(data.length), u16(name.length), u16(0), u16(0),
      u16(0), u16(0), u32(0), u32(offset)
    ]);
    centralParts.push(centralHeader, name);
    offset += localHeader.length + name.length + data.length;
  });
  const centralSize = centralParts.reduce((total, part) => total + part.length, 0);
  const end = concatBytes([
    u32(0x06054b50), u16(0), u16(0), u16(files.length), u16(files.length),
    u32(centralSize), u32(offset), u16(0)
  ]);
  return new Blob([...localParts, ...centralParts, end], { type: "application/zip" });
}

function createSilentWav() {
  const sampleRate = 8000;
  const sampleCount = 2000;
  const dataSize = sampleCount;
  const buffer = new ArrayBuffer(44 + dataSize);
  const view = new DataView(buffer);
  const writeText = (offset, text) => [...text].forEach((char, index) => view.setUint8(offset + index, char.charCodeAt(0)));
  writeText(0, "RIFF");
  view.setUint32(4, 36 + dataSize, true);
  writeText(8, "WAVE");
  writeText(12, "fmt ");
  view.setUint32(16, 16, true);
  view.setUint16(20, 1, true);
  view.setUint16(22, 1, true);
  view.setUint32(24, sampleRate, true);
  view.setUint32(28, sampleRate, true);
  view.setUint16(32, 1, true);
  view.setUint16(34, 8, true);
  writeText(36, "data");
  view.setUint32(40, dataSize, true);
  return new Uint8Array(buffer).fill(128, 44);
}

document.addEventListener("click", event => {
  const target = event.target.closest("[data-action], [data-page]");
  if (!target) return;
  if (target.dataset.page) {
    state.page = target.dataset.page;
    closeModal();
    renderPage();
    return;
  }
  const action = target.dataset.action;
  const id = target.dataset.id;
  if (action === "close-modal") closeModal();
  else if (action === "add-number") openNumberForm();
  else if (action === "open-import") openImportModal();
  else if (action === "download-import-template") downloadImportTemplate();
  else if (action === "reset-import") resetImport();
  else if (action === "confirm-import") confirmImport();
  else if (action === "download-import-errors") downloadImportErrors();
  else if (action === "edit-number") openNumberForm(id);
  else if (action === "toggle-number") {
    const item = numbers.find(entry => entry.id === id);
    item.status = item.status === "active" ? "disabled" : "active";
    renderNumbersPage();
    showToast(t("statusChanged"));
  }
  else if (action === "refresh-numbers") {
    renderNumbersPage();
    showToast(t("refreshed"));
  }
  else if (action === "reset-number-filters") {
    state.numberFilters = { q:"", supplier:"", route:"", line:"", status:"" };
    state.numberPage = 1;
    renderNumbersPage();
  }
  else if (action === "number-prev") { state.numberPage--; renderNumbersPage(); }
  else if (action === "number-next") { state.numberPage++; renderNumbersPage(); }
  else if (action === "reset-call-filters") {
    state.callFilters = { q:"", line:"", result:"", agent:"", start:"", end:"" };
    state.callPage = 1;
    renderCallsPage();
  }
  else if (action === "call-prev") { state.callPage--; renderCallsPage(); }
  else if (action === "call-next") { state.callPage++; renderCallsPage(); }
  else if (action === "open-export") openExportModal();
  else if (action === "start-export") startExport();
  else if (action === "cancel-export") cancelExport();
  else if (action === "open-tasks") openTasks();
  else if (action === "download-task") downloadTask(id);
  else if (action === "play-recording") openRecording(id);
  else if (action === "toggle-audio") toggleAudio();
  else if (action === "download-transcript") downloadTranscript(id);
});

$("#lang-switch").addEventListener("click", () => {
  state.lang = state.lang === "zh" ? "en" : "zh";
  localStorage.setItem("outbound-lang", state.lang);
  applyStaticTranslations();
  renderPage();
  if (state.modal?.type === "number-form") renderNumberForm(state.modal.id ? numbers.find(item => item.id === state.modal.id) : null);
  else if (state.modal?.type === "import") renderImportModal();
  else if (state.modal?.type === "export") renderExportModal();
  else if (state.modal?.type === "tasks") openTasks();
  else if (state.modal?.type === "audio") renderAudioModal(callById(state.modal.callId));
});

document.addEventListener("keydown", event => {
  if (event.key === "Escape" && $("#modal-layer").classList.contains("is-open")) closeModal();
});

renderPage();
