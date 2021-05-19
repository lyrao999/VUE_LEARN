<template>
  <div id="app">
    <h2>{{ $store.state.count }}</h2>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <hello-world></hello-world>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld";
import store from "./store";
export default {
  name: "App",
  store,
  components: {
    HelloWorld,
  },
  methods: {
    increment() {
      this.$store.commit("increment");
    },
    decrement() {
      this.$store.commit("decrement");
    },
  },
};
</script>

<style>
</style>
