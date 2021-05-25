import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () =>
    import ('views/home/Home')
const Profile = () =>
    import ('views/profile/Profile')
const Category = () =>
    import ('views/category/Category')
const ShopCar = () =>
    import ('views/shopcar/ShopCar')

Vue.use(VueRouter)

// 解决重复点击相同路由时，控制台出现下面出错的问题
const VueRouterPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(to) {
    return VueRouterPush.call(this, to).catch(err => err)
}

const routes = [{
        path: '/',
        redirect: '/home'
    },
    {
        path: '/home',
        name: 'Home',
        component: Home
    },
    {
        path: '/profile',
        name: 'Profile',
        component: Profile
    },
    {
        path: '/category',
        name: 'Category',
        component: Category
    },
    {
        path: '/shopcar',
        name: 'ShopCar',
        component: ShopCar
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router