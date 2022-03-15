import ReactDOM from 'react-dom'
// 样式文件
import './styles/index.css'
import App from './App'

import { Provider } from 'react-redux'
import store from './store'

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  ,
  document.querySelector('#root'))
