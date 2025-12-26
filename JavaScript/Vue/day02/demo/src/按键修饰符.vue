<template>
  <div id="app">
    <h1>按键修饰符</h1>
    <input type="text" name="" id="" @keydown.enter="fnEnter" @keyup.esc="fnEsc">
  </div>
</template>

<script>
export default {
    data() {
        return {
            
        }
    },
    methods: {
        fnEnter() {
            console.log("按下了回车键");
        },
        fnEsc() {
            console.log("抬起了Esc键");
        }
    }
}
</script>

<style>

</style>