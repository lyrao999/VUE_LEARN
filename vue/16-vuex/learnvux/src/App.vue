<template>
  <div id="app">
    <h2>-------------mutation相关----------------</h2>
    <h2>{{ $store.state.count }}</h2>

    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <button @click="addCount(5)">+5</button>
    <button @click="addCount(10)">+10</button>

    <h2>-------------getters相关----------------</h2>
    <h2>{{ $store.getters.studentsover18 }}</h2>
    <h2>{{ $store.getters.studentsover18count }}</h2>
    <h2>{{ $store.getters.studentinfo(20) }}</h2>

    <h2>-------------actions相关----------------</h2>
    <h2>name：{{ $store.state.info.age }}</h2>
    <button @click="updateInfo">修改info中age属性</button>

    <h2>-------------modules相关----------------</h2>
    <h4>-------------actions相关----------------</h4>
    <!-- 访问a 模块中的变量 -->
    <h2>{{ $store.state.a.name }}</h2>
    <button @click="updateModuleName">修改moduleA中的name</button>

    <h4>-------------getters相关----------------</h4>
    <h2>{{ $store.getters.appendName1 }}</h2>
    <h2>{{ $store.getters.appendName2 }}</h2>
    <h2>{{ $store.getters.appendName3 }}</h2>

    <h2>-------------actions相关----------------</h2>
    <button @click="asyncupdateInfo">异步修改moduleA中name</button>

    <h2>
      ---------------------------HelloWorld模块中对应的数据-------------------------
    </h2>
    <hello-world></hello-world>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld";
import store from "./store";
import { INCREMENT } from "./store/mutation-types";

export default {
  name: "App",
  store,
  components: {
    HelloWorld,
  },
  methods: {
    // --------------------------- mutations 相关 -------------------------------------
    // 通过$store.commit 函数来触发state 中数据的改变，第一个参数是mutations 中定义的方法名（mutation 类型）
    increment() {
      // Vuex建议参数使用mutation 常量类型，即使用mutation-types 文件中定义的常量

      // 1. 普通的提交方式
      // this.$store.commit(INCREMENT)

      // 2. 特殊的提交方式
      this.$store.commit({
        type: INCREMENT,
      });
    },
    decrement() {
      this.$store.commit("decrement");
    },
    addCount(count) {
      // 1. 普通的提交方式
      // this.$store.commit("incrementCount", count)

      // 2. 特殊的提交方式
      this.$store.commit({
        type: "incrementCount",
        count, // 此时count 会被封装成对象传过去
      });
    },

    // --------------------------- actions 相关 -------------------------------------
    // 通过$store.diapatch 函数来触发actions 中数据的改变，第一个参数是actions 中定义的方法名
    updateInfo() {
      this.$store.dispatch("updateInfoA");
      // 可以传入一个参数
      this.$store.dispatch("updateInfoB", "参数B");

      // 如果actions 中的方法返回一个promise 对象，在这里可以接收到这个promise 对象
      // 接下来就可以调用promise 的then、catch 等方法
      this.$store
        .dispatch("updateInfoC", "参数C")
        .then((value) => console.log(value));
    },

    // --------------------------- modules 相关 -------------------------------------
    updateModuleName() {
      this.$store.commit("updateName");
    },
    asyncupdateInfo() {
      this.$store
        .dispatch("updateName4", "传入moduleA中actions 方法的参数")
        .then((value) => console.log(value));
    },
  },
};
</script>

<style>
</style>
