<template>
  <div id="app">
    <h2>App 组件页面</h2>
    <router-link to="/home">home页面</router-link>
    <router-link to="/about">about页面</router-link>

    <!-- 1. 通过params 传参 -->
    <router-link :to="'/user/' + user">user页面</router-link>

    <!-- 2. 通过query 传参 -->
    <router-link :to="{ path: '/profile', query: { name: 'lisi', age: 18 } }"
      >profile页面</router-link>

    <router-view />

    <h2>底部版权信息</h2>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      user: "lisi"
    }
  }
}
</script>
