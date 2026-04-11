<template>
    <div>
        <h3>AddItem组件</h3>
        <!-- 用法一：直接访问 -->
        <p>已知库存数: {{ $store.state.count }}</p>
         <button @click="addFn">库存+1</button>
    </div>
</template>

<script>
export default {
    name: 'AddItem',
    methods: {
        addFn() {
            this.$store.commit('add', 1);
        }
    }
}
</script>

<style>

</style>