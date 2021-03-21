---
title: WebServer配置安全
date: 2021-03-20 18:39:52
permalink: /pages/987aed/
categories:
tags:
  - 
---
### Web Server配置安全

web服务器安全，考虑的是应用部署时的智行环境安全。这个运行环境包括web server、脚本语言解析器、中间件等软件，这些软件所提供的一些配置参数，也可以起到安全保护作用。

### Apache安全

检查Apache的Module安装情况，根据”最小权限原则“，应该尽量减少不必要的module，对于使用的module，则检查其对应版本是否存在已知漏洞。需要注意的是，Apache以root身份或者admin身份运行是一件非常糟糕的决定。使用高权限身份运行Apache的结果是灾难性的，它会带来两个可怕的后果：  
1. 黑客入侵web成功时，将直接获得高权限的shell  
2. 应用程序本身想具备较高权限，出现bug时，可能会带来较高的风险，比如删除本地重要文件、杀死进程等不可预知的结果。  
Apache还提供了一些配置参数，可以用来优化服务器的性能，提高对抗DDOS攻击的能力。
```
Timeout
KeepAlive
LimmitRequestBody
LimitRequestFields
LimitReuqestLine
LimitXMLRequestBody
AcceptFilter
MaxRequestWorkers
```
--- 

### Nginx 安全

nginx拒绝服务漏洞、及时升级。  
jboss远程命令执行。由于jboss默认安装时会有一个管理后台，叫做JMX-console。默认按照将JMX-Console是没有任何认证的。因此处于安全防御的目的，在加固时，需要删除JMX-Console后台，如果业务需要不得不使用JMX-Console，则应该使用一个强壮的密码。

---

### Tomcat远程命令执行

删除tomcat manager

---

### HTTP Parameter Pollution

服务器对get post参数的处理

---