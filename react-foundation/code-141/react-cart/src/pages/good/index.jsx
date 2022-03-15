import './index.scss'
import { Counter } from '../counter'
export const Good = ({
  goods_count,
  goods_img,
  goods_name,
  goods_price,
  goods_state,
  id,
  changeGoodState,
}) => {
  return (
    <div className="my-goods-item">
      <div className="left">
        <div className="custom-control custom-checkbox">
          <input
            type="checkbox"
            className="custom-control-input"
            id={id}
            checked={goods_state}
            onChange={(e) => changeGoodState(id, e.target.checked)}
          />
          <label className="custom-control-label" htmlFor={id}>
            <img src={goods_img} alt="" />
          </label>
        </div>
      </div>
      <div className="right">
        <div className="top">{goods_name}</div>
        <div className="bottom">
          <span className="price">¥ {goods_price}</span>
          <span>
            <Counter goods_count={goods_count} id={id} />
          </span>
        </div>
      </div>
    </div>
  )
}
