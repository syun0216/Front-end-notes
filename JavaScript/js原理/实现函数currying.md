### 函数柯里化实现

```js
function add(a,b,c) {
  return a + b + c
}
// 编写一个函数使得
func(1,2,3) // 6
func(1,2)(3) // 6
func(1)(2)(3) // 6
```

具体实现：

```js
function curringAdd(fn, ...args) {
  if(fn.length <= args.length) {
    fn(...args)
  }else {
    return function(...args1) {
      return curringAdd(fn, ...args, ...args1)
    }
  }
}
```