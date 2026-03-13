const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false, // 关闭eslint检查
  devServer: {
    open: true, // 启动服务后自动打开浏览器
    port: 3000 // 修改默认端口号
  }
})
