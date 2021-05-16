import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

// 这里的App 对象中已经不包含组件模板template 了，全部通过vue-template-compiler 模块转换成了render 函数
// 所以可以使用runtime-only 版本
console.log(App);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  // render: h => h(App)
  // 上面代码使用的是箭头函数，等价于下面这种写法
  // render: function (createElement) { return createElement(App) }

  // 1. 基础用法：createElemrnt('标签名', {标签的属性}, [标签内容])
  // render: createElement => createElement('h2', { class: 'test' }, ['测试vue 实例的render 属性',
  //   createElement('h5', ['h5 标签'])])

  // 2. 传入组件对象
  render: function (creatElement) { return creatElement(App) }
})

