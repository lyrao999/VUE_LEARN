<template>
    <div class="tab-control">
        <div v-for="(item, index) in titles" class="tab-control-item" :key="index">
            <span :class="{active: curIndex === index}" @click="spanClick(index, item)">{{item}}</span>
        </div>
    </div>
</template>

<script>
export default {
    name: 'TabControl',
    props: {
        titles: {
            type: Array,
            default() {
                return []
            }
        }
    },
    data() {
        return {
            curIndex: 0
        }
    },
    methods: {
        spanClick(index) {
            this.curIndex = index
            this.$emit('showGoods', index)
        }
    }
}
</script>

<style scoped>
    .tab-control {
        display: flex;
        height: 40px;
        line-height: 40px;
        font-size: 15px;
        text-align: center;
        background-color: #fff;
    }

    .tab-control-item {
        flex-grow: 1;
    }

    .tab-control-item span {
        padding: 0 3px 3px;
        margin: 0 20px;
    }

    .active {
        color: var(--color-high-text);
        border-bottom: 2px solid var(--color-text);
    }
</style>