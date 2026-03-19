<template>
  <div>
    <h3>自定义指令-局部指令</h3>
    <div v-bgColor="'blue'">局部自定义指令</div>
  </div>
</template>

<script>
export default {
    name: 'Directive',
    methods: {},
    directives: {
        bgColor: {
            inserted(el, value){
                el.style.backgroundColor = value.value;
            }
        }
    }
}
</script>

<style>

</style>