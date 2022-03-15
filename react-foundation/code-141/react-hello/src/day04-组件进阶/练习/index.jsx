import React, { Component } from 'react'
import TodoMain from './TodoMain'
import Form from './components/form'
import axios from 'axios'
import './index.css'
export default class App extends Component {
  state = {
    list: [],
    isShowForm: false,
    num: 0,
    singList: [],
  }
  async componentDidMount() {
    this.getList()
  }
  getList = async () => {
    const { data } = await axios.get('http://localhost:8888/list')
    console.log(data)
    this.setState({ list: data })
  }
  // 新增
  add = (e) => {
    // btn
    e.target.style.background = 'red'
    setTimeout(() => {
      e.target.style.background = 'rgb(59, 182, 212)'
    }, 50)
    this.setState({ isShowForm: true })
  }

  // close form
  closeform = () => {
    this.setState({ isShowForm: false })
    this.getList()
  }
  // delById
  delById = async (id) => {
    console.log(id)
    const res = await axios.delete(`http://localhost:8888/list/${id}`)
    if (res.status === 200) {
      this.getList()
      alert('删除成功')
    }
  }
  showFormList = () => {
    if (this.state.isShowForm && this.state.num === 0) {
      return <Form closeform={this.closeform}></Form>
    }
    if (this.state.isShowForm && this.state.num === 2) {
      return <Form list={this.state.singList} closeform={this.closeform}></Form>
    }
  }
  edit = (id, num) => {
    console.log(id, num)
    this.setState({
      isShowForm: true,
      num,
      singList: this.state.list.filter((item) => {
        return item.id === id
      }),
    })
    console.log(this.state.singList)
  }
  render() {
    return (
      <>
        <button className="add" onClick={this.add}>
          新增
        </button>
        <table className="table">
          <thead>
            <tr className="tr">
              <td>author</td>
              <td>time</td>
              <td>comment</td>
              <td>attitude</td>
              <td>操作</td>
            </tr>
          </thead>
          <TodoMain
            edit={this.edit}
            delById={this.delById}
            list={this.state.list}></TodoMain>
        </table>
        {/* {this.state.isShowForm ? (
          <Form closeform={this.closeform}></Form>
        ) : null} */}
        {this.showFormList()}
      </>
    )
  }
}
