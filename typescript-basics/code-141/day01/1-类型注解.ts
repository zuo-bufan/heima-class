// 类型注解语法：变量名:type = 默认值
let str: string = '我是个字符串'
let num: number

// 因为定义str的时候指定了类型是：string（字符串），所以只能赋值字符串
// 赋值其他类型报错
// 错误
// str = 1
// 正确
str = 'ok'
num = 100

export {}
