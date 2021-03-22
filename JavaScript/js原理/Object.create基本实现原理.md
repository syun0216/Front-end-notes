---
title: create基本实现原理
date: 2021-03-20 18:39:52
permalink: /pages/46dbec/
categories:
  - js原理
tags:
  - JavaScript
---
```js
function create(obj) {
  function F() {};
  F.prototype = obj;
  return new F();
}
```