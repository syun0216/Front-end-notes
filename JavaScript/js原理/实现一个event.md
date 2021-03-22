---
title: 实现一个event
date: 2019-11-05 18:39:52
permalink: /pages/2c3bf4/
categories:
  - js原理
tags:
  - JavaScript
---
## 如何实现一个Event

### Vue中组件通信
- 父子组件用props
- 非父子组件用EventBus
- vuex

### React中的组件通信

- 父子组件,父->子直接用Props,子->父用callback回调
- 非父子组件,用发布订阅模式的Event模块
- Redux、Mobx
- Context api

## 基本构造

### 初始化class

我们利用ES6的class关键字对Event进行初始化，包括Event时间清单和监听者上限。使用Map来进行存储。

```js
class EventEmeitter {
  constructor() {
    this._events = this._events || new Map(); // 储存事件/回调键值对
    this._maxListeners = this._maxListeners || 10; // 设立监听上限
  }
}
```

### 监听与触发

参数少时使用call， 参数多时使用apply

```js
// 触发名为type的事件
EventEmeitter.prototype.emit = function(type, ...args) {
  let handler;
  //从储存事件键值对的this._events中获取对应事件回调函数
  handler = this._events.get(type);
  if(args.length > 0) {
    handler.apply(this, args);
  }else {
    handler.call(this);
  }
  return true;
}

//监听名为type的事件
EventEmeitter.prototype.addListener = function(type, fn) {
  //将type时间以及对应的fn函数放入this._events中存储
  if(!this._events.get(type)) {
    this._events.set(type, fn)
  }
}
```

我们实现了触发事件的emit方法和监听事件的addListener方法,至此我们就可以进行简单的实践了.

```js
// 实例化
const emitter = new EventEmeitter();

// 监听一个名为arson的事件对应一个回调函数
emitter.addListener('arson', man => {
  console.log(`expel ${man}`);
});

// 我们触发arson事件,发现回调成功执行
emitter.emit('arson', 'low-end'); // expel low-end
```

### 监听多个事件

addListener时判断存入数组里

```js
EventEmeitter.prototype.emit = function(type, ...args) {
  let handler;
  handler = this._event.get(type);
  if (Array.isArray(handler)) {
    // 如果是一个数组说明有多个监听者,需要依次此触发里面的函数
    for (let i = 0; i < handler.length; i++) {
      if (args.length > 0) {
        handler[i].apply(this, args);
      } else {
        handler[i].call(this);
      }
    }
  } else { // 单个函数的情况我们直接触发即可
    if (args.length > 0) {
      handler.apply(this, args);
    } else {
      handler.call(this);
    }
  }

  return true;
}

// 监听名为type的事件
EventEmeitter.prototype.addListener = function(type, fn) {
  const handler = this._events.get(type); // 获取对应事件名称的函数清单
  if (!handler) {
    this._events.set(type, fn);
  } else if (handler && typeof handler === 'function') {
    // 如果handler是函数说明只有一个监听者
    this._events.set(type, [handler, fn]); // 多个监听者我们需要用数组储存
  } else {
    handler.push(fn); // 已经有多个监听者,那么直接往数组里push函数即可
  }
};

EventEmeitter.prototype.removeListener = function(type, fn) {
  const handler = this._events.get(type); // 获取对应事件名称的函数清单

  // 如果是函数,说明只被监听了一次
  if (handler && typeof handler === 'function') {
    this._events.delete(type, fn);
  } else {
    let postion;
    // 如果handler是数组,说明被监听多次要找到对应的函数
    for (let i = 0; i < handler.length; i++) {
      if (handler[i] === fn) {
        postion = i;
      } else {
        postion = -1;
      }
    }
    // 如果找到匹配的函数,从数组中清除
    if (postion !== -1) {
      // 找到数组对应的位置,直接清除此回调
      handler.splice(postion, 1);
      // 如果清除后只有一个函数,那么取消数组,以函数形式保存
      if (handler.length === 1) {
        this._events.set(type, handler[0]);
      }
    } else {
      return this;
    }
  }
};

```

## 参考

[https://github.com/xiaomuzhu/front-end-interview/blob/master/docs/guide/event.md](https://github.com/xiaomuzhu/front-end-interview/blob/master/docs/guide/event.md)
[https://github.com/Gozala/events/blob/master/events.js](https://github.com/Gozala/events/blob/master/events.js)