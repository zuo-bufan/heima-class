/**
 * react 程序执行入口
 */
// react17版本之后，使用jsx不需要额外导入React
// import React from 'react'
import ReactDOM from 'react-dom'

/**
 * 3. jsx使用表达式：
  + JS 表达式：数据类型和运算符的组合（可以单独出现数据类型，也可以数据类型+运算符的组合）
  + 特点：==有值== 或者说 能够计算出一个值
  + 字符串、数值、布尔值、null、undefined、object（ [] / {} ）
  + 1 + 2、'abc'.split('')、['a', 'b'].join('-')
  + function fn() {}、 fn()调用 - 注意：*函数不能直接渲染，可以调用*
  + 验证是不是 JS 表达式的技巧：看内容能不能作为方法的参数，比如，`console.log( 表达式 )`

+ 在jsx中使用表达式语法：`{ JS 表达式 }`
  - 比如，`<h1>你好，我叫 {name}</h1>`
 */
// 1. 简单类型
const data = 123
let str = 'hi jsx!'
let bool = true
// 2. 复杂类型
// 注意：对象不能直接渲染
let obj = { name: '何鑫', age: 18 }
let arr = [1, 2, 3, 6]

const fn = () => {
  return 'hi 我是方法'
}
// jsx也是一个js表达式=》React.createElement()
const h2 = <h2>我是h2</h2>
const box = (
  <ul>
    {/* 注释 */}
    <li>{data}</li>
    <li>{str}-{bool}</li>
    <li>{bool ? 'true显示' : 'false显示'}</li>
    <li>{obj.name}:{obj.age}</li>
    <li>{arr}-{arr[2]}-{arr.join('@')}</li>
    <li>{fn()}</li>
    <li>{h2}</li>
    <li>{<h1>0000</h1>}</li>
    <li>9</li>
    <li>10</li>
  </ul>
)


// 渲染创建的元素/组件
ReactDOM.render(
  box,
  document.getElementById('root')
)

