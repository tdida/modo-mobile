---
order: 1
title:
  zh-CN: 基本
  en-US: Basic
---

```jsx
import { InputItem, List } from 'modo-mobile';

const App = () => (
  <List>
    <InputItem title="普通文本" placeholder="普通文本" />
    <InputItem title="禁用文本" value="禁用文本" disabled />
    <InputItem title="只读文本" placeholder="只读文本" readOnly />
    <InputItem title="文本居中" placeholder="文本居中" align="center" maxLength={2} />
    <InputItem title="文本局右" placeholder="文本局右" align="right" brief="辅助说明" />
  </List>
);

ReactDOM.render(<App />, mountNode);
```
