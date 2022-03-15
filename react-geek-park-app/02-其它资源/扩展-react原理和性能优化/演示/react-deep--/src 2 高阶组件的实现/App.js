// 封装复用鼠标位置的高阶组件

import React from 'react'
import catImg from './images/cat.png'

const Cat = props => {
  // console.log('Cat 组件的 props：', props)
  return (
    <img
      src={catImg}
      style={{
        position: 'absolute',
        top: props.y - 64,
        left: props.x - 64
      }}
      alt=""
    />
  )
}

const Position = ({ x, y }) => {
  return (
    <div>
      鼠标当前位置：(x: {x}, y: {y})
    </div>
  )
}

// 参数：要被包装的组件，或者想要获得鼠标位置的组件
// 注意：因为该组件是用来复用鼠标位置的，所以，该组件需要提供鼠标位置状态逻辑代码
//      而在 Hooks 之前，就得通过 class 组件来实现状态处理
// 高阶组件的实现，分为两步：
//  1 提供状态逻辑代码
//  2 将状态传递给被包装的组件
const withMouse = BaseComponent => {
  class Wrapper extends React.Component {
    // 状态
    state = {
      x: 0,
      y: 0
    }

    // 处理状态的逻辑代码
    onMouseMove = e => {
      const { pageX, pageY } = e
      this.setState({
        x: pageX,
        y: pageY
      })
    }
    componentDidMount() {
      window.addEventListener('mousemove', this.onMouseMove)
    }
    componentWillUnmount() {
      window.removeEventListener('mousemove', this.onMouseMove)
    }

    // 注意：高阶组件只提供状态逻辑代码，不提供 UI 结构，
    //      所以，该组件中渲染的 UI 结构就是你要包装的那个组件
    //      比如，此处的 Cat 组件
    render() {
      return <BaseComponent x={this.state.x} y={this.state.y} />
    }
  }

  return Wrapper
}

// 高阶组件的用法：
// 接收一个被包装的组件，返回一个增强后的组件，该组件既有：状态逻辑 又有 UI 结构
const CatWithMouse = withMouse(Cat)

// 再次复用
const PositionWithMouse = withMouse(Position)

// const Cat1 = Cat

const App = () => {
  return (
    <div>
      <CatWithMouse></CatWithMouse>
      <PositionWithMouse></PositionWithMouse>
      {/* <Cat></Cat> */}
      {/* <Cat1></Cat1> */}
    </div>
  )
}

export default App
