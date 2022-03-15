/**
 * 全局共享的类型声明文件
 */

export type Custom = {
  name: string
  age: number
  fn?: () => void
}

export type NumStr = string | number

export interface Person {
  name: string
}
