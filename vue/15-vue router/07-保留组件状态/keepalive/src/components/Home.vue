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
  // 生命周期函数
  created() {
    // console.log(this.$route);
    console.log('created');
  },
  mounted() {
    console.log('mounted');
  },
  // 配合keep-alive 组件使用，当前组件在父组件中被keep-alive 包裹，且被路由时调用
  activated() {
    console.log('activated');
    if (this.path && this.path !== '/home/news') {
      this.$router.push(this.path)
    }
  },
  destroyed() {
    // console.log(this.$route);
    console.log('destroyed');
  },
  // 组件内守卫，在路由即将跳转时使用
  beforeRouteLeave(to, from, next) {
    console.log('beforeRouteLeave');
    // console.log(to);
    // console.log(from);
    // console.log(this.$route);
    this.path = this.$route.path
    next()
  }
};
</script>

<style scoped>
.home {
  font-size: 30px;
  color: orange;
}
</style>