<template>
  <div class="content">
    <div class="title">标题：{{ title }}</div>
    <div class="price">价格：{{ price }}</div>
    <div class="sub-title">开业大酬宾，全场{{ discount }}折</div>
    <div class="store">库存：{{ store }}</div>
    <button :data-id="id" @click="handleShop">卖一件</button>
  </div>
</template>

<script>
export default {
    name: 'product',
    props: {
        id: {
            type: String,
            required: true,
        },
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
        discount: {
            type: Number,
            required: false,
            default: 8
        },
        store: {
            type: Number,
            required: false,
            default: 0
        }
    },
    methods: {
        handleShop(e) {
            // 发送信号
            // console.log(e.target.dataset.id);
            this.$emit('shop', this.id);
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
.store {
    margin: 20px 0;
    font-weight: bold;

}
</style>