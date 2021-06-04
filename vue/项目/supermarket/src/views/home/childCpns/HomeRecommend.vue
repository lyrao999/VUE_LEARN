<template>
    <div class="recom">
        <div v-for="item in recoms" :key="item.index" class="recom-item">
            <a :href="item.link">
                <img :src="item.image" alt="">
                <div>{{item.title}}</div>
            </a>
        </div>
    </div>
</template>

<script>
export default {
    name: 'HomeRecommend',
    props: {
        recoms: {
            type: Array,
            default() {
                return []
            }
        }
    }
}
</script>

<style scoped>
    .recom {
        display: flex;
        padding: 10px 0;
        border-bottom: 10px solid #eee;
        text-align: center;
        font-size: 12px;
    }

    .recom-item {
        flex-grow: 1;
    }

    .recom-item img {
        width: 70px;
        height: 70px;
        padding-bottom: 8px;
    }
</style>