import React, { Component } from 'react'
import '../../assets/index.css'
// 导入图片
import tx from '../../assets/images/avatar.png'
// 导入moment
import mt from 'moment'
class App extends Component {
  // B站评论数据
  state = {
    // 新增评论输入
    content: '',
    // hot: 热度排序  time: 时间排序
    tabs: [
      {
        id: 1,
        name: '热度',
        type: 'hot',
      },
      {
        id: 2,
        name: '时间',
        type: 'time',
      },
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
        attitude: 1,
      },
      {
        id: 2,
        author: '周杰伦',
        comment: '哎哟，不错哦',
        time: new Date('2021-10-11 09:09:00'),
        // 1: 点赞 0：无态度 -1:踩
        attitude: 0,
      },
      {
        id: 3,
        author: '五月天',
        comment: '不打扰，是我的温柔',
        time: new Date('2021-10-11 10:09:00'),
        // 1: 点赞 0：无态度 -1:踩
        attitude: -1,
      },
    ],
  }

  /**
   * 格式化时间方法
   * @param {*} date
   * @returns
   */
  formatTime = (date) => {
    return mt(date).format('YYYY年MM月DD日')
  }

  // 1. 点击切换tab栏高亮效果
  // type 当前点击tab栏的type值
  changeTab = (type) => {
    // console.log(type)
    this.setState({
      active: type,
    })
  }

  // 2. 点击删除评论
  delList = (id) => {
    // 说明：不能用splice方法删除=》因为splice方法会直接修改list=》react数据不可变
    this.setState({
      list: this.state.list.filter((item) => item.id !== id),
    })
  }

  /**
   * 3. 新增一条评论
   *  思路：
   * 1. 获取输入框的值=》受控组件
   * 2. 根据输入的值向list列表新增评论
   */

  // 存储输入值
  changeContent = (e) => {
    this.setState({
      content: e.target.value,
    })
  }

  addList = () => {
    if (!this.state.content.trim()) {
      return alert('评论内容不能为空！')
    }
    this.setState({
      list: [
        // 新增数据
        {
          id: Date.now(),
          author: '匿名',
          comment: this.state.content,
          time: new Date(),
          // 1: 点赞 0：无态度 -1:踩
          attitude: 0,
        },
        // 之前的数据
        ...this.state.list,
      ],
      // 清空输入框值
      content: '',
    })
  }

  // 4. 点赞或踩处理
  /**
   *
   * @param {*} id 当前点击评论ID
   * @param {*} attitude 当前点击评论的状态：1: 点赞 0：无态度 -1:踩（最新）
   */
  changeAttitude = (id, attitude) => {
    this.setState({
      list: this.state.list.map((item) => {
        if (item.id === id) {
          // 当前需要修改的评论状态
          return {
            ...item,
            attitude,
          }
        } else {
          // 不需要修改，直接返回给新数据
          return item
        }
      }),
    })
  }

  render() {
    return (
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
              {this.state.tabs.map((tab) => (
                <li
                  className={this.state.active === tab.type ? 'on' : ''}
                  key={tab.id}
                  // react事件传值口诀：函数套函数=> 是在里边传值
                  onClick={() => this.changeTab(tab.type)}>
                  按{tab.name}排序
                </li>
              ))}
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
                value={this.state.content}
                onChange={this.changeContent}
                placeholder="发条友善的评论"
                className="ipt-txt"
              />
              <button onClick={this.addList} className="comment-submit">
                发表评论
              </button>
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
            {this.state.list.map((item) => (
              <div className="list-item" key={item.id}>
                {/* 评论人头像 */}
                <div className="user-face">
                  <img className="user-head" src={tx} alt="" />
                </div>
                <div className="comment">
                  <div className="user">{item.author}</div>
                  <p className="text">{item.comment}</p>
                  <div className="info">
                    <span className="time">{this.formatTime(item.time)}</span>
                    {/* 点赞-支持 */}
                    <span
                      className={item.attitude === 1 ? 'like liked' : 'like'}
                      // item.attitude === 1 ? 0 : 1
                      // 说明：1. 如果是1说明是点赞，再次点击取消0 2. 相反，赋值1就是点赞
                      onClick={() =>
                        this.changeAttitude(
                          item.id,
                          item.attitude === 1 ? 0 : 1
                        )
                      }>
                      <i className="icon" />
                    </span>
                    {/* 踩-不支持 */}
                    <span
                      className={item.attitude === -1 ? 'hate hated' : 'hate'}
                      onClick={() =>
                        this.changeAttitude(
                          item.id,
                          item.attitude === -1 ? 0 : -1
                        )
                      }>
                      <i className="icon" />
                    </span>
                    <span
                      onClick={() => this.delList(item.id)}
                      className="reply btn-hover">
                      删除
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }
}

export default App
