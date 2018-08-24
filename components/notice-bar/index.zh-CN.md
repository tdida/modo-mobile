---
category: Components
subtitle: 通告栏
type: Feedback
title: NoticeBar
---

在导航栏下方，一般用作系统提醒、活动提醒等通知。

## 何时使用

- 需要引起用户关注时使用，重要级别低于 Modal ，高于 Toast。

## API

| 参数     | 说明                             | 类型         | 默认值                            |
| -------- | -------------------------------- | ------------ | --------------------------------- |
| mode     | 提示类型，可选 `closable`,`link` | String       | ''                                |
| icon     | 在开始位置设置图标               | ReactNode    | `<Icon type="question-circle" />` |
| onClick  | 点击关闭或者操作区域的回调函数   | (): void     |                                   |
| action   | 用于替换操作 icon 的文案         | ReactElement |                                   |
| duration | 显示时长                         | Number       | 0                                 |
