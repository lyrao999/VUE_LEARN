<template>
  <div class="tab-bar-item" @click="itemClick">
    <div>
      <div v-if="!isActive">
        <slot name="item-icon"></slot>
      </div>
      <div v-else>
        <slot name="item-icon-active"></slot>
      </div>
      <div :style="textColor">
        <slot name="text"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabBarItem",
  // 从父组件接收数据
  props: {
    path: String,
    activeColor: {
      type: String,
      default: 'orange'
    }
  },
  computed: {
    isActive() {
      return this.$route.path.indexOf(this.path) !== -1
    },
    textColor() {
      return this.isActive ? {color: this.activeColor} : {}
    }
  },
  methods: {
    itemClick() {
      this.$router.replace(this.path)
    }
  }
};
</script>

<style scoped>
.tab-bar-item {
  flex-grow: 1;
  text-align: center;
  font-size: 14px;
}

img {
  width: 24px;
  height: 24px;
  margin-top: 2px;
  margin-bottom: 2px;
  vertical-align: middle;
}
</style>