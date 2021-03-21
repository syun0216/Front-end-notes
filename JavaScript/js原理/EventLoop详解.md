---
title: EventLoop详解
date: 2021-03-20 18:39:52
permalink: /pages/c49367/
categories:
tags:
  - 
---
## Event Loop详解

Event loop 即时间循环，是指浏览器或Node的解决JavaScript单线程运行时不会阻塞的一直机制，也就是我们经常使用异步的原理。

## 栈、队列的基本概念

![](https://cdn.nlark.com/yuque/0/2019/webp/128853/1560995437042-9d683636-9bf5-45fb-8cf3-e482b94a707d.webp#align=left&display=inline&height=271&originHeight=271&originWidth=294&size=0&status=done&width=294)

## 栈（stack）

栈在计算机科学中是限定仅在**表尾**进行插入或者删除操作的线性表。**栈**是一种数据结构，按照后进先出的原则存储数据，先进入的数据被压在栈底，需要读数据的时候从栈顶开始弹出数据。栈是只能某一端插入和删除的特殊线性表。

![](https://cdn.nlark.com/yuque/0/2019/webp/128853/1560995436902-6dcf8420-be5b-4dd9-9fb6-43e567e53c86.webp#align=left&display=inline&height=282&originHeight=282&originWidth=616&size=0&status=done&width=616)

## 队列（Queue）

只允许在表的前端进行删除，而在表的后端进行插入操作，和栈一样，队列是一种操作受限制的线性表。
- 队尾：进行插入操作
- 队头：进行删除操作
- 空队列：队列中没有数据
- 队列元素：队列中的数据元素

遵循规则为先进先出（FIFO - first in first out）

![](https://cdn.nlark.com/yuque/0/2019/webp/128853/1560995436932-57cb6ee5-763a-47b2-a0be-4174c4fd1c66.webp#align=left&display=inline&height=270&originHeight=270&originWidth=554&size=0&status=done&width=554)

## Event Loop

在js中，任务分两种，一种叫宏任务(MacroTask、Task)、一种叫微任务(MicroTack);

### MacroTask

script内全部代码、setTimeout、setInterval、setImmediate(ie 10)、I/O、UI Rendering.

### MicroTask

Process.nextTick(Node)、Promise、Object.observe(废弃)、MutationObserver

### 浏览器中的Event Loop

js有一个main thread主线程和callstack执行栈，所有任务都会被放到执行栈中等待主线程执行。

### js调用栈

hs调用栈采用的是后进先出的规则，当函数执行的时候，会被添加到栈的顶部，当执行栈执行完后，就会从栈顶移出，知道栈内被清空。

### 同步任务和异步任务

js单线程任务被氛围同步任务和异步任务，同步任务会在调用栈中按照顺序等待主线程一次执行，异步任务会在异步任务有了结果后，将注册的回调函数放到任务队列中等待主线程空闲的时候（调用栈被清空），被读取到栈内等待主线程的执行。

![](https://cdn.nlark.com/yuque/0/2019/webp/128853/1560995436925-9ac8fb38-4dfd-4d12-b5fe-c564ede43f80.webp#align=left&display=inline&height=518&originHeight=518&originWidth=636&size=0&status=done&width=636)

任务队列Task Queue是一种先进先出的数据结构

![](https://cdn.nlark.com/yuque/0/2019/webp/128853/1560995437021-43545b5b-0a48-475a-a8a6-cce80433fe1a.webp#align=left&display=inline&height=669&originHeight=669&originWidth=800&size=0&status=done&width=800)

### 时间循环的进程模型

- 选择任务队列中最先进入的任务，当任务队列为空，则执行微任务
- 时间循环中的任务设置为已选择任务
- 执行任务
- 将事件循环中的当前运行任务设置为null
- 将已经完成的任务从任务队列中删除
- microtasks步骤：进入microtask检查点
- 更新界面渲染
- 返回第一步

### 执行microtasks时有以下步骤：

- 设置microtask检查点标志为true
- 当时间循环microtask执行不为空时，选择一个最先进入的microtask队列的microtask，将时间循环的microtask设置为已选择的microtask，运行microtask，将已经执行完成的microtask设为null，移出microtask中的microtask
- 清理indexDB事务
- 是指检查点为true

![](https://cdn.nlark.com/yuque/0/2019/gif/128853/1560995436931-71f56a41-54d3-49f3-a382-c1e6acbf301e.gif#align=left&display=inline&height=589&originHeight=589&originWidth=1011&size=0&status=done&width=1011)

执行栈在执行完**同步任务**后，查看执行栈是否为空，如果执行栈为空，就会去检查**微任务**(microTask)队列是否为空，如果为空的话，就执行Task（宏任务），否则就一次性执行完所有微任务。
每次单个宏任务执行完毕后，检查**微任务**(microTask)队列是否为空，如果不为空的话，会按照**先入先出**的规则全部执行完微任务(microTask)后，设置微任务(microTask)队列为null，然后再执行**宏任务**，如此循环。

## 例子

```js
console.log('script start');
setTimeout(function() {
  console.log('setTimeout');
}, 0);

Promise.resolve().then(function() {
  console.log('promise1');
}).then(function() {
  console.log('promise2');
})
console.log('script end');
```

[Tasks, microtasks, queues and schedules](https://link.juejin.im/?target=https%3A%2F%2Fjakearchibald.com%2F2015%2Ftasks-microtasks-queues-and-schedules%2F)<br />或许这张图也更好理解些。<br />![](https://cdn.nlark.com/yuque/0/2019/gif/128853/1560995436968-c6ff2732-4b20-49d4-852f-8c298eeb0d2e.gif#align=left&display=inline&height=341&originHeight=341&originWidth=611&size=0&status=done&width=611)

## 例子2

```js
console.log('script start')
async function async1() {
  await async2()
  console.log('async1 end')
}
async function async2() {
  console.log('async2 end') 
}
async1()
setTimeout(function() {
  console.log('setTimeout')
}, 0)
new Promise(resolve => {
  console.log('Promise')
  resolve()
})
  .then(function() {
    console.log('promise1')
  })
  .then(function() {
    console.log('promise2')
  })
console.log('script end')
```

### **详细过程：**
**73以下版本**

- 首先，打印`script start`，调用`async1()`时，返回一个`Promise`，所以打印出来`async2 end`。
- 每个 `await`，会新产生一个`promise`,但这个过程本身是异步的，所以该`await`后面不会立即调用。
- 继续执行同步代码，打印`Promise`和`script end`，将`then`函数放入**微任务**队列中等待执行。
- 同步执行完成之后，检查**微任务**队列是否为`null`，然后按照先入先出规则，依次执行。
- 然后先执行打印`promise1`,此时`then`的回调函数返回`undefinde`，此时又有`then`的链式调用，又放入**微任务**队列中，再次打印`promise2`。
- 再回到`await`的位置执行返回的 `Promise` 的 `resolve` 函数，这又会把 `resolve` 丢到微任务队列中，打印`async1 end`。
- 当**微任务**队列为空时，执行宏任务,打印`setTimeout`。

**谷歌（金丝雀73版本）**

- 如果传递给 `await` 的值已经是一个 `Promise`，那么这种优化避免了再次创建 `Promise` 包装器，在这种情况下，我们从最少三个 `microtick` 到只有一个 `microtick`。
- 引擎不再需要为 `await` 创造 `throwaway Promise` - 在绝大部分时间。
- 现在 `promise` 指向了同一个 `Promise`，所以这个步骤什么也不需要做。然后引擎继续像以前一样，创建 `throwaway Promise`，安排 `PromiseReactionJob` 在 `microtask` 队列的下一个 `tick` 上恢复异步函数，暂停执行该函数，然后返回给调用者。

详情查看（[这里](https://link.juejin.im/?target=https%3A%2F%2Fv8.js.cn%2Fblog%2Ffast-async%2F)）

## NodeJS的Event Loop
![](https://cdn.nlark.com/yuque/0/2019/webp/128853/1560995436966-ae34b24c-83d0-4472-8854-1552abd9fcdb.webp#align=left&display=inline&height=223&originHeight=223&originWidth=543&size=0&status=done&width=543)<br />`Node`中的`Event Loop`是基于`libuv`实现的，而`libuv`是 `Node` 的新跨平台抽象层，libuv使用异步，事件驱动的编程方式，核心是提供`i/o`的事件循环和异步回调。libuv的`API`包含有时间，非阻塞的网络，异步文件操作，子进程等等。 `Event Loop`就是在`libuv`中实现的。<br />![](https://cdn.nlark.com/yuque/0/2019/webp/128853/1560995436946-e5bcfbd1-340e-4c68-a14e-cd000081eef4.webp#align=left&display=inline&height=442&originHeight=442&originWidth=745&size=0&status=done&width=745)
<a name="4clmy"></a>
### `Node`的`Event loop`一共分为6个阶段，每个细节具体如下：

- `timers`: 执行`setTimeout`和`setInterval`中到期的`callback`。
- `pending callback`: 上一轮循环中少数的`callback`会放在这一阶段执行。
- `idle, prepare`: 仅在内部使用。
- `poll`: 最重要的阶段，执行`pending callback`，在适当的情况下回阻塞在这个阶段。
- `check`: 执行`setImmediate`(`setImmediate()`是将事件插入到事件队列尾部，主线程和事件队列的函数执行完成之后立即执行`setImmediate`指定的回调函数)的`callback`。
- `close callbacks`: 执行`close`事件的`callback`，例如`socket.on('close'[,fn])`或者`http.server.on('close, fn)`。

具体细节如下：
<a name="qYgPm"></a>
### timers
执行`setTimeout`和`setInterval`中到期的`callback`，执行这两者回调需要设置一个毫秒数，理论上来说，应该是时间一到就立即执行callback回调，但是由于`system`的调度可能会延时，达不到预期时间。<br />以下是官网文档解释的例子：

```js
const fs = require('fs');
function someAsyncOperation(callback) {
  // Assume this takes 95ms to complete
  fs.readFile('/path/to/file', callback);
}
const timeoutScheduled = Date.now();
setTimeout(() => {
  const delay = Date.now() - timeoutScheduled;
  console.log(`${delay}ms have passed since I was scheduled`);
}, 100);
// do someAsyncOperation which takes 95 ms to complete
someAsyncOperation(() => {
  const startCallback = Date.now();
  // do something that will take 10ms...
  while (Date.now() - startCallback < 10) {
    // do nothing
  }
});

```
当进入事件循环时，它有一个空队列（`fs.readFile()`尚未完成），因此定时器将等待剩余毫秒数，当到达95ms时，`fs.readFile()`完成读取文件并且其完成需要10毫秒的回调被添加到轮询队列并执行。<br />当回调结束时，队列中不再有回调，因此事件循环将看到已达到最快定时器的**阈值**，然后回到**timers阶段**以执行定时器的回调。<br />在此示例中，您将看到正在调度的计时器与正在执行的回调之间的总延迟将为105毫秒。<br />**以下是我测试时间：**<br />![](https://cdn.nlark.com/yuque/0/2019/webp/128853/1560995436982-2f817b92-3c4a-4d4c-8f95-92f63efa336c.webp#align=left&display=inline&height=430&originHeight=430&originWidth=724&size=0&status=done&width=724)
<a name="sLxqs"></a>
### pending callbacks
此阶段执行某些系统操作（例如TCP错误类型）的回调。 例如，如果`TCP socket ECONNREFUSED`在尝试connect时receives，则某些* nix系统希望等待报告错误。 这将在`pending callbacks`阶段执行。
<a name="3rwhp"></a>
### poll
**该poll阶段有两个主要功能：**

- 执行`I/O`回调。
- 处理轮询队列中的事件。

**当事件循环进入`poll`阶段并且在`timers`中没有可以执行定时器时，将发生以下两种情况之一**

- 如果`poll`队列不为空，则事件循环将遍历其同步执行它们的`callback`队列，直到队列为空，或者达到`system-dependent`（系统相关限制）。

**如果`poll`队列为空，则会发生以下两种情况之一**

- 如果有`setImmediate()`回调需要执行，则会立即停止执行`poll`阶段并进入执行`check`阶段以执行回调。<br />
- 如果没有`setImmediate()`回到需要执行，poll阶段将等待`callback`被添加到队列中，然后立即执行。<br />

**当然设定了 timer 的话且 poll 队列为空，则会判断是否有 timer 超时，如果有的话会回到 timer 阶段执行回调。**
<a name="aZTtj"></a>
### check
**此阶段允许人员在poll阶段完成后立即执行回调。**<br />如果`poll`阶段闲置并且`script`已排队`setImmediate()`，则事件循环到达check阶段执行而不是继续等待。<br />`setImmediate()`实际上是一个特殊的计时器，它在事件循环的一个单独阶段运行。它使用`libuv API`来调度在`poll`阶段完成后执行的回调。<br />通常，当代码被执行时，事件循环最终将达到`poll`阶段，它将等待传入连接，请求等。<br />但是，如果已经调度了回调`setImmediate()`，并且轮询阶段变为空闲，则它将结束并且到达`check`阶段，而不是等待`poll`事件。

```js
console.log('start')
setTimeout(() => {
  console.log('timer1')
  Promise.resolve().then(function() {
    console.log('promise1')
  })
}, 0)
setTimeout(() => {
  console.log('timer2')
  Promise.resolve().then(function() {
    console.log('promise2')
  })
}, 0)
Promise.resolve().then(function() {
  console.log('promise3')
})
console.log('end')

```

如果`node`版本为`v11.x`， 其结果与浏览器一致。

```js
start
end
promise3
timer1
promise1
timer2
promise2

```


## 参考

[https://github.com/xiaomuzhu/front-end-interview/blob/master/docs/guide/eventLoop.md](https://github.com/xiaomuzhu/front-end-interview/blob/master/docs/guide/eventLoop.md)  
[https://v8.js.cn/blog/fast-async/](https://v8.js.cn/blog/fast-async/)  
[https://developer.mozilla.org/zh-CN/docs/Web/API/Window/setImmediate](https://developer.mozilla.org/zh-CN/docs/Web/API/Window/setImmediate)
[http://javascript.ruanyifeng.com/dom/mutationobserver.html](http://javascript.ruanyifeng.com/dom/mutationobserver.html)
[https://jakearchibald.com/2015/tasks-microtasks-queues-and-schedules/](https://jakearchibald.com/2015/tasks-microtasks-queues-and-schedules/)