import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
// import Home from '@/components/Home'
// import About from '@/components/About'
// import User from '@/components/User'

// 使用路由懒加载，将组件分开打包，提高用户浏览时的加载速度
// 使用npm run build 打包时，会发现/dist/js 中多出来一些js 文件
const Home = () =>
    import ('../components/Home')
const User = () =>
    import ('../components/User')
const About = () =>
    import ('../components/About')
const HomeNews = () =>
    import ('../components/HomeNews')
const HomeTasks = () =>
    import ('../components/HomeTasks')
const Profile = () =>
    import ('../components/Profile')

Vue.use(Router)

const routes = [{
        path: '/',
        name: 'Root',
        redirect: '/home'
    },
    {
        path: '/home',
        component: Home,
        meta: {
            title: 'home'
        },
        children: [{
                path: '',
                name: 'HomeRoot',
                redirect: 'news'
            },
            {
                path: 'news',
                name: 'HomeNews',
                meta: {
                    title: 'homeNews'
                },
                component: HomeNews
            },
            {
                path: 'tasks',
                name: 'HomeTasks',
                component: HomeTasks
            }
        ]
    },
    {
        // 这里的:userId 是固定写法。userId 可以改成其他变量名，这样就可以动态进行路由。
        // 在App.vue 文件中配置对应的router-link 时，使用:bind 绑定to 属性，传入一个自定义变量即可。
        // 配置完成后将会匹配所有 /user/ 开头的路径请求
        path: '/user/:userId',
        name: 'User',
        meta: {
            title: 'user'
        },
        component: User
    },
    {
        path: '/about',
        name: 'About',
        meta: {
            title: 'about'
        },
        component: About
    },
    {
        path: '/profile',
        name: 'Profile',
        meta: {
            title: 'profile'
        },
        component: Profile
    }
]

const router = new Router({
    routes,
    mode: 'history',
    linkActiveClass: 'active' // 修改全局router-link 中的router-link-active 类名为 active
})

// 使用全局导航守卫实现：当切换不同页面时，页面的title 会随着发生改变

// 全局导航守卫 - 前置守卫（guard）
router.beforeEach((to, from, next) => {
    // from 和 to 参数都是 route 类型
    // console.log(to);
    // 从from 跳转到to
    // 在上面定义路由时加上meta 属性，在这里就可以拿到
    // document.title = to.meta.title
    // matched 属性是一个数组，包含了当前route 相关的所有路由组件（父子级关系）
    document.title = to.matched[0].meta.title

    // 最后必须手动调用next() 函数，不然会失去路由效果
    // next 中可以传递参数，表示跳转到哪个页面，参数类型和router.push 的参数一致
    next()
})

// 全局导航守卫 - 后置钩子（hook）
// router.afterEach((to, from) => {})

// 还有一些其他导航守卫函数：路由独享的守卫、组件内的守卫等，使用到时查询官网

export default router