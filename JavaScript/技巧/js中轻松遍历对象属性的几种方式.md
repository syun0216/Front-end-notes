参考[https://juejin.im/post/5d48c275f265da03b12032a1](https://juejin.im/post/5d48c275f265da03b12032a1)

### 自身可枚举属性

Object.keys()方法会返回一个由一个给定对象的自身可枚举属性组成的数组，数组中属性名的排列属性和使用for...in循环遍历该对象时返回的顺序一致。如果对象的键值对都不可枚举，那么将返回由键组成的数组。
这是合理的，因为大多数时间只需要关注对象自身的属性。  

```
let simpleColors = {
  colorA: 'white',
  colorB: 'black'
};
let natureColor = {
  colorC: 'green',
  colorD: 'yellow'
};
Object.setPrototypeOf(natureColors, simpleColors);
Object.keys(natureColors); // => ['colorC', 'colorD']
natureColors['colorA']; // white
natureColors['colorB']; //black
```
- Object.keys(natureColors)返回natureColors对象的自身可枚举属性键：['colorC'，'colorD']。
- natureColors包含从simpleColors原型对象继承的属性，但是Object.keys()函数会跳过它们。
- Object.values() 和 Object.entries() 也都是返回一个给定对象自身可枚举属性的键值对数组。

```
// ...
Object.values(natureColors); 
// => ['green', 'yellow']
Object.entries(natureColors);
// => [ ['colorC', 'green'], ['colorD', 'yellow'] ]

```
**for...in不仅可以循环枚举还可以枚举原型链中的属性**
```
let enumerableKeys = [];
for(let key in natureColors) {
  enmerableKeys.push(key);
}
enmerableKeys; // => ['colorC', 'colorD', 'colorA', 'colorB']
```

### Object.values()返回属性值


**Object.values方法返回一个给定对象自身的所有可枚举属性值的数组，值的书序与使用for...in循环的顺序相同**

```
let meals = {
  mealA: 'Breakfast',
  mealB: 'Lunch',
  mealC: 'Dinner'
}
for(let mealName of Object.values(meals)) {
  console.log(mealName); // 'Breakfast' 'Lunch' 'Dinner'
}
```

### Object.entries()

**Object.entries()** 方法返回一个给定对象自身可枚举属性的键值对数组，其排列与使用 for...in 循环遍历该对象时返回的顺序一致（区别在于 for-in 循环也枚举原型链中的属性）。

```
let meals = {
  mealA: 'Breakfast',
  mealB: 'Lunch',
  mealC: 'Dinner'
};
for (let [key, value] of Object.entries(meals)) {
  console.log(key + ':' + value);
}
// 'mealA:Breakfast' 'mealB:Lunch' 'mealC:Dinner'

```

如上所示，因为 Object.entries()返回一个与数组解构赋值兼容的集合，因此不需要为赋值或声明添加额外的行。  
当普通对象要转换成 Map 时Object.entries() 就很有用，因为Object.entries() 返回的格式与Map构造函数接受的格式完全相同：(key,value)。  


```
let greetings = {
  morning: 'Good morning',
  midday: 'Good day',
  evening: 'Good evening'
};
let greetingsMap = new Map(Object.entries(greetings));
greetingsMap.get('morning'); // => 'Good morning'
greetingsMap.get('midday');  // => 'Good day'
greetingsMap.get('evening'); // => 'Good evening'


// ...
[...greetingsMap.values()];
// => ['Good morning', 'Good day', 'Good evening']
[...greetingsMap.entries()];
// => [ ['morning', 'Good morning'], ['midday', 'Good day'], 
//      ['evening', 'Good evening'] ]
```

### 对象属性的顺序

- 数字：当属性的类型时数字类型时，会按照数字的从大到小的顺序进行排序；
- 字符串：当属性的类型是字符串时，会按照时间的先后顺序进行排序；
- Symbol：当属性的类型是Symbol时，会按照时间的先后顺序进行排序。

如果需要有序集合，建议将数据存储到数组或set中。