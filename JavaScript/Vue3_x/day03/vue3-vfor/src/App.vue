<script setup>
import { ref } from 'vue'
// 数组
const list = ref(['HTML', 'CSS', 'JavaScript', 'Vue3'])
// 对象数组
const courseList = ref([
  { name: 'HTML', list: ["h1", "h2", "h3"], isShow: true },
  { name: 'css', list: ["color", "fontSize", "display"], isShow: true },
  { name: 'JavaScript', list: ["let", "const", "var"], isShow: true },
  { name: 'Vue3', list: ["v-if", "v-for", "v-bind"], isShow: false }
]);
// 对象
const obj = ref({
  name: '张三',
  age: 18,
  gender: '男'
});
// 整数
const num = 10
</script>

<template>
  <div id="app">
    <h2>数组</h2>
    <ul>
      <li v-for="(item, index) in list" :key="item">{{ index }} - {{ item }}</li>
    </ul>

    <h2>对象数组</h2>
    <ul>
      <li v-for="item in courseList" :key="item.name">
        {{ item.name }}
        <div v-for="content in item.list" :key="content">{{ content }}</div>
      </li>
    </ul>

    <h2>对象</h2>
    <ul>
      <li v-for="(value, key, index) in obj" :key="key">
        {{ index }} - {{ key }}: {{ value }}
      </li>
    </ul>

    <h2>整数</h2>
    <ul>
      <li v-for="n in num" :key="n">{{ n }}</li>
    </ul>

    <h2>v-if/v-show</h2>
    <ul>
      <template v-for="item in courseList">
        <li v-if="item.isShow" :key="item.name">{{ item.name }}</li>
      </template>
    </ul>
  </div>
</template>
