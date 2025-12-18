<template>
  <div>
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
            this.msg = this.msg.split('').reverse().join('')
        }
    }
}
</script>

<style>

</style>