<template>
  <div>
    <h2>{{ count }}</h2>
    <h2>{{ age }}</h2>
    <h2>{{ $store.getters.studentsover18 }}</h2>
    <h2>{{ $store.getters.studentsover18count }}</h2>
    <h2>{{ $store.getters.studentinfo(20) }}</h2>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
    };
  },
  computed: {
    // 在模板中通过计算属性获取state 中的数据
    count() {
      return this.$store.state.count;
    },
    age() {
      return this.$store.state.info.age;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
