<template>
    <div>
        <slot :row="obj">
            {{ obj.name }}
            {{ obj.age }}
            {{ obj.sex }}
        </slot>
    </div>
</template>

<script>
export default {
    name: 'CptSlotScopeObj',
    data() {
        return {
            obj: {
                name: 'xx',
                age: 18,
                sex: '男',
            },
        }
    }
}
</script>

<style>

</style>