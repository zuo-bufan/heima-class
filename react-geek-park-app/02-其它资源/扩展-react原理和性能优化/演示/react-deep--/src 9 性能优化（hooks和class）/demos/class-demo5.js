import React from 'react'

class Demo extends React.Component {
  state = {
    count: 0
  }

  render() {
    const obj = {
      name: '豆豆'
    }

    return (
      <div>
        <h1>count: {this.state.count}</h1>
        <button
          onClick={() =>
            this.setState({
              count: this.state.count + 1
            })
          }
        >
          +1
        </button>

        <Child1 obj={obj} />
        <Child2 obj={obj} />
      </div>
    )
  }
}

class Child1 extends React.PureComponent {
  render() {
    console.log('Child1 re-render')
    return <div>Child1 - {this.props.obj.name}</div>
  }
}

class Child2 extends React.Component {
  // shouldComponentUpdate 是一个钩子函数
  // 第一参数：获取最新的 props
  // 第二个参数：获取最新的 state
  // 注意：该钩子函数，返回值为true，表示组件需要更新
  //      该钩子函数，返回值为false，表示组件不需要更新
  // 注意：此处的 返回值 的作用与 React.memo 相反
  shouldComponentUpdate(nextProps, nextState) {
    // this.props 用来获取上一次的 props 值
    console.log('上一次的 props', this.props)
    console.log('最新的 props', nextProps)
    if (this.props.obj.name === nextProps.obj.name) {
      return false
    }
    return true
  }

  render() {
    console.log('Child2 re-render')
    return <div>Child2 - {this.props.obj.name}</div>
  }
}

export default Demo
