import { isAuth } from '@/utils/auth'
import { Route, Redirect } from 'react-router-dom'
/**
 * 需求：根据是否有token，决定是否能访问某个页面
 * 1. 有token，返回Layout组件
 * 2. 没有token，使用Redirect组件重定向跳转到login登录页
 */
// {component:CurrComponent别名}
function AuthRoute({ component: CurrComponent, ...rest }) {
  // console.log('剩余参数：', rest)
  return (
    <Route
      {...rest}
      render={(props) => {
        if (!isAuth()) {
          // 没有登录=>跳回登录页
          // return <Redirect to="/login" />
          return (
            <Redirect
              to={{
                pathname: '/login',
                // 传递参数给登录页：当前访问页面的地址=>props.location.pathname
                state: {
                  from: props.location.pathname,
                },
              }}
            />
          )
        }
        // 已经登录=》正常显示页面
        return <CurrComponent />
      }}
    />
  )
}

export default AuthRoute
