import React from 'react'

import Mouse from './Mouse'

import img from './images/cat.png'

const Cat = () => (
  <Mouse>
    {({ x, y }) => (
      <img
        src={img}
        alt=""
        style={{
          position: 'absolute',
          top: y - 64,
          left: x - 64
        }}
      />
    )}
  </Mouse>
)

export default Cat
