---
title: 实现 strStr()
date: 2021-04-01 22:19:57
permalink: /pages/0daf1d/
categories:
  - 算法
tags:
  - leetcode
  - 字符串
---

[leetcode 28](https://leetcode-cn.com/problems/implement-strstr/)

实现 strStr() 函数。

给定一个 haystack 字符串和一个 needle 字符串，在 haystack 字符串中找出 needle 字符串出现的第一个位置 (从0开始)。如果不存在，则返回  -1。

示例 1:
```js
输入: haystack = "hello", needle = "ll"
输出: 2
```
示例 2:
```js
输入: haystack = "aaaaa", needle = "bba"
输出: -1
```
说明:

- 当 needle 是空字符串时，我们应当返回什么值呢？这是一个在面试中很好的问题。

- 对于本题而言，当 needle 是空字符串时我们应当返回 0 。这与C语言的 strstr() 以及 Java的 indexOf() 定义相符。

解答：  
```js
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    let hLen = haystack.split("").length;
    let nLen = needle.split("").length;
    for(let i =0;i< hLen - nLen + 1; i++) {
        if(haystack.substring(i, i + nLen ) === needle) {
            return i;
        }
    }
    return -1;
};
```
### 那么这里我们又引出了js的substr和substring的区别 

substr( start , length )

start  
介于0（包含）和字符串长度之间的整数，表示从这个字符串开始截取子串；  
若 ≥ 字符串长度，则返回空字符串；  
若 < 0，则从右起计数；  
若 < 0且绝对值超过字符串长度的，视为0；  
length（可选）  
介于0（包含）和剩余字符串长度之间的整数，表示最大截取该长度的字符串作为子串；  
若超过剩余字符串长度，则截取到字符串结束，超出部分不计；  
若 ≤ 0，返回空字符串；  
若不指定长度，则返回该stringObject的 start 的位置到末尾；  
举个栗子：  
```js
var str = 'hello,world';
    console.log('hello,world')
    console.log('(1, 2): ' + str.substr(1, 2));  //(1, 2): el
    console.log('(-3, 2): ' + str.substr(-3, 2));  // '(-3, 2): rl'
    console.log('(-3): ' + str.substr(-3));     // '(-3): rld'
    console.log('(1): ' + str.substr(1));      // '(1): ello,world'
    console.log('(-20, 2): ' + str.substr(-20, 2)); // '(-20, 2): he'
    console.log('(20, 2): ' + str.substr(20, 2));  // '(20, 2): '
substring( start , end )
```
start  
介于0（包含）和字符串长度之间的整数，表示从该字符串开始截取子串；  
若 ≥ 字符串长度，则返回空字符串；  
end（可选）  
介于0（包含）和字符串长度之间的整数，表示从该字符开始不再被截取；  
若 > 字符串长度，则自动指定为字符串末尾；  
若不指定，则自动指定为字符串末尾；  
特殊情况  
任一参数 < 0，或为 NaN，则将其视为0；  
若 start == end，则返回空字符串；  
若 start > end，则两者交换数值；  
举个栗子：  
```js
    var str = 'hello,world';

    // Displays 'hello'
    console.log(str.substring(0, 5));
    console.log(str.substring(5, 0));

    // Displays 'hello,world'
    console.log(str.substring(0, 11));
    console.log(str.substring(-1, 11));
    console.log(str.substring(0, 15));
```