<template>
  <div id="app">
    <h1>组件导入</h1>

    <div class="box">
      <h2>标题 <button @click="toClick()">{{ show ? '折叠' : '展开' }}</button></h2>
      <ul v-show="show">
        <li>xxxxxxxxxxxxxxxxxxxx</li>
        <li>xxxxxxxxxxxxxxxxxxxx</li>
        <li>xxxxxxxxxxxxxxxxxxxx</li>
        <li>xxxxxxxxxxxxxxxxxxxx</li>
      </ul>
    </div>
    <mo-text></mo-text>
    <Draw></Draw>
    <Draw></Draw>
    <Draw></Draw>
    <Draw></Draw>

    <h2>超市商品列表</h2>
    <div v-for="item in product" :key="item.title">{{ item.title }} 库存：{{ item.store }}</div>
    <Product v-for="item in product" :key="item.id" :id="item.id" :title="item.title" :price="item.price" :discount="item.discount" :store="item.store" @shop="toShop"></Product>
    <ProductObj v-for="item in product" :key="item.id" :product="item"></ProductObj>
  </div>
</template>

<script>
import Draw from './components/draw.vue'
import MoText from './components/moText.vue'
import Product from './components/product.vue';
import ProductObj from './components/productObj.vue';

export default {
  name: 'App',
  components: {
    Draw,
    MoText,
    Product,
    ProductObj
  },
  data() {
    return {
      show: true,
      product: [
        { id: 1, title: '超级好吃的口水鸡', price: 50, discount: 8, store: 100 },
        { id: 2, title: '超级好吃的棒棒糖', price: 18.8, discount: 9, store: 100 },
      ]
    }
  },
  methods: {
    toClick() {
      this.show = !this.show
    },
    toShop(id) {
      this.product.forEach(item => {
        if(item.id !== id) return;
        item.store--;
      })
    }
  },
  computed: {
    
  },
  watch: {

  }
}
</script>

<style>
.box {
  border: 1px solid black;
}
</style>
