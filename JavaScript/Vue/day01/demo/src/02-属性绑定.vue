<template>
  <div id="app">
    <h1>属性绑定：v-bind</h1>
    <p>作用：插值表达式用于行外数据绑定！v-bind用于行内</p>
    <p>语法：v-bind:标签内属性名="变量名" </p>
    <p>简写：:标签内属性名="变量名" </p>

    <a v-bind:href="baidu">百度一下</a>
    <a :href="baidu">百度一下</a>
  </div>
</template>

<script>
export default {
    data(){
        return{
            baidu: "https://www.baidu.com"
        }
    }
}
</script>

<style>

</style>