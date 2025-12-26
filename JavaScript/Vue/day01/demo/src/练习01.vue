<template>
  <div id="app">
    <p>{{ msg }}</p>
    <button @click="reversal()"></button>
  </div>
</template>

<script>
export default {
    data(){
        return {
            msg: 'Hello, World'
        }
    },
    methods: {
        reversal(){
            let arr = this.msg.split('');
            arr = arr.reverse();
            this.msg = arr.join('');
            // this.msg = this.msg.split('').reverse().join('')
        }
    }
}
</script>

<style>

</style>