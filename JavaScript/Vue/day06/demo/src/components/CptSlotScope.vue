<template>
  <div>
    <slot name="image" :src="src">
        {{ src }}
    </slot>
  </div>
</template>

<script>
export default {
    name: 'CptSlotScope',
    data() {
        return {
            src: 'https://tj-material.oss-cn-shenzhen.aliyuncs.com/material/82dc0479rr/frame.jpg'
        }
    }
}
</script>

<style>

</style>