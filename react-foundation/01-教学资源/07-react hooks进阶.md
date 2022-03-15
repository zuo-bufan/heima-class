# React Hooks进阶

- [ ] 自定义hooks
- [ ] useContext
- [ ] useRef操作DOM

## 自定义hooks

**目标：**能够使用自定义hooks实现状态的逻辑复用

**内容：**

除了使用内置的 Hooks 之外，还可以创建自己的 Hooks（自定义 Hooks）。 

使用场景：**将组件状态逻辑提取到可重用的函数（自定义 Hooks）中，实现状态逻辑复用。**

内置 Hooks 为函数组件赋予了 class 组件的功能；在此之上，自定义 Hooks 针对不同组件实现不同状态逻辑复用。

注意⚠️：

+ 自定义 Hooks 是一个函数，**约定函数名称必须以 use 开头，React 就是通过函数名称是否以 use 开头来判断是不是 Hooks**
+ Hooks 只能在函数组件中或其他自定义 Hooks 中使用，否则，会报错！
+ 自定义 Hooks 用来提取组件的状态逻辑，根据不同功能可以有不同的参数和返回值（就像使用普通函数一样）

**核心代码**

```jsx
// 使用hooks实现猫跟着鼠标移动
import { useEffect, useState } from 'react'
export default function useMouse() {
  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  })

  useEffect(() => {
    const move = (e) => {
      setPosition({
        x: e.pageX,
        y: e.pageY,
      })
    }
    document.addEventListener('mousemove', move)
    return () => {
      document.removeEventListener('mousemove', move)
    }
  }, [])
  return position
}

```



## useContext-使用

**目标：**能够通过useContext hooks实现跨级组件通讯

**内容：**

作用：在**函数组件**中，获取 Context 中的值。要配合 Context 一起使用。

语法：

+ useContext 的参数：Context 对象，即：通过 createContext 函数创建的对象
+ useContext 的返回值：Context.Provider 中提供的 value 数据

```js
import { useContext } from 'react'

const { color } = useContext(ColorContext)
```

`useContext Hook` 与` <Context.Consumer>` 的区别：获取数据的位置不同

+ `<Context.Consumer>`：在 JSX 中获取 Context 共享的数据
+ useContext：在 JS 代码中获取 Context 的数据

```jsx
const ColorContext = createContext()

const Child = () => {
  // 在普通的 JS 代码中：
  const { color } = useContext(ColorContext)

  return (
    <div>
      useContext 获取到的 color 值：{ color }
      {/* 在 JSX 中： */}
    	<ColorContext.Consumer>
        {color => <span>共享的数据为：{color}</span>}
      </ColorContext.Consumer>
    </div>
  )
}
```

## useRef-操作DOM

**目标：**能够使用useRef操作DOM

**内容：** 

使用场景：在 React 中进行 DOM 操作时，用来获取 DOM

作用：**返回一个带有 current 属性的可变对象，通过该对象就可以进行 DOM 操作了。**

```jsx
// inputRef => { current }
const inputRef = useRef(null)
```

解释：

+ 参数：在获取 DOM 时，一般都设置为 null（获取 DOM 对象时，如果拿不到 DOM 对象，此时，获取到的值就是 null）
+ 返回值：包含 current 属性的对象。

+ 注意：只要在 React 中进行 DOM 操作，都可以通过 useRef Hook 来获取 DOM（比如，获取 DOM 的宽高等）

+ 注意：useRef不仅仅可以用于操作DOM，还可以操作组件

**核心代码：**

```JSX
import { useRef } from 'react'

const App = () => {
  // 1 使用useRef能够创建一个ref对象
  const inputRef = useRef(null)

  const add = () => {
    // 3 通过 inputRef.current 来访问对应的 DOM
    console.log(inputRef.current.value)
    inputRef.current.focus()
  }
  
  return (
    <section className="todoapp">
      {/* 2 将 ref 对象设置为 input 的 ref 属性值。目的：将 ref 对象关联到 input 对应的 DOM 对象上 */}
      <input type="text" placeholder="请输入内容" ref={inputRef} />
      <button onClick={add}>添加</button>
    </section>
  )
}

export default App
```

