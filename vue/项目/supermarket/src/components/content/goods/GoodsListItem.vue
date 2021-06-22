<template>
    <div class="goods-list-item" @click="goodsItemClick">
       <img v-lazy="goodsItem.cover_url" :alt="goodsItem.title" :key="goodsItem.title" @load="imgLoaded">
       <div>
           <p>{{goodsItem.title}}</p>
           <span class="price">{{goodsItem.price}}</span>
           <span class="collect">{{goodsItem.collects_count}}</span>
        </div>
    </div>
</template>

<script>
export default {
    name: 'GoodsListItem',
    props: {
        goodsItem: {
            type: Object,
            default() {
                return {}
            }
        }
    },
    methods: {
        imgLoaded() {
            this.$bus.$emit('imgLoaded')
        },
        goodsItemClick() {
            this.$router.push('/detail/' + this.goodsItem.id)
        }
    }
}
</script>

<style scoped>
.goods-list-item {
    width: 48%;
    height: auto;
    margin: 4px 0;
    border: 1px solid #f9efff;
    border-radius: 4px;
    font-size: 14px;
}

.goods-list-item img{
    width: 100%;
    height: auto;
}

.price::before {
    content: "￥";
    color: var(--color-text);
}

.price { 
    margin: 6px 4px 0 0;
    color: var(--color-text);
}

.collect:before {
    content: '';
    display: inline-block;
    width: 16px;
    height: 16px;
    background: url(~assets/imgs/home/collect_icon.png) no-repeat;
    background-size: cover;
    vertical-align: bottom;
}
</style>