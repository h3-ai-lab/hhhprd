# 管理看板新增跟进漏斗

> 在管理看板的“销售跟进”页签增加 5 个跟进转化指标。

| 项 | 内容 |
|---|---|
| 状态 | PRD 待评审 |
| 需求编号 | REQ-DASH-007 |
| 正式 PRD | [PRD](prd/PRD.md) |
| 交互原型 | [打开完整交互原型](https://h3-ai-lab.github.io/hhhprd/projects/follow-up-funnel/prototype/) |
| 主要范围 | 线索接通率、线索预约率、线索体验课完成率、接通付费转化率、预约付费转化率 |

## 数据口径

复用管理看板现有的注册批次、用户 ID 去重、筛选和权限规则。首版重点是展示指标、分子分母和数据更新时间，不修改销售或支付流程。

## 项目结构

| 目录 | 内容 |
|---|---|
| `workflow/` | 指标口径与原型一致性检查 |
| `skills/` | 公共 Skill 使用说明 |
| `rag/` | 管理看板资料与需求来源 |
| `memory/` | 已确认指标和业务决策 |
| `prd/` | 产品需求文档 |
| `prototype/` | 可交互原型 |

## 本地预览

从 `crm-prd/` 目录启动静态服务后，打开 `http://127.0.0.1:4175/projects/follow-up-funnel/prototype/index.html`。原型使用演示数据，不连接生产 CRM。
