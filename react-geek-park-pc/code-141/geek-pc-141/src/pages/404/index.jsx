import { useEffect, useRef, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { Link } from 'react-router-dom'
import styles from './index.module.scss'

function NotFound() {
  /**
   * 实现倒计时：
   * 1. 定义倒计时秒数的状态数据
   * 2. 使用setIterval定时器方法，每隔1s执行减一(开启一次)
   * 3. 判断倒计时秒数===0时候，跳转回首页
   */
  const history = useHistory()
  const [count, setCount] = useState(10)
  // 存储定时器ID
  const timerId = useRef(0)

  // componentDidMount(只执行一次)
  useEffect(() => {
    timerId.current = setInterval(() => {
      // setCount(count - 1)
      setCount((count) => count - 1)
    }, 1000)
    // 这个返回到函数，会在组件销毁的时候执行=》componentWillUnmount
    return () => clearInterval(timerId.current)
  }, [])

  useEffect(() => {
    console.log('count变化了：', count)
    if (count === 0) {
      history.replace('/home')
    }
  }, [count, history])

  return (
    <div className={styles.root}>
      <h1>对不起，您访问的页面不存在~</h1>
      <p className="back">
        将在 {count} 秒后，返回首页（或者：点击立即返回
        <Link to="/home">首页</Link>）
      </p>
      <hr />
      <Test />
    </div>
  )
}

// 测试组件
const Test = () => {
  const [count, setCount] = useState(0)

  // 3 秒后，获取 count 值
  const getCount = () => {
    setTimeout(() => {
      console.log(count)
    }, 3000)
  }

  // 计数器 +1
  const handleClick = () => {
    setCount(count + 1)
  }

  return (
    <div>
      <h1>计数器：{count}</h1>
      <button onClick={handleClick}>+1</button>
      <button onClick={getCount}>延迟获取 count 值</button>
    </div>
  )
}

export default NotFound
