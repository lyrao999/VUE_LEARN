<template>
  <h2 class="about">about 页面</h2>
</template>

<script>
export default {
  name: "About",
  created() {
    console.log("about created");
  },
  destroyed() {
    console.log("about destroyed");
  },
};
</script>

<style scoped>
.about {
  font-size: 40px;
  color: orangered;
}
</style>