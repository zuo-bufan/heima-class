const initialState = {
  // 文章频道列表数据
  channels: [],
  // 文章列表
  page: 1, // 当前页码
  pageSize: 10, // 每页多少条数据
  list: [], // 列表
  total: 0 // 文章数据的总数
}

export const reducerArticle = (state = initialState, action) => {
  if (action.type === 'article/channel') {
    return {
      ...state,
      channels: action.list
    }
  }
  if (action.type === 'article/list') {
    return {
      ...state,
      ...action.datas
    }
  }
  return state
}