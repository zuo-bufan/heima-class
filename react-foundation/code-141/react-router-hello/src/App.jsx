// 导入页面
import './App.css'

// 导入配置路由需要的组件
import {
  BrowserRouter,
  HashRouter,
  Route,
  Link,
  Redirect,
  Switch,
} from 'react-router-dom'

import Home from './pages/home'
import About from './pages/about'
import Contact from './pages/contact'
import NotFound from './pages/404'
import Login from './pages/login'

// const All = () => <h1>all</h1>

/**
 * react路由用法总结：
 * vue路由配置routes = [{path:'path',component:组件},...] =》 router-view组件（挂载渲染路由组件）
 * react完全使用==组件的方式==配置
 * 1. 从react-router-dom中导入=》 BrowserRouter/HashRouter, Route, Link
 * 2. 使用BrowserRouter(history模式)/HashRouter（hash模式）作为根组件App的根元素，包裹路由配置Route组件
 * 3. 使用Route组件配置路由规则：<Route path="path" component={组件} />
 *
 */

export default function App() {
  return (
    // <BrowserRouter>
    <HashRouter>
      <div className="app">
        {/* 路由访问-菜单=》使用Link */}
        <ul className="nav">
          <li>
            <Link to="/home">首页</Link>
          </li>
          <li>
            <Link to="/about">关于我们</Link>
          </li>
          <li>
            <Link to="/contact">联系我们</Link>
          </li>
        </ul>

        {/* 配置路由规则=》使用Route组件 */}
        <div className="box">
          {/* == 匹配到的组件，被渲染到这里 == */}
          {/* Route组件身上添加exact属性，就变为精确匹配 */}
          {/* 扩展 */}
          {/* 默认首页 */}
          {/* <Route exact path="/" component={Home} /> */}
          {/* path为空的情况下，重定向到首页/home */}
          <Switch>
            <Redirect exact from="/" to="/home" />
            <Route path="/home" component={Home} />

            {/* 写法1 */}
            {/* <Route path="/about" component={About} /> */}
            {/* 写法2 */}
            <Route path="/about">
              <About />
            </Route>
            <Route path="/contact" component={Contact} />

            <Route path="/login" component={Login} />

            {/* 如果不配置path路径，All组件永远都会渲染 */}
            {/* <Route component={All} /> */}
            {/* 404放到这里 兜底 */}
            <Route component={NotFound} />
          </Switch>
        </div>
      </div>
    </HashRouter>
    // </BrowserRouter>
  )
}
