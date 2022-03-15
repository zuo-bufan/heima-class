import axios from 'axios'
import { useEffect, useState } from 'react'
function App(props) {
  // 1. 列表数据
  const [list, setList] = useState([])

  // 2. 获取列表数据
  const getList = async () => {
    const { data } = await axios({ url: 'http://localhost:8888/list' })
    console.log(data)
    setList(data)
  }
  // 当依赖项是[]空数组=》相当于componentDidMount
  // 作用：1.发请求  2.操作DOM
  useEffect(() => {
    console.log('useEffect3')
    getList()
  }, [])
  return (
    <ul>
      {list.map((item) => (
        <li key={item.id}>
          {item.author}：{item.comment}
        </li>
      ))}
    </ul>
  )
}

export default App
