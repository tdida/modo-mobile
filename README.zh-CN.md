[English](./README.md) | 简体中文

<div align="center">
  <a href="https://tdida.github.io/modo-mobile">
    <img width="320" src="https://pic.modo-modo.com/saas-1535341906110-28486.png" alt="LOGO">
  </a>
</div>

# Modo Mobile

[![Build Status](https://travis-ci.com/TDiDa/modo-mobile.svg?branch=master)](https://travis-ci.com/TDiDa/modo-mobile)
[![codecov](https://codecov.io/gh/tdida/modo-mobile/branch/master/graph/badge.svg)](https://codecov.io/gh/tdida/modo-mobile)
[![npm package](https://img.shields.io/npm/v/modo-mobile.svg?style=flat-square)](https://www.npmjs.org/package/modo-mobile)
[![npm downloads](http://img.shields.io/npm/dm/modo-mobile.svg?style=flat-square)](http://npmtrends.com/modo-mobile)
[![gzip js size](http://img.badgesize.io/https://unpkg.com/modo-mobile/dist/modo-mobile.js?compression=gzip&label=gzip%20size:%20JS&style=flat-square)](https://unpkg.com/modo-mobile/)
[![gzip css size](http://img.badgesize.io/https://unpkg.com/modo-mobile/dist/modo-mobile.css?compression=gzip&label=gzip%20size:%20CSS&style=flat-square)](https://unpkg.com/modo-mobile/)

移动端 UI 组件库，基于 React 实现

## 特性

- 规则化的视觉样式配置，适应各类产品风格。
- 使用 TypeScript 开发，提供类型定义文件。

## 链接

- [首页](https://tdida.github.io/modo-mobile)
- [更新日志](CHANGELOG.zh-CN.md)
- [示例集合](https://tdida.github.io/modo-mobile/mobile)

## 演示

### mobile web demo

<img width="250" src="https://pic.modo-modo.com/saas-1535108254349-21154.png" />

## 安装 & 使用

### 安装

```bash
npm install modo-mobile --save

yarn add modo-mobile
```

### 引入

- 使用 [babel-plugin-import](https://github.com/ant-design/babel-plugin-import)（推荐）。

```jsx
// babel-plugin-import 会帮助你加载 JS 和 CSS
import { Icon } from 'modo-mobile';
```

```jsx
import Icon from 'modo-mobile/lib/icon'; // 加载 JS
import 'modo-mobile/lib/icon/style/css'; // 加载 CSS
// import 'modo-mobile/lib/icon/style';         // 加载 LESS
```

### CDN

```html
<link rel="stylesheet" href="https://unpkg.com/modo-mobile/dist/modo-mobile.min.css">

<!-- window['modo-mobile'] -->
<script src="https://unpkg.com/modo-mobile/dist/modo-mobile.min.js"></script>
```

### 使用

选择需要的组件开始构建您的 webapp，详细内容请查看[快速上手](https://tdida.github.io/modo-mobile/docs/getting-started-cn)。

## 开发

```bash
git clone git@github.com:tdida/modo-mobile.git
cd modo-mobile
npm install
npm run start
```

打开浏览器访问http://127.0.0.1:8000、http://127.0.0.1:8001， 详细内容请查看[开发指南](https://tdida.github.io/modo-mobile/docs/getting-started-cn)。

## 贡献

如有任何的意见或建议，欢迎您通过创建 Issue 或 Pull Request 的方式告知我们，请先阅读[贡献指南](CONTRIBUTING.md)。

## 证书

Mand Mobile 使用 Apache License 2.0，查看[证书](LICENSE)。
