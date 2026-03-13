<template>
  <div>
    <h4>库存：{{ value }}</h4>
    <button @click="sale">卖出</button>
  </div>
</template>

<script>
export default {
    name: 'VModel',
    props: {
        value: {
            type: Number,
            required: true,
            default: 0
        }
    },
    methods: {
        sale(){
            this.$emit('input', this.value -= 1);
        }
    }
}
</script>

<style>

</style>