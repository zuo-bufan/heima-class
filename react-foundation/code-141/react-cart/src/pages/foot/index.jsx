import './index.scss'
export const Foot = ({ checkAll, changeCheckAll, totalCount, totalPrice }) => {
  return (
    <div className="Cart-footer">
      <div className="custom-control custom-checkbox">
        <input
          type="checkbox"
          className="custom-control-input"
          id="footerCheck"
          checked={checkAll}
          onChange={(e) => changeCheckAll(e.target.checked)}
        />
        <label className="custom-control-label" htmlFor="footerCheck">
          全选
        </label>
      </div>
      <div>
        <span>合计:</span>
        <span className="price">¥ {totalPrice}</span>
      </div>
      <button type="button" className="footer-btn btn btn-primary">
        结算 ({totalCount})
      </button>
    </div>
  )
}
