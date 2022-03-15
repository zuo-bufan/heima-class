// 定义：`unknown` 类型是类型安全的 any
// 1. any类型：可以进行任意操作，没有安全可言=> 失去类型保护
let value: any
value = true
value = 1
// ==不会报错==
value.length

// 2. unknown类型 =》可以进行任意操作，有类型保护
let value2: unknown
value2 = 'abc'
// value2 = 1
// ==报错==
// value2.length

// 解决
// // 方式一：先转化为具体类型再使用
let va = value2 as string
console.log(va.length)
// // 方式二：先判断是 string 类型，再使用
if (typeof value2 === 'string') {
  console.log(value2.length)
}
