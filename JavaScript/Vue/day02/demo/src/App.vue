<template>
  <div id="app">
    <h1>小结</h1>
    <p>事件对象: @事件类型="fun(实参, $event)"</p>
    <p>事件修饰符 @事件类型.prevent @事件类型.stop</p>
    <p>按键修饰符 @keydown.enter @keyup.esc 等</p>

    <p>v-if / v-show: 显示和隐藏</p>
    <p>v-if: 创建或销毁标签</p>
    <p>v-show: 控制元素css的显示和隐藏 display:none</p>

    <p>v-if / v-esle-if / v-else 分支指令</p>

    <p>v-text / v-html: 文本指令 / 解析HTML标签指令</p>

    <p>v-model: 数据的双向绑定 作用于表单元素</p>
    <p>修饰符 v-model.number v-model.trim v-model.lazy</p>

    <p>v-for: 列表渲染指令</p>
    <p>:key的值 字符串或数值，唯一不重复。提高虚拟DOM的对比复用性能</p>
  </div>
</template>

<script>
export default {
    data() {
        return {

        }
    },
    methods: {
        
    }
}
</script>

<style>

</style>