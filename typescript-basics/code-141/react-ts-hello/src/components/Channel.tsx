import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { GetChannelAction } from '../store/actions/channel'
import { RootState } from '../types/store'

export const Channel = () => {
  // 1. 获取频道数据
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(GetChannelAction())
  }, [dispatch])
  // 2. 渲染频道数据
  const { channel, active } = useSelector(
    (state: RootState) => state.channelReducer
  )

  return (
    <ul className="category">
      {channel.map((item) => (
        <li className={active === item.id ? 'select' : ''} key={item.id}>
          {item.name}
        </li>
      ))}
    </ul>
  )
}
