// 导入图片
import tx from '../../../assets/images/avatar.png'
// 导入moment
import mt from 'moment'
function List({ list, changeAttitude, delList }) {
  /**
   * 格式化时间方法
   * @param {*} date
   * @returns
   */
  const formatTime = (date) => {
    return mt(date).format('YYYY年MM月DD日')
  }

  return (
    <div className="comment-list">
      {list.map((item) => (
        <div className="list-item" key={item.id}>
          {/* 评论人头像 */}
          <div className="user-face">
            <img className="user-head" src={tx} alt="" />
          </div>
          <div className="comment">
            <div className="user">{item.author}</div>
            <p className="text">{item.comment}</p>
            <div className="info">
              <span className="time">{formatTime(item.time)}</span>
              {/* 点赞-支持 */}
              <span
                className={item.attitude === 1 ? 'like liked' : 'like'}
                // item.attitude === 1 ? 0 : 1
                // 说明：1. 如果是1说明是点赞，再次点击取消0 2. 相反，赋值1就是点赞
                onClick={() =>
                  changeAttitude(item.id, item.attitude === 1 ? 0 : 1)
                }>
                <i className="icon" />
              </span>
              {/* 踩-不支持 */}
              <span
                className={item.attitude === -1 ? 'hate hated' : 'hate'}
                onClick={() =>
                  changeAttitude(item.id, item.attitude === -1 ? 0 : -1)
                }>
                <i className="icon" />
              </span>
              <span
                onClick={() => delList(item.id)}
                className="reply btn-hover">
                删除
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default List
