webpackJsonp([14],{

/***/ 1276:
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
  "content": [
    "section",
    [
      "p",
      "Semantic vector graphics."
    ],
    [
      "h2",
      "Icons naming convention"
    ],
    [
      "p",
      "We provide semantic name for every icon, and naming rules are as follows:"
    ],
    [
      "ul",
      [
        "li",
        [
          "p",
          "Scanning line icon has the similar name with its solid one，but it's distinguished by ",
          [
            "code",
            "-o"
          ],
          ", for example, ",
          [
            "code",
            "question-circle"
          ],
          " (a full circle) and ",
          [
            "code",
            "question-circle-o"
          ],
          " (an empty circle);"
        ]
      ],
      [
        "li",
        [
          "p",
          "Naming sequence：",
          [
            "code",
            "[name]-[shape?]-[outline?]-[direction?]"
          ],
          "."
        ]
      ]
    ],
    [
      "h2",
      "List of icons"
    ],
    [
      "blockquote",
      [
        "p",
        "Click the icon and copy the code."
      ]
    ],
    [
      "h3",
      "Directional Icons"
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
      "Suggested Icons"
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
      "Application Icons"
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
      "Brand and Logos"
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
    "type": "General",
    "title": "Icon",
    "toc": false,
    "filename": "components/icon/index.en-US.md"
  },
  "toc": [
    "ul",
    [
      "li",
      [
        "a",
        {
          "className": "bisheng-toc-h2",
          "href": "#Icons-naming-convention",
          "title": "Icons naming convention"
        },
        "Icons naming convention"
      ]
    ],
    [
      "li",
      [
        "a",
        {
          "className": "bisheng-toc-h2",
          "href": "#List-of-icons",
          "title": "List of icons"
        },
        "List of icons"
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
            "Property"
          ],
          [
            "th",
            "Description"
          ],
          [
            "th",
            "Type"
          ],
          [
            "th",
            "Default"
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
            "Type of ant design icon"
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
            "Style properties of icon, like ",
            [
              "code",
              "fontSize"
            ],
            " and ",
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
            "Inline style to apply to the SVG element"
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
            "Define extra class name for the SVG element"
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
            "Rotate icon with animation"
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
            "The component used for the root node. This will override the ",
            [
              "strong",
              [
                "code",
                "type"
              ]
            ],
            " property."
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
      "All the icons will render to ",
      [
        "code",
        "<svg>"
      ],
      ". You can still set ",
      [
        "code",
        "style"
      ],
      " and ",
      [
        "code",
        "className"
      ],
      " for size and color of icons."
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
      "You can import svg icon as an react component by using ",
      [
        "code",
        "webpack"
      ],
      " and ",
      [
        "a",
        {
          "title": null,
          "href": "https://www.npmjs.com/package/@svgr/webpack"
        },
        [
          "code",
          "@svgr/webpack"
        ]
      ],
      ". ",
      [
        "code",
        "@svgr/webpack"
      ],
      "'s ",
      [
        "code",
        "options"
      ],
      " ",
      [
        "a",
        {
          "title": null,
          "href": "https://github.com/smooth-code/svgr#options"
        },
        "reference"
      ],
      "."
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
        "highlighted": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Icon <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'modo-mobile'</span><span class=\"token punctuation\">;</span>\n<span class=\"token keyword\">import</span> MessageSvg <span class=\"token keyword\">from</span> <span class=\"token string\">'path/to/message.svg'</span><span class=\"token punctuation\">;</span> <span class=\"token comment\" spellcheck=\"true\">// path to your '*.svg' file.</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Icon</span> <span class=\"token attr-name\">component</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>MessageSvg<span class=\"token punctuation\">}</span></span> <span class=\"token punctuation\">/></span></span><span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
      },
      [
        "code",
        "import { Icon } from 'modo-mobile';\nimport MessageSvg from 'path/to/message.svg'; // path to your '*.svg' file.\n\nReactDOM.render(<Icon component={MessageSvg} />, mountNode);"
      ]
    ],
    [
      "h4",
      "CustomIconComponentProps"
    ],
    [
      "p",
      "The following properties are available fot the component:"
    ],
    [
      "table",
      [
        "thead",
        [
          "tr",
          [
            "th",
            "Property"
          ],
          [
            "th",
            "Description"
          ],
          [
            "th",
            "Type"
          ],
          [
            "th",
            "Default"
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
            "The width of the ",
            [
              "code",
              "svg"
            ],
            " element"
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
            "The height of the ",
            [
              "code",
              "svg"
            ],
            " element"
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
            "Define the color used to paint the ",
            [
              "code",
              "svg"
            ],
            " element"
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
            "The computed class name of the ",
            [
              "code",
              "svg"
            ],
            " element"
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
            "The computed style of the ",
            [
              "code",
              "svg"
            ],
            " element"
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
      "This method is specified for ",
      [
        "a",
        {
          "title": null,
          "href": "http://iconfont.cn/"
        },
        "iconfont.cn"
      ],
      "."
    ],
    [
      "pre",
      {
        "lang": "js",
        "highlighted": "<span class=\"token keyword\">const</span> MyIcon <span class=\"token operator\">=</span> Icon<span class=\"token punctuation\">.</span><span class=\"token function\">createFromIconfontCN</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span>\n  namespace<span class=\"token punctuation\">:</span> <span class=\"token string\">'foo'</span><span class=\"token punctuation\">,</span> <span class=\"token comment\" spellcheck=\"true\">// identifier</span>\n  scriptUrl<span class=\"token punctuation\">:</span> <span class=\"token string\">'at.alicdn.com/t/font_8d5l8fzk5b87iudi'</span><span class=\"token punctuation\">,</span> <span class=\"token comment\" spellcheck=\"true\">// generated by iconfont.cn</span>\n  prefix<span class=\"token punctuation\">:</span> <span class=\"token string\">'icon-'</span><span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token operator\">&lt;</span>MyIcon type<span class=\"token operator\">=</span><span class=\"token string\">\"example\"</span> <span class=\"token operator\">/</span><span class=\"token operator\">></span><span class=\"token punctuation\">,</span> mountedNode<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
      },
      [
        "code",
        "const MyIcon = Icon.createFromIconfontCN({\n  namespace: 'foo', // identifier\n  scriptUrl: 'at.alicdn.com/t/font_8d5l8fzk5b87iudi', // generated by iconfont.cn\n  prefix: 'icon-',\n});\n\nReactDOM.render(<MyIcon type=\"example\" />, mountedNode);"
      ]
    ],
    [
      "p",
      "It create a component that uses SVG sprites in essence."
    ],
    [
      "p",
      "The following options are available:"
    ],
    [
      "table",
      [
        "thead",
        [
          "tr",
          [
            "th",
            "Property"
          ],
          [
            "th",
            "Description"
          ],
          [
            "th",
            "Type"
          ],
          [
            "th",
            "Default"
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
            "The URL generated by ",
            [
              "a",
              {
                "title": null,
                "href": "http://iconfont.cn/"
              },
              "iconfont.cn"
            ],
            " project."
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
            "Define extra properties to the component"
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
      "The property ",
      [
        "code",
        "scriptUrl"
      ],
      " should be set together with property ",
      [
        "code",
        "namespace"
      ],
      "."
    ],
    [
      "p",
      "See ",
      [
        "a",
        {
          "title": null,
          "href": "http://iconfont.cn/help/detail?spm=a313x.7781069.1998910419.15&helptype=code"
        },
        "iconfont.cn documents"
      ],
      " to learn about how to generate ",
      [
        "code",
        "scriptUrl"
      ],
      "."
    ]
  ]
};

/***/ })

});
//# sourceMappingURL=index.en-US.md.js.map