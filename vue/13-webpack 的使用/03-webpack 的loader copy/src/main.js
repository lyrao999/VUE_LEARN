import { add, mul } from './js/mayhUtils.js'

add(1, 2);
mul(2, 4);

// 依赖css 文件
require('./css/normal.css')

// 依赖less 文件
require('./css/special.less')

document.writeln('webpack 练习')
