### React Hooks 详解

### 参考

> [React Hooks 详解（近 1w 字）+ 项目实战](https://juejin.im/post/5dbbdbd5f265da4d4b5fe57d)  
> [React Hooks 全面理解教程](http://caibaojian.com/react-hooks.html)

### 什么是 React Hooks

- React 提倡使用函数组件，但是需要 state 的时候只能使用类组件，因为函数组件没有实例，没有生命周期，只有类组件才有
- Hooks 是 16.8 新增的
- 凡是 use 开头的 React API 都是 Hooks
- React Hooks 要解决的问题是状态共享，是继 render-props 和 HOC 之后的第三种状态共享方案，不会产生 JSX 嵌套地狱问题。

### Hooks 解决的问题

#### 1. 类组件的不足

- 状态逻辑难复用： 在组件之间复用状态逻辑很难，可能要用到 render props （渲染属性）或者 HOC（高阶组件），但无论是渲染属性，还是高阶组件，都会在原先的组件外包裹一层父容器（一般都是 div 元素），导致层级冗余
- 趋向复杂难以维护：
  - 在生命周期函数中混杂不相干的逻辑（如：在 componentDidMount 中注册事件以及其他的逻辑，在 componentWillUnmount 中卸载事件，这样分散不集中的写法，很容易写出 bug ）
  - 类组件中到处都是对状态的访问和处理，导致组件难以拆分成更小的组件
- this 指向问题： 父组件给子组件传递函数时，必须绑定 this
  - react 中组件四种绑定 this 方法

#### 2.Hooks 的优势

- 能优化类组件三大问题
- 能在无需修改组件结构的情况下复用状态逻辑
- 能将组件中相互关联的部分拆分成更小的函数（比如设置订阅或请求数据）
- 副作用的关注点分离：副作用指那些没有发生在数据向视图转换过程中的逻辑，如 ajax 请求、访问原生 dom 元素、本地持久化缓存、绑定/解绑事件、添加订阅、设置定时器、记录日志等。以往这些副作用都是写在类组件生命周期函数中的。而 useEffect 在全部渲染完毕后才会执行，useLayoutEffect 会在浏览器 layout 之后，painting 之前执行。

### 注意事项

- 只能在函数内部的最外层调用 Hook，不要在循环、条件判断或者子函数中调用
- 只能在 React 函数组件中调用 Hook，不要再其他 js 函数中调用(Class 中也会报错貌似)

### useState 、useMemo 、useCallback

```js
const [state, setState] = useState(initialState)
// useState的唯一参数就是初始化state
// useState返回一个数组，一个state，一个更新state的函数
```

例子：

```js
function Child(props) {
  let { num, handleClick } = props
  return <div onClick={() => handleClick(num++)}>{num}</div>
}

function App() {
  const { useState } = React
  let [num, setNum] = useState(0)
  return <Child num={num} handleClick={setNum} />
}
ReactDOM.render(<App />, document.getElementById('app'))
```

### 每次渲染都是独立的闭包

```js
function Counter2() {
  let [num, setNum] = useState(0)
  function alertNumber() {
    setTimeout(() => {
      //alert 只能获取点击按钮时的那个状态
      alert(num)
    })
  }
  return (
    <>
      <p>{number}</p>
      <button onClick={() => setNumber(number + 1)}>+</button>
      <button onClick={alertNumber}>alertNumber</button>
    </>
  )
}
```

### 函数式更新

```js
function Counter() {
  let [number, setNumber] = useState(0)
  function lazy() {
    setTimeout(() => {
      // setNumber(number+1);
      // 这样每次执行时都会去获取一遍 state，而不是使用点击触发时的那个 state
      setNumber(number => number + 1)
    }, 3000)
  }
  return (
    <>
      <p>{number}</p>
      <button onClick={() => setNumber(number + 1)}>+</button>
      <button onClick={lazy}>lazy</button>
    </>
  )
}
```

### 惰性初始化 state

- initialState 参数只会在组件初始化渲染中起作用，后续渲染时会被忽略
- 如果初始 state 需要通过复杂计算获得，则可以传入一个函数，在函数中计算并返回初始的 state，此函数只在初始渲染时被调用

```js
function Counter5(props) {
  console.log('Counter5 render')
  // 这个函数只在初始渲染时执行一次，后续更新状态重新渲染组件时，该函数就不会再被调用
  function getInitState() {
    return { number: props.number }
  }
  let [counter, setCounter] = useState(getInitState)
  return (
    <>
      <p>{counter.number}</p>
      <button onClick={() => setCounter({ number: counter.number + 1 })}>
        +
      </button>
      <button onClick={() => setCounter(counter)}>setCounter</button>
    </>
  )
}
```

### 性能优化

- Object.is (浅比较)

- 减少渲染次数
  - 类组件：PureComponent
  - 函数组件: React.memo

```js
import React, { useState, memo, useMemo, useCallback } from 'react'

function SubCounter({ onClick, data }) {
  console.log('SubCounter render')
  return <button onClick={onClick}>{data.number}</button>
}
SubCounter = memo(SubCounter)
export default function Counter6() {
  console.log('Counter render')
  const [name, setName] = useState('计数器')
  const [number, setNumber] = useState(0)
  const data = { number }
  const addClick = () => {
    setNumber(number + 1)
  }
  return (
    <>
      <input type='text' value={name} onChange={e => setName(e.target.value)} />
      <SubCounter data={data} onClick={addClick} />
    </>
  )
}
```

### useReducer

useState 的替代方案。 接受类型为 (state, action) => newState 的 reducer，并返回与 dispatch 方法配对的当前状态。

```js
import { useRedcer } from 'react'
function counter3() {
  const initialState = { count: 0 }
  function reducer({ state, action }) {
    switch (action.type) {
      case 'increment': {
        return { count: state.count + 1 }
      }
      case 'decrement': {
        return { count: state.count - 1 }
      }
      case 'reset': {
        return initialState
      }
      default:
        return state
    }
  }
  function Counter() {
    const [state, dispatch] = useReducer(reducer, { count: initialCount })
    return (
      <>
        Count: {state.count}
        <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
        <button onClick={() => dispatch({ type: 'increment' })}>+</button>
        <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
      </>
    )
  }
}
```

useReducer 接受可选的第三个参数 initialAction 。如果提供，则在初始渲染期间应用初始操作。这对于计算包含通过 props(属性) 传递的值的初始 state(状态) 非常有用

```js
function Counter({initialCount}) {
  const [state, dispatch] = useReducer(
    reducer,
    initialState,
    {type: 'reset', payload: initialCount},
  );

  return (
    <>
      Count: {state.count}
      <button
        onClick={() => dispatch({type: 'reset', payload: initialCount})}>
        Reset
      </button>
      <button onClick={() => dispatch({type: 'increment'})}>+</button>
      <button onClick={() => dispatch({type: 'decrement'})}>-</button>
    </>
  );
}
```

### useCallback

```js
const memoizedCallback = useCallback(
  () => {
    doSomething(a, b);
  },
  [a, b],
);
```

返回一个 memoized 回调。

### useMemo

```js
const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);
```

传递 “create” 函数和输入数组。 useMemo 只会在其中一个输入发生更改时重新计算 memoized 值。 此优化有助于避免在每个渲染上进行高开销的计算。

### useRef

useRef 返回一个可变的 ref 对象，其 .current 属性被初始化为传递的参数（initialValue）。返回的对象将存留在整个组件的生命周期中。

```js
function TextInputWithFocusButton() {
  const inputEl = useRef(null);
  const onButtonClick = () => {
    // `current` points to the mounted text input element
    inputEl.current.focus();
  };
  return (
    <>
      <input ref={inputEl} type="text" />
      <button onClick={onButtonClick}>Focus the input</button>
    </>
  );
}
```

### useImperativeMethods

```js
useImperativeMethods(ref, createInstance, [inputs])
```

useImperativeMethods 自定义使用 ref 时公开给父组件的实例值。与往常一样，在大多数情况下应避免使用refs的强制代码。 useImperativeMethods 应与 forwardRef 一起使用：

```js
function FancyInput(props, ref) {
  const inputRef = useRef();
  useImperativeMethods(ref, () => ({
    focus: () => {
      inputRef.current.focus();
    }
  }));
  return <input ref={inputRef} ... />;
}
FancyInput = forwardRef(FancyInput);
```

### useLayoutEffect

签名与 useEffect 相同，但在所有 DOM 变化后同步触发。 使用它来从 DOM 读取布局并同步重新渲染。 在浏览器有机会绘制之前，将在 useLayoutEffect 内部计划的更新将同步刷新。

在尽可能的情况下首选标准的 useEffect ，以避免阻止视觉更新。

### useEffect

一般用于网络请求，不影响主体render，在render结束后进行render(after every render cycle)，以下是官网的解析：

首先了解什么是副作用(Side Effect)：副作用(Side Effect)是指函数或者表达式的行为依赖于外部世界。具体可参照Wiki上的定义，副作用是指  
* 函数或者表达式修改了它的 scope 之外的状态
* 函数或者表达式除了返回语句外还与外部世界或者它所调用的函数有明显的交互行为