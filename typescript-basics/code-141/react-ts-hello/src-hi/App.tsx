import './App.css'
import axios from 'axios'
import _ from 'lodash'
// 导入类型
// 加个type表明导入的是类型文件
import type { Custom, NumStr } from './index.d'
import Test from './pages/test'

import { HashRouter, Route, Link } from 'react-router-dom'
// 导入组件
import Home from './pages/home'
import Pub from './pages/pub'
import Login from './pages/login'

function App() {
  const strs: string[] = ['a', 'b', 'c']
  let obj: Custom = {
    name: '晓庆',
    age: 18,
    // fn() {},
  }

  let test: NumStr = 1
  // 鼠标放在 forEach 上查看类型
  // console.log(strs.length)
  // console.log(axios.get)
  // console.log(_.isObject({}), obj, test)
  return (
    <HashRouter>
      {/* <div className="App">
      <Test />
    </div> */}
      {/* 菜单 */}
      <ul>
        <li>
          <Link to="/home">首页</Link>
        </li>
        <li>
          <Link to="/pub/1">文章详情</Link>
        </li>
        <li>
          <Link to="/pub">发布文章</Link>
        </li>
      </ul>

      {/* 路由规则 */}
      <Route path="/home" component={Home} />
      <Route path="/pub/:id?" component={Pub} />
      <Route path="/login" component={Login} />
    </HashRouter>
  )
}

export default App
