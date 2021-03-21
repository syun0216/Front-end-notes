---
title: 怎么写出更好的css
date: 2021-03-20 18:39:52
permalink: /pages/493b2e/
categories:
tags:
  - 
---
怎样写出更好的css

> 参考[怎样才能写出更好的 CSS？](https://mp.weixin.qq.com/s/4QXqTvFd1YbsWL9DQfbdhg)

随着我们项目的进行，应用逐渐变大，css也越来越糟。如何写出更好的css，复用性强的样式，应有以下几点：

## SCSS 

1. 变量

比如说我们制定一个特殊的蓝色，用于背景、图标和导航条等，有了变量，我们就不需要记住复杂的色号，并且有一天如果你想换一种蓝色，你只需要修改一处地方，而不需要处处修改。

例：

```scss
$primary-color: #3296fa;
$default-font-color: #ffffff;
.btn{
  background: $primary-color;
  color: $default-font-color;
}
```

2. 嵌套

```scss
#container {
  h5{
    font-size: 1rem;
  }
}
```

3. 分块和导入

你可以通过下划线给文件命名，比如: _base.scss、_variables.scss等，scss可以通过你这种下划线的命名方式知道你指的是分块文件，至于导入则使用@import,  

例:

```scss
@import "base";
h1 {
  font-size: 1.2rem;
}
```

## 组织CSS代码：BEM方法论

我们常常不知道如何命名，但是命名是很重要的，如果没有恰当的命名，别人可能很难明白你在说什么。  

BEM(Block Element Modifier)块元素修饰符是一种命名的约定，这种方法可以使我们的代码结构化，并提高模块化和可重用性。

### 块

把块视为组件，它有这本身的意义，比如说  
* 命名：块名：.block
* 示例：.card .form .user-navigation

### 元素

接下来，你应该如何用你的乐高积木建造一个窗口呢？可能有些积木看起来像框架，如果你把四个这样的积木组装起来，就会得到一个漂亮的窗户。这些就是我们的元素。它们是块的一部分，它们对于建块必不可少。但是，在块外面的时候，它们便无用武之地。  

* 命名：块名+ __ +元素名：.block__element
* 示例：.form__author、.form__date、.form__text

### 修饰符

现在窗户已经建好了，但是你可能想要一个绿色或一个小窗户。这些我们称之为修饰符。它们是块或元素上的标志，它们用于改变行为，外观等等。  

* 命名：块名称或元素名称+ -- +修饰符名称：.block__element--修饰符，.块--修饰符
* 示例：.post--important，.post__btn--disabled

### 注意事项

* 在使用 BEM 的时候，你可以用且只能用类来命名。不能用 ID，不能用标签。只能用类。
* 块和元素可以嵌入其他块和元素，但是它们必须是完全独立的。请记住：独立。所以如果你想将把一个按钮放在标题下的话，就不要在按钮上加边距，否则按钮就会与标题绑定。请改用工具类。
* 是的，你的 HTML 文件会超负荷，但是不用担心，与 BEM 带来的好处相比，这只是个小小的缺点。

## 组织CSS文件： 7-1模式

你必须遵守以下两条规则：    
1. 将所有内容分别写入7个不同的文件夹中
2. 将他们全部导入位于跟级别的main.scss中

7个文件：  
* base：你可以将所有的样板代码放入该文件夹中。每次开始一个新项目时，你需要写的所有css代码。排版规则、动画、工具程序等等。
* components: 这里指组件，例如按钮、表单、滑块、弹出窗口等
* layout：页面不同部分用到的布局，也就是说：页眉、页脚、导航、分区、你自己的网格等等。
* pages：页面。有的页面可能有特定的样式，与通常的处理方式不同。那么你可以将它放入该文件夹。
* themes：主题。如果你的应用中有不同的主题，那可以将它们放入该文件夹。
* abstracts：抽象。你可以将所有函数和变量与混入(mixin)放在这里。
* vendors：外部资源。例如，你可以放入Font Awesome文件、Bootstrap和其他类似的东西。

引入主文件

```scss
@import abstracts/variables;
@import abstracts/functions;
@import base/reset;
@import base/typography;
@import base/utilities;
@import components/button;
@import components/form;
@import components/user-navigation;
@import layout/header;
@import layout/footer;
```

小项目vendors里的css，可以直接用link引入

## 从SCSS到CSS

安装node-scss,具体命令：

```json
{
  ...
  "scripts": {
    "watch": "node-sass sass/main.scss css/style.css -w",
    "build": "node-sass sass/main.scss css/style.css --output-style compressed"
  },
  ...
}
```

## 补充

liveserver实现保存刷新  
postcss实现自动补全前缀