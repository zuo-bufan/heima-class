/**
 * 创建store和引入中间件
 */

import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { rootReducer } from './reducers'

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))

export default store