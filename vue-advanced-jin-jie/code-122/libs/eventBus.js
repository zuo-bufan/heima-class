/**
 * 事件总线实现
 */
//  步骤：
//  1. 创建EventEmitter构造函数
//  2. 注册原型方法\$on（订阅事件）=>多个 和\$emit（发布事件）

// 步骤：
// 1. 在EventEmitter中初始化实例属性subs，存储事件队列=》设计数据结构
// 2. 完善原型$on方法=》向subs中添加订阅事件

// 功能的主体/入口
function EventEmitter () {
  //  初始化=> 事件队列=》设计数据结构=》{eventName1:[cb1,cb2],eventName2:[cb1,cb2]}
  this.subs = {}
}

// 定义功能
/**
 * 向事件队列中存储自定义事件和回调函数
 * @param {*} eventName 
 * @param {*} callback 
 */
EventEmitter.prototype.$on = function (eventName, callback) {
  /**
   * 存储的思路：
   * * 判断当前订阅的自定义事件是否在队列中已经存在
   *   1. 不存在=》队列新增属性名（事件名），初始化空数组，然后存储当前回调函数
   *   2. 存在 =》把事件回调函数push到数组中
   */
  if (!this.subs[eventName]) {
    this.subs[eventName] = [callback]
    // this.subs[eventName].push(callback)
  } else {
    this.subs[eventName].push(callback)
  }
}
// 从队列中取出自定义事件执行
/**
 * 
 * @param {*} eventName 自定义事件名字
 * ...data 接收剩余参数
 */
EventEmitter.prototype.$emit = function (eventName, ...data) {
  /**
   * 1. 从事件队列中获取对应eventName的事件回调函数
   * 2. 遍历执行
   */
  console.log('EventEmitter：', this)
  this.subs[eventName] && this.subs[eventName].forEach((cb) => {
    // cb(...data)
    cb.apply(this, data)
  })
}

// // 测试eventBus
// const eventBus = new EventEmitter()

// // 订阅事件=> 箭头函数忠贞不渝（不能被改变this执行）=》this指向由外边第一层
// eventBus.$on('e1', () => {
//   console.log(this, 1)
// })

// eventBus.$on('e1', function () {
//   console.log(this, 10000)
// })


// console.log('外边：', this)
// eventBus.$on('e2', (d1, d2, d3) => {
//   console.log(this, d1, d2, d3)
// })



// // eventBus.$emit('e2', 123, {}, [1])

// console.log(eventBus)




