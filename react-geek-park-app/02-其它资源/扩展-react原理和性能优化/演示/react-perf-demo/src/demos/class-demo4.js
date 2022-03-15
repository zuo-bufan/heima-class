import React from 'react'

class Demo extends React.Component {
  state = {
    count: 0
  }

  render() {
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

        <Child1 />
        <Child2 />
      </div>
    )
  }
}

// 普通组件 - 未做任何处理
class Child1 extends React.Component {
  render() {
    console.log('Child1 re-render')
    return <div>Child1</div>
  }
}

class Child2 extends React.PureComponent {
  render() {
    console.log('Child2 re-render')
    return <div>Child2</div>
  }
}

export default Demo
