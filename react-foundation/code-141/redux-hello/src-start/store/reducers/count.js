// 核心2：执行命令=》根据action命令，修改数据(遵循react状态不可变)
// 设置store存储状态的默认值
const initialState = {
  count: 0
}
/**
 * 
 * @param {*} state 上一次最新的状态
 * @param {*} action:{type:'命令1',payload} 命令
 * @returns 返回最新修改的状态数据
 */
export const reducerCount = (state = initialState, action) => {
  switch (action.type) {
    case 'add':
      return {
        ...state,
        count: state.count + action.payload
      }
    case 'sub':
      return {
        ...state,
        count: state.count - 1
      }

    default:
      return state
  }
}

