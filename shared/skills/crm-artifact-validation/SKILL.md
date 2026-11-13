---
name: crm-artifact-validation
description: Validate CRM PRD and prototype structure, links, forbidden content, required sections, and cross-artifact consistency before publication.
---

# CRM 产物校验

交付前运行 `scripts/validate.py`，处理所有错误后再发布。

重点检查：

- 每个项目具备 `project.yaml`、`workflow/`、`skills/`、`rag/`、`memory/`、`prd/PRD.md`。
- 每份 PRD 只有一个完整原型地址。
- PRD 和原型不存在待确认、验收标准、测试计划或内部提示词信息。
- 字段类需求逐字段给出排序结论。
- 新增页面、动作、字段组或数据列表包含 RBAC。
- 用户可见市场维度统一使用“业务线”。
- 指标类需求包含名称、分子、分母、单位、范围、时间、去重和零值规则。
- 原型所有可见控件均有真实响应，没有死按钮、死链接或无法退出的弹窗。
- 核心流程可从入口完整走到成功结果，并覆盖取消、失败、空态、无权限和异常分支。
- 多入口功能逐入口验证；业务线、角色、来源、状态、筛选值和操作项使用全量枚举。
- 中英文双版本均可完成同一流程，切换语言不重置页面与业务状态。
- 公开 URL 映射保持不变。

结构校验通过不等于原型闭环通过。交付前还必须实际打开原型，逐项点击并走通核心业务流程。
