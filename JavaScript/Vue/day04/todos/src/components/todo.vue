<template>
    <li :class="item.check ? 'completed': ''">
        <div class="view">
            <input class="toggle" type="checkbox" :checked="item.check" @change="handleCheck">
            <label>{{ item.label }}</label>
            <button class="destroy"></button>
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
        handleCheck(){
            this.item.check = !this.item.check;
        }
    }
}
</script>

<style>

</style>