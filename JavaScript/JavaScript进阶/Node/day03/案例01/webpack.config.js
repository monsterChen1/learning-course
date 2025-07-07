const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/main.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    // webpack添加插件
    plugins: [new HtmlWebpackPlugin({
        // 指定HTML模板
        template: './public/index.html'
    })],
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"]
            },
            {
                test: /\.less$/i,
                use: ["style-loader", "css-loader", "less-loader"]
            },
            {
                test: /\.(png|jpg|gif|jpeg)$/i,
                type: 'asset'
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf|svg)$/i,
                // 静态资源直接复制文件
                type: 'asset/resource',
                generator: {
                    // 放到dist/fonts目录下
                    // [name]表示文件名
                    // [hash:6]表示文件名后面加上6位哈希值
                    // [ext]表示文件后缀名
                    filename: 'fonts/[name].[hash:6][ext]'
                }
            },
            {
                test:'/\.js$/i', // 匹配js文件
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader', // 使用babel-loader处理js文件
                    options: {
                        presets: ['@babel/preset-env'] // 使用预设
                    }
                }
            }
        ]
    }
};