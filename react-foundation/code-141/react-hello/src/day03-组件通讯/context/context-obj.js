import { createContext } from "react"

// 创建跨多级组件通信的context对象
/**
 * Provider 提供共享数据
 * Consumer 接收共享数据
 */
const { Provider, Consumer } = createContext()

export { Provider, Consumer }