# CRM组织数据权限二期

> 基于一期已完成的业务线、组织树和人员主组织，启用逐业务线数据授权，并统一 CC、管理者在各客户数据入口的可见范围和关联记录规则。

| 项 | 内容 |
|---|---|
| 状态 | PRD 待评审 |
| 需求编号 | REQ-ORG-002 |
| 前置项目 | [CRM组织架构&数据权限一期](../crm-org-data-permissions/README.md) |
| 正式 PRD | [PRD](prd/PRD.md) |
| 交互原型 | [打开交互原型](https://h3-ai-lab.github.io/hhhprd/projects/crm-org-data-permissions-phase2/prototype/) |
| 主要范围 | 本人/组织数据范围、关联记录继承、动作处理范围、筛选候选、Dashboard、历史兼容与审计 |

## 项目结构

| 目录 | 内容 |
|---|---|
| `prd/` | REQ-ORG-002 单文件 PRD |
| `prototype/` | 二期专属交互原型 |
| `memory/` | 二期已确认决策 |
| `workflow/` | 二期检查规则 |
| `rag/` | 一期来源及公共资料索引 |
| `research/` | 一期分析资料的引用说明 |

## 测试环境核对

- [CRM 测试环境功能清单](research/LIVE-CRM-CHECK.md)

## 本地预览

从 `crm-prd/` 目录启动静态服务后，打开 `http://127.0.0.1:4175/projects/crm-org-data-permissions-phase2/prototype/`。
