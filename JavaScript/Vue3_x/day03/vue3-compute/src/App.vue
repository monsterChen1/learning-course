<script setup>
import { ref, computed } from 'vue'
const books = ref({
  books: ["语文", "数学", "英语"]
});

const hasBooks = computed(() => {
  return books.value.books.length > 0
})
// 计算属性ref
console.log(hasBooks.value)

const firstName = ref("张");
const lastName = ref("三");
const fullName = computed({
  get() {
    return firstName.value + ' ' + lastName.value
  },
  set(newValue) {
    [firstName.value, lastName.value] = newValue.split(' ')
  }
});
</script>

<template>
  <div id="app">
    <div>是否拥有书籍: {{ books.books.length > 0 ? "是" : "否" }}</div>
    <div>是否拥有书籍: {{ hasBooks ? "是" : "否" }}</div>
    <div>姓名: {{ fullName }}</div>
    <input type="text" name="fullName" v-model.lazy="fullName">
  </div>
</template>
