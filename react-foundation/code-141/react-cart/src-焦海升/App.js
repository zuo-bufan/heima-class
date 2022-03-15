import './App.scss'

// 导入子组件
import Header from './pages/header'
import Good from './pages/good'
import Footer from './pages/footer'

// 导入 request
import request from './utils/request.js'

// 导入兄弟组件共享数据
import { Provider } from './count-context.js'
// import { CountContext } from './count-context'

import { useEffect, useState } from 'react'

export default function App () {

  const [list, setList] = useState([])
  // 获取列表数据
  const getList = async () => {
    const { data } = await request.get('/list')
    console.log(data)
    setList(data)
  }
  useEffect(() => {
    // 调用接口
    getList()
  }, [])
  // 修改单个商品的状态
  const changeGoodsState = async (id, goods_state) => {
    setList(
      list.map(item => {
        if (item.id === id) {
          return { ...item, goods_state }
        } else {
          return item
        }
      })
    )
    // 更新单选状态
    await request.patch(`/list/${id}`, { goods_state })
  }

  const [checkAll, setCheckAll] = useState(false)
  // 判断页面一加载是否全选中
  useEffect(() => {
    setCheckAll(list.every(item => item.goods_state))
  }, [list])
  // 全选按钮
  const changeCheckAll = (checkAll) => {
    setCheckAll(checkAll)
    // 设置本地全选选中
    setList(
      list.map(item => {
        return { ...item, goods_state: checkAll }
      })
    )
    // 设置后台接口全选选中
    list.forEach(item => request.patch(`/list/${item.id}`, { goods_state: checkAll }))
  }

  // 选中数量和选中的价格
  const totalCount = list.reduce((acc, item) => {
    if (item.goods_state) {
      return acc + item.goods_count
    }
    return acc
  }, 0)
  const totalPrice = list.reduce((acc, item) => {
    if (item.goods_state) {
      return acc + item.goods_count * item.goods_price
    }
    return acc
  }, 0)

  // 单个商品数量修改
  const changCount = async (id, goods_count) => {
    console.log(id, goods_count)
    setList(
      list.map(item => {
        if (item.id === id) {
          return { ...item, goods_count }
        } else {
          return item
        }
      })
    )
    await request.patch(`/list/${id}`, { goods_count })
  }

  return (
    <div className="app">
      <Provider value={{ changCount }}>
        {/* 标题 */}
        <Header></Header>

        {/* 商品列表项 */}
        <Good list={list} changeGoodsState={changeGoodsState}></Good>

        {/* 底部 */}
        <Footer checkAll={checkAll} changeCheckAll={changeCheckAll} totalCount={totalCount} totalPrice={totalPrice}></Footer>
      </Provider>
    </div>
  )
}
