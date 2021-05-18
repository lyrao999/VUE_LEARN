<template>
  <div>
    <h2 class="user">user 页面</h2>
    <h2>user: {{ userId }}</h2>
  </div>
</template>

<script>
export default {
  name: "User",
  computed: {
    userId() {
      // $route 是当前页面对应的路由对象，包含了当前路由的相关信息（当前路由路径、路径匹配规则、路径中使用的参数等）
      // console.log(this.$route);
      return this.$route.params.userId;
    },
  },
  activated() {
    console.log("user activated");
  },
  created() {
    console.log("user created");
  },
  destroyed() {
    console.log("user destroyed");
  },
};
</script>

<style scoped>
.about {
  font-size: 40px;
  color: orangered;
}
</style>