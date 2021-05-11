// import 命令，用于加载a.js 文件，并从中输入变量。
// import 命令接受一对大括号，里面指定要从其他模块导入的变量名。
// 大括号里面的变量名，必须与被导入模块（a.js）对外接口的名称相同。

// 注意：
// 1. import 后面的from 指定模块文件的位置，可以是相对路径，也可以是绝对路径。
// 2. 如果多次重复执行同一句import 语句，那么只会执行一次，而不会执行多次。
// 3. import 语句会执行所加载的模块。例如：import 'lodash'; 仅仅执行lodash 模块，但是不输入任何值。
// 4. import 命令具有提升效果，会提升到整个模块的头部，首先执行。
// 5. 由于import 是静态执行，所以不能使用表达式和变量，这些只有在运行时才能得到结果的语法结构。




// import { age, sum } from './a.js'

// console.log(age);
// sum(1, 2);



// 如果想为输入的变量重新取一个名字，import命令要使用as关键字，将输入的变量重命名。
// import { age as IAge, sum as ISum } from './a.js'

// console.log(IAge);
// ISum(1, 2);



// 除了指定加载某个输出值，还可以使用整体加载，即用星号（*）指定一个对象，所有输出值都加载在这个对象上面。
// import * as moduleA from './a.js'

// console.log(moduleA.age);
// moduleA.sum(1, 2);



// import 命令加载默认接口时，可以为该接口指定任意名字。
// 需要注意的是，这时import命令后面，不使用大括号。
// import customName from './a.js'

// customName(1, 2)



// 可以在一条import 语句中，同时导入默认方法和其他接口
// import customName, { age, sum } from './a.js'
import customName, * as mA from './a.js'

console.log(mA.age)
mA.sum(1, 2)
customName(1, 2)