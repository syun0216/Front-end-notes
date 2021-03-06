---
title: new操作符都做了什么
date: 2019-11-05 18:39:52
permalink: /pages/6cd659/
categories:
  - js原理
tags:
  - JavaScript
---
### new操作符都做了什么

1. 创建一个空对象，并且this变量引用该对象 // let target = {}
2. 继承了函数的原型。 //target.proto = func.prototype
3. 属性和方法被加入到this引用对象中。并执行该函数func // func.call(target)
4. 新创建的对象由this所引用，并且最后隐式返回this // 如果func.call(target)返回的res是个对象或者function就返回他。

```js
function new(func) {
  let target = {};
  let args = [].slice.call(arguments, 1) // 获取除第一个参数意外的参数
  target.__proto__ = func.prototype;
  let res = func.apply(target, args); // 得到函数执行的结果
  if((typeof(res) == 'object' && res !== null) || typeof(res) == 'function') {
    // 如果为object(*排除null情况) 或者是function 则将结果返回
    return res;
  }
  return target;
}
```
