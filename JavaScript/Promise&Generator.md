## Promise & Generator简单入门

> 参考[Promise & Generator——幸福地用同步方法写异步JavaScript](https://segmentfault.com/a/1190000007255138)

Promise的特性：
1. 关于promise，首先要意识到它是一种对象。这种对象可以用Promise构造函数来创建，也可以通过Nodejs本身一些默认的返回来获取这种对象。  
2. promise对象有三种状态：Pending，Fulfilled，Rejected。分别对应着未开始的状态，成功的状态，以及失败的状态。
3. 这种对象常常封装着异步的方法。在异步方法里面，通过resolve和reject来划定什么时候算是成功，什么时候算是错误，同时传参数给这两个函数。这些参数就是异步得到的结果或者错误。 
4. 异步有成功的时候，也有错误的时候。对象通过then和catch方法来规定异步结束之后的操作（正确处理函数/错误处理函数）。而then和catch是Promise.prototype上的函数，因此“实例化”之后（其实并非真正的实例）可以直接使用。
5. 这个promise对象还有一个神奇的地方，就是可以级联。每一个then里面返回一个promise对象，就又像上面所提的那样，有异步就等待异步，然后选择出规定好的正确处理函数还是错误处理函数。

Generator的特性：

1. 函数的内部通过yield来推进函数。通过定义yield后面的值来决定返回的value。
2. 数返回一个遍历器，这个遍历器有一个next方法，可以获取一个对象，这个对象就包含了yield定义好的参数。

### 如何用同步的写法写异步的代码

```js
function *foo(res, name, newPassword, oldPassword) {
  try {
    // yield一个promise对象，如果有错误就会被后面的catch捕捉到，成功就会返回user。
    const user = yield new Promise(function(resolve, reject) {
      // 常见的数据库读取星系
      User.get(name, function(err, user) {
        if(err) reject(err)
        resolve(user)
      })
    })

    if(user.password != oldPassword) {
      return res.send({errorMsg:"密码输入错误！"})
    }

    // 看到这一个异步函数和上一个的异步在写法上是基本上“同步”的，没有了相互嵌套，很优雅~也更加方便了debug~
    yield new Promise(function(resolve, reject) {
      User.update(name, newPassword, function(err) {
        if(err) reject(err)
        res.send({msg: "你成功更换密码了！"})
        resolve()
      })
    })

  } catch(e) {
    console.log("Error:", e)
    return res.send({errorMsg:"Setting Fail!"})
  }
}

// 使用的话就直接调用co包含对应的Generator函数即可。
co(foo(res, name, newPassword, oldPassword))
```

关于[co](https://github.com/tj/co)