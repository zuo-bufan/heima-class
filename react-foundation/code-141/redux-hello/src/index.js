import ReactDOM from 'react-dom'
import './styles/base.css'
import './styles/index.css'
import App from './App'
/**
 * 集成redux store：
 * 使用Provider组件的store={store} 包裹根组件
 */
import { Provider } from 'react-redux'
import store from './store'

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  ,
  document.getElementById('root'))

/**
 * 关于复习=>目的：1. 找工作  2. 更好的胜任工作
 * 金三银四（2月开始找）=》重点复习什么？=》背面试题（面试造火箭，工作拧螺丝）
 * 怎么有效复习？=？大方向：抓重点！！！vue技术栈（vue2+3） + react技术栈 + 小程序（带薪学习-uniapp框架）
 * vue复习？抓重点？=> vue全家桶（vue(框架用法) + vue-cli + eslint格式化 + 环境配置（nodeJs+git+vscode）+ vue-router + vuex + axios）
 * react复习？重点=》react库（库的用法+react-cli+react-hooks(函数组件)+redux+react-router-dom）
*/


/**
 * 函数柯里化：把一个多参函数转换成一个单参函数，并返回执行结果的函数（一种函数写法）
 */
// 多参函数
const add = (a, b, c) => {
  return a + b + c
}
console.log(add(10, 20, 30))

// 函数柯里化
const _add = (a) => {
  return (b) => {
    return (c) => {
      return a + b + c
    }
  }
}
// 写法简洁=》不容易理解
const _add2 = (a) => (b) => (c) => {
  return a + b + c
}
console.log(_add2(10)(20)(30))
