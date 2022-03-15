import Head from './pages/head'
import { Good } from './pages/good'
import { Foot } from './pages/foot'
import './App.scss'
// context对象
import { CountContext } from './counter-ctx'

import Child from './components/child'
// 导入自定义hooks
import { useList } from './hooks'

import http from './utils/request'

export default function App() {
  console.log(123)
  const { goodsList, setGoodsList, checkAll, setCheckAll } = useList()
  // 3. 商品全选
  const changeCheckAll = (checkAll) => {
    setCheckAll(checkAll)
    // 本地数据状态修改
    setGoodsList(
      goodsList.map((item) => {
        return {
          ...item,
          goods_state: checkAll,
        }
      })
    )
    // 接口数据状态修改
    goodsList.forEach((item) =>
      http.patch(`/list/${item.id}`, {
        goods_state: checkAll,
      })
    )
  }

  // 2. 商品单选
  const changeGoodState = async (id, goods_state) => {
    /**
     * react 思想：状态不可变 =》不可以直接修改（创建一个新的）
     * vue 思想：状态可变 =》直接可以改data数据
     */
    const nl = goodsList.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          goods_state,
        }
      }
      return item
    })
    setGoodsList(nl)
    // 更新全选状态
    setCheckAll(nl.every((item) => item.goods_state))
    // 更新后台
    await http.patch(`/list/${id}`, {
      goods_state,
    })
  }

  // 4. 计算数量和选中商品总价
  const totalCount = goodsList.reduce((count, item) => {
    if (item.goods_state) {
      return count + item.goods_count
    }
    return count
  }, 0)

  const totalPrice = goodsList.reduce((count, item) => {
    if (item.goods_state) {
      return count + item.goods_count * item.goods_price
    }
    return count
  }, 0)

  // 5. 修改商品数量（通过context）
  const changeCount = async (id, goods_count) => {
    setGoodsList(
      goodsList.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            goods_count,
          }
        }
        return item
      })
    )

    await http.patch(`/list/${id}`, {
      goods_count,
    })
  }

  return (
    <CountContext.Provider value={{ changeCount }}>
      <Child />
      <div className="app">
        {/* 标题 */}
        {/* <div className="my-header">购物车</div> */}
        <Head />

        {/* 商品列表项 */}
        {goodsList.map((item) => (
          <Good key={item.id} {...item} changeGoodState={changeGoodState} />
        ))}

        {/* 底部 */}
        <Foot
          checkAll={checkAll}
          changeCheckAll={changeCheckAll}
          totalCount={totalCount}
          totalPrice={totalPrice}
        />
      </div>
    </CountContext.Provider>
  )
}
