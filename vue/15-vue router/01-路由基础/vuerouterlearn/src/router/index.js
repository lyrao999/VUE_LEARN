import Vue from 'vue'
import VueRouter from 'vue-router'
import HelloWorld from '../components/HelloWorld'
import About from '../components/About.vue'

// 1. 安装 vue-router 插件
Vue.use(VueRouter)

// 改变路径的方式有两种：
// 1. URL 的 hash，底层调用 location 对象的 hash 属性（location.hash='/helloworld'）。路径模式： http://localhost:8080/#/helloworld。vue 默认使用hash。
// 2. H5 的 history，底层调用 history 对象的相关方法（pushState，replaceState等）。路径模式： http://localhost:8080/helloworld
// 可以在创建router 实例时，加入 mode 属性，值为 'history'
const routes = [{
        path: '/',
        redirect: '/helloworld' // 将首页重定向到 /helloworld 路径下
    },
    {
        path: '/helloworld',
        component: HelloWorld
    },
    {
        path: '/about',
        component: About
    }
]

// 2. 创建 vue-router 对象
const router = new VueRouter({
    routes,
    mode: 'history',
    linkActiveClass: 'act'
})

// 3. 导出 router 对象
export default router