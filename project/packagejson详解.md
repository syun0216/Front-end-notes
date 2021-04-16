---
title: packagejson详解
date: 2021-04-15 23:31:10
permalink: /pages/b2aac9/
categories:
tags:
  - 
---

## package json详解

::: tip 摘自
翻译：疯狂的技术宅

原文：heynode.com/tutorial/wh…

未经允许严禁转载
:::

### 用途

项目的 package.json 是配置和描述如何与程序交互和运行的中心。 npm CLI（和 yarn）用它来识别你的项目并了解如何处理项目的依赖关系。package.json 文件使 npm 可以启动你的项目、运行脚本、安装依赖项、发布到 NPM 注册表以及许多其他有用的任务。 npm CLI 也是管理 package.json 的最佳方法，因为它有助于在项目的整个生命周期内生成和更新 package.json 文件。  
package.json 会在项目的生命周期中扮演多个角色，其中某些角色仅适用于发布到 NPM 的软件包。即使你没有把项目发布到 NPM 注册表中，或者没有将其公开发布给其他人，那么 package.json 对于开发流程仍然至关重要。

### 常用字段

#### name

```json
name: my-project
```

<span style="font-weight: bold; color: red">name</span> 字段定义包的名称。发布到 NPM 注册表时，这是软件包将在其中显示的名称。它不能超过 214 个字符，只能是小写字母，并且必须是URL安全的（允许连字符和下划线，但 URL 中不允许使用空格或其他字符）。  
如果将软件包发布到 NPM，则 <span style="font-weight: bold; color: red">name</span> 属性是必需的，并且必须是唯一的。如果尝试用 NPM 注册表上当前已经使用的名称发布程序包，则会收到错误消息。如果你的软件包并不是要发布到 NPM 上，则 <span style="font-weight: bold; color: red">name</span> 不必是唯一的。

#### version

```json
version: 1.0.0
```

<span style="font-weight: bold; color: red">version</span> 字段对于任何已发布的软件包都非常重要，并且在发布之前是必填的。这是 package.json 描述的软件的当前版本。

#### description

NPM 注册表将<span style="font-weight: bold; color: red">description</span> 字段用于发布的软件包，以在搜索结果中和 npmjs.com 网站上描述该软件包。

#### main

```json
"main": "src/index.js",
```

<span style="font-weight: bold; color: red">main</span> 字段是 package.json 的功能属性。它定义了项目的入口点，通常是用于启动项目的文件。
如果你的包（例如其名称为 foo-lib）是由用户安装的，则当用户执行 require('foo-lib') 时，这是  require 返回的 <span style="font-weight: bold; color: red">main</span> 字段中所列出的文件的 module.exports 属性。  
它的值通常是项目根目录中的 index.js 文件，但也可以是你选择作为包的主入口的任何文件。

#### bin

```json
{
    "bin": {
        "cli": "bin/index"
    }
}
```

在安装第三方带有bin字段的npm，那可执行文件会被链接到当前项目的./node_modules/.bin中，在本项目中，就可以很方便地利用npm执行脚本（package.json文件中scripts可以直接执行：'node node_modules/.bin/cli'）；  

关于上文提到的node node_modules/.bin/myapp，啥时候可以不用写node，及后面的路径？

当需要node环境时就需要加上node前缀，既然加上了node，那node_modules/.bin也是必须的(因为node cli会去查找当前路径下的bin/index，这样肯定是不对的)；简便的方式：在上文的index中第一行写入#!/usr/bin/env cli

<img src="./imgs/packagejson.png"/>

#### files

files字段是一个被项目包含的文件名数组，如果你在里面放一个文件夹名，那么这个文件夹中的所有文件都会被包含进项目中(除非是那些在其他规则中被忽略的文件)。

#### husky

husky是一个为git客户端增加hook的工具，通过在.git目录下增加相应的钩子实现在pre-commit 阶段执行一系列流程，依赖安装：

```bash
npm i husky -D
```

package.json中添加"husky": {}字段，或新建文件.huskyrc，配置如下：

```json
{
    "husky": {
        "commit-msg": "commitlint -E HUSKY_GIT_PARAMS",
        "pre-push": "npm run lint",
        "pre-commit": "lint-staged"
    }
}
```

#### lint-staged

lint-staged过滤

```json
npm i lint-staged prettier -D
```

配置：  
```json
"lint-staged": {
    "*.{ts,tsx,js,json}": [
      "prettier --write",
      "git add"
    ],
    "*.{tsx,ts}": [
      "eslint"
    ]
  },
```

#### peerDependencies

在某些情况下，当一个主机无法require依赖包时，你会想要告诉它还有哪些工具或库与这个依赖包兼容。这通常被成为一个插件。尤其是在host文档中声明的模块会暴露一个特定的接口。

#### private 

如果你在包的package.json中设置"private": true，则npm会拒绝发布它。这是防止私有包被以外发布的一种方法。

### 总结

package.json 文件是 Node 项目的核心。它记录了有关发布到 NPM 之前所需要的项目的重要元数据，它还定义了 npm 用于安装依赖项、运行脚本以及标识包的入口点的项目功能属性。  
并非 package.json 中所有字段都适用于你，但是我们可以通过其在 package.json 文件中记录有关程序的信息来获得一些强大的好处。了解 package.json 的角色以及它与 npm 的关系是开发 Node.js 应用的重要组成部分，并且正日益成为 JavaScript 生态系统的重要组成部分。
