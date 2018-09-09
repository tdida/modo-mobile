---
category: Components
subtitle: 选择器
type: Data Entry
title: Picker
---

在一组预设数据中进行选择，e.g. 省市区选择。

## 何时使用

- 尽量使用 Picker 来帮助用户完成输入，避免用户通过键盘直接输入。

## API

- Picker children 建议是 `List.Item`，如果不是，需要是自定义组件(组件内需处理`onClick`属性)

| 参数           | 说明                                                                 | 类型                                     | 默认值 |
| -------------- | -------------------------------------------------------------------- | ---------------------------------------- | ------ |
| data           | 数据源                                                               | `Array<{value, label, children: Array}>` | -      |
| value          | 值, 格式是`[value1, value2, value3]`, 对应数据源的相应级层 value     | Array                                    | -      |
| defaultValue   | 默认值, 格式是`[value1, value2, value3]`, 对应数据源的相应级层 value | Array                                    | -      |
| isView         | 是否内嵌在页面内展示，否则以弹层形式                                 | Boolean                                  | false  |
| cols           | 列数                                                                 | Number                                   | `3`    |
| disabled       | 是否不可用                                                           | Boolean                                  | false  |
| cascade        | 是否联动                                                             | Boolean                                  | false  |
| children       | 通常是 `List.Item`                                                   | Object                                   | -      |
| title          | 大标题                                                               | String                                   | -      |
| okText         | 选中的文案                                                           | String                                   | `确定` |
| cancelText     | 取消选中的文案                                                       | String                                   | `取消` |
| onConfirm      | 点击选中时执行的回调                                                 | (val): void                              | -      |
| onCancel       | 点击取消时执行的回调                                                 | (): void                                 | -      |
| onChange       | 选中后的回调                                                         | (val): void                              | -      |
| onColumnChange | 每列数据选择变化后的回调函数                                         | (val, col): void                         | -      |
