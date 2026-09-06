<script setup>
import { ref, nextTick, shallowRef, reactive, shallowReactive } from 'vue'

let count = ref(0)
let obj = ref({
  name: '张三',
  age: 18
});
let obj2 = shallowRef({
  count: 0
});

const handleClick = async () => {
  // 模板中能直接访问
  count.value++

  // 更新DOM时机
  await nextTick();
  console.log(document.getElementById('box').textContent)
}

let obj3 = reactive({
  count:0
})
let obj4 = shallowReactive({
  count:0,
  obj: { count: 0 }
})
</script>

<template>
  <div id="app">
    <div id="box" class="btn" @click="count++">当前的计数：{{ count }}</div>
    <button @click="handleClick">增加计数</button>
    <div @click="obj.age++">{{ obj.age }}</div>
    <div @click="obj2.count++">{{ obj2.count }}</div>
    <div @click="obj3.count++">{{ obj3.count }}</div>
    <div @click="obj4.obj.count++">{{ obj4.obj.count }}</div>
  </div>
</template>

<style scoped>
.btn {
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.btn:hover {
  background-color: #0056b3;
}
</style>
