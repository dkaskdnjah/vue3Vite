<template>
    <div>
        <div v-for="item in list" :key="item.name">
            {{item.name}}
        </div>
    </div>
</template>

<script setup lang="ts">
import { axios } from './service'

const list = await axios('./data.json');
console.log('list: ', list);
</script>

<style scoped>

</style>