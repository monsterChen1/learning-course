<template>
  <div class="content">
    <div class="title">标题：{{ product.title }}</div>
    <div class="price">价格：{{ product.price }}</div>
    <div class="sub-title">开业大酬宾，全场{{ product.discount }}折</div>
    <div class="store">库存：{{ product.store }}</div>
    <button @click="handleShop">卖一件</button>
  </div>
</template>

<script>
export default {
    props: {
        product: {
            type: Object,
            required: true,
        }
    },
    methods: {
        handleShop() {
            // 发送信号
            // this.$emit('shop', this.product.id);
            this.product.store--;
        }
    }
}
</script>

<style>

</style>