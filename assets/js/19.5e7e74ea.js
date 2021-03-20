(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{453:function(t,s,a){t.exports=a.p+"assets/img/QQ20191011-194148.8bcbc80e.png"},454:function(t,s,a){t.exports=a.p+"assets/img/QQ20191012-102556.395f9694.png"},455:function(t,s,a){t.exports=a.p+"assets/img/QQ20191012-182747.556adb83.png"},572:function(t,s,a){"use strict";a.r(s);var e=a(45),r=Object(e.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h2",{attrs:{id:"移动端开发的屏幕、图像、字体与布局的兼容适配"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#移动端开发的屏幕、图像、字体与布局的兼容适配"}},[t._v("#")]),t._v(" 移动端开发的屏幕、图像、字体与布局的兼容适配")]),t._v(" "),e("blockquote",[e("p",[t._v("参考自"),e("a",{attrs:{href:"https://juejin.im/user/574fa4b3e4fd690054c55d9d",target:"_blank",rel:"noopener noreferrer"}},[t._v("chokcoco"),e("OutboundLink")],1),t._v("的"),e("a",{attrs:{href:"https://juejin.im/post/5d70747cf265da03e16897c8",target:"_blank",rel:"noopener noreferrer"}},[t._v("移动端开发的屏幕、图像、字体与布局的兼容适配"),e("OutboundLink")],1),t._v("，对部分内容进行摘抄")])]),t._v(" "),e("h3",{attrs:{id:"响应式设计-responsive-web-design"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#响应式设计-responsive-web-design"}},[t._v("#")]),t._v(" 响应式设计(Responsive Web Design)")]),t._v(" "),e("p",[t._v("Content is like water,响应式界面能够适应不同的设备")]),t._v(" "),e("h3",{attrs:{id:"响应式界面的基本规则"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#响应式界面的基本规则"}},[t._v("#")]),t._v(" 响应式界面的基本规则")]),t._v(" "),e("ul",[e("li",[t._v("可伸缩的内容区块")]),t._v(" "),e("li",[t._v("可自由排布的内容区块")]),t._v(" "),e("li",[t._v("适应页面尺寸的边距： 根据页面尺寸进行放大缩小")]),t._v(" "),e("li",[t._v("能够适应比例变化的图片")]),t._v(" "),e("li",[t._v("能够自动隐藏/显示部分内容")]),t._v(" "),e("li",[t._v("能够自动折叠的导航菜单")]),t._v(" "),e("li",[t._v("放弃使用像素作为尺寸单位：能够在分辨率相差很大的设备上，看起来也能保持一致。")])]),t._v(" "),e("blockquote",[e("p",[t._v("归结为")]),t._v(" "),e("ul",[e("li",[t._v("媒体查询，边界断点的规则设定(media queries and break point)")]),t._v(" "),e("li",[t._v("内容的可伸缩性效果(Flexibel visuals)")]),t._v(" "),e("li",[t._v("流失网格布局(Fluid grids)")]),t._v(" "),e("li",[t._v("主要内容呈现及图片的高质量(Main content and high quality)")])])]),t._v(" "),e("h3",{attrs:{id:"响应式-rwd-和自适应-awd"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#响应式-rwd-和自适应-awd"}},[t._v("#")]),t._v(" 响应式(RWD)和自适应(AWD)")]),t._v(" "),e("p",[t._v("RWD:一切能用来为各种分辨率和设备性能优化视觉体验的技术(多端一套代码)。AWD:除了用媒体查询技术，，还要用js和HTML来适应影动设备的能力。AWD有可能会针对移动端用户减去内容，减去功能(多端多套代码)。")]),t._v(" "),e("img",{attrs:{src:a(453)}}),t._v(" "),e("h3",{attrs:{id:"渐进增强-progressive-enhancement-和优雅降级-graceful-degradation"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#渐进增强-progressive-enhancement-和优雅降级-graceful-degradation"}},[t._v("#")]),t._v(" 渐进增强(progressive enhancement)和优雅降级(graceful degradation)")]),t._v(" "),e("ul",[e("li",[t._v("渐进增强：保证基本功能，针对高级浏览器进行效果交互改进(朝前看)")]),t._v(" "),e("li",[t._v("优雅降级：构建完整功能，针对低版本浏览器进行兼容 (往回看)")])]),t._v(" "),e("h2",{attrs:{id:"移动端屏幕适配方案"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#移动端屏幕适配方案"}},[t._v("#")]),t._v(" 移动端屏幕适配方案")]),t._v(" "),e("h3",{attrs:{id:"设备逻辑像素"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#设备逻辑像素"}},[t._v("#")]),t._v(" 设备逻辑像素")]),t._v(" "),e("p",[t._v("设备独立像素 = CSS 像素 = 逻辑像素")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("chrome 上的iphone6、7、8  375*667\n")])])]),e("h3",{attrs:{id:"物理像素"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#物理像素"}},[t._v("#")]),t._v(" 物理像素")]),t._v(" "),e("p",[t._v("物理像素，既设备像素，又称分辨率。显示屏由一个个物理像素点组成，1334*750表示垂直和水平上具有的像素点。单位为pt")]),t._v(" "),e("h3",{attrs:{id:"dpr-device-pixel-ratio-设备像素比"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#dpr-device-pixel-ratio-设备像素比"}},[t._v("#")]),t._v(" DPR(Device Pixel Ratio) 设备像素比")]),t._v(" "),e("p",[t._v("公式： DPR = 物理像素 /设备像素")]),t._v(" "),e("blockquote",[e("p",[t._v("750 / 375 = 2 或者是 1334 / 667 = 2")])]),t._v(" "),e("p",[t._v("我们需要解决的问题：")]),t._v(" "),e("ol",[e("li",[t._v("适配不同的屏幕大小，也就是适配不同屏幕下的css像素")]),t._v(" "),e("li",[t._v("适配不同的像素密度，适配不同屏幕下的dpr不一致导致的问题")])]),t._v(" "),e("h3",{attrs:{id:"适配不同的屏幕大小"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#适配不同的屏幕大小"}},[t._v("#")]),t._v(" 适配不同的屏幕大小")]),t._v(" "),e("ul",[e("li",[t._v("css媒体查询")]),t._v(" "),e("li",[t._v("按比例还原设计稿")])]),t._v(" "),e("p",[t._v("但是如果我们使用百分比作为全局通用的基准单位，在css中每个单位的参照值不统一")]),t._v(" "),e("blockquote",[e("p",[t._v("百分比总要相对于另外一个量，比如长度。每个允许使用百分比值的属性，同时也要定义百分比值参照的那个量。这个量可以是相同元素的另一个属性的值，也可以是祖先元素的某个属性的值，甚至是格式化上下文的一个度量（比如包含块的宽度）。")])]),t._v(" "),e("p",[t._v("具体来说：")]),t._v(" "),e("ul",[e("li",[t._v("宽度width和间距margin、padding，支持百分比，但是默认的相对参考值是包含块的宽度")]),t._v(" "),e("li",[t._v("高度height百分比的大小是相对于其父级元素高的大小")]),t._v(" "),e("li",[t._v("边框border不支持百分比")]),t._v(" "),e("li",[t._v("边框圆角半径（border-radius）支持百分比值，但水平方向相对参考值是盒子的宽度，垂直方向相对参考值是盒子的高度；")]),t._v(" "),e("li",[t._v("文本大小（font-size）支持百分比值，但相对参考值是父元素的font-size的值；")]),t._v(" "),e("li",[t._v("盒阴影（box-shadow）和文本阴影（text-shadow）不支持百分比值；")])]),t._v(" "),e("h3",{attrs:{id:"rem适配方案"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#rem适配方案"}},[t._v("#")]),t._v(" rem适配方案")]),t._v(" "),e("blockquote",[e("p",[t._v("rem（font size of the root element），在 CSS Values and Units Module Level 3中的定义就是， 根据网页的根元素来设置字体大小，和 em（font size of the element）的区别是，em 是根据其父元素的字体大小来设置，而 rem 是根据网页的跟元素（html）来设置字体大小。")])]),t._v(" "),e("h4",{attrs:{id:"flexible"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#flexible"}},[t._v("#")]),t._v(" flexible")]),t._v(" "),e("p",[t._v("淘宝推行的基于rem 的库：lib-flexible,它可以根据document.documentElement.clientWidth动态修改html的font-size，页面其他元素使用rem作为长度单位进行布局，从而实现等比例缩放")]),t._v(" "),e("h4",{attrs:{id:"hotcss"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#hotcss"}},[t._v("#")]),t._v(" hotcss")]),t._v(" "),e("p",[t._v("它是一个移动端布局开发解决方案。使用 hotcss 可以让移动端布局开发更容易。")]),t._v(" "),e("h3",{attrs:{id:"rem方案总结"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#rem方案总结"}},[t._v("#")]),t._v(" rem方案总结")]),t._v(" "),e("p",[t._v("存在的问题：")]),t._v(" "),e("ul",[e("li",[t._v("动态修改viewport的风险，viewport改变页面缩放后，会使innerWidth/innerHeight也会随之变化。")]),t._v(" "),e("li",[t._v("需要引入一定js代码")]),t._v(" "),e("li",[t._v("rem 进行页面的宽度适配多少有一种 hack 的感觉")]),t._v(" "),e("li",[t._v("安卓4.4以下版本不支持viewport缩放")])]),t._v(" "),e("h2",{attrs:{id:"vw-更好的方案"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#vw-更好的方案"}},[t._v("#")]),t._v(" vw(更好的方案)")]),t._v(" "),e("p",[t._v("使用vw和vh不需要js辅助，根据 CSS Values and Units Module Level 4，vw等于初始包含块html元素宽度的1%,适配容器，文本，大于1px边框、圆角、阴影，内距和外距")]),t._v(" "),e("ul",[e("li",[t._v("1vw = window.innerWidth*0.01")]),t._v(" "),e("li",[t._v("1vh = window.innerHeight*0.01")])]),t._v(" "),e("img",{attrs:{src:a(454)}}),t._v(" "),e("p",[e("a",{attrs:{href:"https://codepen.io/Chokcoco/pen/oNvWVYq?editors=1100",target:"_blank",rel:"noopener noreferrer"}},[t._v("参考地址"),e("OutboundLink")],1)]),t._v(" "),e("h3",{attrs:{id:"vw的自动转换函数"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#vw的自动转换函数"}},[t._v("#")]),t._v(" vw的自动转换函数")]),t._v(" "),e("div",{staticClass:"language-scss extra-class"},[e("pre",{pre:!0,attrs:{class:"language-scss"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 假设设计稿的宽度是 375px")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("@function")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("px2vw")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$px")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("@return")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$px")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" 375 "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" 100vw"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("p",[t._v("或者使用插件"),e("a",{attrs:{href:"https://www.npmjs.com/package/postcss-px-to-viewport",target:"_blank",rel:"noopener noreferrer"}},[t._v("postcss-px-to-vieport"),e("OutboundLink")],1)]),t._v(" "),e("h3",{attrs:{id:"vw-polyfill"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#vw-polyfill"}},[t._v("#")]),t._v(" vw polyfill")]),t._v(" "),e("p",[t._v("降级处理：")]),t._v(" "),e("ul",[e("li",[t._v("CSS Houdini：通过CSS Houdini针对vw做处理，调用CSS Typed OM Level1 提供的 CSSUnitValue API。")]),t._v(" "),e("li",[t._v("CSS Polyfill：通过相应的Polyfill做相应的处理，目前针对于 vw 单位的 Polyfill 主要有：vminpoly、Viewport Units Buggyfill、vunits.js和 Modernizr")])]),t._v(" "),e("p",[t._v("存在的问题：")]),t._v(" "),e("ul",[e("li",[t._v("1px在高清屏显示问题")]),t._v(" "),e("li",[t._v("无法限制最大最小宽度")])]),t._v(" "),e("h3",{attrs:{id:"_1px线"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1px线"}},[t._v("#")]),t._v(" 1px线")]),t._v(" "),e("p",[t._v("在不同dpr下，物理像素宽不等于css像素宽")]),t._v(" "),e("ul",[e("li",[t._v("在 dpr = 1 时，此时 1 物理像素等于 1 CSS 像素宽度")]),t._v(" "),e("li",[t._v("在 dpr = 2 时，此时 1 物理像素等于 0.5 CSS 宽度像素，可以认为 border-width: 1px 这里的 1px 其实是 1 CSS像素宽度，等于 2 像素物理宽度，设计师其实想要的是 border-width: 0.5px;")]),t._v(" "),e("li",[t._v("在 dpr = 3 时，此时 1 物理像素等于 0.33 CSS 宽度像素，设计师其实想要的是 border: 0.333px")])]),t._v(" "),e("p",[t._v("解决方法：")]),t._v(" "),e("ul",[e("li",[t._v("渐变实现")]),t._v(" "),e("li",[t._v("使用缩放实现")]),t._v(" "),e("li",[t._v("使用图片实现(base64)")]),t._v(" "),e("li",[t._v("使用svg实现(嵌入background url)")])]),t._v(" "),e("p",[e("a",{attrs:{href:"https://codepen.io/Chokcoco/pen/XyNjqK",target:"_blank",rel:"noopener noreferrer"}},[t._v("Retina 屏幕下 1px 线的实现"),e("OutboundLink")],1)]),t._v(" "),e("h2",{attrs:{id:"图片适配及优化"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#图片适配及优化"}},[t._v("#")]),t._v(" 图片适配及优化")]),t._v(" "),e("p",[t._v("通常做法")]),t._v(" "),e("ol",[e("li",[t._v("消除多余的图像资源")]),t._v(" "),e("li",[t._v("尽可能利用 CSS3\\SVG 矢量图像替代某些光栅图像")]),t._v(" "),e("li",[t._v("谨慎使用字体图标，使用网页字体取代在图像中进行文本编码")]),t._v(" "),e("li",[t._v("选择正确的图片格式")]),t._v(" "),e("li",[t._v("为不同 DPR 屏幕提供最适合的图片尺寸")])]),t._v(" "),e("h3",{attrs:{id:"无脑多倍图"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#无脑多倍图"}},[t._v("#")]),t._v(" 无脑多倍图")]),t._v(" "),e("p",[t._v("不管设备dpr统一使用最高的3倍图，这样在dpr=1，dpr=2的设备上也能非常好的展示图片，但是会浪费大量带宽")]),t._v(" "),e("h3",{attrs:{id:"srcset-配合-1x-2x-像素密度描述符"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#srcset-配合-1x-2x-像素密度描述符"}},[t._v("#")]),t._v(" srcset 配合 1x 2x 像素密度描述符")]),t._v(" "),e("div",{staticClass:"language-html extra-class"},[e("pre",{pre:!0,attrs:{class:"language-html"}},[e("code",[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")]),t._v("illustration"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("img")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("src")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")]),t._v("illustration-small.png"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")])]),t._v("\n       "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("srcset")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")]),t._v("images/illustration-small.png 1x,\n               images/illustration-big.png 2x"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")])]),t._v("\n       "),e("span",{pre:!0,attrs:{class:"token style-attr"}},[e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("style")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")]),e("span",{pre:!0,attrs:{class:"token style language-css"}},[e("span",{pre:!0,attrs:{class:"token property"}},[t._v("max-width")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 500px")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")])])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),e("h3",{attrs:{id:"srcset-属性配合-sizes-属性-w-宽度描述符"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#srcset-属性配合-sizes-属性-w-宽度描述符"}},[t._v("#")]),t._v(" srcset 属性配合 sizes 属性 w 宽度描述符")]),t._v(" "),e("div",{staticClass:"language-html extra-class"},[e("pre",{pre:!0,attrs:{class:"language-html"}},[e("code",[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("img")]),t._v(" \n        "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("sizes")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),t._v(" “(min-width:")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("600px)")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("600px,")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v('300px"')]),t._v(" \n        "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("src")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("photo.png"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" \n        "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("srcset")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),t._v(" “photo@1x.png")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("300w,")]),t._v("\n                       "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("photo@2x.png")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("600w,")]),t._v("\n                       "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("photo@3x.png")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("1200w,")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),e("p",[t._v('sizes = “(min-width: 600px) 600px, 300px"的意思是，如果屏幕当前的 CSS 像素宽度大于或者等于 600px，则图片的 CSS 宽度为 600px，反之，则图片的 CSS 宽度为 300px。')]),t._v(" "),e("p",[e("strong",[t._v("srcset = “photo@1x.png 300w, photo@2x.png 600w, photo@3x.png 1200w")])]),t._v(" "),e("h4",{attrs:{id:"当前屏幕dpr-2-css宽度为375px-当屏幕dpr-3-css宽度为414px"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#当前屏幕dpr-2-css宽度为375px-当屏幕dpr-3-css宽度为414px"}},[t._v("#")]),t._v(" 当前屏幕dpr=2，css宽度为375px,当屏幕dpr=3，css宽度为414px")]),t._v(" "),e("p",[t._v("当前屏幕宽度为375px||414px，则图片css宽度为300px。分别用上述 3 个宽度描述符的数值除以 300。")]),t._v(" "),e("ol",[e("li",[t._v("300/300 = 1")]),t._v(" "),e("li",[t._v("600/300 = 2")]),t._v(" "),e("li",[t._v("1200/300 = 4")])]),t._v(" "),e("p",[t._v("上面计算得到的 1、 2、 4 即是算出的有效的像素密度，所以dpr=2会选择600w，而dpr=3则会选择1200w")]),t._v(" "),e("h4",{attrs:{id:"当前屏幕dpr-1-css宽度为1920px"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#当前屏幕dpr-1-css宽度为1920px"}},[t._v("#")]),t._v(" 当前屏幕dpr = 1，css宽度为1920px")]),t._v(" "),e("p",[t._v("则我们需要选择600px的图片，因为min-width为600，显然1920大于600，再次计算得：")]),t._v(" "),e("ol",[e("li",[t._v("300/600 = .5")]),t._v(" "),e("li",[t._v("600/600 = 1")]),t._v(" "),e("li",[t._v("1200/300 = 4")])]),t._v(" "),e("p",[t._v("所以dpr=1,会选择600w对应的图片")]),t._v(" "),e("p",[e("a",{attrs:{href:"https://codepen.io/Chokcoco/pen/WNeZvOX?editors=1100",target:"_blank",rel:"noopener noreferrer"}},[t._v("详细demo"),e("OutboundLink")],1),t._v(" "),e("a",{attrs:{href:"https://www.zhangxinxu.com/wordpress/2014/10/responsive-images-srcset-size-w-descriptor/",target:"_blank",rel:"noopener noreferrer"}},[t._v("响应式图片srcset全新释义sizes属性w描述符"),e("OutboundLink")],1),t._v(" "),e("a",{attrs:{href:"https://developers.google.com/web/fundamentals/design-and-ux/responsive/images",target:"_blank",rel:"noopener noreferrer"}},[t._v("Google Web Fundamentals -- Web Responsive Images"),e("OutboundLink")],1)]),t._v(" "),e("h2",{attrs:{id:"字体适配方案"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#字体适配方案"}},[t._v("#")]),t._v(" 字体适配方案")]),t._v(" "),e("p",[t._v("浏览器的最小字体限制：")]),t._v(" "),e("ul",[e("li",[t._v("pc: 12px")]),t._v(" "),e("li",[t._v("手机: 8px")])]),t._v(" "),e("blockquote",[e("p",[t._v("很多早期的文章规范都建议不要使用奇数级单位来定义字体大小(如13px、15px),容易在一些低端设备上造成字体模糊")])]),t._v(" "),e("h3",{attrs:{id:"字体的选择展示"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#字体的选择展示"}},[t._v("#")]),t._v(" 字体的选择展示")]),t._v(" "),e("p",[t._v("我们应该从性能和展示效果去考虑;一个完整的字体资源太大，我们应该尽量使用用户设备上的字体，而不是额外去下载字体资源")]),t._v(" "),e("h3",{attrs:{id:"兼顾各个操作系统"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#兼顾各个操作系统"}},[t._v("#")]),t._v(" 兼顾各个操作系统")]),t._v(" "),e("p",[t._v("以css-trick网站最新的font-family为例，看看他们是如何在字体选择上做到适配各个操作系统的")]),t._v(" "),e("div",{staticClass:"language-css extra-class"},[e("pre",{pre:!0,attrs:{class:"language-css"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v("font-family")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" \n    system-ui"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("-apple-system"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("BlinkMacSystemFont"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("segoe ui"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("Roboto"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    Helvetica"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("Arial"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    sans-serif"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("apple color emoji"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("segoe ui emoji"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("segoe ui symbol"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("h3",{attrs:{id:"font-family-关键字"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#font-family-关键字"}},[t._v("#")]),t._v(" font-family 关键字")]),t._v(" "),e("p",[t._v("对于 CSS 中的 font-family 而言，它有两类取值。")]),t._v(" "),e("ol",[e("li",[t._v("一类是类似这样的具体的"),e("strong",[t._v("字体族名")]),t._v("定义：font-family: Arial 这里定义了一个具体的字体样式，字体族名为 Arial;")]),t._v(" "),e("li",[t._v("一类是"),e("strong",[t._v("通用字体族名")]),t._v("，它是一种备选机制，用于在指定的字体不可用时给出较好的字体，类似这样：font-family: sans-serif 。")])]),t._v(" "),e("p",[t._v("关于"),e("strong",[t._v("通用字体族名")]),t._v("，在 "),e("a",{attrs:{href:"https://www.w3.org/TR/2018/REC-css-fonts-3-20180920/#generic-font-families",target:"_blank",rel:"noopener noreferrer"}},[t._v("CSS Fonts Module Level 3 -- Basic Font Properties"),e("OutboundLink")],1),t._v(" 中，定义了 5 个，也就是我们熟知的几个通用字体族名：")]),t._v(" "),e("ol",[e("li",[t._v("serif 衬线字体族")]),t._v(" "),e("li",[t._v("sans-serif 非衬线字体族")]),t._v(" "),e("li",[t._v("monospace 等宽字体，即字体中每个字宽度相同")]),t._v(" "),e("li",[t._v("cursive 草书字体")]),t._v(" "),e("li",[t._v("fantasy 主要是那些具有特殊艺术效果的字体")])]),t._v(" "),e("h3",{attrs:{id:"新增通用字体族关键字"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#新增通用字体族关键字"}},[t._v("#")]),t._v(" 新增通用字体族关键字")]),t._v(" "),e("p",[t._v("而在 "),e("a",{attrs:{href:"https://www.w3.org/TR/css-fonts-4/#generic-font-families",target:"_blank",rel:"noopener noreferrer"}},[t._v("CSS Fonts Module Level 4 -- Generic font families"),e("OutboundLink")],1),t._v(" 中，新增了几个关键字：")]),t._v(" "),e("ul",[e("li",[t._v("system-ui 系统默认字体")]),t._v(" "),e("li",[t._v("emoji 用于兼容 emoji 表情符号字符")]),t._v(" "),e("li",[t._v("math 适用于数学表达式")]),t._v(" "),e("li",[t._v("fangsong 此字体系列用于中文的（仿宋）字体。")])]),t._v(" "),e("h3",{attrs:{id:"system-ui"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#system-ui"}},[t._v("#")]),t._v(" system-ui")]),t._v(" "),e("p",[e("strong",[t._v("font-family:system-ui")]),t._v("目的就是在不同的操作系统的web页面下，自动选择本操作系统下的默认字体")]),t._v(" "),e("h3",{attrs:{id:"san-francisco-fonts"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#san-francisco-fonts"}},[t._v("#")]),t._v(" San Francisco Fonts")]),t._v(" "),e("p",[t._v("San Francisco Fonts 又叫旧金山字体，是一款西文字体。随着 iOS 9 更新面世，在 WatchOS 中随 Apple Watch 一起悄然发售，并且还将在 Apple TV 上的新 tvOS 中使用。"),e("br"),t._v("\nSan Francisco Fonts 在 iOS 系统上用于替代升级另外一款西文字体 Helvetica Neue。Apple 做了一些重要的改变，使其成为平台上更好的， 甚至是完美的西文字体。")]),t._v(" "),e("h3",{attrs:{id:"segoe-ui"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#segoe-ui"}},[t._v("#")]),t._v(" Segoe UI")]),t._v(" "),e("p",[t._v("Segoe UI 是 Windows 从 Vista 开始的默认西文字体族，只有西文，不支持汉字，属于无衬线体。")]),t._v(" "),e("h3",{attrs:{id:"roboto"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#roboto"}},[t._v("#")]),t._v(" Roboto")]),t._v(" "),e("p",[t._v("Roboto 是为 Android 操作系统设计的一个无衬线字体家族。Google 描述该字体为“现代的、但平易近人”和“有感情”的。")]),t._v(" "),e("h3",{attrs:{id:"总结"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[t._v("#")]),t._v(" 总结")]),t._v(" "),e("div",{staticClass:"language-css extra-class"},[e("pre",{pre:!0,attrs:{class:"language-css"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v("font-family")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" \n    system-ui"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("-apple-system"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("BlinkMacSystemFont"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("segoe ui"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("Roboto"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    Helvetica"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("Arial"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    sans-serif"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("apple color emoji"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("segoe ui emoji"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("segoe ui symbol"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("ul",[e("li",[t._v("system-ui，使用各个支持平台上的默认系统字体")]),t._v(" "),e("li",[t._v("-apple-system， 在一些稍低版本 Mac OS X 和 iOS 上，它针对旧版上的 Neue Helvetica 和 Lucida Grande 字体，升级使用更为合适的 San Francisco Fonts")]),t._v(" "),e("li",[t._v("BlinkMacSystemFont，针对一些 Mac OS X 上的 Chrome 浏览器，使用系统默认字体")]),t._v(" "),e("li",[t._v("segoe ui，在 Windows 及 Windows Phone 上选取系统默认字体")]),t._v(" "),e("li",[t._v("Roboto，面向 Android 和一些新版的的 Chrome OS")]),t._v(" "),e("li",[t._v("Helvetica,Arial，在针对不同操作系统不同平台设定采用默认系统字体后，针对一些低版本浏览器的降级方案")]),t._v(" "),e("li",[t._v("sans-serif，兜底方案，保证字体风格统一，至少也得是无衬线字体")])]),t._v(" "),e("h3",{attrs:{id:"前端布局的兼容适配"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#前端布局的兼容适配"}},[t._v("#")]),t._v(" 前端布局的兼容适配")]),t._v(" "),e("p",[t._v("历程： 表格布局 --\x3e 定位布局 --\x3e 浮动布局 --\x3e flexbox布局 --\x3e gridbox布局")]),t._v(" "),e("p",[t._v("flexbox最便捷的居中方式：")]),t._v(" "),e("div",{staticClass:"language-css extra-class"},[e("pre",{pre:!0,attrs:{class:"language-css"}},[e("code",[e("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".container")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v("display")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" flex"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".item")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v("margin")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" auto"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("h3",{attrs:{id:"css-grid-layout"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#css-grid-layout"}},[t._v("#")]),t._v(" CSS Grid Layout")]),t._v(" "),e("p",[t._v("flexbox 是一维布局，他只能在一条直线上放置你的内容区块；而grid是一个二维布局。它除了可以灵活的控制水平方向之外，还能轻易的控制垂直方向的布局模式。对于上图那样的九宫格布局，它就可以轻而易举的完成。")]),t._v(" "),e("img",{attrs:{src:a(455)}}),t._v(" "),e("blockquote",[e("p",[t._v("截取自"),e("a",{attrs:{href:"https://www.chenhuijing.com/slides/53-cssconfcn-2019/#/",target:"_blank",rel:"noopener noreferrer"}},[t._v("新时代CSS布局"),e("OutboundLink")],1)])])])}),[],!1,null,null,null);s.default=r.exports}}]);