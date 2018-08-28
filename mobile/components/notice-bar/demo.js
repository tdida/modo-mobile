webpackJsonp([2],{

/***/ 1255:
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
  "highlightedCode": [
    "pre",
    {
      "lang": "jsx",
      "highlighted": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> NoticeBar <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'modo-mobile'</span><span class=\"token punctuation\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span> <span class=\"token attr-name\">style</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span> padding<span class=\"token punctuation\">:</span> <span class=\"token number\">10</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>NoticeBar</span><span class=\"token punctuation\">></span></span>为了确保您的资金安全，请设置支付密码<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>NoticeBar</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>br</span> <span class=\"token punctuation\">/></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>NoticeBar</span> <span class=\"token attr-name\">mode</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>closable<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>为了确保您的资金安全，请设置支付密码<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>NoticeBar</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>br</span> <span class=\"token punctuation\">/></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>NoticeBar</span> <span class=\"token attr-name\">mode</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>link<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>为了确保您的资金安全，请设置支付密码<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>NoticeBar</span><span class=\"token punctuation\">></span></span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span><span class=\"token punctuation\">,</span>\n  mountNode\n<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
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

/***/ }),

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
      "highlighted": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> NoticeBar <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'modo-mobile'</span><span class=\"token punctuation\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span> <span class=\"token attr-name\">style</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span> padding<span class=\"token punctuation\">:</span> <span class=\"token number\">10</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>NoticeBar</span> <span class=\"token attr-name\">mode</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>closable<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">action</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>Close<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>\n      Replace the <span class=\"token keyword\">default</span> icon <span class=\"token keyword\">with</span> customized text<span class=\"token punctuation\">,</span> long text<span class=\"token punctuation\">,</span> long text<span class=\"token punctuation\">,</span> long text<span class=\"token punctuation\">,</span> long text<span class=\"token punctuation\">.</span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>NoticeBar</span><span class=\"token punctuation\">></span></span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span><span class=\"token punctuation\">,</span>\n  mountNode\n<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
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
        mode: "closable",
        action: "Close"
      },
      "Replace the default icon with customized text, long text, long text, long text, long text."
    )
  );
}
};

/***/ }),

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

/***/ }),

/***/ 1258:
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
  "content": {
    "zh-CN": [
      [
        "p",
        "显示关闭按钮，点击可关闭警告提示。"
      ]
    ],
    "en-US": [
      [
        "p",
        "custom icon."
      ]
    ]
  },
  "meta": {
    "order": 2,
    "title": {
      "zh-CN": "自定义Icon",
      "en-US": "Custom Icon"
    },
    "filename": "components/notice-bar/demo/icon.md",
    "id": "components-notice-bar-demo-icon"
  },
  "highlightedCode": [
    "pre",
    {
      "lang": "jsx",
      "highlighted": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> NoticeBar<span class=\"token punctuation\">,</span> Icon <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'modo-mobile'</span><span class=\"token punctuation\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span> <span class=\"token attr-name\">style</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span> padding<span class=\"token punctuation\">:</span> <span class=\"token number\">10</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>NoticeBar</span> <span class=\"token attr-name\">icon={&lt;Icon</span> <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>question-circle<span class=\"token punctuation\">\"</span></span> <span class=\"token punctuation\">/></span></span><span class=\"token punctuation\">}</span><span class=\"token operator\">></span>custom icon<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>NoticeBar</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>br</span> <span class=\"token punctuation\">/></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>NoticeBar</span> <span class=\"token attr-name\">icon</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token operator\">&lt;</span>div style<span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span> color<span class=\"token punctuation\">:</span> <span class=\"token string\">'#1890ff'</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span>waring<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span><span class=\"token punctuation\">}</span><span class=\"token operator\">></span>custom text<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>NoticeBar</span><span class=\"token punctuation\">></span></span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span><span class=\"token punctuation\">,</span>\n  mountNode\n<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
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
        icon: React.createElement(_modoMobile.Icon, {
          type: "question-circle"
        })
      },
      "custom icon"
    ),
    React.createElement("br", null),
    React.createElement(
      _modoMobile.NoticeBar,
      {
        icon: React.createElement(
          "div",
          {
            style: {
              color: '#1890ff'
            }
          },
          "waring"
        )
      },
      "custom text"
    )
  );
}
};

/***/ }),

/***/ 452:
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
    'basic': __webpack_require__(1255),
    'close-text': __webpack_require__(1256),
    'duration': __webpack_require__(1257),
    'icon': __webpack_require__(1258),
}

/***/ })

});
//# sourceMappingURL=demo.js.map