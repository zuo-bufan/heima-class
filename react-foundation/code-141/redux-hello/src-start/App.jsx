import './App.css'

import { useDispatch, useSelector } from 'react-redux'
// 导入action命令
import { Add, Sub } from './store/actions/count'

function App() {
  // 1. 获取redux的store数据
  // 语法：useSelector((store中的数据)=>store中的数据)
  const count = useSelector((state) => {
    // 按需返回需要的数据
    return state.reducerCount.count
  })
  const list = useSelector((state) => state.reduerList)
  // 2. 修改redux store数据
  // useDispatch()获取dispatch方法（=== store.dispatch）发号命令action=》调用reducer函数，修改数据
  const dispatch = useDispatch()

  console.log('获取redux的store数据:', count, list)

  return (
    <div className="App">
      <ul>
        <li>{count}</li>
        <li>
          <button
            onClick={() => {
              dispatch(Add(1))
            }}>
            加1
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              dispatch(Sub())
            }}>
            减1
          </button>
        </li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </div>
  )
}

export default App
