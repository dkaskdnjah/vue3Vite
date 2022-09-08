<template>
  <div style="margin-left: 10px; padding: 10px">
    <div
      @click.stop="treeHandle(item)"
      v-for="(item, index) in data"
      :key="index"
    >
      {{ item.name }}
      <Tree @click="treeHandle(item)" v-if="item.children" :data="item.children" v-on="$listeners" />
    </div>
  </div>
</template>

<script setup lang="ts">
import Tree from "./treeIndex.vue";
type TreeListProps = {
  name: string;
  icon?: string;
  children?: TreeListProps[] | [];
};

type Props = {
  data: TreeListProps[];
};

defineProps<Props>();

const emit = defineEmits(["tree-click"]);

const treeHandle = (item: TreeListProps) => {
  emit("tree-click", item);
};
</script>

<script lang="ts">
    // 定义这个import 组件就不会报错
    export default {
        // name: 'tree',
    }
</script>

<style scoped></style>
