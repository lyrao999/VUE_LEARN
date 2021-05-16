// 开发环境和生产环境共同依赖的配置

const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: './src/main.js',
    output: {
        // 出口路径需要调整到上一层的dist 文件夹
        path: path.resolve(__dirname, '../dist'),
        filename: 'bundle.js',
    },
    module: {
        rules: [
            // 加载css 文件的配置
            {
                test: /\.css$/i,
                // 当有多个loader 时，使用的顺序是从右向左的
                use: ["style-loader", "css-loader"]
            },
            // 加载less 文件的配置
            {
                test: /\.less$/i,
                loader: [
                    // compiles Less to CSS
                    "style-loader",
                    "css-loader",
                    "less-loader"
                ]
            },
            // 加载图片的配置
            {
                test: /\.(png|jpg|gif|jpeg)$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        // 当加载的图片小于limit 时，会将图片编译成base64 字符串形式
                        // 当加载的图片大于limit 时，默认使用file-loader 进行加载
                        limit: 10,
                        name: 'img/[name].[hash:8].[ext]'
                    },
                }]
            },
            // 将ES6 转换成ES5 的配置
            {
                test: /\.js$/,
                // 不转换node_modules 和bower_components 中的js 文件
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        // 使用es2015 进行配置
                        presets: ['es2015']
                    }
                }
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            }
        ]
    },
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.esm.js'
        },
        extensions: ['.js', '.css', '.vue']
    },
    plugins: [
        // 自动在dist 文件夹中生成index.html 文件（可以指定模板），并把打包的bundle.js 文件自动通过script 标签插入到body 中    
        new HtmlWebpackPlugin({
            template: 'index.html'
        }),
    ],
}