import { combineReducers } from 'redux'
// 导入要合并的reducer函数
import { reducerCount } from './count'
import { reduerList } from './list'

export const rootReducer = combineReducers({
  reducerCount,
  reduerList
})

