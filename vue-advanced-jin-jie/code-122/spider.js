// 引入http模块
const http = require("http")

// 定义要爬虫程序 访问的 网页
// let url = "http://tools.jb51.net/#home"
let url = "http://www.itheima.com/"

// let url = "http://localhost:8080/index_ssr.html"

// 用http模块中的get方法去请求 url 这个网页，把请求到的结果显示出来。
http.get(url, (res) => {
  let result = ""
  res.setEncoding('utf8')
  res.on('data', (chunk) => {
    result += chunk
  })
  res.on('end', () => {
    console.log(`爬虫得到的数据是: ${result}`)
  })
})