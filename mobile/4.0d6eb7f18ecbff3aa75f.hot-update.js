webpackHotUpdate(4,{

/***/ 1248:
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
  "content": {
    "zh-CN": [
      [
        "p",
        "当需要在 ",
        [
          "code",
          "Button"
        ],
        " 内嵌入 ",
        [
          "code",
          "Icon"
        ],
        " 时，可以设置 ",
        [
          "code",
          "icon"
        ],
        " 属性，或者直接在 ",
        [
          "code",
          "Button"
        ],
        " 内使用 ",
        [
          "code",
          "Icon"
        ],
        " 组件。"
      ],
      [
        "p",
        "如果想控制 ",
        [
          "code",
          "Icon"
        ],
        " 具体的位置，只能直接使用 ",
        [
          "code",
          "Icon"
        ],
        " 组件，而非 ",
        [
          "code",
          "icon"
        ],
        " 属性。"
      ]
    ],
    "en-US": [
      [
        "p",
        [
          "code",
          "Button"
        ],
        " components can contain an ",
        [
          "code",
          "Icon"
        ],
        ". This is done by setting the ",
        [
          "code",
          "icon"
        ],
        " property or placing an ",
        [
          "code",
          "Icon"
        ],
        " component within the ",
        [
          "code",
          "Button"
        ]
      ],
      [
        "p",
        "If you want specific control over the positioning and placement of the ",
        [
          "code",
          "Icon"
        ],
        ", then that should be done by placing the ",
        [
          "code",
          "Icon"
        ],
        " component within the ",
        [
          "code",
          "Button"
        ],
        " rather than using the ",
        [
          "code",
          "icon"
        ],
        " property."
      ]
    ]
  },
  "meta": {
    "order": 1,
    "title": {
      "zh-CN": "图标按钮",
      "en-US": "Icon"
    },
    "filename": "components/button/demo/icon.md",
    "id": "components-button-demo-icon"
  },
  "highlightedCode": [
    "pre",
    {
      "lang": "jsx",
      "highlighted": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Button <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'modo-mobile'</span><span class=\"token punctuation\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span> <span class=\"token attr-name\">className</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>button-list<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Button</span> <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>primary<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">icon</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>search<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>\n      Search\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Button</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Button</span> <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>primary<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">icon</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>search<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">inline</span><span class=\"token punctuation\">></span></span>\n      Search\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Button</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Button</span> <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>primary<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">shape</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>circle<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">icon</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>search<span class=\"token punctuation\">\"</span></span> <span class=\"token punctuation\">/></span></span>cs<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Button</span> <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>dashed<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">shape</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>circle<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">icon</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>search<span class=\"token punctuation\">\"</span></span> <span class=\"token punctuation\">/></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Button</span> <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>primary<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">shape</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>circle<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">icon</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>search<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">size</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>small<span class=\"token punctuation\">\"</span></span> <span class=\"token punctuation\">/></span></span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span><span class=\"token punctuation\">,</span>\n  mountNode\n<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
    }
  ],
  "preview": function() {   var React = __webpack_require__(0);  return React.createElement('pre', {    style: {"padding":10,"background":"rgb(204, 0, 0)","color":"white","fontFamily":"sans-serif","fontSize":"16px","fontWeight":"bold","overflow":"auto"}  }, 'SyntaxError: unknown: Adjacent JSX elements must be wrapped in an enclosing tag (12:4)'); },
  "style": ".button-list {\n  padding: 10px;\n  width: 100%;\n  box-sizing: border-box;\n}\n\n.button-list > .m-button-inline {\n  margin-right: 10px;\n}",
  "highlightedStyle": "<span class=\"token selector\"><span class=\"token class\">.button-list</span> </span><span class=\"token punctuation\">{</span>\n  <span class=\"token property\">padding</span><span class=\"token punctuation\">:</span> <span class=\"token number\">10</span>px<span class=\"token punctuation\">;</span>\n  <span class=\"token property\">width</span><span class=\"token punctuation\">:</span> <span class=\"token number\">100%</span><span class=\"token punctuation\">;</span>\n  <span class=\"token property\">box-sizing</span><span class=\"token punctuation\">:</span> border-box<span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n\n<span class=\"token selector\"><span class=\"token class\">.button-list</span> > <span class=\"token class\">.m-button-inline</span> </span><span class=\"token punctuation\">{</span>\n  <span class=\"token property\">margin-right</span><span class=\"token punctuation\">:</span> <span class=\"token number\">10</span>px<span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>"
};

/***/ })

})
//# sourceMappingURL=4.0d6eb7f18ecbff3aa75f.hot-update.js.map