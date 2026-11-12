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
- 公开 URL 映射保持不变。
