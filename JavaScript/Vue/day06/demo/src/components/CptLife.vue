<template>
  <div>
    <div ref="my-div">DOM操作</div>
    <div ref="my-update">{{ msg }}</div>
    <button @click="handleUpdate">更新</button>
  </div>
</template>

<script>
export default {
    // 组件的生命周期函数
    // Vue的内置函数
    // 三大阶段- 第一阶段：初始化阶段
    // 八大生命周期函数-data数据初始化之前
    beforeCreate(){
        console.log(this.msg, "data数据初始化之前, 无法获取数据");
    },
    // 八大生命周期函数-data数据初始化完成后
    created(){
        console.log(this.msg, "data数据初始化之后, 可以获取数据");
        this.int = setInterval(() => {
            console.log(Math.random());
        }, 1000);
    },
    // 八大生命周期函数-DOM渲染之前
    beforeMount(){
        console.log(this.$refs['my-div'], "DOM渲染之前, 无法获取DOM元素");
    },
    // 八大生命周期函数-DOM渲染完成之后
    mounted(){
        console.log(this.$refs['my-div'], "DOM渲染完成之后, 可以获取DOM元素");
    },
    // 三大阶段- 第二阶段：运行阶段
    // 八大生命周期函数-组件更新之前
    beforeUpdate() {
        console.log(this.$refs['my-update'].innerHTML, "组件更新之前");
    },
    // 八大生命周期函数-组件更新完成之后
    updated() {
        // 可以用this.$nextTick()来获取更新后的DOM元素
        console.log(this.$refs['my-update'].innerHTML, "组件更新完成之后");
    },
    // 三大阶段- 第三阶段：销毁阶段
    // 八大生命周期函数-组件销毁之前
    beforeDestroy() {
        console.log("组件销毁之前");
        clearInterval(this.int);
    },
    // 八大生命周期函数-组件销毁之后
    destroyed() {
        console.log("组件销毁完成之后");
    },
    data() {
        return {
            msg: 'Hello Vue!',
            int: null
        }
    },
    methods: {
        handleUpdate() {
            this.msg = 'Hello Vue!Updated!' + Math.floor(Math.random() * 10);
            // this.$nextTick(() => {
            //     console.log(this.$refs['my-update'].innerHTML, "DOM更新完成之后");
            // });
        }
    }
}
</script>

<style>

</style>