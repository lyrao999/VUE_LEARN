import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        count: 10,
        students: [
            { id: 110, name: 'why', age: 18 },
            { id: 111, name: 'kobe', age: 20 },
            { id: 112, name: 'linux', age: 28 },
            { id: 113, name: 'bob', age: 14 },
        ]
    },
    // 想要改变state 的数据，在mutations 中定义这些操作，改变可以在devtools 中观察到，方便后期维护
    mutations: {
        increment(state) {
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
        }
    },
    actions: {

    },
    // 对state 中的数据进行一系列操作，从而得到一些数据，在getters 中定义这些操作
    getters: {
        // 获取年龄大于的 18 的学生信息
        studentsover18(state) {
            return state.students.filter(s => s.age > 18)
        },
        // 获取获取年龄大于的 18 的学生的个数（可以把getters 作为参数传入）
        studentsover18count(state, getters) {
            return getters.studentsover18.length
        },
        // 获取大于指定年龄的学生信息，返回一个函数，可以在模板中参入参数
        studentinfo(state) {
            return age => state.students.filter(stu => stu.age > age)
        }
    },
    modules: {}
})

export default store