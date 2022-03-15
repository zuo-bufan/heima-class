/**
 * react 程序执行入口
 */
// react17版本之后，使用jsx不需要额外导入React
// import React from 'react'
import ReactDOM from 'react-dom'
// 导入样式
import './index.css'

/**
 * 1. 行内样式 - style
      * 像 width/height 等属性，可以省略 px，直接使用 `数值` 即可
      * 如果是需要使用百分比的单位，此时，继续使用字符串的值即可（比如，`"60%"`）
   2. 类名 - className【推荐】
 */

// 渲染数据
const list = [
  { id: 1, name: '黑马86期', salary: 11000 },
  { id: 2, name: '黑马87期', salary: 12000 },
  { id: 3, name: '黑马141期', salary: 18000 }
]

const box = (
  <ul>
    {
      list.map(item => (
        <li key={item.id}>
          <h3 className='title' style={{ color: '#fff', width: 100, backgroundColor: 'red' }}>{item.name}</h3>
          <p className="salary">{item.salary}</p>
        </li>
      ))
    }
  </ul>
)



// 渲染创建的元素/组件
ReactDOM.render(
  box,
  document.getElementById('root')
)

