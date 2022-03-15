/**
 * 泛型约束：为泛型添加约束来`收缩类型`（缩窄类型取值范围）
 * 为什么添加泛型约束：封装函数的功能，需要一些固定的属性，可以限定参数的类型
 * 步骤：
 * 1. 定义一个接口，接口中定义约束的属性类型
 * 2. 泛型变量继承接口约束
 */
// 需求：要求泛型有length属性
function fn<Type>(value: Type[]): void {
  // 注意：此处会报错
  console.log(value.length)
}

fn([1, 2])

// 泛型约束
// 1. 接口相当于约束条件
interface Ilen {
  length: number
}
// 2. 泛型变量继承接口，实现约束
function fn2<Type extends Ilen>(value: Type): Type {
  // 注意：此处会报错
  console.log(value.length)
  return value
}

fn2([1, 2])
fn2('dfdf')
fn2({ length: 1, a: 2 })

function getProp<Type, Key extends keyof Type>(obj: Type, key: Key) {
  return obj[key]
}

// Key extends keyof Type => 约束了泛型变量Key的取值范围=》第一个参数（对象）中的属性列表
let person = { name: 'jack', age: 18, sex: '男' }
getProp(person, 'sex')

export {}
