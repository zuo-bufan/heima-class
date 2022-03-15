import React, { Component } from 'react'

// 函数组件=>注意：函数组件没有组件实例this
function Fn(props) {
  // 点击事件回调函数
  /**
   *
   * @param {*} e 事件对象
   */
  const handlerClick = (e) => {
    console.log('clicked', e)
    console.log('获取触发事件的元素：', e.target)
  }

  return (
    <div>
      <h1>函数组件-事件绑定</h1>
      <button onClick={handlerClick}>点击</button>
    </div>
  )
}

// export default Fn;

// 类组件
/**
 * - React注册事件与DOM的事件语法非常像
- 语法`on+事件名 =｛事件处理程序｝` 比如`onClick={this.handleClick}`
- 注意：*React事件采用驼峰命名法*，比如`onMouseEnter`, `onClick`
 */
class App extends Component {
  // 点击事件回调函数
  /**
   *
   * @param {*} e 事件对象
   */
  handlerClick(e) {
    console.log('组件实例：', this)
    console.log('clicked', e)
    console.log('获取触发事件的元素：', e.target)
  }
  // 使用箭头函数定义=》避免this指向问题
  // 箭头函数this指向最近一层作用域（写代码就确定，而且不会被改变）
  handlerClick2 = (e) => {
    console.log('推荐方案：', e, this)
  }

  go = (e) => {
    console.log(e)
    // 组织跳转
    e.preventDefault()
  }

  render() {
    return (
      <div>
        <h1>事件绑定</h1>
        <p>
          <a onClick={this.go} href="http://baidu.com">
            度娘
          </a>
        </p>
        {/* 问题：事件绑定this.handlerClick函数，但是在事件执行的时候调用者不是this，造成函数内
        获取不到组件实例 */}
        <button onClick={this.handlerClick}>点击1</button>
        {/* 解决方案 */}
        <button onClick={(e) => this.handlerClick(e)}>点击2</button>
        <button onClick={this.handlerClick.bind(this)}>点击3</button>
        {/* 最优方案（推荐） */}
        <button onClick={this.handlerClick2}>点击4</button>
        {/* 注意：react 不支持这样写法=》默认执行一次 */}
        {/* <button onClick={this.handlerClick()}>点击3</button> */}
      </div>
    )
  }
}

export default App
