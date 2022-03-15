import { Add, Del, RootThunkAction } from '../../types'

/**
 * 添加待办事项
 * @param payload 任务名
 * @returns
 */
export const AddAction = (name: string): Add => ({ type: 'add/todo', name })

// export const DelAction = (id: number): Del => ({ type: 'del/todo', id })

export const DelAction = (id: number): RootThunkAction => {
  return async (dispatch) => {
    /**
     * 1. 调用接口删除
     * 2. 本地store数据删除
     */
    dispatch({ type: 'del/todo', id })
  }
}
