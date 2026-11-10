# Referrals & Rewards 功能原型

无构建依赖的可交互功能原型，视觉语言参照 `/dino-crm/#/marketing-center/channels`：

- 深色左侧导航
- 白色顶栏
- 浅灰工作区
- 蓝色主操作
- 卡片、筛选栏和高密度数据表

## 本地运行

```bash
cd /Users/huhaihao/Desktop/dino/crm-prd/projects/referrals-rewards/prototype
python3 -m http.server 4173 --bind 127.0.0.1
```

打开：

`http://127.0.0.1:4173/`

## 页面

| 路由 | 内容 |
|---|---|
| `#/overview` | 功能概览、奖励规则与业务流程 |
| `#/activity` | 推荐关系、试听、购买和奖励状态 |
| `#/social` | 社媒投稿审核与奖励处理 |
| `#/app` | App 邀请、好友确认与奖励进度 |
| `#/ledger` | 奖励发放事件和到期时间变化 |
| `#/rules` | 奖励规则和异常矩阵 |

原型数据均为演示数据，不连接生产 CRM。
