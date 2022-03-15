import { useDispatch, useSelector } from 'react-redux'
import {
  delTodoAction,
  toggleAction,
  toggleAllAction,
} from '../store/actions/todo'

function Main() {
  // const store = useSelector((store) => {
  //   return store
  // })
  // 1. 获取todo列表数据
  const list = useSelector((store) => {
    // 根据 filter过滤列表数据：// all(所有) unDone(未完成) done(完成)
    if (store.filter === 'all') {
      return store.todo
    } else if (store.filter === 'unDone') {
      return store.todo.filter((item) => item.done === false)
    } else {
      return store.todo.filter((item) => item.done === true)
    }
  })
  // const filter = useSelector((store) => store.filter)
  // console.log('最新变化的filter状态：', filter)

  // 2. 删除待办事项任务
  const dispatch = useDispatch()
  const delTodo = (id) => {
    dispatch(delTodoAction(id))
  }

  console.log(list)

  // 3. 是否是全部选中状态
  const isAll = list.every((item) => item.done)

  // 渲染list的方法
  const renderList = () => {
    return list.map((item) => (
      <li className={item.done ? 'completed' : ''} key={item.id}>
        <div className="view">
          <input
            className="toggle"
            type="checkbox"
            checked={item.done}
            onChange={() => {
              // 任务的单选
              dispatch(toggleAction(item.id))
            }}
          />
          <label>{item.name}</label>
          {/* 删除 */}
          <button onClick={() => delTodo(item.id)} className="destroy"></button>
        </div>
      </li>
    ))
  }

  return (
    <section className="main">
      {/* 全选框 */}
      <input
        id="toggle-all"
        checked={isAll}
        onChange={(e) => {
          // 全选框变化影响列表选中
          dispatch(toggleAllAction(e.target.checked))
        }}
        className="toggle-all"
        type="checkbox"
      />
      <label htmlFor="toggle-all">Mark all as complete</label>
      {/* todo列表 */}
      <ul className="todo-list">
        {/* {list.map((item) => (
          <li className={item.done ? 'completed' : ''} key={item.id}>
            <div className="view">
              <input className="toggle" type="checkbox" />
              <label>{item.name}</label>
              <button className="destroy"></button>
            </div>
          </li>
        ))} */}
        {renderList()}
      </ul>
    </section>
  )
}

export default Main
