/**
 * 维护todo-list列表数据
 */

import { TodoAction } from '../../types'

// 数据类型
type Todo = {
  id: number
  name: string
  done: boolean
}[]

const initialState: Todo = [
  {
    id: 1,
    name: '学习',
    done: false,
  },
  {
    id: 2,
    name: '吃饭',
    done: false,
  },
]

export const reducerTodo = (state = initialState, action: TodoAction) => {
  if (action.type === 'add/todo') {
    return [
      {
        id: Date.now(),
        name: action.name,
        done: false,
      },
      ...state,
    ]
  }
  return state
}
