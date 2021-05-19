<template>
  <div id="app">
    <router-view></router-view>
    <MainTabBar />
  </div>
</template>

<script>
import MainTabBar from 'cpns/tabbar/MainTabBar'

export default {
  name: "App",
  components: {
    MainTabBar
  },
};
</script>

<style>
/* 使用@import 导入css 模块 */
@import "./assets/css/base.css";
</style>
