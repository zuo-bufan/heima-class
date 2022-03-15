/**
 * 创建路由的history对象=>提供页面跳转方法
 */
// createBrowserHistory(history模式) | createHashHistory(hash模式)
import { createBrowserHistory, createHashHistory } from 'history'

// 1. history模式
const customHistory = createBrowserHistory()
// 2. hash模式
// const customHistory = createHashHistory()


export default customHistory

