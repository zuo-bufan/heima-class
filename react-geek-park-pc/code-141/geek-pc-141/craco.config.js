const path = require('path')
const SimpleProgressWebpackPlugin = require('simple-progress-webpack-plugin')

module.exports = {
  // webpack 配置
  webpack: {
    // 配置别名
    alias: {
      // 约定：使用 @ 表示 src 文件所在路径
      '@': path.resolve(__dirname, 'src')
    },
    plugins: [
      // 查看打包的进度
      new SimpleProgressWebpackPlugin()
    ]
  }
}