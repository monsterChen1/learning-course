<template>
  <div id="app">
    <h1>01-插值语法</h1>
    <p>{{ info }}</p>
    <p>姓名：{{ obj.name }}</p>
    <p>年龄：{{ obj.age }}</p>
    <p>是否成年：{{ obj.age > 18 ? "成年": "未成年" }}</p>
    <p>{{ list[0] }}</p>
  </div>
</template>

<script>
export default {
    data(){
        return{
            obj: {
                name: "炸花生",
                age: 19
            },
            info: "我是字符串，展示数据！",
            list: ["老大", "老二", "老三"]
        }
    }
}
</script>

<style>

</style>