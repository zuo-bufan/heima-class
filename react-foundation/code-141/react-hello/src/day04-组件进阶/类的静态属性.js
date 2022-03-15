// 构造函数（es5）
function Student () {
  // abc叫实例属性
  this.abc = 123
  // fn叫实例的方法
  this.fn = () => console.log(456)
}

// 添加静态属性和方法(不要new，通过构造函数名访问)
Student.age = 20
Student.fnc = () => console.log(456)


const stu = new Student()
console.log(stu, stu.age)
console.log('访问静态属性：', Student.age)




// class 语法糖(es6)=》原理：构造函数
class Test {
  constructor() {
    // abc叫实例属性
    this.abc = 123
    // fn叫实例的方法
    this.fn = () => console.log(456)
  }
  // static关键字可以类的内部声明静态属性
  static age = 20
  static fnc = () => console.log(456)
}

// 添加静态属性和方法(不要new，通过构造函数名访问)
// Test.age = 20
// Test.fnc = () => console.log(456)

const test = new Test()
console.log(test)
console.log('访问静态属性：', Test.age)


/**
 * 静态属性和实例（动态）属性区别？
 * 答：
 * 1. 静态属性不需要new=》类名/函数名访问   =》 场景：Array.isArray | Object.assign
 * 2. 实例属性需要new=>实例访问
 */