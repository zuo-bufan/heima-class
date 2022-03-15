import React, { Component, createRef } from 'react'

/**
 * 区别：1. 受控组件是通过 React 组件的状态（响应变量）来控制表单元素的值
        2. 非受控组件是通过**手动操作 DOM 的**方式来控制获取表单元素的值
- 此时，需要用到一个新的概念：`ref`
- ref：1. 用来在 React 中获取 DOM对象  2. 组件实例(扩展)（注意：函数组件没有实例）
 */
// 子组件
class Child extends Component {
  render() {
    return (
      <div>
        <h2>我是子组件</h2>
      </div>
    )
  }
}
// 父组件
class App extends Component {
  // 1. 创建ref对象
  input = createRef()

  child = createRef()

  // 2. 获取
  getInput = () => {
    console.log('获取input元素的DOM对象:', this.input.current.value)
  }

  getChild = () => {
    console.log('获取Child子组件实例:', this.child)
  }

  render() {
    return (
      <div>
        <h1>非受控组件（ref）</h1>
        <input ref={this.input} type="text" />
        <button onClick={this.getInput}>获取input元素的DOM对象</button>
        <hr />
        <Child ref={this.child} />
        <button onClick={this.getChild}>获取子组件实例</button>
      </div>
    )
  }
}

export default App
