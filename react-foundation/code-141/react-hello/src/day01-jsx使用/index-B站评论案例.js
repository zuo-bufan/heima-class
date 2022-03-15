import ReactDOM from 'react-dom'
import './assets/index.css'
// 导入图片
import tx from './assets/images/avatar.png'
// 导入moment
import mt from 'moment'
// B站评论数据
const state = {
  // hot: 热度排序  time: 时间排序
  tabs: [
    {
      id: 1,
      name: '热度',
      type: 'hot'
    },
    {
      id: 2,
      name: '时间',
      type: 'time'
    }
  ],
  // 当前选中的tab的type值
  active: 'time',
  list: [
    {
      id: 1,
      author: '刘德华',
      comment: '给我一杯忘情水',
      time: new Date('2021-10-10 09:09:00'),
      // 1: 点赞 0：无态度 -1:踩
      attitude: 1
    },
    {
      id: 2,
      author: '周杰伦',
      comment: '哎哟，不错哦',
      time: new Date('2021-10-11 09:09:00'),
      // 1: 点赞 0：无态度 -1:踩
      attitude: 0
    },
    {
      id: 3,
      author: '五月天',
      comment: '不打扰，是我的温柔',
      time: new Date('2021-10-11 10:09:00'),
      // 1: 点赞 0：无态度 -1:踩
      attitude: -1
    }
  ]
}
/**
 * 格式化时间方法
 * @param {*} date 
 * @returns 
 */
const formatTime = (date) => {
  return mt(date).format('YYYY年MM月DD日')
}
// B站评论结构
const element = (
  <div className="App">
    <div className="comment-container">
      {/* 评论数 */}
      <div className="comment-head">
        <span>5 评论</span>
      </div>
      {/* 排序 */}
      <div className="tabs-order">
        <ul className="sort-container">
          {/* <li className="on">按热度排序</li>
          <li>按时间排序</li> */}
          {
            state.tabs.map(tab => (
              <li className={state.active === tab.type ? 'on' : ''} key={tab.id}>按{tab.name}排序</li>
            ))
          }
        </ul>
      </div>

      {/* 添加评论 */}
      <div className="comment-send">
        <div className="user-face">
          <img className="user-head" src={tx} alt="" />
        </div>
        <div className="textarea-container">
          <textarea
            cols="80"
            rows="5"
            placeholder="发条友善的评论"
            className="ipt-txt"
          />
          <button className="comment-submit">发表评论</button>
        </div>
        <div className="comment-emoji">
          <i className="face"></i>
          <span className="text">表情</span>
        </div>
      </div>

      {/* 评论列表 */}
      <div className="comment-list">
        {/* <div className="list-item">
          <div className="user-face">
            <img className="user-head" src={tx} alt="" />
          </div>
          <div className="comment">
            <div className="user">zqran</div>
            <p className="text">前排吃瓜</p>
            <div className="info">
              <span className="time">2021-10-08 09:05:00</span>
              <span className="like liked">
                <i className="icon" />
              </span>
              <span className="hate hated">
                <i className="icon" />
              </span>
              <span className="reply btn-hover">删除</span>
            </div>
          </div>
        </div> */}
        {
          state.list.map(item => (
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
                  <span className={item.attitude === 1 ? 'like liked' : 'like'}>
                    <i className="icon" />
                  </span>
                  {/* 踩-不支持 */}
                  <span className={item.attitude === -1 ? 'hate hated' : 'hate'}>
                    <i className="icon" />
                  </span>
                  <span className="reply btn-hover">删除</span>
                </div>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  </div>
)

ReactDOM.render(element, document.getElementById('root'))
