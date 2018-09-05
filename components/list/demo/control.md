---
order: 3
title:
  zh-CN: 配合控件
  en-US: With control
---

```jsx
import { List, InputItem } from 'modo-mobile';

const App = () => (
  <List title="配合控件">
    <List.Item title="普通列表" />
    <InputItem title="输入框" placeholder="请输入..." />
  </List>
);
ReactDOM.render(<App />, mountNode);
```
