---
order: 3
title:
  zh-CN: 自定义关闭
  en-US: Customized Close Text
---

## zh-CN

可以自定义关闭，自定义的文字会替换原先的关闭 `Icon`。

## en-US

Replace the default icon with customized text.

```jsx
import { NoticeBar } from 'modo-mobile';

ReactDOM.render(
  <div style={{ padding: 10 }}>
    <NoticeBar mode="closable" action="Close">
      Replace the default icon with customized text, long text, long text, long text, long text.
    </NoticeBar>
  </div>,
  mountNode
);
```
