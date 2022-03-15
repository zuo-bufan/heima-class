import { RootThunkAction } from '../../types/store'
import axios from 'axios'
export const GetChannelAction = (): RootThunkAction => {
  return async (dispatch, getState) => {
    const res = await axios.get('http://geek.itheima.net/v1_0/channels')
    console.log(res.data.data.channels)
    dispatch({ type: 'channel/get', list: res.data.data.channels })
  }
}
