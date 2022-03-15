/**
 * react 程序执行入口
 */
// react17版本之后，使用jsx不需要额外导入React
// import React from 'react'
import ReactDOM from 'react-dom'

/**
 * 2. 使用jsx创建html元素
 * 技巧：html怎么写，jsx就怎么写=》jsx写法根html基本一样
 * 注意事项：
 * 1. JSX必须要有一个根节点， 如果没有根节点，可以使用`<></>`（幽灵节点）或者`<React.Fragment></React.Fragment>`
   2. 所有标签必须结束，如果是单标签可以使用`/>`结束
   3. JSX中语法更接近与JavaScript，**属性名采用驼峰命名法**
      `class` ===> `className`   `for` ===>  `htmlFor`
   4. JSX可以换行，如果JSX有多行，推荐使用`()`包裹JSX，防止 JS 自动插入分号的 bug
 */
const ul = (<>
  <input />
  <p>
    <label htmlFor="cb">勾选</label>
    <input type="checkbox" name="" id="cb" />
  </p>
  <ul className='ul'>
    <li>1</li>
    <li>2</li>
    <li>3</li>
  </ul>
  <p>123</p>
</>)

const divBox = (
  <div>
    <h1>123</h1>
  </div>
)

// 渲染创建的元素/组件
ReactDOM.render(
  divBox,
  document.getElementById('root')
)

