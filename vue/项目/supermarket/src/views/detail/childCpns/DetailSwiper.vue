<template>
    <div class="detail-swiper">
        <swiper v-if="isShowSwiper">
            <swiper-item v-for="item in swiperImages" :key="item.index">
                <img :src="item" alt="">
            </swiper-item>
        </swiper>
        <div v-else>
            <img :src="coverImage" alt="">
        </div>
    </div>
</template>

<script>
import {Swiper, SwiperItem} from 'components/common/swiper'

export default {
    name: 'DetailSwiper',
    components: {
        Swiper,
        SwiperItem
    },
    props: {
        swiperImages: {
            type: Array,
            default() {
                return []
            }
        },
        coverImage: {
            type: String,
            default: ''
        }
    },
    computed: {
        isShowSwiper() {
            return this.swiperImages.length > 0
        }
    }
}
</script>

<style scoped>
.detail-swiper {
    height: 300px;
    overflow: hidden;
}
</style>