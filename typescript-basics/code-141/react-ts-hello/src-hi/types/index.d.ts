/**
 * 统一管理公共类型（复用）
 */
import store from '../store/index'
import { ThunkAction } from 'redux-thunk'
// data数据类型
export type Go = { url: string; test: number } | undefined

// store类型
type Add = {
  type: 'add/todo'
  name: string
}
type Del = {
  type: 'del/todo'
  id: number
}
// 联合类型=》提供给reducer函数使用
export type TodoAction = Add | Del

export type RootAction = TodoAction

// store所有数据的类型
export type RootState = ReturnType<typeof store.getState>
// 第一个类型参数：thunk action 返回值类型
// 第二个类型参数：Redux 状态的类型
// 第三个类型参数：thunk action 额外参数的类型
// 第四个类型参数：Redux 中所有 action 的类型
// 获取store类型
export type RootThunkAction = ThunkAction<void, RootState, unknown, RootAction>

// 演示
function add(n1: number, n2: number): number {
  return n1 + n2
}

// 获取函数 add 的类型
type AddFn = typeof add

// 1. 获取函数 add 的返回值类型
type AddFnReturnType = ReturnType<AddFn>

// 2. 直接获取 add 函数的返回值类型（一步获取）
type AddFnReturnType2 = ReturnType<typeof add>
