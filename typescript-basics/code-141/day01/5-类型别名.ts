/**
 * 类型别名（自定义类型）: 通过type声明类型 ，例如：type 类型名 = 各种类型
 * 作用：复用类型，简化代码
 */
// let count2: number | string
// let count3: number | string
// 创建一个自己的类型
type MyType = number | string

let count2: MyType
count2 = 1
count2 = 'str'

export {}
