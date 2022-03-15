/**
 * 数据劫持方法：Object.defineProperty()基本使用
 * 语法：Object.defineProperty(被劫持对象,被劫持对象的属性, 劫持逻辑)
 * 结论：劫持之后改变了原始对象
 * 注意：
 * 1. value和get/set方法不能同时使用
 * 2. 因为劫持之后改变了原始对象=》读取值和修改值，不能直接使用原始对象做操作=》会进入死循环
 * 
 */
// "use strict"
// 基本用法
const obj = {
  name: '小红'
}

let _age = 10
const _obj = Object.defineProperty(obj, 'age', {
  // value: 100,
  // 读取age属性的值=》会执行get()
  get () {
    console.log('读取age属性的值')
    return _age
    // return obj.age
  },
  // 修改age属性的值=》会执行set()
  set (newVal) {
    console.log('要修改的最新值：', newVal)
    _age = newVal
  }
})

console.log(obj, _obj)

/**
 * 模拟Vue实例对象
 * 需求：把data中的数据设置并劫持到vm实例上
 */
// 代表Vue中设置data数据
const data = {
  msg: 'hi vue'
}
// 代表Vue组件实例
const vm = {}

const _vm = Object.defineProperty(vm, 'msg', {
  // 劫持属性是否可以被枚举（遍历）=》enumerable=》默认值是false
  enumerable: true,
  // 劫持属性是否可以被删除=》默认值false
  configurable: true,
  // value: '123',
  // writable: true,
  // 读取msg的值
  get () {
    console.log('读取msg的值')
    return data.msg
  },
  // 修改msg的值=》数据驱动视图=》vue拦截到咱们修改了data中的数据
  set (newVal) {
    if (data.msg === newVal) return
    console.log('修改msg的值:', newVal)
    data.msg = newVal
    // 视图刷新。。。
  }
})
console.log('组件实例：', vm)
// 遍历vm
for (const key in vm) {
  console.log(key, vm[key])
}

// 删除vm中某个属性
// delete vm.msg
// console.log('删除之后：', vm)


