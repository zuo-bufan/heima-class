import { withRouter } from 'react-router-dom'

// 如何在该组件中拿到路由信息？？？
// 注意：该组件不是通过 Route 直接渲染出来的，所以，它是无法直接通过 props 来拿到路由信息
// 可以通过路由提供的高阶组件 withRouter 来获取路由信息
const ArticleList = props => {
  console.log('ArticleList', props)
  return (
    <div>
      <h3>文章列表组件</h3>
    </div>
  )
}

export default withRouter(ArticleList)
