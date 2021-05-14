<template>
    <div>
        <h2 class="title">{{message}}</h2>
    </div>
</template>

<script>
export default {
    name: 'App',
    data () {
        return {
            message: 'Hello Webpack'
        }
    }
}
</script>

<style scoped>
    .title {
        color: green;
    }
</style>