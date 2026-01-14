<template>
  <div id="app">
    <h1>小结</h1>
    <p>
      v-show / v-if
      v-show: 控制元素的css样式，页面频繁控制元素显示隐藏，使用v-show
      v-if: 控制元素的销毁和创建，页面不频繁控制元素显示隐藏，使用v-if
      v-if / v-else-if / v-else: 分支结构
    </p>
    <p>
      v-text / v-html
      v-text： 设置文本内容，自动转义
      v-html： 设置HTML内容，不会自动转义
    </p>
    <p>
      v-model: 数据双向绑定
      修饰符
      .number: 自动类型转换为数字
      .trim: 自动去除首尾空格
      .lazy: 失去焦点时更新数据
    </p>
    <p>
      v-for: 列表渲染
      数组: v-for="(item, index) in arr" :key="index" 或 v-for="item in obj"
      对象: v-for="(value, key) in obj" :key="item.id" 或 v-for="value in obj"
      数字: v-for="n in 10" :key="n"

      :key="值": 作为虚拟DOM的唯一标识，便于对比和更新DOM
      index:默认使用index作为key
      id:推荐使用数据唯一标识id作为key

      虚拟DOM: 是真实DOM的抽象表示形式，是以JS对象的形式存在的DOM节点
      diff算法: 比较前后两个虚拟DOM的区别，只更新变化的部分
      同层级根元素比较
        如果根元素变化，删除整个DOM树重建，标签变化
        如果根元素不变，对比出属性变化，更新属性，并考虑往下递归复用
      对比同级兄弟元素
        按照key值进行对比复用
    </p>
  </div>
</template>

<script>
export default {
  name: 'App',
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
