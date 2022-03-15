import React, { useCallback, useState } from 'react'

const Demo = () => {
  const [count, setCount] = useState(0)

  const fn = () => {
    console.log('fn 执行了')
  }

  const memoFn = useCallback(fn, [])

  return (
    <div>
      <h1>count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>+1</button>

      <Child1 fn={fn} />
      <Child2 fn={memoFn} />
    </div>
  )
}

// 普通组件 - 未做任何处理
const Child1 = ({ fn }) => {
  console.log('Child1 re-render')
  return <div onClick={fn}>Child1</div>
}

// 通过 React.memo 避免不必要的组件更新
const Child2 = React.memo(({ fn }) => {
  console.log('Child2 re-render')
  return <div onClick={fn}>Child2</div>
})

export default Demo
