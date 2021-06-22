import Toast from './Toast'

const toastObj = {}

toastObj.install = function(Vue) {
    // 注册插件时，会自动调用插件的install函数，并把Vue对象作为参数传进来

    // 1. 创建组件构造器
    const toastConstructor = Vue.extend(Toast)
        // 2. 根据组件构造器，创建组件对象
    const toast = new toastConstructor()
        // 3. 将组件对象挂载到元素上
    toast.$mount(document.createElement('div'))
        // 4. 将toast 写入DOM，toast.$el 对应的是div 元素
    document.body.appendChild(toast.$el)
        // 5. 将toast 对象写入Vue 原型
    Vue.prototype.$toast = toast
}

export default toastObj