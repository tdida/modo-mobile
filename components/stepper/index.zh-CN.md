---
category: Components
subtitle: 步进器
type: Data Entry
title: Stepper
---

用作增加或者减少当前数值。

## 何时使用

- 当想要对数值进行小幅度调整时，可以使用 Stepper。

## API

| 参数         | 说明                     | 类型             | 默认值    |
| ------------ | ------------------------ | ---------------- | --------- |
| min          | 最小值                   | Number or String | -Infinity |
| max          | 最大值                   | Number or String | Infinity  |
| value        | 当前值                   | Number or String |           |
| step         | 每次改变步数，可以为小数 | Number or String | 1         |
| defaultValue | 初始值                   | Number           |           |
| onChange     | 变化时回调函数           | (): void         |           |
| disabled     | 禁用                     | Boolean          | false     |
| readOnly     | input 只读               | Boolean          | false     |
| integer      | 只能输入整数             | Boolean          | false     |
