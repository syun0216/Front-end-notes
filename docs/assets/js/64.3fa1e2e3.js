(window.webpackJsonp=window.webpackJsonp||[]).push([[64],{317:function(t,a,i){"use strict";i.r(a);var r=i(0),e=Object(r.a)({},(function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[i("h3",{attrs:{id:"点击劫持-（clickjacking）"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#点击劫持-（clickjacking）"}},[t._v("#")]),t._v(" 点击劫持 （ClickJacking）")]),t._v(" "),i("hr"),t._v(" "),i("p",[t._v("点击劫持是一种视觉上的欺骗手段。攻击者使用一个透明的、不可见的iframe，覆盖在一个网页上，然后诱使用户在该网页上进行操作，此时用将不知情的情况下点击透明的iframe页面。通过调整iframe的位置，可以诱使用户恰好点击在iframe页面的一些功能性按钮上。")]),t._v(" "),i("ol",[i("li",[t._v("Flash点击劫持")]),t._v(" "),i("li",[t._v("图片覆盖攻击")]),t._v(" "),i("li",[t._v("拖拽劫持与数据窃取")]),t._v(" "),i("li",[t._v("触屏劫持touchstart、touchend、touchmove、touchcancel")])]),t._v(" "),i("h3",{attrs:{id:"防御clickjacking"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#防御clickjacking"}},[t._v("#")]),t._v(" 防御ClickJacking")]),t._v(" "),i("hr"),t._v(" "),i("ol",[i("li",[t._v("frame busting禁止iframe嵌套")])]),t._v(" "),i("div",{staticClass:"language- extra-class"},[i("pre",{pre:!0,attrs:{class:"language-text"}},[i("code",[t._v("if(top.location =!= location){ top.location = self.location };\n")])])]),i("p",[t._v("详见p136页；但是frame busting存在一些缺陷。由于它使用javascript写的，控制能力并不是特别强，因此有很多方法可以绕开它。比如多个iframe嵌套，HTML5中iframe的sandbox属性、IE中的iframe的security属性等，都可以限制iframe页面的javascript执行。"),i("br"),t._v("\n2. X-Frame-Options（http头）"),i("br"),t._v("\n当值为"),i("strong",[t._v("DENY")]),t._v("时，浏览器会拒绝当前页面加载任何frame页面；若值为"),i("strong",[t._v("SAMEIRIGIN")]),t._v("，则允许加载同源域名下的页面；若为"),i("strong",[t._v("ALLOW-FROM")]),t._v("，则可以定义允许frame加载的页面地址。"),i("br"),t._v("\n除此之外，FireFox的“"),i("strong",[t._v("Content Security Policy")]),t._v("”以及FireFox的"),i("strong",[t._v("NoSript")]),t._v("扩展也能够有效防御ClickJacking，这些方案为我们提供了更多选择。")])])}),[],!1,null,null,null);a.default=e.exports}}]);