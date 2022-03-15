import React, { Component } from 'react'

/**
 * 1. 挂载阶段
 * constructor()它只执行一次 => render() => componentDidMount()只执行一次
 * 注意：不能在render()调用改变数据的方法
 *
 * 2. 更新阶段
 * render() => componentDidUpdate()
 */
// 子组件
class Child extends Component {
  constructor() {
    super()
    console.log(' 子组件：constructor()')
  }
  componentDidUpdate() {
    console.log(' 子组件：componentDidUpdate()')
  }

  componentDidMount() {
    console.log(' 子组件：componentDidMount()')
  }

  // 组件销毁执行的钩子函数
  componentWillUnmount() {
    console.log(' 组件销毁了：componentWillUnmount()')
  }

  render() {
    console.log(' 子组件：render()')
    return (
      <div>
        <h2>子组件</h2>
        {this.props.a}
      </div>
    )
  }
}

// 父组件
class Index extends Component {
  constructor(props) {
    super(props)
    console.log('父组件：constructor()')
    this.state = {
      a: 10,
      isShow: true,
    }
  }

  // 挂载时执行的钩子函数
  componentDidMount() {
    console.log('父组件：componentDidMount()')
  }

  // 更新完调用的钩子函数
  // 注意：不能调用改变数据的方法，死循环
  componentDidUpdate() {
    console.log('父组件：componentDidUpdate()', this)
    // this.changeData()
    // this.setState({
    //   a: 1000,
    // })
  }

  // 更新数据
  changeData = () => {
    // this.setState({
    //   a: this.state.a + 10
    // })
    this.forceUpdate()
  }

  // 控制子组件是否显示
  isShowCp = () => {
    this.setState({
      isShow: !this.state.isShow,
    })
  }

  render() {
    console.log('父组件：render()')
    // 注意：不能无条件在这里setState
    // this.setState({
    //   a: 1000,
    // })
    return (
      <div>
        <h1>类组件的生命周期</h1>
        <p>{this.state.a}</p>
        <button onClick={this.changeData}>更新数据</button>
        {/* 开关 */}
        <button onClick={this.isShowCp}>控制子组件是否显示</button>
        <hr />
        {this.state.isShow ? <Child a={this.state.a} /> : <p>不显示子组件</p>}
      </div>
    )
  }
}

export default Index
