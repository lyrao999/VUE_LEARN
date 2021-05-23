// 实际开发中会将网络请求封装成模块，然后在组件中使用我们自己封装的模块。
// 这样便于后期维护，以及应对第三方模块的更换

import axios from "axios";

export default function request(config) {
    // 1. 创建axios 实例
    const ins = axios.create({
        baseURL: 'http://123.207.32.32:8000',
        timeout: 5000
    })

    // 2. 为ins 实例添加请求拦截器
    ins.interceptors.request.use(config => {
        console.log(config);

        // 请求拦截的作用
        // 1. config 中的一些信息（比如header）不符合服务器的要求，可以在这里修改
        // 2. 每次发送网络请求时，希望在界面显示一个请求的图标等
        // 3. 判断某些网络请求（比如登录），是否携带一些特殊的信息
        return config;  // 必须返回config，否则真正发送请求时会缺少config 报错
    }, err => {
        console.log(err);
    })

    // 3. 为ins 实例添加响应拦截器
    ins.interceptors.response.use(res => {
        // 打印res，可以发现请求响应中包含了太多信息，其中有一些是axios 加上去。
        // 一般情况下，我们只需要data 中的数据就行
        console.log(res);

        return res.data;  // 必须返回一些响应信息，否则真正接收res 的地方就会是undefined
    }, err => {
        console.log(err);
    })

    // 4. 发送请求
    return ins(config)
}