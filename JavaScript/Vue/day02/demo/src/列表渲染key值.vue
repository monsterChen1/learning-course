<template>
  <div id="app">
    <!-- 遍历数组 -->
    <button @click="add">添加</button>
    <ul>
      <li v-for="(item, index) in list" :key="index">
        id:{{ item.id }} - 姓名：{{ item.name }} - 年龄：{{ item.age }}
      </li>
    </ul>
    <hr>
    <ul>
      <li v-for="(item, index) in list" :key="item.id">
        id:{{ item.id }} - 姓名：{{ item.name }} - 年龄：{{ item.age }}
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
        }
    },
    methods: {
        add() {
          let name = '';
          for(let i = 0; i < 2; i++){
              name += String.fromCharCode(Math.floor(Math.random() * 26) + 65);
          }
          
          let newItem = {
            id: Math.floor(Math.random() * 10000),
            name: name,
            age: Math.floor(Math.random() * 50) + 18
          };
          
          this.list.splice(1, 0, newItem);
        }
    }
}
</script>

<style>

</style>