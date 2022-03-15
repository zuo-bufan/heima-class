/**
 * 面向对象编程
 * es5 构造函数（类）创建和继承
 */

// 创建=》父类
function Vue (name) {
  // 实例上的属性和方法
  this.name = name
  this.fn = () => {
    console.log(this)
  }
}

// 定义静态属性和方法
Vue.abc = 123
Vue.filter = function () {
  console.log(this)
}

Vue.nextTick = () => {
  console.log(this)
}

// 原型链上的属性和方法
Vue.prototype.getName = function () {
  console.log(this.name)
}


// 使用
const vm = new Vue('hi')
console.log(vm)

// 继承
/**
 * Child继承Vue：
 * 1. 继承实例上的属性和方法
 * 2. 继承原型链上的属性和方法
 */
function Child (name) {
  // 调用父类构造函数=》同时指定this指向为Child
  // call和apply区别：第二个参数call传单个/apply传数据
  Vue.call(this, name)
}

// Child.prototype = new Vue('小红')
Child.prototype = Object.create(Vue.prototype, {
  constructor: {
    value: Child
  }
})

// 测试继承
const _child = new Child('小刚')
console.log(_child)

// es6创建类和集成=> 语法糖=》背后还是构造函数
class Parent {
  static fc () {

  }

  fn () {

  }
}

const _par = new Parent()
console.log(_par)

class Chi extends Parent { }

