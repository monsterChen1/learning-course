<template>
    <div class="my-tag" >
        <input
            v-if="show"
            ref="textInput"
            class="input"
            type="text"
            placeholder="输入标签"
            @blur="toSubmit"
            v-model="good.tag"
            @keydown.enter="enter"
        />
        <div v-else class="text" @dblclick="toEdit">{{ good.tag }}</div>
    </div>
</template>

<script>
export default {
    name: 'MyTag',
    props: {
        good: {
            type: Object,
            required: true
        }
    },
    data() {
        return {
            show: false
        };
    },
    methods: {
        toEdit() {
            this.show = true;
            this.$nextTick(() => {
                this.$refs.textInput.focus();
            });
        },
        toSubmit() {
            this.show = false;
        },
        enter() {
            this.show = false;
        }
    }
}
</script>

<style lang="less" scoped>
.my-tag {
  cursor: pointer;
  .input {
    appearance: none;
    outline: none;
    border: 1px solid #ccc;
    width: 100px;
    height: 40px;
    box-sizing: border-box;
    padding: 10px;
    color: #666;
    &::placeholder {
      color: #666;
    }
  }
}
</style>