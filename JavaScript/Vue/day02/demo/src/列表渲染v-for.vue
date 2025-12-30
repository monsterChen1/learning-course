<template>
  <div id="app">
    <h1>v-for</h1>
    <p>获取列表：[{id:1,name:'zs',age:20},{id:2,name:'ls',age:18}]</p>
    <p>数组：直接使用v-for循环</p>
    <p>语法：v-for="(item, index) in list" item:数组元素 index:数组下标</p>

    <!-- 遍历数组 -->
    <ul>
      <li v-for="(item, index) in list" :key="index">
        下标：{{ index }} - id:{{ item.id }} - 姓名：{{ item.name }} - 年龄：{{ item.age }}
      </li>
    </ul>

    <!-- 遍历对象 -->
    <ul>
    <li v-for="(value, key) in obj" :key="key">
      {{ key }}: {{ value }}
    </li>
    </ul>

    <!-- 遍历数组 -->
    <ul>
      <li v-for="n in num" :key="n">
        数字：{{ n }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
    data() {
        return {
            list:[
              {id:1,name:'张三',age:20},
              {id:2,name:'李四',age:18},
              {id:3,name:'王五',age:24},
            ],
            obj: {
              id:4,
              name:'赵六',
              age:22
            },
            num:5
        }
    },
    methods: {
        
    }
}
</script>

<style>

</style>