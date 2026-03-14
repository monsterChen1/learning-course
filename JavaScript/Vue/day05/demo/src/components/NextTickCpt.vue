<template>
  <div>
    <h3>nextTick</h3>
    <div ref="stock">数量：{{ num }}</div>
    <button @click="del">减少</button>
  </div>
</template>

<script>
export default {
    name: 'NextTickCpt',
    data() {
        return {
            num: 10
        };
    },
    methods: {
        del() {
            this.num--;
            console.log("DOM未更新时触发");
            console.log(this.$refs.stock.innerHTML);
            this.$nextTick(() => {
                console.log("DOM更新后触发");
                console.log(this.$refs.stock.innerHTML);
            });
        }
    }
}
</script>

<style>

</style>