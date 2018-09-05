---
category: Components
subtitle: 输入框
type: Data Entry
title: InputItem
---

## 何时使用

- 单行文本输入框，支持特殊场景文本格式化。

## API

| 参数         | 说明                                                                                                                                              | 类型                | 默认值  |
| ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------- | ------- |
| type         | 表单类型，特殊类型自带文本格式化，`text(文本)`,`bankCard(银行卡号)`,`phone(手机号)`,`digit(数字)`,`password(密码)`,以及其他的标准`Html Input`类型 | String              | `text`  |
| name         | 表单名称，事件入参之一，可用于区分表单组件                                                                                                        | String              | -       |
| value        | 表单值                                                                                                                                            | String              | -       |
| defaultValue | 设置初始默认值                                                                                                                                    | String              | -       |
| title        | 表单左侧标题                                                                                                                                      | String              | -       |
| placeholder  | 表单占位符                                                                                                                                        | String              | -       |
| brief        | 表单描述                                                                                                                                          | String              | -       |
| maxLength    | 表单最大字符数                                                                                                                                    | Number              | -       |
| align        | 表单文本对齐方式`left`,`center`,`right`                                                                                                           | String              | `left`  |
| error        | 表单错误提示信息                                                                                                                                  | String              | -       |
| readOnly     | 表单是否只读                                                                                                                                      | Boolean             | `false` |
| disabled     | 表单是否禁用                                                                                                                                      | Boolean             | `false` |
| clear        | 表单是否使用清除控件                                                                                                                              | Boolean             | `false` |
| onChange     | change 事件触发的回调函数                                                                                                                         | (val: string): void | -       |
| onBlur       | blur 事件触发的回调函数                                                                                                                           | (val: string): void | -       |
| onFocus      | focus 事件触发的回调函数                                                                                                                          | (val: string): void | -       |
