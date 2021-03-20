(window.webpackJsonp=window.webpackJsonp||[]).push([[68],{581:function(a,r,e){"use strict";e.r(r);var t=e(45),_=Object(t.a)({},(function(){var a=this,r=a.$createElement,e=a._self._c||r;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h3",{attrs:{id:"文件包含漏洞"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#文件包含漏洞"}},[a._v("#")]),a._v(" 文件包含漏洞")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("php ：include(),include_once(),require(),require_once(),fopen(),readfile()\njsp/servlet: ava.io.File(),java.io.FileReader()\nasp: include file,include virtual\n")])])]),e("p",[a._v("当使用这4个函数包含一个新文件时，该文件将作为PHP代码执行，PHP内核并不会在意该被包含的文件是什么类型。")]),a._v(" "),e("hr"),a._v(" "),e("h3",{attrs:{id:"本地文件包含"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#本地文件包含"}},[a._v("#")]),a._v(" 本地文件包含")]),a._v(" "),e("p",[a._v("要解决文件包含漏洞，应该尽量避免包含动态变量，尤其是用户可以控制的变量")]),a._v(" "),e("hr"),a._v(" "),e("h3",{attrs:{id:"远程文件包含"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#远程文件包含"}},[a._v("#")]),a._v(" 远程文件包含")]),a._v(" "),e("p",[a._v("如果PHP的配置选项allow_uri_include为ON的话，则include/require函数是可以远程加载文件的，这种漏洞被称为远程文件包含漏洞(Remote File Inclusion) 简称RFI")]),a._v(" "),e("hr"),a._v(" "),e("h3",{attrs:{id:"本地文件包含的利用技巧"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#本地文件包含的利用技巧"}},[a._v("#")]),a._v(" 本地文件包含的利用技巧")]),a._v(" "),e("p",[a._v("远程文件包含漏洞之所以能够执行命令，就是因为攻击者能够自定义被包含的文件内容。因此本地文件包含漏洞想要执行命令，也需要找到一个攻击者能够控制内容的本地文件。以下是本地文件包含后执行PHP代码：")]),a._v(" "),e("ol",[e("li",[a._v("包含用户上传的文件")]),a._v(" "),e("li",[a._v("包含data://或php://input等伪协议allow_uri_include需要设置ON")]),a._v(" "),e("li",[a._v("包含session文件")]),a._v(" "),e("li",[a._v("包含日志文件，比如web server的access log")]),a._v(" "),e("li",[a._v("包含/proc/self/environ文件")]),a._v(" "),e("li",[a._v("包含上传临时文件，比如数据库文件、缓存文件、应用日志等")])]),a._v(" "),e("hr"),a._v(" "),e("h3",{attrs:{id:"全局变量覆盖"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#全局变量覆盖"}},[a._v("#")]),a._v(" 全局变量覆盖")]),a._v(" "),e("p",[a._v("PHP中，register_globals为ON时尤其严重。用户可注入覆盖全局变量。")]),a._v(" "),e("h4",{attrs:{id:"extract-变量覆盖"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#extract-变量覆盖"}},[a._v("#")]),a._v(" extract()变量覆盖")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("int extract(array $var_array [,int $extract_type [,string $prefix]])\n")])])]),e("p",[a._v("其中第二个参数指定函数将变量导入符号表时的行为，最常见的两个值是EXTR_OVERWRITE HE  EXTR_SKIP\n当值为EXTR_OVERWRITE时，在变量导入符号表的过程中，如果变量名发生冲突，则覆盖已有变量。EXTR_SKIP则表示跳过不覆盖。默认使用EXTR_OVERWRITE。")]),a._v(" "),e("h4",{attrs:{id:"遍历初始化变量"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#遍历初始化变量"}},[a._v("#")]),a._v(" 遍历初始化变量")]),a._v(" "),e("h4",{attrs:{id:"import-request-variables变量覆盖"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#import-request-variables变量覆盖"}},[a._v("#")]),a._v(" import_request_variables变量覆盖")]),a._v(" "),e("h4",{attrs:{id:"parse-str变量覆盖"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#parse-str变量覆盖"}},[a._v("#")]),a._v(" parse_str变量覆盖")]),a._v(" "),e("p",[a._v("parse_str函数往往被用于解析url的query string，但是当参数数值能被用户控制时，很可能导致变量覆盖。\n以下是安全建议：")]),a._v(" "),e("ol",[e("li",[a._v("首先，确保register_globals=OFF.若不能自定义php.ini,则应该在代码中控制。")]),a._v(" "),e("li",[a._v("其次，熟悉可能造成变量覆盖的函数和方法，检查用户能否控制变量来源")]),a._v(" "),e("li",[a._v("最后养成初始化变量的好习惯")])]),a._v(" "),e("hr"),a._v(" "),e("h3",{attrs:{id:"代码执行漏洞"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#代码执行漏洞"}},[a._v("#")]),a._v(" 代码执行漏洞")]),a._v(" "),e("p",[a._v("eval函数")]),a._v(" "),e("hr"),a._v(" "),e("h3",{attrs:{id:"定制安全的php环境"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#定制安全的php环境"}},[a._v("#")]),a._v(" 定制安全的php环境")]),a._v(" "),e("p",[a._v("php.ini中一些安全相关参数配置")]),a._v(" "),e("ol",[e("li",[a._v("register_globals = OFF")]),a._v(" "),e("li",[a._v("open_basedir 可以限制PHP只能操作指定目录下的文件")]),a._v(" "),e("li",[a._v("allow_url_include为了对抗远程文件包含，请关闭此选项，一般应用也用不到此选项。")]),a._v(" "),e("li",[a._v("allow_url_fopen")]),a._v(" "),e("li",[a._v("display_errors 正式环境关闭")]),a._v(" "),e("li",[a._v("log_errors 正式环境下用这个")]),a._v(" "),e("li",[a._v("magic_quotes_gpc = OFF")]),a._v(" "),e("li",[a._v("cgi.fix_pathinfo = 0")]),a._v(" "),e("li",[a._v("session.cookie_httponly = 1 禁止javascript操作cookie")]),a._v(" "),e("li",[a._v("session.cookie_secure = 1 ; 全站是https")]),a._v(" "),e("li",[a._v("safe_mode")])])])}),[],!1,null,null,null);r.default=_.exports}}]);