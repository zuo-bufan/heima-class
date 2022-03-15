import { createStore, applyMiddleware } from 'redux'
// 导入合并之后的reducer
import { rootReducer } from './reducres/index'

// 导入日志中间件(修改store数据，在浏览器控制台打印日志)
// import logger from 'redux-logger'
// 导入自己的日志中间件
import logger from '../middleware'
// 导入 thunk 中间件（支持异步请求）
import thunk from 'redux-thunk'

// 导入devtols中间件
import { composeWithDevTools } from 'redux-devtools-extension'

const md = composeWithDevTools(applyMiddleware(thunk, logger))

const store = createStore(rootReducer, md)


export default store
