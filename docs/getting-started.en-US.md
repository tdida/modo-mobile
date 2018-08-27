---
order: 1
title: Getting Started
---

## Installation

### Using npm or yarn

**We recommend using npm or yarn to install**，it not only makes development easier，but also allow you to take advantage of the rich ecosystem of Javascript packages and tooling.

```bash
$ npm install modo-mobile --save
```

```bash
$ yarn add modo-mobile
```

> If you are in a bad network environment，you can try other registries and tools like [cnpm](https://github.com/cnpm/cnpm).

### Import in Browser

```html
<link rel="stylesheet" href="https://unpkg.com/modo-mobile/dist/modo-mobile.min.css">

<!-- window['modo-mobile'] -->
<script src="https://unpkg.com/modo-mobile/dist/modo-mobile.min.js"></script>
```

> **We strongly discourage loading the entire files** this will add bloat to your application and make it more difficult to receive bugfixes and updates.

## Usage

```jsx
import { Icon } from 'modo-mobile';
ReactDOM.render(<Icon />, mountNode);
```

And import stylesheets manually:

```jsx
import 'modo-mobile/dist/modo-mobile.css'; // or 'modo-mobile/dist/modo-mobile.less'
```

### Use modularized antd

- Use [babel-plugin-import](https://github.com/ant-design/babel-plugin-import) (Recommended)

  ```js
  // .babelrc or babel-loader option
  {
    "plugins": [
      ["import", { "libraryName": "modo-mobile", "libraryDirectory": "es", "style": "css" }] // `style: true` for less
    ]
  }
  ```

  > Note: Don't set `libraryDirectory` if you are using webpack 1.

  This allows you to import components from modo-mobile without having to manually import the corresponding stylesheet. The modo-mobile babel plugin will automatically import stylesheets.

  ```jsx
  // import js and css modularly, parsed by babel-plugin-import
  import { Icon } from 'modo-mobile';
  ```

- Manually import

  ```jsx
  import Icon from 'modo-mobile/lib/icon'; // for js
  import 'modo-mobile/lib/icon/style/css'; // for css
  // import 'modo-mobile/lib/icon/style';         // that will import less
  ```
