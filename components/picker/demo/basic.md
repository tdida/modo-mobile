---
order: 1
title:
  zh-CN: 单列数据
  en-US: Single column
---

```jsx
import { Picker } from 'modo-mobile';
import data from './data/simple.tsx';

const App = () => <Picker isView data={data} />;

ReactDOM.render(<App />, mountNode);
```
