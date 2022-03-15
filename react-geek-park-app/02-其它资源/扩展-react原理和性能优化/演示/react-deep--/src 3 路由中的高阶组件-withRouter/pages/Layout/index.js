import ArticleList from './components/ArticleList'

// 获取路由信息
// 注意：不能使用 hooks
// 注意：如果该组件是直接通过 Route 来渲染的，那么，该组件是可以直接通过 props 拿到路由信息的
const Layout = props => {
  console.log('Layout', props) // props => 路由信息
  return (
    <div>
      Layout - 布局页面
      <ArticleList />
    </div>
  )
}

export default Layout
