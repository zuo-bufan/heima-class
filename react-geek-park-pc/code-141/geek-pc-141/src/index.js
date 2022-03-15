/**
 * 入口
 */
import React from 'react'
import ReactDOM from 'react-dom'
// 全局样式
import '@/index.scss'

// 引入antd组件库样式
// import 'antd/dist/antd.css'
import 'antd/dist/antd.min.css'
import App from './App'
// 集成store
import { Provider } from 'react-redux'
import store from './store'

import { ConfigProvider } from 'antd'
// 国际化配置
import 'moment/locale/zh-cn'
import locale from 'antd/lib/locale/zh_CN'

console.log('环境变量：', process.env)

if (process.env.NODE_ENV === 'production') {
  // 开发环境=》重写log，不执行
  console.log = console.warn = () => { }
}
/**
 * 复习和面试
 * 1. 上完就业加强课简历写好=》2-28开找
 * 2. 找工作（三要素）：1. 简历（敲门砖）2. 项目（工作经历，能力的证明）3. 表达能力（面试沟通）
 * 3. 定目标：15K（期望薪资）=》简历里项目经验写===2年-3年===
 */

ReactDOM.render(
  <Provider store={store}>
    <ConfigProvider locale={locale}>
      <App />
    </ConfigProvider>
  </Provider>,
  document.getElementById('root')
)

