---
order: 2
title:
  zh-CN: 自定义Icon
  en-US: Custom Icon
---

## zh-CN

显示关闭按钮，点击可关闭警告提示。

## en-US

custom icon.

```jsx
import { NoticeBar, Icon } from "modo-mobile";

ReactDOM.render(
  <div>
    <NoticeBar icon={<Icon type="question-circle" />}>custom icon</NoticeBar>
    <br />
    <NoticeBar icon={<div style={{ color: "#1890ff" }}>waring</div>}>
      custom text
    </NoticeBar>
  </div>,
  mountNode
);
```
