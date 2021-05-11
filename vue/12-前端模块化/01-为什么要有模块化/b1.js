// 定义一个变量作为B 模块的出口
var moduleB = (function() {
    var flag = false
    var sex = 'male'

    var obj = {
        flag,
        sex
    }
    return obj
})()