/**
 * 1. Partial<Type> 用来构造(创建)一个类型，将 Type 的所有属性设置为可选
 * 2. Readonly<Type> 用来构造一个类型，将 Type 的所有属性都设置为 readonly(只读)。
 * 3. Pick<Type, Keys> 从 Type 中选择一组属性来构造新类型。
 */

type Props = {
  name: string
  age: number
  fn: () => void
}
// 1. 将类型Props中的所有属性设置为可选
// Partial<Props> 会把Props中所有属性类型变为可选
type PartialProps = Partial<Props>

// let obj1: Props = {} // 报错
let obj: PartialProps = { age: 10 }
obj.age = 100

// 2. 将类型Props中的所有属性设置为只读
type ReadonlyProps = Readonly<Props>
let obj2: ReadonlyProps = { name: '鑫杰', age: 18, fn() {} }
// obj2.name = '刘晓庆' // 报错=》不能修改

// 3. 从Props中选择一部分属性新建类型
type PickProps = Pick<Props, 'fn' | 'age'>

let obj3: PickProps = {
  age: 1,
  fn() {},
}
