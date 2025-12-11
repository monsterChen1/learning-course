const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development', // 模式：production / development
    entry: './src/index.js', // 入口文件
    // 出口文件
    output: {
        path: path.join(__dirname, 'dist'), // 出口路径（必须是绝对路径）
        filename: 'bundle.js' // 出口文件名
    },
    // 插件
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'public/index.html')
        }),
    ],
    devServer: {
        port: 3000, // 端口号
        open: true, // 自动打开浏览器
    }
};