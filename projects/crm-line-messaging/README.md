# crm-LINE 消息发送

> 客户端只产生经 LINE 校验的客户绑定、关注和授权事件；CRM 维护可发送状态，并支持有权限的角色向单个客户发送文本消息。

| 项 | 内容 |
|---|---|
| 状态 | 待评审 |
| 需求编号 | REQ-LINE-001 |
| 正式 PRD | [PRD](prd/PRD.md) |
| 线上原型 | [打开线上原型](https://h3-ai-lab.github.io/hhhprd/projects/crm-line-messaging/prototype/) |
| 原型源码 | [prototype/index.html](prototype/index.html) |
| 需求类型 | 集成与自动化；规则、状态与数据；权限与审计 |

## 最小客户端信息

绑定客户和发送消息至少需要：

```text
user_id
provider_id
line_user_id
friend_status
marketing_consent
```

另需 `event_id`、`event_type`、`consent_version`、`consent_at` 和 `event_at` 保证幂等、授权追溯与乱序处理。

客户端不需要向 CRM 提供 LINE Channel Access Token、Channel Secret、用户 Access Token 或 Refresh Token。官方账号凭证只由服务端消息集成保存。

## 本版边界

- 不包含客户端 LINE 登录、关注引导和授权界面。
- 不支持手工创建绑定；管理员只能解除错误绑定。
- 只支持单人文本消息，不支持批量、定时、自动化或富消息。
- LINE 返回成功只表示“已受理”，不表示已送达或已读。

## 项目结构

| 目录 | 内容 |
|---|---|
| `workflow/` | 集成事件、状态和一致性检查扩展 |
| `skills/` | 公共 Skill 继承说明 |
| `rag/` | CRM 现状与 LINE 官方能力来源 |
| `memory/` | 已确认范围和关键决策 |
| `prd/` | 单文件 PRD |
| `prototype/` | 中英文可切换的 CRM 工作台原型 |
