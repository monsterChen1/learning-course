<template>
  <div>
    <h3>默认插槽</h3>
    <div class="title">标题 <button @click="toClose">{{ close ? '折叠 ' : '展开' }}</button></div>
    <div class="content" v-show="close">
        <slot>
            <!-- 默认值 -->
            <img src="../assets/logo.png" alt="">
        </slot>
    </div>
  </div>
</template>

<script>
export default {
    name: 'CptSlot',
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

<style scoped>
.title {
    width: 200px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 10px;
    border: 1px solid #ccc;
}
.content {
    width: 200px;
    padding: 10px;
    border: 1px solid #ccc;
}
</style>