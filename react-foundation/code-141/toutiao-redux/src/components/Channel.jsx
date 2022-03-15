import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getChannelAction, changeActiveAction } from '../store/actions/channel'
import classnames from 'classnames'

export const Channel = () => {
  /**
   * 需求：获取后台频道数据存储到redux中
   * 存储redux数据：页面中dispatch=>传入action=>reducer存储频道数据
   * 1. action函数（异步）
   * 2. 根据action函数的命令，执行reducer存储频道数据
   */
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getChannelAction())
  }, [dispatch])

  // 获取redux中频道数据
  const { list, activeId } = useSelector((store) => store.channels)

  // 点击切换频道高亮
  const changeActive = (id) => {
    // console.log(id)
    // 把ID存到redux的activeId中
    dispatch(changeActiveAction(id))
  }
  return (
    <ul className="category">
      {list.map((item) => (
        <li
          key={item.id}
          onClick={() => changeActive(item.id)}
          // className={activeId === item.id ? 'select' : ''}
          className={classnames({
            select: activeId === item.id,
            test: true,
            abc: false,
          })}>
          {item.name}
        </li>
      ))}
    </ul>
  )
}
