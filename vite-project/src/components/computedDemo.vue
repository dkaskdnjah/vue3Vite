<template>
    <div>
        <input v-model="name" type="text">
        <input v-model="name2" type="text">

        {{fullName}}
    </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

const name = ref<string>('');
const name2 = ref<string>('');

const fullName = computed<string>(() => {
    return name.value + name2.value
})
</script>

<style lang="scss" scoped>

</style>