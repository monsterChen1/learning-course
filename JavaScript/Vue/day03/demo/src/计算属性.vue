<template>
    <div id="app">
      <h2>方法</h2>
      <p> {{ total() }}</p>
      <p> {{ total() }}</p>
      <p> {{ total() }}</p>

      <h2>计算属性</h2>
      <p> {{ totalScore }}</p>
      <!-- 依赖值不变，获取缓存结果 -->
      <p> {{ totalScore }}</p>
      <p> {{ totalScore }}</p>

    </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      list: [
        {id: 15, subject: '语文', score: 88 },
        {id: 27, subject: '数学', score: 100 },
        {id: 32, subject: '英语', score: 56 },
        {id: 41, subject: '物理', score: 76 },
      ],
    }
  },
  methods: {
    total() {
      console.log('方法计算');
      return this.list.reduce((sum, item) => sum + item.score, 0);
    }
  },
  computed: {
    totalScore() {
      console.log('计算属性计算');
      return this.list.reduce((sum, item) => sum + item.score, 0);
    },
    avgScore() {
      if(this.list.length === 0) return 0;
      return (this.totalScore / this.list.length).toFixed(2);
    },
    // 完整写法
    checkedAll: {
      get(){
        return this.arr.every(item => item.check);
      },
      set(value){
        this.arr = this.arr.map(item => ({name: item.name, check: !this.checkedAll}));
      },
    }
  },
}
</script>

<style lang="less">

</style>