// 定义一个变量作为A 模块的出口
var moduleA = (function() {
    var flag = true
    var age = 18

    let obj = {
        flag,
        age
    }

    return obj
})()