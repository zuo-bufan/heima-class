import { useHistory } from 'react-router-dom'

function Login() {
  const history = useHistory()
  console.log('路由对象：', history)

  const login = () => {
    // 跳转
    // history.push('/')
    // history.replace('/')
    // 跳转传参=>state参数名 => 跳转重定向，造成参数丢失
    history.push({ pathname: '/home', state: { a: 10000 } })
  }
  return (
    <div>
      <h1>Login</h1>
      <button onClick={login}>登录</button>
    </div>
  )
}

export default Login
