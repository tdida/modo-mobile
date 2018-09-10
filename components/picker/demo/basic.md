---
order: 1
title:
  zh-CN: 单列数据
  en-US: Single column
---

```jsx
import { Picker } from 'modo-mobile';

const data = [
  [
    { label: '2015', value: 1 },
    { label: '2016', value: 2 },
    { label: '2017', value: 3 },
    { label: '2018', value: 4 },
    { label: '2019', value: 5 },
  ],
  [
    { label: '春', value: 1 },
    { label: '夏', value: 2 },
    { label: '秋', value: 3 },
    { label: '冬', value: 4 },
  ],
];

const App = () => <Picker isView data={data} value={[null]} />;

ReactDOM.render(<App />, mountNode);
```
