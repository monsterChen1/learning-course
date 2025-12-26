<template>
  <div id="app">
    <h1>事件修饰符</h1>
    <div>{{ num }}</div>
    <!-- 阻止默认行为 -->
    <a @click.prevent="num++" href="https://www.baidu.com">百度一下</a>
    
    <!-- 事件冒泡 -->
    <div @click="toAdd(1)" class="outer"> 加1
        <div @click.stop="toAdd(2)" class="inner">加2</div>
    </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            num: 0
        }
    },
    methods: {
        toAdd(x) {
            this.num += x;
        }
    }
}
</script>

<style>
.outer {
    width: 200px;
    height: 200px;
    background-color: lightblue;
    text-align: center;
}
.inner {
    width: 100px;
    height: 100px;
    background-color: lightcoral;
    margin: 0 auto;
}
</style>