import axios from 'axios'

export function getArticleAction (id) {
  // dispatch分发action=》命令reducer修改数据
  return async (dispatch) => {
    const { data } = await axios.get(
      `http://geek.itheima.net/v1_0/articles?channel_id=${id}&timestamp=${Date.now()}`
    )
    console.log('文章列表：', data.data.results)
    dispatch({
      type: 'articles/get',
      list: data.data.results
    })
  }
}