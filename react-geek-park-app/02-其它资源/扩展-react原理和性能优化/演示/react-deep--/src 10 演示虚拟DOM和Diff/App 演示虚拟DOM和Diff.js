import { useState } from 'react'

export default function App() {
  const [count, setCount] = useState(0)
  // // { 'div' }
  // console.log('虚拟DOM：', <div></div>)
  // // { type: 'div', props: { children: '文本节点' } }
  // console.log('虚拟DOM：', <div>文本节点</div>)
  // // { type: 'div', props: { calssName: 'tab', children: '文本节点' } }
  // console.log('虚拟DOM：', <div className="tab">文本节点</div>)
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>+1</button>
    </div>
  )
}
