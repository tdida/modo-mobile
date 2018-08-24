---
order: 1
title:
  zh-CN: 基本
  en-US: Basic
---

## zh-CN

最简单的用法，适用于简短的警告提示。

## en-US

The simplest usage for short messages.

```jsx
import { NoticeBar, Icon } from "modo-mobile";

ReactDOM.render(
  <div>
    <NoticeBar>为了确保您的资金安全，请设置支付密码</NoticeBar>
    <br />
    <NoticeBar mode="closable">为了确保您的资金安全，请设置支付密码</NoticeBar>
    <br />
    <NoticeBar mode="link">为了确保您的资金安全，请设置支付密码</NoticeBar>
  </div>,
  mountNode
);
```
