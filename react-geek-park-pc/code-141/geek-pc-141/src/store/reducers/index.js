import { combineReducers } from 'redux'
import { reducerLogin } from './login'
import { reducerUser } from './user'
import { reducerArticle } from './article'
const rootReducer = combineReducers({
  token: reducerLogin,
  user: reducerUser,
  article: reducerArticle
})
export default rootReducer