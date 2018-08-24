---
order: 0
title:
  zh-CN: 基础
  en-US: Basic
---

```jsx
import { List } from "modo-mobile";

const App = () => (
  <div>
    <List title="单个条目" style={{ marginBottom: 10 }}>
      <List.Item title="可点击条目" />
    </List>

    <List title="多个条目">
      <List.Item title="禁用条目" disabled />
      <List.Item title="标题" brief="展示摘要描述" />
    </List>
  </div>
);
ReactDOM.render(<App />, mountNode);
```
