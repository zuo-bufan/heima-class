import { delToken, setToken } from '@/utils/auth'
import request from '@/utils/request'
// import axios from 'axios'

// 登录
export const loginAction = (values) => {
  return async (dispatch, getState) => {
    /**
     * 登录action：
     * 1. 调用后台接口发请求，获取token
     * 2. 使用dispatch存储token：1. redunx存储（内存） 2. 本地也存储一份（持久化）
     */
    // const { data: { data: { token } } } = await axios.post('http://geek.itheima.net/v1_0/authorizations', values)
    const { data: { token } } = await request.post('/authorizations', values)
    console.log(token)
    dispatch({ type: 'login/token', token })
    // localStorage.setItem('geek-token-141', token)
    setToken(token)
  }
}

// 退出登录
export const logoutAction = (payload) => {
  return async (dispatch, getState) => {
    /**
     * 1. 删除token(记得删除本地)
     * 2. 删除登录人信息user
     * 3. 发请求退出（没有）
     */
    dispatch({ type: 'login/delToken' })
    delToken()
    dispatch({ type: 'user/del' })
  }
}