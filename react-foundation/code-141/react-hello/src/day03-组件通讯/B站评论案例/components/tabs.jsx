function Tabs({ tabs, active, changeTab }) {
  return (
    <div className="tabs-order">
      <ul className="sort-container">
        {/* <li className="on">按热度排序</li>
      <li>按时间排序</li> */}
        {tabs.map((tab) => (
          <li
            className={active === tab.type ? 'on' : ''}
            key={tab.id}
            // react事件传值口诀：函数套函数=> 是在里边传值
            onClick={() => changeTab(tab.type)}>
            按{tab.name}排序
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Tabs
