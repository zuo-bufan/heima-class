// 原始类型：number/string/boolean/null/undefined/symbol
let count: number = 0
let isshow: boolean = true
let isnull: null = null

// 场景：作为对象属性名，避免对象属性名冲突（唯一性）
let key = Symbol()

let obj = {
  a: 1,
  [key]: 2,
}

console.log(obj[key])

export {}
