import ReactDOM from 'react-dom'
import './index.css'

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
  active: 'hot',
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
          <li className="on">按热度排序</li>
          <li>按时间排序</li>
        </ul>
      </div>

      {/* 添加评论 */}
      <div className="comment-send">
        <div className="user-face">
          <img className="user-head" src="./images/avatar.png" alt="" />
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
        <div className="list-item">
          <div className="user-face">
            <img className="user-head" src="./images/avatar.png" alt="" />
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
        </div>
      </div>
    </div>
  </div>
)

ReactDOM.render(element, document.getElementById('root'))
