import React, { useEffect, useState } from 'react'
import catImg from './images/cat.png'

const Cat = () => {
  const { x, y } = useMouse()
  return (
    <img
      src={catImg}
      style={{
        position: 'absolute',
        top: y - 64,
        left: x - 64
      }}
      alt=""
    />
  )
}

const Position = () => {
  const { x, y } = useMouse()
  return (
    <div>
      鼠标当前位置：(x: {x}, y: {y})
    </div>
  )
}

// 创建自定义 hooks 来实现状态逻辑复用
const useMouse = () => {
  // 状态：
  const [pos, setPos] = useState({
    x: 0,
    y: 0
  })

  // 逻辑代码
  useEffect(() => {
    const onMouseMove = e => {
      setPos({
        x: e.pageX,
        y: e.pageY
      })
    }

    window.addEventListener('mousemove', onMouseMove)
    return () => {
      window.removeEventListener('mousemove', onMouseMove)
    }
  }, [])

  // 返回需要复用的鼠标位置状态
  return pos
}

const App = () => {
  return (
    <div>
      <Cat />
      <Position />
    </div>
  )
}

export default App
