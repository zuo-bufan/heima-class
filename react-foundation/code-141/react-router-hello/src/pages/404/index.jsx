import { Link } from 'react-router-dom'
function NotFound() {
  return (
    <div>
      <h1>迷路了吗？</h1>
      <p>
        <Link to="/">带你回家</Link>
      </p>
    </div>
  )
}

export default NotFound
