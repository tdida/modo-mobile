---
order: 1
title:
  zh-CN: 图标按钮
  en-US: Icon
---

## zh-CN

当需要在 `Button` 内嵌入 `Icon` 时，可以设置 `icon` 属性，或者直接在 `Button` 内使用 `Icon` 组件。

如果想控制 `Icon` 具体的位置，只能直接使用 `Icon` 组件，而非 `icon` 属性。

## en-US

`Button` components can contain an `Icon`. This is done by setting the `icon` property or placing an `Icon` component within the `Button`

If you want specific control over the positioning and placement of the `Icon`, then that should be done by placing the `Icon` component within the `Button` rather than using the `icon` property.

```jsx
import { Button } from 'modo-mobile';

ReactDOM.render(
  <div className="button-list">
    <Button type="primary" icon="search">
      Search
    </Button>
    <Button type="primary" icon="search" inline>
      Search
    </Button>
    <Button type="primary" shape="circle" icon="search" />
    <Button type="dashed" shape="circle" icon="search" />
    <Button type="primary" shape="circle" icon="search" size="small" />
  </div>,
  mountNode
);
```

```css
.button-list {
  padding: 10px;
  width: 100%;
  box-sizing: border-box;
}

.button-list > .m-button-inline {
  margin-right: 10px;
}
```