# crm-LINE 消息发送项目 Memory

## Confirmed Facts

- 用户不要求本项目设计或实现客户端 LINE 登录、关注和授权界面。
- 本项目需要明确客户端为绑定和发送消息必须提供的业务信息。
- CRM 用户以稳定 `user_id` 识别，LINE 关注人以同一 Provider 下的 `line_user_id` 识别。
- 好友状态和营销授权必须分别维护；已关注不等于已授权。
- LINE 接口成功只表示官方账号已受理，不表示已送达或已读。

## Decisions

- 建立独立 `用户管理 → LINE消息` 工作台，不修改现有用户列表的默认列与筛选。
- 客户端绑定事件至少包含 `event_id`、`event_type`、`user_id`、`provider_id`、`line_user_id`、`friend_status`、`marketing_consent`、`consent_version`、`consent_at` 和 `event_at`。
- Channel Access Token、Channel Secret、用户 Access Token 和 Refresh Token 均不进入客户端到 CRM 的绑定契约。
- 一个 CRM 用户在同一 Provider 下只有一条有效绑定；同一 LINE 用户也不能同时绑定多个 CRM 用户。
- CRM 不提供手工绑定，只允许管理员解除错误绑定。
- 一期只支持单人文本消息，不支持批量、定时、自动化及富消息。
- 发送时实时确认关注状态；关注未知、未关注、未授权或绑定冲突时禁止发送。
- 临时异常自动重试最多 3 次且总时长不超过 10 分钟；业务性错误不自动重试。
- 消息发送、重试、刷新状态和解绑均纳入 RBAC 与不可篡改审计。

## Glossary

- 绑定事件：客户端或客户端服务端提交的 dinoAI 用户与 LINE 用户关系及授权状态。
- 可发送客户：拥有有效绑定、当前已关注、已同意营销授权，且状态在 24 小时内确认的 CRM 用户。
- LINE 受理：LINE Messaging API 已接受消息请求，不代表终端已收到或已阅读。
- 绑定冲突：同一 CRM 用户或 LINE 用户试图形成多个有效绑定。
