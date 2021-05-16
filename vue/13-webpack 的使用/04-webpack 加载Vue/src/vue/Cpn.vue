<template>
  <div>
    <h2>Cpn 组件</h2>
    <h2 class="cpn">{{ message }}</h2>
  </div>
</template>

<script>
export default {
  name: "Cpn",
  data() {
    return {
      message: "组件data",
    };
  },
};
</script>

<style scoped>
.cpn {
  color: blue;
}
</style>