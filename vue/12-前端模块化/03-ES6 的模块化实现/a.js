// ES6 中，一个模块就是一个独立的文件。该文件内部的所有变量，外部无法获取。
// 如果你希望外部能够读取模块内部的某个变量，就必须使用export 关键字输出该变量。

// 注意：
// 1. export 语句输出的接口，与其对应的值是动态绑定关系，即通过该接口，可以取到模块内部实时的值
// 2. export 命令可以出现在模块的任何位置，只要处于模块顶层就可以。如果处于块级作用域内，就会报错

// 可以在定义时直接导出
// export let age = 18
// export function sum(a, b) { console.log(a + b); }

// 也可以export 命令后面，使用大括号指定所要输出的一组变量，和上面的方式是等价的
let age = 18
function sum(a, b) { console.log(a + b) }

export {
    age,
    sum
}



// 通常情况下，export 输出的变量就是本来的名字，但是可以使用as 关键字重命名。
// let age = 18
// function sum(a, b) { console.log(a + b) }

// export {
//     age as EAge,
//     sum as ESum
// }



// 从前面的例子可以看出，使用import命令的时候，用户需要知道所要加载的变量名或函数名，否则无法加载。
// 为了给用户提供方便，让他们不用阅读文档就能加载模块，就要用到export default命令，为模块指定默认输出。
// export default 命令用于指定模块的默认输出。显然，一个模块只能有一个默认输出，因此export default 命令只能使用一次。
export default function (a, b) { console.log(a + b) }

