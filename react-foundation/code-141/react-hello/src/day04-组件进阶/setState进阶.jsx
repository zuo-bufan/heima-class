import React, { Component } from 'react'

class App extends Component {
  state = {
    count: 0,
  }

  // * 常用写法=>传对象
  add = () => {
    this.setState({
      count: this.state.count + 1,
    })
    this.setState({
      count: this.state.count + 10,
    })
    // 2. 多次调用只执行最后一次
    this.setState(
      {
        count: this.state.count + 20,
      },
      () => {
        console.log('获取最新值：', this.state.count)
      }
    )
    // 1. 这里只能获取上次的值
    console.log('上次的值：', this.state.count)
  }
  // * 了解写法=》传函数 =》注意：多次执行，每次都会累加
  add2 = () => {
    // prevState 上一次
    this.setState((prevState) => {
      return {
        count: prevState.count + 1,
      }
    })
    this.setState((prevState) => {
      return {
        count: prevState.count + 2,
      }
    })
    this.setState(
      (prevState) => {
        return {
          count: prevState.count + 3,
        }
      },
      () => {
        console.log('获取最新值：', this.state.count)
      }
    )
    console.log('上次的值：', this.state.count)
  }

  add3 = () => {
    setTimeout(() => {
      this.setState({
        count: this.state.count + 1,
      })
      console.log('获取最新值：', this.state.count)
    }, 0)
  }

  render() {
    return (
      <div>
        <h1>setState进阶</h1>
        <h2>{this.state.count}</h2>
        <p>
          <button onClick={this.add}>add1</button>
        </p>
        <p>
          <button onClick={this.add2}>add2</button>
        </p>
        <p>
          <button onClick={this.add3}>add3</button>
        </p>
      </div>
    )
  }
}

export default App
