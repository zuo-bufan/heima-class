import request from '@/utils/request'
// 获取频道
export const getChannelAction = (payload) => {
  return async (dispatch, getState) => {
    const { data: { channels } } = await request.get('/channels')
    console.log('频道列表数据：', channels)
    dispatch({ type: 'article/channel', list: channels })
  }
}

// 根据过滤条件获取文章列表
export const getArticleAction = (payload) => {
  return async (dispatch, getState) => {
    const { data: { page, per_page, results, total_count } } = await request.get('/mp/articles', {
      params: payload
    })
    const datas = {
      page, // 当前页码
      pageSize: per_page, // 每页多少条数据
      list: results.map(item => ({
        ...item,
        // 处理cover字段为图片地址，作为列表的封面图
        cover: item.cover.images[0]
      })), // 列表
      total: total_count // 文章数据的总数
    }
    console.log('根据过滤条件获取文章列表：', datas)
    dispatch({ type: 'article/list', datas })
  }
}

// 删除文章
/**
 * 
 * @param {*} id 文章ID
 * @param {*} filters 过滤条件
 * @returns 
 */
export const delArticleAction = (id, filters) => {
  return async (dispatch, getState) => {
    /**
     * 1. 调用接口删除文章（数据库）
     * 2. 重新获取文章列表数据
     */
    await request.delete(`/mp/articles/${id}`)
    // 怎么刷新文章列表数据？重新分发获取文章列表数据的action
    dispatch(getArticleAction(filters))
  }
}

/**
 * 
 * @param {*} data 新增文章参数
 * @param {*} isDraft 是否是草稿状态：true 草稿 | false 正式文章
 * @param {*} isEdit true 编辑文章  2. false 发布文章
 * @returns 
 */
export const addArticleAction = (data, isDraft, isEdit) => {
  return async (dispatch, getState) => {
    // 区分：1. 发布文章（新增）2. 编辑（更新）
    if (isEdit) {
      //  编辑（更新）
      await request.put(`/mp/articles/${data.id}?draft=${isDraft}`, data)
    } else {
      // 说明：后期区分是否是草稿：1. 发布文章（不是草稿） 2. 存入草稿
      await request.post(`/mp/articles?draft=${isDraft}`, data)
    }

  }
}