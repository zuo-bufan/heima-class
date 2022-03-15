/**
 * actions函数（命令）
 */

// 删除待办事项的命令
/**
 * 
 * @param {*} id 要删除任务的ID
 * @returns 
 */
export function delTodoAction (id) {
  console.log('action:', id)
  // 谁执行返回的命令？去修改数据
  return {
    type: 'todo/del',
    id
  }
}


/**
 * 
 * @param {*} id 单选任务的ID
 * @returns 
 */
export function toggleAction (id) {
  return {
    type: 'todo/toggle',
    id
  }
}

/**
 * 
 * @param {*} 
 * @returns name 新增任务名
 */
export function addAction (name) {
  return {
    type: 'todo/add',
    name
  }
}


/**
 * 
 * @param {*} 
 * @returns isAll 全选框是否选中
 */
export function toggleAllAction (isAll) {
  return {
    type: 'todo/toggleall',
    isAll
  }
}

/**
 * 
 * @returns 删除已完成(同步)
 */
export function delDoneAction () {
  return {
    type: 'todo/deldone'

  }
}
/**
 * 
 * @param {*} payload 额外参数
 * @returns 删除已完成(异步)
 */
export function delDoneAsyncAction (payload) {
  /**
   * dispatch方法 分发action命令reducer修改store数据
   * getState方法 获取store中数据
   */
  return (dispatch, getState) => {
    // 模拟发请求，3s之后成功=》正常开发：
    // 1. 调用删除已完成后台接口（数据库修改） 2. 等到接口调用成功，修改store数据=》dispatch修改
    setTimeout(() => {
      console.log('store数据：', getState())
      dispatch({
        type: 'todo/deldone'
      })
    }, 3000)
  }
}