(window.webpackJsonp=window.webpackJsonp||[]).push([[75],{580:function(e,t,a){"use strict";a.r(t);var s=a(19),r=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h3",{attrs:{id:"web-server配置安全"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#web-server配置安全"}},[e._v("#")]),e._v(" Web Server配置安全")]),e._v(" "),a("p",[e._v("web服务器安全，考虑的是应用部署时的智行环境安全。这个运行环境包括web server、脚本语言解析器、中间件等软件，这些软件所提供的一些配置参数，也可以起到安全保护作用。")]),e._v(" "),a("h3",{attrs:{id:"apache安全"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#apache安全"}},[e._v("#")]),e._v(" Apache安全")]),e._v(" "),a("p",[e._v("检查Apache的Module安装情况，根据”最小权限原则“，应该尽量减少不必要的module，对于使用的module，则检查其对应版本是否存在已知漏洞。需要注意的是，Apache以root身份或者admin身份运行是一件非常糟糕的决定。使用高权限身份运行Apache的结果是灾难性的，它会带来两个可怕的后果：")]),e._v(" "),a("ol",[a("li",[e._v("黑客入侵web成功时，将直接获得高权限的shell")]),e._v(" "),a("li",[e._v("应用程序本身想具备较高权限，出现bug时，可能会带来较高的风险，比如删除本地重要文件、杀死进程等不可预知的结果。"),a("br"),e._v("\nApache还提供了一些配置参数，可以用来优化服务器的性能，提高对抗DDOS攻击的能力。")])]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("Timeout\nKeepAlive\nLimmitRequestBody\nLimitRequestFields\nLimitReuqestLine\nLimitXMLRequestBody\nAcceptFilter\nMaxRequestWorkers\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br"),a("span",{staticClass:"line-number"},[e._v("8")]),a("br")])]),a("hr"),e._v(" "),a("h3",{attrs:{id:"nginx-安全"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#nginx-安全"}},[e._v("#")]),e._v(" Nginx 安全")]),e._v(" "),a("p",[e._v("nginx拒绝服务漏洞、及时升级。"),a("br"),e._v("\njboss远程命令执行。由于jboss默认安装时会有一个管理后台，叫做JMX-console。默认按照将JMX-Console是没有任何认证的。因此处于安全防御的目的，在加固时，需要删除JMX-Console后台，如果业务需要不得不使用JMX-Console，则应该使用一个强壮的密码。")]),e._v(" "),a("hr"),e._v(" "),a("h3",{attrs:{id:"tomcat远程命令执行"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tomcat远程命令执行"}},[e._v("#")]),e._v(" Tomcat远程命令执行")]),e._v(" "),a("p",[e._v("删除tomcat manager")]),e._v(" "),a("hr"),e._v(" "),a("h3",{attrs:{id:"http-parameter-pollution"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#http-parameter-pollution"}},[e._v("#")]),e._v(" HTTP Parameter Pollution")]),e._v(" "),a("p",[e._v("服务器对get post参数的处理")]),e._v(" "),a("hr")])}),[],!1,null,null,null);t.default=r.exports}}]);