<template>
  <div id="app">
    <h1>动态的设置class和style</h1>
    <h2>class</h2>
    <div class="box" :class="{'bk-red': true, colorWhite: true}">设置class-对象</div>
    <div class="box" :class="['bk-green', 'colorWhite']">设置class-数组</div>

    <h2>style</h2>
    <div class="box" :style="{backgroundColor: 'blue', color: 'red'}">设置style-对象</div>
    <div class="box" :style="[{backgroundColor: 'pink'}, {color: 'red'}]">设置style-数组</div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      
    }
  },
  methods: {
    
  },
  computed: {

  },
  watch: {
   
  }
}
</script>

<style lang="less">
.box {
  width: 200px;
  height: 200px;
}
.bk-red {
  background-color: red;
}
.bk-green {
  background-color: green;
}
.colorWhite {
  color: white;
}
</style>