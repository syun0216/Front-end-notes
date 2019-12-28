### new操作符都做了什么

1. 创建一个空对象，并且this变量引用该对象 // let target = {}
2. 继承了函数的原型。 //target.proto = func.prototype
3. 属性和方法被加入到this引用对象中。并执行该函数func // func.call(target)
4. 新创建的对象由this所引用，并且最后隐式返回this // 如果func.call(target)返回的res是个对象或者function就返回他。

```js
function new(func) {
  let target = {};
  target.__proto__ = func.prototype;
  let res = func.call(target);
  if(typeof(res) == 'object' || typeof(res) == 'function') {
    return res;
  }
  return target;
}
```