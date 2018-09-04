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
    <List.Item title="短标题" solid align="left" arrow="up">
      内容靠左展示
    </List.Item>
    <List.Item title="标题宽度不固定" align="center" arrow="down">
      内容居中展示
    </List.Item>
    <List.Item title="标题宽度固定" solid arrow="right">
      内容靠右展示
    </List.Item>
    <List.Item title="图标标题" arrow="right" extra={<Icon type="info-circle" />}>
      内容展示
    </List.Item>
  </List>
);
ReactDOM.render(<App />, mountNode);
```
