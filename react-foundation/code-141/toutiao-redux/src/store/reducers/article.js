// 默认值：
// 某个频道的文章列表数据
const initialState = []

export const articles = (state = initialState, action) => {
  if (action.type === 'articles/get') {
    return action.list
  }
  return state
}
