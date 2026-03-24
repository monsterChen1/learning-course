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

  </div>
</template>

<script>
import CptSlot from './components/CptSlot.vue';
import CptSlotName from './components/CptSlotName.vue';

export default {
  name: 'App',
  components: {
    CptSlot,
    CptSlotName
  }
}
</script>

<style>

</style>
