---
title: 简单实现bind、apply和call
date: 2019-11-05 18:39:52
permalink: /pages/1b56f1/
categories:
  - js原理
tags:
  - JavaScript
---
### bind

```js
Function.prototype.bind2 = function(context) {
  var _this = this;
  var argsParent = Array.prototype.slice.call(arguments, 1);
  return function() {
    var args = argsParent.concat(Array.prototype.slice.call(arguments));
    _this.apply(context,args);
  }
}
```

> 参考 [面试官问：能否模拟实现JS的bind方法](https://juejin.im/post/5bec4183f265da616b1044d7)

### apply

```js
Function.prototype.apply2 = function(context, arr) {
    var context = context || window;//因为传进来的context有可能是null
    context.fn = this;
    var args = [];
    var params = arr || [];
    for(var i = 0;i<params.length;i++) {
        args.push("params[" + i + "]"); //不这么做的话 字符串的引号会被自动去掉 变成了变量 导致报错
    }
    args = args.join(",");
   var result = eval("context.fn(" + args + ")"); //相当于执行了context.fn(arguments[1], arguments[2]);
   delete context.fn;
   return result; //因为有可能this函数会有返回值return 
}
```


### call

```js
Function.prototype.call2 = function(context) {
    var context = context || window; // 传进来的context有可能是空
    context.fn = this;
    var args = [];
    for (var i = 1; i < arguments.length; i++) { 
        args.push("arguments[" + i + "]"); //不这么做的话 字符串的引号会被自动去掉 变成了变量 导致报错 
    } 
    args = args.join(",");
    var result = eval("context.fn(" + args + ")"); //相当于执行了context.fn(arguments[1], arguments[2]); 
   delete context.fn; 
   return result; //因为有可能this函数会有返回值return
}
```