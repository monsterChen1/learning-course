<template>
  <div>
    <h1>发现音乐</h1>
    <div>id: {{ $route.params.id || '未知' }}</div>
    <p>$route.params</p>
  </div>
</template>

<script>
export default {
    name: 'Find',
}
</script>

<style>

</style>