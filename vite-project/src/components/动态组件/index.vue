<template>
    <div>
        <div @click="tabHandle(item)" v-for="item in tabCom" :key="item.name">
            {{item.name}}
        </div>
        <component :is="currentCom.comName" />
    </div>
</template>

<script setup lang="ts">
import { reactive } from "vue";
import A from "./A.vue";
import B from "./B.vue";
import C from "./C.vue";
    type tabComPro = {
        name: string,
        comName: any
    }
    const tabCom = reactive<tabComPro[]>([{
        name: '我是A组件',
        comName: A
    }, {
        name: '我是B组件',
        comName: B
    }, {
        name: '我是C组件',
        comName: C
    }])

    type Prop =  Pick<tabComPro, "comName">
    const currentCom = reactive<Prop>({
        comName: tabCom[0].comName
    })

    const tabHandle = (data:tabComPro) => {
        currentCom.comName = data.comName
    }
</script>

<style scoped>

</style>