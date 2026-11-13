# Dino PRD Repository Rules

## Delivery

- Create and update all PRDs, generated HTML, and prototypes in the repository workspace.
- After completing requested changes to PRDs, generated pages, prototypes, or design rules, automatically commit, push, and trigger the normal publication workflow.
- Do not wait for a separate "发布" or "上传 GitHub" confirmation after the requested work is complete.
- Keep changes local only when the user explicitly asks to stay local or not upload.
- Publish only the scope requested by the user. Do not include unrelated working-tree changes.
- After publication, report the resulting commit and deployment status when available.

## PRD rules

- Follow `shared/workflows/prd-2.0.md`, `shared/workflows/document-change.md`, `shared/skills/crm-prd-authoring/SKILL.md`, and select one primary requirement-type reference through `shared/skills/crm-prd-authoring/references/README.md`.
- Use `projects/first-contact-concise/prd/PRD.md` (REQ-CC-002) as the canonical single-file PRD structure reference. Keep each PRD in one file and do not create a companion detail document. Use its section organization and information density as the reference; do not copy its requirement content into unrelated PRDs.
- For any field, form, list, filter, sorting, or export requirement, first access the corresponding page in the existing CRM and read the actual field order in its form, detail page, default list columns, filter-area position, filter groups, and filters. Compare the current state item by item before designing the target state. Add a new filter to the same filter area, group, and relative position as comparable existing filters; never default it to the end. If the live CRM is inaccessible, notify the user with the exact page and required authorization and pause. Only after the user does not authorize or confirms authorization is unavailable may product documentation be used as secondary evidence; clearly mark it as non-live and never infer exact field order, filter position, sorting capability, or current permissions from it.
- For every field, form, and list requirement, first inspect whether the current list page already supports sorting. If it has no sorting entry or sortable headers, mark every field as unsupported and do not add sorting to that requirement. If sorting already exists, assess each added field by business value and state supported, unsupported, or conditional with a reason. For sortable fields, define direction, blank-value order, and multi-field priority.
- For requirements involving reports, lead assignment or recycling, ownership transfer, follow-up tasks, or staff lifecycle changes, assess the impact of departed, disabled, or reassigned employees. Define what active data is handed over or reclaimed, how historical ownership is retained, how pending work and downstream tasks change, and when access is revoked.
- For every metric, define the exact numerator, denominator, unit, population, time field, deduplication key, and zero-denominator behavior. Differentiate lead/person counts from event/call counts. Prototype metric names, formulas, filters, and deduplication must match the PRD item by item.
- Write PRDs, prototype navigation, page copy, state labels, and explanatory text in Simplified Chinese by default.
- Use "业务线" consistently for market and data dimensions in PRDs and prototypes. Do not describe those dimensions as "国家", even when source documents or stored values use a country-based label.
- Do not ask the user to choose a language. Preserve official product names, field identifiers, codes, and external system names when translation would make them inaccurate.
- Any new feature, page, action, field group, or data list must use `shared/skills/crm-prd-authoring/references/04-permission-audit.md` and output complete RBAC permission data.
- Keep exactly one complete interactive prototype URL per PRD.
- For post-review edits, mark PRD revisions in place with `<del>[原/删除] …</del>` and `<ins>[新增/现行] …</ins>` and maintain a versioned revision record.
- Apply the revision markers only when the user explicitly describes the change as post-review. For pre-review changes, update the current PRD content directly without revision colors, strikethrough, change labels, or a revision record; always synchronize the prototype without markers.
- After a post-review revision has been written and verified, report exactly one three-line completion block per updated document: `文档修订 vX.X`, `文档地址：<URL>`, and `修订内容：<one-sentence summary>`, each on its own line.
- Do not write implementation code, SQL, API implementation, class/function design, or pseudocode.
- Do not include acceptance criteria, test cases, test plans, regression checklists, or Agent self-check sections in PRDs.
- Do not include pending-confirmation or open-question sections in PRDs. Resolve required decisions before writing the final PRD.
- Do not display prompt names, supplementary prompt names, or prompt file paths inside a PRD.
- Perform writing and consistency checks internally without adding them to the delivered PRD.

## Prototype rules

- A prototype must show only the product interface and capabilities available after launch.
- Do not show PRD titles, requirement context, value statements, flow narratives, design notes, field-definition pages, prototype banners, demo-data banners, or other explanatory UI inside the product surface.
- Keep the prototype synchronized with the current PRD but never display revision colors, strikethrough text, change labels, revision IDs, or change notes in the product interface.
- Every new or materially updated prototype must support complete Simplified Chinese and English switching within one prototype and one public URL. Default to Chinese; persist the user's language choice; translate all navigation, labels, filters, table headers, metrics, actions, placeholders, validation, empty/loading/error/permission states, modals, toasts, help text, and accessibility labels. Language switching must not reset page state, filters, forms, or business data.
- Open directly on the operational page users will use.
- Keep explanations in the PRD; use `shared/skills/crm-prototype-authoring/SKILL.md` for prototypes.
