const initialState = {}

export const reducerUser = (state = initialState, action) => {
  // console.log('执行命令：', action)
  // 存登录人信息
  if (action.type === 'user/get') {
    return action.user
  }
  // 删除登录人信息
  if (action.type === 'user/del') {
    return {}
  }
  return state
}