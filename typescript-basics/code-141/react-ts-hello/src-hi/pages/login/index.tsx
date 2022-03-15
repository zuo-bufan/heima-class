import { useHistory, useLocation } from 'react-router-dom'
import { Go } from '../../types/index.d'

function Login() {
  // 1. useHistory => 泛型函数
  const history = useHistory()
  const go = () => {
    history.push('/home')
  }

  // 2. useLocation=> 泛型函数
  const location = useLocation<Go>()
  console.log(location.state!.url)
  return (
    <div>
      <h1>Login</h1>
      <button onClick={go}>登录</button>
    </div>
  )
}

export default Login
