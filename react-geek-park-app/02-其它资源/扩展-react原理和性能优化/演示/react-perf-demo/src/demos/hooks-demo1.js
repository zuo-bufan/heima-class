import React, { useState } from 'react'

const Demo = () => {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h1>count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>+1</button>

      <Child1 />
      <Child2 />
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

export default Demo
