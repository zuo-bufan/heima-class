import React, { Component } from 'react'

// 导入子组件
import Order from './components/child'

import './order.css'

// 父组件（动态）
class App extends Component {
  state = {
    // 父组件列表数据
    list: [
      {
        id: 1,
        name: '超级好吃的棒棒糖',
        price: 18.8,
        info: '开业大酬宾，全场8折',
      },
      {
        id: 2,
        name: '超级好吃的大鸡腿',
        price: 34.2,
        info: '开业大酬宾，全场8折',
      },
      {
        id: 3,
        name: '超级无敌的冰激凌',
        price: 14.2,
        info: '开业大酬宾，全场8折',
      },
    ],
  }

  // 父组件定义修改价格的方法=>提供给子组件使用
  /**
   *
   * @param {*} id 修改数据的ID
   * @param {*} price 要砍的价格
   */
  changePrice = (id, price) => {
    this.setState({
      list: this.state.list.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            price: item.price - price,
          }
        } else {
          return item
        }
      }),
    })
  }
  render() {
    return (
      <div className="parent">
        {/* <Order /> */}
        {this.state.list.map((item) => (
          <Order key={item.id} item={item} changePrice={this.changePrice} />
        ))}
      </div>
    )
  }
}

export default App
