// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})

// 在Vue实例中使用template属性，必须使用runtime-only版本的Vue，原因如下：

// runtime-compiler
// template -> ast -> render -> vm -> ui

// runtime-only （性能更高；更轻量）
// render -> vm -> ui


// 由上可知，runtime-compiler 版本多了前面两个功能
// 1. 把组件模板template 解析成ast（抽象语法树）
// 2. 把ast 编译成render 函数
// 3. 通过render 函数生成virtual dom（虚拟DOM）
// 4. 最后把virtual dom 渲染到页面上

