<template>
  <div id="app">
    <h2>-------------mutation相关----------------</h2>
    <h2>{{ $store.state.count }}</h2>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <button @click="addCount(5)">+5</button>
    <button @click="addCount(10)">+10</button>

    <h2>-------------getters相关----------------</h2>
    <h2>{{$store.getters.studentsover18}}</h2>
    <h2>{{$store.getters.studentsover18count}}</h2>
    <h2>{{$store.getters.studentinfo(20)}}</h2>

    
    <h2>---------------------------HelloWorld模块中对应的数据-------------------------</h2>
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
    // 通过$store.commit 函数来触发state 中数据的改变
    increment() {
      // 1. 普通的提交方式
      // this.$store.commit("increment")

      // 2. 特殊的提交方式
      this.$store.commit({
        type: 'increment'
      })
    },
    decrement() {
      this.$store.commit("decrement")
    },
    addCount(count) {
      // 1. 普通的提交方式
      // this.$store.commit("incrementCount", count)

      // 2. 特殊的提交方式
      this.$store.commit({
        type: 'incrementCount',
        count  // 此时count 会被封装成对象传过去
      })
    }
  },
};
</script>

<style>
</style>
