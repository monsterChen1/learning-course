<template>
  <div id="app">
    <h1>获取事件对象</h1>
    <!-- 无形参 -->
    <button @click="fn">按钮</button><br>
    <a @click="fn" href="https://www.baidu.com">百度</a><br>

    <!-- 有形参 -->
    <button @click="fnn(2, 3, $event)">按钮</button><br>
  </div>
</template>

<script>
export default {
    methods: {
        fn(e) {
           e.preventDefault();
           console.log(e);
        },
        fnn(a, b, e) {
            console.log(a + b);
            console.log(e);
        }
    }
}
</script>

<style>

</style>