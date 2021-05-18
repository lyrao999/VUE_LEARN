- keep-alive 是Vue 内置的一个组件，可以使**被包含**的组件（不包括包含组件的子组件）保留状态，或避免重新渲染。

    - 它有两个非常重要的属性：

    - include - 值可以是字符串（组件名）或者正则表达式，只有匹配的组件会被缓存

    - exclude - 值可以是字符串（组件名）或者正则表达式，匹配到的组件不会被缓存

- 生命周期函数activated 可以配合keep-alive 使用，当组件包含在keep-alive 中时，activated 函数会在路由跳转到该组件时被调用

- 组件内守卫函数beforeRouteLeave 函数，会在路由跳转前触发，结合中时activated 函数可以实现保留组件跳转前的状态的功能 

- router-view 是Vue 内置的组件，实质是一个占位符。如果嵌套在keep-alive 中，所有挂载在这里的视图组件都会被缓存

    - 可以在每个视图函数中添加created 和 destroyed 来验证 
