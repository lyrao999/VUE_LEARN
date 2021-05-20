## 什么是Vuex？
Vuex 是一个专为 Vue.js 应用程序开发的状态管理模式。它采用集中式存储管理应用的所有组件的状态，并以相应的规则保证状态以一种可预测的方式发生变化。Vuex 也集成到 Vue 的官方调试工具 devtools extension (opens new window)，提供了诸如零配置的 time-travel 调试、状态快照导入导出等高级调试功能。

## 什么状态是需要我们在多个组件间共享的呢？

- 用户的登录状态、名称、头像、地理位置等

- 商品的收藏、购物车中的物品

- 通过vuex，这些信息可以统一的保存和管理，而且还是响应式的

## Mutation 状态更新

- Vuex 的store 状态的更新唯一方式：提交 mutation

- mutation 主要包裹两个部分:

    - 字符串的事件类型（type）

    - 一个回调函数（handler），该回调函数的第一个参数就是state

## Mutation 常量类型

    - 在mutation 中，我们定义了很多事件类型（就是方法名称）

    - 当veux 管理的状态越来越多，需要更新状态的情况越来越多，mutation 中的方法就会越来越多

    - 因为在组件中commit 时需要用到这些方法，有时会出现方法名写错的情况

    - 所以建议新建一个mutation_types 文件，在其中把使用到的方法名都定义成常量，然后在store/index.js 中导入使用
