---
order: 3
title:
  zh-CN: 不可用状态
  en-US: Disabled
---

## zh-CN

添加 `disabled` 属性即可让按钮处于不可用状态，同时按钮样式也会改变。

## en-US

To mark a button as disabled, add the `disabled` property to the `Button`.

```jsx
import { Button } from "modo-mobile";

ReactDOM.render(
  <div className="button-list">
    <Button type="primary" inline>
      Primary
    </Button>
    <Button type="primary" disabled inline>
      Primary(disabled)
    </Button>
    <br />
    <Button type="danger" inline>
      Danger
    </Button>
    <Button type="danger" disabled inline>
      Danger(disabled)
    </Button>
    <br />
    <Button inline>Default</Button>
    <Button disabled inline>
      Default(disabled)
    </Button>
    <br />
    <Button type="dashed" inline>
      Dashed
    </Button>
    <Button type="dashed" disabled inline>
      Dashed(disabled)
    </Button>
  </div>,
  mountNode
);
```
