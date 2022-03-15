import axios from 'axios'
import store from '@/store'
import { logoutAction } from '@/store/actions/login'
import { message } from 'antd'
import customHistory from './history'

// console.log(store.getState())
// 创建一个新axios实例
const request = axios.create({
  // 后台请求基础地址
  // baseURL: 'http://geek.itheima.net/v1_0'
  baseURL: process.env.REACT_APP_URL
})

// 请求拦截器
request.interceptors.request.use((config) => {
  // 获取token
  const { token } = store.getState()
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }

  return config
})


// 响应拦截器
// 对后台数据的返回做简化
request.interceptors.response.use((res) => {
  // 直接返回data给页面（action）
  return res.data
}, (error) => {
  console.dir(error)
  if (error.response.status === 401) {
    /**
     * 1. 清除redux中存储的状态数据
     * 2. 跳回登录页，携带当前页面的地址（目的：下次登录，可以跳回上次访问的页面）
     */
    message.error(error.response.data.message)
    store.dispatch(logoutAction())
    //  怎么获取路由跳转的history对象？=> 通过history模块
    customHistory.replace({
      pathname: '/login',
      state: {
        // customHistory.location.pathname 获取当前访问页面的地址
        from: customHistory.location.pathname
      }
    })
  }
  return Promise.reject(error)
})

export default request