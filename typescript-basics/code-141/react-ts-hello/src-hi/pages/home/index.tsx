import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { AddAction } from '../../store/actions'
import { Go, RootState } from '../../types/index.d'

function Home() {
  // 1. useHistory => 泛型函数
  // 通过useHistory<{参数1:类型1;参数2:类型2...}>() 指定跳转页面传递参数的类型
  const history = useHistory<Go>()
  const go = () => {
    // hash模式 state参数传递失败
    // history.push('/login', {
    //   url: '/home',
    //   test: 10000,
    // })
    history.push({
      pathname: '/login',
      state: {
        url: '/home',
        test: 10000,
      },
    })
  }

  // 2. useSelector获取store数据 => 泛型函数
  // type State = { list: any[] }
  const list = useSelector((state: RootState) => state.list)
  // console.log(list)
  const dispatch = useDispatch()
  const add = () => {
    dispatch(AddAction(Math.random() + ''))
  }

  // 3. 事件对象的类型添加
  const handlerClick = (
    e: React.MouseEvent<HTMLHeadingElement, MouseEvent>
  ) => {
    console.log(e.target)
  }
  return (
    <div>
      <h1 onClick={handlerClick}>Home</h1>
      <input type="text" onBlur={(e) => console.log(e)} />
      <button onClick={go}>跳转登录-携带参数</button>
      <hr />
      <ul>
        {list.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
      <p>
        <button onClick={add}>添加</button>
      </p>
    </div>
  )
}

export default Home
