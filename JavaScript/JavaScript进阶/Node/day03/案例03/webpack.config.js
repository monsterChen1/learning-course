const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development', // 模式：production / development
    entry: './src/index.js', // 入口文件
    // 出口文件
    output: {
        path: path.join(__dirname, 'dist'), // 出口路径（必须是绝对路径）
        filename: 'js/bundle.js', // 出口文件名
        assetModuleFilename: 'images/[hash:8][ext]' // 资源文件名
    },
    // 开发服务器配置
    devServer: {
        port: 3000, // 端口号
        open: true, // 自动打开浏览器
    },
    // 插件
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'public/index.html')
        }),
    ],
    // 模块加载器
    module: {
        rules: [
            {
                test: /\.css$/i, // 匹配.css结尾的文件
                use: ['style-loader', 'css-loader'] // 使用的loader
            },
            {
                test: /\.less$/i, // 匹配.less结尾的文件
                use: ['style-loader', 'css-loader', 'less-loader'] // 使用的loader
            },
            {
                test: /\.html$/i,
                use: 'html-loader' // 处理HTML文件中的img标签
            },
            {
                test: /\.(png|jpg|gif|jpeg)$/i, // 匹配图片文件
                type: 'asset' // 资源模块类型
            }
        ]
    }
};