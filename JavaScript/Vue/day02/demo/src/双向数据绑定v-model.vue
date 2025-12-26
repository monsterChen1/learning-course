<template>
  <div id="app">
    <h1>v-model</h1>
    <p>作用：给表单元素使用，双向数据绑定</p>
    <!-- 单向数据绑定：v-bind -->
    <input type="text" :value="msg"/><br>
    
    <!-- 双向数据绑定：v-model -->
    <input type="text" v-model="msg" /><br>

    <!-- checkbox -->
    <h2>其他表单元素</h2>
    <h4>复选框 checkbox</h4>
    <input type="checkbox" id="sing" value="唱歌" v-model="hobby">
    <label for="sing">唱歌</label>
    <input type="checkbox" id="dance" value="跳舞" v-model="hobby">
    <label for="dance">跳舞</label>
    <input type="checkbox" id="rap" value="说唱" v-model="hobby">
    <label for="rap">说唱</label>
    <p>爱好：{{ hobby }}</p>

    <h4>单选按钮 radio</h4>
    <input type="radio" id="male" value="男" v-model="sex">
    <label for="male">男</label>
    <input type="radio" id="female" value="女" v-model="sex">
    <label for="female">女</label>
    <p>性别：{{ sex }}</p>

    <h4>选择框 select</h4>
    <select name="area" id="area" v-model="area">
        <option value="">请选择地区</option>
        <option value="广东">广东</option>
        <option value="湖南">湖南</option>
        <option value="湖北">湖北</option>
        <option value="广西">广西</option>
    </select>
    <p>地区：{{ area }}</p>

    <h4>多行文本 textarea</h4>
    <textarea name="signature" id="signature" cols="30" rows="10" v-model="signature" placeholder="请输入个性签名"></textarea>
  
    <h2>修饰符</h2>
    <input type="number" v-model.number="number"><br>
    <input type="username" v-model.trim="username"><br>
    <input type="change" v-model.lazy="change"><br>
  </div>
</template>

<script>
export default {
    data() {
        return {
            msg: "初始化数据",
            hobby: [],
            sex: '',
            area: '',
            signature: '',
            number: 0,
            username: '',
            change: ''
        }
    },
    methods: {

    }
}
</script>

<style>
    
</style>