<template>
    <li :class="{completed: item.check}">
        <div class="view">
            <input class="toggle" type="checkbox" v-model="item.check">
            <label>{{ item.label }}</label>
            <button class="destroy" @click="handleDel"></button>
        </div>
    </li>
</template>

<script>
import '../assets/css/todos.css'
export default {
    name: 'todo',
    props: {
        item: {
            type: Object,
            required: true
        }
    },
    computed: {
    },
    methods: {
        handleDel() {
            this.$emit('del', this.item.id);
        }
    }
}
</script>

<style>

</style>