import Vue from 'vue'
import FastClick from 'fastclick'
import VueLazyload from 'vue-lazyload'
import App from './App.vue'
import router from './router'
import store from './store'
import toast from 'components/common/toast'

Vue.config.productionTip = false

// 在Vue 中注册事件总线
Vue.prototype.$bus = new Vue()

// 全局注册toast 插件
Vue.use(toast)

// 解决移动端300ms 延迟
FastClick.attach(document.body)

// 使用图片懒加载
Vue.use(VueLazyload, {
    loading: require('assets/imgs/loadimage.jpg')
})

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')