<template>
  <div>
      <h3>SubItem组件</h3>
      <!-- 用法二：通过辅助函数mapState, 建立计算属性访问 -->
      <p>已知库存数: {{ count }}</p>
      <button @click="subFn(1)">库存-1</button>
  </div>
</template>

<script>
// 导入辅助函数
import { mapState, mapMutations } from 'vuex';

export default {
    name: 'SubItem',
    computed: {
        ...mapState(['count'])
    },
    methods: {
        // ...mapMutations(['sub']),
        ...mapMutations({
            subFn: 'sub'
        })
    }
}
</script>

<style>

</style>