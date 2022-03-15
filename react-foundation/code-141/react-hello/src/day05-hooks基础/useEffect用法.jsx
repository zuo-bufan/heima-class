import React, { useEffect, useState } from 'react'

function App(props) {
  const [count, setCount] = useState(10000)

  const [num, setNum] = useState(0)

  // 需求：每次count变化，html页面的title也跟随变化
  /**
   * 语法：useEffect(callback函数, [状态1，状态2...])
   * 执行：相当于 componentDidMount + componentDidUpdate（2合1）
   * 1. 组件第一次渲染，会执行一次callback函数
   * 2. 状态数据变化，callback函数会再次执行
   * 注意：
   * useEffect第二个参数是个数组，可以指定依赖=》只有在指定依赖发生变化，才会再次执行callback函数
   */
  //  componentDidMount + componentDidUpdate（2合1）
  useEffect(() => {
    console.log('useEffect1')
    // 操作DOM（副作用）
    document.title = `我要月薪过${count}`
  }, [count])

  useEffect(() => {
    console.log('useEffect2')
  }, [num])

  // 当依赖项是[]空数组=》相当于componentDidMount
  // 作用：1.发请求  2.操作DOM
  useEffect(() => {
    console.log('useEffect3')
  }, [])

  useEffect(() => {
    console.log('useEffect4')
    // 这里返回的函数作用=》相当于componentWillUnmount
    // 作用：清除定时器、解绑事件等
    return () => console.log(4)
  }, [])

  return (
    <div>
      <h1>useState更新说明</h1>
      <ul>
        <li>{count}</li>
        <li>{num}</li>
        <li>
          <button onClick={() => setCount(count + 1)}>add1</button>
        </li>
        <li>
          <button onClick={() => setNum(num + 10)}>add2</button>
        </li>
      </ul>
    </div>
  )
}

export default App
