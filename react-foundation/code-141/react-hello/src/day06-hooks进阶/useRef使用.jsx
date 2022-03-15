import { useRef } from 'react'

function App() {
  /**
   * useRef函数
   * 作用：获取react中元素的dom对象
   * 步骤：
   * 1. 导入useRef函数
   * 2. 调用useRef函数创建ref对象
   * 3. 在元素身上通过ref={ref对象}绑定
   * 4. 通过ref对象.current获取
   */
  const h1 = useRef(null)
  // 修改h1的字体颜色
  const modColor = () => {
    console.log(h1, h1.current)
    h1.current.style.color = 'red'
    h1.current.style.border = '10px solid orange'
  }
  return (
    <div>
      <h1 ref={h1}>useRef使用</h1>
      <button onClick={modColor}>修改字体颜色</button>
    </div>
  )
}

export default App
