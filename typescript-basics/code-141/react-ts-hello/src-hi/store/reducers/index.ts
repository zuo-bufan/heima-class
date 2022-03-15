import { combineReducers } from 'redux'
import { reducerTodo } from './todo'
const rootReducer = combineReducers({
  list: reducerTodo,
})
export default rootReducer
