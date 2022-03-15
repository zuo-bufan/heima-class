import request from '@/utils/request'
export const getUserAction = (payload) => {
  return async (dispatch, getState) => {
    const { data } = await request.get('/user/profile')
    console.log('登录人信息：', data)
    dispatch({ type: 'user/get', user: data })
  }
}