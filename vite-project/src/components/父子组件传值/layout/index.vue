<template>
    <div class="layout">
        <Menu></Menu>
        <div class="layout_content">
            <Header></Header>
            <Main></Main>
        </div>
    </div>
</template>

<script setup lang="ts">
import Menu from './Menu/Menu.vue'
import Header from './Header/Header.vue'
import Main from './Main/Main.vue'

</script>

<style lang="scss" scoped>
.layout {
    display: flex;
    &_content {
        flex: 1;
        display: flex;
        flex-direction: column;
    }
}
</style>