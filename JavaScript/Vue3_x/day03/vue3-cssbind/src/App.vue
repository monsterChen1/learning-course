<script setup>
import { ref, computed } from 'vue'
const isActive = ref(true)
const isTitle = ref(true)
// 对象语法
const classObject = ref({
  'active': isActive,
  'title': isTitle
})
// 计算属性对象
const classComputed = computed(() => ({
  'active': isActive,
  'title': isTitle
}))

const active = ref('active')
const title = ref('title')

const color = ref('red')
const fontSize = ref('80px')
const styleObject = ref({
  color: 'red',
  'font-size': '80px'
});
</script>

<template>
  <div id="app">
    <h1 :class="isActive ? 'active': ''">Monster - 三元表达式</h1>
    <h1 :class="{ 'active': isActive, 'title': isTitle }">Monster - 对象</h1>
    <h1 :class="classObject">Monster - 对象变量</h1>
    <h1 :class="classComputed">Monster - 计算属性</h1>

    <h1 :class="[active, title]">Monster - 数组</h1>
    <h1 :class="[isActive ? active: '', title]">Monster - 三元表达式 + 数组</h1>
    <h1 :class="[{ [active]: isActive }, title]">Monster - 对象 + 数组</h1>

    <h1 :style="{ 'color': color, 'font-size': fontSize}">Monster - 内联样式</h1>
    <h1 :style="styleObject">Monster - 内联样式对象</h1>
  </div>
</template>

<style scoped>
  .active {
    color: red;
  }
  .title {
    font-size: 80px;
  }
</style>
