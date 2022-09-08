<template>
    <div class="layout">
        <Menu  ref="menuRef" @on-click="handleClick" title="我是菜单" :data="obj"></Menu>
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

import { ref } from 'vue'

const menuRef = ref('');

const obj = {name: 'xcx'}

const handleClick = (data: number[]) => {
    console.log('data: ', data);
    menuRef.value.handleClick2();
}

</script>

<style lang="scss" scoped>
.layout {
    height: 100%;
    display: flex;
    &_content {
        flex: 1;
        display: flex;
        flex-direction: column;
    }
}
</style>