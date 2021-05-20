// Vuex 允许我们将store 分割成模块，每个模块拥有自己的state、mutations、actions、getters、modules等
export default {
    state: {
        name: 'xiaolizi'
    },
    mutations: {
        // 这里的方法最好不要与根目录下的方法同名，应为在组件中也是通过 $store.commit 来触发的
        // 使用方法和根目录下mutations 中方法一样
        updateName(state) {
            state.name = 'lisi'
        }
    },
    getters: {
        // 使用方法和根目录下getters 中方法一样，不过多了一个参数：
        appendName1(state) {
            return state.name + '01'
        },
        appendName2(state, getters) {
            return getters.appendName1 + '02'
        },
        // mudules 中的getters 方法多了一个参数：rootState，可以通过它来获取顶层state 中的数据
        appendName3(state, getters, rootState) {
            console.log(rootState);
            return getters.appendName2 + rootState.count
        },
    },
    actions: {
        // 注意：这里只能commit moduleA 中的mutations 方法
        // 其他操作与顶层actions 方法一致
        updateName4(context, payload) {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    console.log(payload);
                    context.commit('updateName')
                    resolve('异步修改moduleA 中name 完成')
                }, 1000)
            })
        }
    }
}