<template>
  <div id="app">
    <h1>我是网站标题</h1>

    <!-- 一、使用router-link 跳转路由 -->
    <!-- router-link 是vue-router 内置的组件，他默认会被渲染成一个 a 标签 -->
    <!-- router-link 有一些重要的属性：to、tag、replace、active-class -->
    <!-- 1. to 属性，用于指定跳转的路径 -->
    <!-- 2. tag 属性，用于指定router-link 最终渲染成什么标签 -->
    <!-- 3. replace 属性，不会留下history 记录，后退键不能返回到上一个页面中 -->
    <!-- 4. active-class 属性，当通过某一个 router-link 标签跳转路由后，这个router-link 标签会被自动加上 router-link-active 类名。但是这个类名太长，
        可以用active-class 属性的值替换这个类名。但是这种方式需要给每个router-link 添加active-class 属性，
        有一种统一修改router-link 中router-link-active 的方式：在创建router 对象时，加入 linkActiveClass 属性。但是会覆盖这里的active-class 属性。  -->
    <router-link to="/about" tag="button" replace active-class="active">切换到about页面</router-link>
    <router-link to="/helloworld" replace>切换到helloworld页面</router-link>

    <br />

    <!-- 二、通过代码跳转路由 -->
    <button @click="aboutBtn">切换到about页面</button>
    <button @click="hwBtn">切换到helloworld页面</button>

    <!-- router-view 也是vue-router 内置的组件，这个组件会根据当前网页的路径，动态渲染出不同的组件 -->
    <!-- 当路由切换时，切换的是router-view 挂载的组件，网页中其他内容不会发生改变 -->
    <router-view></router-view>

    <h2>我是底部的版权信息</h2>
  </div>
</template>

<script>
export default {
  name: "App",
  methods: {
    // $router 是之前创建的 router 实例
    aboutBtn() {
      // this.$router.push("/about");  // 后退键可以返回上一个页面
      this.$router.replace("/about");  // 后退键不能返回
    },
    hwBtn() {
      // this.$router.push("/helloworld");
      this.$router.replace("/helloworld");
    },
  },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.active {
  color: #ff0000;
}
</style>
