# CRM组织架构&数据权限

> 将一级业务线数据权限升级为最多四级的组织树，并把功能角色、数据授权、行政主组织和业务对象归属彻底分离。

| 项 | 内容 |
|---|---|
| 状态 | PRD 待评审 |
| 需求编号 | REQ-ORG-001 |
| 正式 PRD | [PRD](prd/PRD.md) |
| 交互原型 | [打开交互原型](https://h3-ai-lab.github.io/hhhprd/projects/crm-org-data-permissions/prototype/) |
| 主要范围 | 四级组织树、成员授权、线索归属、跨模块数据范围、历史迁移与审计 |

## 来源

- [多级业务线需求分析](research/REQUIREMENT-ANALYSIS.md)
- [归属模型](research/ATTRIBUTION-MODEL.md)
- [配置与数据口径模拟](research/CONFIGURATION-SIMULATION.md)
- [页面与功能影响评估](research/IMPACT-ASSESSMENT.md)
- [历史迁移方案](research/HISTORICAL-MIGRATION.md)

## 项目结构

| 目录 | 内容 |
|---|---|
| `workflow/` | 组织权限流程扩展 |
| `skills/` | 公共 Skill 使用说明 |
| `rag/` | 调研资料和来源清单 |
| `memory/` | 已确认组织与权限决策 |
| `prd/` | 单文件 PRD |
| `prototype/` | 专属交互原型 |
| `research/` | 原始调研与分析资料 |

## 本地预览

从 `crm-prd/` 目录启动静态服务后，打开 `http://127.0.0.1:4175/projects/crm-org-data-permissions/prototype/`。
