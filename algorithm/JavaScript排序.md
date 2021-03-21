---
title: JavaScript排序
date: 2021-03-20 18:39:52
permalink: /pages/ffcbad/
categories:
tags:
  - 
---
### 排序算法

#### 冒泡排序

1. 比较相邻的元素。如果第一个比第二个大，就交换他们两个。
2. 对每一对相邻元素作同样的工作，从开始第一对到结尾的最后一对。这步做完后，最后的元素会是最大的数。
3. 针对所有的元素重复以上的步骤，除了最后一个。
4. 持续每次对越来越少的元素重复上面的步骤，直到没有任何一对数字需要比较。

<img src="https://upload-images.jianshu.io/upload_images/754476-924014d631039f01.gif?imageMogr2/auto-orient/strip|imageView2/2/w/826/format/webp"/>

```js
function bubbleSort(arr) {
  for(let i=0;i<arr.length;i++) {
    for(let j=0;j<arr.length-i-1;j++) {
      if(arr[j] > arr[j+1]) {
        let temp = arr[j]
        arr[j] = arr[j+1]
        a[j+1] = temp 
      }
    }
  }
  return temp
}

bubbleSort([1,3,2,5,4,6,8,7,10,9]) // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
```

#### 选择排序

1. 首先在未排序序列中找到最小（大）元素，存放到排序序列的起始位置
2. 再从剩余未排序元素中继续寻找最小（大）元素，然后放到已排序序列的末尾。
3. 重复第二步，直到所有元素均排序完毕。

<img src="https://upload-images.jianshu.io/upload_images/754476-06a4090ebc2f5655.gif?imageMogr2/auto-orient/strip|imageView2/2/w/811/format/webp">

```js
function selectSort(arr) {
  let minIndex,temp;
  for(let i =0;i<arr.length;i++) {
    minIndex = i;
    for(let j=i+1;j<arr.length;j++) { // 仅遍历未排序的元素
      if(arr[minIndex] > arr[j]) {
        minIndex = j
      }
    }
    temp = arr[i]
    arr[i] = arr[minIndex]
    arr[minIndex] = temp
  }
  return arr
}
selectSort([1,3,2,5,4,6,8,7,10,9]) // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
```


#### 插入排序

1. 将第一待排序序列第一个元素看做一个有序序列，把第二个元素到最后一个元素当成是未排序序列。
2. 从头到尾依次扫描未排序序列，将扫描到的每个元素插入有序序列的适当位置。（如果待插入的元素与有序序列中的某个元素相等，则将待插入元素插入到相等元素的后面。）

```js
function insertSort(arr) {
  let preIndex, current;
  for(let i =1;i<arr.length;i++) {
    current = arr[i]
    preIndex = i--
    while(preIndex>=0 && arr[preIndex]>current) {
      arr[preIndex+1] = arr[preIndex]
      preIndex--
    }
    arr[preIndex+1] = current
  }
  return arr
}
insertSort([1,3,2,5,4,6,8,7,10,9]) // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

```

#### 归并排序

#### 快速排序

#### 参考

[https://www.jianshu.com/p/31b1f6b7059b](https://www.jianshu.com/p/31b1f6b7059b)