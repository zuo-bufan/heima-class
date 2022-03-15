import { getToken } from "@/utils/auth"

// 只存储token（给字符串就行）
const initialState = getToken() || ''

export const reducerLogin = (state = initialState, action) => {
  // 存token
  if (action.type === 'login/token') {
    return action.token
  }
  // 删除token
  if (action.type === 'login/delToken') {
    return ''
  }
  return state
}