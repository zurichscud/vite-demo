<script setup>
import MyHeader from "@/components/MyHeader.vue";


</script>

<template>
  <MyHeader></MyHeader>
  <el-alert title="info alert" type="info" effect="dark"/>

  <br>
  <router-view></router-view>


</template>

<style scoped>



</style>