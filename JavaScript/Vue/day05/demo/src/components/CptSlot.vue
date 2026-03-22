<template>
  <div>
    <div class="title">
        <div>芙蓉楼送辛渐</div>
        <div class="btn" @click="toClost">{{ close ? '展开' : '收起' }}</div>
    </div>
    <div class="content" v-show="!close">
        <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
    name: 'CptSlot',
    data() {
        return {
            close: true,
        };
    },
    methods: {
        toClost() {
            this.close = !this.close;
        }
    }
}
</script>

<style scoped>
.title {
    display: flex;
    justify-content: space-between;
    width: 200px;
    border: 1px solid #000;
    padding: 10px;
}
.btn:hover {
    cursor: pointer;
}
.content {
    width: 200px;
    height: 200px;
    border: 1px solid #000;
    padding: 10px;
}
</style>