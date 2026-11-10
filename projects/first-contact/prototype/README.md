# 越南首位联系人功能原型

无构建依赖的可交互原型，延续 Dino CRM 销售中心的深色导航、白色顶栏、浅灰工作区和蓝色主操作。

## 本地运行

```bash
cd /Users/huhaihao/Desktop/dino/crm-prd/projects/first-contact/prototype
python3 -m http.server 4173 --bind 127.0.0.1
```

打开 `http://127.0.0.1:4173/`。

## 页面

| 路由 | 内容 |
|---|---|
| `#/leads` | 销售中心线索列表、首位 CC 筛选与下载 |
| `#/monitor` | 首位 CC 和 TMK 团队监控 |
| `#/rules` | 字段定义、分配规则和历史边界 |
| `#/acceptance` | 可勾选验收清单 |

所有姓名、账号和线索均为演示数据。
