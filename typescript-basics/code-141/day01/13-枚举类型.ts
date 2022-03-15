/**
 * 枚举：使用enum定义一组命名常量。它描述一个值，该值可以是这些命名常量中的一个(一组可选值的列表)
 * 1. 枚举默认值：从0开始递增
 * 2. 枚举可以赋值
 *
 */

// 数字枚举（值是数字）
enum Direct {
  Up = 10, // 0
  Down = 20, // 1
  Left, // 2
  Right, // 3
}

// 字符串枚举（值是字符串）
enum Direct2 {
  Up = 'up',
  Down = 'down',
  Left = 'left',
  Right = 'right',
}

let left: Direct = Direct.Left
let down: Direct = Direct.Down

let arr: number[] = [1, 2, 3]

console.log('枚举默认值：', left, down)
