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
    <Product v-for="item in product" :key="item.title" :title="item.title" :price="item.price" :subTitle="item.subTitle"></Product>
    <Draw></Draw>
    <Draw></Draw>
    <Draw></Draw>
    <Draw></Draw>
  </div>
</template>

<script>
import Draw from './components/draw.vue'
import MoText from './components/moText.vue'
import Product from './components/product.vue';
export default {
  name: 'App',
  components: {
    Draw,
    MoText,
    Product
  },
  data() {
    return {
      show: true,
      product: [
        { title: '超级好吃的口水鸡', price: 50, subTitle: '开业大酬宾，全场8折'},
        { title: '超级好吃的棒棒糖', price: 18.8, subTitle: '开业大酬宾，全场八折'},
      ]
    }
  },
  methods: {
    toClick() {
      this.show = !this.show
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
