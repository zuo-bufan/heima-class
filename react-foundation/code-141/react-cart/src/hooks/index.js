import { useEffect, useState } from 'react'
import http from '../utils/request'

// 定义自定义hook
export const useList = () => {
  // useState的默认值，只会在函数组件第一次执行时生效
  // 1. 商品列表数据获取和渲染
  const [goodsList, setGoodsList] = useState([])
  // 全选状态
  const [checkAll, setCheckAll] = useState(false)

  // 组件创建之后执行（一次）=》componetDidMount
  useEffect(() => {
    // 第一次加载页面，获取所有商品数据
    const loadData = async () => {
      const res = await http.get('/list')
      setGoodsList(res.data)
      // 判断初始是否全选
      setCheckAll(res.data.every((item) => item.goods_state))
    }
    // 调用一次
    loadData()
  }, [])
  return { goodsList, setGoodsList, checkAll, setCheckAll }
}