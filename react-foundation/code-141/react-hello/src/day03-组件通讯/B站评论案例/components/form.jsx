import { Component } from 'react'
import tx from '../../../assets/images/avatar.png'

class Form extends Component {
  state = {
    // 新增评论输入
    content: '',
  }

  // 存储输入值
  changeContent = (e) => {
    this.setState({
      content: e.target.value,
    })
  }

  // 新增评论
  add = () => {
    if (!this.state.content.trim()) {
      this.setState({
        content: '',
      })
      return alert('评论内容不能为空！')
    }
    // 调用父组件方法新增（子传父）
    this.props.addList(this.state.content)
    // 清空输入框值
    this.setState({
      content: '',
    })
  }

  render() {
    return (
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
          <button onClick={this.add} className="comment-submit">
            发表评论
          </button>
        </div>
        <div className="comment-emoji">
          <i className="face"></i>
          <span className="text">表情</span>
        </div>
      </div>
    )
  }
}

export default Form
