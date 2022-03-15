import { ThunkAction } from 'redux-thunk'
import store from '../store'
import { Channel } from './data'
// 1. 获取 redux 状态的类型：
export type RootState = ReturnType<typeof store.getState>
// 2. 所有 action 的类型集合：
type RootAction = ChannelAction
// 3. 自定义 thunk action 的类型：
export type RootThunkAction = ThunkAction<void, RootState, unknown, RootAction>

// 频道
export type ChannelAction =
  | {
      type: 'channel/get'
      list: Channel
    }
  | {
      type: 'channel/toggle'
      active: number
    }
