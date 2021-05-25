<template>
    <div id="home">
        <nav-bar class="home-nav"></nav-bar>
        <home-swiper :banners="banners" />
        <home-recommend :recoms="recommends" />
    </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
import HomeSwiper from './childCpn/HomeSwiper'
import HomeRecommend from './childCpn/HomeRecommend'
import { getHomeMutilData } from 'network/home'

export default {
    name: 'Home',
    data() {
        return {
            banners: [],
            recommends: []
        }
    },
    components: {
        NavBar,
        HomeSwiper,
        HomeRecommend
    },
    created() {
        getHomeMutilData().then(res => {
            this.banners = res.data.banner.list
            this.recommends = res.data.recommend.list
        })
    }
}
</script>

<style scoped>
    .home-nav {
        /* 使用css 变量 --color-tint */
        background-color: var(--color-tint);
        color: #fff;
    }
</style>