<template>
  <div>
    <h3>自定义指令-局部指令</h3>
    <div v-bgColor="'blue'">局部自定义指令</div>

    <h3 v-dance="time1">自定义指令-更新</h3>
    <div v-dance="time2">更新</div>
    <button @click="toFast">随机加快</button>

  </div>
</template>

<script>
let timer = null;
export default {
    name: 'Directive',
    data() {
        return {
            time1: 1000,
            time2: 2000,
        }
    },
    methods: {
        toFast() {
            this.time1 = Math.floor(Math.random() * 100);
            this.time2 = Math.floor(Math.random() * 100);
        },
    },
    directives: {
        bgColor: {
            inserted(el, value){
                el.style.backgroundColor = value.value;
            }
        },
        dance: {
            inserted(el, value){
                timer = setInterval(() => {
                    let a = Math.floor(Math.random() * 256);
                    let b = Math.floor(Math.random() * 256);
                    let c = Math.floor(Math.random() * 256);
                    el.style.backgroundColor = `rgb(${a},${b},${c})`;
                }, value.value);
            },
            update(el, binding){
                clearInterval(timer);
                timer = setInterval(() => {
                    let a = Math.floor(Math.random() * 256);
                    let b = Math.floor(Math.random() * 256);
                    let c = Math.floor(Math.random() * 256);
                    el.style.backgroundColor = `rgb(${a},${b},${c})`;
                }, binding.value);
            }
        }
    }
}
</script>

<style>

</style>