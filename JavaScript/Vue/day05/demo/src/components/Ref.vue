<template>
    <div>
        <h3>ref $refs</h3>
        <h4>通过web API获取DOM标签</h4>
        <div id="box">WebAPI</div>
        <div ref="box">REF</div>

        <button @click="getDiv">获取div标签</button>

        <h4>通过ref属性获取DOM标签</h4>
        <button @click="getRef">获取div标签</button>
    </div>
</template>

<script>
export default {
    name: 'Ref',
    methods: {
        getDiv() {
            let d = document.querySelector('#box');
            console.log(d);
        },
        getRef() {
            console.log(this.$refs.box);
        }
    }
}
</script>

<style>

</style>