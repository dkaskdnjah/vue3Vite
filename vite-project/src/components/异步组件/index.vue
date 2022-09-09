<template>
    <div>
        <Suspense>
            <template #default>
                <div>
                    <axiosDemo />
                </div>
            </template>

            <template #fallback>
                loading....
            </template>
        </Suspense>
    </div>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue'
const axiosDemo = defineAsyncComponent(()=> import('./axiosDemo.vue'))
</script>

<style scoped>

</style>