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
    <Draw :show="show1"></Draw>
  </div>
</template>

<script>
import Draw from './components/draw.vue'
export default {
  name: 'App',
  components: {
    Draw
  },
  data() {
    return {
      show: true,
      show1: true
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
