/**
 * 封装存储token相关方法：
 * 1. 存token
 * 2. 获取token
 * 3. 删除token
 * 4. 根据token判断是否登录
 */
const tokenKey = 'geek-token-141'
/**
 * 
 * @param {*} token:string 
 */
export function setToken (token) {
  localStorage.setItem(tokenKey, token)
}

export function getToken () {
  // 注意：一定要返回获取到的token
  return localStorage.getItem(tokenKey)
}

export function delToken () {
  localStorage.removeItem(tokenKey)
}
/**
 * 作用：判断是否登录: false未登录 true登录
 * !! 使用场景：判断一个值 是否是 =》 '' null undefined
 */
export function isAuth () {
  return !!getToken()
}