<template>
  <div>
    <!-- /path?name=xx -->
    <h1>朋友</h1>
    <h2>人名：{{ $route.query.name || '未知' }}</h2>
    <p>$route.query</p>
  </div>
</template>

<script>
export default {
    name: 'Friend',
}
</script>

<style>

</style>