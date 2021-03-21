---
title: vuejs必知必会
date: 2021-03-20 18:39:52
permalink: /pages/f698bb/
categories:
tags:
  - 
---
### 组件data为什么是函数

因为data的私有性，所以必须return一个新对象。

### vue-loader是什么？

vue-loader 是一个 webpack 的 loader，可以将单文件组件转换为 JavaScript 模块

### 实现 Vue SSR基本原理

主要通过vue-server-renderer 将vue组件输出成HTML，过程： 
1. 客户端entry-client主要作用挂在到DOM上，服务端entry-server除了创建和返回实例，还进行路由匹配与数据获取
2. webpack打包客户端为client-bundle，打包服务端为server-bundle
3. 服务端接收请求，根据url来加载相应的组件，然后生成html发送给客户端
4. 客户端激活， Vue 在浏览器端接管由服务端发送的静态 HTML，使其变为由 Vue 管理的动态 DOM，为确保混合成功，客户端与服务器端需要共享同一套数据。在服务端，可以在渲染之前获取数据，填充到 stroe 里，这样，在客户端挂载到 DOM 之前，可以直接从 store 里取数据。首屏的动态数据通过 window.INITIAL_STATE 发送到客户端


### 对Vue.js的template编译的理解

template会被编译成AST语法树，AST会经过generate得到render函数，render的返回值是VNode，VNode是Vue的虚拟DOM节点

- parse 过程，将 template 利用正则转化成 AST 抽象语法树
- optimize 过程，标记静态节点，后 diff 过程跳过静态节点，提升性能
- generate 过程，生成 render 字符串

