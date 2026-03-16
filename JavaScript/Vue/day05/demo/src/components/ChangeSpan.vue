<template>
  <div>
    <span :class="{active: num == 1}" @click="handleChange(1)">功能1</span>
    <span :class="{active: num == 2}" @click="handleChange(2)">功能2</span>
    <span :class="{active: num == 3}" @click="handleChange(3)">功能3</span>
  </div>
</template>

<script>
export default {
    name: 'ChangeSpan',
    data() {
        return {
            num: 1
        }
    },
    methods: {
        handleChange(num) {
            this.num = num;
        }
    }
}
</script>

<style scoped>
span {
    display: inline-block;
    padding: 10px 20px;
    border: 1px solid #ccc;
    text-align: center;
    margin: 10px;
}
.active {
    background-color: orange;
}
</style>