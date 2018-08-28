webpackJsonp([3],{

/***/ 1278:
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
    'basic': __webpack_require__(1296),
    'content': __webpack_require__(1297),
}

/***/ }),

/***/ 1296:
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
  "content": [

  ],
  "meta": {
    "order": 0,
    "title": {
      "zh-CN": "基础",
      "en-US": "Basic"
    },
    "filename": "components/list/demo/basic.md",
    "id": "components-list-demo-basic"
  },
  "toc": [
    "ul"
  ],
  "highlightedCode": [
    "pre",
    {
      "lang": "jsx",
      "highlighted": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> List <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">\"modo-mobile\"</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> App <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">(</span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>List</span> <span class=\"token attr-name\">title</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>单个条目<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">style</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span> marginBottom<span class=\"token punctuation\">:</span> <span class=\"token number\">10</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>List.Item</span> <span class=\"token attr-name\">title</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>可点击条目<span class=\"token punctuation\">\"</span></span> <span class=\"token punctuation\">/></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>List</span><span class=\"token punctuation\">></span></span>\n\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>List</span> <span class=\"token attr-name\">title</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>多个条目<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>List.Item</span> <span class=\"token attr-name\">title</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>禁用条目<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">disabled</span> <span class=\"token punctuation\">/></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>List.Item</span> <span class=\"token attr-name\">title</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>标题<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">brief</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>展示摘要描述<span class=\"token punctuation\">\"</span></span> <span class=\"token punctuation\">/></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>List</span><span class=\"token punctuation\">></span></span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span>\n<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>App</span> <span class=\"token punctuation\">/></span></span><span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
    }
  ],
  "preview": function bishengPluginReactPreviewer() {
  var React = __webpack_require__(0);

  var ReactDOM = __webpack_require__(10);

  var _modoMobile = __webpack_require__(478);

  var App = function App() {
    return React.createElement(
      "div",
      null,
      React.createElement(
        _modoMobile.List,
        {
          title: "单个条目",
          style: {
            marginBottom: 10
          }
        },
        React.createElement(_modoMobile.List.Item, {
          title: "可点击条目"
        })
      ),
      React.createElement(
        _modoMobile.List,
        {
          title: "多个条目"
        },
        React.createElement(_modoMobile.List.Item, {
          title: "禁用条目",
          disabled: true
        }),
        React.createElement(_modoMobile.List.Item, {
          title: "标题",
          brief: "展示摘要描述"
        })
      )
    );
  };

  return React.createElement(App, null);
}
};

/***/ }),

/***/ 1297:
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
  "content": [

  ],
  "meta": {
    "order": 0,
    "title": {
      "zh-CN": "包含内容",
      "en-US": "Content"
    },
    "filename": "components/list/demo/content.md",
    "id": "components-list-demo-content"
  },
  "toc": [
    "ul"
  ],
  "highlightedCode": [
    "pre",
    {
      "lang": "jsx",
      "highlighted": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> List<span class=\"token punctuation\">,</span> Icon <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">\"modo-mobile\"</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> App <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">(</span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>List</span> <span class=\"token attr-name\">title</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>包含内容<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">extra={&lt;Icon</span> <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>plus-circle<span class=\"token punctuation\">\"</span></span> <span class=\"token punctuation\">/></span></span><span class=\"token punctuation\">}</span><span class=\"token operator\">></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>List.Item</span> <span class=\"token attr-name\">title</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>短标题<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">arrow</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span><span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>\n        内容展示，无方向图标\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>List.Item</span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>List.Item</span> <span class=\"token attr-name\">title</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>短标题<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">align</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>left<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">arrow</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>up<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>\n        内容靠左展示\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>List.Item</span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>List.Item</span> <span class=\"token attr-name\">title</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>短标题<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">align</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>center<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">arrow</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>down<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>\n        内容居中展示\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>List.Item</span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>List.Item</span> <span class=\"token attr-name\">title</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>一个换行的标题<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>内容靠右展示<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>List.Item</span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>List.Item</span> <span class=\"token attr-name\">title</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>ICON标题<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">extra={&lt;Icon</span> <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>setting<span class=\"token punctuation\">\"</span></span> <span class=\"token punctuation\">/></span></span><span class=\"token punctuation\">}</span><span class=\"token operator\">></span>\n        内容展示\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>List.Item</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>List</span><span class=\"token punctuation\">></span></span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span>\n<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>App</span> <span class=\"token punctuation\">/></span></span><span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
    }
  ],
  "preview": function bishengPluginReactPreviewer() {
  var React = __webpack_require__(0);

  var ReactDOM = __webpack_require__(10);

  var _modoMobile = __webpack_require__(478);

  var App = function App() {
    return React.createElement(
      "div",
      null,
      React.createElement(
        _modoMobile.List,
        {
          title: "包含内容",
          extra: React.createElement(_modoMobile.Icon, {
            type: "plus-circle"
          })
        },
        React.createElement(
          _modoMobile.List.Item,
          {
            title: "短标题",
            arrow: ""
          },
          "内容展示，无方向图标"
        ),
        React.createElement(
          _modoMobile.List.Item,
          {
            title: "短标题",
            align: "left",
            arrow: "up"
          },
          "内容靠左展示"
        ),
        React.createElement(
          _modoMobile.List.Item,
          {
            title: "短标题",
            align: "center",
            arrow: "down"
          },
          "内容居中展示"
        ),
        React.createElement(
          _modoMobile.List.Item,
          {
            title: "一个换行的标题"
          },
          "内容靠右展示"
        ),
        React.createElement(
          _modoMobile.List.Item,
          {
            title: "ICON标题",
            extra: React.createElement(_modoMobile.Icon, {
              type: "setting"
            })
          },
          "内容展示"
        )
      )
    );
  };

  return React.createElement(App, null);
}
};

/***/ })

});
//# sourceMappingURL=demo.js.map