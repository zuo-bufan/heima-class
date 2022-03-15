function Cards(props) {
  // props.children获取组件下的jsx结构（html）=> 虚拟DOM
  console.log(props, props.children)
  return (
    <div>
      <h1>{props.title}</h1>
      <div className="box">{props.children}</div>
    </div>
  )
}

export default Cards
