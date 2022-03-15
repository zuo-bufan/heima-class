// 公共可复用的类型
interface Person {
  name: string
  age: number
  say?: () => void
}

interface Student extends Person {
  // 添加自己的
  class: number
  study: () => void
}

const stu: Student = {
  name: '闫新斌',
  age: 18,
  class: 141,
  study() {},
}

export {}
