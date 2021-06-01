<template>
    <div class="wrapper" ref="scroll">
        <div class="content">
            <slot></slot>
        </div>
    </div>
</template>

<script>
import BScroll from 'better-scroll'

export default {
    name: 'Scroll',
    data() {
        return {
            bs: null
        }
    },
    mounted() {
        this.bs = new BScroll(this.$refs.scroll, {
            click: true
        })
    },
    beforeDestroy() {
      this.bs.destroy()
    }
}
</script>