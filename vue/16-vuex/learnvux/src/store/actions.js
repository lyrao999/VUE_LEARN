// 如果想要定义一些异步操作来改变state 中的数据，可以在actions 中定义。
// actions 类似于mutations，是用来替代mutations 进行异步操作的。
// 在actions 中对state 中的数据进行异步操作，数据的变化在devtools 中可以检测到
export default {
    // context：上下文，在这里是 store 的引用
    updateInfoA(context) {
        setTimeout(() => {
            // 注意：在这里还是调用的commit，触发mutations 中的方法去修改state 中的数据
            // 在组件中可以调用$store.dispatch 方法，参数是actions 中的方法名，以此来触发actions 中的对应方法
            context.commit('updateInfoAge')
            console.log(context)
        }, 1000)
    },
    // action 中的方法也可以接受参数
    updateInfoB(context, payload) {
        console.log(payload);
    },
    updateInfoC(context, payload) {
        // 可以返回一个promise 对象，在组件中调用$store.dispatch 的返回值就是这个promise 对象
        // 这样就可以在组件中调用then 方法，查看异步操作的结果
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log(payload)
                resolve('查看异步操作的结果')
            }, 1000)
        })
    }
}