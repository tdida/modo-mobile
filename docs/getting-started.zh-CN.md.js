webpackJsonp([7],{

/***/ 1285:
/***/ (function(module, exports) {

module.exports = {
  "content": [
    "article",
    [
      "h2",
      "安装"
    ],
    [
      "h3",
      "使用 npm 或 yarn 安装"
    ],
    [
      "p",
      [
        "strong",
        "推荐使用 npm 或 yarn 的方式进行开发"
      ],
      "，不仅可在开发环境轻松调试，也可放心地在生产环境打包部署使用，享受整个生态圈和工具链带来的诸多好处。"
    ],
    [
      "pre",
      {
        "lang": "bash",
        "highlighted": "<span class=\"token function\">npm</span> <span class=\"token function\">install</span> modo-mobile --save"
      },
      [
        "code",
        "npm install modo-mobile --save"
      ]
    ],
    [
      "pre",
      {
        "lang": "bash",
        "highlighted": "yarn add modo-mobile"
      },
      [
        "code",
        "yarn add modo-mobile"
      ]
    ],
    [
      "blockquote",
      [
        "p",
        "如果你的网络环境不佳，推荐使用 ",
        [
          "a",
          {
            "title": null,
            "href": "https://github.com/cnpm/cnpm"
          },
          "cnpm"
        ],
        "。"
      ]
    ],
    [
      "h4",
      "浏览器引入"
    ],
    [
      "pre",
      {
        "lang": "html",
        "highlighted": "<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>link</span> <span class=\"token attr-name\">rel</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>stylesheet<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">href</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>https://unpkg.com/modo-mobile/dist/modo-mobile.min.css<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>\n\n<span class=\"token comment\" spellcheck=\"true\">&lt;!-- window['modo-mobile'] --></span>\n<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>script</span> <span class=\"token attr-name\">src</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>https://unpkg.com/modo-mobile/dist/modo-mobile.min.js<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span><span class=\"token script language-javascript\"></span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>script</span><span class=\"token punctuation\">></span></span>"
      },
      [
        "code",
        "<link rel=\"stylesheet\" href=\"https://unpkg.com/modo-mobile/dist/modo-mobile.min.css\">\n\n<!-- window['modo-mobile'] -->\n<script src=\"https://unpkg.com/modo-mobile/dist/modo-mobile.min.js\"></script>"
      ]
    ],
    [
      "blockquote",
      [
        "p",
        [
          "strong",
          "强烈不推荐使用已构建文件"
        ],
        "，这样无法按需加载，而且难以获得底层依赖模块的 bug 快速修复支持。"
      ]
    ],
    [
      "h2",
      "示例"
    ],
    [
      "pre",
      {
        "lang": "jsx",
        "highlighted": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Icon <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'modo-mobile'</span><span class=\"token punctuation\">;</span>\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Icon</span> <span class=\"token punctuation\">/></span></span><span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
      },
      [
        "code",
        "import { Icon } from 'modo-mobile';\nReactDOM.render(<Icon />, mountNode);"
      ]
    ],
    [
      "p",
      "引入样式："
    ],
    [
      "pre",
      {
        "lang": "jsx",
        "highlighted": "<span class=\"token keyword\">import</span> <span class=\"token string\">'modo-mobile/dist/modo-mobile.css'</span><span class=\"token punctuation\">;</span> <span class=\"token comment\" spellcheck=\"true\">// or 'modo-mobile/dist/modo-mobile.less'</span>"
      },
      [
        "code",
        "import 'modo-mobile/dist/modo-mobile.css'; // or 'modo-mobile/dist/modo-mobile.less'"
      ]
    ],
    [
      "h3",
      "按需加载"
    ],
    [
      "p",
      "下面两种方式都可以只加载用到的组件。"
    ],
    [
      "ul",
      [
        "li",
        [
          "p",
          "使用 ",
          [
            "a",
            {
              "title": null,
              "href": "https://github.com/ant-design/babel-plugin-import"
            },
            "babel-plugin-import"
          ],
          "（推荐）。"
        ],
        [
          "pre",
          {
            "lang": "js",
            "highlighted": "<span class=\"token comment\" spellcheck=\"true\">// .babelrc or babel-loader option</span>\n<span class=\"token punctuation\">{</span>\n  <span class=\"token string\">\"plugins\"</span><span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span>\n    <span class=\"token punctuation\">[</span><span class=\"token string\">\"import\"</span><span class=\"token punctuation\">,</span> <span class=\"token punctuation\">{</span> <span class=\"token string\">\"libraryName\"</span><span class=\"token punctuation\">:</span> <span class=\"token string\">\"modo-mobile\"</span><span class=\"token punctuation\">,</span> <span class=\"token string\">\"libraryDirectory\"</span><span class=\"token punctuation\">:</span> <span class=\"token string\">\"es\"</span><span class=\"token punctuation\">,</span> <span class=\"token string\">\"style\"</span><span class=\"token punctuation\">:</span> <span class=\"token string\">\"css\"</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">]</span> <span class=\"token comment\" spellcheck=\"true\">// `style: true` 会加载 less 文件</span>\n  <span class=\"token punctuation\">]</span>\n<span class=\"token punctuation\">}</span>"
          },
          [
            "code",
            "// .babelrc or babel-loader option\n{\n  \"plugins\": [\n    [\"import\", { \"libraryName\": \"modo-mobile\", \"libraryDirectory\": \"es\", \"style\": \"css\" }] // `style: true` 会加载 less 文件\n  ]\n}"
          ]
        ],
        [
          "blockquote",
          [
            "p",
            "注意：webpack 1 无需设置 ",
            [
              "code",
              "libraryDirectory"
            ],
            "。"
          ]
        ],
        [
          "p",
          "然后只需从 modo-mobile 引入模块即可，无需单独引入样式。等同于下面手动引入的方式。"
        ],
        [
          "pre",
          {
            "lang": "jsx",
            "highlighted": "<span class=\"token comment\" spellcheck=\"true\">// babel-plugin-import 会帮助你加载 JS 和 CSS</span>\n<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Icon <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'modo-mobile'</span><span class=\"token punctuation\">;</span>"
          },
          [
            "code",
            "// babel-plugin-import 会帮助你加载 JS 和 CSS\nimport { Icon } from 'modo-mobile';"
          ]
        ]
      ],
      [
        "li",
        [
          "p",
          "手动引入"
        ],
        [
          "pre",
          {
            "lang": "jsx",
            "highlighted": "<span class=\"token keyword\">import</span> Icon <span class=\"token keyword\">from</span> <span class=\"token string\">'modo-mobile/lib/icon'</span><span class=\"token punctuation\">;</span> <span class=\"token comment\" spellcheck=\"true\">// 加载 JS</span>\n<span class=\"token keyword\">import</span> <span class=\"token string\">'modo-mobile/lib/icon/style/css'</span><span class=\"token punctuation\">;</span> <span class=\"token comment\" spellcheck=\"true\">// 加载 CSS</span>\n<span class=\"token comment\" spellcheck=\"true\">// import 'modo-mobile/lib/icon/style';         // 加载 LESS</span>"
          },
          [
            "code",
            "import Icon from 'modo-mobile/lib/icon'; // 加载 JS\nimport 'modo-mobile/lib/icon/style/css'; // 加载 CSS\n// import 'modo-mobile/lib/icon/style';         // 加载 LESS"
          ]
        ]
      ]
    ]
  ],
  "meta": {
    "order": 1,
    "title": "快速上手",
    "filename": "docs/getting-started.zh-CN.md"
  },
  "toc": [
    "ul",
    [
      "li",
      [
        "a",
        {
          "className": "bisheng-toc-h2",
          "href": "#安装",
          "title": "安装"
        },
        "安装"
      ]
    ],
    [
      "li",
      [
        "a",
        {
          "className": "bisheng-toc-h2",
          "href": "#示例",
          "title": "示例"
        },
        "示例"
      ]
    ]
  ]
};

/***/ })

});
//# sourceMappingURL=getting-started.zh-CN.md.js.map