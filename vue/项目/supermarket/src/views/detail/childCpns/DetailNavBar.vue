<template>
    <div class="detail">
        <nav-bar>
          <div class="backBtn" slot="left" @click="backClick">
            <img src="~assets/imgs/fanhui.png" alt="">
          </div>
          <div class="detail-nav-bar" slot="center">
            <span class="item-title" :class="{active: curIndex === index}" v-for="title, index in titles" :key="index" @click="titleClick(index)">
              {{title}}
            </span>
          </div>
        </nav-bar>
    </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'

export default {
  name: 'DetailNavBar',
  components: {
    NavBar
  },
  data() {
    return {
      titles: ['商品', '参数', '评论', '推荐'],
      curIndex: 0
    }
  },
  methods: {
    titleClick(index) {
      this.curIndex = index
    },
    backClick() {
      this.$router.back()
    }
  }
}
</script>

<style scoped>
.backBtn img {
  width: 30px;
  margin-top: 8px;
}

.detail-nav-bar {
  display: flex;
  flex-wrap: nowrap;
}

.item-title {
  flex: 1;
}

.active {
  color: var(--color-high-text);
}
</style>