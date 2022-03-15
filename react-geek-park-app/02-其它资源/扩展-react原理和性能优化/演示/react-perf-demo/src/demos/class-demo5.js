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
  shouldComponentUpdate(nextProps, nextState) {
    if (this.props.obj.name === nextProps.obj.name) {
      return true
    }
    return false
  }

  render() {
    console.log('Child2 re-render')
    return <div>Child2 - {this.props.obj.name}</div>
  }
}

export default Demo
