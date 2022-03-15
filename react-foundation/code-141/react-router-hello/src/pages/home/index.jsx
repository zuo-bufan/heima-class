import { useHistory, useLocation } from 'react-router-dom'

function Home() {
  const history = useHistory()
  const location = useLocation()
  console.log('接收参数：', location)
  return (
    <div>
      <h1>Home</h1>
      <button
        onClick={() => {
          history.goBack()
        }}>
        返回
      </button>
    </div>
  )
}

export default Home
