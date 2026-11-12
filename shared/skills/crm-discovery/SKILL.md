---
name: crm-discovery
description: Inspect the current Dino CRM and local manuals to establish field order, filter-area position, existing capabilities, permissions, and source evidence before designing a CRM requirement.
---

# CRM 现状检索

## 目标

在写 PRD 或原型前建立当前系统事实，避免用历史文档或推测代替现有配置。

## 检索顺序

1. 读取当前项目 `memory/`。
2. 读取当前项目 `rag/sources.yaml`。
3. 优先访问指定 CRM 页面并读取实时页面快照。
4. CRM 不可访问时，暂停现状结论，通知用户具体页面和所需授权，并等待授权。
5. 用户未授权或确认无法授权时，才检索最新产品说明、截图或项目内手册作为降级依据，并标注其非实时属性。
6. 记录页面、字段顺序、筛选区位置、操作、权限和实际使用的资料来源。
7. 对无法验证的内容标记阻塞，不猜测；不得用降级资料冒充实时页面快照。

## 字段与列表

- 先判断当前列表是否存在排序入口或可排序表头。
- 当前列表无排序能力时，本需求所有字段统一不支持排序。
- 有排序能力时，才逐字段判断业务必要性和空值规则。

## 输出

提供带来源的现状摘要、字段/筛选顺序和差异结论，供 `crm-prd-authoring` 使用。
