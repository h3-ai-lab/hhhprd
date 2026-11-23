# CC活跃度看板

> 在 CRM 中提供 CC 销售活跃度、销售连续性和早期风险预警，让销售管理者按业务线、团队和个人查看出单节奏并及时干预。

| 项 | 内容 |
|---|---|
| 状态 | 待评审 |
| 需求编号 | REQ-DASH-008 |
| 项目说明 | [立项说明](research/PROJECT-INITIATION.md) |
| 正式 PRD | [PRD](prd/PRD.md) |
| 交互原型 | [线上原型](https://h3-ai-lab.github.io/hhhprd/projects/cc-activity-dashboard/prototype/) |
| 主要类型 | 看板与指标 |
| 补充类型 | 权限与审计、规则状态与数据 |

## 本版方向

- 以 7 天为默认统计周期，展示 CC 最近活跃、平均出单间隔、连续未成交天数和日成交趋势。
- 提供 Recently Sales Activity、Sales Consistency、High-risk CCs 三个汇总指标及一致性分层。
- 业务阈值、统计周期、时间口径、成交事件和样本范围支持受控配置。
- 配置变更记录版本、生效日期和适用范围，保存前展示受影响 CC 和指标差异。
- 休息 CC 本期不纳入；Need break 的申请、审批和排除计算进入最终待办。

## 项目结构

| 目录 | 内容 |
|---|---|
| `workflow/` | 当前阶段流程约束与 PRD 阶段补充检查 |
| `skills/` | 公共 Skill 继承说明 |
| `rag/` | 业务需求、会议纪要和现有看板来源 |
| `memory/` | 已确认事实、决策和术语 |
| `research/` | 项目立项说明 |
| `prd/` | 单文件 PRD，包含指标口径、页面、配置、权限和数据规则 |
| `prototype/` | 管理看板 CC活跃度页签的中英文可交互原型 |

## 当前下一步

确认有效成交、时间口径、样本分母、风险阈值和配置范围后进入需求评审。
