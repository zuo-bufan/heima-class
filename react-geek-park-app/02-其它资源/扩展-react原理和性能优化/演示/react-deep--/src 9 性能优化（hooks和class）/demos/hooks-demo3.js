import React, { useMemo, useState } from 'react'

const Demo = () => {
  const [count, setCount] = useState(0)
  const [age, setAge] = useState(16)

  // 如果直接放在组件中，这个代码，会在组件每次渲染时，都要重复执行
  // const nums = new Array(1000)
  //   .fill(0)
  //   .map((item, index) => index)
  //   .reduce((prev, curValue) => {
  //     return prev + curValue
  //   }, 0)
  const obj = {
    name: '豆豆'
  }

  // 第一个参数是一个回调函数，通过回调函数的返回值来指定要“缓存”的对象
  const memoObj = useMemo(() => {
    console.log('昂贵的计算，重复执行了')
    // 模拟昂贵计算：
    // 创建长度为 1000 的数组
    const nums = new Array(1000)
      .fill(0)
      .map((item, index) => index)
      .reduce((prev, curValue) => {
        return prev + curValue
      }, 0)

    return {
      name: nums + '豆豆-' + count
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
      <Child1 obj={obj} />

      {/* 使用 React.memo 处理 */}
      <Child3 obj={obj} />

      {/* 使用 React.memo + useMemo 处理 */}
      <Child2 obj={memoObj} />
    </div>
  )
}

// 普通组件 - 未做任何处理
const Child1 = ({ obj }) => {
  console.log('Child1 re-render')
  return <div>Child1 - {obj.name}</div>
}

const Child3 = React.memo(({ obj }) => {
  console.log('Child3 re-render')
  return <div>Child1 - {obj.name}</div>
})

// 通过 React.memo 避免不必要的组件更新
const Child2 = React.memo(({ obj }) => {
  console.log('Child2 re-render')
  return <div>Child2 - {obj.name}</div>
})

export default Demo
