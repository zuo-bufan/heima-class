// 核心1：命令=>指定怎么修改数据
// action动作1：执行加1
/**
 * 
 * @param {*} payload 载荷=》接收额外的参数
 * @returns 
 */
export function Add (payload) {
  // 返回action动作
  return {
    type: 'add',
    payload
  }
}

// action动作2：执行减1
export function Sub (payload) {
  return {
    type: 'sub',
    payload: payload
  }
}