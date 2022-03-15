import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import avatar from '../assets/back.jpg'
import { getArticleAction } from '../store/actions/article'

export const ArticleList = () => {
  /**
   * 需求：根据频道ID获取频道下新闻列表数据，存到redux
   * 1. 页面默认加载，根据activeId获取当前选中频道的新闻
   * 2. 频道切换的时候，根据activeId获取当前选中频道的新闻
   */
  const dispatch = useDispatch()
  // 获取当前选中频道ID
  const activeId = useSelector((store) => store.channels.activeId)

  useEffect(() => {
    // activeId变化，会重新执行
    console.log('activeId变化，会重新执行')
    dispatch(getArticleAction(activeId))
  }, [dispatch, activeId])

  // 获取文章列表数据
  const list = useSelector((store) => store.articles)

  // 优化：抽离列表渲染
  const renderList = () => {
    return list.map((item) => (
      <div className="article_item" key={item.art_id}>
        <h3>{item.title}</h3>
        <div className="img_box">
          {/* 如果cover的type值是0，images没有图片，展示默认图片avatar */}
          <img
            src={item.cover.type === 0 ? avatar : item.cover.images[0]}
            className="w100"
            alt=""
          />
        </div>
        <div className="info_box">
          <span>{item.aut_name}</span>
          <span>{item.comm_count}评论</span>
          <span>{item.pubdate}</span>
        </div>
      </div>
    ))
  }
  return <div className="list">{renderList()}</div>
}
