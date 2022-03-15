import React, { Component } from 'react'

// 子组件1=》函数组件
const Fn = (props) => {
  console.log('函数组件接收父组件传的值：', props)
  // 子传父
  const changeMoney = () => {
    props.changeMoney(1e8)
  }
  return (
    <div>
      <h2>我是函数子组件</h2>
      <h3>收到父组件的钱：{props.money}</h3>
      <button onClick={() => props.changeMoney(100000000000)}>
        调用父组件方法1
      </button>
      <button onClick={changeMoney}>调用父组件方法2</button>
    </div>
  )
}
// 子组件2=》类组件
class Cla extends Component {
  render() {
    console.log('类组件接收父组件传的值：', this.props)
    return (
      <div>
        <h2>我是类子组件</h2>
        <h3>收到父组件的钱：{this.props.money}</h3>
        <div>{this.props.html}</div>
      </div>
    )
  }
}

// 父组件
class App extends Component {
  state = {
    money: 10,
  }

  // 父组件方法=》实现子父通信（口诀）=》把父组件的方法传给子组件，子组件就可以调用和传递数据给父组件
  changeMoney = (childData) => {
    // console.log(this, childData)
    this.setState({
      money: childData,
    })
  }

  // jsx(html)
  html = (<p>123</p>)
  render() {
    return (
      <div>
        <h1>父组件</h1>
        <hr />
        <Fn money={this.state.money} changeMoney={this.changeMoney} />
        <Cla money="100000" html={this.html} />
      </div>
    )
  }
}

export default App
