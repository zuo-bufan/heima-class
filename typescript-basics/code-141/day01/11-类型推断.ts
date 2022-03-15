// 变量 age 的类型被自动推断为：number
let age = 18
// 错误
// age = '1'

// 函数返回值的类型被自动推断为：number
// 注意：函数参数一定要添加类型
function add(num1: number, num2: number) {
  return num1 + num2 + ''
}
