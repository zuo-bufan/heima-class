import { useDispatch, useSelector } from 'react-redux'
import { changeFilterAction } from '../store/actions/filter'
import { delDoneAction, delDoneAsyncAction } from '../store/actions/todo'

function Foot() {
  /**
   * 需求：统计未完成任务数量
   * 1. 获取所有任务
   * 2. 计算所有任务中done的值是false（未完成）
   *
   * useSelector使用总结：
   * 1. 获取数据
   * 2. 根据获取的数据可以进行计算
   */
  const unDone = useSelector((store) => {
    return store.todo.filter((item) => item.done === false).length
  })

  // 2. 获取列表filter状态
  const filter = useSelector((store) => store.filter)

  const dispatch = useDispatch()

  console.log(unDone, filter)

  return (
    <footer className="footer">
      <span className="todo-count">
        <strong>{unDone}</strong> 未完成
      </span>
      <ul className="filters">
        <li>
          <a
            onClick={() => {
              dispatch(changeFilterAction('all'))
            }}
            className={filter === 'all' ? 'selected' : ''}
            href="#/">
            所有
          </a>
        </li>
        <li>
          <a
            onClick={() => {
              dispatch(changeFilterAction('unDone'))
            }}
            className={filter === 'unDone' ? 'selected' : ''}
            href="#/active">
            未完成
          </a>
        </li>
        <li>
          <a
            onClick={() => {
              dispatch(changeFilterAction('done'))
            }}
            className={filter === 'done' ? 'selected' : ''}
            href="#/completed">
            已完成
          </a>
        </li>
      </ul>
      <button
        onClick={() => {
          dispatch(delDoneAction())
        }}
        className="clear-completed">
        删除ok(同步)
      </button>
      <button
        onClick={() => {
          dispatch(delDoneAsyncAction())
        }}
        className="clear-completed">
        删除ok（异步）
      </button>
    </footer>
  )
}

export default Foot
