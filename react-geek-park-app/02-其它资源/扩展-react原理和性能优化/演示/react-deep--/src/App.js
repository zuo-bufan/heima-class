import ReactDOM from 'react-dom'

// 创建自己的 useState
// 1 创建 useState 函数，实现 useState 基本使用形式
// 2 useState 的默认值，只在组件第一次渲染时生效，以后的每一次，都是最新的状态值了
//   所以，为了拿到最新的状态值，这个存储状态的值就应该放在 useState 外部来声明
//   因为如果将存储最新状态的变量放在了 useState 内部，那么将来每次调用 useState 时，都会创建新的变量，它的值每次都会被重置
// 3 让 useState 能够支持多次 useState 提供多个状态
//   注意：useState 等 hook 内部通过 调用顺序 来区分到底是哪个 hook
//        所以，我们可以借鉴这个特性，来通过 **索引** 区分不同的 hook
//   因此，为了实现支持多次 useState 调用，可以创建一个索引来记录当前是第几次 hook 调用

// 为了让多次调用 useState 产出的状态，不会相互影响，可以使用多个变量来存储。但是，我们无法明确知道 useState 会被调用多少次
// 因此，也不能提前知道要创建多少个变量。所以，此处，我们可以数组来存储值
// 每次调用 useState 都会自己的 索引 来表示顺序，所以，此处正好可以通过该索引来对应数组中的值
// 比如：
//  第一次调用 const [count, setCount] = useState(1)
//    => hookIndex = 0
//    => hookState[hookIndex] = 1

//  第二次调用 const [age, setAge] = useState(18)
//    => hookIndex = 1
//    => hookState[hookIndex] = 18

// 将来，即使要修改不同的状态值，只需要拿着自己的索引找到数组中对应的数据来修改即可
// 比如：
//  修改 count => hookState[自己的索引] => hookState[0] = 2
//  修改 age   => hookState[自己的索引] => hookState[1] = 19

// 记录当前是第几次 useState 调用
let hookIndex = 0
// hookState 变量的作用：存储最新的状态值
let hookState = []

const useState = initialValue => {
  // 只需要在 useState 内部，创建一个 currentIndex 变量，就可以解决索引的问题
  // 使用 闭包 来存储每次调用 useState 时，自己的索引
  let currentIndex = hookIndex

  // 判断 hookState 是否有值，如果没有就使用 initialValue；否则，就直接返回 hookState
  hookState[currentIndex] = hookState[currentIndex] || initialValue
  // 更新状态的函数
  const setState = newValue => {
    // hookState[hookIndex] = newValue
    hookState[currentIndex] = newValue
    // 通知 React 重新渲染 App 组件
    render()
  }

  // 每次调用 useState，最后，都让 索引 +1
  const ret = [hookState[currentIndex], setState]
  hookIndex++
  return ret
}

/*
// 第一次调用：
const useState = initialValue => {
  let currentIndex = 0

  hookState[currentIndex] = hookState[currentIndex] || initialValue

  const setState = newValue => {
    hookState[0] = newValue
    render()
  }

  const ret = [hookState[currentIndex], setState]
  hookIndex++
  return ret
}

// 第 2 次调用：
const useState = initialValue => {
  let currentIndex = 1

  hookState[currentIndex] = hookState[currentIndex] || initialValue

  const setState = newValue => {
    hookState[1] = newValue
    render()
  }

  const ret = [hookState[currentIndex], setState]
  hookIndex++
  return ret
}
*/

// 创建自己的 useEffect
const useEffect = (callback, deps) => {
  // 获取上一次的依赖
  const lastDeps = hookState[hookIndex]

  // 记录有没有依赖项
  let hasNoDeps = false
  // 记录依赖项是否发生改变
  let hasDepsChanged = false
  // 判断有没有依赖项
  if (!deps) {
    // 没有依赖项
    hasNoDeps = true
  } else {
    // 前提：只要代码执行到这，说明是有依赖项的
    // 如果上一次的依赖项为空，说明是第一次执行 useEffect
    // 此时，不管 useEffect 的依赖项时什么，都必须要执行一次 回调函数
    if (!lastDeps) {
      hasDepsChanged = true
    } else {
      // 有依赖项
      // 通过 some 方法的返回值来表示依赖项是否发生改变
      // 约定：返回 true 表示发生了变化；返回 false 表示没有发生变化
      hasDepsChanged = deps.some((item, index) => {
        return item !== lastDeps[index]
      })
    }
  }

  if (hasNoDeps || hasDepsChanged) {
    callback()
    // 将最新的依赖项保存到 state 变量中
    hookState[hookIndex] = deps
  }

  hookIndex++
}

export default function App() {
  // debugger
  const [count, setCount] = useState(0) // 对应的索引为：0
  const [age, setAge] = useState(18) //    对应的索引为：1
  const [age1, setAge1] = useState(100) //    对应的索引为：1

  // console.log('App 组件重新渲染了', count, age)

  // console.log('两次调用结束后 hookIndex：', hookIndex)

  useEffect(() => {
    console.log('每次都会执行')
  })
  useEffect(() => {
    console.log('只会执行一次')
  }, [])

  useEffect(() => {
    console.log('age 改变时会执行')
  }, [age])

  const onIncrement = () => {
    setCount(count + 1)
  }
  const onAgeIncrement = () => {
    setAge(age + 1)
  }

  return (
    <div style={{ backgroundColor: 'pink', padding: 10 }}>
      <h1>计数器：{count}</h1>
      <button onClick={onIncrement}>+1</button>

      <hr />
      <p>年龄：{age}</p>
      <button onClick={onAgeIncrement}>年龄+1</button>

      <hr />
      <p>年龄：{age1}</p>
      <button onClick={() => setAge1(age1 + 10)}>年龄+10</button>
    </div>
  )
}

// 为了能够让我们自己写的 useState 能够实现组件重新渲染
// 此处，我们借用 ReactDOM.render() 方法，来重新渲染组件
function render() {
  // 注意：useState hook 的调用顺序，从调用 useState 时，就定下来了
  //      不管组件怎么更新，每次调用 useState hook 的顺序不能变
  //      因此，在每次组件更新后，都将 hookIndex 的顺序重置为 0
  hookIndex = 0

  ReactDOM.render(<App />, document.getElementById('root'))
}
