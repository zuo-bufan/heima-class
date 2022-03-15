// 联合类型语法：type1 | type2  作用：给变量添加多个类型
let count: number = 1

let count2: number | string
count2 = 1
count2 = '1'

// arr可以是字符串或者是数组类型
let arr: string | number[]
arr = '1'
arr = [1, 2]

let arr2: (string | number)[]
arr2 = [1, '2']
arr2 = [1, 2]
arr2 = ['2']

export {}
