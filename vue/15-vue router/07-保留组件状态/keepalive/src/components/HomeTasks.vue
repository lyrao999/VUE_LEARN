<template>
  <div>
    <ul>
      <li>任务1</li>
      <li>任务2</li>
      <li>任务3</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "HomeTasks",
  created() {
    console.log("HomeTasks created");
  },
  destroyed() {
    console.log("HomeTasks destroyed");
  },
};
</script>