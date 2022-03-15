import React, { useMemo, useState } from 'react'

const Demo = () => {
  const [count, setCount] = useState(0)

  const obj = {
    name: '豆豆'
  }
  const memoObj = useMemo(() => {
    return {
      name: '豆豆'
    }
  }, [])

  return (
    <div>
      <h1>count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>+1</button>

      <Child1 obj={obj} />
      <Child2 obj={memoObj} />
    </div>
  )
}

// 普通组件 - 未做任何处理
const Child1 = ({ obj }) => {
  console.log('Child1 re-render')
  return <div>Child1 - {obj.name}</div>
}

// 通过 React.memo 避免不必要的组件更新
const Child2 = React.memo(({ obj }) => {
  console.log('Child2 re-render')
  return <div>Child2 - {obj.name}</div>
})

export default Demo
