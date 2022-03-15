// 导入组件样式
// 普通写法
// import './index.scss'
// 样式模块化写法（推荐）=》style对象，包含新生成的全局唯一的类名（文件名+类名+hash值）
import style from './index.module.scss'
import Child from './components/child'
import { useRef, useState } from 'react'

// react样式冲突：同名样式
// 总结：样式会互相覆盖（子组件导入和父组件样式导入的顺序有关=》后导入的会覆盖先导入的样式）
console.log(style)
function Test() {
  console.log('默认或者状态变化了，Test组件重新执行')
  /**
   * 使用useRef存储数据，而且不会引起函数组件重新执行
   */
  const countRef = useRef(0)
  console.log(countRef)
  let _count = 0
  const [count, setCount] = useState(0)

  const add = () => {
    // 存储count值
    countRef.current = count + 1
    setCount(count + 1)
    // 普通变量存储
    _count = count + 1
  }

  const getCount = () => {
    console.log(countRef.current, _count)
  }
  return (
    <div>
      <ul>
        <li>{count}</li>
        <li>
          <button onClick={add}>add</button>
        </li>
        <li>
          <button onClick={getCount}>获取useRef存的值</button>
        </li>
      </ul>
      {/* className="a b c" */}
      {/* 私有类名 */}
      <h1 className={style.red}>Test</h1>
      <h1 className={[style.red, style.borders].join(' ')}>Test2</h1>
      <h1 className={`${style.red} ${style.borders}`}>Test3</h1>
      <p className={style.borders}>border</p>
      <p className={style['font-blue']}>蓝色字体</p>
      {/* 全局类名 */}
      <p className="green">全局的1</p>
      <p className="yel fonts">全局的2</p>

      <hr />
      <Child />
    </div>
  )
}

export default Test
