<template>
  <div class="content">
    <div class="title">标题：{{ title }}</div>
    <div class="price">价格：{{ price }}</div>
    <div class="sub-title">{{ subTitle }}</div>
  </div>
</template>

<script>
export default {
    name: 'product',
    props: {
        title: {
            type: String,
            required: true,
            default: '标题'
        },
        price: {
            type: Number,
            required: true,
            default: 0
        },
        subTitle: {
            type: String,
            required: false,
            default: '副标题'
        }
    }
}
</script>

<style>
.content {
    border: 3px solid #000;
    padding: 20px;
    margin: 10px 0;
}
.title {
    font-size: 20px;
    font-weight: bold;
}
.price {
    margin: 20px 0;
}
</style>