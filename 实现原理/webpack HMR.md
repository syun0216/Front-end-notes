## webpack HMR原理解析

### 什么是HMR

Hot Module Replacement(HMR)当你对代码进行修改并保存后，webpack将对代码重新打包，并将新的模块发送到浏览器端，浏览器通过新换旧，这样在不刷新浏览器的前提下进行更新。

### 为什么需要HMR                       

* live reload: 刷新之后页面的状态丢失而webpack HMR不会
* 古老的开发流程中，我们需要手动运行命令进行打包，并且手动刷新页面，但是HMR工作流可以帮我们自动化完成。
* HMR兼容市面上大多数前端框架或库，比如React Hot Loader，Vue-loader

### HMR的工作原理图解

1. webpack 可以将不同的模块打包成 bundle 文件或者几个 chunk 文件，但是当我通过 webpack HMR 进行开发的过程中，我并没有在我的 dist 目录中找到 webpack 打包好的文件，它们去哪呢？
2. 通过查看 [webpack-dev-server](https://github.com/webpack/webpack-dev-server) 的 package.json 文件，我们知道其依赖于 [webpack-dev-middleware](https://github.com/webpack/webpack-dev-middleware) 库，那么 webpack-dev-middleware 在 HMR 过程中扮演什么角色？
3. 使用 HMR 的过程中，通过 Chrome 开发者工具我知道浏览器是通过 websocket 和 webpack-dev-server 进行通信的，但是 websocket 的 message 中并没有发现新模块代码。打包后的新模块又是通过什么方式发送到浏览器端的呢？为什么新的模块不通过 websocket 随消息一起发送到浏览器端呢？
4. 浏览器拿到最新的模块代码，HMR 又是怎么将老的模块替换成新的模块，在替换的过程中怎样处理模块之间的依赖关系？
5. 当模块的热替换过程中，如果替换模块失败，有什么回退机制吗


![2019-08-23-11-19-21]( https://xiaomuzhu-image.oss-cn-beijing.aliyuncs.com/2fd6143a6e0301de6f209115064cb5b5.png)

webpack配合webpack-dev-server进行应用开发的模块热更新流程图  

* 红色框为服务端，橙色框为浏览器端
* 绿色块为webpack代码控制的区域，蓝色块为webpack-dev-server代码控制的区域，洋红色的方框是文件系统，文件修改的改变就发生在这里，青色的区域是应用本身

1. 在webpack的watch模式下，文件系统中某一个文件发生修改，webpack监听到文件变化，根据文件对模块重新编译打包，并将打包后的代码通过简单的javascript对象保存到内存中
2. 第二步是webpack-dev-server和webpack之间的接口交互，而这一步，主要是dev-server的中间件webpack-dev-middleware和webpack之间的交互，webpack-dev-middleware调用wepack暴露的API对代码变化进行监控，并告诉webpack将代码打包到内存中
3. webpack-dev-server对文件变化的监控，但并不是重新打包。当我们将配置文件的devServer.watchContentBase设为true时，server会监听配置文件夹中的静态文件的变化，变化后会通知浏览器对应用进行live reload,而不是HMR
4. 主要是通过sockjs（webpack-dev-server的依赖）在浏览器端和服务端建立一个websocket长连接，将webpack编译打包的各个阶段的状态信息告知浏览器端，同时包括第三步中sever监听静态文件变化的信息。浏览器端根据这些socket消息进行不同的操作。当然服务端传递的最主要信息还是新模块的hash值，后面根据这一hash值进行模块热替换
5. webapck-dev-server/client端并不能够请求更新代码，也不会执行热更新模块操作，而把这些工作又交回给了webpack，wepack/hot/dev-server的工作就是根据webpack-dev-server、client传给他的信息以及dev-server的配置决定是刷新浏览器还是惊醒热更新。
6. HoTModuleReplacement.runtime是客户端HMR的中枢，它接受到上一步传递给他的新模块hash值，它通过JsonpMainTemplate.runtime向server发送Ajax请求，服务端返回一个json，该json包含了所有更新模块的hash值，获取该更新列表后，该模块再次通过jsonp请求，获取到最新模块代码，（这就是7、8、9步骤）
7. 而第10步HotModulePlugin将会对新旧模块进行对比，决定是否更新模块，在决定更新模块后，检查模块之间的依赖关系，更新的同时更新依赖引用
8. 最后一步，当HMR失败之后，回退到live-reload操作，使用浏览器刷新来获取最新的打包代码。

## 参考

[https://github.com/Advanced-Interview-Question/front-end-interview/blob/master/docs/guide/WebpackHMR.md](https://github.com/Advanced-Interview-Question/front-end-interview/blob/master/docs/guide/WebpackHMR.md)