<template>
    <div class="toast" v-show="isShow">
        <div>{{message}}</div>
    </div>
</template>

<script>
export default {
    name: 'Toast',
    data() {
        return {
            message: '',
            isShow: false
        }
    },
    methods: {
        // 显示函数，传入需要显示的信息，以及停留时间，默认停留2s
        show(message, duration=2000) {
            this.isShow = true
            this.message = message

            setTimeout(() => {
                this.isShow = false
                this.message = ''
            }, duration)
        }
    }
}
</script>

<style scoped>
/* fixed 居中 */
.toast {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 8px 10px;
  color: aliceblue;
  background-color: rgba(0, 0, 0, 0.75);
  z-index: 9;
}
</style>