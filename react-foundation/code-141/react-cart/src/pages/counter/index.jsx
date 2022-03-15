import './index.scss'
import { useContext } from 'react'
import { CountContext } from '../../counter-ctx'
export const Counter = ({ goods_count, id }) => {
  const { changeCount } = useContext(CountContext)
  return (
    <div className="my-counter">
      <button
        type="button"
        className="btn btn-light"
        disabled={goods_count === 1}
        onClick={() => changeCount(id, goods_count - 1)}>
        -
      </button>
      <input
        type="input"
        className="form-control inp"
        value={goods_count}
        onChange={(e) => changeCount(id, +e.target.value)}
      />
      <button
        type="button"
        className="btn btn-light"
        disabled={goods_count === 8}
        onClick={() => changeCount(id, goods_count + 1)}>
        +
      </button>
    </div>
  )
}
