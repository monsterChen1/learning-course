const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { plugins } = require('../案例01/webpack.config');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    devServer: {
        port: 3000,
        open: true
    },
    plugins: [new HtmlWebpackPlugin({
        template: './public/index.html'
    })],
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"]
            }
        ]
    }
}