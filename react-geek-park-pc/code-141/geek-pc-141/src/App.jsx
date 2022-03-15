import './App.scss'
// BrowserRouter组件（history模式）,HashRouter（hash模式）
import { Router, Route, Switch, Redirect } from 'react-router-dom'
// 导入页面组件
// import Layout from '@/pages/layout'
// import Login from '@/pages/login'
// import NotFound from '@/pages/404'
// import { isAuth } from './utils/auth'
// 导入测试页面
import Test from '@/pages/test'

// 导入鉴权组件
import AuthRoute from '@/components/auth'
import customHistory from './utils/history'
import { lazy, Suspense } from 'react'
import { Spin } from 'antd'

// 懒加载导入
const Layout = lazy(() => import('@/pages/layout'))
const Login = lazy(() => import('@/pages/login'))
const NotFound = lazy(() => import('@/pages/404'))

function App() {
  return (
    <Router history={customHistory}>
      {/* fallback指定懒加载的loading效果 */}
      <Suspense
        fallback={
          <div className="loading">
            <Spin tip="页面努力加载中..." />
          </div>
        }>
        <div className="app">
          {/* 配置路由规则=》一级路由
        说明：配置子路由，去对应的父路由组件中配置
        */}
          <Switch>
            <Redirect exact from="/" to="/home" />
            {/* <Route path="/home" component={Layout} /> */}
            <AuthRoute path="/home" component={Layout} />

            <Route path="/login" component={Login} />
            <Route path="/test" component={Test} />

            {/* 配置404=》必须放到最后 */}
            <Route component={NotFound} />
          </Switch>
        </div>
      </Suspense>
    </Router>
  )
}

export default App
