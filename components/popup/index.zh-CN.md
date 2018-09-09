---
category: Components
subtitle: 弹出层
type: Feedback
title: Popup
---

## 何时使用

- 由其他控件触发，屏幕滑出或弹出一块自定义内容区域。

## API

### Popup

| 参数                 | 说明                                                         | 类型                    | 默认值   |
| -------------------- | ------------------------------------------------------------ | ----------------------- | -------- |
| visible              | 弹出层是否可见                                               | Boolean                 | `false`  |
| hasMask              | 是否有蒙层                                                   | Boolean                 | `true`   |
| maskClosable         | 点击蒙层是否可关闭弹出层                                     | Boolean                 | `true`   |
| position             | 弹出层位置 `center` `top` `bottom` `left` `right`            | String                  | `center` |
| preventScroll        | 是否禁止滚动穿透                                             | Boolean                 | `false`  |
| preventScrollExclude | 禁止滚动的排除元素                                           | String/HTMLElement      | -        |
| destroyed            | 关闭是否销毁组件                                             | Boolean                 | `false`  |
| onClose              | 弹出层隐藏事件                                               | (e: HTMLElement): void  | -        |
| onAnimateEnd         | 弹出层动画结束事件 `exists` 为 true 弹出层开启，false 为关闭 | (exists: Boolean): void | -        |

### Popup.TitleBar

| 参数       | 说明             | 类型     | 默认值 |
| ---------- | ---------------- | -------- | ------ |
| title      | 标题             | String   | -      |
| describe   | 辅助文字         | String   | -      |
| okText     | 确认按钮文案     | String   | -      |
| cancelText | 取消按钮文案     | String   | -      |
| onConfirm  | 确认按钮点击事件 | (): void | -      |
| cancelText | 取消按钮点击事件 | (): void | -      |
