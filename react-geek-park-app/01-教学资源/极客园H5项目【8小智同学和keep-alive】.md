# 极客园H5项目【8小智同学】

## 01-搭建小智同学页面结构

**目标**：能够根据模板搭建小智同学页面结构和配置路由

<img src="assets/image-20220207223252395.png" alt="image-20220207223252395" style="zoom:80%;" />

**步骤**：

1. 将小智同学模板 Chat 拷贝到 Profile 目录中
2. 在 App 组件中，配置小智同学路由

```tsx
import Chat from './pages/Profile/Chat';

<AuthRoute path="/chat">
  <Chat />
</AuthRoute>
```

## 02-WebSocket简介

**目标**：能够知道WebSocket的作用

**内容**：

WebSocket 是一种数据通信协议，类似于我们常见的 http 协议。

问题：我们已经有了 HTTP 协议，为什么还需要另一个协议？它能带来什么好处？

回答：HTTP 协议有一个缺陷：通信只能由客户端（浏览器、手机等）发起

举例来说，我们想了解今天的天气，只能是客户端向服务器发出请求，服务器返回查询结果。HTTP 协议做不到服务器主动向客户端推送信息。

这种单向请求的特点，注定了如果服务器有连续的状态变化，客户端要获知就非常麻烦。因此，有没有更好的方法呢？这就有了 WebSocket



WebSocket API 是一种先进的技术，它可以在用户的浏览器和服务器之间打开一个**双向**的交互式通信会话，最典型的场景就是聊天室。

使用此API，您可以向服务器发送消息并接收事件驱动的响应，而无需通过轮询服务器的方式以获得响应。

Ajax 轮询：通过定时器，每隔一段时候发出一个询问，了解服务器有没有新的信息。轮询的效率低，非常浪费资源（因为必须不停连接，或者 HTTP 连接始终打开）



WebSocket 协议在2008年诞生，2011年成为国际标准，所有浏览器都已经支持了。

它的最大特点就是：**服务器可以主动向客户端推送信息，客户端也可以主动向服务器发送信息，是真正的双向平等对话**，属于服务器推送技术的一种。

![image-20201121170006970](images/image-20201121170006970.png)
![image-20201121170200163](images/image-20201121170200163.png)

## 03-WebSocket 的使用

**目标**：能够使用原生WebSocket

**内容**：

基于浏览器内置的 `WebSocket` API

[参考：MDN WebScocket](https://developer.mozilla.org/zh-CN/docs/Web/API/WebSocket)

**步骤**：

1. 创建 WebSocket 连接
2. 监听 open 事件，看连接是否成功
3. 双方进行双向通讯
4. 关闭连接

```js
// 创建 WebSocket 连接
// http/https
// ws/wss
const socket = new WebSocket('wss://xxx.com')

// 建立连接成功
// open 事件：用于指定连接成功后的回调函数
socket.addEventListener('open', event => {
  // 给 服务器 发送消息
  socket.send('服务器你好，我是浏览器，我给你发消息了')
})

// 监听服务器返回的消息
// message 事件：用于接收服务器返回的信息
socket.addEventListener('message', event => {
  // event.data 是服务器发送回来的消息
  console.log('Message from server ', event.data)
})

// close 事件：用于指定连接关闭后的回调函数
socket.addEventListener('close', event => {
  // event.data 是服务器发送回来的消息
  console.log('Message from server ', event.data)
})

// --

// API：

// 发送数据：
socket.send( data )

// 关闭连接
socket.close()
```

示例：

```ts
const socket = new WebSocket('wss://ws.bitstamp.net/')

// socket.onopen = () => {
socket.addEventListener('open', () => {
  socket.send(
    JSON.stringify({
      event: 'bts:subscribe',
      data: {
        channel: 'live_trades_btcusd'
      }
    })
  )
})

// socket.onmessage = data => {
socket.addEventListener('message', data => {
  console.log('服务器返回数据：', JSON.parse(data.data))
})
```

## 04-socket.io 的使用

**目标**：能够使用socket.io库

**内容**：

原生的 WebSocket 使用比较麻烦，实际开发中推荐使用第三方库 socket.io。该库既提供了客户端的包又提供了服务端的包：

- 客户端的包为：socket.io-client（前端使用该包，io 是 Input 和 Output 的简称）
- 服务端的包为：socket.io

[参考：socket.io 文档](https://www.w3cschool.cn/socket/socket-k49j2eia.html)

[参考：socket.io github](https://github.com/socketio/socket.io)

[参考：socket.io 官方文档](https://socket.io/docs/v4/client-initialization/)

常用 API：

```ts
import { io } from 'socket.io-client'

// 建立连接
const socketio = io(url, options) // 等同于 原生websocket new WebSocket()

// 链接成功时，就会执行此处的回调函数
socketio.on('connect', () => {
  
})

// 接收服务器响应的消息
socketio.on(eventName, data => {})

// 发消息给服务器
socketio.emit(eventName, 数据)

// 关闭链接
socketio.close()
```

## 05-小智同学-创建WebSocket

**目标**：能够使用socket.io创建WebSocket

![image-20220207230638428](assets/image-20220207230638428.png)

**分析说明**：

聊天列表中包含了两种消息：1 小智同学回复的消息  2 我们发送的消息。可以通过 type 来进行区分：

```ts
// 小智同学回复的消息：
{ type: 'xz', message: '你好，我是小智' }

// 我们发送的消息：
{ type: 'user', message: '今天上海天气怎么样' }
```

**步骤**：

1. 安装：`yarn add socket.io-client`

2. 在 useEffect 中，创建 websocket 实例，并验证连接成功
3. 在组件卸载时，关闭 websocket
4. 创建聊天列表状态数据，并在连接成功时，展示默认聊天消息
5. 渲染聊天消息

**核心代码**：

```tsx
import { io } from 'socket.io-client'

type Chat = {
  message: string
  type: 'user' | 'xz'
}

const Chat = () => {
  const [chatList, setChatList] = useState<Chat[]>([])
  
  useEffect(() => {
    // 1 建立连接
    const socketio = io('http://toutiao.itheima.net', {
      // 参数
      query: {
        token: getTokens().token
      },
      // 连接方式
      transports: ['websocket']
    })

    // 2 连接成功
    socketio.on('connect', () => {
      console.log('websocket 连接成功')
      // 让小智给你打个招呼
      setChatList([
        { message: '你好，我是小智', type: 'xz' },
        { message: '你有什么疑问？', type: 'xz' }
      ])
    })
    
    return () => {
      socketio.close()
    }
  }, [])
  
	return (
  	// ...
    <div className="chat-list">
      {chatList.map((item, index) => {
        return (
          <div
            key={index}
            className={classnames(
              'chat-item',
              item.type === 'xz' ? 'self' : 'user'
            )}
            >
            {item.type === 'xz' ? (
              <Icon type="iconbtn_xiaozhitongxue" />
            ) : (
              <img
                src="http://geek.itheima.net/images/user_head.jpg"
                alt=""
              />
            )}
            <div className="message">{item.message}</div>
          </div>
        )
      })}
    </div>
  )
}
```

## 06-小智同学-收发消息

**目标**：能够通过socket.io收发消息

**步骤**：

1. 创建状态使用受控组件方式控制文本框的值
2. 创建 ref 对象用来存储 socketio 实例，保证在发送消息时可以拿到 socketio 实例
3. 为文本框绑定事件，在敲回车时，发送消息
4. 在 useEffect 中创建 socketio 实例时，接收服务器返回的消息，并渲染

```tsx
import { io, Socket } from 'socket.io-client'

const Chat = () => {
  const [value, setValue] = useState('')
  const socketRef = useRef<Socket>()
  
  useEffect(() => {
    // ...
    // 存储io实例
    socketRef.current = socketio
    // 接收服务器返回的消息
    socketio.on('message', data => {
      setChatList(list => [
        ...list,
        {
          message: data.msg,
          type: 'xz'
        }
      ])
    })
  }, [])
  
  // 发送消息
  const onSendMsg = e => {
    if (e.code !== 'Enter' || value.trim() === '') return

    // 发送消息给服务器
    socketRef.current?.emit('message', {
      msg: value,
      timestamp: Date.now() + ''
    })

    setChatList([
      ...chatList,
      {
        type: 'user',
        message: value
      }
    ])

    setValue('')
  }
  
	return (
  	// ...
    <Input
      className="no-border"
      placeholder="请描述您的问题"
      value={value}
      onChange={value => setValue(value)}
      onKeyDown={onSendMsg}
    />
  )
}
```

## 07-小智同学-聊天内容滚动展示

**目标**：能够在聊天时展示最新的聊天内容

**核心代码**：

```ts
// 监听聊天内容的改变，只要聊天内容改变了，就滚动列表列表到最底部
const chatListRef = useRef<HTMLDivElement>(null)

useEffect(() => {
  const chatListDOM = chatListRef.current
  if (!chatListDOM) return

  chatListDOM.scrollTop = chatListDOM.scrollHeight
}, [chatList])
```

```tsx
<div className="chat-list" ref={chatListRef}>
```

---

# 路由keep-alive

## 01-改造首页的路由规则

**目标**：能够让布局页面和首页复用同一个路由地址

**分析说明**：

布局页面 Layout 和首页 Home 之间是嵌套关系，

- 布局页面 Layout 的路由地址：`/home`

- 首页 Home 的路由地址：`/home/index`

由于 React 路由默认是模糊匹配，而子路由是嵌套在父路由内部的，所以，子路由要展示必须保证父级路由先展示，

所以，为了让父级路由展示，**子级路由的路由地址必须以父级路由地址开头**才行。

而实际上：**子级路由的路由地址可以和父级路由完全相同**，此时，父级路由匹配的同时子级路由也会匹配，适用于首页这样的页面。

当然，为了防止子级路由一直被匹配而影响其他页面，需要在子级路由与父级路由地址相同时，将子级路由设置为精确匹配。

```tsx
// App.tsx 中，配置父级路由：
<Route path="/home" component={Layout} />

// ...

// Layout 组件中，配置子级路由：
<Route exact path="/home" component={Home} />
// ...
// 其他子级路由
<Route path="/home/qs" component={Question}></Route>
```

## 02-keep-alive 的说明

**目标**：能够知道在React中可以通过路由模拟实现KeepAlive功能

**分析说明**：

keep-alive 功能描述：包裹组件时，会缓存不活动的组件实例，而不是销毁它们

注意：React 没有提供 keep-alive 的功能，需要自己手动实现

在极客园 H5 项目中，我们希望首页频道对应的文章列表数据的数据被缓存下来，这样在进入文章详情，再返回首页时，还能继续停留在上次查看文章的位置。

也就是：在切换路由时，缓存组件内容。因此，我们可以自己封装一个 KeepAlive 组件，内部封装路由的 Route 组件来实现。

> 原理说明：

1. 默认情况下，Route 组件只在路由规则匹配时渲染。也就是说：路由规则不匹配时，什么都不渲染（return null），此时对应的组件会被销毁
2. Route 组件提供了一个 children 属性，类似于 render 属性，值也是一个回调函数，该回调函数不管路由规则是否匹配，都会执行

因此，**可以利用 Route 组件的 children 属性，在路由规则匹配时展示组件内容，在路由规则不匹配时隐藏组件内容**，从而实现 keep-alive 的功能

```tsx
<Route
  children={() => {
    console.log('任何情况下，我都会执行')
  }}
/>
```

## 03-封装keep-alive组件

**目标**：能够封装KeepAlive组件实现缓存页面功能

**分析说明**：

[参考：React 路由 match 属性](https://v5.reactrouter.com/web/api/match)

可以通过 children 属性，回调函数的参数，拿到当前的路由信息。它提供了 `match` 属性，表示当前匹配的路由信息

- 如果匹配，match 中会给出当前匹配的路由信息
- 如果不匹配，match 为 null

因此，可以通过判断 `match !== null` 来判断当前路由是否匹配

```tsx
<Route
  children={(props.match) => {
    console.log('当前路由是否匹配：', props.match)
  }}
/>
```

注意：由于被缓存的路由永远都需要匹配，所以，应该将 KeepAlive 组件放在 Switch 组件外部！

**步骤**：

1. 封装 KeepAlive 组件
2. 使用 KeepAlive 组件来配置路由，缓存路由

**核心代码**：

components/KeepAlive/index.tsx 中：

```tsx
import { Route, RouteProps } from 'react-router-dom'

// 使用方式：
/*
	<KeepAlive path="/home">
		<Layout />
	</KeepAlive>
*/
export const KeepAlive = ({ children, ...rest }: RouteProps) => {
  return (
    <Route
      {...rest}
      children={props => {
        const isMatch = props.match !== null

        return (
          <div
            style={{
              height: '100%',
              display: isMatch ? 'block' : 'none'
            }}
          >
            {children}
          </div>
        )
      }}
    />
  )
}
```

App.tsx 中：

```tsx
// 在 Switch 外部使用 KeepAlive 组件

// Layout 组件的路由：
<KeepAlive path="/home">
  <Layout></Layout>
</KeepAlive>

<Switch>
  // ... 其他路由配置
</Switch>
```

Layout/index.tsx 中：

```tsx
// Home 组件的路由：
<KeepAlive exact path="/home">
  <Home />
</KeepAlive>
```

ArticleList/index.tsx 中：

```tsx
// 注意：每个频道的内容，需要添加 forceRender 属性，来让 Tab 在切换并且隐藏时，不是销毁该 Tab 组件，而是隐藏该组件
<Tabs.Tab forceRender></Tabs.Tab>
```



# 第八天



