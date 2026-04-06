<template>
  <div>
    <h1>我的歌单</h1>
    <div>id: {{ $route.params.id }}</div>
    <div>name: {{ $route.query.name }}</div>
  </div>
</template>

<script>
export default {
    name: 'MySong'
}
</script>

<style>

</style>