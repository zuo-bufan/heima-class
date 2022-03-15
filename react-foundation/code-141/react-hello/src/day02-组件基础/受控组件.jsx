import React, { Component } from 'react'

// 受控组件：**value值受到了react状态控制的表单元素** (双向绑定)
// 目的：获取文本框的值
class App extends Component {
  // 数据不可变=》如果想变=》使用this.setState({})
  state = {
    val: '123',
  }

  // 输入框输入执行的回调函数
  handlerChange = (e) => {
    console.log('输入框输入的值:', e.target.value)
    // 问题：输入之后，视图不刷新=》解决：获取输入框输入的值，使用this.setState({})更新数据和视图
    this.setState({
      val: e.target.value,
    })
  }

  pub = () => {
    console.log('获取输入框值：', this.state.val)
  }

  render() {
    return (
      <div>
        <h1>受控组件（双向绑定）</h1>
        <p>{this.state.val}</p>
        <input
          type="text"
          value={this.state.val}
          onChange={this.handlerChange}
        />
        <button onClick={this.pub}>登录</button>
      </div>
    )
  }
}

export default App
