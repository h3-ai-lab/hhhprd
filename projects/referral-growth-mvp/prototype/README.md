# 拉新裂变 MVP 原型

原型展示上线后的拉新归因页面、关系详情和“添加会员”操作。

## 本地预览

```bash
cd /Users/huhaihao/Desktop/dino/crm-prd/projects/referral-growth-mvp/prototype
python3 -m http.server 4176 --bind 127.0.0.1
```

打开 `http://127.0.0.1:4176/`。

## 主要路径

| 路径 | 内容 |
|---|---|
| 默认首屏 | 拉新归因指标、筛选和关系列表 |
| 点击关系行 | 推荐关系、订单、CC 和权益详情 |
| 左侧“用户列表” | 找到推荐人并打开“添加会员” |
| 添加会员 → 拉新推荐 | 核验 C、自动匹配奖励并发权益 |
