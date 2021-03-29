(window.webpackJsonp=window.webpackJsonp||[]).push([[100],{609:function(s,t,a){"use strict";a.r(t);var n=a(19),r=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("p",[s._v("怎样写出更好的css")]),s._v(" "),a("blockquote",[a("p",[s._v("参考"),a("a",{attrs:{href:"https://mp.weixin.qq.com/s/4QXqTvFd1YbsWL9DQfbdhg",target:"_blank",rel:"noopener noreferrer"}},[s._v("怎样才能写出更好的 CSS？"),a("OutboundLink")],1)])]),s._v(" "),a("p",[s._v("随着我们项目的进行，应用逐渐变大，css也越来越糟。如何写出更好的css，复用性强的样式，应有以下几点：")]),s._v(" "),a("h2",{attrs:{id:"scss"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#scss"}},[s._v("#")]),s._v(" SCSS")]),s._v(" "),a("ol",[a("li",[s._v("变量")])]),s._v(" "),a("p",[s._v("比如说我们制定一个特殊的蓝色，用于背景、图标和导航条等，有了变量，我们就不需要记住复杂的色号，并且有一天如果你想换一种蓝色，你只需要修改一处地方，而不需要处处修改。")]),s._v(" "),a("p",[s._v("例：")]),s._v(" "),a("div",{staticClass:"language-scss line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-scss"}},[a("code",[a("span",{pre:!0,attrs:{class:"token property"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$primary-color")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" #3296fa"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token property"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$default-font-color")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" #ffffff"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[s._v(".btn")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("background")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$primary-color")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("color")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$default-font-color")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("ol",{attrs:{start:"2"}},[a("li",[s._v("嵌套")])]),s._v(" "),a("div",{staticClass:"language-scss line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-scss"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[s._v("#container ")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token selector"}},[s._v("h5")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("font-size")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 1rem"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("ol",{attrs:{start:"3"}},[a("li",[s._v("分块和导入")])]),s._v(" "),a("p",[s._v("你可以通过下划线给文件命名，比如: _base.scss、_variables.scss等，scss可以通过你这种下划线的命名方式知道你指的是分块文件，至于导入则使用@import,")]),s._v(" "),a("p",[s._v("例:")]),s._v(" "),a("div",{staticClass:"language-scss line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-scss"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("@import")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"base"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[s._v("h1 ")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("font-size")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 1.2rem"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("h2",{attrs:{id:"组织css代码-bem方法论"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#组织css代码-bem方法论"}},[s._v("#")]),s._v(" 组织CSS代码：BEM方法论")]),s._v(" "),a("p",[s._v("我们常常不知道如何命名，但是命名是很重要的，如果没有恰当的命名，别人可能很难明白你在说什么。")]),s._v(" "),a("p",[s._v("BEM(Block Element Modifier)块元素修饰符是一种命名的约定，这种方法可以使我们的代码结构化，并提高模块化和可重用性。")]),s._v(" "),a("h3",{attrs:{id:"块"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#块"}},[s._v("#")]),s._v(" 块")]),s._v(" "),a("p",[s._v("把块视为组件，它有这本身的意义，比如说")]),s._v(" "),a("ul",[a("li",[s._v("命名：块名：.block")]),s._v(" "),a("li",[s._v("示例：.card .form .user-navigation")])]),s._v(" "),a("h3",{attrs:{id:"元素"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#元素"}},[s._v("#")]),s._v(" 元素")]),s._v(" "),a("p",[s._v("接下来，你应该如何用你的乐高积木建造一个窗口呢？可能有些积木看起来像框架，如果你把四个这样的积木组装起来，就会得到一个漂亮的窗户。这些就是我们的元素。它们是块的一部分，它们对于建块必不可少。但是，在块外面的时候，它们便无用武之地。")]),s._v(" "),a("ul",[a("li",[s._v("命名：块名+ __ +元素名：.block__element")]),s._v(" "),a("li",[s._v("示例：.form__author、.form__date、.form__text")])]),s._v(" "),a("h3",{attrs:{id:"修饰符"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#修饰符"}},[s._v("#")]),s._v(" 修饰符")]),s._v(" "),a("p",[s._v("现在窗户已经建好了，但是你可能想要一个绿色或一个小窗户。这些我们称之为修饰符。它们是块或元素上的标志，它们用于改变行为，外观等等。")]),s._v(" "),a("ul",[a("li",[s._v("命名：块名称或元素名称+ -- +修饰符名称：.block__element--修饰符，.块--修饰符")]),s._v(" "),a("li",[s._v("示例：.post--important，.post__btn--disabled")])]),s._v(" "),a("h3",{attrs:{id:"注意事项"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#注意事项"}},[s._v("#")]),s._v(" 注意事项")]),s._v(" "),a("ul",[a("li",[s._v("在使用 BEM 的时候，你可以用且只能用类来命名。不能用 ID，不能用标签。只能用类。")]),s._v(" "),a("li",[s._v("块和元素可以嵌入其他块和元素，但是它们必须是完全独立的。请记住：独立。所以如果你想将把一个按钮放在标题下的话，就不要在按钮上加边距，否则按钮就会与标题绑定。请改用工具类。")]),s._v(" "),a("li",[s._v("是的，你的 HTML 文件会超负荷，但是不用担心，与 BEM 带来的好处相比，这只是个小小的缺点。")])]),s._v(" "),a("h2",{attrs:{id:"组织css文件-7-1模式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#组织css文件-7-1模式"}},[s._v("#")]),s._v(" 组织CSS文件： 7-1模式")]),s._v(" "),a("p",[s._v("你必须遵守以下两条规则：")]),s._v(" "),a("ol",[a("li",[s._v("将所有内容分别写入7个不同的文件夹中")]),s._v(" "),a("li",[s._v("将他们全部导入位于跟级别的main.scss中")])]),s._v(" "),a("p",[s._v("7个文件：")]),s._v(" "),a("ul",[a("li",[s._v("base：你可以将所有的样板代码放入该文件夹中。每次开始一个新项目时，你需要写的所有css代码。排版规则、动画、工具程序等等。")]),s._v(" "),a("li",[s._v("components: 这里指组件，例如按钮、表单、滑块、弹出窗口等")]),s._v(" "),a("li",[s._v("layout：页面不同部分用到的布局，也就是说：页眉、页脚、导航、分区、你自己的网格等等。")]),s._v(" "),a("li",[s._v("pages：页面。有的页面可能有特定的样式，与通常的处理方式不同。那么你可以将它放入该文件夹。")]),s._v(" "),a("li",[s._v("themes：主题。如果你的应用中有不同的主题，那可以将它们放入该文件夹。")]),s._v(" "),a("li",[s._v("abstracts：抽象。你可以将所有函数和变量与混入(mixin)放在这里。")]),s._v(" "),a("li",[s._v("vendors：外部资源。例如，你可以放入Font Awesome文件、Bootstrap和其他类似的东西。")])]),s._v(" "),a("p",[s._v("引入主文件")]),s._v(" "),a("div",{staticClass:"language-scss line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-scss"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("@import")]),s._v(" abstracts/variables"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("@import")]),s._v(" abstracts/functions"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("@import")]),s._v(" base/reset"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("@import")]),s._v(" base/typography"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("@import")]),s._v(" base/utilities"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("@import")]),s._v(" components/button"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("@import")]),s._v(" components/form"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("@import")]),s._v(" components/user-navigation"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("@import")]),s._v(" layout/header"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("@import")]),s._v(" layout/footer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br")])]),a("p",[s._v("小项目vendors里的css，可以直接用link引入")]),s._v(" "),a("h2",{attrs:{id:"从scss到css"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#从scss到css"}},[s._v("#")]),s._v(" 从SCSS到CSS")]),s._v(" "),a("p",[s._v("安装node-scss,具体命令：")]),s._v(" "),a("div",{staticClass:"language-json line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  ...\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"scripts"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"watch"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"node-sass sass/main.scss css/style.css -w"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"build"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"node-sass sass/main.scss css/style.css --output-style compressed"')]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  ...\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])]),a("h2",{attrs:{id:"补充"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#补充"}},[s._v("#")]),s._v(" 补充")]),s._v(" "),a("p",[s._v("liveserver实现保存刷新"),a("br"),s._v("\npostcss实现自动补全前缀")])])}),[],!1,null,null,null);t.default=r.exports}}]);