import { Channel } from '../../types/data'
import { ChannelAction } from '../../types/store'

type Init = {
  channel: Channel // 频道列表
  active: number // 当前点击频道的ID
}
const initialState: Init = {
  channel: [],
  active: 0,
}

export const channelReducer = (state = initialState, action: ChannelAction) => {
  if (action.type === 'channel/get') {
    return {
      ...state,
      channel: action.list,
    }
  }
  return state
}
