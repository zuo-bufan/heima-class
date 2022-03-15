import { createStore } from 'redux'
// import { reducerCount } from './reducers/count'
import { rootReducer } from './reducers'
/**
 * redux作用：全局状态共享
 * 3个核心：
 * 1. action（命令）
 * 2. reducer（执行命令）
 * 3. store（发号命令）=》大脑中枢
 * 
 */


// 核心3：store=>整合 action 和 reducer
// 创建store实例
const store = createStore(rootReducer)

// 导出store(集成到react项目)
export default store


// 测试代码
// console.log('store实例：', store)
// console.log('默认值：', store.getState())
// // 监控状态变换
// // 返回值可以取消监控=》un是个函数
// const un = store.subscribe(() => {
//   console.log('状态变化了：', store.getState())

// })

// // un()
// // 执行action命令=》调用reducer函数，修改数据
// // store.dispatch({ type: 'add' })
// store.dispatch(Add(10))
// store.dispatch(Add(10))
// store.dispatch(Sub())

// console.log('修改之后：', store.getState())

