# Dino 产品需求与原型库

> 本地主稿、飞书归档。按项目组织 PRD、原型和验收资料。
> 更新时间：2026-11-11

## 项目列表

| 项目 | 状态 | PRD | 原型 |
|---|---|---|---|
| CRM 整体产品体系 | 持续维护 | [整体框架](00-crm-prd-framework.md) | — |
| Referrals & Rewards | 待评审 | [PRD](projects/referrals-rewards/PRD.md) | [线上原型](https://h3-ai-lab.github.io/hhhprd/projects/referrals-rewards/prototype/) |
| 引入首跟节点&首跟看板 | 待评审 | [PRD](projects/first-contact/PRD.md) | [线上原型](https://h3-ai-lab.github.io/hhhprd/projects/first-contact/prototype/) |
| 引入首跟节点&首跟看板-2 | 单文件参考样例｜待评审 | [PRD](projects/first-contact-concise/PRD.md) | [线上原型](https://h3-ai-lab.github.io/hhhprd/projects/first-contact-concise/prototype/) |
| 管理看板新增跟进漏斗 | 待评审 | [PRD](projects/follow-up-funnel/PRD.md) | [线上原型](https://h3-ai-lab.github.io/hhhprd/projects/follow-up-funnel/prototype/) |
| CRM组织架构&数据权限 | PRD 待评审 | [PRD](projects/crm-org-data-permissions/PRD.md) | [线上原型](https://h3-ai-lab.github.io/hhhprd/projects/crm-org-data-permissions/prototype/) |
| 多级业务线调研 | 归档于 REQ-ORG-001 | [调研资料](projects/crm-org-data-permissions/research/README.md) | — |

## GitHub Pages

- 项目入口：<https://h3-ai-lab.github.io/hhhprd/>
- 需求文档：<https://h3-ai-lab.github.io/hhhprd/prd-referrals-rewards.html>
- 交互原型：<https://h3-ai-lab.github.io/hhhprd/projects/referrals-rewards/prototype/>
- 引入首跟节点&首跟看板 PRD：<https://h3-ai-lab.github.io/hhhprd/prd-first-contact.html>
- 引入首跟节点&首跟看板原型：<https://h3-ai-lab.github.io/hhhprd/projects/first-contact/prototype/>
- 引入首跟节点&首跟看板-2 PRD：<https://h3-ai-lab.github.io/hhhprd/prd-first-contact-concise.html>
- CRM组织架构&数据权限 PRD：<https://h3-ai-lab.github.io/hhhprd/prd-crm-org-data-permissions.html>

## 目录结构

```text
crm-prd/
├── 00-crm-prd-framework.md      CRM 全局框架
├── 01-current-state-and-boundaries.md
├── 02-source-register.md
├── 03-open-decisions.md
├── templates/                   通用 PRD 模板
└── projects/
    └── referrals-rewards/
        ├── README.md            项目入口
        ├── PRD.md               完整产品需求
        └── prototype/           可交互原型
```

## 本地入口

从 `crm-prd/` 目录启动本地服务：

```bash
cd /Users/huhaihao/Desktop/dino/crm-prd
python3 -m http.server 4175 --bind 127.0.0.1
```

打开项目入口：

`http://127.0.0.1:4175/hhhprd-site/`

原型直达：

`http://127.0.0.1:4175/projects/referrals-rewards/prototype/`

修改 PRD 后重新生成需求阅读页：

```bash
python3 build_prd_pages.py
```

> 📌
> - 整体看框架：`00-crm-prd-framework.md`
> - 查现状与边界：`01-current-state-and-boundaries.md`
> - 查资料出处：`02-source-register.md`
> - 看未决问题：`03-open-decisions.md`
> - 写新需求：复制 `templates/feature-prd.md`

## 文档入口

| 层级 | 文档 | 用途 |
|---|---|---|
| 整体 | `00-crm-prd-framework.md` | CRM 定位、边界、主链路、模块地图 |
| 现状 | `01-current-state-and-boundaries.md` | 当前能力、在建能力、已知问题 |
| 依据 | `02-source-register.md` | 每项结论来自哪里 |
| 决策 | `03-open-decisions.md` | 会影响多个需求的决策记录 |
| 项目 | `projects/<project>/` | 项目入口、PRD、原型与资料 |
| 功能 | `projects/<project>/PRD.md` | 单个完整需求 |

## 一句话需求怎么变成 PRD

1. **判断类型**：先按主问题归类，不按用户提到的页面或按钮机械归类。
2. **选主提示词**：从 [`prompts/`](prompts/) 选择一个主类型；跨类型时只增加必要补充。
3. **看原话**：保留原始诉求，说明我对其业务含义的解释。
4. **查现状**：搜索现有手册、飞书需求、会议纪要，判断已有、部分覆盖或缺失；字段、表单和列表类需求必须进入现有 CRM 对应页面，读取实际字段、筛选区位置和顺序并逐项比对。
5. **定边界**：明确本期做什么、不做什么、依赖谁、谁会受影响。
6. **判排序**：先检查现有列表页是否有排序能力；当前列表无排序时不新增排序，已有排序时再逐字段判断必要性。
7. **画流程**：从真实触发点画到业务结果，覆盖成功、取消、重复、超时、失败、退款/撤销和恢复。
8. **补 RBAC**：新增功能、页面、按钮、字段组或数据列表时，必须读取权限提示词，输出权限矩阵和权限数据变更。
9. **写方案**：按主类型组织页面、字段、规则、数据、权限和异常，不机械铺满模板。
10. **收敛决策**：进入正式 PRD 前完成必要决策，正文只写已明确规则。
11. **自动发布**：完成任务后直接提交并发布，不再等待用户逐次确认；只有用户明确要求仅保留本地时才停止。

### 需求类型路由

| 类型 | 典型问题 | 提示词 |
|---|---|---|
| 业务流程 | 角色、步骤、交接、审批、生命周期 | [01-business-workflow.md](prompts/01-business-workflow.md) |
| 表单、字段与列表 | 字段、表单、列、筛选、排序、导出 | [02-form-field-list.md](prompts/02-form-field-list.md) |
| 规则、状态与数据 | 判定、状态机、唯一性、超时、退款 | [03-rule-state-data.md](prompts/03-rule-state-data.md) |
| 权限与审计 | 角色、数据范围、敏感操作、留痕 | [04-permission-audit.md](prompts/04-permission-audit.md) |
| 集成与自动化 | 外部事件、回调、同步、重试、补偿 | [05-integration-automation.md](prompts/05-integration-automation.md) |
| 看板与指标 | 漏斗、KPI、维度、口径、下钻 | [06-dashboard-metrics.md](prompts/06-dashboard-metrics.md) |
| 用户端体验 | App、C 端页面、邀请、注册、支付 | [07-user-experience-journey.md](prompts/07-user-experience-journey.md) |

默认只产出一份功能 PRD；跨业务域时再补领域稿，形成新版本范围时再补版本 PRD。

通用规则见 [`prompts/prd-generation.md`](prompts/prd-generation.md)，类型路由见 [`prompts/README.md`](prompts/README.md)。

## 发布边界

- PRD、原型和生成页面保存在项目工作区。
- 完成任务后直接提交并推送，不再设置发布确认或本地验证等待环节。
- 只发布当前任务相关文件，不混入其他未完成或无关的修改。
- 原型仅使用演示数据，不连接生产接口。
- 原型源码位于 `projects/<project>/prototype/`。
- 上传并推送 `main` 后由 `.github/workflows/pages.yml` 发布。

## 写作样式

- PRD 和原型默认直接使用简体中文，不再询问语言；正式产品名、字段标识和外部系统名称可按官方原文保留。
- 开头先写一句结论，再放 `📌 本期重点`。
- 每份功能 PRD 只保留一个完整交互原型地址，不罗列页面直达链接、源码地址或本地地址。
- 一个一级标题对应一个核心问题或一个需求，不按模板机械铺满。
- 涉及业务流转的 PRD 必须包含端到端流程图；字段、规则、看板或用户端需求选择最能说明问题的页面路径、决策表、状态机或旅程图。
- 新增功能或数据列表必须输出 RBAC 功能权限、字段/数据范围和权限数据变更，不能只写“沿用现有权限”。
- 字段、表单和列表类需求必须先判断当前列表是否已有排序能力：没有则全部字段不支持排序；已有能力时才逐字段说明排序结论，并明确方向、空值位置和多字段优先级。
- 完成修改后直接提交并发布，不再等待用户逐次确认。
- 优先用短句、列表和小表；长段只用于解释因果和冲突。
- 页面上能直接看到的结果优先于抽象描述。
- 同一规则只写一次；跨模块引用现有关键结论。
- 没有内容的章节直接删除，不保留空标题。
- 不写实现代码、SQL、接口实现、类/函数设计或伪代码，技术实现由开发负责。
- 不写验收标准、测试用例、测试计划或回归清单，验收由测试负责。
- 写作检查由 Agent 在交付前内部完成，不写入 PRD。
- 不在 PRD 中展示生成提示词、补充提示词或内部提示词文件路径。
- 原型只展示上线后实际功能和操作界面；PRD 标题、背景说明、流程叙事、字段定义和原型提示不进入产品页面。
- 正式 PRD 不保留待决策章节，开放问题在生成前完成收敛。

