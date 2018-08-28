webpackJsonp([13],{

/***/ 1277:
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
  "content": [
    "section",
    [
      "p",
      "语义化的矢量图形。"
    ],
    [
      "h2",
      "图标的命名规范"
    ],
    [
      "p",
      "我们为每个图标赋予了语义化的命名，命名规则如下:"
    ],
    [
      "ul",
      [
        "li",
        [
          "p",
          "实心和描线图标保持同名，用 ",
          [
            "code",
            "-o"
          ],
          " 来区分，比如 ",
          [
            "code",
            "question-circle"
          ],
          "（实心） 和 ",
          [
            "code",
            "question-circle-o"
          ],
          "（描线）；"
        ]
      ],
      [
        "li",
        [
          "p",
          "命名顺序：",
          [
            "code",
            "[图标名]-[形状?]-[描线?]-[方向?]"
          ],
          "。"
        ]
      ]
    ],
    [
      "h2",
      "图标列表"
    ],
    [
      "blockquote",
      [
        "p",
        "点击图标即可复制代码。"
      ]
    ],
    [
      "h3",
      "方向性图标"
    ],
    function bishengPluginReactPreviewer() {
  var React = __webpack_require__(0);

  var ReactDOM = __webpack_require__(10);

  var _IconSet = __webpack_require__(119);

  var _IconSet2 = _interopRequireDefault(_IconSet);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  return React.createElement(_IconSet2.default, {
    className: "icons",
    catigory: "direction"
  });
},
    [
      "h3",
      "提示建议性图标"
    ],
    function bishengPluginReactPreviewer() {
  var React = __webpack_require__(0);

  var ReactDOM = __webpack_require__(10);

  var _IconSet = __webpack_require__(119);

  var _IconSet2 = _interopRequireDefault(_IconSet);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  return React.createElement(_IconSet2.default, {
    className: "icons",
    catigory: "suggestion"
  });
},
    [
      "h3",
      "网站通用图标"
    ],
    function bishengPluginReactPreviewer() {
  var React = __webpack_require__(0);

  var ReactDOM = __webpack_require__(10);

  var _IconSet = __webpack_require__(119);

  var _IconSet2 = _interopRequireDefault(_IconSet);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  return React.createElement(_IconSet2.default, {
    className: "icons",
    catigory: "other"
  });
},
    [
      "h3",
      "品牌与标识"
    ],
    function bishengPluginReactPreviewer() {
  var React = __webpack_require__(0);

  var ReactDOM = __webpack_require__(10);

  var _IconSet = __webpack_require__(119);

  var _IconSet2 = _interopRequireDefault(_IconSet);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  return React.createElement(_IconSet2.default, {
    className: "icons",
    catigory: "logo"
  });
}
  ],
  "meta": {
    "category": "Components",
    "subtitle": "图标",
    "type": "General",
    "title": "Icon",
    "toc": false,
    "filename": "components/icon/index.zh-CN.md"
  },
  "toc": [
    "ul",
    [
      "li",
      [
        "a",
        {
          "className": "bisheng-toc-h2",
          "href": "#图标的命名规范",
          "title": "图标的命名规范"
        },
        "图标的命名规范"
      ]
    ],
    [
      "li",
      [
        "a",
        {
          "className": "bisheng-toc-h2",
          "href": "#图标列表",
          "title": "图标列表"
        },
        "图标列表"
      ]
    ],
    [
      "li",
      [
        "a",
        {
          "className": "bisheng-toc-h2",
          "href": "#API",
          "title": "API"
        },
        "API"
      ]
    ]
  ],
  "api": [
    "section",
    [
      "h2",
      "API"
    ],
    [
      "h3",
      "Icon"
    ],
    [
      "table",
      [
        "thead",
        [
          "tr",
          [
            "th",
            "参数"
          ],
          [
            "th",
            "说明"
          ],
          [
            "th",
            "类型"
          ],
          [
            "th",
            "默认值"
          ]
        ]
      ],
      [
        "tbody",
        [
          "tr",
          [
            "td",
            "type"
          ],
          [
            "td",
            "图标类型，遵循图标的命名规范"
          ],
          [
            "td",
            "string"
          ],
          [
            "td",
            "-"
          ]
        ],
        [
          "tr",
          [
            "td",
            "style"
          ],
          [
            "td",
            "设置图标的样式，例如 ",
            [
              "code",
              "fontSize"
            ],
            " 和 ",
            [
              "code",
              "color"
            ]
          ],
          [
            "td",
            "CSSProperties"
          ],
          [
            "td",
            "-"
          ]
        ],
        [
          "tr",
          [
            "td",
            "svgStyle"
          ],
          [
            "td",
            "设置图标本身",
            [
              "code",
              "<svg>"
            ],
            "标签的样式"
          ],
          [
            "td",
            "CSSProperties"
          ],
          [
            "td",
            "-"
          ]
        ],
        [
          "tr",
          [
            "td",
            "svgClassName"
          ],
          [
            "td",
            "为图标本身",
            [
              "code",
              "<svg>"
            ],
            "标签设置额外的类名"
          ],
          [
            "td",
            "string"
          ],
          [
            "td",
            "-"
          ]
        ],
        [
          "tr",
          [
            "td",
            "spin"
          ],
          [
            "td",
            "是否有旋转动画"
          ],
          [
            "td",
            "boolean"
          ],
          [
            "td",
            "false"
          ]
        ],
        [
          "tr",
          [
            "td",
            "component"
          ],
          [
            "td",
            "控制如何渲染图标，通常是一个渲染根标签为 ",
            [
              "code",
              "<svg>"
            ],
            " 的 ",
            [
              "code",
              "React"
            ],
            " 组件，",
            [
              "strong",
              "会使 ",
              [
                "code",
                "type"
              ],
              " 属性失效"
            ]
          ],
          [
            "td",
            "ComponentType<CustomIconComponentProps",
            ">"
          ],
          [
            "td",
            "-"
          ]
        ]
      ]
    ],
    [
      "p",
      "所有的图标都会以 ",
      [
        "code",
        "<svg>"
      ],
      " 标签渲染，可以使用 ",
      [
        "code",
        "style"
      ],
      " 和 ",
      [
        "code",
        "className"
      ],
      " 设置图标的大小和单色图标的颜色。例如："
    ],
    [
      "pre",
      {
        "lang": "jsx",
        "highlighted": "<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Icon</span> <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>message<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">style</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span> fontSize<span class=\"token punctuation\">:</span> <span class=\"token string\">'16px'</span><span class=\"token punctuation\">,</span> color<span class=\"token punctuation\">:</span> <span class=\"token string\">'#08c'</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span> <span class=\"token punctuation\">/></span></span>"
      },
      [
        "code",
        "<Icon type=\"message\" style={{ fontSize: '16px', color: '#08c' }} />"
      ]
    ],
    [
      "p",
      "如果使用 ",
      [
        "code",
        "webpack"
      ],
      "，可以通过配置 ",
      [
        "a",
        {
          "title": null,
          "href": "https://www.npmjs.com/package/@svgr/webpack"
        },
        "@svgr/webpack"
      ],
      " 来将 ",
      [
        "code",
        "svg"
      ],
      " 图标作为 ",
      [
        "code",
        "React"
      ],
      " 组件导入。",
      [
        "code",
        "@svgr/webpack"
      ],
      " 的 ",
      [
        "code",
        "options"
      ],
      " 选项请参阅 ",
      [
        "a",
        {
          "title": null,
          "href": "https://github.com/smooth-code/svgr#options"
        },
        "svgr 文档"
      ],
      "。"
    ],
    [
      "pre",
      {
        "lang": "js",
        "highlighted": "<span class=\"token comment\" spellcheck=\"true\">// webpack.config.js</span>\n<span class=\"token punctuation\">{</span>\n  test<span class=\"token punctuation\">:</span> <span class=\"token regex\">/\\.svg(\\?v=\\d+\\.\\d+\\.\\d+)?$/</span><span class=\"token punctuation\">,</span>\n  use<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span>\n    <span class=\"token punctuation\">{</span>\n      loader<span class=\"token punctuation\">:</span> <span class=\"token string\">'babel-loader'</span><span class=\"token punctuation\">,</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n    <span class=\"token punctuation\">{</span>\n      loader<span class=\"token punctuation\">:</span> <span class=\"token string\">'@svgr/webpack'</span><span class=\"token punctuation\">,</span>\n      options<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">{</span>\n        babel<span class=\"token punctuation\">:</span> <span class=\"token boolean\">false</span><span class=\"token punctuation\">,</span>\n        icon<span class=\"token punctuation\">:</span> <span class=\"token boolean\">true</span><span class=\"token punctuation\">,</span>\n      <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">}</span>"
      },
      [
        "code",
        "// webpack.config.js\n{\n  test: /\\.svg(\\?v=\\d+\\.\\d+\\.\\d+)?$/,\n  use: [\n    {\n      loader: 'babel-loader',\n    },\n    {\n      loader: '@svgr/webpack',\n      options: {\n        babel: false,\n        icon: true,\n      },\n    },\n  ],\n}"
      ]
    ],
    [
      "pre",
      {
        "lang": "jsx",
        "highlighted": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Icon <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n<span class=\"token keyword\">import</span> MessageSvg <span class=\"token keyword\">from</span> <span class=\"token string\">'path/to/message.svg'</span><span class=\"token punctuation\">;</span> <span class=\"token comment\" spellcheck=\"true\">// path to your '*.svg' file.</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Icon</span> <span class=\"token attr-name\">component</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>MessageSvg<span class=\"token punctuation\">}</span></span> <span class=\"token punctuation\">/></span></span><span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
      },
      [
        "code",
        "import { Icon } from 'antd';\nimport MessageSvg from 'path/to/message.svg'; // path to your '*.svg' file.\n\nReactDOM.render(<Icon component={MessageSvg} />, mountNode);"
      ]
    ],
    [
      "h4",
      "CustomIconComponentProps"
    ],
    [
      "p",
      [
        "code",
        "Icon"
      ],
      " 中的 ",
      [
        "code",
        "component"
      ],
      " 组件的属性如下："
    ],
    [
      "table",
      [
        "thead",
        [
          "tr",
          [
            "th",
            "字段"
          ],
          [
            "th",
            "说明"
          ],
          [
            "th",
            "类型"
          ],
          [
            "th",
            "只读值"
          ]
        ]
      ],
      [
        "tbody",
        [
          "tr",
          [
            "td",
            "width"
          ],
          [
            "td",
            [
              "code",
              "svg"
            ],
            " 元素宽度"
          ],
          [
            "td",
            "string ",
            "|",
            " number"
          ],
          [
            "td",
            "'1em'"
          ]
        ],
        [
          "tr",
          [
            "td",
            "height"
          ],
          [
            "td",
            [
              "code",
              "svg"
            ],
            " 元素高度"
          ],
          [
            "td",
            "string ",
            "|",
            " number"
          ],
          [
            "td",
            "'1em'"
          ]
        ],
        [
          "tr",
          [
            "td",
            "fill"
          ],
          [
            "td",
            [
              "code",
              "svg"
            ],
            " 元素填充的颜色"
          ],
          [
            "td",
            "string"
          ],
          [
            "td",
            "'currentColor'"
          ]
        ],
        [
          "tr",
          [
            "td",
            "className"
          ],
          [
            "td",
            "计算后的 ",
            [
              "code",
              "svg"
            ],
            " 类名"
          ],
          [
            "td",
            "string"
          ],
          [
            "td",
            "-"
          ]
        ],
        [
          "tr",
          [
            "td",
            "style"
          ],
          [
            "td",
            "计算后的 ",
            [
              "code",
              "svg"
            ],
            " 元素样式"
          ],
          [
            "td",
            "CSSProperties"
          ],
          [
            "td",
            "-"
          ]
        ]
      ]
    ],
    [
      "h3",
      "Icon.createFromIconfontCN(options)"
    ],
    [
      "p",
      "这个方法适用于 ",
      [
        "code",
        "iconfont.cn"
      ],
      " 的用户"
    ],
    [
      "pre",
      {
        "lang": "js",
        "highlighted": "<span class=\"token keyword\">const</span> MyIcon <span class=\"token operator\">=</span> Icon<span class=\"token punctuation\">.</span><span class=\"token function\">createFromIconfontCN</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span>\n  namespace<span class=\"token punctuation\">:</span> <span class=\"token string\">'foo'</span><span class=\"token punctuation\">,</span> <span class=\"token comment\" spellcheck=\"true\">// identifier</span>\n  scriptUrl<span class=\"token punctuation\">:</span> <span class=\"token string\">'//at.alicdn.com/t/font_8d5l8fzk5b87iudi.js'</span><span class=\"token punctuation\">,</span> <span class=\"token operator\">/</span><span class=\"token operator\">/</span> generated by iconfont<span class=\"token punctuation\">.</span>cn\n  prefix<span class=\"token punctuation\">:</span> <span class=\"token string\">'icon-'</span><span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token operator\">&lt;</span>MyIcon type<span class=\"token operator\">=</span><span class=\"token string\">\"example\"</span> <span class=\"token operator\">/</span><span class=\"token operator\">></span><span class=\"token punctuation\">,</span> mountedNode<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
      },
      [
        "code",
        "const MyIcon = Icon.createFromIconfontCN({\n  namespace: 'foo', // identifier\n  scriptUrl: '//at.alicdn.com/t/font_8d5l8fzk5b87iudi.js', // generated by iconfont.cn\n  prefix: 'icon-',\n});\n\nReactDOM.render(<MyIcon type=\"example\" />, mountedNode);"
      ]
    ],
    [
      "p",
      "其本质上是创建了一个使用 ",
      [
        "code",
        "<use>"
      ],
      " 标签来渲染图标的组件。"
    ],
    [
      "p",
      [
        "code",
        "options"
      ],
      " 的配置项如下："
    ],
    [
      "table",
      [
        "thead",
        [
          "tr",
          [
            "th",
            "参数"
          ],
          [
            "th",
            "说明"
          ],
          [
            "th",
            "类型"
          ],
          [
            "th",
            "默认值"
          ]
        ]
      ],
      [
        "tbody",
        [
          "tr",
          [
            "td",
            "scriptUrl"
          ],
          [
            "td",
            [
              "a",
              {
                "title": null,
                "href": "http://iconfont.cn/"
              },
              "iconfont.cn"
            ],
            " 项目在线生成的 ",
            [
              "code",
              "js"
            ],
            " 地址，在 ",
            [
              "code",
              "namespace"
            ],
            " 也设置的情况下有效"
          ],
          [
            "td",
            "string"
          ],
          [
            "td",
            "-"
          ]
        ],
        [
          "tr",
          [
            "td",
            "extraCommonProps"
          ],
          [
            "td",
            "给所有的 ",
            [
              "code",
              "svg"
            ],
            " 图标 ",
            [
              "code",
              "<Icon />"
            ],
            " 组件设置额外的属性"
          ],
          [
            "td",
            [
              "code",
              "{ [key: string]: any }"
            ]
          ],
          [
            "td",
            "{}"
          ]
        ]
      ]
    ],
    [
      "p",
      "在 ",
      [
        "code",
        "namespace"
      ],
      " 和 ",
      [
        "code",
        "scriptUrl"
      ],
      " 都设置有效的情况下，组件在渲染前会自动引入 ",
      [
        "a",
        {
          "title": null,
          "href": "http://iconfont.cn/"
        },
        "iconfont.cn"
      ],
      " 项目中的图标符号集，无需手动引入。"
    ],
    [
      "p",
      "见 ",
      [
        "a",
        {
          "title": null,
          "href": "http://iconfont.cn/help/detail?spm=a313x.7781069.1998910419.15&helptype=code"
        },
        "iconfont.cn 使用帮助"
      ],
      " 查看如何生成 ",
      [
        "code",
        "js"
      ],
      " 地址。"
    ]
  ]
};

/***/ })

});
//# sourceMappingURL=index.zh-CN.md.js.map