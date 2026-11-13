# 拉新裂变 MVP 原型 / Referral Growth MVP Prototype

原型展示上线后的拉新关系维护、好友推荐和社媒推荐绑定、自动奖励事件、关系详情与拉新归因，并提供中文和英文双版本切换。

The prototype includes relationship binding, referral and social recommendation records, automatic reward events, relationship details, and referral attribution, with complete Chinese and English versions.

## 本地预览

```bash
cd /Users/huhaihao/Desktop/dino/crm-prd/projects/referral-growth-mvp/prototype
python3 -m http.server 4176 --bind 127.0.0.1
```

打开 `http://127.0.0.1:4176/`。

## 主要路径

| 路径 | 内容 |
|---|---|
| [拉新关系维护](index.html) | 从左侧导航进入，包含好友推荐、社媒推荐和奖励事件 |
| [拉新归因](index.html) | 默认首屏，展示人数、GMV、奖励状态和关系详情 |
| 点击关系行 | 推荐关系、订单、CC 和权益详情 |
| 用户列表 → 维护拉新关系 | 输入 C 手机号并只完成关系绑定，不发放权益 |
| 右上角 `中文 / EN` | 切换完整中文或英文界面；英文可用 `?lang=en` 直达 |
