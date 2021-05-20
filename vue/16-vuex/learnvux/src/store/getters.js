// 如果想通过对state 中的数据进行某些操作，从而得到一些数据，这些操作在getters 中定义
export default {
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
}