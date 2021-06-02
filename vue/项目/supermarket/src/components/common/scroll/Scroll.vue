<template>
  <div ref="wrapper">
    <div>
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";
import { bsImgLoad } from "common/utils";

export default {
  name: "Scroll",
  data() {
    return {
      bs: null,
    };
  },
  props: {
    probeType: {
      type: Number,
      default: 0
    },
    pullUpLoad: {
      type: Boolean,
      default: false
    }
  },
  methods: { 
    initBScroll() {
      // 初始化better-scroll

      // 创建better-scroll 对象
      this.bs = new BScroll(this.$refs.wrapper, {
        click: true,
        probeType: this.probeType,
        pullUpLoad: this.pullUpLoad
      });

      // 监听滚动的位置
      this.bs.on('scroll', (position) => {
        this.$emit('scroll', position)
      })

      // 监听上拉事件
      this.bs.on('pullingUp', () => {
        this.$emit('pullingUp')

        // 监测到上拉刷新的动作之后，pullingUp 事件的消费机会只有一次，因此你需要调用 finishPullUp() 来告诉 BetterScroll 来提供下一次 pullingUp 事件的消费机会。
        this.bs.finishPullUp()

        // 关闭上拉加载功能，因为有时候上拉加载事件触发的过于频繁。在bsImgLoad 函数中调用 openPullUp() 函数开启上拉加载功能
        // this.bs.closePullUp()
      })
    },
    bsScrollTo(x, y, duration = 300) {
      // better-scroll 提供的函数scrollTop(x, y, duration)，
      // 可以使better-scroll 控制的滚动区域的内容滚动到指定的x，y 坐标位置，第三参数是指多少毫秒完成滚动效果
      this.bs.scrollTo(x, y, duration);
    },
  },
  mounted() {
    this.initBScroll()  
  },
  // updated() {
  //   // 解决better-scroll 因为图片没有下载完导致的滚动条高度不够，无法浏览全部内容的问题。
  //   bsImgLoad(this.bs, this.$refs.wrapper, 10);
  // },
  beforeDestroy() {
    this.bs.destroy();
  },
};
</script>