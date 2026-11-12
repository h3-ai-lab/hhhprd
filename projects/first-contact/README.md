# 引入首跟节点&首跟看板

> 跨业务线保留首位 CC，展示首次分配、首次外呼与首次接通时间，并支持筛选、下载和团队监控。

| 项 | 内容 |
|---|---|
| 状态 | PRD 待评审 |
| 需求编号 | REQ-CC-001 |
| 正式 PRD | [PRD](prd/PRD.md) |
| 线上原型 | [打开线上原型](https://h3-ai-lab.github.io/hhhprd/projects/first-contact/prototype/) |
| 主要范围 | 首位 CC、首次分配、首次外呼、首次接通、外呼次数/接通次数筛选、筛选后下载和团队监控 |

## 项目结构

| 目录 | 内容 |
|---|---|
| `workflow/` | 项目流程扩展 |
| `skills/` | 项目 Skill 使用说明 |
| `rag/` | 项目资料和来源清单 |
| `memory/` | 已确认事实、决策和术语 |
| `prd/` | 产品需求文档 |
| `prototype/` | 可交互原型 |

## 本地预览

```bash
cd /Users/huhaihao/Desktop/dino/crm-prd
python3 -m http.server 4175 --bind 127.0.0.1
```

打开 `http://127.0.0.1:4175/projects/first-contact/prototype/`。

原型数据均为演示数据，不连接生产 CRM。
