---
order: 0
title:
  zh-CN: 基础
  en-US: Basic
---

```jsx
import { List, Icon } from 'modo-mobile';

const App = () => (
  <List title="标题" extra={<Icon type="plus-circle" />}>
    <List.Item title="普通列表" />
    <List.Item title="动作列表" arrow="right" />
    <List.Item title="禁用列表" arrow="right" disabled />
    <List.Item title="标题" arrow="right" brief="展示摘要描述" />
  </List>
);
ReactDOM.render(<App />, mountNode);
```
