import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import getters from './getters'
import actions from './actions'
import moduleA from './modules/moduleA'

Vue.use(Vuex)

const state = {
    count: 10,
    students: [
        { id: 110, name: 'why', age: 18 },
        { id: 111, name: 'kobe', age: 20 },
        { id: 112, name: 'linux', age: 28 },
        { id: 113, name: 'bob', age: 14 },
    ],
    info: {
        name: 'lisi',
        age: 18
    }
}

const store = new Vuex.Store({
    // 一般会把store 中的属性进行模块化拆分
    state,
    mutations,
    actions,
    getters,
    // Vue 使用单一状态树，也就意味着很多状态都会交给Vuex 来管理
    // 当应用变得非常复杂时，store 对象就有可能变得相当臃肿
    // 为了解决这个问题，Vuex 允许我们将store 分割成模块，每个模块拥有自己的state、mutations、actions、getters、modules等
    modules: {
        a: moduleA
    }
})

export default store