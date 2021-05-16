// webpack.config.js 中的配置过多，有些配置其实只有在开发完成放入生产环境时才需要。
// 可以把这些配置拆分成三个配置文件：base.config.js、dev.config.js、prod.config.js
// 这样就可以将开发环境使用的配置与生产环境使用的配置分离开，减少开发时的编译时间


const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

module.exports = {
    entry: './src/main.js',
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'bundle.js',
        // 使用了html-webpack-plugin 插件之后，就不需要publicPath 属性了
        // publicPath: 'dist/'
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
        // webpack 自带的插件，用于在打包后的bundle.js 文件中声明版权
        new webpack.BannerPlugin('最终版权归XXX所有'),
        // 自动在dist 文件夹中生成index.html 文件（可以指定模板），并把打包的bundle.js 文件自动通过script 标签插入到body 中    
        new HtmlWebpackPlugin({
            template: 'index.html'
        }),
        // 用来对js文件进行压缩，从而减小js文件的大小，加速load速度
        // uglifyJsPlugin会拖慢webpack 的编译速度，建议在开发阶段将其关闭，部署的时候再将其打开
        // 使用这个插件后，BannerPlugin 插件生成的版权签名会被删除掉（删除多余的注释）
        new UglifyJsPlugin(),
    ],
    devServer: {
        contentBase: './dist',  // 为哪一个文件夹提供服务，默认是根文件夹
        inline: true  // 页面实时刷新
    },
}