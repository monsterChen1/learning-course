<template>
  <div id="app">
    <h1>App.vue 根组件</h1>
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- 插值语法 -->
    <div>消息：{{ msg }}</div>
    <div>姓名：{{ obj.name }}</div>
    <div>是否成年：{{ obj.age >= 18 ? "成年": "未成年" }}</div>
    <div>{{ toSum(1, 3) }}</div>

    <!-- v-html -->
    <div v-html="htmlStr"></div>

    <!-- v-bind -->
    <img v-bind:src="logo" alt="logo">
    <!-- 简写 -->
    <img :src="logo" alt="logo">
    <div v-bind="divAttr"></div>

    <!-- v-on -->
    <div>商品数量：{{ num }}</div>
    <button @click="toAdd(2)">加2</button>
</div>
</template>

<script>
import logo from './assets/logo.png';

// 组件内部, script标签中, 默认就是模块化代码
export default {
  data() {
    return {
      msg: "Hello Vue.js!",
      obj: {
        name: "张三",
        age: 20
      },
      htmlStr: "<h2>这是通过v-html 渲染的内容</h2>",
      logo,
      divAttr: {
        id: "myDiv",
        title: "这是一个div元素"
      },
      num: 11
    }
  },
  methods: {
    toSum(x, y) {
      return x + y;
    },
    toAdd(x){
      this.num += x;
    }
  }
}
</script>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  h1 {
    color: aqua;
  }
}
</style>
