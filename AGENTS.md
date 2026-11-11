# Dino PRD Repository Rules

## Delivery

- Create and update all PRDs, generated HTML, and prototypes in the repository workspace.
- After completing requested changes to PRDs, generated pages, prototypes, or design rules, automatically commit, push, and trigger the normal publication workflow.
- Do not wait for a separate "发布" or "上传 GitHub" confirmation after the requested work is complete.
- Keep changes local only when the user explicitly asks to stay local or not upload.
- Publish only the scope requested by the user. Do not include unrelated working-tree changes.
- After publication, report the resulting commit and deployment status when available.

## PRD rules

- Follow `prompts/prd-generation.md` and select one primary requirement-type prompt from `prompts/README.md`.
- For any field, form, list, filter, sorting, or export requirement, first access the corresponding page in the existing CRM and read the actual field order in its form, detail page, default list columns, filter-area position, filter groups, and filters. Compare the current state item by item before designing the target state. Add a new filter to the same filter area, group, and relative position as comparable existing filters; never default it to the end. Never substitute an assumed order or position when the live CRM cannot be accessed.
- For every field, form, and list requirement, assess sorting necessity field by field and state whether sorting is supported, unsupported, or conditional, with a business reason. Identifiers, phone numbers, email addresses, and free text normally do not need sorting; times, counts, amounts, and business-priority values require scenario-based evaluation. For sortable fields, define direction, blank-value order, and multi-field priority.
- For requirements involving reports, lead assignment or recycling, ownership transfer, follow-up tasks, or staff lifecycle changes, assess the impact of departed, disabled, or reassigned employees. Define what active data is handed over or reclaimed, how historical ownership is retained, how pending work and downstream tasks change, and when access is revoked.
- For every metric, define the exact numerator, denominator, unit, population, time field, deduplication key, and zero-denominator behavior. Differentiate lead/person counts from event/call counts. Prototype metric names, formulas, filters, and deduplication must match the PRD item by item.
- Write PRDs, prototype navigation, page copy, state labels, and explanatory text in Simplified Chinese by default.
- Use "业务线" consistently for market and data dimensions in PRDs and prototypes. Do not describe those dimensions as "国家", even when source documents or stored values use a country-based label.
- Do not ask the user to choose a language. Preserve official product names, field identifiers, codes, and external system names when translation would make them inaccurate.
- Any new feature, page, action, field group, or data list must use `prompts/04-permission-audit.md` and output complete RBAC permission data.
- Keep exactly one complete interactive prototype URL per PRD.
- Do not write implementation code, SQL, API implementation, class/function design, or pseudocode.
- Do not include acceptance criteria, test cases, test plans, regression checklists, or Agent self-check sections in PRDs.
- Do not include pending-confirmation or open-question sections in PRDs. Resolve required decisions before writing the final PRD.
- Do not display prompt names, supplementary prompt names, or prompt file paths inside a PRD.
- Perform writing and consistency checks internally without adding them to the delivered PRD.

## Prototype rules

- A prototype must show only the product interface and capabilities available after launch.
- Do not show PRD titles, requirement context, value statements, flow narratives, design notes, field-definition pages, prototype banners, demo-data banners, or other explanatory UI inside the product surface.
- Open directly on the operational page users will use.
- Keep explanations in the PRD; use `prompts/prototype-generation.md` for prototypes.
