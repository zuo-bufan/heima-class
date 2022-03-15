/**
 * react 程序执行入口
 */
// react17版本之后，使用jsx不需要额外导入React
// import React from 'react'
import ReactDOM from 'react-dom'

/**
 * 4. jsx使用表达式：
+ 在react中，一切都是javascript，所以条件渲染完全是通过js来控制的
+ 可以使用`if/else`或`三元运算符`或`逻辑与(&&)运算符`
 */
const fn = () => {
  return <h1>hi fn!</h1>
}
// 需求：1. 请求中显示=》loading 2. 请求成功显示=》loaded
/**
 * 
 * @param {*} loading:boolean true/false
 */
const load = (loading) => {
  if (loading) {
    return <h2>loaded</h2>
  }
  return <h2>loading</h2>
}
const box = (
  <ul>
    <li>{fn()}</li>
    <li>
      {
        load(true)
      }
    </li>
    <li>
      {true ? <span>加载完成</span> : '加载中...'}
    </li>
    <li>
      {
        false && <h3>加载完成</h3>
      }
    </li>
    <li></li>
    <li></li>
  </ul>
)



// 渲染创建的元素/组件
ReactDOM.render(
  box,
  document.getElementById('root')
)

