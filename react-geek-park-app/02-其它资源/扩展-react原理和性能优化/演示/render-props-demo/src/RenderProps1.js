import React from 'react'

import Mouse from './Mouse'

const Position = () => (
  <Mouse>
    {({ x, y }) => (
      <p>
        鼠标当前位置：(x: {x}, y: {y})
      </p>
    )}
  </Mouse>
)

export default Position
