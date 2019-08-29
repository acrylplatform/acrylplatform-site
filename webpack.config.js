const { VueLoaderPlugin } = require('vue-loader')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    mode: 'production',
    entry: {
        app: './src/main.js'
    },
    output: {
        filename: '[name].[contenthash].js'
    },
    module: {
        rules: [
        {
            test: /\.js$/,
            loader: ['babel-loader']
        },
        {
            test: /\.vue$/,
            loader: 'vue-loader'
        },
        ]
    },
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.esm.js'
        }
    },
    plugins: [
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({
            inject: false,
            filename: 'index.html',
            template: './src/template.html'
        })
    ]
}