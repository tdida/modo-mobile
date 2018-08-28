webpackJsonp(["docs/getting-started.zh-CN.md"],{"k+lv":function(n,s){n.exports={content:["article",["h2","\u5b89\u88c5"],["h3","\u4f7f\u7528 npm \u6216 yarn \u5b89\u88c5"],["p",["strong","\u63a8\u8350\u4f7f\u7528 npm \u6216 yarn \u7684\u65b9\u5f0f\u8fdb\u884c\u5f00\u53d1"],"\uff0c\u4e0d\u4ec5\u53ef\u5728\u5f00\u53d1\u73af\u5883\u8f7b\u677e\u8c03\u8bd5\uff0c\u4e5f\u53ef\u653e\u5fc3\u5730\u5728\u751f\u4ea7\u73af\u5883\u6253\u5305\u90e8\u7f72\u4f7f\u7528\uff0c\u4eab\u53d7\u6574\u4e2a\u751f\u6001\u5708\u548c\u5de5\u5177\u94fe\u5e26\u6765\u7684\u8bf8\u591a\u597d\u5904\u3002"],["pre",{lang:"bash",highlighted:'<span class="token function">npm</span> <span class="token function">install</span> modo-mobile --save'},["code","npm install modo-mobile --save"]],["pre",{lang:"bash",highlighted:"yarn add modo-mobile"},["code","yarn add modo-mobile"]],["blockquote",["p","\u5982\u679c\u4f60\u7684\u7f51\u7edc\u73af\u5883\u4e0d\u4f73\uff0c\u63a8\u8350\u4f7f\u7528 ",["a",{title:null,href:"https://github.com/cnpm/cnpm"},"cnpm"],"\u3002"]],["h4","\u6d4f\u89c8\u5668\u5f15\u5165"],["pre",{lang:"html",highlighted:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>link</span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>stylesheet<span class="token punctuation">"</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>https://unpkg.com/modo-mobile/dist/modo-mobile.min.css<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n\n<span class="token comment" spellcheck="true">&lt;!-- window[\'modo-mobile\'] --\x3e</span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>https://unpkg.com/modo-mobile/dist/modo-mobile.min.js<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script language-javascript"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>'},["code",'<link rel="stylesheet" href="https://unpkg.com/modo-mobile/dist/modo-mobile.min.css">\n\n\x3c!-- window[\'modo-mobile\'] --\x3e\n<script src="https://unpkg.com/modo-mobile/dist/modo-mobile.min.js"><\/script>']],["blockquote",["p",["strong","\u5f3a\u70c8\u4e0d\u63a8\u8350\u4f7f\u7528\u5df2\u6784\u5efa\u6587\u4ef6"],"\uff0c\u8fd9\u6837\u65e0\u6cd5\u6309\u9700\u52a0\u8f7d\uff0c\u800c\u4e14\u96be\u4ee5\u83b7\u5f97\u5e95\u5c42\u4f9d\u8d56\u6a21\u5757\u7684 bug \u5feb\u901f\u4fee\u590d\u652f\u6301\u3002"]],["h2","\u793a\u4f8b"],["pre",{lang:"jsx",highlighted:'<span class="token keyword">import</span> <span class="token punctuation">{</span> Icon <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'modo-mobile\'</span><span class="token punctuation">;</span>\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Icon</span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span> mountNode<span class="token punctuation">)</span><span class="token punctuation">;</span>'},["code","import { Icon } from 'modo-mobile';\nReactDOM.render(<Icon />, mountNode);"]],["p","\u5f15\u5165\u6837\u5f0f\uff1a"],["pre",{lang:"jsx",highlighted:'<span class="token keyword">import</span> <span class="token string">\'modo-mobile/dist/modo-mobile.css\'</span><span class="token punctuation">;</span> <span class="token comment" spellcheck="true">// or \'modo-mobile/dist/modo-mobile.less\'</span>'},["code","import 'modo-mobile/dist/modo-mobile.css'; // or 'modo-mobile/dist/modo-mobile.less'"]],["h3","\u6309\u9700\u52a0\u8f7d"],["p","\u4e0b\u9762\u4e24\u79cd\u65b9\u5f0f\u90fd\u53ef\u4ee5\u53ea\u52a0\u8f7d\u7528\u5230\u7684\u7ec4\u4ef6\u3002"],["ul",["li",["p","\u4f7f\u7528 ",["a",{title:null,href:"https://github.com/ant-design/babel-plugin-import"},"babel-plugin-import"],"\uff08\u63a8\u8350\uff09\u3002"],["pre",{lang:"js",highlighted:'<span class="token comment" spellcheck="true">// .babelrc or babel-loader option</span>\n<span class="token punctuation">{</span>\n  <span class="token string">"plugins"</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>\n    <span class="token punctuation">[</span><span class="token string">"import"</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token string">"libraryName"</span><span class="token punctuation">:</span> <span class="token string">"modo-mobile"</span><span class="token punctuation">,</span> <span class="token string">"libraryDirectory"</span><span class="token punctuation">:</span> <span class="token string">"es"</span><span class="token punctuation">,</span> <span class="token string">"style"</span><span class="token punctuation">:</span> <span class="token string">"css"</span> <span class="token punctuation">}</span><span class="token punctuation">]</span> <span class="token comment" spellcheck="true">// `style: true` \u4f1a\u52a0\u8f7d less \u6587\u4ef6</span>\n  <span class="token punctuation">]</span>\n<span class="token punctuation">}</span>'},["code",'// .babelrc or babel-loader option\n{\n  "plugins": [\n    ["import", { "libraryName": "modo-mobile", "libraryDirectory": "es", "style": "css" }] // `style: true` \u4f1a\u52a0\u8f7d less \u6587\u4ef6\n  ]\n}']],["blockquote",["p","\u6ce8\u610f\uff1awebpack 1 \u65e0\u9700\u8bbe\u7f6e ",["code","libraryDirectory"],"\u3002"]],["p","\u7136\u540e\u53ea\u9700\u4ece modo-mobile \u5f15\u5165\u6a21\u5757\u5373\u53ef\uff0c\u65e0\u9700\u5355\u72ec\u5f15\u5165\u6837\u5f0f\u3002\u7b49\u540c\u4e8e\u4e0b\u9762\u624b\u52a8\u5f15\u5165\u7684\u65b9\u5f0f\u3002"],["pre",{lang:"jsx",highlighted:'<span class="token comment" spellcheck="true">// babel-plugin-import \u4f1a\u5e2e\u52a9\u4f60\u52a0\u8f7d JS \u548c CSS</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> Icon <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'modo-mobile\'</span><span class="token punctuation">;</span>'},["code","// babel-plugin-import \u4f1a\u5e2e\u52a9\u4f60\u52a0\u8f7d JS \u548c CSS\nimport { Icon } from 'modo-mobile';"]]],["li",["p","\u624b\u52a8\u5f15\u5165"],["pre",{lang:"jsx",highlighted:'<span class="token keyword">import</span> Icon <span class="token keyword">from</span> <span class="token string">\'modo-mobile/lib/icon\'</span><span class="token punctuation">;</span> <span class="token comment" spellcheck="true">// \u52a0\u8f7d JS</span>\n<span class="token keyword">import</span> <span class="token string">\'modo-mobile/lib/icon/style/css\'</span><span class="token punctuation">;</span> <span class="token comment" spellcheck="true">// \u52a0\u8f7d CSS</span>\n<span class="token comment" spellcheck="true">// import \'modo-mobile/lib/icon/style\';         // \u52a0\u8f7d LESS</span>'},["code","import Icon from 'modo-mobile/lib/icon'; // \u52a0\u8f7d JS\nimport 'modo-mobile/lib/icon/style/css'; // \u52a0\u8f7d CSS\n// import 'modo-mobile/lib/icon/style';         // \u52a0\u8f7d LESS"]]]]],meta:{order:1,title:"\u5feb\u901f\u4e0a\u624b",filename:"docs/getting-started.zh-CN.md"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#\u5b89\u88c5",title:"\u5b89\u88c5"},"\u5b89\u88c5"]],["li",["a",{className:"bisheng-toc-h2",href:"#\u793a\u4f8b",title:"\u793a\u4f8b"},"\u793a\u4f8b"]]]}}});