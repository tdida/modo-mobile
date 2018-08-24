---
category: Components
type: Data Display
title: List
subtitle: 列表
---

单个连续模块垂直排列，显示当前的内容、状态和可进行的操作。eg：联系人列表。

## 何时使用

- 一般由主要信息、主要操作、次要信息、次要操作组成。
- 主要信息和主要操作放在列表的左边，次要信息和次要操作放在列表的右边。

## API

### List

| 属性  | 说明     | 类型                 | 默认值 |
| ----- | -------- | -------------------- | ------ |
| title | 标题     | String               | 无     |
| extra | 右边内容 | String/React.Element | 无     |

### List.Item

| 属性    | 说明                                                  | 类型          | 默认值  |
| ------- | ----------------------------------------------------- | ------------- | ------- |
| title   | 标题                                                  | String        | -       |
| brief   | 子标题                                                | String        | -       |
| extra   | 标题辅助内容，如`Icon`                                | React.Element | 无      |
| arrow   | 箭头方向`left`,`right`,`up`,`down`,`empty`, `""`      | String        | `right` |
| align   | 自定义内容时，内容位置，可选`left`, `right`, `center` | String        | `right` |
| onClick | 点击事件的回调函数                                    | (): void      | 无      |
