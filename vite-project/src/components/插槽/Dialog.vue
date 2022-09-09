<template>
    <div>
        <div class="header">
            <slot name="header" />
        </div>

        <div class="footer">
            <slot name="footer" :data="data" />
        </div>
    </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
const data = reactive([1,2,3,4])
</script>

<style scoped>

</style>