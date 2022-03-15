const initialState = 'all' // all(所有) unDone(未完成) done(完成)

export const reduerFilter = (state = initialState, action) => {
  if (action.type === 'todo/filter') {
    // 返回最新修改后的值
    return action.filter
  }
  return state
}