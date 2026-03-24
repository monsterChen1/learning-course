<template>
  <div>
    <div class="title">
        <slot name="title">默认标题</slot>
        <button @click="toClose">{{ close ? '折叠 ' : '展开' }}</button>
    </div>
    <div class="content" v-show="close">
        <slot name="content">默认内容</slot>
    </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            close: false
        }
    },
    methods: {
        toClose() {
            this.close = !this.close
        }
    }
}
</script>

<style>

</style>