/**
 * react 程序执行入口
 */
import React from 'react'
import ReactDOM from 'react-dom'

// 1. React.createElement方法创建html元素
// 语法：React.createElement('html元素名',{属性1:属性值1,属性2:属性值2...},子元素...)
const h1 = React.createElement('h1', null, 'hi react!')
const p = React.createElement('p', null, 'hi vue!')
// 嵌套
const div = React.createElement('div', { className: 'box', id: 'test' }, h1, p)

ReactDOM.render(
  div,
  document.getElementById('root')
)

