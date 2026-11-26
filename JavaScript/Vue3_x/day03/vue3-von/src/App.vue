<script setup>
import { ref } from 'vue'
const count = ref(0)
const addClick = () => {
  count.value++
}

const outSideClick = (e) => {
  console.log('点击了外部', e.target)
}

const handlerClick = (num, e) => {
  console.log('点击了', num, e.target)
}
const text = ref('Monster')
</script>

<template>
  <!-- 事件绑定 -->
  <div id="app" @click="outSideClick">
    <!-- 事件修饰符 v-on 简写:@ -->
    <!-- 内联事件处理器 -->
    <button @click="count++">计数器: {{ count }}</button>
    <!-- 外联事件处理器 事件修饰符 -->
    <div @click.stop="addClick">计数器：{{ count }}</div>

    <!-- 事件参数 -->
    <button @click="handlerClick(1, $event)">点击</button>

    <!-- 事件修饰符 -->
    <!-- 阻止事件冒泡 -->
    <button @click.stop="handlerClick(2, $event)">点击</button>

    <!-- 表单输入 -->
    <input type="text" :value="text" @input="event => {
      console.log(event.target.value)
      text = event.target.value
    }">
    <!-- v-model -->
    <input type="text" v-model="text">
  </div>
</template>
