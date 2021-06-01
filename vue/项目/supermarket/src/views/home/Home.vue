<template>
  <div id="home">
    <nav-bar class="home-nav" />

    <scroll class="content" ref="scroll">
      <home-swiper :banners="banners" />
      <home-recommend :recoms="recommends" />
      <feature-view />
      <tab-control
        class="tab-contorl"
        :titles="['流行', '新款', '精选']"
        @showGoods="changTab"
      />
      <goods-list :goods="goodsList" />
    </scroll>

    <!-- native 修饰符直接监听组件事件 -->
    <back-top @click.native="backClick" />
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import Scroll from "components/common/scroll/Scroll";

import TabControl from "components/content/tabControl/TabControl";
import GoodsList from "components/content/goods/GoodsList";
import BackTop from "components/content/backTop/BackTop.vue";

import HomeSwiper from "./childCpn/HomeSwiper";
import HomeRecommend from "./childCpn/HomeRecommend";
import FeatureView from "./childCpn/FeatureView";

import { getHomeMutilData, getHomeGoods } from "network/home";

export default {
  name: "Home",
  data() {
    return {
      banners: [],
      recommends: [],
      goods: {
        sales: { page: 0, list: [] },
        new: { page: 0, list: [] },
        recommend: { page: 0, list: [] },
      },
      goodsType: "sales",
    };
  },
  components: {
    NavBar,
    HomeSwiper,
    HomeRecommend,
    FeatureView,
    TabControl,
    GoodsList,
    Scroll,
    BackTop,
  },
  created() {
    this.getMutilData();

    this.getGoods("sales");
    this.getGoods("new");
    this.getGoods("recommend");
  },
  methods: {
    /**
     * @Author: flydreame
     * @Date: 2021-06-01 13:25:12
     * @Desc: 网络请求相关
     */
    getMutilData() {
      getHomeMutilData().then((res) => {
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      });
    },
    getGoods(type) {
      const page = this.goods[type].page + 1;
      getHomeGoods(type, page).then((res) => {
        this.goods[type].list.push(...res.goods.data);
        this.goods[type].page = page;
      });
    },

    /**
     * @Author: flydreame
     * @Date: 2021-06-01 13:25:33
     * @Desc: 事件监听相关
     */
    changTab(type) {
      this.goodsType = type;
    },
    backClick() {
      this.$refs.scroll.bsScrollTo(0, 0);
    },
  },
  computed: {
    goodsList() {
      return this.goods[this.goodsType].list;
    },
  },
};
</script>

<style scoped>
#home {
  padding-top: 44px;
}

.home-nav {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 9;
  /* 使用css 变量 --color-tint */
  background-color: var(--color-tint);
  color: #fff;
}

/* .tab-contorl {
  position: sticky;
  top: 44px;
  z-index: 8;
} */

.content {
  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
  overflow: hidden;
}
</style>