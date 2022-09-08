<template>
    <div>
        <input v-model="obj.a.b" type="text" name="" id="">

        <input v-model="obj2.a.b" type="text" name="" id="">
        <input v-model="obj2.a.c" type="text" name="" id="">
    </div>
</template>

<script setup lang="ts">
import { ref, reactive, watch } from 'vue'

const obj = ref({
    a: {
        b: 1
    }
})

const obj2 = reactive({
    a: {
        b: 1,
        c: 0,
    }
})

watch(obj, (newV, oldV) => {
    console.log('newV: ', newV);
    console.log('oldV: ', oldV);
}, {
    deep: true
})



// reactive 不用 deep 也能深度监听
watch(obj2, (newV, oldV) => {
    console.log('newV: ', newV);
    console.log('oldV: ', oldV);
})

// 只监听某个属性
watch( () => obj2.a.b, (newV, oldV) => {
    console.log('newV: ', newV);
    console.log('oldV: ', oldV);
})
</script>

<style lang="scss" scoped>

</style>