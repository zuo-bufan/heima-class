import React, { Component } from 'react'
// 导入子组件
import Head from './pages/head'
import Main from './pages/main'
import Foot from './pages/foot'

export default class App extends Component {
  render() {
    return (
      <section className="todoapp">
        {/* 头部 */}
        <Head />
        {/* 列表 */}
        <Main />
        {/* 底部 */}
        <Foot />
      </section>
    )
  }
}
