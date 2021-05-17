import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/Home'
import About from '@/components/About'
import User from '@/components/User'

Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            name: 'Root',
            component: Home
        },
        {
            path: '/helloWorld',
            name: 'HelloWorld',
            component: HelloWorld
        },
        {
            // 这里的:userId 是固定写法。userId 可以改成其他变量名，这样就可以动态进行路由。
            // 在App.vue 文件中配置对应的router-link 时，使用:bind 绑定to 属性，传入一个自定义变量即可。
            // 配置完成后将会匹配所有 /user/ 开头的路径请求
            path: '/user/:userId',
            name: 'User',
            component: User
        },
        {
            path: '/about',
            name: 'About',
            component: About
        }
    ],
    mode: 'history'
})