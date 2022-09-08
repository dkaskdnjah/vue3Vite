<template>
    <div>
        <input v-model="name.a.b" type="text" name="" id="">
        <input v-model="name2" type="text" name="" id="">
        <div id="test">123</div>

        <button @click="stopHandle">停止监听</button>
    </div>
</template>

<script setup lang="ts">
import { ref, watchEffect } from 'vue'

const name = ref({
    a: {
        b: 1
    }
});

const name2 = ref('');

const stop = watchEffect(() => {
    // 想要监听的变量直接获取 就会是最新值
    console.log(name.value.a.b);
    console.log(name2.value);
    const test = document.getElementById('test');
    console.log('test: ', test); // 没有设置 flush: 'post' 则为null
}, {
    flush: 'post', // 页面加载完在执行
})

const stopHandle = () => stop();
</script>

<style scoped>

</style>