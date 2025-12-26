<template>
  <div id="app">
    <h1>v-text/v-html</h1>
    <p v-text="text"></p>
    <p v-html="html"></p>
  </div>
</template>

<script>
export default {
    data() {
        return {
            text: "Hello, v-text!",
            html: "<h2 class='red'>Hello, v-html!</h2>"
        }
    },
    methods: {

    }
}
</script>

<style>
    .red {
        color: red;
    }
</style>