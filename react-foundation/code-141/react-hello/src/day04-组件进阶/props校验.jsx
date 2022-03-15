import React, { Component } from 'react'
// 导入props校验=>提供校验类型
import PropTypes from 'prop-types'

// 单独导入一个js不带名（相当于执行这个js文件）
import './类的静态属性'

// 子组件
/**
 *
 * @param {*} param0 colors颜色数组
 */
const ColorList = ({ colors = [], str = '我是默认的fn' }) => {
  return (
    <>
      <p>{str}</p>
      <ul>
        {colors.map((item) => (
          <li key={item} style={{ background: item, color: '#fff' }}>
            {item}
          </li>
        ))}
      </ul>
    </>
  )
}
// 给函数组件添加props校验
ColorList.propTypes = {
  colors: PropTypes.array,
  num: PropTypes.number.isRequired, // num传入是数字，而且必传项
  html: PropTypes.element, // 要求传jsx结构（视图）
  // obj: PropTypes.object, // 只能校验是不是一个对象，不能更详细的校验对象里的值
  // 校验对象和对象下属性的值
  obj: PropTypes.shape({
    name: PropTypes.string,
    info: PropTypes.number,
  }),
  str: PropTypes.string,
}
// 给函数组件添加props的默认值
// 写法1
// ColorList.defaultProps = {
//   str: '我是默认的',
// }

class Child extends Component {
  // props默认值
  // 写法2
  static defaultProps = {
    str: '我是默认的',
  }
  // props校验
  // 写法2
  static propTypes = {
    num: PropTypes.number,
    str: PropTypes.string,
  }

  render() {
    const { str } = this.props
    return (
      <div>
        <h2>类组件</h2>
        <p>{str}</p>
      </div>
    )
  }
}

// 给类组件添加校验
// 写法1
// Child.propTypes = {
//   num: PropTypes.number,
//   str: PropTypes.string,
// }
// 给函数组件添加props的默认值
// 写法1
// Child.defaultProps = {
//   str: '我是默认的',
// }

class App extends Component {
  state = {
    colors: ['red', 'blue', 'green'],
    str: 'str',
    obj: {
      name: '鑫杰',
      info: 2e4,
    },
  }
  render() {
    return (
      <div>
        <h1>props校验</h1>
        {/* 
        使用步骤：
        1. 安装属性校验的包：`npm i prop-types`
        2. 导入 `prop-types` 包 
        3. 使用`组件名.propTypes = {}` 来给组件 List 的props添加校验规则
        4. 为组件添加 `propTypes` 属性，并通过 `PropTypes` 对象来指定属性的类型
        校验规则（类型）：
        1. 常见类型：array、bool、func、number、object、string
        2. React元素类型：element
        3. 必填项：isRequired
        4. 特定结构的对象：shape({})
        设置默认值：
        通过`defaultProps`可以给组件的props设置默认值，在未传入props的时候生效
         */}
        <hr />
        <ColorList
          colors={this.state.colors}
          num={123}
          obj={this.state.obj}
          html={<span>1</span>}
        />
        <Child num="1" />
      </div>
    )
  }
}

export default App
