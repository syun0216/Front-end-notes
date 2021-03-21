---
title: http笔试
date: 2021-03-20 18:39:52
permalink: /pages/34aa02/
categories:
tags:
  - 
---
## http笔试

### 缓存

假设我们有一个HTML页面，如下：

```js
<!-- page.html -->
 <!DOCTYPE html>
 http://www.w3.org/1999/xhtml">
 <head>
     <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
     <title>page页</title>
 </head>
 <body>
     <img src="images/head.png" />
     <a href="page.html">重新访问page页</a>
 </body>
 </html>

```
加载此页面，会获取图片，图片请求返回的响应头为

```js
 HTTP/1.1 200 OK
 Cache-Control: no-cache
 Content-Type: image/png
 Last-Modified: Tue, 08 Nov 2016 06:59:00 GMT
 Accept-Ranges: bytes
 Date: Thu, 10 Nov 2016 02:48:50 GMT
 Content-Length: 3534
```
1. 当点击重新加载后，head.png如何二次加载?  
响应头no-cache表示可以缓存，但每次都要去服务器确认缓存资源的新鲜度  
2. 如将上述信息中的Cache-Control设置为private,将会怎样
响应头没有给到任何缓存策略，现在浏览器会有一个处理方法，当响应头没有任何缓存策略的时候有一套自己的处理机制，即 Expires = 当前时间(Date - Last-Modified) * 10%,简单理解就是响应头的Date时间与Last-Modified的时间差的十分之一作为缓存的过期时间。