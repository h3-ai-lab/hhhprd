# 拉新裂变 MVP 原型 / Referral Growth MVP Prototype

原型展示上线后的统一拉新关系列表、好友推荐和社媒推荐绑定、自动奖励事件、赠送订单、销售中心入口与关系详情，并提供中文和英文双版本切换。

The prototype includes a unified growth relationship list, referral and social recommendation records, automatic reward events, gift orders, Sales Center entry points, and relationship details, with complete Chinese and English versions.

## 本地预览

```bash
cd /Users/huhaihao/Desktop/dino/crm-prd/projects/referral-growth-mvp/prototype
python3 -m http.server 4176 --bind 127.0.0.1
```

打开 `http://127.0.0.1:4176/`。

## 主要路径

| 路径 | 内容 |
|---|---|
| [拉新关系](index.html) | 默认首屏，统一展示指标、好友推荐、社媒推荐、奖励事件和赠送订单 |
| 销售中心 → 更多 | 在“我的跟进 / 已付费”中维护当前推荐人的拉新关系 |
| 点击关系行 | 关系、业务事件、赠送订单、CC 和权益详情 |
| 用户列表 → 维护拉新关系 | 输入 C 手机号并只完成关系绑定，不发放权益 |
| 右上角 `中文 / EN` | 切换完整中文或英文界面；英文可用 `?lang=en` 直达 |
