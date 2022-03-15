import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addAction } from '../store/actions/todo'

function Head() {
  // 添加任务输入框状态
  const [name, setName] = useState('')
  // 添加任务
  const dispatch = useDispatch()
  const addTask = (e) => {
    // 判断是回车键同时name不是空
    // console.log(e.key)
    if (e.keyCode !== 13 || !name.trim()) return
    console.log(name)
    // 添加（redux）
    dispatch(addAction(name))

    // 清空输入框值
    setName('')
  }

  return (
    <header className="header">
      <h1>todos</h1>
      <input
        className="new-todo"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="请输入任务名"
        onKeyDown={addTask}
        autoFocus
      />
    </header>
  )
}

export default Head
