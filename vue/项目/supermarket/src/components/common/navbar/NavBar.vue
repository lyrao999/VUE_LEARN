<template>
    <div class="nav-bar">
        <div class="left"><slot name="left"></slot></div>
        <div class="center"><slot name="center">购物街</slot></div>
        <div class="right"><slot name="right"></slot></div>
    </div>
</template>

<script>
export default {
    name: 'NavBar'
}
</script>

<style scoped>
    .nav-bar {
        display: flex;
        height: 44px;
        line-height: 44px;
        font-size: 16px;
        text-align: center;
        box-shadow: 0 2px 2px rgba(0, 0, 0, .1);
    }

    .left,
    .right {
        width: 60px;
    }

    .center {
        flex-grow: 1;
    }
</style>