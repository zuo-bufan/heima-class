// `never` 类型：**永远不会出现**的值的类型（或永远不会发生的类型）
// case1
let fn1 = () => {
  // 手动通过 throw 抛出一个异常（错误）
  throw new Error('err...')
}
let n1 = fn1() // n => never

// case2
let fn2 = () => {
  while (true) {}
}
let n2 = fn2() // n => never

// case3
const num = 123
if (num !== 123) {
  let n = num // n => never
}

let x: null | undefined | number

// t1 的类型为：null | undefined | number
let t1 = x
// t2 的类型为：number
let t2 = x!

export {}
