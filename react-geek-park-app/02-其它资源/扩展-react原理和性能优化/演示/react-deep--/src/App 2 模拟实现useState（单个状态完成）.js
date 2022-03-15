import ReactDOM from 'react-dom'

// 创建自己的 useState
// 1 创建 useState 函数，实现 useState 基本使用形式
// 2 useState 的默认值，只在组件第一次渲染时生效，以后的每一次，都是最新的状态值了
//   所以，为了拿到最新的状态值，这个存储状态的值就应该放在 useState 外部来声明
//   因为如果将存储最新状态的变量放在了 useState 内部，那么将来每次调用 useState 时，都会创建新的变量，它的值每次都会被重置

// hookState 变量的作用：存储最新的状态值
let hookState
const useState = initialValue => {
  if (hookState === undefined) {
    hookState = initialValue
  }
  let state = hookState || initialValue

  // console.log('hookState 的值为：', hookState)

  // 更新状态的函数
  const setState = newValue => {
    // console.log('setState 接收到最新的状态：', newValue)
    hookState = newValue

    // 通知 React 重新渲染 App 组件
    render()
  }

  return [state, setState]
}

export default function App() {
  debugger
  const [count, setCount] = useState(0)

  console.log('App 组件重新渲染了', count)

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

// 为了能够让我们自己写的 useState 能够实现组件重新渲染
// 此处，我们借用 ReactDOM.render() 方法，来重新渲染组件
function render() {
  ReactDOM.render(<App />, document.getElementById('root'))
}
