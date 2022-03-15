import React from 'react'
import ReactDOM from 'react-dom'

// 导入组件
import Hello from './day02-组件基础/函数组件'
import ClassHello from './day02-组件基础/类组件'


/**
 * react 创建组件：
 * 1. 使用函数
   2. 使用class类
 */
const box = (
  <div className="box">
    {/* 使用函数组件渲染 */}
    <Hello />
    <Hello></Hello>
    <hr />
    <ClassHello />
  </div>
)


ReactDOM.render(box, document.getElementById('root'))
