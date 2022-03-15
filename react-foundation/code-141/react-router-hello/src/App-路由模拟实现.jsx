import { useEffect, useState } from 'react'

// 导入页面
import Home from './pages/home'
import About from './pages/about'
import Contact from './pages/contact'

export default function App() {
  // 进入页面时，就拿到当前 hash 值，来作为状态的默认值
  // 1. 存储路由的path地址
  const [path, setPath] = useState(window.location.hash.slice(1))

  // 组件加载执行执行一次
  // componetDidMount
  useEffect(() => {
    const handleHashChange = () => {
      setPath(window.location.hash.slice(1))
    }

    // 给 window 绑定 hashchange 事件，
    // 来监听浏览器地址栏中 # 后面内容的变化，也就是 hash 改变
    window.addEventListener('hashchange', handleHashChange)
    // 组件卸载执行：componentWillUnmount
    return () => {
      // 移除事件监听
      window.removeEventListener('hashchange', handleHashChange)
    }
  }, [])

  return (
    <div>
      <ul>
        <li>
          <a href="#/home">首页</a>
        </li>
        <li>
          <a href="#/about">关于我们</a>
        </li>
        <li>
          <a href="#/contact">练习我们</a>
        </li>
      </ul>

      <div>
        {path === '/home' && <Home></Home>}
        {path === '/about' && <About></About>}
        {path === '/contact' && <Contact></Contact>}
      </div>
    </div>
  )
}
