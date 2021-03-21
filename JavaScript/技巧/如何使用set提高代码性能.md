---
title: 如何使用set提高代码性能
date: 2021-03-20 18:39:52
permalink: /pages/c41df5/
categories:
tags:
  - 
---
参考[https://juejin.im/post/5d2284dc51882579df4a4cee](https://juejin.im/post/5d2284dc51882579df4a4cee)

### Set 有何不同
最根本的区别是数组是一个索引集合，这说明数组中的数据值按索引进行排序。  
set是一个键的集合。set不适用索引，而是使用键对数据排序。set中的元素按从插入顺序是可迭代的，他不能包含任何重复的数据。  

### set的好处  
- 查看元素：使用indexOf或includes检查数组中的项是否存在比较慢
- 删除元素：根据value来删除该项
- 保存NaN：数组不能使用indexOf或includes来查找NaN，而set可以保存此值。
- 删除重复项：Set对象志存存唯一的值

### 时间复杂度

数组在搜索元素方法时间复杂度为0(N)。也就是运行时间的增长速度与数组的长度相同。  
Set用于搜索、删除和插入元素时间复杂度都只有0(1)

### 比较Set和Array

``` js
let arr = [], set = new Set(), n = 100000;
for(let i=0;i<n;i++) {
  arr.push(i);
  set.add(i);
}
```
- 查找元素
``` js
let result;
console.time('Array'); 
result = arr.indexOf(123123) !== -1; 
console.timeEnd('Array');
console.time('Set'); 
result = set.has(123123); 
console.timeEnd('Set');

```

Array: 0.173ms  
Set: 0.023ms

- 添加元素

``` js
console.time('Array'); 
arr.push(n);
console.timeEnd('Array');
console.time('Set'); 
set.add(n);
console.timeEnd('Set');
```

Array: 0.018ms  
Set: 0.003ms

- 删除元素

``` js
const deleteFromArr = (arr, item) => {
  let index = arr.indexOf(item);
  return index !== -1 && arr.splice(index, 1);
}

console.time('Array'); 
deleteFromArr(arr, n);
console.timeEnd('Array');
console.time('Set'); 
set.delete(n);
console.timeEnd('Set');

```

Array: 1.122ms  
Set: 0.015ms

### 案例1：从数组中删除重复值

``` js
const duplicateCollection = [1,2,1,3,2,4];
let uniqueCollection = [...new Set(duplicateCollection)]; // [1,2,3,4];
```

### 案例2：谷歌面试题问题

给定一个整数无序数组和变量 sum，如果存在数组中任意两项和使等于 sum 的值，则返回true。否则,返回false。例如，数组[3,5,1,4]和 sum = 9，函数应该返回true，因为4 + 5 = 9。

解决这个问题的一个很好的方法是遍历数组，创建 Set保存相对差值。
``` js
const findSum = (arr, val) => {
  let searchValues = new Set();
  searchValues.add(val - arr[0]);
  for (let i = 1, length = arr.length; i < length; i++) {
    let searchVal = val - arr[i];
    if (searchValues.has(arr[i])) {
      return true;
    } else {
      searchValues.add(searchVal);
    }
  };
  return false;
};

//简洁版
const findSum = (arr, sum) =>
  arr.some((set => n => set.has(n) || !set.add(sum - n))(new Set));

```


因为Set.prototype.has()的时间复杂度仅为O(1)，所以使用 Set 来代替数组，最终使整个解决方案的线性运行时为O(N)。
如果使用 Array.prototype.indexOf()或Array.prototype.includes()，它们的时间复杂度都为 O(N)，则总运行时间将为O(N²)，慢得多！