<template>
    <div class="detail">
        <detail-nav-bar></detail-nav-bar>
        <detail-swiper :swiperImages="detailGoods.pics_url" :coverImage="detailGoods.cover_url" />
    </div>
</template>

<script>
import {getGoodsDetail} from 'network/detail'
import DetailNavBar from './childCpns/DetailNavBar'
import DetailSwiper from './childCpns/DetailSwiper'

export default {
  name: 'Detail',
  components: {
    DetailNavBar,
    DetailSwiper
  },
  data() {
    return {
      detailGoods: {}
    }
  },
  created() {
    getGoodsDetail(this.$route.params.goodId).then(res => {
      console.log(res);
      this.detailGoods = res.goods
    })
  }
}
</script>

<style scoped>

</style>