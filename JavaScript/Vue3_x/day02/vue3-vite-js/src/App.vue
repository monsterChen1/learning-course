<script setup>
const title = '小滴课堂';
const titleHtml = '<h1>小滴课堂</h1>'

const id = "div1";
const isDisabled = true;
const url = "https://www.xdclass.net";
</script>

<template>
  <div class="content">
    <!-- 插值语法 {{  }} -->
    <div class="a">小滴课堂</div>
    <div class="a">{{ title }}</div>
    <div>{{ titleHtml }}</div>
    <div v-html="titleHtml"></div>

    <!-- 属性绑定 v-bind -->
    <div v-bind:id="id">1</div>
    <!-- 属性绑定 简写 -->
    <div :id="id">2</div>
    <button :disabled="isDisabled">禁用按钮</button><br>
    <a :href="url" target="_blank">小滴课堂</a>
  </div>
</template>

<style scoped>
.a {
  color: red;
}
</style>
