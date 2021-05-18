<template>
  <div>
    <h2 class="home">home 页面</h2>

    <router-link to="/home/news">消息</router-link>
    <router-link to="/home/tasks">任务</router-link>

    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "Home",
};
</script>

<style lang="postcss" scoped>
.home {
  font-size: 30px;
  color: orange;
}
</style>