// 简化写法：
// store 表示：redux 的 store
// next 表示：下一个中间件，如果只使用一个中间，那么 next 就是 store.dispatch（redux 自己的 dispatch 函数）
// action 表示：要分发的动作
const logger = store => next => action => {
  // 写中间件的代码
  console.log('修改之前:', store.getState()) // 更新前的状态
  // 记录日志代码
  console.log('修改中：', action)
  // next 表示原始的 dispatch
  // 也就是：logger中间件包装了 store.dispatch
  let result = next(action)
  // 上面 next 代码执行后，redux 状态就已经更新了，所以，再 getState() 拿到的就是更新后的最新状态值
  // 记录日志代码
  console.log('修改后：', store.getState()) // 更新后的状态
  return result
}

export default logger