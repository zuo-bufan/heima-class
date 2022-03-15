/**
 * 字面量类型：通过const定义，有具体的值，这个值可以作为类型
 * 使用场景：字面量类型配合联合类型一起使用，**用来表示一组明确的可选值列表**
 */

let str1 = 'Hello TS'
const str2 = 'Hello TS'

// 字面量类型：{ name: 'jack' }
const obj: { name: 'jack' } = { name: 'jack' }

// 字面量类型：[]
const arr: [] = []

// 字面量类型：18
const age: 18 = 18

// 字面量类型：false
const falseValue: false = false

// { name: 'jack' } 也是一个字面量值
const obj2 = { name: 'jack' }

// 自定义类型
type Sex = 'boy' | 'girl'

const sex: Sex = 'girl'

export {}
