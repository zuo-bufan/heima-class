import { useState } from 'react'

function App(props) {
  // 语法：useState(状态数据默认值 | 任意类型) =》返回数组：[状态数据，修改状态数据的方法]
  // 注意：
  //  * 调用第二个方法修改状态数据，同样遵循：数据不可变 * === 不能嵌套使用 ===
  // 1. 简单类型
  const [count, setCount] = useState(0)
  const [isShow, setShow] = useState(true)
  // 2. 复杂类型
  const [obj, setObj] = useState({ name: '刘天宇', age: 18 })
  const [arr, setArr] = useState([1, 2, 3])

  // 使用注意：不能嵌套
  // 错误示例1：
  // const test=()=>{
  //   const [count, setCount] = useState(0)
  // }
  // 错误示例2：
  // if(isShow) {
  // const [count, setCount] = useState(0)
  // }

  // 点击加一
  const add = () => {
    setCount(count + 1)
  }

  // 修改obj
  const changeObj = () => {
    setObj({ ...obj, age: 20 })
  }

  // 修改arr
  const addList = () => {
    setArr([Math.random() * 1000, ...arr])
  }

  return (
    <div>
      <h1>useState使用</h1>
      <ul>
        <li>{count}</li>
        <li>
          <button onClick={() => setCount(count + 1)}>add1</button>
        </li>
        <li>
          <button onClick={add}>add2</button>
        </li>
        <li>{isShow ? '学习中...' : '已学会！！！'}</li>
        <li>
          <button onClick={() => setShow(!isShow)}>切换</button>
        </li>
        <li>
          {obj.name} - {obj.age}
        </li>
        <li>
          <button onClick={changeObj}>修改obj</button>
        </li>
      </ul>
      <hr />
      <ul>
        {arr.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
      <button onClick={addList}>添加</button>
    </div>
  )
}

export default App
