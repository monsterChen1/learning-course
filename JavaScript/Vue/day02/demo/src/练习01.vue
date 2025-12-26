<template>
  <div id="app">
    <h1>{{ title }}</h1>
    <h3>{{ subTitle }}</h3>
    <button @click="toEdit">编辑</button>
    <hr>
    <div>
        <label for="titleInput">标题：</label>
        <input type="text" id="titleIuput" v-model="titleInput" :disabled="edit">
    </div>
    <div>
        <label for="subTitleIuput">频道：</label>
        <input type="text" id="subTitleIuput" v-model="subTitleInput" :disabled="edit">
    </div>
    <button @click="toCencel">取消</button>
    <button @click="toSubmit">确认</button>
  </div>
</template>

<script>
export default {
    data() {
        return {
            title: "标题",
            subTitle: "副标题",
            titleInput: "",
            subTitleInput: "",
            edit: true
        }
    },
    methods: {
        toEdit() {
            this.titleInput = this.title;
            this.subTitleInput = this.subTitle;
            this.edit = false;
        },
        toCencel() {
            this.titleInput = "";
            this.subTitleInput = "";
            this.edit = true;
        },
        toSubmit() {
            this.title = this.titleInput;
            this.subTitle = this.subTitleInput;
            this.toCencel();
        }
    }
}
</script>

<style>

</style>