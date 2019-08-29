## DOM

### DOM的事件模型是什么？

DOM之事件模型分脚本模型、内联模型（同类一个，后者覆盖）、动态绑定（同类多个）

```
<body>
<!-- 行内绑定： 脚本模型 -->
<button onclick="javascript:alert('test1')">test1</button>
<!-- 内联模式 -->
<button onclick="test2()">test2</button>
<!-- 动态绑定 -->
<button id="btn">test</button>
<script>
  /*DOM0：同一个元素，同类事件只能添加一个，如果添加多个，
* 后面添加的会覆盖之前添加的*/
var btn = document.querySelector('#btn');
btn3.onclick = function () {
alert("Hello");
}
/*DOM2:可以给同一个元素添加多个同类事件*/
btn.addEventListener("click",function () {
alert("hello1");
});
btn.addEventListener("click",function () {
alert("hello2");
})
if (btn.attachEvent){
/*IE*/
btn.attachEvent("onclick",function () {
alert("IE Hello1");
})
}else {
/*W3C*/
btn.addEventListener("click",function () {
alert("W3C Hello");
})
</script>
</body>
```


## DOM的事件流是什么

事件流是指描述页面接受事件的顺序。

### 事件冒泡

事件冒泡(event bubbling),事件开始又嵌套最深的元素接受，逐级向上冒泡

### 事件捕获

由不确定的元素到目标元素

### 事件流

事件流又称为事件传播，DOM2级事件规定的事件流包括三个阶段：事件捕获阶段(capture phase)、处于目标阶段(target phase)和事件冒泡阶段(bubbling phase)。

![2019-06-23-03-06-09]( https://xiaomuzhu-image.oss-cn-beijing.aliyuncs.com/276c91e03be37bc857446b7126428ea6.png)

### 什么是事件委托

事件委托就是利用事件冒泡，只指定一个事件处理程序，就可以管理某一类型的所有事件.  
在绑定大量事件的时候往往选择事件委托。

```
<ul class="parent">
  <li class="child">1</li>
  <li class="child">2</li>
  <li class="child">3</li>
</ul>

var parent = document.querySelector('.parent');
parent.onclick = function(event) {
  var event = event || window.event;
  var target = event.target || event.srcElement;
  if(target.tagName.toLowerCase() === 'li') {
    console.log(target.innerHTML);
  }
}
```

详见[codepen](https://codepen.io/syun0216/pen/jONwKNz)

优点:

* 节省内存占用，减少事件注册
* 新增子对象时无需再次对其绑定事件，适合动态添加元素

局限性:

* focus、blur 之类的事件本身没有事件冒泡机制，所以无法委托
* mousemove、mouseout 这样的事件，虽然有事件冒泡，但是只能不断通过位置去计算定位，对性能消耗高，不适合事件委托