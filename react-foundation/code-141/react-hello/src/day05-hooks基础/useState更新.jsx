import { useState } from 'react'

function App(props) {
  /**
   * 函数组件数据驱动：
   * 1. 修改了状态数据之后，视图更新=》把函数重新调用一遍
   * 疑问❓：重新执行之后，useState函数也重新执行，为什么状态数据可以保留下来？
   * 答：react记录了（状态机制）状态count的值
   * 注意：useState 的初始值(参数)只会在组件第一次渲染时生效
   */
  const [count, setCount] = useState(0)
  console.log('更新了：', count)
  return (
    <div>
      <h1>useState更新说明</h1>
      <ul>
        <li>{count}</li>
        <li>
          <button onClick={() => setCount(count + 1)}>add</button>
        </li>
      </ul>
    </div>
  )
}

export default App
