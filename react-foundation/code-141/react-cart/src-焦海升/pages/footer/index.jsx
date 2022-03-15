// import { useState } from 'react'

import './index.scss'

const Footer = ({ checkAll, changeCheckAll, totalCount, totalPrice }) => {
  const changeAll = (e) => {
    changeCheckAll(e.target.checked)
    // console.log(e.target.checked)
  }
  return (
    <div className="my-footer">
      <div className="custom-control custom-checkbox">
        <input type="checkbox" className="custom-control-input" id="footerCheck" checked={checkAll} onChange={changeAll} />
        <label className="custom-control-label" htmlFor="footerCheck">
          全选
        </label>
      </div>
      <div>
        <span>合计:</span>
        <span className="price">¥ {totalPrice.toFixed(2)}</span>
      </div>
      <button type="button" className="footer-btn btn btn-primary">
        结算 ({totalCount})
      </button>
    </div>
  )
}

export default Footer
