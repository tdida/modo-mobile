---
category: Components
subtitle: 数字键盘
type: Data Entry
title: NumberKeyboard
---

## 何时使用

- 一般用于密码，验证码或支付金额输入等。

## API

| 参数      | 说明                                                                                           | 类型                          | 默认值         |
| --------- | ---------------------------------------------------------------------------------------------- | ----------------------------- | -------------- |
| type      | 键盘类型, `professional`有确认键和小数点常用于价格或金额输入，`simple`一般用于密码或验证码输入 | String                        | `professional` |
| disorder  | 键盘数字键是否乱序                                                                             | Boolean                       | `false`        |
| okText    | 键盘确认键文案                                                                                 | String                        | `确认`         |
| onHide    | 隐藏键点击事件                                                                                 | (): void                      | -              |
| onEnter   | 数字键点击事件                                                                                 | (val: Number or String): void | -              |
| onConfirm | 确认键点击事件                                                                                 | (): void                      | -              |
| onDelete  | 删除键点击事件                                                                                 | (): void                      | -              |
