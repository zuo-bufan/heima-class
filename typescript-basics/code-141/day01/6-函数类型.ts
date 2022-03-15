/**
 * 函数类型：1. 函数参数添加类型 2. 函数的返回值添加类型
 */

// 求和函数
function add(a: number, b: number): string {
  return a + b + ''
}

add(10, 20)

// 自定义函数类型
type Add = (a: number, b: number) => number

const add2: Add = (a, b) => {
  return a + b
}
const sub: Add = (a, b) => {
  return a - b
}

sub(100, 60)

// void类型 => 没有返回值的类型
function name(name: string): void {}

// 函数的可选参数
function add3(a?: number, b: number = 10): number {
  // if (b) {
  //   return a + b
  // } else {
  //   return a
  // }
  // 如果有可选参数，代码书写要求更加严谨
  if (a && b) {
    return a + b
  }
  return 1
}

add3(1)
add3(1, 2)
add3()

export {}
