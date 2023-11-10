<template>
  <div class="form-and-button"> <!-- 添加一个包裹这两个元素的容器 -->
    <MyForm></MyForm>
    <MyTools></MyTools>
  </div>
</template>
<script setup>
import MyForm from "./MyForm.vue";
import MyTools from "./MyTools.vue";
</script>
<style scoped>
.form-and-button {
  display: flex;
  align-items: flex-start;
}
</style>