// 默认值：
const initialState = {
  // 频道列表
  list: [],
  // 频道当前选中ID
  activeId: 0
}

export const channels = (state = initialState, action) => {
  // console.log('2. 存储频道数据：', action)
  if (action.type === 'channel/get') {
    return {
      ...state,
      list: action.list
    }
  }
  if (action.type === 'channel/active') {
    return {
      ...state,
      activeId: action.id
    }
  }
  return state
}