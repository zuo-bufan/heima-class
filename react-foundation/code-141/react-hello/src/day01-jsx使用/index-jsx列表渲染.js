/**
 * react 程序执行入口
 */
// react17版本之后，使用jsx不需要额外导入React
// import React from 'react'
import ReactDOM from 'react-dom'

/**
 * 4. jsx列表渲染：
- 作用：重复生成相同的 HTML 结构，比如，歌曲列表、商品列表等
- 实现：使用数组的 `map` 方法
- 注意⚠️：需要为遍历项添加 `key` 属性
  - key 在 HTML 结构中是看不到的，是 React 内部用来进行性能优化时使用的
  - key 在当前列表中要唯一
  - 如果列表中有像 id 这种的唯一值，就用 id 来作为 key 值
  - 如果列表中没有像 id 这种的唯一值，就可以使用 index（下标）来作为 key 值
 */
// 歌曲列表数据
const songs = [
  { id: 1, name: '痴心绝对' },
  { id: 2, name: '像我这样的人' },
  { id: 3, name: '南山南' }
]
// 重要：生成这样一个数组
const lis = [
  <li>1</li>,
  <li>2</li>,
  <li>3</li>
]
const songsList = songs.map(item => {
  return <li key={item.id}>{item.name}</li>
})
const box = (
  <div>
    <ul>
      {/* <li></li> */}
      {/* 写法1 */}
      {/* {
        songsList
      } */}
      {/* 写法2 */}
      {
        songs.map(item => {
          return <li key={item.id}>{item.name}</li>
        })
      }
    </ul>
  </div>
)



// 渲染创建的元素/组件
ReactDOM.render(
  box,
  document.getElementById('root')
)

