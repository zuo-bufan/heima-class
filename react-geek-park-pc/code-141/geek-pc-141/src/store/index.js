import { createStore, applyMiddleware } from 'redux'
// composeWithDevTools配合redux插件使用（开发环境）
// import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import reducer from './reducers'

let middlewares
if (process.env.NODE_ENV === 'production') {
  // 生产环境，只启用 thunk 中间件
  middlewares = applyMiddleware(thunk)
} else {
  // 开发环境
  const { composeWithDevTools } = require('redux-devtools-extension')
  middlewares = composeWithDevTools(applyMiddleware(thunk))
}

const store = createStore(reducer, middlewares)
export default store