---
title: Vue举一反三
date: 2021-03-20 18:39:52
permalink: /pages/c390d1/
categories:
tags:
  - 
---
### 对MVVM的理解？

MVVM: Model-View-ViewModel  
- Model层: 对数据层的域模型，它主要做域模型同步。通过 Ajax/fetch 等 API 完成客户端和服务端业务 Model 的同步。在层间关系里，它主要用于抽象出 ViewModel 中视图的 Model。
- View层: 作为视图模板存在，在MVVM里，整个 View 是一个动态模板。除了定义结构、布局外，它展示的是 ViewModel 层的数据和状态。View 层不负责处理状态，View 层做的是 数据绑定的声明、 指令的声明、 事件绑定的声明。
- ViewModel 层:把 View 需要的层数据暴露，并对 View 层的 数据绑定声明、 指令声明、 事件绑定声明 负责，也就是处理 View 层的具体业务逻辑。ViewModel 底层会做好绑定属性的监听。当 ViewModel 中数据变化，View 层会得到更新；而当 View 中声明了数据的双向绑定（通常是表单元素），框架也会监听 View 层（表单）值的变化。一旦值变化，View 层绑定的 ViewModel 中的数据也会得到自动更新。

<img src="../img/mvvm.png">

### MVVM优缺点

优点：

- 分离视图（View）和模型（Model）,降低代码耦合，提高视图或者逻辑的重用性: 比如视图（View）可以独立于Model变化和修改，一个ViewModel可以绑定不同的"View"上，当View变化的时候Model不可以不变，当Model变化的时候View也可以不变。你可以把一些视图逻辑放在一个ViewModel里面，让很多view重用这段视图逻辑
- 提高可测试性：ViewModel的存在可以帮助开发者更好地编写测试代码
- 自动更新dom：利用双向绑定,数据更新后视图自动更新,让开发者从繁琐的手动dom中解放  

缺点：

- Bug很难被调试：因为双向绑定，无法定位是View的问题还是Model的问题，还有指令式的写在View模板当中，这些内容是没办法打点调试的
- 一个大的模块中model也会很大，虽然使用方便了也很容易保证了数据的一致性，当时长期持有，不释放内存就造成了花费更多的内存
- 对于大型的图形应用程序，视图状态较多，ViewModel的构建和维护的成本都会比较高

### Vue生命周期的理解

Vue实例有一个完整的生命周期，也就是从开始创建、初始化数据、编译模板、挂在Dom -> 渲染、更新、卸载等一系列过程

#### 各个生命周期的作用

| 生命周期 | 描述 |
| :--- | :--- |
| beforeCreate | 组件实例被创建之初，组件的属性生效之前 |
| created | 组件实例已经完全创建，属性也绑定，但真实dom还没生成，$el还不可用 |
| beforeMount | 在挂在开始之前被调用：相关的render函数首次被调用 |
| mounted | el被新创建的vm.$el替换，并挂在到实例上去之后调用该钩子 |
| beforeUpdate | 组件数据更新之前调用，发生在虚拟 DOM 打补丁之前 |
| update | 组件数据更新之后 |
| activited | keep-alive专属，组件被激活时调用 |
| deadctivated | keep-alive专属，组件被销毁时调用 |
| beforeDestory | 组件销毁前调用 |
| destoryed | 组件销毁后调用 |  

---
<img src="../img/vue_life.png"/>

### 异步请求适合在哪个生命周期调用?

mounted 或者 created

### Vue组件如何通信？

- props/$emit+v-on: 通过props向下传递数据，通过$emit和on来向上传递信息
- EventBus: 通过EventBus进行信息发布与订阅
- vuex:全局状态管理
- $attrs/$listeners: Vue2.4中加入的$attrs/$listeners可以进行跨级的组件通信
- provide/inject：以允许一个祖先组件向其所有子孙后代注入一个依赖，不论组件层次有多深，并在起上下游关系成立的时间里始终生效，这成为了跨组件通信的基础

### computed和watch有什么区别

computed: 
- computed是计算属性，它更多用于计算值的场景
- computed具有缓存行，computed的值在getter执行后是会缓存的, 只有在它依赖的属性值改变之后，下一次获取computed的值才会重新调用getter来计算
- computed适用于计算比较消耗性能的计算场景

watch:

- 更多的是「观察」的作用,类似于某些数据的监听回调
- 无缓存性，页面重新渲染时值不变化也会执行

小结:
- 当我们要进行数值计算,而且依赖于其他数据，那么把这个数据设计为computed
- 如果你需要在某个数据变化时做一些事情，使用watch来观察这个数据变化

### Vue是如何实现双向绑定的？

利用Object.defineProperty 劫持对象的访问器，在属性发生变化时我们可以获取变化，然后根据变化惊醒后续响应，在vue3.0中通过Proxy代理对象进行类似的操作。

```js
const data = {
  weight: ''
}

function sayWeight(weight) {
  if(weight >= 70) {
    console.log('超重了')
  }else if(weight >= 50 && weight < 70) {
    console.log('正常')
  }else {
    console.log('太轻了')
  }
}

Object.keys(data).forEach(key => {
  Object.defineProperty(data, key, {
    enumerable: true,
    configurable: true,
    get() {
      console.log('get)
    },
    say(newVal) {
      sayWeight(newVal)
    }
  })
})

data.weight = 50

```

### Proxy与Object.defineProperty的优劣对比？

Proxy:

- 直接监听对象而非属性
- Proxy可以直接监听数组的变化
- Proxy有多达13种拦截方法,不限于apply、ownKeys、deleteProperty、has等等是Object.defineProperty不具备的
- Proxy返回一个新对象，我们可以只操作新的对象达到目的，而Object.defineProperty只能遍历对象属性直接修改
- Proxy作为新标准将受到浏览器厂商重点持续的性能优化，也就是传说中的新标准的性能红利

Object.defineProperty的优势如下:

- 兼容性好,支持IE9

### 如何理解Vue的响应式系统

<img src="../img/vue_watch.png"/>

- 任意一个Component都有一个与之对应的Watcher实例。
- Vue的data上的属性会被添加上getter和setter属性。
- 当Vue Component render函数被执行的时候，data上会被触碰(touch)，即被读，getter方法会被调用，此时Vue会去记录此Vue component所依赖的所有data。
- data 被改动时（主要是用户操作）, 即被写, setter 方法会被调用, 此时 Vue 会去通知所有依赖于此 data 的组件去调用他们的 render 函数进行更新。

### 虚拟DOM的优劣如何?

优点：

- 保证性能下限：虚拟DOM可以经过diff找出最小差异，然后批量进行patch，这种操作虽然比不上手动优化，但也比操作DOM性能要好很多
- 无需手动操作DOM：虚拟DOM的diff和patch都是在一次更新，无需手动操作DOM，极大的提高开发效率
- 跨平台：虚拟DOM是js对象可以方便的进行跨平台操作  


缺点：

- 无法进行极致优化：在一些性能要求极高的应用中虚拟DOM无法进行针对性的极致优化,比如VScode采用直接手动操作DOM的方式进行极端的性能优化

### 虚拟DOM实现原理？

- 虚拟DOM本质上是js对象，是对真实的DOM的抽象
- 状态变更时，记录新树和旧树的差异
- 最后把差异更新到真正的dom中

### Vue中的key到底有什么用？

key是为Vue中的vnode标记的唯一id,通过这个key,我们的diff操作可以更准确、更快速  
diff算法的过程中,先会进行新旧节点的首尾交叉对比,当无法匹配的时候会用新节点的key与旧节点进行比对,然后超出差异.  

> diff程可以概括为：oldCh和newCh各有两个头尾的变量StartIdx和EndIdx，它们的2个变量相互比较，一共有4种比较方式。如果4种比较都没匹配，如果设置了key，就会用key进行比较，在比较的过程中，变量会往中间靠，一旦StartIdx>EndIdx表明oldCh和newCh至少有一个已经遍历完了，就会结束比较,这四种比较方式就是首、尾、旧尾新头、旧头新尾.

- 准确: 如果不加key,那么vue会选择复用节点(Vue的就地更新策略),导致之前节点的状态被保留下来,会产生一系列的bug.
- 快速: key的唯一性可以被Map数据结构充分利用,相比于遍历查找的时间复杂度O(n),Map的时间复杂度仅仅为O(1).

```js
function createKeyToOldIdx(children, beginIdx, endIdx) {
  let i, key;
  const map = {}
  for(i = beginIdx; i<= endIdx; ++i) {
    key = children[i].key
    if(isDef(key)) map[key] = i
  }
  return map
}
```