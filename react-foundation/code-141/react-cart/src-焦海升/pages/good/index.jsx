import './index.scss'
// 导入子组件
import CartCounter from '../CartCounter'

const Footer = ({ list, changeGoodsState }) => {
  // 修改商品选中状态
  const changeChecked = (id, goods_state) => {
    changeGoodsState(id, !goods_state)
    console.log(id, !goods_state)
  }

  return list.map((item) => (
    <div className="my-goods-item" key={item.id}>
      <div className="left">
        <div className="custom-control custom-checkbox">
          <input type="checkbox" className="custom-control-input" id={`input${item.id}`} checked={item.goods_state} onChange={() => changeChecked(item.id, item.goods_state)} />
          <label className="custom-control-label" htmlFor={`input${item.id}`}>
            <img src={item.goods_img} alt="" />
          </label>
        </div>
      </div>
      <div className="right">
        <div className="top">{item.goods_name}</div>
        <div className="bottom">
          <span className="price">¥ {item.goods_price}</span>
          {/* <span></span> */}
          <CartCounter id={item.id} count={item.goods_count}></CartCounter>
        </div>
      </div>
    </div>
  ))
}

export default Footer
