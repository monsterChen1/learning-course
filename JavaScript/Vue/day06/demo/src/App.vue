<template>
  <div id="app">
    <h2>插槽</h2>
    <!-- 默认值 -->
    <CptSlot></CptSlot>
    <CptSlot>
      <ul>
        <li>******</li>
        <li>******</li>
        <li>******</li>
        <li>******</li>
      </ul>
    </CptSlot>
  </div>
</template>

<script>
import CptSlot from './components/CptSlot.vue';

export default {
  name: 'App',
  components: {
    CptSlot
  }
}
</script>

<style>

</style>
