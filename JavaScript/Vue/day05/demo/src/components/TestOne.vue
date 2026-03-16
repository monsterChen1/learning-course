<template>
  <div>
    <button v-if="search" @click="handleClick">点击搜索</button>
    <input v-else type="text" placeholder="输入要搜索的关键字" ref="inp">
  </div>
</template>

<script>
export default {
    name: 'TestOne',
    data() {
        return {
            search: true
        };
    },
    methods: {
        handleClick() {
            this.search = false;
            this.$nextTick(() => {
                this.$refs.inp.focus();
            });
        }
    }
}
</script>

<style>

</style>