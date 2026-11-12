---
name: crm-github-publishing
description: Publish validated CRM PRDs and prototypes to the configured GitHub Pages site while preserving public URLs and reporting deployment status.
---

# CRM GitHub 发布

按照 [`../../workflows/publishing.md`](../../workflows/publishing.md) 执行。

约束：

- 只发布当前任务范围。
- 保留项目 slug 和既有公开 URL。
- PRD 源文件可迁移到 `projects/<project>/prd/PRD.md`，发布时仍同时生成旧的 `/projects/<project>/PRD.md` 兼容路径。
- 不通过删除或重建项目来改变已分享的原型地址。
- 发布后验证首页、PRD、原型和相关调研文件。
