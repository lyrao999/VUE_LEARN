<template>
  <div id="app">
    <tab-bar>
      <tab-bar-item>
        <img src="" alt="" slot="icon" />
        <div slot="text">主页</div>
      </tab-bar-item>
      <tab-bar-item>
        <img src="" alt="" slot="icon" />
        <div slot="text">分类</div>
      </tab-bar-item>
      <tab-bar-item>
        <img src="" alt="" slot="icon" />
        <div slot="text">购物车</div>
      </tab-bar-item>
      <tab-bar-item>
        <!-- <img src="" alt="" slot="icon" /> -->
        <div slot="text">我的</div>
      </tab-bar-item>
    </tab-bar>
  </div>
</template>

<script>
import TabBar from "./components/tabbar/TabBar";
import TabBarItem from "cnps/tabbar/TabBarItem";

export default {
  name: "App",
  components: {
    TabBar,
    TabBarItem,
  },
};
</script>

<style>
@import "./assets/css/base.css";
</style>
