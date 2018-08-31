---
category: Components
type: Feedback
title: Popup
---

## When To Use

- A customized content area slides out or pops up on the screen, triggered by other controls.

## API

### Popup

| 参数                 | 说明                                                         | 类型                    | 默认值   |
| -------------------- | ------------------------------------------------------------ | ----------------------- | -------- |
| visible              | display popup or not                                         | Boolean                 | `false`  |
| hasMask              | has mask or not                                              | Boolean                 | `true`   |
| maskClosable         | if the popup will be closed when clicking mask               | Boolean                 | `true`   |
| position             | the position of popup `center` `top` `bottom` `left` `right` | String                  | `center` |
| preventScroll        | whether to prevent from scrolling or not                     | Boolean                 | `false`  |
| preventScrollExclude | excluded elements of prevented scrolling                     | String/HTMLElement      | -        |
| onClose              | hide popup                                                   | (e: HTMLElement): void  | -        |
| onAnimateEnd         | animate end `exists` is `true`popup open, `false` close      | (exists: Boolean): void | -        |

### Popup.TitleBar

| 参数       | 说明              | 类型     | 默认值 |
| ---------- | ----------------- | -------- | ------ |
| title      | title of popup    | String   | -      |
| describe   | describe          | String   | -      |
| okText     | confirmation text | String   | -      |
| cancelText | cancellation text | String   | -      |
| onConfirm  | Click confirm     | (): void | -      |
| cancelText | Click cancel      | (): void | -      |
