import React, { useState } from 'react'

function Child(props) {
  // console.log(123)
  // 结论：第一次加载的时候和每次修改状态数据，函数组件自身都会重新执行一次
  const [count, setCount] = useState(0)
  return (
    <div style={{ paddingTop: 100 }}>
      <ul>
        <li>{count}</li>
        <li>
          <button
            onClick={() => {
              setCount(count + 1)
            }}>
            add
          </button>
        </li>
      </ul>
    </div>
  )
}

export default Child
