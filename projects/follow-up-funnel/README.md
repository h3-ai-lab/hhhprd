# Follow-up Funnel Metrics

> 在管理看板 `Sales follow-up` 增加 5 个销售跟进漏斗指标。

| 项 | 内容 |
|---|---|
| 状态 | PRD 待评审 |
| 需求编号 | REQ-DASH-007 |
| 正式 PRD | [PRD.md](PRD.md) |
| 交互原型 | [prototype/index.html](prototype/index.html) |
| 主要范围 | Lead-Connect%、Lead-Appt%、Lead-Completed%、Connected-Paid%、Appt-Paid% |

## 数据口径

复用管理看板现有的注册批次、用户 ID 去重、筛选和权限规则。首版重点是展示指标、分子分母和数据更新时间，不修改销售或支付流程。

## 本地预览

从 `crm-prd/` 目录启动静态服务后，打开 `http://127.0.0.1:4175/projects/follow-up-funnel/prototype/index.html`。原型使用演示数据，不连接生产 CRM。
