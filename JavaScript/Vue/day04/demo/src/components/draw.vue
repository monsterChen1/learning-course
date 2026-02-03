<template>
  <div id="draw">
    <div class="box">
      <h2>标题 <button @click="show==!show">{{ show ? '折叠' : '展开' }}</button></h2>
      <ul v-show="show">
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
    props: {
        show: Boolean
    },
}
</script>

<style>
.box {
  border: 1px solid black;
}
</style>