// 函数组件
/**
 *函数组件：使用JS的函数或者箭头函数创建的组件
  定义：使用 JS 的函数(或箭头函数)创建的组件，叫做`函数组件`	
  + 约定1：**函数名称必须以大写字母开头**，React 据此区分组件和普通的 HTML标签
  + 约定2：**函数组件必须有返回值**，表示该组件的 UI（jsx） 结构；如果不需要渲染任何内容，则返回 `null`
  说明：函数名就是渲染使用的标签名
 * @returns 
 */
// 2. 组件css
import './index.css'
const Hello = () => {
  // 函数体内 3. js(逻辑)
  const data = 123

  // 返回jsx(1. 组件html)
  return (<div className='fn'>
    <h1>我的第一个函数组件：{data}</h1>
  </div>)
}
// 导出函数组件
export default Hello