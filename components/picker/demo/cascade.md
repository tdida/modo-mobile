---
order: 2
title:
  zh-CN: 联动数据
  en-US: Cascade
---

```jsx
import { Picker } from 'modo-mobile';
import data from './data/district.tsx';

const App = () => (
  <Picker isView data={data} cascade cols={3} value={['810000', '810300', '810309']} />
);

ReactDOM.render(<App />, mountNode);
```
