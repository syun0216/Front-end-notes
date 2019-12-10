(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{260:function(t,s,a){t.exports=a.p+"assets/img/QQ20190925-104130.c7c3ae83.png"},261:function(t,s,a){t.exports=a.p+"assets/img/QQ20190925-104942.86610e60.png"},262:function(t,s,a){t.exports=a.p+"assets/img/QQ20190925-105223.85efe0e7.png"},263:function(t,s,a){t.exports=a.p+"assets/img/QQ20190925-110246.9c5e5f00.png"},264:function(t,s,a){t.exports=a.p+"assets/img/QQ20190925-112154.58db8b8f.png"},265:function(t,s,a){t.exports=a.p+"assets/img/QQ20190925-112714.31473394.png"},266:function(t,s,a){t.exports=a.p+"assets/img/QQ20190925-114213.5db04c63.png"},289:function(t,s,a){"use strict";a.r(s);var n=a(0),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"浏览器原理"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#浏览器原理"}},[t._v("#")]),t._v(" 浏览器原理")]),t._v(" "),n("h2",{attrs:{id:"常见的浏览器内核"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#常见的浏览器内核"}},[t._v("#")]),t._v(" 常见的浏览器内核")]),t._v(" "),n("table",[n("thead",[n("tr",[n("th",{staticStyle:{"text-align":"left"}},[t._v("浏览器/RunTime")]),t._v(" "),n("th",{staticStyle:{"text-align":"left"}},[t._v("内核(引擎)")]),t._v(" "),n("th",{staticStyle:{"text-align":"left"}},[t._v("JavaScript引擎")])])]),t._v(" "),n("tbody",[n("tr",[n("td",{staticStyle:{"text-align":"left"}},[t._v("Chrome")]),t._v(" "),n("td",{staticStyle:{"text-align":"left"}},[t._v("Blink(28~)/Webkit(Chrome 27)")]),t._v(" "),n("td",{staticStyle:{"text-align":"left"}},[t._v("v8")])]),t._v(" "),n("tr",[n("td",{staticStyle:{"text-align":"left"}},[t._v("FireFox")]),t._v(" "),n("td",{staticStyle:{"text-align":"left"}},[t._v("Gecko")]),t._v(" "),n("td",{staticStyle:{"text-align":"left"}},[t._v("SpiderMonkey")])]),t._v(" "),n("tr",[n("td",{staticStyle:{"text-align":"left"}},[t._v("Safari")]),t._v(" "),n("td",{staticStyle:{"text-align":"left"}},[t._v("Webkit")]),t._v(" "),n("td",{staticStyle:{"text-align":"left"}},[t._v("JavaScriptCore")])]),t._v(" "),n("tr",[n("td",{staticStyle:{"text-align":"left"}},[t._v("Edge")]),t._v(" "),n("td",{staticStyle:{"text-align":"left"}},[t._v("EdgeHTML")]),t._v(" "),n("td",{staticStyle:{"text-align":"left"}},[t._v("Chakra(for JScript)")])]),t._v(" "),n("tr",[n("td",{staticStyle:{"text-align":"left"}},[t._v("PhantomJS")]),t._v(" "),n("td",{staticStyle:{"text-align":"left"}},[t._v("Webkit")]),t._v(" "),n("td",{staticStyle:{"text-align":"left"}},[t._v("JavaScriptCore")])]),t._v(" "),n("tr",[n("td",{staticStyle:{"text-align":"left"}},[t._v("Node.js")]),t._v(" "),n("td",{staticStyle:{"text-align":"left"}},[t._v("-")]),t._v(" "),n("td",{staticStyle:{"text-align":"left"}},[t._v("V8")])])])]),t._v(" "),n("h2",{attrs:{id:"浏览器主要组成部分"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#浏览器主要组成部分"}},[t._v("#")]),t._v(" 浏览器主要组成部分")]),t._v(" "),n("ul",[n("li",[t._v("用户界面 - 包括地址栏、前进/后退按钮、书签菜单等。除了浏览器主窗口显示的您请求的页面外，其他显示的各个部分都属于用户界面。")]),t._v(" "),n("li",[t._v("浏览器引擎- 在用户界面和呈现引擎之间传送指令。")]),t._v(" "),n("li",[t._v("呈现引擎 - 负责显示请求的内容。如果请求的内容是 HTML，它就负责解析 HTML 和 CSS 内容，并将解析后的内容显示在屏幕上。")]),t._v(" "),n("li",[t._v("网络 - 用于网络调用，比如 HTTP 请求。其接口与平台无关，并为所有平台提供底层实现。")]),t._v(" "),n("li",[t._v("JavaScript解析器 - 用于解析和执行 JavaScript 代码。")]),t._v(" "),n("li",[t._v("数据存储 - 保存在硬盘上的各种数据")])]),t._v(" "),n("img",{attrs:{src:a(260)}}),t._v(" "),n("blockquote",[n("p",[t._v("值得注意的是，和大多数浏览器不同，Chrome 浏览器的每个标签页都分别对应一个呈现引擎实例。每个标签页都是一个独立的进程。")])]),t._v(" "),n("h2",{attrs:{id:"浏览器如何渲染ui的"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#浏览器如何渲染ui的"}},[t._v("#")]),t._v(" 浏览器如何渲染ui的")]),t._v(" "),n("ul",[n("li",[t._v("浏览器获取HTML文件，然后对文件进行解析，形成DOM Tree")]),t._v(" "),n("li",[t._v("同时，进行CSS解析，生成Style Rules")]),t._v(" "),n("li",[t._v("接着将DOM Tree与Style Rules合成Render Tree")]),t._v(" "),n("li",[t._v("接着进入布局(Layout)阶段，为每个节点分配在屏幕上的确切坐标")]),t._v(" "),n("li",[t._v("随后调用GPU进行绘制，遍历RenderTree节点，将元素呈现")])]),t._v(" "),n("img",{attrs:{src:a(261)}}),t._v(" "),n("h2",{attrs:{id:"浏览器如何解析css选择器"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#浏览器如何解析css选择器"}},[t._v("#")]),t._v(" 浏览器如何解析css选择器")]),t._v(" "),n("p",[t._v("浏览器会『从右往左』解析CSS选择器。")]),t._v(" "),n("div",{staticClass:"language-css extra-class"},[n("pre",{pre:!0,attrs:{class:"language-css"}},[n("code",[n("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".mod-nav h3 span")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("font-size")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 16px"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("img",{attrs:{src:a(262)}}),t._v(" "),n("p",[t._v("从右至左的匹配:")]),t._v(" "),n("ul",[n("li",[t._v("先找到所有的最右节点span，对于每一个span，向上寻找节点h3")]),t._v(" "),n("li",[t._v("由 h3再向上寻找 class=mod-nav 的节点")]),t._v(" "),n("li",[t._v("最后找到根元素 html 则结束这个分支的遍历。")])]),t._v(" "),n("h2",{attrs:{id:"dom-tree是如何构建的？"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#dom-tree是如何构建的？"}},[t._v("#")]),t._v(" DOM Tree是如何构建的？")]),t._v(" "),n("ul",[n("li",[t._v("转码: 浏览器将接收到的二进制数据按照指定编码格式转化为HTML字符串")]),t._v(" "),n("li",[t._v("生成Tokens: 之后开始parser，浏览器会将HTML字符串解析成Tokens")]),t._v(" "),n("li",[t._v("构建Nodes: 对Node添加特定的属性，通过指针确定 Node 的父、子、兄弟关系和所属 treeScope")]),t._v(" "),n("li",[t._v("生成DOM Tree：通过node包含的指针确定的关系构建出DOM Tree")])]),t._v(" "),n("img",{attrs:{src:a(263)}}),t._v(" "),n("h2",{attrs:{id:"浏览器重绘与重排"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#浏览器重绘与重排"}},[t._v("#")]),t._v(" 浏览器重绘与重排")]),t._v(" "),n("ul",[n("li",[t._v("重排: 部分渲染树（或者整个渲染树）需要重新分析并且节点尺寸需要重新计算，表现为重新生成布局，重新排列元素")]),t._v(" "),n("li",[t._v("重绘: 由于节点的几何属性发生改变或者由于样式发生改变，例如改变元素背景色时，屏幕上的部分内容需要更新，表现为某些元素的外观被改变")])]),t._v(" "),n("p",[t._v("『重绘』不一定会出现『重排』，『重排』必然会出现『重绘』。")]),t._v(" "),n("h2",{attrs:{id:"前端如何实现即时通讯？"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#前端如何实现即时通讯？"}},[t._v("#")]),t._v(" 前端如何实现即时通讯？")]),t._v(" "),n("h3",{attrs:{id:"短轮询"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#短轮询"}},[t._v("#")]),t._v(" 短轮询")]),t._v(" "),n("p",[t._v("每隔一段时间发出一个请求")]),t._v(" "),n("ul",[n("li",[t._v("优点：兼容性强，实现简单")]),t._v(" "),n("li",[t._v("缺点：延迟性高，非常消耗请求资源，影响性能")])]),t._v(" "),n("h3",{attrs:{id:"comet"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#comet"}},[t._v("#")]),t._v(" comet")]),t._v(" "),n("p",[t._v("comet有两种主要实现手段，一种是基于 AJAX 的长轮询（long-polling）方式，另一种是基于 Iframe 及 htmlfile 的流（streaming）方式，通常被叫做长连接。")]),t._v(" "),n("p",[t._v("长轮询优缺点：")]),t._v(" "),n("ul",[n("li",[t._v("优点：兼容性好，资源浪费较小")]),t._v(" "),n("li",[t._v("缺点：服务器hold连接会消耗资源，返回数据顺序无保证，难于管理维护")])]),t._v(" "),n("p",[t._v("长连接优缺点：")]),t._v(" "),n("ul",[n("li",[t._v("优点：兼容性好，消息即时到达，不发无用请求")]),t._v(" "),n("li",[t._v("缺点：服务器维护长连接消耗资源")])]),t._v(" "),n("p",[t._v("SSE\nSSE（Server-Sent Event，服务端推送事件）是一种允许服务端向客户端推送新数据的HTML5技术。")]),t._v(" "),n("ul",[n("li",[t._v("优点：基于HTTP而生，因此不需要太多改造就能使用，使用方便，而websocket非常复杂，必须借助成熟的库或框架")]),t._v(" "),n("li",[t._v("缺点：基于文本传输效率没有websocket高，不是严格的双向通信，客户端向服务端发送请求无法复用之前的连接，需要重新发出独立的请求")])]),t._v(" "),n("img",{attrs:{src:a(264)}}),t._v(" "),n("h3",{attrs:{id:"websocket"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#websocket"}},[t._v("#")]),t._v(" Websocket")]),t._v(" "),n("blockquote",[n("p",[n("a",{attrs:{href:"http://www.ruanyifeng.com/blog/2017/05/websocket.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("WebSocket教程"),n("OutboundLink")],1)])]),t._v(" "),n("p",[t._v("Websocket是一个全新的、独立的协议，基于TCP协议，与http协议兼容、却不会融入http协议，仅仅作为html5的一部分，其作用就是在服务器和客户端之间建立实时的双向通信。")]),t._v(" "),n("ul",[n("li",[t._v("优点：真正意义上的实时双向通信，性能好，低延迟")]),t._v(" "),n("li",[t._v("缺点：独立与http的协议，因此需要额外的项目改造，使用复杂度高，必须引入成熟的库，无法兼容低版本浏览器")])]),t._v(" "),n("img",{attrs:{src:a(265)}}),t._v(" "),n("h3",{attrs:{id:"web-worker"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#web-worker"}},[t._v("#")]),t._v(" Web Worker")]),t._v(" "),n("p",[t._v("Web Worker 的作用，就是为 JavaScript 创造多线程环境，允许主线程创建 Worker 线程，将一些任务分配给后者运行")]),t._v(" "),n("blockquote",[n("p",[n("a",{attrs:{href:"http://www.ruanyifeng.com/blog/2018/07/web-worker.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Web Worker教程"),n("OutboundLink")],1)])]),t._v(" "),n("h3",{attrs:{id:"service-workers"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#service-workers"}},[t._v("#")]),t._v(" Service workers")]),t._v(" "),n("p",[t._v("Service workers 本质上充当Web应用程序与浏览器之间的代理服务器，也可以在网络可用时作为浏览器和网络间的代理，创建有效的离线体验。")]),t._v(" "),n("blockquote",[n("p",[n("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/API/Service_Worker_API",target:"_blank",rel:"noopener noreferrer"}},[t._v("Service workers教程"),n("OutboundLink")],1)])]),t._v(" "),n("h3",{attrs:{id:"什么是浏览器同源策略？"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#什么是浏览器同源策略？"}},[t._v("#")]),t._v(" 什么是浏览器同源策略？")]),t._v(" "),n("p",[t._v("同源策略限制了从同一个源加载的文档或脚本如何与来自另一个源的资源进行交互。这是一个用于隔离潜在恶意文件的重要安全机制。")]),t._v(" "),n("p",[t._v('同源是指"协议+域名+端口"三者相同，即便两个不同的域名指向同一个ip地址，也非同源。')]),t._v(" "),n("p",[t._v("浏览器中的大部分内容都是受同源策略限制的，但是以下三个标签可以不受限制：")]),t._v(" "),n("ul",[n("li",[t._v("img src")]),t._v(" "),n("li",[t._v("link href")]),t._v(" "),n("li",[t._v("scripe src")])]),t._v(" "),n("h3",{attrs:{id:"如何实现跨域？"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#如何实现跨域？"}},[t._v("#")]),t._v(" 如何实现跨域？")]),t._v(" "),n("h4",{attrs:{id:"jsonp"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#jsonp"}},[t._v("#")]),t._v(" jsonp")]),t._v(" "),n("p",[t._v("优点：")]),t._v(" "),n("ul",[n("li",[t._v("实现简单")]),t._v(" "),n("li",[t._v("兼容性非常好\n缺点")]),t._v(" "),n("li",[t._v("只支持get请求")]),t._v(" "),n("li",[t._v("有安全性问题，容易遭受xss攻击，因为script标签只能get）")]),t._v(" "),n("li",[t._v("需要服务端配合jsonp进行一定程度的改造")])]),t._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("JSONP")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("  \n  url"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  params"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  callbackKey"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  callback\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 在参数里制定 callback 的名字")]),t._v("\n  params "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" params "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  params"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("callbackKey"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'jsonpCallback'")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 预留 callback")]),t._v("\n  window"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("jsonpCallback "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" callback\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 拼接参数字符串")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" paramKeys "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Object"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("keys")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("params"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" paramString "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" paramKeys\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("map")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("key")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token template-string"}},[n("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),n("span",{pre:!0,attrs:{class:"token interpolation"}},[n("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("key"),n("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token interpolation"}},[n("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("params"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("key"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),n("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("join")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'&'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 插入 DOM 元素")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" script "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" document"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("createElement")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'script'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  script"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("setAttribute")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'src'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token template-string"}},[n("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),n("span",{pre:!0,attrs:{class:"token interpolation"}},[n("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("url"),n("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("?")]),n("span",{pre:!0,attrs:{class:"token interpolation"}},[n("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("paramString"),n("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),n("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  document"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("body"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("appendChild")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("script"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("JSONP")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("  \n  url"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'http://s.weibo.com/ajax/jsonp/suggestion'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  params"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    key"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'test'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  callbackKey"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'_cb'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("callback")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("result")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("result"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("data"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n")])])]),n("h3",{attrs:{id:"最流行的跨域方案cors"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#最流行的跨域方案cors"}},[t._v("#")]),t._v(" 最流行的跨域方案cors")]),t._v(" "),n("p",[t._v("cors是目前主流的跨域解决方案，跨域资源共享(CORS) 是一种机制，它使用额外的 HTTP 头来告诉浏览器  让运行在一个 origin (domain) 上的Web应用被准许访问来自不同源服务器上的指定的资源。当一个资源从与该资源本身所在的服务器不同的域、协议或端口请求一个资源时，资源会发起一个跨域 HTTP 请求。")]),t._v(" "),n("ul",[n("li",[t._v("express")])]),t._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//CORS middleware")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("allowCrossDomain")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("req"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" res"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" next")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    res"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("header")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Access-Control-Allow-Origin'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'http://example.com'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    res"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("header")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Access-Control-Allow-Methods'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'GET,PUT,POST,DELETE'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    res"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("header")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Access-Control-Allow-Headers'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Content-Type'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("next")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//...")]),t._v("\napp"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("configure")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    app"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("use")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("express"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("bodyParser")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    app"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("use")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("express"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("cookieParser")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    app"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("use")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("express"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("session")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" secret"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'cool beans'")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    app"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("use")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("express"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("methodOverride")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    app"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("use")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("allowCrossDomain"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    app"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("use")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("app"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("router"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    app"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("use")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("express"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("static")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("__dirname "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/public'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),n("h3",{attrs:{id:"最方便的跨域方案nginx"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#最方便的跨域方案nginx"}},[t._v("#")]),t._v(" 最方便的跨域方案Nginx")]),t._v(" "),n("p",[t._v("反向代理的原理很简单，即所有客户端的请求都必须先经过nginx的处理，nginx作为代理服务器再讲请求转发给node或者java服务，这样就规避了同源策略。")]),t._v(" "),n("img",{attrs:{src:a(266)}}),t._v(" "),n("div",{staticClass:"language-bash extra-class"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 直接请求nginx也是会报跨域错误的这里设置允许跨域")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 如果代理地址已经允许跨域则不需要这些, 否则报错(虽然这样nginx跨域就没意义了)")]),t._v("\n    add_header Access-Control-Allow-Origin *"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    add_header Access-Control-Allow-Headers X-Requested-With"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    add_header Access-Control-Allow-Methods GET,POST,OPTIONS"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    location /api "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            rewrite ^/b/"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(".*"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("$ /"),n("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$1")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("break")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 去除本地接口/api前缀, 否则会出现404")]),t._v("\n            proxy_set_header Host "),n("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$host")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            proxy_set_header X-Real-IP "),n("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$remote_addr")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            proxy_set_header X-Forwarded-For "),n("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$proxy_add_x_forwarded_for")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            proxy_pass http://192.168.0.103:8080"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 转发地址")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("h3",{attrs:{id:"其它跨域方案"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#其它跨域方案"}},[t._v("#")]),t._v(" 其它跨域方案")]),t._v(" "),n("ul",[n("li",[t._v("HTML5 XMLHttpRequest 有一个API，postMessage()方法允许来自不同源的脚本采用异步方式进行有限的通信，可以实现跨文本档、多窗口、跨域消息传递。")]),t._v(" "),n("li",[t._v("WebSocket 是一种双向通信协议，在建立连接之后，WebSocket 的 server 与 client 都能主动向对方发送或接收数据，连接建立好了之后 client 与 server 之间的双向通信就与 HTTP 无关了，因此可以跨域。")]),t._v(" "),n("li",[t._v("window.name + iframe：window.name属性值在不同的页面（甚至不同域名）加载后依旧存在，并且可以支持非常长的 name 值，我们可以利用这个特点进行跨域。")]),t._v(" "),n("li",[t._v("location.hash + iframe：a.html欲与c.html跨域相互通信，通过中间页b.html来实现。 三个页面，不同域之间利用iframe的location.hash传值，相同域之间直接js访问来通信。")]),t._v(" "),n("li",[t._v("document.domain + iframe： 该方式只能用于二级域名相同的情况下，比如 a.test.com 和 b.test.com 适用于该方式，我们只需要给页面添加 document.domain ='test.com' 表示二级域名都相同就可以实现跨域，两个页面都通过js强制设置document.domain为基础主域，就实现了同域。")])])])}),[],!1,null,null,null);s.default=e.exports}}]);