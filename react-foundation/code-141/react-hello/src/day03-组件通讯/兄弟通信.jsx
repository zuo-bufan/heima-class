import React, { Component } from 'react'

// 兄弟1
const Brother1 = (props) => {
  return (
    <div>
      <h2>兄弟1</h2>
      <h3>{props.count}</h3>
      <button onClick={props.add}>修改count</button>
    </div>
  )
}
// 兄弟2
const Brother2 = ({ count }) => {
  return (
    <div>
      <h2>兄弟2</h2>
      <h3>{count}</h3>
    </div>
  )
}

// 父组件
class App extends Component {
  state = {
    // 兄弟组件都需要的数据
    count: 0,
  }
  // 子传父（口诀）：父组件定义方法，给子组件使用
  add = () => {
    // console.log(this)
    this.setState({
      count: this.state.count + 1,
    })
  }

  render() {
    return (
      <div>
        <h1>兄弟两的父组件</h1>
        <button onClick={this.add}>add</button>
        <hr />
        {/* 兄弟组件关系=>共享数据=》通过状态（响应数据）提升（曲线救国） =》定义到父组件中（父传子）*/}
        <Brother1 count={this.state.count} add={this.add} />
        <Brother2 count={this.state.count} />
      </div>
    )
  }
}

export default App
