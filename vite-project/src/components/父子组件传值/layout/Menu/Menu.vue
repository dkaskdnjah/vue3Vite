<template>
  <div class="menu">
    {{ title }}

    {{ data }}
    <button @click="handleClick">测试</button>

    <div>
      <TreeList @tree-click="treeHandle" :data="TreeListData" />
    </div>
  </div>
</template>

<script setup lang="ts">
import TreeList from "../../../递归组件/treeIndex.vue";
import { ref } from "vue";
type props = {
  title?: string;
  data?: object;
};
const arr: number[] = [1, 2, 3, 4];

type TreeProp = {
  name: string;
  icon?: string;
  children?: TreeProp[] | [];
};
const TreeListData = ref<TreeProp[]>([
  {
    name: "tree-1",
    children: [
      {
        name: "tree-1.1",
        children: [
          {
            name: "tree-1.1.1",
          },
        ],
      },
    ],
  },
  {
    name: "tree-2",
    children: [
      {
        name: "tree-2.1",
      },
    ],
  },
  {
    name: "tree-3",
  },
]);

withDefaults(defineProps<props>(), {
  title: "我是默认值",
  data: () => {
    return { name: "xxxx" };
  },
});

const emit = defineEmits(["on-click"]);

const handleClick = () => emit("on-click", arr);

const handleClick2 = () => {
  console.log("--------------------------------------");
};

const treeHandle = (item: TreeProp) => {
  console.log("item: ", item);
};

defineExpose({
  handleClick2,
});
</script>

<style lang="scss" scoped>
.menu {
  width: 200px;
}
</style>
