---
title: 跨站点请求伪造(CSRF)
date: 2020-03-27 18:39:52
permalink: /pages/5ea602/
categories:
  - 书籍
tags:
  - web安全
---
### CSRF进阶
---
1. 浏览器的cookie策略：浏览器的cookie分为两种：Session Cookie（临时，浏览器关闭后消失），Third-party Cookie 本地cookie（Expire time到期消失）。如果浏览器从一个域的页面中，要加载另外一个域的资源，浏览器会阻止Third-party Cookie的发送。
2. P3P头的副作用（The Platform for Privacy Preferences）是W3C自定的一项关于隐私的标准
3. Flash CSRF
4. CSRF Worm

### CSRF防御
---
1. 验证码：是被认为对抗CSRF最简洁有效的方法
2. Reference Check在互联网中最常见的应用就是"防止图片盗链"。同理，Reference Check也可以被用于检查请求是否来自合法的源。Reference Check的缺陷在于服务器并非什么时候都能取得到Referer。但是通过Reference Check来监控CSRF攻击的发生，倒是一种可行的方法。
3. Anti CSRF Token: CSRF 为什么能够攻击成功？本质原因是重要操作的所有参数都可以被攻击者猜测到。token要足够随机，必须使用足够安全的随机数生成算法。

### TOKEN的使用原则
---
1. 防御CSRF的token根据不可预测性原则设计方案，所以一定要随机，此外这个token的目的不是为了防止重复提交。所以为了使用方便，可以允许一个用户的有效生命周期内，在token消耗掉前都使用同一个token，使用后则生成一个新的token