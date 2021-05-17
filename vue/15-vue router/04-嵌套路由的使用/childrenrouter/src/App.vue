<template>
  <div id="app">
    <router-link to="/home">
      <img src="./assets/logo.png" />
    </router-link>

    <router-link to="/helloworld">helloworld页面</router-link>
    <router-link to="/about">about页面</router-link>
    <router-link :to="'/user/' + user">user页面</router-link>
    <router-view />
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
</style>
