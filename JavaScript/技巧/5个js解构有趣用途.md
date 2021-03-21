---
title: 5个js解构有趣用途
date: 2021-03-20 18:39:52
permalink: /pages/d7ece9/
categories:
tags:
  - 
---
参考 [https://juejin.im/post/5d5f29dde51d456216553519](https://juejin.im/post/5d5f29dde51d456216553519)

### 交换变量

不使用解构
``` js
let a = 1, b = 2, temp;
temp = a; a = b; b = temp;

console.log(a); // 2
console.log(b); // 1
```

使用解构

``` js
let a = 1, b=2;
[a, b] = [b, a];

console.log(a); // 2
console.log(b); // 1

//解构两个以上变量

let zero=2, one=1, two=0;
[zero, one, two] = [two, one, zero];
```

### 访问数组中的元素

``` js
//访问数组的第一项，若不存在则指定默认值
const colors = [];
let firstColor = colors[0] || 'red';

//使用解构

let [firstColor = 'red'] = colors;
console.log(firstColor); //red

//若是解构第二个

let [, secondColor = 'white'] = colors;
//左侧逗号表示忽略第一个元素，使用index为1进行赋值

```

### 不可变的操作

不可变性 要求不能改变原始对象。
``` js
//数组解构
const numbers = [1,2,3];
const [, ...foodNumbers] = numbers;

foodNumbers; // [2,3];
numbers; // [1,2,3];

//对象解构
const value = {
  foo: 'Foo',
  bar: 'Bar'
};

const { foo, ...valueBar } = value;

valueBar;// {bar: 'Bar'};
value; // {foo: 'Foo', bar: 'Bar'}
```

### 解构iterables
自定义可迭代协议的对象解构。  
许多原生基本类型和对象都是可迭代的： array、string、typed arrays、set和map。

``` js
const movies = {
  list: [
    {title: 'heat'},
    {title: 'interstellar'}
  ],
  [Symbol.interator]() {
    let index = 0;
    return {
      next: () => {
        if(index < this.list.length) {
          const value = this.list[index++].title;
          return { value, done: false };
        }
        return {done: true}
      }
    }
  }
};
const [firstMovieTitle] = movies;
console.log(firstMovieTitle);

```

[codepen](https://codepen.io/syun0216/pen/jONBOGB);

### 解构动态属性

``` js
function greet(obj, nameProp) {
  const { [nameProp]: name = 'unkown' } = obj;
  return `Hello ${name}`;
}

greet({name: 'Batman'}, 'name'); // Hello, Batman
greet({}, 'name'); //Hello, unkown

```