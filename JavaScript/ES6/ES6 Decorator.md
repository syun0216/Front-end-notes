---
title: ES6 Decorator
date: 2021-03-20 18:39:52
permalink: /pages/d9ebac/
categories:
tags:
  - 
---
 探寻ECMAScript的装饰器Decorator

> 参考[探寻ECMAScript的装饰器Decorator](https://github.com/rccoder/blog/issues/23)

装饰器可以说是解决了不同类之间共享方法的问题(可以看做是弥补继承的不足)  
在未来JS也将引入这个概念，并且babel对他有很好的支持。

### 使用babel

安装babel： 

```bash
npm i babel-cli babel-preset-env -D // babel
npm i babel-plugin-transform-decorators-legact -D // babel 装饰器
```

在.babelrc中写入：  

```json
{
  "presets": ["env"],
  "plugins": ["transform-decorators-legacy"]
}
```

### 装饰器

```js
function decorateArmour(target, key, descriptor) {
  const method = descriptor.value;
  let moreDef = 100;
  let ret;
  descriptor.value = (...args)=>{
    args[0] += moreDef;
    ret = method.apply(target, args);
    return ret;
  }
  return descriptor;
}

class Man{
  constructor(def = 2,atk = 3,hp = 3){
    this.init(def,atk,hp);
  }

  @decorateArmour
  init(def,atk,hp){
    this.def = def; // 防御值
    this.atk = atk;  // 攻击力
    this.hp = hp;  // 血量
  }
  toString(){
    return `防御力:${this.def},攻击力:${this.atk},血量:${this.hp}`;
  }
}

var tony = new Man();

console.log(`当前状态 ===> ${tony}`);
// 输出：当前状态 ===> 防御力:102,攻击力:3,血量:3
```

装饰器接受三个参数，这三个参数和Object.defineProperty()基本一致，分别为：  
1. 需要定义属性的对象 -- 被装饰的类
2. 需定义修改的属性的名字 -- 被装饰的属性名
3. 将被定义或修改的属性的描述符 -- 属性的描述对象

再看上面的代码：  
1. target是 Man {} 这个类
2. key 是被装饰的函数 init()
3. descriptor 和 Object.defineProperty() 一样: {value: [Function], writable: true, enumerable: false, configurable: true}

descriptor.value = (...args)=> 中的 args 是一个数组，分别对应 def、atk、hp，给 def + 100，然后再执行 method（即被装饰的函数），最后返回 descriptor。

### 带参数的装饰类方法

```js
function decorateArmour(num) {
  return function(target, key, descriptor) {
    const method = descriptor.value;
    let moreDef = num || 100;
    let ret;
    descriptor.value = (...args)=>{
      args[0] += moreDef;
      ret = method.apply(target, args);
      return ret;
    }
    return descriptor;
  }
}

class Man{
  constructor(def = 2,atk = 3,hp = 3){
    this.init(def,atk,hp);
  }

  @decorateArmour(20)
  init(def,atk,hp){
    this.def = def; // 防御值
    this.atk = atk;  // 攻击力
    this.hp = hp;  // 血量
  }
  toString(){
    return `防御力:${this.def},攻击力:${this.atk},血量:${this.hp}`;
  }
}

var tony = new Man();
console.log(`当前状态 ===> ${tony}`);
// 输出：当前状态 ===> 防御力:22,攻击力:3,血量:3
```

### 装饰 类

上面两个装饰器都是对类里面的函数进行装饰，改变了类的静态属性；除此之外，还可以对类进行装饰，给类添加方法或者修改方法（通过被装饰类的 prototype）：

```js
function decorateArmour(num) {
  return function(target, key, descriptor) {
    const method = descriptor.value;
    let moreDef = num || 100;
    let ret;
    descriptor.value = (...args)=>{
      args[0] += moreDef;
      ret = method.apply(target, args);
      return ret;
    }
    return descriptor;
  }
}


function addFunc(target) {
  target.prototype.addFunc = () => {
  	return 'i am addFunc'
  }
  return target;
}

@addFunc
class Man{
  constructor(def = 2,atk = 3,hp = 3){
    this.init(def,atk,hp);
  }

  @decorateArmour(20)
  init(def,atk,hp){
    this.def = def; // 防御值
    this.atk = atk;  // 攻击力
    this.hp = hp;  // 血量
  }
  toString(){
    return `防御力:${this.def},攻击力:${this.atk},血量:${this.hp}`;
  }
}

var tony = new Man();
console.log(`当前状态 ===> ${tony}`)
console.log(tony.addFunc());

// 输出：当前状态 ===> 防御力:22,攻击力:3,血量:3
// 输出：i am addFunc
```

### 装饰 普通函数

不建议装饰，因为变量提升会产生系列问题


### 参考文章

* [Exploring EcmaScript Decorators](https://medium.com/google-developers/exploring-es7-decorators-76ecb65fb841#.g89gf2jx5)
* [javascript-decorators](https://github.com/wycats/javascript-decorators)
* [ES7 Decorator 装饰者模式](https://fed.taobao.org/)
