<template>
    <div>
        <Dialog>
            <!-- <template #header>
                123456789
            </template>
            <template #footer="{ data }">
                <div v-for="item in data">
                    {{ item }}
                </div>
            </template> -->
            <template #[name]>
                123456
            </template>
        </Dialog>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Dialog from './Dialog.vue'

const name = ref('header')
</script>

<style scoped>

</style>