<template>
  <div id="app">
    <h2>虚拟DOM</h2>
    <p>Vue通过建立一个虚拟DOM来追踪自己要如何改变真实DOM</p>
    <p>虚拟DOM就是vue在内存中创建的真实DOM的描述信息</p>
    <p>Vue的就地复用策略：vue会尽可能的就地（同层级、同位置）复用旧DOM结构，对比虚拟DOM，进行差异化更新</p>
    <h2>key</h2>
    <p>key要求：字符串或者数值，唯一不重复</p>
    <p>key作为虚拟DOM的唯一标识。提高虚拟DOM的对比复用性能</p>
    <p>不设置key，默认按照下标进行比较</p>
    <p>设置key，按照key值的新旧元素比较</p>
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