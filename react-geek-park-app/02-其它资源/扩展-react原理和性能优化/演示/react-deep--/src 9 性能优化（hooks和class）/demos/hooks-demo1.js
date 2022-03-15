import React, { useState } from 'react'

const Demo = () => {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h1>count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>+1</button>

      <Child1 />
      {/* <Child2 name="jack" age={count} /> */}
      <Child2 list={[1, 2]} />
    </div>
  )
}

// 普通组件 - 未做任何处理
const Child1 = () => {
  console.log('Child1 re-render')
  return <div>Child1</div>
}

// 通过 React.memo 避免不必要的组件更新
const Child2 = React.memo(() => {
  console.log('Child2 re-render')
  return <div>Child2</div>
})

// // 通过 React.memo 避免不必要的组件更新
// const Child2 = React.memo(
//   () => {
//     console.log('Child2 re-render')
//     return <div>Child2</div>
//   }

//   // 如果返回 false，表示更新前后的两次 props 发生了改变，此时，组件会重新渲染
//   // 如果返回 true，表示更新前后的两次 props 没有改变，此时，组件不会重新渲染
//   // (prevProps, nextProps) => {
//   //   console.log(prevProps, nextProps)
//   //   return false
//   // }
// )

export default Demo
