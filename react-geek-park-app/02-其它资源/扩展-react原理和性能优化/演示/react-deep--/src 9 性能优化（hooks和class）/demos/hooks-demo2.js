import React, { useCallback, useMemo, useState } from 'react'

const Demo = () => {
  const [count, setCount] = useState(0)
  const [age, setAge] = useState(16)

  const fn = () => {
    console.log('fn 执行了', count)
  }

  // 使用 useCallback 来“缓存”函数 fn
  // 只要此处的 依赖项 改变，那么，useCallback 就会创建一个新的 函数 了
  // const memoFn = useCallback(fn, [count])

  // 使用 useMemo 来模拟 useCallback
  const memoFn = useMemo(() => {
    return () => {
      console.log('fn 执行了', count)
    }
  }, [count])

  return (
    <div>
      <h1>
        count: {count} - age: {age}
      </h1>
      <button onClick={() => setCount(count + 1)}>+1</button>
      <button onClick={() => setAge(age + 1)}>+1 年龄</button>

      {/* 不做任何处理 */}
      <Child1 fn={fn} />
      {/* 使用 React.memo 处理 */}
      <Child3 fn={fn} />
      {/* 使用 React.memo + useCallback 来缓存函数 */}
      <Child2 fn={memoFn} />
    </div>
  )
}

// 普通组件 - 未做任何处理
const Child1 = ({ fn }) => {
  console.log('Child1 re-render')
  return <div onClick={fn}>Child1</div>
}

// 注意：虽然，此处使用了 Raect.memo 来记忆组件，但是，React.memo 内部在进行浅对比时，发现每次的 fn 这个属性
//      都是不同的 函数，所以，就会触发组件的 重新渲染了
const Child3 = React.memo(({ fn }) => {
  console.log('Child3 re-render')
  return <div onClick={fn}>Child3</div>
})

// 通过 React.memo 避免不必要的组件更新
const Child2 = React.memo(({ fn }) => {
  console.log('Child2 re-render')
  return <div onClick={fn}>Child2</div>
})

export default Demo
