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

// 对于 render-props 模式来说
// 首先，就要创建一个 class 组件，来提供状态逻辑代码
// 注意：render-props 模式也是来实现状态逻辑复用，因此，它也不会提供 UI 结构
//      UI 结构通过一个名字叫 render 的 prop 属性的 返回值 来指定
class Mouse extends React.Component {
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

  render() {
    // return this.props.render(this.state)
    return this.props.children(this.state)
  }
}

const App = () => {
  return (
    <div>
      <Mouse>
        {props => {
          // console.log('render 回调函数的参数：', props)
          // 注意：此处的返回值，表示要渲染的 UI 结构
          return <Cat {...props} />
        }}
      </Mouse>

      <Mouse>{props => <Position {...props} />}</Mouse>
    </div>
  )
}

export default App
