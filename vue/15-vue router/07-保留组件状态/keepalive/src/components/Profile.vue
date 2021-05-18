<template>
  <div>
    <h2>配置页面</h2>
    <ul>
      <li v-for="(value, key, index) in $route.query" :key="value">
        {{ index }} - {{ key }} - {{ value }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Profile",
  created() {
    console.log("Profile created");
  },
  destroyed() {
    console.log("Profile destroyed");
  },
};
</script>