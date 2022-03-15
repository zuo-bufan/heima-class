/**
 * 对象类型：对象变量:{属性1?:type,属性2:type...}
 * 说明：属性名后+? 表示该属性不是必须的
 *
 */
// 宽泛的定义
let obj: object = { a: 1, c: 'c' }

// 详细定义(推荐)
let obj2: { a: number; b: string; fn(a: number, b: number): number }

obj2 = {
  a: 1,
  b: 'b',
  fn(a, b) {
    return a + b
  },
}

// 优化：使用类型别名定义对象类型
//
type Obj = { a?: number; b: string; fn?(a: number, b?: number): number }

let obj3: Obj = {
  a: 1,
  b: 'b',
  fn(a, b) {
    if (b) {
      return a + b
    }
    return a
  },
}

let obj4: Obj = {
  // a: 1,
  b: 'b',
}

// 练习
// 1. 类型别名
type Student1 = {
  name: string
  age: number
  weight: number
  study: (lesson: string) => number
}

// 2. 接口
interface Student2 {
  name: string
  age: number
  sex: string
  weight: number
  study: (lesson: string) => number
}

let stu1: Student1 = {
  name: '鑫杰',
  age: 18,
  weight: 200,
  study() {
    return 1
  },
}

let stu2: Student2 = {
  name: '晓庆',
  age: 18,
  sex: '女',
  weight: 90,
  study() {
    return 1
  },
}

export {}
