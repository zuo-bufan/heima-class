import React, { createContext, useContext, useState } from 'react'

// 创建context对象
const CountCotext = createContext()

function Son() {
  // 方式2
  const { count, add } = useContext(CountCotext)

  return (
    <div>
      <h3>孙子组件</h3>
      <ul>
        <li>
          {/* 方式1 */}
          <CountCotext.Consumer>{(data) => data.count}</CountCotext.Consumer>
        </li>
        <li>{count}</li>
        <li>
          <button onClick={() => add()}>修改爷爷组件数据</button>
        </li>
      </ul>
    </div>
  )
}

function Child() {
  return (
    <div>
      <h2>子组件</h2>
      <hr />
      <Son />
    </div>
  )
}

function App(props) {
  const [count, setCount] = useState(0)

  const add = () => {
    setCount(count + 1)
  }

  // 需求：App组件的count和add方法传给son组件
  /**
   * 注意事项：
   * 1. createContext可以多次使用
   * 2. context对象要一一对应（确保Provider和Consumer使用的是一个context对象）
   */
  return (
    <CountCotext.Provider value={{ count, add }}>
      <h1>useContext使用</h1>
      <ul>
        <li>{count}</li>
        <li onClick={add}>
          <button>add</button>
        </li>
      </ul>
      <hr />
      <Child />
    </CountCotext.Provider>
  )
}

export default App
