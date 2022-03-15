import React, { Component } from 'react'

/**
 * 状态`state`，即数据，是组件内部的**私有数据**，只能在组件内部使用
  1. 状态 state 的值是**对象**，表示一个组件中可以有多个数据
  2. 通过 `this.state.xxx` 来获取状态
 */
class App extends Component {
  // 定义响应数据（类似vue的data）
  state = {
    count: 0,
    str: 'hi state！',
    obj: { name: '晓庆', age: 18, desc: '花容月貌，闭月羞花' },
    arr: [1, 2, 3],
  }
  // 点击加一
  add = () => {
    // === react思想：数据不可变 ===
    // 注意：不能直接使用=号修改
    // this.state.count = 100
    // this.state.obj.age = 10
    // this.arr.push(1)
    // 正确姿势=》只能通过：this.setState({变量名1:变量1新值,变量名2:变量2新值...})
    // 说明：this.setState是Component父类提供的方法

    this.setState({
      // 不能这么写
      // count: ++this.state.count,
      // 可以这么写
      count: this.state.count + 1,
      str: Math.random() * 1000 + '',
      obj: { ...this.state.obj, age: 10 },
      // obj: {},
      arr: [Math.random() * 1000, ...this.state.arr],
    })
  }

  // 渲染模板（html）
  render() {
    console.log('组件实例：', this)
    return (
      <div>
        <h1>类组件的状态（响应数据）</h1>
        <ul>
          <li>{this.state.count}</li>
          <li>{this.state.str}</li>
          <li>
            {this.state.obj.name} - {this.state.obj.age} - {this.state.obj.desc}
          </li>
          <li>{this.state.arr}</li>
          <li>
            <button onClick={this.add}>add</button>
          </li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
    )
  }
}

export default App
