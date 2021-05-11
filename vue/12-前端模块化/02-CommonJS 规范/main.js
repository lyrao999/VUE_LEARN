// CommonJS 需要node 环境才能解析，浏览器中并不能使用
// CommonJS 使用 module.exports 和 require 来实现导出和导入

const moduleA = require('./a')
    // 下面是使用对象结构来直接获取需要导入的变量
    // const { age, sex } = require('./a')

console.log(moduleA.age);
console.log(moduleA.sex);