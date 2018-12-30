---
order: 0
title:
  zh-CN: 按钮类型
  en-US: Type
---

## zh-CN

按钮有四种类型：主按钮、次按钮、虚线按钮、危险按钮。主按钮在同一个操作区域最多出现一次。

## en-US

There are `primary` button, `default` button, `dashed` button and `danger` button in modo-mobile.

```jsx
import { Button } from 'modo-mobile';

const ButtonExample = () => (
  <div className="button-list">
    <Button>Default</Button>
    <Button disabled>Default Disabled</Button>
    <Button type="primary">Primary</Button>
    <Button type="primary" disabled>
      Primary Disabled
    </Button>
    <Button type="dashed">Dashed</Button>
    <Button type="dashed" disabled>
      Dashed Disabled
    </Button>
    <Button type="danger">Danger</Button>
    <Button type="danger" disabled>
      Danger Disabled
    </Button>
    <Button target="_blank" href="https://tdida.github.io/modo-mobile/">
      Link Button
    </Button>
  </div>
);
ReactDOM.render(<ButtonExample />, mountNode);
```

```css
.button-list {
  padding: 10px;
  width: 100%;
  box-sizing: border-box;
}

.button-list > .m-button {
  margin-bottom: 10px;
}
```
