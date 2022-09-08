<template>
    <div class="main">
        我是主体
        <div v-for="(item, index) in 1000" :key="index">
            <Card :content="index" />
        </div>
    </div>
</template>

<script setup lang="ts">

</script>

<style lang="scss" scoped>
.main {
    flex: 1;
    overflow: auto;
    margin: 20px 0;
}
</style>