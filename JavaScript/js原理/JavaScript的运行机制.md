---
title: JavaScript的运行机制
date: 2021-03-20 18:39:52
permalink: /pages/38b7e6/
categories:
  - js原理
tags:
  - JavaScript
---
## JavaScript的运行机制

- 作用域链本质上是如何产生的
- this是如何绑定的
- JavaScript运行的原理是什么
- 闭包产生的基本原因

## JavaScript的执行环境
赋予一段代码意义的正是JavaScript引擎，目前JavaScript引擎有许多种:

- V8 — 开源，由 Google 开发，用 C ++ 编写
- Rhino — 由 Mozilla 基金会管理，开源，完全用 Java 开发
- SpiderMonkey — 是第一个支持 Netscape Navigator 的 JavaScript 引擎，目前正供 Firefox 使用
- JavaScriptCore — 开源，以Nitro形式销售，由苹果为Safari开发
- KJS — KDE 的引擎，最初由 Harri Porten 为 KDE 项目中的 Konqueror 网页浏览器开发
- Chakra (JScript9) — Internet Explorer
- Chakra (JavaScript) — Microsoft Edge
- Nashorn, 作为 OpenJDK 的一部分，由 Oracle Java 语言和工具组编写
- JerryScript —  物联网的轻量级引擎

![2019-06-19-13-00-37]( https://xiaomuzhu-image.oss-cn-beijing.aliyuncs.com/27d902eae39383d1e92d05f4be51ce9b.png)

## v8引擎的两个主要组成部分：
- emory Heap(内存堆) — 内存分配地址的地方
- Call Stack(调用堆栈) — 代码执行的地方

## JavaScript运行时(JavaScript Runtime)

JavaScript Engine的工作是编译并执行js代码，完成内存分配、垃圾回收等，但缺乏与外部交互能力，比如单靠一个v8引擎是无法进行ajax请求、设置定时器、响应时间等操作，需要js运行时(JavaScript Runtime)的帮助，它为javascript提供了一些对象或机制，使它能够与外界交互。  
虽然Chrome和node都使用了v8引擎，但他们的运行时却不同，比如process、fs浏览器都无法提供

## 可执行代码  
一段js代码我们可以分为两个阶段：
* 编译间断：
  * 分词/词法分析(Tokenizing/Lexing)
  * 解析/语法分析(Parsing)
  * 预编译(解释)
* 执行阶段  

javascript并非简单的一行行解析执行，而是将javascript代码分为一块块可执行代码进行执行  
目前三类代码块  
* 函数代码块(Function code)
* 全局代码块(Global code)
* eval代码块(Eval code)

## javascript执行

eg:

```js
 var name = 'cxk'
 function say(name) {
   return `${name} like sining dancing and rap`
 }
```

### 堆

* emory Heap(内存堆) 内存分配的地方
* Call Stack(调用栈) 代码执行的地方

![2019-06-20-00-15-33](https://xiaomuzhu-image.oss-cn-beijing.aliyuncs.com/65c06e0194c7f94e7af45e8fcb30e004.png)  

那么执行name函数，会发生什么？

### 调用栈

我们生命的函数与变量被存储到**内存堆**中，而我们要执行时，就必须借助于**调用栈**  

### 执行上下文(execution context)

#### javascript的三种执行上下文

* 全局执行上下文--这是基础上下文，任何不在函数内部的代码都可以在全局上下文中。
  * 创建window对象，并且设置this的值等于这个全局对象。
  * 一个程序只有一个执行上下文
* 函数上下文--每当一个函数被调用时，都会为该函数创建一个新的上下文。每个函数都有自己的上下文，不过函数被调用时创建。函数上下文可以有任意多个，
* Eval执行上下文--执行在eval内部的代码会有属于自己的执行上下文，

### 执行上下文分为两个阶段： 
* 创建阶段
* 执行阶段

#### 执行上下文的创建阶段

* 决定this的指向
* 创建词法环境(LexicalEnvironment)
* 创建变量环境(VariableEnvironment)

伪代码如下：

```js
ExecutionContext = {
  ThisBinding = <this value>,
  LexicalEnvironment = {...},
  VariableEnvironment = {...}
}
```

#### this指向

指向最后一个调用他的人，默认情况下this指向全局对象，比如window，此外可能存在隐式绑定情况，比如通过对象调用函数, eg:

```js
function f() {
  console.log(this.name);
}

var obj = {
  name: 'Messi',
  f: f
}

obj.f(); //被调用的位置是obj所拥有 所以是Messi
```

#### 词法环境

* 全局环境
* 模块环境
* 函数环境

#### 词法环境本身包括两个部分：

* 环境记录器是存储变量和函数声明的实际位置
  * 声明式环境记录器(DecarativeEnvironmentRecord)：范围包含函数定义，变量声明，try...catch，此类型对应其范围内包含的声明定义的标识符集
  * 对象式环境记录器(ObjectEnvironment): 由程序级别(Program)对象、声明、with语句创建，与称为其绑定对象的对象相冠梁，此类型对应于其绑定对象的属性名称的字符串标识符名称集
* 外部环境引用是指它可以访问其父级词法环境

![2019-06-20-03-49-33]( https://xiaomuzhu-image.oss-cn-beijing.aliyuncs.com/f2fd3a92e2aa96c5005d525389834a57.png)


#### 变量环境

```js
var name = 'cxk'
function say(name) {
  const bgm = 'jntm'
  function play() {
    const content = `${name} like singing dancing and rap, ${bgm}`
    return content
  }
}

const content = say(name)
```
1. 变量name和函数声明say被白存在堆中
2. 创建全局可执行上下文
3. 创建函数执行上下文
4. 创建say函数体内的函数执行上下文
5. 开始执行


![2019-06-20-06-00-27]( https://xiaomuzhu-image.oss-cn-beijing.aliyuncs.com/0f1701f3b7061942ae24a9357f28bc2e.png)

### 小结

#### this是怎么绑定的？
在创建可执行上下文的时候，根据代码的执行条件，来判断分别进行默认绑定、隐式绑定、显示绑定等。

#### 作用域链是怎么形成的？

可执行上下文中的词法环境中含有外部词法环境的引用，我们可以通过这个引用获取外部词法环境的变量、声明等，这些引用串联起来一直指向全局的词法环境，因此形成了作用域链。

#### 闭包是怎么形成的

可执行上下文的词法环境中含有外部词法环境的引用，我们可以通过这个引用获取外部词法环境的变量、声明等，因此形成了闭包。