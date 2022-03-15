/**
 * 泛型接口：接口也可以配合泛型来使用，以增加其灵活性，增强其复用性
 * 写法：interface 接口名<泛型变量1, 泛型变量2...> {}
 * 使用：let 变量名:接口名<类型1,类型2...>
 */
interface Person<Age, Sex> {
  name: string
  age: Age
  sex: Sex
  say?: () => void
}

// 需求：
let stu: Person<string, string> = {
  name: '赵文武',
  age: '18',
  sex: '男',
}

let stu2: Person<number, string> = {
  name: '赵文武',
  age: 18,
  sex: '男',
}

export {}
