import Vue from 'vue'
import App from './App'

import axios from 'axios'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App)
})


// 1. 不带参数请求
axios({
  url: 'http://123.207.32.32:8000/home/multidata'
}).then(result => console.log(result))

axios.get('http://123.207.32.32:8000/home/multidata').then(result => console.log(result))


// 2. 带参数请求
axios({
  url: 'http://123.207.32.32:8000/home/data?type=sell&page=5'
}).then(result => console.log(result))

axios({
  url: 'http://123.207.32.32:8000/home/data',
  params: {
    type: 'sell',
    page: 1
  }
}).then(result => console.log(result))

axios.get('http://123.207.32.32:8000/home/data', {
  type: 'sell',
  page: 1
}).then(result => console.log(result))


// 3. 发送并发请求（axios 实现了 Promise.all）
const requests = [
  axios.get('http://123.207.32.32:8000/home/multidata'),
  axios.get('http://123.207.32.32:8000/home/data?type=sell&page=5')
]

// 获取到的是一个包含结果的数组
axios.all(requests).then(result => console.log(result))

// 通过axios 提供的方法直接拿到数组中的元素
axios.all(requests).then(axios.spread((res1, res2) => {
  console.log(res1);
  console.log(res2);
}))


// 全局配置 - 在实际开发中，很多参数都是固定的，这是我们可以进行一些抽取，或者使用axios 的全局配置
axios.defaults.baseURL = 'http://123.207.32.32:8000'
axios.defaults.timeout = 5000  // 超时时间，单位毫秒

axios.get('/home/multidata').then(res => console.log(res))


// 根据需求创建axios 实例
// 有时接口的baseURL 不一样，或者有些请求需要设置header 头等，这时就不能统一使用全局的配置项了
// 实际开发中，实例axios 实例更多
const ins1 = axios.create({
  baseURL: 'http://123.207.32.32:8000',
  timeout: 5000
})

ins1({
  url: '/home/multidata'
}).then(res => console.log(res))


// 使用自己封装的网络模块
import request from './network/request'
request({
  url: '/home/multidata'
}).then(res => console.log(res))
  .catch(err => console.log(err))