import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
// import Home from '@/components/Home'
// import About from '@/components/About'
// import User from '@/components/User'

// 使用路由懒加载，将组件分开打包，提高用户浏览时的加载速度
// 使用npm run build 打包时，会发现/dist/js 中多出来一些js 文件
const Home = () => import('../components/Home')
const User = () => import('../components/User')
const About = () => import('../components/About')
const HomeNews = () => import('../components/HomeNews')
const HomeTasks = () => import('../components/HomeTasks')
const Profile = () => import('../components/Profile')

Vue.use(Router)

export default new Router({
	routes: [
		{
			path: '',
			redirect: '/home'
		},
		{
			path: '/home',
			component: Home,
			children: [
				{
					path: '',
					redirect: 'news'
				},
				{
					path: 'news',
					component: HomeNews
				},
				{
					path: 'tasks',
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
			component: User
		},
		{
			path: '/about',
			name: 'About',
			component: About
		},
		{
			path: '/profile',
			component: Profile
		}
	],
	mode: 'history'
})

// 解决重复点击相同路由报错的问题
// const VueRouterPush = Router.prototype.push
// Router.prototype.push = function push(to) {
// 	return VueRouterPush.call(this, to).catch(err => console.log(err))
// }