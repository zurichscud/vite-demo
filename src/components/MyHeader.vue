<template>
  <el-menu
      :default-active="activeIndex2"
      class="el-menu-demo"
      mode="horizontal"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
      @select="handleSelect"
  >
    <el-menu-item index="1" @click="goToMyOrders">Orders</el-menu-item>
    <el-menu-item index="2" @click="goToInvalidOrders">Invalid Orders</el-menu-item>
    <el-menu-item index="3" @click="goToTrash">Trash</el-menu-item>
    <div class="right-aligned">
      <el-button type="warning" class="iconfont">&#xe677; Delete </el-button>
      <el-button type="warning" class="iconfont">&#xe674; Sync Store Orders</el-button>
      <el-button type="warning" class="iconfont">&#xe6fe; SearchAll</el-button>
    </div>
  </el-menu>
</template>


<script lang="ts" setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router';

const activeIndex2 = ref('1')
const handleSelect = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)

}
const router = useRouter();

const goToMyOrders = () => {
  router.push({ name: 'orders' });
};
const goToInvalidOrders = () => {
  router.push({ name: 'invalidOrders' });
};
const goToTrash = () => {
  router.push({ name: 'trash' });
};

</script>
<style scoped>
.el-menu-demo .right-aligned {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 10px;

}
.iconfont{
  font-family: iconfont;
}
</style>