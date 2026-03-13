<template>
  <div id="app">
    <h2>v-model原理</h2>
    <h3>直接使用</h3>
    <input type="text" v-model="msg" />

    <h3>原理</h3>
    <input type="text" :value="info" @input="fn" />

    <h3>在组件中使用v-model</h3>
    <VModel :value="scale" @input="input"></VModel>
    <VModel v-model="scale"></VModel>

    <h2>ref 和 $refs</h2>
    <Ref></Ref>
  </div>
</template>

<script>
import Ref from './components/Ref.vue';
import VModel from './components/VModel.vue';

export default {
  name: 'App',
  data() {
    return {
      msg: '初始化数据',
      info: '初始化数据',
      scale: 100
    };
  },
  components: {
    VModel,
    Ref
  },
  methods: {
    fn(e){
      this.info = e.target.value;
    },
    input(num){
      this.scale = num;
    }
  }
}
</script>

<style>
</style>
