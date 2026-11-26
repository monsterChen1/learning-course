<script setup>
import { ref } from 'vue'
const isShow = ref(true)
const subTitle = ref(true)
const type = ref(5)
</script>

<template>
  <div id="app">
    <!-- v-show指令 -->
    <h1 v-show="isShow">Hello, Vue 3!</h1>
    
    <!-- 双分支条件 v-if/v-else -->
    <h2 v-if="subTitle">Sub Title</h2>
    <h2 v-else>Content</h2>

    <!-- 多分支条件 v-if/v-else-if/v-else -->
    <h3 v-if="type === 1">Vue3</h3>
    <h3 v-else-if="type === 2">HTML</h3>
    <h3 v-else-if="type === 3">CSS</h3>
    <h3 v-else-if="type === 4">JavaScript</h3>
    <h3 v-else>baidu.com</h3>
  </div>
</template>
