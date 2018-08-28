---
order: 0
title:
  zh-CN: 包含内容
  en-US: Content
---

```jsx
import { List, Icon } from 'modo-mobile';

const App = () => (
  <List>
    <List.Item title="短标题" align="left" arrow="up">
      内容靠左展示
    </List.Item>
    <List.Item title="短标题" align="center" arrow="down">
      内容居中展示
    </List.Item>
    <List.Item title="一个换行的标题">内容靠右展示</List.Item>
    <List.Item title="ICON标题" extra={<Icon type="setting" />}>
      内容展示
    </List.Item>
  </List>
);
ReactDOM.render(<App />, mountNode);
```
