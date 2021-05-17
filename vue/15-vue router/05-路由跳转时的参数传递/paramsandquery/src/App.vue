<template>
  <div id="app">
    <h2>App 组件页面</h2>
    <router-link to="/home">home页面</router-link>
    <router-link to="/about">about页面</router-link>

    <!-- 1. 通过params 传参 -->
    <router-link :to="'/user/' + user">user页面</router-link>
    <button @click="userBtn">点击跳转到user页面</button>

    <!-- 2. 通过query 传参 -->
    <router-link :to="{ path: '/profile', query: { name: 'lisi', age: 18 } }"
      >profile页面</router-link
    >
    <button @click="profileBtn">点击跳转到profile页面</button>

    <router-view />

    <h2>底部版权信息</h2>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      user: "lisi",
    };
  },
  methods: {
    userBtn() {
      let pathname = "/user/" + this.user;
      // $route 是当前页面对应的路由组件对象
      if (this.$route.path !== pathname) {
        // $router 是 /src/router/index.js 中创建的vueRouter 对象
        console.log(this.$router);
        this.$router.push(pathname);
      }
    },
    profileBtn() {
      this.$router.push({
        path: "/profile",
        query: {
          name: "lisi",
          age: 18,
        },
      });
    },
  },
};
</script>
