import React from 'react'

// 类组件
/**
 *使用 ES6 的 class 创建的组件，叫做类（class）组件
  - 约定1：**类名称也必须以大写字母开头**
  - 约定2：类组件应该继承 React.Component 父类，从而使用父类中提供的方法或属性 
  - 约定3：类组件必须提供 render 方法
  - 约定4：render 方法必须有返回值，表示该组件的 UI（jsx） 结构
  说明：类名就是渲染使用的标签名
 */
// 2. 组件css样式
import './index.css'
class ClassHello extends React.Component {
  // 3. js逻辑
  state = {
    abc: 456
  }

  render () {
    // 返回jsx(1. html)
    return (<div className='cla'>
      <h1>我的第一个类组件:{this.state.abc}</h1>
    </div>)
  }
}
/**
 * 关于原生js的class关键字:
 * 1. class是个语法糖=>原理：构造函数
 */
// 构造函数
// function Test (params) {
//   this.fn = () => console.log(123)
// }
// Test.prototype.fn2 = () => console.log(456)
// const test = new Test()
// console.log('Test实例：', test)
// test.fn2()
// class使用

// 父类
class Par {
  parFn2 = () => this
  parFn () {
    console.log('Par')
  }
}
// 子类
class Test extends Par {
  // 构造器
  constructor() {
    // 注意：继承之后，一定要加super(),这样之后的代码才能访问实例this
    super()
    // 实例上
    this.state = {}
    this.fn1 = () => console.log(123)
  }
  // 原型链上
  fn2 () {
    console.log(123)
  }
  // 实例上
  data = []
  fn3 = () => {
    console.log(123)

  }
}

const test = new Test()
console.log('Test实例：', test)



export default ClassHello