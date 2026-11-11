# 首位联系人功能原型

无构建依赖的可交互原型，覆盖各业务线销售中心，延续 Dino CRM 的深色导航、白色顶栏、浅灰工作区和蓝色主操作。

## 本地运行

```bash
cd /Users/huhaihao/Desktop/dino/crm-prd/projects/first-contact/prototype
python3 -m http.server 4173 --bind 127.0.0.1
```

打开 `http://127.0.0.1:4173/`。

## 页面

| 路由 | 内容 |
|---|---|
| `#/leads` | 销售中心线索列表、首位 CC、现有日期类型筛选、外呼次数/接通次数筛选与下载 |
| `#/monitor` | 首位 CC、首次外呼、首次接通和个人外呼产出监控，并展示菜单与默认角色授权 |

所有姓名、账号和线索均为演示数据。
