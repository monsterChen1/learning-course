<template>
  <div id="app">
    <h2>插槽</h2>
    <h3>默认插槽 - 默认值</h3>
    <CptSlot></CptSlot>
    <h3>默认插槽 - 自定义内容</h3>
    <CptSlot>
      <ul>
        <li>******</li>
        <li>******</li>
        <li>******</li>
        <li>******</li>
      </ul>
    </CptSlot>

    <h2>具名插槽</h2>
    <h3>具名插槽 - 默认内容</h3>
    <CptSlotName></CptSlotName>
    <h3>具名插槽 - 自定义内容</h3>
    <CptSlotName>
      <template v-slot:title>芙蓉楼送辛渐</template>
      <template #content>
        <img src="./assets/logo.png" alt="">
      </template>
    </CptSlotName>

    <h2>作用域插槽</h2>
    <h3>具名作用域插槽</h3>
    <CptSlotScope >
      <template #image="scope">
        <img :src="scope.src" alt="">
      </template>
    </CptSlotScope>
    <h3>elementUI - 组件库写法</h3>
    <CptSlotScopeObj>
      <template #default="scope">
        <ul>
          <li>{{ scope.row.name }}</li>
          <li>{{ scope.row.age }}</li>
          <li>{{ scope.row.sex }}</li>
        </ul>
      </template>
    </CptSlotScopeObj>

    <h2>生命周期函数</h2>
    <CptLife v-if="showLife"></CptLife>
    <button @click="lifeClost">销毁组件</button>
  </div>
</template>

<script>
import CptSlot from './components/CptSlot.vue';
import CptSlotName from './components/CptSlotName.vue';
import CptSlotScope from './components/CptSlotScope.vue';
import CptSlotScopeObj from './components/CptSlotScopeObj.vue';
import CptLife from './components/CptLife.vue';

export default {
  name: 'App',
  components: {
    CptSlot,
    CptSlotName,
    CptSlotScope,
    CptSlotScopeObj,
    CptLife
  },
  data() {
    return {
        showLife: true
    }
  },
  methods: {
    lifeClost() {
        this.showLife = false;
    }
  }
}
</script>

<style>

</style>
