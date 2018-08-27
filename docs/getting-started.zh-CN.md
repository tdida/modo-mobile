---
order: 1
title: 快速上手
---

## 安装

### 使用 npm 或 yarn 安装

**推荐使用 npm 或 yarn 的方式进行开发**，不仅可在开发环境轻松调试，也可放心地在生产环境打包部署使用，享受整个生态圈和工具链带来的诸多好处。

```bash
npm install modo-mobile --save
```

```bash
yarn add modo-mobile
```

> 如果你的网络环境不佳，推荐使用 [cnpm](https://github.com/cnpm/cnpm)。

#### 浏览器引入

```html
<link rel="stylesheet" href="https://unpkg.com/modo-mobile/dist/modo-mobile.min.css">

<!-- window['modo-mobile'] -->
<script src="https://unpkg.com/modo-mobile/dist/modo-mobile.min.js"></script>
```

> **强烈不推荐使用已构建文件**，这样无法按需加载，而且难以获得底层依赖模块的 bug 快速修复支持。

## 示例

```jsx
import { Icon } from 'modo-mobile';
ReactDOM.render(<Icon />, mountNode);
```

引入样式：

```jsx
import 'modo-mobile/dist/modo-mobile.css'; // or 'modo-mobile/dist/modo-mobile.less'
```

### 按需加载

下面两种方式都可以只加载用到的组件。

- 使用 [babel-plugin-import](https://github.com/ant-design/babel-plugin-import)（推荐）。

  ```js
  // .babelrc or babel-loader option
  {
    "plugins": [
      ["import", { "libraryName": "modo-mobile", "libraryDirectory": "es", "style": "css" }] // `style: true` 会加载 less 文件
    ]
  }
  ```

  > 注意：webpack 1 无需设置 `libraryDirectory`。

  然后只需从 modo-mobile 引入模块即可，无需单独引入样式。等同于下面手动引入的方式。

  ```jsx
  // babel-plugin-import 会帮助你加载 JS 和 CSS
  import { Icon } from 'modo-mobile';
  ```

- 手动引入

  ```jsx
  import Icon from 'modo-mobile/lib/icon'; // 加载 JS
  import 'modo-mobile/lib/icon/style/css'; // 加载 CSS
  // import 'modo-mobile/lib/icon/style';         // 加载 LESS
  ```
