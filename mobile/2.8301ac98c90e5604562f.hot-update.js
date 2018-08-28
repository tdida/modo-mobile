webpackHotUpdate(2,{

/***/ 1256:
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
  "content": {
    "zh-CN": [
      [
        "p",
        "可以自定义关闭，自定义的文字会替换原先的关闭 ",
        [
          "code",
          "Icon"
        ],
        "。"
      ]
    ],
    "en-US": [
      [
        "p",
        "Replace the default icon with customized text."
      ]
    ]
  },
  "meta": {
    "order": 3,
    "title": {
      "zh-CN": "自定义关闭",
      "en-US": "Customized Close Text"
    },
    "filename": "components/notice-bar/demo/close-text.md",
    "id": "components-notice-bar-demo-close-text"
  },
  "highlightedCode": [
    "pre",
    {
      "lang": "jsx",
      "highlighted": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> NoticeBar <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'modo-mobile'</span><span class=\"token punctuation\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>NoticeBar</span> <span class=\"token attr-name\">mode</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>closable<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">action</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>Close<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">style</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span> padding<span class=\"token punctuation\">:</span> <span class=\"token number\">10</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span>\n    Replace the <span class=\"token keyword\">default</span> icon <span class=\"token keyword\">with</span> customized text<span class=\"token punctuation\">,</span> long text<span class=\"token punctuation\">,</span> long text<span class=\"token punctuation\">,</span> long text<span class=\"token punctuation\">,</span> long text<span class=\"token punctuation\">.</span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>NoticeBar</span><span class=\"token punctuation\">></span></span><span class=\"token punctuation\">,</span>\n  mountNode\n<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
    }
  ],
  "preview": function bishengPluginReactPreviewer() {
  var React = __webpack_require__(0);

  var ReactDOM = __webpack_require__(6);

  var _modoMobile = __webpack_require__(167);

  return React.createElement(
    _modoMobile.NoticeBar,
    {
      mode: "closable",
      action: "Close",
      style: {
        padding: 10
      }
    },
    "Replace the default icon with customized text, long text, long text, long text, long text."
  );
}
};

/***/ })

})
//# sourceMappingURL=2.8301ac98c90e5604562f.hot-update.js.map