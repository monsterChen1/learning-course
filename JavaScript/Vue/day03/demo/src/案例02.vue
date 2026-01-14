<template>
  <div id="app">
    <span>全选:</span>
    <input type="checkbox" v-model="checkedAll"/>
    <button @click="toCheckAll()">{{ checkedAll ? '反选' : '全选' }}</button>
    <ul>
      <li v-for="(item,i) in arr" :key="i">
        <input type="checkbox" v-model="item.check"/>
        <span>{{ item.name }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      arr: [
        { name: '猪八戒', check: false },
        { name: '孙悟空', check: false },
        { name: '唐僧', check: false },
        { name: '白龙马', check: false },
      ],
    }
  },
  methods: {
    toCheckAll() {
      this.arr = this.arr.map(item => ({name: item.name, check: !this.checkedAll}));
    }
  },
  computed: {
    checkedAll: {
      get(){
        return this.arr.every(item => item.check);
      },
      set(value){
        // this.arr = this.arr.map(item => ({name: item.name, check: !this.checkedAll}));
        this.arr.forEach(item => item.check = value);
      },
    }
  },
}
</script>

<style lang="less">

</style>
