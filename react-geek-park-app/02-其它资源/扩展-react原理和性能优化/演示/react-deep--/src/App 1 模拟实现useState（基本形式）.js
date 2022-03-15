// 创建自己的 useState
// 1 创建 useState 函数，实现 useState 基本使用形式
const useState = initialValue => {
  let state = initialValue

  // 更新状态的函数
  const setState = newValue => {
    console.log('setState 接收到最新的状态：', newValue)
  }

  return [state, setState]
}

export default function App() {
  const [count, setCount] = useState(0)

  // console.log('count', count)

  const onIncrement = () => {
    setCount(count + 1)
  }

  return (
    <div style={{ backgroundColor: 'pink', padding: 10 }}>
      <h1>计数器：{count}</h1>
      <button onClick={onIncrement}>+1</button>

      <hr />
      {/* <p>年龄：{age}</p>
    <button onClick={onAgeIncrement}>年龄+1</button> */}
    </div>
  )
}
