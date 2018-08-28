webpackHotUpdate(0,{

/***/ 1298:
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
  "content": {
    "zh-CN": [
      [
        "p",
        "最简单的用法，适用于简短的警告提示。"
      ]
    ],
    "en-US": [
      [
        "p",
        "The simplest usage for short messages."
      ]
    ]
  },
  "meta": {
    "order": 1,
    "title": {
      "zh-CN": "基本",
      "en-US": "Basic"
    },
    "filename": "components/notice-bar/demo/basic.md",
    "id": "components-notice-bar-demo-basic"
  },
  "toc": [
    "ul",
    [
      "li",
      [
        "a",
        {
          "className": "bisheng-toc-h2",
          "href": "#zh-CN",
          "title": "zh-CN"
        },
        "zh-CN"
      ]
    ],
    [
      "li",
      [
        "a",
        {
          "className": "bisheng-toc-h2",
          "href": "#en-US",
          "title": "en-US"
        },
        "en-US"
      ]
    ]
  ],
  "highlightedCode": [
    "pre",
    {
      "lang": "jsx",
      "highlighted": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> NoticeBar <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'modo-mobile'</span><span class=\"token punctuation\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span> <span class=\"token attr-name\">style</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span> padding<span class=\"token punctuation\">:</span> <span class=\"token number\">10</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>NoticeBar</span><span class=\"token punctuation\">></span></span>为了确保您的资金安全，请设置支付密码<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>NoticeBar</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>br</span> <span class=\"token punctuation\">/></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>NoticeBar</span> <span class=\"token attr-name\">mode</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>closable<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>为了确保您的资金安全，请设置支付密码<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>NoticeBar</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>br</span> <span class=\"token punctuation\">/></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>NoticeBar</span> <span class=\"token attr-name\">mode</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>link<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>为了确保您的资金安全，请设置支付密码<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>NoticeBar</span><span class=\"token punctuation\">></span></span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span><span class=\"token punctuation\">,</span>\n  mountNode\n<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
    }
  ],
  "preview": function bishengPluginReactPreviewer() {
  var React = __webpack_require__(0);

  var ReactDOM = __webpack_require__(10);

  var _modoMobile = __webpack_require__(478);

  return React.createElement(
    "div",
    {
      style: {
        padding: 10
      }
    },
    React.createElement(
      _modoMobile.NoticeBar,
      null,
      "为了确保您的资金安全，请设置支付密码"
    ),
    React.createElement("br", null),
    React.createElement(
      _modoMobile.NoticeBar,
      {
        mode: "closable"
      },
      "为了确保您的资金安全，请设置支付密码"
    ),
    React.createElement("br", null),
    React.createElement(
      _modoMobile.NoticeBar,
      {
        mode: "link"
      },
      "为了确保您的资金安全，请设置支付密码"
    )
  );
}
};

/***/ })

})
//# sourceMappingURL=0.a7cb82a371aec885b8d0.hot-update.js.map