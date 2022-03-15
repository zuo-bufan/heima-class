/**
 * 泛型（Generics）可以在保证类型安全前提下，让函数等与多种类型一起工作，从而实现复用
 * 常用于：函数、接口、class 中
 * 定义：通过泛型实现传入什么类型的参数，函数的参数和返回值就是什么类型（动态）
 * 步骤：
 * 1. 创建泛型函数：函数名<Type1,Type2...>(参数1:Type1,参数2:Type2...):Type1{}
 * 2. 调用泛型函数：函数名<类型1,类型2...>(实参1,实参2...)
 */
// 需求：函数传入什么类型的数据，就返回什么类型数据
// function fn(a: number): number {
//   return a
// }
// any代表任意类型=》失去了ts类型约束
// function fn(a: any): any {
//   return a
// }
// 使用泛型函数=》保留ts类型约束，同时实现传入什么类型，返回什么类型
// Type相当于一个变量，类型是不固定的（动态），类型由函数调用的时候传入的数据类型决定
// es5构造函数
function fn<Type>(a: Type): Type {
  console.log(typeof a)
  return a
}

function fn2<S>(a: S): S {
  console.log(typeof a)
  return a
}
// 使用箭头函数定义泛型函数
// 泛型变量可以定义多个，以逗号分割:<F,S,T...>
const fn3 = <Type, Second>(a: Type, b: Second): Type => {
  return a
}
fn3<number, string>(12, '13')

// ===课堂练习：使用类型别名type，定义泛型箭头函数类型===
type Fun = <Type, S>(a: Type, b: S) => Type

const fn4: Fun = (a, b) => {
  return a
}

fn4<number, number>(1, 2)

// fn(1)
// fn('10')
// fn([])
// 标准调用
fn<number>(2)
fn<string>('hi 泛型！')
// 简化调用
fn(10)

fn2<number>(12)

export {}
