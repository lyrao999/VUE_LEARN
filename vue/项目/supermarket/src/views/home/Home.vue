<template>
  <div id="home">
    <nav-bar class="home-nav" ref="navBar"/>

    <tab-control class="tab-contorl"
                ref="fixedTabControl"
                :titles="['流行', '新款', '精选']"
                @showGoods="changTab"
                v-show="tabControlFixed" />

    <scroll class="content"
          ref="scroll"
          :probe-type="3"
          :pullUpLoad="true"
          @scroll="contentScroll"
          @pullingUp="loadMore">
      <home-swiper :banners="banners" />
      <home-recommend :recoms="recommends" />
      <feature-view />
      <tab-control
        ref="scrollTabControl"
        :titles="['流行', '新款', '精选']"
        @showGoods="changTab"
      />
      <goods-list :goods="goodsList" />
    </scroll>
  
    <!-- native 修饰符直接监听组件事件 -->
    <back-top @click.native="backClick" v-show="isShowBackTop"/>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import Scroll from "components/common/scroll/Scroll";

import TabControl from "components/content/tabControl/TabControl";
import GoodsList from "components/content/goods/GoodsList";
import BackTop from "components/content/backTop/BackTop.vue";

import HomeSwiper from "./childCpns/HomeSwiper";
import HomeRecommend from "./childCpns/HomeRecommend";
import FeatureView from "./childCpns/FeatureView";

import { getHomeMutilData, getHomeGoods } from "network/home";

import { debounce } from 'common/utils'

export default {
  name: "Home",
  data() {
    return {
      banners: [],
      recommends: [],
      goods: {
        sales: { page: 0, list: [] },
        new: { page: 0, list: [] },
        recommend: { page: 0, list: [] }
      },
      currentGoodsType: "sales",
      isShowBackTop: false,
      tabOffsetTop: 0,
      tabControlFixed: false
    }
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
  methods: {
    /**
     * @Author: flydreame
     * @Date: 2021-06-01 13:25:12
     * @Desc: 网络请求相关
     */
    getMutilData() {
      getHomeMutilData().then((res) => {
        this.banners = res.data.banner.list
        this.recommends = res.data.recommend.list
      })
    },
    getGoods(type) {
      const page = this.goods[type].page + 1
      getHomeGoods(type, page).then((res) => {
        this.goods[type].list.push(...res.goods.data)
        this.goods[type].page = page
      })
    },

    /**
     * @Author: flydreame
     * @Date: 2021-06-01 13:25:33
     * @Desc: 事件监听相关
     */
    changTab(index) {
      // 监听TabControl 组件内部点击事件，切换到对应tab 栏
      switch(index) {
        case 0: 
            this.currentGoodsType = 'sales'
            break
        case 1: 
            this.currentGoodsType = 'new'
            break
        case 2: 
            this.currentGoodsType = 'recommend'
      }
      this.$refs.scrollTabControl.curIndex = index
      this.$refs.fixedTabControl.curIndex = index
    },
    backClick() {
      // 监听backTop 组件的原生点击事件，控制滚动条回到顶部
      this.$refs.scroll && this.$refs.scroll.bsScrollTo(0, 0)
    },
    contentScroll(position) {
      // 监听better-scroll 滚动事件，控制BackTop 组件显示和隐藏
      this.isShowBackTop = position && Math.abs(position.y) >= 600

      // 监听better-scroll 滚动事件，控制TabControl 组件固定在顶部
      this.tabControlFixed = position && Math.abs(position.y) > this.tabOffsetTop - this.$refs.navBar.$el.clientHeight + this.$refs.scrollTabControl.$el.clientHeight
    },
    loadMore() {
      // 上拉加载更多
      this.getGoods(this.currentGoodsType)

      // 提供下一次 pullingUp 事件的消费机会
      this.$refs.scroll.finishPullingUp()
    }
  },
  computed: {
    goodsList() {
      return this.goods[this.currentGoodsType].list
    }
  },
  created() {
    this.getMutilData()

    this.getGoods("sales")
    this.getGoods("new")
    this.getGoods("recommend")
  },
  mounted() {
    // 图片加载完成的事件监听
    const refresh = debounce(this.$refs.scroll.refresh, 50)
    this.$bus.$on('imgLoaded', () => {
      refresh()
    })
  },
  updated() {
    !this.tabOffsetTop && !this.tabOffsetTop ? this.tabOffsetTop = this.$refs.scrollTabControl.$el.offsetTop : this.tabOffsetTop
  }
}
</script>

<style scoped>
/* 在使用浏览器原生滚动时，为了让navBar 不跟随滚动而设置的样式 */
/* #home {
  padding-top: 44px;
} */

.home-nav {
  /* 在使用浏览器原生滚动时，为了让navBar 不跟随滚动而设置的样式 */
  /* position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 9; */
  /* 使用css 变量 --color-tint */
  background-color: var(--color-tint);
  color: #fff;
}

.tab-contorl {
  position: relative;
  z-index: 9;
  width: 100%;
}

.content {
  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
  overflow: hidden;
}
</style>