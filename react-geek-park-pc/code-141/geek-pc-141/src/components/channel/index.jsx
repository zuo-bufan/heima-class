import { getChannelAction } from '@/store/actions/article'
import { Select } from 'antd'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'

const { Option } = Select
// 父传子需要接收：value(值) + onChange（事件回调）=》目的：让Channel组件变成受控组件（Form.Item控制）
function Channel({ value, onChange, width = 400 }) {
  const dispatch = useDispatch()
  // 2. 从redux中获取频道数据
  const { channels } = useSelector((state) => state.article)
  useEffect(() => {
    // 1. 从后台获取频道数据，存到redux
    dispatch(getChannelAction())
  }, [dispatch])
  return (
    <Select
      value={value}
      onChange={onChange}
      placeholder="请选择文章频道"
      style={{ width }}>
      {/* <Option value="jack">Jack</Option>
    <Option value="lucy">Lucy</Option> */}
      {/* value属性是选择的时候存到表单中的值 */}
      {channels.map((item) => (
        <Option key={item.id} value={item.id}>
          {item.name}
        </Option>
      ))}
    </Select>
  )
}

export default Channel
