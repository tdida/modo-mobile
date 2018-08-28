webpackHotUpdate(2,{

/***/ 1257:
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
  "content": {
    "zh-CN": [
      [
        "p",
        "5s 后隐藏。"
      ]
    ],
    "en-US": [
      [
        "p",
        "shows time."
      ]
    ]
  },
  "meta": {
    "order": 4,
    "title": {
      "zh-CN": "显示时间",
      "en-US": "Shows time"
    },
    "filename": "components/notice-bar/demo/duration.md",
    "id": "components-notice-bar-demo-duration"
  },
  "highlightedCode": [
    "pre",
    {
      "lang": "jsx",
      "highlighted": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> NoticeBar <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'modo-mobile'</span><span class=\"token punctuation\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span> <span class=\"token attr-name\">style</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span> padding<span class=\"token punctuation\">:</span> <span class=\"token number\">10</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>NoticeBar</span> <span class=\"token attr-name\">duration</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token number\">5000</span><span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span>duration<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>NoticeBar</span><span class=\"token punctuation\">></span></span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span><span class=\"token punctuation\">,</span>\n  mountNode\n<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
    }
  ],
  "preview": function bishengPluginReactPreviewer() {
  var React = __webpack_require__(0);

  var ReactDOM = __webpack_require__(6);

  var _modoMobile = __webpack_require__(167);

  return React.createElement(
    "div",
    {
      style: {
        padding: 10
      }
    },
    React.createElement(
      _modoMobile.NoticeBar,
      {
        duration: 5000
      },
      "duration"
    )
  );
}
};

/***/ })

})
//# sourceMappingURL=2.29d3f193bf2e98901a03.hot-update.js.map