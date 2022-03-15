import axios from 'axios'

export function getChannelAction () {
  // dispatch分发action=》命令reducer修改数据
  return async (dispatch) => {
    const { data } = await axios.get('http://geek.itheima.net/v1_0/channels')
    // console.log('1. 频道数据：', data.data.channels)
    dispatch({
      type: 'channel/get',
      list: data.data.channels
    })
  }
}

/**
 * 
 * @param {*} id 频道ID
 * @returns 
 */
export function changeActiveAction (id) {
  return {
    type: 'channel/active',
    id
  }
}