# Dino 产品需求与原型库

> 本地主稿、飞书归档。按项目组织 PRD、原型和验收资料。
> 更新时间：2026-11-10

## 项目列表

| 项目 | 状态 | PRD | 原型 |
|---|---|---|---|
| CRM 整体产品体系 | 持续维护 | [整体框架](00-crm-prd-framework.md) | — |
| Referrals & Rewards | 待评审 | [PRD](projects/referrals-rewards/PRD.md) | [本地原型](http://127.0.0.1:4175/projects/referrals-rewards/prototype/) |

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
| 决策 | `03-open-decisions.md` | 会影响多个需求的待确认事项 |
| 项目 | `projects/<project>/` | 项目入口、PRD、原型与资料 |
| 功能 | `projects/<project>/PRD.md` | 单个完整需求 |

## 一句话需求怎么变成 PRD

1. **看原话**：保留原始诉求，说明我对其业务含义的解释。
2. **查现状**：搜索现有手册、飞书需求、会议纪要，判断已有、部分覆盖或缺失。
3. **定边界**：明确本期做什么、不做什么、依赖谁、谁会受影响。
4. **画流程**：从真实触发点画到业务结果，覆盖成功、取消、重复、超时、失败、退款/撤销和恢复。
5. **写方案**：按“业务问题 → 流程图 → 规则 → 页面 → 数据/权限 → 异常 → 验收”展开。
6. **标不确定性**：只保留真正影响方案或排期的待确认项。

默认只产出一份功能 PRD；跨业务域时再补领域稿，形成新版本范围时再补版本 PRD。

## 本地维护边界

- 当前版本仅保存在本地，不再关联极狐仓库。
- 原型仅使用演示数据，不连接生产接口。
- 原型源码位于 `projects/<project>/prototype/`。
- 当前不维护 GitHub Pages、GitLab Pages 或其他自动发布流程。

## 写作样式

- 开头先写一句结论，再放 `📌 本期重点`。
- 一个一级标题对应一个核心问题或一个需求，不按模板机械铺满。
- 所有 PRD 必须包含端到端业务流程图和关键异常分支。
- 优先用短句、列表和小表；长段只用于解释因果和冲突。
- 页面上能直接看到的结果优先于抽象描述。
- 同一规则只写一次；跨模块引用现有关键结论。
- 没有内容的章节直接删除，不保留空标题。
- 验收按需求集中写，每个需求都能直接测试。
- 已确认、工作假设和待确认分开写。

