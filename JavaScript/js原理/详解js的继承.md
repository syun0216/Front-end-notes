---
title: 详解js的继承
date: 2019-11-05 18:39:52
permalink: /pages/4eb0e3/
categories:
  - js原理
tags:
  - JavaScript
---
JavaScript的继承可以分为两类：

* 基于对象的继承
* 基于类型的继承

## 基于对象的继承

也叫原型继承。我们知道js字面量创建的对象都会连接到Object.prototype，因此我们用Object.prototype来实现继承。使用Object.create直接让新对象继承就对象的属性。例如

```js
var person = {
  name: 'Miro',
  getName: function() {return this.name}
}

var p1 = Object.create(person);
console.log(p1.getName()); // Miro
```

Object.create()还可以指定第二个参数，即数据属性，将其添加到新对象中。数据属性可设4个描述符value， writable，enumerable，configurable 。后3个看名字也能猜出意思，不指定的话默认为false。例如：

```js
var p2 = Object.create(person, {
  name: {
    value: 'Syun'
  }
})
console.log(p2.getName()); // Syun
```

用Object.create相当于创建了一个全新的对象，你可以给该对象任意新增，重载它的属性和方法

```js
var person = {
  name: 'Miro',
  getName: function() {return this.name;},
  getAge: function() {return this.age} // person上并没有这个age
}

var p3 = Obkect.create(person)
;
p3.age = 17;
p3.location = '深圳';
p3.getLocation = function() {return this.location}

console.log(p3.getName()) // Miro
console.log(p3.getAge()) // 17
console.log(p3.getLocation()) // 深圳

console.log(person.getAge()) // undefined
```

### 实现一个Object.create

```js
_create = function (o) {
    let F = function () {}
    F.prototype = o
    return new F()
}
```

## 基于类型的继承（Klass）

### 模式一： 将原型对象指向父对象
```js
Child.prototype = new Parent(); // 原型对象指向父对象
```

例子： 
```js
function Parent(n) {     //父构造函数
    this.name = n || 'Adam';
}
Parent.prototype.say = function() {
    return this.name;
}
function Child(n) {}     //空白的子构造函数

function inherit(Child, Parent) {
    Child.prototype = new Parent(); //原型对象指向父对象
}

inherit(Child, Parent); //继承

var c1 = new Child("Jack");
console.log(c1.name);   //Adam
c1.say();               //Adam
```

缺点：子构造函数的参数不能传给父构造函数，即使你保证父子构造函数都不需要参数，但是效率也是底下的，既每个子对象都会重复地创建父对象，效率不高。

### 模式二：借用构造函数

```js
function Child(a, b, c, d) {        //子构造函数
    Parent.apply(this, arguments);  //借用父构造函数
}
```
例子： 
```js
function Parent(n) {     //父构造函数
    this.name = n || 'Adam';
}
Parent.prototype.say = function() {
    return this.name;
}

function Child(n) {     //子构造函数
    Parent.apply(this, arguments);  //借用父构造函数
}

var c2 = new Child("Patrick");
console.log(c2.name);   //Patrick
c2.say();               //error,未定义
```

总结一下该模式：子类只是借用了父类构造函数的实现，从结果上看，获得了一个父对象的副本。但子类对象和父类对象是完全独立的，不存在修改子类对象的属性值影响父对象的风险。缺点是该模式某种意义上讲，其实不是继承，无法从父类的prototype中获得任何东西

### 模式三：借用和设置原型

```js
function Child(a, b, c, d) {          //子构造函数
    Parent.apply(this, arguments);  //参照模式二，借用父构造函数
}
Child.prototype = new Parent();     //参照模式一，将原型对象指向父对象
```
该模式通常用用就可以了，但不是完美的。缺点和模式二的缺点二一样，多个子对象都会重复地创建父对象，效率不高。

### 模式四：共享原型

```js
function inherit(Child, Parent) {
    Child.prototype = Parent.prototype;
}
```

### 模式五：临时构造函数

```js
function inherit(Child, Parent) {
    var F = function() {};      //空的临时构造函数
    F.prototype = Parent.prototype;
    Child.prototype = new F();
}
```

与模式四的差别就是，新定义了个空的临时构造函数F()，子类的原型指向该临时构造函数。这样修改子类原型时，实际修改的是修改到了临时构造函数F()，不会影响父类：  

加分项一：添加一个指向父类原型的引用，例如其他语言里的super：

```js
function inherit(Child, Parent) {
    var F = function() {};       //空的临时构造函数
    F.prototype = Parent.prototype;
    Child.prototype = new F();
    Child.uber = Parent.prototype; //uber表示super，因为super是保留的关键字
}
```

加分项二：重置该构造函数的指针，以免在将来某个时候还需要该构造函数。如果不重置构造函数的指针，那么所有子对象会报告Parent()是它们的构造函数，这没有任何用处：

```js
function inherit(Child, Parent) {
    var F = function() {};          //空的临时构造函数
    F.prototype = Parent.prototype;
    Child.prototype = new F();
    Child.uber = Parent.prototype;  //uber表示super，因为super是保留的关键字
    Child.prototype.constructor = Child;    //修正constructor属性
}
```
加分项三：临时构造函数F()不必每次继承时都创建，仅创建一次以提高效率：
```js
var inherit = (function() {
    var F = function() {};
    return function(Child, Parent) {
        F.prototype = Parent.prototype;
        Child.prototype = new F();
        Child.uber = Parent.prototype;
        Child.prototype.constructor = Child;
    }
}());
```