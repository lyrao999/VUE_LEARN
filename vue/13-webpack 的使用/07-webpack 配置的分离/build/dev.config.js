// 开发环境依赖的配置
// 需要使用webpack-merge 模块把base.config.js 和dev.config.js 文件进行整合


const webpackMerge = require('webpack-merge')
const baseConfig = require('./base.config')

module.exports = webpackMerge(baseConfig, {
    // 配置好devServer 选项后，修改代码不需要手动执行webpack 命令
    // 只需要在package.json 中配置一个script：{"dev": "webpack-dev-server --open --config ./build/dev.config.js"}
    // --open 参数表示自动打开浏览器；--config 参数指定webpack 使用的哪一个配置文件
    // 然后在命令行执行 npm run dev 即可
    // 每次修改代码保存后，webpack 会在内存中自动编译，然后刷新浏览器界面。
    devServer: {
        contentBase: '../dist',  // 为哪一个文件夹提供服务，默认是根文件夹
        inline: true  // 页面实时刷新
    },
})
