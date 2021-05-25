import axios from "axios";

export function request(config) {
    // 创建axios 实例
    const ins = axios.create({
        baseURL: 'http://123.207.32.32:8000',
        timeout: 5000
    })

    // 为ins 实例添加请求拦截器
    ins.interceptors.request.use(config => {
        // 必须返回config，否则真正发送请求时会缺少config 报错
        return config;
    }, err => {
        console.log(err);
    })

    // 为ins 实例添加响应拦截器
    ins.interceptors.response.use(res => {
        // 必须返回一些响应信息，否则真正接收res 的地方就会是undefined。一般情况下，我们只需要data 中的数据就行
        return res.data;
    }, err => {
        console.log(err);
    })

    // 发送请求
    return ins(config)
}