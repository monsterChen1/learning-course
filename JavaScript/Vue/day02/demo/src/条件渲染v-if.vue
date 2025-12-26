<template>
  <div id="app">
    <h1>v-show</h1>
    <p>语法：v-show="布尔值" true:展示,false:隐藏</p>
    <p>原理：控制元素的css样式，display:none;</p>

    <button @click="toShow">{{ show ? '折叠' : '展开' }}</button>
    <div class="box" v-show="show"></div>
    
    <h1>v-if</h1>
    <p>语法：v-if="布尔值" true:展示,false:隐藏</p>
    <p>原理：动态的创建或删除标签</p>

    <button @click="toRandom">{{ num }}</button>
    <div class="one" v-if="num <= 3"></div>
    <div class="sec" v-else-if="num < 6"></div>
    <div class="other" v-else></div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            show: true,
            num: 0
        }
    },
    methods: {
        toShow() {
            this.show = !this.show;
        },
        toRandom() {
            this.num = Math.floor(Math.random() * 10);
        }
    }
}
</script>

<style>
    .box {
        width: 200px;
        height: 200px;
        background-color: pink;
    }
    .one, .sec, .other {
        width: 100px;
        height: 100px;
    }
    .one {
        background-color: red;
    }
    .sec {
        background-color: green;
    }
    .other {
        background-color: blue;
    }
</style>