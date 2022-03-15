import React, { Component } from 'react'
import '../../assets/index.css'

// 导入子组件
import Tabs from './components/tabs'
import List from './components/list'
import Form from './components/form'
class App extends Component {
  // B站评论数据
  state = {
    // 新增评论输入
    // content: '',
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
   * list 评论列表数据持久化：
   * 1. list列表数据发生变化=》就执行本地存储 =》componentDidUpdate
   * 2. 从本地获取存储的数据，赋值给list => componentDidMount
   * @param {*} type
   */

  componentDidMount() {
    const list = JSON.parse(localStorage.getItem('bp-141')) || []
    this.setState({
      list,
    })
  }

  componentDidUpdate() {
    console.log('list数据变化了：', this.state.list)
    // ist数据变化了 => 存到本地
    localStorage.setItem('bp-141', JSON.stringify(this.state.list))
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

  addList = (content) => {
    this.setState({
      list: [
        // 新增数据
        {
          id: Date.now(),
          author: '匿名',
          comment: content,
          time: new Date(),
          // 1: 点赞 0：无态度 -1:踩
          attitude: 0,
        },
        // 之前的数据
        ...this.state.list,
      ],
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
            <span>{this.state.list.length} 评论</span>
          </div>
          {/* 排序 */}
          <Tabs
            tabs={this.state.tabs}
            active={this.state.active}
            changeTab={this.changeTab}
          />

          {/* 添加评论 */}
          <Form addList={this.addList} />

          {/* 评论列表 */}
          <List
            list={this.state.list}
            changeAttitude={this.changeAttitude}
            delList={this.delList}
          />
        </div>
      </div>
    )
  }
}

export default App
