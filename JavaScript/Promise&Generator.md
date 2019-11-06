## Promise & Generator 简单入门

> 参考[Promise & Generator——幸福地用同步方法写异步 JavaScript](https://segmentfault.com/a/1190000007255138)

Promise 的特性：

1. 关于 promise，首先要意识到它是一种对象。这种对象可以用 Promise 构造函数来创建，也可以通过 Nodejs 本身一些默认的返回来获取这种对象。
2. promise 对象有三种状态：Pending，Fulfilled，Rejected。分别对应着未开始的状态，成功的状态，以及失败的状态。
3. 这种对象常常封装着异步的方法。在异步方法里面，通过 resolve 和 reject 来划定什么时候算是成功，什么时候算是错误，同时传参数给这两个函数。这些参数就是异步得到的结果或者错误。
4. 异步有成功的时候，也有错误的时候。对象通过 then 和 catch 方法来规定异步结束之后的操作（正确处理函数/错误处理函数）。而 then 和 catch 是 Promise.prototype 上的函数，因此“实例化”之后（其实并非真正的实例）可以直接使用。
5. 这个 promise 对象还有一个神奇的地方，就是可以级联。每一个 then 里面返回一个 promise 对象，就又像上面所提的那样，有异步就等待异步，然后选择出规定好的正确处理函数还是错误处理函数。

### 构建 Promise

```js
function PromiseCustom(Fn) {
  let resolveCall = () => {
    console.log('default call')
  }
  this.then(onFullFill => {
    // 接受onFullFill方法
    resolveCall = onFullFill
  })
  function resolve(v) {
    resolveCall(v)
  }
  Fn(resolve)
}

new PromiseCustom((resolve, reject) => {
  setTimeout(() => {
    resolve('success')
  }, 2000)
}).then(r => {
  console.log(r)
})
```

在 new Promise 的时候会立即执行 fn,遇到异步方法，于是先执行 then 中的方法，将 onFullFill 存储到 resolveCall 中。异步时间到了以后，执行 resolve，从而执行 resolveCall 存储的 then 方法。

> 这里会有一个问题，就是 Promise 接受的方法不是异步，就会使 resolve 比 then 方法先执行。而此时 resolveCall 并没有被赋值，得不到我们想要的结果，所以要给 resolve 加上异步操作，从而保证 then 先执行

```js
function resolve(v) {
  setTimeout(_ => {
    resolveCall(v)
  })
}
```

### 增加链式调用

在每个 then 方法中 return 一个 this

```js
function Promise(Fn) {
  this.resolves = [] // 方便存储onFullfilled
  this.then = onFullfilled => {
    this.resolves.push(onFullfilled)
    return this
  }
  let resolve = value => { // 箭头函数，不用担心this指针问题
    setTimeout(- => {
      this.resolves.forEach(fn => fn(value))
    })
  }
  Fn(resolve)
}
```

可以看到，这里将接收 then 回调的方法改为了 Promise 的属性 resolves，而且是数组。这是因为如果有多个 then，依次 push 到数组的方式才能存储，否则后面的 then 会将之前保存的覆盖掉。这样等到 resolve 被调用的时候，依次执行 resolves 中的函数就可以了。这样可以进行简单的链式调用。

```js
new Promise((resolve, reject) => {
  resolve('success')
})
  .then(r => {
    console.log(r)
  })
  .then(r => {
    console.log(r)
  })
```

但我们会有这样的需求，某一个 then 链想自己 return 一个参数供后面的 then 使用：

eg:

```js
then(r => {
  console.log(r)
  return r
}).then()
```

要做到这一步，需要再加一个处理

```js
let resolve = value => {
  setTimeout(_ => {
    // 每次执行then的回调时判断一下是否有返回值，有的话更新value
    this.resolves.forEach(fn => (value = fn(value) || value))
  })
}
```

### 增加状态

增加 pending,fullfilled 和 rejected 状态

```js
function Promise(Fn) {
  this.resolves = []
  this.status = 'PENDING' // 初始为'PENDING'状态
  this.value
  this.then = onFulfilled => {
    if (this.status === 'PENDING') {
      // 如果是'PENDING'，则储存到数组中
      this.resolves.push(onFulfilled)
    } else if (this.status === 'FULFILLED') {
      // 如果是'FULFILLED'，则立即执行回调
      console.log('isFULFILLED')
      onFulfilled(this.value)
    }
    return this
  }

  let resolve = value => {
    if (this.status === 'PENDING') {
      // 'PENDING' 状态才执行resolve操作
      setTimeout(_ => {
        //状态转换为FULFILLED
        //执行then时保存到resolves里的回调
        //如果回调有返回值，更新当前value
        this.status = 'FULFILLED'
        this.resolves.forEach(fn => (value = fn(value) || value))
        this.value = value
      })
    }
  }

  Fn(resolve)
}
```

这里可能会有同学觉得困惑，我们通过一个例子来说明增加的这些处理到底有什么用。

```js
let getInfo = new Promise((resolve, reject) => {
  resolve('success')
}).then(_ => {
  console.log('hahah')
})

setTimeout(_ => {
  getInfor.then(r => {
    console.log(r) // success
  })
}, 200)
```

在 resolve 函数中，判断了'PENDING' 状态才执行 setTimeout 方法，并且在执行时更改了状态为'FULFILLED'。这时，如果运行这个例子，只会输出一个‘success’，因为接下来的异步方法调用时状态已经被改为‘FULFILLED’，所以不会再次执行。

这种情况要想它可以执行，就需要用到 then 方法里的判断，如果状态是'FULFILLED'，则立即执行回调。此时的传参是在 resolve 执行时保存的 this.value。这样就符合 Promise 的状态原则，PENDING 不可逆，FULFILLED 和 REJECTED 不能相互转化。 \* 增加失败处理

onRejected:

```js
this.reason
this.rejects = []

// 接收失败的onRejected函数

if (this.status === 'PENDING') {
  this.rejects.push(onRejected)
}

// 如果状态是'REJECTED'，则立即执行onRejected。

if (this.status === 'REJECTED') {
  onRejected(this.reason)
}

// reject方法

let reject = reason => {
  if (this.status === 'PENDING') {
    setTimeout(_ => {
      //状态转换为REJECTED
      //执行then时保存到rejects里的回调
      //如果回调有返回值，更新当前reason
      this.status = 'REJECTED'
      this.rejects.forEach(fn => (reason = fn(reason) || reason))
      this.reason = reason
    })
  }
}

// 执行Fn出错直接reject

try {
  Fn(resolve, reject)
} catch (err) {
  reject(err)
}
```

在执行储存 then 中的回调函数那一步有一个细节一直没有处理，那就是判断是否有 onFulfilled 或者 onRejected 方法，因为是允许不要其中一个的。现在如果 then 中缺少某个回调，会直接 push 进 undefined，如果执行的话就会出错，所以要先判断一下是否是函数。

```js
this.then = (onFulfilled, onRejected) => {
  // 判断是否是函数，是函数则执行

  function success(value) {
    return (typeof onFulfilled === 'function' && onFulfilled(value)) || value
  }

  function erro(reason) {
    return (typeof onRejected === 'function' && onRejected(reason)) || reason
  }

  // 下面的处理也要换成新定义的函数

  if (this.status === 'PENDING') {
    this.resolves.push(success)
    this.rejects.push(erro)
  } else if (this.status === 'FULFILLED') {
    success(this.value)
  } else if (this.status === 'REJECTED') {
    erro(this.reason)
  }
  return this
}
```

因为 reject 回调执行时和 resolve 基本一样，所以稍微优化一下部分代码。

```js
if (this.status === 'PENDING') {
  let transition = (status, val) => {
    setTimeout(_ => {
      this.status = status
      let f = status === 'FULFILLED',
        queue = this[f ? 'resolves' : 'rejects']
      queue.forEach(fn => (val = fn(val) || val))
      this[f ? 'value' : 'reason'] = val
    })
  }

  function resolve(value) {
    transition('FULFILLED', value)
  }

  function reject(reason) {
    transition('REJECTED', reason)
  }
}
```

### 串行 Promise

假设有多个 ajax 请求串联调用，下一个需要上一个的返回值作为参数，并且要 return 一个新的 Promise 捕捉错误。之前的例子可以执行是因为没有在 then 中做异常处理，即没有 reject，只是传递了数据。我们需要每个 then 方法中 return 一个新的 Promise。

```js
// 把then方法放到原型上，这样new一个新的Promise时就回去引用prototype的then方法，而不是复制一份
Promise.prototype.then = function(onFulfilled, onRejected) {
  let promise = this
  return new Promise((resolve, reject) => {
    function success(value) {
      let val =
        (typeof onFulfilled === 'function' && onFulfilled(value)) || value
      resolve(val) // 执行完这个then方法的onFulfilled以后，resolve下一个then方法
    }

    function erro(reson) {
      let rea = (typeof onRejected === 'function' && onRejected(reson)) || reson
      reject(rea) // 同resolve
    }
    if (promise.status === 'PENDING') {
      promise.resolves.push(success)
      promise.rejects.push(erro)
    } else if (promise.status === 'FULFILLED') {
      success(promise.value)
    } else if (promise.status === 'REJECTED') {
      erro(promise.reason)
    }
  })
}
```

在成功的函数中还需要做一个处理，用以支持在 then 的回调函数（onFulfilled）中 return 的 Promise。如果 onFulfilled 方法 return 的是一个 Promise，则直接执行它的 then 方法。如果成功了，就继续执行后面的 then 链，失败了直接调用 reject。

```js
function success(value) {
  let val = tyoeof onFulfilled === 'function' && onFulfilled(value) || value;
  if(val && typeof val['then'] === 'function') { // 判断是否有then方法
    val.then(function(value) { // 如果返回的是Promise 则直接执行得到结果后在调用后面的then方法
      resolve(value),
    }, function(reson) {
      reject(reson)
    })
  } else {
    resolve(val)
  }
}
```

找个例子测试一下

```js
function getInfo(success, fail) {
  return new Promise((resolve, reject) => {
    setTimeout(_ => {
      let ran = Math.random()
      console.log(success, ran)
      if (ran > 0.5) {
        resolve(success)
      } else {
        reject(fail)
      }
    }, 200)
  })
}
getInfo('Vchat', 'fail')
  .then(
    res => {
      console.log(res)
      return getInfo('可以线上预览了', 'erro')
    },
    rej => {
      console.log(rej)
    }
  )
  .then(
    res => {
      console.log(res)
    },
    rej => {
      console.log(rej)
    }
  )
// 输出
// Vchat 0.8914818954810422
// Vchat
// 可以线上预览了 0.03702367800412443
// erro
```

Generator 的特性：

1. 函数的内部通过 yield 来推进函数。通过定义 yield 后面的值来决定返回的 value。
2. 数返回一个遍历器，这个遍历器有一个 next 方法，可以获取一个对象，这个对象就包含了 yield 定义好的参数。

### 如何用同步的写法写异步的代码

```js
function* foo(res, name, newPassword, oldPassword) {
  try {
    // yield一个promise对象，如果有错误就会被后面的catch捕捉到，成功就会返回user。
    const user = yield new Promise(function(resolve, reject) {
      // 常见的数据库读取星系
      User.get(name, function(err, user) {
        if (err) reject(err)
        resolve(user)
      })
    })

    if (user.password != oldPassword) {
      return res.send({ errorMsg: '密码输入错误！' })
    }

    // 看到这一个异步函数和上一个的异步在写法上是基本上“同步”的，没有了相互嵌套，很优雅~也更加方便了debug~
    yield new Promise(function(resolve, reject) {
      User.update(name, newPassword, function(err) {
        if (err) reject(err)
        res.send({ msg: '你成功更换密码了！' })
        resolve()
      })
    })
  } catch (e) {
    console.log('Error:', e)
    return res.send({ errorMsg: 'Setting Fail!' })
  }
}

// 使用的话就直接调用co包含对应的Generator函数即可。
co(foo(res, name, newPassword, oldPassword))
```

关于[co](https://github.com/tj/co)
