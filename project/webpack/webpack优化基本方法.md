---
title: webpack优化基本方法
date: 2020-05-18 18:39:52
permalink: /pages/14a436/
categories:
tags:
  - 
---
## webpack优化基本方法

> 参考[webpack优化的一些基本方法](https://juejin.im/post/5d68d6b0e51d4561a60d9e1c)

## 构建优化

### noParse(无序解析内部依赖包)

引入的第三方包如:jQuery，这些包内部是肯定不会依赖别的包，所以webpack不需要解析它的内部依赖关系，可以在webpack配置文件中的module属性下加上noParse，它是一个正则表达式，可以匹配无需解析的模块，这样可以节约webpack的打包时间，提高打包效率

```js
module: {
  noParse: /jquery/
}
```

> 必须确保添加的包中没有依赖别的包，否则会报依赖错误

### DLLPlugin(动态链接库)

项目中依赖的一些第三方包比如react、vue一般情况下内容不会发生变化，所以不需要每一次都对它们进行构建，而是只需打包一次，之后直接引用就可以，知道第三方包需要更新版本时再重新进行构建。这样我们打包的时候只需要构建我们的业务代码即可。

**Dllplugin**插件可以帮助我们把这些不做修改的包抽取为动态链接库，并且会生成一个名为**manifest.json**的文件，这个文件是用来让**DLLReferencePlugin**映射到相关的依赖上去的。

以React为例抽取dll

1. 创建抽取dll的webpack配置未见webpack.dll.js

```js
const path = require('path')
const webpack = require('webpack')
module.exports = {
  mode: 'development',
  // 入口文件：将要配置成Dll的库放进来
  entry: {
    vendor: ['react','redux','react-router']
  },
  output: {
    // 输出文件名
    filename: '[name]_dll.js',
    // 输出文件路径
    path: path.resolve(__dirname, '../dist'),
    // 将打包好的文件暴露在全局
    library: '[name]_dll'
  },
  plugins: [
    new webpack.DllPlugin({
      //dll文件名
      name: '[name]_dll',
      //清单文件路径
      path: path.resolve(__dirname, '..dist/manifest.json')
    })
  ]
}
```

2. 配置<font color=#ff5858>DllReferencePlugin</font>

这个插件一般是在webpack的主配置文件中配置，在plugins配置下添加如下配置，<font color=#ff5858>manifest</font>文件会将dll文件的应用映射到模块的id上，然后在需要的时候来引用DLL文件。

```js
new webpack.DllReferencePlugin({
  context: __dirname,
  manifest: path.resolve(__dirname, '../dist/manifest.json')
})
```

3. 构建

package.json文件中添加：

```json
scripts: {
  "build:dll": "webpack --config ./build/wepack.dll.js"
}
```

在命令行中运行该命令，这会在dist目录下生成react的Dll文件，还会生成一个mainfest.json文件，这个文件包含了import和require的request到模块id的映射。DLLReferencePlugin也会引用这个文件。然后再进行打包，就不会对react重复打包，而是直接引用生成的react_dll文件。

4. 引入

```html
<script src="./dist/vendor.dll.js"></script>
```

## 代码优化

### webpack自带优化

webpack的mode设置为production，进行生产模式打包时会自动进行以下优化： 

* tree shaking

webpack会在打包时移出引入了但未引用的代码，但是只有通过es6模块系统的**import**语法才有效，目的是减小生产环境下的文件体积，
* scope hoisting

分析模块之间的依赖关系，会尽可能的将打散的模块合并到一个函数中去。也是只适用于es6的import和只被引用一次的模块
* 代码压缩  

所有代码自动使用UglifyJsPlugin进行压缩

### CSS优化

* 将CSS拆分为独立文件 

mini-css-extract-plugin可以将CSS拆分为单独的文件，使CSS文件可以被异步加载，加快页面加载呈现的速度。

1. 安装插件

```shell
npm i mini-css-extract-plugin -D
```

2. 修改主配置文件，使用该插件

```js
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
    ...,
    module: {
        rules: [
            ...,
            {
                test: /\.css$/,
                // 将原来多有使用style-loader来处理的地方替换为使用MiniCssExtractPlugin.loader
                // use: ['style-loader', 'css-loader'],
                use: [MiniCssExtractPlugin.loader, 'css-loader']
            }
        ]
    },
    plugins: [
        ...,
        new MiniCssExtractPlugin({
            // 生成的文件名
            filename: '[name].css'
        })
    ]
}
```

* 压缩css

**optimize-css-assets-webpack-plugin**插件可以用来压缩CSS文件，但使用该插件会导致webpack默认的js压缩配置无法生效，所以还需要手动对js代码进行压缩，js压缩使用官方推荐的**terser-webpack-plugin**

1. 安装插件

```shell
$ npm i optimize-css-assets-webpack-plugin terser-webpack-plugin -D
```

2. 修改主配置文件，使用该插件

```js
const TerserJSPlugin = require('terser-webpack-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')

module.exports = {
    ...,
    optimization: {
        minimizer: [new TerserJSPlugin({}), new OptimizeCSSAssetsPlugin({})],
    }
}
```

## js优化

* 拆分公共代码

```js
Optimization: {
  splitChunks: {
    Chunks: 'all'
  }
}
```

* IgnorePlugin(忽略插件)

有很多的第三方包内部会做国际化处理，包含很多的语言包，而这些语言包对我们来说时没有多大用处的，只会增大包的体积，我们完全可以忽略掉这些语言包，从而提高构建效率，减小包的体积。  
以moment为例，首先找到moment中语言包所在的文件夹，然后在webpack配置文件中添加插件

```js
// 该方法的两个参数都是正则，第一个参数表示要忽略的路径，第二个表示该资源所在目录，在该文件夹下引入的语言包都会被忽略
new webpack.IgnorePlugin(/\.\/locale/, /moment/)
```
这时候moment使用默认语言英语，如果要使用别的语言，可以手动引入需要使用的语言包。
```js
import moment from 'moment'
import 'moment/locale/zh-cn'
moment.locale('zh-CN')
```

* 懒加载

在页面中有一些代码块可能并不是在页面初始化的时候就需要使用的，需要用户的某些操作出发才会使用，如果用户不触发这个操作那这个代码块可能永远不会被使用。我们可以将这些某个操作触发才会使用的代码块按需加载进来，而不是在页面创建的时候直接加载，这样可以加快初始页面的加载速度。

```js
// 假设在页面中有一个id为btn的按钮，当点击这个按钮的时候需要对时间进行操作
const btn = document.querySelector('#btn')
btn.onclick = e => import(/* webpackChunkName: "moment" */ 'moment').then(module => {
    var moment = module.default;
    moment().format('YYYY-MM-DD')
})
```

但是使用懒加载会影响用户体验，所以在懒加载的同时可以使用魔法注释：Prefetching，可以在首页资源加载完毕后，空闲时间时，将动态导入的资源加载进来，这样即可以提高页面加载速度又保证了用户体验。

```js
const btn = document.querySelector('#btn')
btn.onclick = e => import(/* webpackChunkName: "moment" *//* webpackPrefetch: true */ 'moment').then(module => {
    var moment = module.default;
    moment().format('YYYY-MM-DD')
})
```