# 项目目录规范

每个项目使用统一结构：

| 目录 | 内容 |
|---|---|
| `workflow/` | 项目对公共 Workflow 的扩展 |
| `skills/` | 项目专用 Skill；没有专用能力时只说明继承关系 |
| `rag/` | 项目知识来源清单 |
| `memory/` | 已确认事实、决策和术语 |
| `prd/` | 单文件 PRD |
| `prototype/` | 可交互原型 |
| `research/` | 原始调研与分析资料 |

`project.yaml` 是机器可读入口，`README.md` 是人类入口。公开 URL 以 `project.yaml` 中的 `public` 字段为准。
