import React, { Component } from 'react'

import { Provider, Consumer } from './context-obj'

// 孙子组件
const Son = (props) => {
  const getApp = (data) => {
    console.log('接收到爷爷组件数据：', data)
  }
  return (
    <div>
      <h3>孙子组件</h3>
      {/* 写法1 */}
      <Consumer>
        {(data) => (
          <h4>
            {data.name}:{data.age}
          </h4>
        )}
      </Consumer>
      {/* 写法2 */}
      <Consumer>{getApp}</Consumer>
    </div>
  )
}

// 子组件
class Child extends Component {
  render() {
    return (
      <div>
        <h2>子组件</h2>
        <hr />
        <Son />
      </div>
    )
  }
}
// 父组件(爷爷)
class App extends Component {
  state = {
    // 共享数据
    obj: {
      name: '博鑫',
      age: 10,
    },
  }

  render() {
    return (
      <Provider value={this.state.obj}>
        <h1>App</h1>
        <hr />
        <Child />
      </Provider>
    )
  }
}

export default App
