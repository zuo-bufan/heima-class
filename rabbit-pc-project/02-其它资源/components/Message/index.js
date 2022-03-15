// 实现使用函数调用xtx-message组件的逻辑
import { createVNode, render } from 'vue'
import XtxMessage from './index.vue'

// 2. 导出使用方法
export default ({ type, text, time = 2000 }) => {
  // if (vnode) return
  // 1. 准备dom容器
  // const div = document.createElement('div')
  // document.body.appendChild(div)
  // 定时器标识
  // let timer = null
  // 实现：根据xtx-message.vue渲染消息提示
  // 1. 导入组件
  // 2. 根据组件创建虚拟节点
  const vnode = createVNode(XtxMessage, { type, text })
  // 3. 准备一个DOM容器
  // 4. 把虚拟节点渲染DOM容器中
  render(vnode, document.body)
  // 5. 开启定时，移出DOM容器内容
  // timer && clearTimeout(timer)
  // timer =
  vnode.component.setupState.visible = true
  setTimeout(() => {
    // console.log(vnode, vnode.component.setupState)
    // 触发关闭动画
    // vnode.el.click()
    vnode.component.setupState.visible = false
    // 移除元素
    // setTimeout(() => {
    //   document.body.removeChild(div)
    // vnode = null
    // }, 1000)
  }, time)
}
