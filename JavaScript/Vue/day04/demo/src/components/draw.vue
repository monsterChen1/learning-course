<template>
  <div id="draw">
    <div class="box">
      <h2>标题 <button @click="toShow = !toShow">{{ show ? '折叠' : '展开' }}</button></h2>
      <ul v-show="toShow">
        <li>xxxxxxxxxxxxxxxxxxxx</li>
        <li>xxxxxxxxxxxxxxxxxxxx</li>
        <li>xxxxxxxxxxxxxxxxxxxx</li>
        <li>xxxxxxxxxxxxxxxxxxxx</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
    name: 'Draw',
    data() {
      return {
        toShow: true
      };
    }
}
</script>

<style>
.box {
  border: 1px solid black;
}
</style>