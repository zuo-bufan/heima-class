import './index.scss'
import { Consumer } from '../../count-context.js'
import { useEffect, useState } from 'react'

const CartCounter = ({ id, count }) => {
  // 控制 减按钮 是否禁用
  const [isDisabled, setiSDisabled] = useState(false)
  useEffect(() => {
    // console.log('useEffect', count)
    // 小问题：是1的情况无法再次减一
    if (count === 1) {
      setiSDisabled(true)
    } else {
      setiSDisabled(false)
    }
  }, [count])

  return (
    <Consumer>
      {(data) => (
        <div className="my-counter">
          <button
            disabled={isDisabled}
            type="button"
            className="btn btn-light"
            onClick={() => data.changCount(id, count - 1)}>
            -
          </button>
          <input
            type="input"
            className="form-control inp"
            value={count}
            onChange={(e) => data.changCount(id, e.target.value)}
          />
          <button
            type="button"
            className="btn btn-light"
            onClick={() => data.changCount(id, count + 1)}>
            +
          </button>
        </div>
      )}
    </Consumer>
  )
}
export default CartCounter
