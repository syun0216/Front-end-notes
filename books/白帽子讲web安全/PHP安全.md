### 文件包含漏洞

```
php ：include(),include_once(),require(),require_once(),fopen(),readfile()
jsp/servlet: ava.io.File(),java.io.FileReader()
asp: include file,include virtual
```
当使用这4个函数包含一个新文件时，该文件将作为PHP代码执行，PHP内核并不会在意该被包含的文件是什么类型。

---

### 本地文件包含

要解决文件包含漏洞，应该尽量避免包含动态变量，尤其是用户可以控制的变量

---

### 远程文件包含

如果PHP的配置选项allow_uri_include为ON的话，则include/require函数是可以远程加载文件的，这种漏洞被称为远程文件包含漏洞(Remote File Inclusion) 简称RFI

---

### 本地文件包含的利用技巧

远程文件包含漏洞之所以能够执行命令，就是因为攻击者能够自定义被包含的文件内容。因此本地文件包含漏洞想要执行命令，也需要找到一个攻击者能够控制内容的本地文件。以下是本地文件包含后执行PHP代码：  
1. 包含用户上传的文件
2. 包含data://或php://input等伪协议allow_uri_include需要设置ON
3. 包含session文件
4. 包含日志文件，比如web server的access log
5. 包含/proc/self/environ文件
6. 包含上传临时文件，比如数据库文件、缓存文件、应用日志等

---

### 全局变量覆盖

PHP中，register_globals为ON时尤其严重。用户可注入覆盖全局变量。

#### extract()变量覆盖
```
int extract(array $var_array [,int $extract_type [,string $prefix]])
```
其中第二个参数指定函数将变量导入符号表时的行为，最常见的两个值是EXTR_OVERWRITE HE  EXTR_SKIP
当值为EXTR_OVERWRITE时，在变量导入符号表的过程中，如果变量名发生冲突，则覆盖已有变量。EXTR_SKIP则表示跳过不覆盖。默认使用EXTR_OVERWRITE。

#### 遍历初始化变量

#### import_request_variables变量覆盖

#### parse_str变量覆盖

parse_str函数往往被用于解析url的query string，但是当参数数值能被用户控制时，很可能导致变量覆盖。
以下是安全建议：  
1. 首先，确保register_globals=OFF.若不能自定义php.ini,则应该在代码中控制。
2. 其次，熟悉可能造成变量覆盖的函数和方法，检查用户能否控制变量来源
3. 最后养成初始化变量的好习惯

---

### 代码执行漏洞

eval函数

---

### 定制安全的php环境

php.ini中一些安全相关参数配置  
1. register_globals = OFF 
2. open_basedir 可以限制PHP只能操作指定目录下的文件
3. allow_url_include为了对抗远程文件包含，请关闭此选项，一般应用也用不到此选项。
4. allow_url_fopen
5. display_errors 正式环境关闭
6. log_errors 正式环境下用这个
7. magic_quotes_gpc = OFF 
8. cgi.fix_pathinfo = 0
9. session.cookie_httponly = 1 禁止javascript操作cookie
10. session.cookie_secure = 1 ; 全站是https
11. safe_mode