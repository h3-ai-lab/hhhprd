# 用户咨询预约时间

使用现有意向用户记录的预约提交时间，在用户中心和销售中心展示预约状态、预约时间，并支持筛选和导出。

| 项 | 内容 |
|---|---|
| 状态 | 评审后修订 |
| 需求编号 | REQ-CONSULT-001 |
| 正式 PRD | [PRD](prd/PRD.md) |
| 线上原型 | [打开线上原型](https://h3-ai-lab.github.io/hhhprd/projects/user-consultation-lead/prototype/) |
| 原型源码 | [prototype/index.html](prototype/index.html) |
| 需求类型 | 表单、字段与列表；权限与审计 |

## 本版边界

- 直接使用现有意向用户记录的提交时间。
- 用户中心与销售中心展示 `用户咨询预约`、`用户预约时间` 两个字段。
- 不改变现有邀请页、注册、Onboarding、销售阶段和线索归属规则。
- 预约时间有值视为已预约，空值视为未预约。

