import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import reducer from './reducers'

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)))

console.log('获取store数据：', store.getState())
export default store
