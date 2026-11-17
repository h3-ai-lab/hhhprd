# CRM 学习计划与课程进度 Memory

## Confirmed Facts

- 一个 Level 包含 12 个 Unit，一个 Unit 包含 12 个 Lesson。
- 一个 Unit 包含 2 个 Learning Cycle，每个 Learning Cycle 包含 6 个 Lesson。
- 学习计划是用户购买的 Pro/Max 等有期限方案，不是固定数量的 Level 或 Lesson。
- Pro 每周解锁 3 节主课，Max 每周解锁 5 节主课。
- 体验课和定级内容不属于 864 节正式主课。
- Class、Practice、Explore 计入有效学习；Play 不计入。
- 正式主课按顺序学习，本周额度完成后不再增加，下周继续按学习计划解锁。

## Decisions

- 正式术语使用“学习计划”表示商业方案，使用“周学习安排”表示每周生成的课程额度。
- 一个 Level 固定 144 节，全部课程固定 864 节。
- Learning Cycle 只作为课程内容分组，不与自然周硬绑定。
- “可用课次”统一表示本周已解锁且尚未完成的主课数。
- “当前进度”统一展示当前 Level、Unit 和 Lesson，不使用模糊的“课程数”。
- “有效学习”排除 Play。
- 用户列表和销售列表展示学习计划、当前进度、本周进度、最近学习和学习活跃状态。
- 用户详情展示完整学习计划、课程进度、学习时长、到期时间与近期学习记录。
- 管理看板新增学习进度页签，支持按业务线、当前 CC、学习计划和当前 Level 查看。
- 学习计划购买、状态和课程进度为只读数据，不允许在 CRM 页面手工编辑。

## Glossary

- 学习计划：用户购买的 Pro/Max 等有时效的课程方案。
- 周学习安排：由学习计划生成的每周主课额度和学习内容。
- Level：能力级别，共 6 级。
- Unit：主题单元，每个 Level 12 个。
- Learning Cycle：每 6 个 Lesson 组成的内容分组。
- Lesson：最小正式主课课次，每个 Unit 12 节。
- 完成主课：Lesson 到达完成状态。
- 有效学习：Class、Practice 或 Explore 产生的有效学习行为。
