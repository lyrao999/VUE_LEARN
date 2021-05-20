import * as types from './mutation-types'

// 想要改变state 的数据，在mutations 中定义这些操作，改变可以在devtools 中观察到，方便后期维护
// Vuex 要求我们的mutations 中的方法必须是同步方法，不然devtools 可能检测不到
export default {
    // Vuex 建议使用常量定义这些方法，在组件中commit 时同样使用这些常量，避免方法名出错
    [types.INCREMENT](state) {
        state.count++
    },
    decrement(state) {
        state.count--
    },
    // 可以自定义参数，参数可以从模块中传入（参数被称为mutation 的载荷：payload）
    // 只能传入一个参数，多个参数可以放入对象中传入
    incrementCount(state, payload) {
        // 1. 使用普通提交方式获取到的参数 是一个数值，此时参数名使用count 就行
        // state.count += count

        // 2. 使用特殊提交方式，获取到的参数 是一个对象，此时把参数名改为payload 更合适
        console.log(payload)
        state.count += payload.count
    },
    updateInfoAge(state) {
        state.info.age = 20
    }
}