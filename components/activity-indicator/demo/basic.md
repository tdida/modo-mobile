---
order: 0
title:
  zh-CN: 基础
  en-US: Basic
---

```jsx
import { ActivityIndicator } from 'modo-mobile';

ReactDOM.render(
  <div className="m-demo-list">
    <ActivityIndicator>加载中...</ActivityIndicator>
    <ActivityIndicator color="#f5222d" size={26} vertical>
      loading...
    </ActivityIndicator>
  </div>,
  mountNode
);
```

```css
.m-demo-list {
  padding: 10px;
}

.m-demo-list > .m-activity-indicator {
  margin-bottom: 16px;
}
```
