import { combineReducers } from 'redux'

// 导入子 reducer
import { channelReducer } from './channel'

// 创建 根reducer
export const rootReducer = combineReducers({
  channelReducer,
})
