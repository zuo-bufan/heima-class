# vue响应式原理背后技术要点总结

架构思想：基于MVVM=》model(数据)+view(视图)+viewmodel(vue组件实例)

MVVM架构的核心=》`数据驱动视图`

> 数据驱动视图背后实现的技术要点

例如：this.msg = 'newVal' =》视图更新 =》vue怎么知道开发者修改了数据？=》劫持

1. 使用Object.defineProperty()数据的拦截/劫持

```js
const data = {msg:''}
const vm = {}
Object.defineProperty(vm, 'msg', {
  // 读取数据
  get() {
    return data.msg
   // return vm.msg // 不能这么写，会进入死循环 
  },
  // 修改数据
  set(newVal) {
    if(newVal === data.msg) return
    data.msg = newVal
  }
})
```

2. 发布订阅（事件总线eventBus）

核心用法：订阅事件\$on('事件名字', '回调函数') （多个）和 发布事件\$emit('事件名字','传递数据')（一次）

实现：

```js
// 1. 设计事件队列 =》{eventName1:['fn1','fn2'...],eventName2:['fn1','fn2'...]}
```



> this用法总结=》函数体内=》**this指向**

1. 调用一个函数 => 它内部的this由**调用者决定**
2. 箭头函数=》**外边第一层决定**它的this=》this能被改变吗=》**不能**
3. call/apply/bind改变函数this
   * call/apply用法类似，第二个参数类型不一样
   * bind不能修改调用函数的this=>返回一个修改完this指向的新函数

4. new Fn()=>执行函数，创建Fn实例的this

* 异步编程

使用技术：Promise结合async、await使用

1. 使用Promise封装方法

   ```JS
   var fn = () => {
     return new Promise((r) => {
   
       setTimeout(() => {
         console.log('resolve')
   
         r({a:1})
   
       }, 3000)
   
     })
   
   }
   ```

2. 使用async封装

结论：

* return的结果 === 相当于new Promise中resolve(结果)
* 抛出错误 ===  相当于new Promise中reject(错误)

```JS
var fn1 = async (type)=>{
   if(type) {
    return 199
  } else {
    throw new Error('报错了')
  }
}
```

