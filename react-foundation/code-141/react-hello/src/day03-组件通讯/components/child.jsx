// 函数组件（静态）
function Order({ item, changePrice }) {
  // console.log(props)
  const _changePrice = () => {
    // 通过子传父修改item的price价格
    changePrice(item.id, 0.1)
  }
  return (
    <div className="child">
      <div className="product">
        <h3>标题：{item.name}</h3>
        <div>价格：{item.price.toFixed(2)}</div>
        <div>{item.info}</div>
        <div>
          <button onClick={_changePrice}>砍价</button>
        </div>
      </div>
    </div>
  )
}

export default Order
