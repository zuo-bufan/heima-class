/**
 * 合并多个reducer
 */
import { combineReducers } from 'redux'
import { reduerTodo } from './todo'
import { reduerFilter } from './filter'

export const rootReducer = combineReducers({
  todo: reduerTodo,
  filter: reduerFilter
})