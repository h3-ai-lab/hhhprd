# CRM账号&权限体系优化原型

无构建依赖的可交互原型。页面延续 Dino CRM 的深色导航、白色顶栏、浅灰工作区和蓝色主操作，直接进入系统配置、销售中心和管理看板的实际工作页面。

## 页面

| 路由 | 内容 |
|---|---|
| `#/system/organization` | 四级组织架构树、组织列表、新增和编辑组织 |
| `#/system/members` | 成员筛选、唯一角色、数据授权和主组织编辑 |
| `#/system/roles` | 角色功能权限查看 |
| `#/system/logs` | 权限与组织变更日志 |
| `#/sales` | 销售中心按组织范围查看线索 |
| `#/dashboard` | 管理看板按组织范围查看现有指标 |

## 本地运行

```bash
cd /Users/huhaihao/Desktop/dino/crm-prd/projects/crm-account-permissions/prototype
python3 -m http.server 4173 --bind 127.0.0.1
```

打开 `http://127.0.0.1:4173/`。
