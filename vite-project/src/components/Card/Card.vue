<template>
  <div class="card">
    <div class="card-header">
      <div>主标题</div>
      <div>副标题</div>
    </div>
    <div class="card-content">
      我是内容{{ content }}
    </div>
  </div>
</template>

<script setup lang="ts">
type prop = {
  content: string;
};
defineProps<prop>();
</script>

<style lang="scss" scoped>
.card {
  border: 1px solid #ccc;
  margin-bottom: 10px;
  &-header {
    display: flex;
    justify-content: space-between;
    padding: 10px;
    border-bottom: 1px solid #ccc;
  }
  &-content {
    padding: 10px;
  }
}
</style>
