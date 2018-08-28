English | [简体中文](./README.zh-CN.md)

<div align="center">
  <a href="https://tdida.github.io/modo-mobile">
    <img width="320" src="https://pic.modo-modo.com/saas-1535341906110-28486.png" alt="LOGO">
  </a>
</div>

# Modo Mobile

[![Build Status](https://travis-ci.com/tdida/modo-mobile.svg?branch=master)](https://travis-ci.com/tdida/modo-mobile)
[![codecov](https://codecov.io/gh/tdida/modo-mobile/branch/master/graph/badge.svg)](https://codecov.io/gh/tdida/modo-mobile)
[![npm package](https://img.shields.io/npm/v/modo-mobile.svg?style=flat-square)](https://www.npmjs.org/package/modo-mobile)
[![npm downloads](http://img.shields.io/npm/dm/modo-mobile.svg?style=flat-square)](http://www.npmtrends.com/modo-mobile)
[![gzip js size](http://img.badgesize.io/https://unpkg.com/modo-mobile/dist/modo-mobile.js?compression=gzip&label=gzip%20size:%20JS&style=flat-square)](https://unpkg.com/modo-mobile/)
[![gzip css size](http://img.badgesize.io/https://unpkg.com/modo-mobile/dist/modo-mobile.css?compression=gzip&label=gzip%20size:%20CSS&style=flat-square)](https://unpkg.com/modo-mobile/)

A mobile UI toolkit, based on React

## Features

- Configurable UI style for different products.
- Develop in TypeScript.

## Demo

### mobile web demo

<img width="250" src="https://pic.modo-modo.com/saas-1535108254349-21154.png" />

## Installation & Usage

### Installation

```bash
npm install modo-mobile --save

yarn add modo-mobile
```

### Import

- Use [babel-plugin-import](https://github.com/ant-design/babel-plugin-import) (Recommended)

```jsx
import { Icon } from 'modo-mobile';
```

```jsx
import Icon from 'modo-mobile/lib/icon'; // for JS
import 'modo-mobile/lib/icon/style/css'; // for CSS
// import 'modo-mobile/lib/icon/style';         // that will import less
```

### CDN

```html
<link rel="stylesheet" href="https://unpkg.com/modo-mobile/dist/modo-mobile.min.css">

<!-- window['modo-mobile'] -->
<script src="https://unpkg.com/modo-mobile/dist/modo-mobile.min.js"></script>
```

### Usage

Select the components you need to build your webapp. Find more details in [Quick Start](https://tdida.github.io/modo-mobile/docs/getting-started).

## Development

```bash
git clone git@github.com:tdida/modo-mobile.git
cd modo-mobile
npm install
npm run start
```

Open your browser and visit http://127.0.0.1:8000、http://127.0.0.1:8001. Find more details in [Development Guide](https://tdida.github.io/modo-mobile/docs/getting-started).

## Contributing

Welcome to contribute by creating issues or sending pull requests. See [Contributing Guide](CONTRIBUTING.md) for guidelines.

## License

Mand Mobile is licensed under the Apache License 2.0. See the [LICENSE](LICENSE) file.
