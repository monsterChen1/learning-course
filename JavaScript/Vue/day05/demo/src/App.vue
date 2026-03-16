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
    <h3>ref获取DOM节点</h3>
    <RefCpt ref="cpt"></RefCpt>

    <h3>ref获取组件对象</h3>
    <button @click="getCpt">获取组件对象</button>

    <h2>nextTick</h2>
    <NextTickCpt></NextTickCpt>

    <h2>练习</h2>
    <TestOne></TestOne>
    <ChangeSpan></ChangeSpan>

    <h2>动态组件</h2>
    <button @click="cpt = 'Account'">账户密码填写</button>
    <button @click="cpt = 'Info'">个人信息填写</button>
    <component :is="cpt"></component>
  </div>
</template>

<script>
import VModel from './components/VModel.vue';
import RefCpt from './components/RefCpt.vue';
import NextTickCpt from './components/NextTickCpt.vue';
import TestOne from './components/TestOne.vue';
import ChangeSpan from './components/ChangeSpan.vue';
import Account from './components/Account.vue';
import Info from './components/Info.vue';

export default {
  name: 'App',
  data() {
    return {
      msg: '初始化数据',
      info: '初始化数据',
      scale: 100,
      cpt: 'Account'
    };
  },
  components: {
    VModel,
    RefCpt,
    NextTickCpt,
    TestOne,
    ChangeSpan,
    Account,
    Info
  },
  methods: {
    fn(e){
      this.info = e.target.value;
    },
    input(num){
      this.scale = num;
    },
    getCpt(){
      // 获取组件对象
      let cptO = this.$refs.cpt
      console.log(cptO);
      // 获取组件对象的数据
      console.log(cptO.info);
      // 调用组件对象的方法
      cptO.getRef();
    }
  }
}
</script>

<style>
</style>
