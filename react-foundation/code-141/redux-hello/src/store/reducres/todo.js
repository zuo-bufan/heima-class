/**
 * todoList 列表数据
 */
const initialState = [
  { id: 0, name: '吃饭', done: false },
  { id: 1, name: '睡觉', done: true },
  { id: 2, name: '学习', done: false },

]
/**
 * 
 * @param {*} state 上一次最新的（第一就是默认的）
 * @param {*} action 最新命令
 * @returns 
 */
export const reduerTodo = (state = initialState, action) => {
  console.log('reducer:', action)
  // 根据action命令去修改数据
  // 1. 删除任务
  if (action.type === 'todo/del') {
    // 返回最新修改的数据
    return state.filter(item => item.id !== action.id)
  }
  // 2. 任务是否完成（单选）
  if (action.type === 'todo/toggle') {
    return state.map(item => {
      if (item.id === action.id) {
        return {
          ...item,
          done: !item.done
        }
      }
      return item
    })
  }
  // 3. 新增任务
  if (action.type === 'todo/add') {
    return [
      {
        id: Date.now(),
        name: action.name,
        done: false
      },
      ...state,
    ]
  }

  // 4. 全选
  if (action.type === 'todo/toggleall') {
    return state.map((item) => {
      return {
        ...item,
        done: action.isAll
      }
    })
  }

  // 5. 删除已完成
  if (action.type === 'todo/deldone') {
    return state.filter(item => item.done === false)
  }

  // 默认返回的数据
  return state
}