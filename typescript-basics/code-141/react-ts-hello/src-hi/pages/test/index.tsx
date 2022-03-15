import { useEffect, useRef, useState } from 'react'

// 类型别名（自定义类型）=> 结合后台返回数据
type List = {
  id: number
  name: string
}[]
function Test() {
  // 1. useEffect:处理副作用（模拟生命周期钩子函数）
  useEffect(() => {
    // 组件加载：执行一次（发请求）

    return () => {
      // 组件卸载：执行一次（清除定时器、解绑事件等）
    }
  }, [])

  // 2. useState（定义状态数据） => useState泛型函数
  // 简单类型状态
  const [count, setCount] = useState(0)
  // 复杂类型 => list数据结构：[{id:1,name:'任务名'},{id:2,name:'任务名'}...]
  const [list, setList] = useState<List>([])
  const handler = () => {
    setCount(count + 1)
    setList([{ id: Date.now(), name: Math.random() + '' }, ...list])
    // 获取dom元素
    console.log(divRef)
    // ! 非空断言=》层级>1
    divRef.current!.style.border = '10px solid red'
    // ? 类似!,处理null情况（增加代码健壮性）
    console.log(inputRef.current?.value)
    if (inputRef.current) {
      // inputRef.current存在，才会执行到这里
      inputRef.current.style.width = '600px'
    }
  }

  // 3. useRef => 泛型函数,需要指定类型
  const divRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  return (
    <div>
      <h1>hook 钩子基于ts使用</h1>
      <div ref={divRef}>获取div的dom</div>
      <input ref={inputRef} type="text" />
      <ul>
        <li>{count}</li>
        <li>
          <button onClick={handler}>handler</button>
        </li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
      <hr />
      <ul>
        {list.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  )
}

export default Test
