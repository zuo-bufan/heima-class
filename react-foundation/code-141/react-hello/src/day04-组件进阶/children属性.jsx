import React, { Component } from 'react'
import './index.css'

// 子组件
const Fn = (props) => {
  console.log('接收父数据：', props)
  return (
    <div>
      {/* {props.children()} */}
      {props.children}
      <h2>子组件</h2>
    </div>
  )
}

// 子组件-练习
const Title = ({ children }) => {
  return <div className="title">{children}</div>
}

// 父组件
class App extends Component {
  render() {
    return (
      <div>
        <h1>children属性使用-类似vue的slot（插槽）</h1>
        {/* 
        1. children 属性：表示该组件的子节点，只要组件有子节点，props就有该属性

        2. children 属性与普通的 props 一样，值可以是任意值（文本、React元素、组件，甚至是函数）
        */}
        <hr />
        <Fn test="123">
          <h1>早上好</h1>
          <h3>react!</h3>
          {/* {() => console.log(123)} */}
        </Fn>
        {/* 练习：title下子节点可以显示到div.title下 */}
        <Title>我要月薪过万</Title>
      </div>
    )
  }
}

export default App
