// 生产环境依赖的配置
// 需要使用webpack-merge 模块把base.config.js 和prod.config.js 文件进行整合


const webpack = require('webpack')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const webpackMerge = require('webpack-merge')
const baseConfig = require('./base.config')

module.exports = webpackMerge(baseConfig, {
    plugins: [
        // 用来对js文件进行压缩，从而减小js文件的大小，加速load速度
        // uglifyJsPlugin 会拖慢webpack 的编译速度，建议在开发阶段将其关闭，部署的时候再将其打开
        // 如果在BannerPlugin 插件之后使用，BannerPlugin 插件生成的版权签名会被删除掉（删除多余的注释）
        new UglifyJsPlugin(),
        // webpack 自带的插件，用于在打包后的bundle.js 文件中声明版权
        new webpack.BannerPlugin('最终版权归XXX所有'),
    ],
})
