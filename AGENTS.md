# Dino PRD Repository Rules

## Local-first delivery

- Create and update all PRDs, generated HTML, and prototypes in the local workspace first.
- Run local validation for required files, generated pages, and key interactions.
- Report local file paths, validation results, and any unresolved questions.
- Stop after local verification and wait for explicit user confirmation.
- Do not create a remote commit, push to GitHub, use the GitHub API to update remote files, or trigger GitHub Pages until the user explicitly says "确认", "发布", or "上传 GitHub".
- When confirmation is given, upload only the reviewed scope and verify the resulting GitHub Pages URLs.

## PRD rules

- Follow `prompts/prd-generation.md` and select one primary requirement-type prompt from `prompts/README.md`.
- Write PRDs, prototype navigation, page copy, state labels, and explanatory text in Simplified Chinese by default.
- Do not ask the user to choose a language. Preserve official product names, field identifiers, codes, and external system names when translation would make them inaccurate.
- Any new feature, page, action, field group, or data list must use `prompts/04-permission-audit.md` and output complete RBAC permission data.
- Keep exactly one complete interactive prototype URL per PRD.
- Do not write implementation code, SQL, API implementation, class/function design, or pseudocode.
- Do not include acceptance criteria, test cases, test plans, regression checklists, or Agent self-check sections in PRDs.
- Do not display prompt names, supplementary prompt names, or prompt file paths inside a PRD.
- Perform writing and consistency checks internally without adding them to the delivered PRD.

## Prototype rules

- A prototype must show only the product interface and capabilities available after launch.
- Do not show PRD titles, requirement context, value statements, flow narratives, design notes, field-definition pages, prototype banners, demo-data banners, or other explanatory UI inside the product surface.
- Open directly on the operational page users will use.
- Keep explanations in the PRD; use `prompts/prototype-generation.md` for prototypes.
