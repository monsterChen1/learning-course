<template>
  <div>
    <h1>v-on</h1>
    <p>作用：给某个标签绑定事件</p>
    <p>语法1：v-on:事件名称="后面代码很少，一句话！直接把写函数体内容写出来！"</p>
    <p>语法2：v-on:事件名称="后面业务很复杂，写个函数名" 下面在methods里面放函数</p>
    <p>简写： @事件名称</p>

    <p>商品数量：{{ num }}</p>
    <button v-on:click="num++">加1</button>
    <button @click="toAdd(2)">加2</button>
  </div>
</template>

<script>
export default {
    data(){
      return {
        num:10,
      }
    },
    methods: {
        toAdd(x){
          this.num += x;
        }
    }
}
</script>

<style>

</style>