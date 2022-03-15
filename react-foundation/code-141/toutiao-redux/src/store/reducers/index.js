import { combineReducers } from 'redux'
// 导入要合并的reducer函数
import { articles } from './article'
import { channels } from './channel'

export const rootReducer = combineReducers({
  articles,
  channels
})