import { add, mul } from './js/mayhUtils.js'

add(1, 2);
mul(2, 4);

// 依赖css 文件
require('./css/normal.css')

// 依赖less 文件
require('./css/special.less')

document.writeln('哈哈哈')

// 使用vue
// const Vue = require('vue')  这种方法无法导入vue，因为vue 源码是通过 export default 导出的
import Vue from 'vue'

// 1. 直接在template 中写html 代码
/*
new Vue({
    el: '#app',
    // template 会替换el 绑定的标签。
    // 这样做的好处是，不需要在index.html 文件中写html 代码了。只需要定义一个div 标签用于绑定 el 属性。
    template: `<h2>{{message}}</h2>`,
    data: {
        message: 'Hello Webpack'
    }
})
*/


// 2. 可以把template 中的html 代码抽离出去，作为一个组件
/*
const App = {
    template: `<h2>{{message}}</h2>`,
    data() {
        return {
            message: 'Hello Webpack'
        }
    }
}

new Vue({
    el: '#app',
    template: '<App/>',
    components: {
        App
    }
})
*/

/*
// 3. 把组件抽离出去，单独作为一个模块
import App from './vue/app'

new Vue({
    el: '#app',
    template: '<App/>',
    components: {
        App
    }
})
*/


// 4. 把组件抽离出去，写在.vue 文件中，并且html、css以及js 代码分离
import App from './vue/App.vue'

new Vue({
    el: '#app',
    template: '<App/>',
    components: {
        App
    }
})