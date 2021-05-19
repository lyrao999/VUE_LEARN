import Vue from 'vue'
import Router from 'vue-router'

// 路由懒加载
const Home = () =>
    import ('views/home/Home')
const Category = () =>
    import ('views/category/Category')
const ShopCar = () =>
    import ('views/shopcar/ShopCar')
const Profile = () =>
    import ('views/profile/Profile')

Vue.use(Router)

// 注意这里的变量名，不可以是 route
const routes = [{
        path: '',
        // 默认路由
        redirect: '/home'
    },
    {
        path: '/home',
        component: Home
    },
    {
        path: '/category',
        component: Category
    },
    {
        path: '/shopcar',
        component: ShopCar
    },
    {
        path: '/profile',
        component: Profile
    },
]

const router = new Router({
    routes,
    // 路由路径采用H5 的history 模式
    mode: 'history'
})

export default router