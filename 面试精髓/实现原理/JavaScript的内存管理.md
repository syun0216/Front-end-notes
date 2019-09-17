## 内存模型
- 基本类型普遍被存放在『栈』中，而复杂类型是被存放在堆内存的。
- 执行函数的函数上下文会保存一个内存堆对应复杂类型对象的内存地址，通过引用来使用复杂类型对象。
- 当基本类型被闭包引用后，就会长期存在于内存中，这时就会被存放在**堆**中。
eg:
```js
function add() {
  const a = 1;
  const b = {
    num: 2
  }
  const sum = a + b.sum
}
```

![内存模型](https://xiaomuzhu-image.oss-cn-beijing.aliyuncs.com/8f09ef156288fd2c9ee9b0b0296fd154.png)

## 生命周期

不管什么程序语言，内存生命周期基本是一致的：
1. 分配你所需要的内存
2. 使用分配的内存（读或写）
3. 不需要时释放或归还

![生命周期]( https://xiaomuzhu-image.oss-cn-beijing.aliyuncs.com/b9f8c025986dee6a49599c985cd15f2e.png)

## 内存回收

V8垃圾回收策略基于分代回收机制，该机制基于世代假说，有以下特点：
- 大部分新生对象倾于早死
- 不死的对象，会活的更久

## V8的内存分代

- 新生代：对象的存活时间较短。只经历一次垃圾回收的对象。
- 老生代：对象存活时间较长。经历一次或多次垃圾回收对象。

## 全停顿(stop the world)

为了避免应用逻辑和垃圾回收器看到的情况不一致，垃圾回收算法在执行时，需要停止应用逻辑，执行完垃圾回收后再执行应用逻辑。

## Scavenge 算法

Scavenge 算法的缺点是，它的算法机制决定了只能利用一半的内存空间。但是新生代中的对象生存周期短、存活对象少，进行对象复制的成本不是很高，因而非常适合这种场景。  

新生代中对象主要通过Scavenge算法进行垃圾回收。Scavenge只要采用了Cheney算法。

![Scavenge](https://xiaomuzhu-image.oss-cn-beijing.aliyuncs.com/b883571872f75fcf0157377003f57cf2.png)

改算法将堆内存一分为二，称之为semispace(半空间).使用中的一半成为From，未使用成为To。具体过程如下：

- 从From中分配对象，若已满，则执行Scavenge算法进行垃圾回收。
- 检查From中存活对象，若满足，则检查对象是否符合晋升条件，如符合，则晋升到老生代，否则将对象从From复制到To
- 若对象不存活，则释放不存活对象的空间
- 完成复制后，将From空间和To空间进行角色翻转

## 对象晋升

- 对象是否经历过Scavenge回收。对象从 From 空间复制 To 空间时，会检查对象的内存地址来判断对象是否已经经过一次Scavenge回收。若经历过，则将对象从 From 空间复制到老生代中；若没有经历，则复制到 To 空间。
- To 空间的内存使用占比是否超过限制。当对象从From 空间复制到 To 空间时，若 To 空间使用超过 25%，则对象直接晋升到老生代中。设置为25%的比例的原因是，当完成 Scavenge 回收后，To 空间将翻转成From 空间，继续进行对象内存的分配。若占比过大，将影响后续内存分配。

![对象晋升](https://xiaomuzhu-image.oss-cn-beijing.aliyuncs.com/7d503b3c8b7619b0a4cceb34594fea03.png)

## Mark-Sweep & Mark-Compact

老生代对象：存活对象多，存活时间长。因此使用Scavenge算法导致复制存活对象的效率不高，且还会浪费一半空间。因而，V8在老生代中采用了Mark-Sweep和Mark-Compact算法进行垃圾回收。

Mark-Sweep,是标记清除的意思。它主要分为标记和清除两个阶段。

- 标记阶段，将遍历所有堆中对象，并对和存货的对象进行标记；
- 清除阶段，对未标记对象的空间进行回收。

与 Scavenge 算法不同，Mark-Sweep 不会对内存一分为二，因此不会浪费空间。但是，经历过一次 Mark-Sweep 之后，内存的空间将会变得不连续，这样会对后续内存分配造成问题。比如，当需要分配一个比较大的对象时，没有任何一个碎片内支持分配，这将提前触发一次垃圾回收，尽管这次垃圾回收是没有必要的。

![Mark-Sweep](https://xiaomuzhu-image.oss-cn-beijing.aliyuncs.com/805b5b5cf48dc8299f7a8093fa2d4080.png)

为了解决内存碎片的问题，提高对内存的利用，引入了 Mark-Compact （标记整理）算法。Mark-Compact 是在 Mark-Sweep 算法上进行了改进，标记阶段与Mark-Sweep相同，但是对未标记的对象处理方式不同。与Mark-Sweep是对未标记的对象立即进行回收，Mark-Compact则是将存活的对象移动到一边，然后再清理端边界外的内存。

![Mark-Compact](https://xiaomuzhu-image.oss-cn-beijing.aliyuncs.com/847849c83fe8b3d4fea20017b28ef89b.png)

由于Mark-Compact需要移动对象，所以执行速度上，比Mark-Sweep要慢。所以，V8主要使用Mark-Sweep算法，然后在当空间内存分配不足时，采用Mark-Compact算法

## Incremental Marking(增量标记)

在新生代中，由于存活对象少，垃圾回收效率高，全停顿时间短，造成的影响小。但是老生代中，存活对象多，垃圾回收时间长，全停顿造成的影响大。为了减少全停顿的时间，V8对标记进行了优化，将一次停顿进行的标记过程，分成了很多小步。每执行完一小步就让应用逻辑执行一会儿，这样交替多次后完成标记。如下图所示：

![Incremental Marking](https://xiaomuzhu-image.oss-cn-beijing.aliyuncs.com/d42805a7a519dace93309411d32ccdb5.png)

长时间的GC，会导致应用暂停和无响应，将会导致糟糕的用户体验。从2011年起，v8就将「全暂停」标记换成了增量标记。改进后的标记方式，最大停顿时间减少到原来的1/6。

### lazy sweeping（延迟清理）

- 发生在增量标记之后
- 堆确切地知道有多少空间能被释放
- 延迟清理被允许，页面清理可根据需要进行清理
- 延迟清理完成，增量标记将重新开始

## 内存泄漏

- 直接用全局变量赋值，在函数中滥用this指向全局对象
- 不销毁定时器和回调
- DOM引用不规范，很多时候, 我们对 Dom 的操作, 会把 Dom 的引用保存在一个数组或者 Map 中，往往无法对其进行内存回收，ES6中引入 WeakSet 和 WeakMap 两个新的概念, 来解决引用造成的内存回收问题. WeakSet 和 WeakMap 对于值的引用可以忽略不计, 他们对于值的引用是弱引用,内存回收机制, 不会考虑这种引用. 当其他引用被消除后, 引用就会从内存中被释放.
- 滥用闭包

## 查看内存泄漏

- 打开开发者工具，选择 Timeline 面板
- 在顶部的Capture字段里面勾选 Memory
- 点击左上角的录制按钮
- 在页面上进行各种操作，模拟用户的使用情况
- 一段时间后，点击对话框的 stop 按钮，面板上就会显示这段时间的内存占用情况

## 参考

[memory](https://github.com/xiaomuzhu/front-end-interview/blob/master/docs/guide/memory.md)

[深入浅出Node.js](https://book.douban.com/subject/25768396/)

[MDN内存管理](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Memory_Management)