webpackJsonp(["components/notice-bar/demo"],{"5O5G":function(n,a,s){n.exports={basic:s("tbfV"),"close-text":s("KpXS"),duration:s("abm1"),icon:s("hTDy")}},KpXS:function(n,a,s){n.exports={content:{"zh-CN":[["p","\u53ef\u4ee5\u81ea\u5b9a\u4e49\u5173\u95ed\uff0c\u81ea\u5b9a\u4e49\u7684\u6587\u5b57\u4f1a\u66ff\u6362\u539f\u5148\u7684\u5173\u95ed ",["code","Icon"],"\u3002"]],"en-US":[["p","Replace the default icon with customized text."]]},meta:{order:3,title:{"zh-CN":"\u81ea\u5b9a\u4e49\u5173\u95ed","en-US":"Customized Close Text"},filename:"components/notice-bar/demo/close-text.md",id:"components-notice-bar-demo-close-text"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#zh-CN",title:"zh-CN"},"zh-CN"]],["li",["a",{className:"bisheng-toc-h2",href:"#en-US",title:"en-US"},"en-US"]]],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword">import</span> <span class="token punctuation">{</span> NoticeBar <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'modo-mobile\'</span><span class="token punctuation">;</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>NoticeBar</span> <span class="token attr-name">mode</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>closable<span class="token punctuation">"</span></span> <span class="token attr-name">action</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>Close<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n    Replace the <span class="token keyword">default</span> icon <span class="token keyword">with</span> customized text<span class="token punctuation">,</span> long text<span class="token punctuation">,</span> long text<span class="token punctuation">,</span> long text<span class="token punctuation">,</span> long text<span class="token punctuation">.</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>NoticeBar</span><span class="token punctuation">></span></span><span class="token punctuation">,</span>\n  mountNode\n<span class="token punctuation">)</span><span class="token punctuation">;</span>'}],preview:function(){var n=s("Jmof"),a=(s("wLXD"),s("JkW7"));return n.createElement(a.NoticeBar,{mode:"closable",action:"Close"},"Replace the default icon with customized text, long text, long text, long text, long text.")}}},abm1:function(n,a,s){n.exports={content:{"zh-CN":[["p","5s \u540e\u9690\u85cf\u3002"]],"en-US":[["p","shows time."]]},meta:{order:4,title:{"zh-CN":"\u663e\u793a\u65f6\u95f4","en-US":"Shows time"},filename:"components/notice-bar/demo/duration.md",id:"components-notice-bar-demo-duration"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#zh-CN",title:"zh-CN"},"zh-CN"]],["li",["a",{className:"bisheng-toc-h2",href:"#en-US",title:"en-US"},"en-US"]]],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword">import</span> <span class="token punctuation">{</span> NoticeBar <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"modo-mobile"</span><span class="token punctuation">;</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>NoticeBar</span> <span class="token attr-name">duration</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">5000</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>duration<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>NoticeBar</span><span class="token punctuation">></span></span><span class="token punctuation">,</span> mountNode<span class="token punctuation">)</span><span class="token punctuation">;</span>'}],preview:function(){var n=s("Jmof"),a=(s("wLXD"),s("JkW7"));return n.createElement(a.NoticeBar,{duration:5e3},"duration")}}},hTDy:function(n,a,s){n.exports={content:{"zh-CN":[["p","\u663e\u793a\u5173\u95ed\u6309\u94ae\uff0c\u70b9\u51fb\u53ef\u5173\u95ed\u8b66\u544a\u63d0\u793a\u3002"]],"en-US":[["p","custom icon."]]},meta:{order:2,title:{"zh-CN":"\u81ea\u5b9a\u4e49Icon","en-US":"Custom Icon"},filename:"components/notice-bar/demo/icon.md",id:"components-notice-bar-demo-icon"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#zh-CN",title:"zh-CN"},"zh-CN"]],["li",["a",{className:"bisheng-toc-h2",href:"#en-US",title:"en-US"},"en-US"]]],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword">import</span> <span class="token punctuation">{</span> NoticeBar<span class="token punctuation">,</span> Icon <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"modo-mobile"</span><span class="token punctuation">;</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>NoticeBar</span> <span class="token attr-name">icon={&lt;Icon</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>question-circle<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">}</span><span class="token operator">></span>custom icon<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>NoticeBar</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span> <span class="token punctuation">/></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>NoticeBar</span> <span class="token attr-name">icon</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token operator">&lt;</span>div style<span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> color<span class="token punctuation">:</span> <span class="token string">"#1890ff"</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>waring<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token punctuation">}</span><span class="token operator">></span>\n      custom text\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>NoticeBar</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token punctuation">,</span>\n  mountNode\n<span class="token punctuation">)</span><span class="token punctuation">;</span>'}],preview:function(){var n=s("Jmof"),a=(s("wLXD"),s("JkW7"));return n.createElement("div",null,n.createElement(a.NoticeBar,{icon:n.createElement(a.Icon,{type:"question-circle"})},"custom icon"),n.createElement("br",null),n.createElement(a.NoticeBar,{icon:n.createElement("div",{style:{color:"#1890ff"}},"waring")},"custom text"))}}},tbfV:function(n,a,s){n.exports={content:{"zh-CN":[["p","\u6700\u7b80\u5355\u7684\u7528\u6cd5\uff0c\u9002\u7528\u4e8e\u7b80\u77ed\u7684\u8b66\u544a\u63d0\u793a\u3002"]],"en-US":[["p","The simplest usage for short messages."]]},meta:{order:1,title:{"zh-CN":"\u57fa\u672c","en-US":"Basic"},filename:"components/notice-bar/demo/basic.md",id:"components-notice-bar-demo-basic"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#zh-CN",title:"zh-CN"},"zh-CN"]],["li",["a",{className:"bisheng-toc-h2",href:"#en-US",title:"en-US"},"en-US"]]],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword">import</span> <span class="token punctuation">{</span> NoticeBar <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'modo-mobile\'</span><span class="token punctuation">;</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>NoticeBar</span><span class="token punctuation">></span></span>\u4e3a\u4e86\u786e\u4fdd\u60a8\u7684\u8d44\u91d1\u5b89\u5168\uff0c\u8bf7\u8bbe\u7f6e\u652f\u4ed8\u5bc6\u7801<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>NoticeBar</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span> <span class="token punctuation">/></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>NoticeBar</span> <span class="token attr-name">mode</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>closable<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\u4e3a\u4e86\u786e\u4fdd\u60a8\u7684\u8d44\u91d1\u5b89\u5168\uff0c\u8bf7\u8bbe\u7f6e\u652f\u4ed8\u5bc6\u7801<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>NoticeBar</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span> <span class="token punctuation">/></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>NoticeBar</span> <span class="token attr-name">mode</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>link<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\u4e3a\u4e86\u786e\u4fdd\u60a8\u7684\u8d44\u91d1\u5b89\u5168\uff0c\u8bf7\u8bbe\u7f6e\u652f\u4ed8\u5bc6\u7801<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>NoticeBar</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token punctuation">,</span>\n  mountNode\n<span class="token punctuation">)</span><span class="token punctuation">;</span>'}],preview:function(){var n=s("Jmof"),a=(s("wLXD"),s("JkW7"));return n.createElement("div",null,n.createElement(a.NoticeBar,null,"\u4e3a\u4e86\u786e\u4fdd\u60a8\u7684\u8d44\u91d1\u5b89\u5168\uff0c\u8bf7\u8bbe\u7f6e\u652f\u4ed8\u5bc6\u7801"),n.createElement("br",null),n.createElement(a.NoticeBar,{mode:"closable"},"\u4e3a\u4e86\u786e\u4fdd\u60a8\u7684\u8d44\u91d1\u5b89\u5168\uff0c\u8bf7\u8bbe\u7f6e\u652f\u4ed8\u5bc6\u7801"),n.createElement("br",null),n.createElement(a.NoticeBar,{mode:"link"},"\u4e3a\u4e86\u786e\u4fdd\u60a8\u7684\u8d44\u91d1\u5b89\u5168\uff0c\u8bf7\u8bbe\u7f6e\u652f\u4ed8\u5bc6\u7801"))}}}});