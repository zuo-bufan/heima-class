import { useEffect, useState } from 'react'

function App(props) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    console.log('最新值：', count)
  }, [count])

  const add1 = () => {
    setCount(count + 1)
    setCount(count + 2)
    // 只执行最后一次=》表现和类组件的this.setState({},()=>{})
    setCount(count + 3)
    console.log('上次的值：', count)
  }
  const add2 = () => {
    setCount((prev) => prev + 1)
    setCount((prev) => prev + 2)
    setCount((prev) => prev + 3)
    // 累加=》三次都执行了 =》表现和类组件this.setState(()=>{})
    console.log('上次的值：', count)
  }
  return (
    <div>
      <h1>useState进阶</h1>
      <ul>
        <li>{count}</li>
        <li>
          <button onClick={add1}>add1</button>
        </li>
        <li>
          <button onClick={add2}>add2</button>
        </li>
      </ul>
    </div>
  )
}

export default App
