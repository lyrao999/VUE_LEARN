<template>
  <div class="wrapper" ref="scroll">
    <div class="content">
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
  methods: {
    // better-scroll 提供的函数scrollTop(x, y, duration)，
    // 可以使better-scroll 控制的滚动区域的内容滚动到指定的x，y 坐标位置，第三参数是指多少毫秒完成滚动效果
    bsScrollTo(x, y, duration = 300) {
      this.bs.scrollTo(x, y, duration);
    },
  },
  mounted() {
    this.bs = new BScroll(this.$refs.scroll, {
      click: true,
    });
  },
  updated() {
    // 解决better-scroll 因为图片没有下载完导致的滚动条高度不够，无法浏览全部内容的问题。
    // 原因是better-scroll 初始化是在dom 加载后执行，此时图片没有下载完成，导致滚动条高度计算不准确。
    // 利用图片的complete 属性进行判断，当所有图片下载完成后再对scroll重新计算。
    bsImgLoad(this.bs, this.$refs.scroll, 100);
  },
  beforeDestroy() {
    this.bs.destroy();
  },
};
</script>