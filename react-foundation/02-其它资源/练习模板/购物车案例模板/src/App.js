import './App.scss'

export default function App() {
  return (
    <div className="app">
      {/* 标题 */}
      <div className="my-header">购物车</div>

      {/* 商品列表项 */}
      <div className="my-goods-item">
        <div className="left">
          <div className="custom-control custom-checkbox">
            <input
              type="checkbox"
              className="custom-control-input"
              id="input"
            />
            <label className="custom-control-label" htmlFor="input">
              <img
                src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"
                alt=""
              />
            </label>
          </div>
        </div>
        <div className="right">
          <div className="top">商品名称</div>
          <div className="bottom">
            <span className="price">¥ 商品价格</span>
            <span>counter组件</span>
          </div>
        </div>
      </div>

      {/* 底部 */}
      <div className="my-footer">
        <div className="custom-control custom-checkbox">
          <input
            type="checkbox"
            className="custom-control-input"
            id="footerCheck"
          />
          <label className="custom-control-label" htmlFor="footerCheck">
            全选
          </label>
        </div>
        <div>
          <span>合计:</span>
          <span className="price">¥ 100</span>
        </div>
        <button type="button" className="footer-btn btn btn-primary">
          结算 (0)
        </button>
      </div>
    </div>
  )
}
