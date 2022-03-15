const server = require('express')()
const Vue = require('vue')

server.get('/', (req, res) => {
  // 创建vue实例=> 首页
  const app = new Vue({
    template: `
    <div>
      <h1 style="color:blue" @click="handler">{{msg}}</h1>
      <ul>
        <li :key="item" v-for="item in arr">{{item}}</li>
      </ul>
    </div>
`,
    data: {
      msg: 'hello vue ssr!',
      arr: [1, 2, 3]
    },
    methods: {
      handler () {
        alert(1)
      }
    },
  })

  // 创建render
  const render = require('vue-server-renderer').createRenderer()
  // 将vue实例渲染为html字符串
  render.renderToString(app).then(html => {
    // 服务器端node渲染vue组件=》拼接html
    console.log('服务器渲染完的页面：', html)
    // 返回给浏览器
    res.send(html)
  }).catch(err => console.log(err))


})

server.listen(3000, () => console.log('服务器启动成功了！'))