<template>
  <div id="app">
    <!-- <router-link to="/about" tag="button" replace active-class="active"
      >切换到about页面</router-link
    >
    <router-link to="helloworld" replace>切换到helloworld页面</router-link> -->

    <button @click="aboutBtn">切换到about页面</button>
    <button @click="hwBtn">切换到helloworld页面</button>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
  methods: {
    aboutBtn() {
      // this.$router.push("/about");
      this.$router.replace("/about");
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
