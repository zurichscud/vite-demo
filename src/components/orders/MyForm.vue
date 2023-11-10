<template>
  <el-form :inline="true" :model="order" class="demo-form-inline">
    <el-form-item >
      <el-select
          v-model="order.region"
          placeholder="Select a time zone"
          clearable
      >
        <el-option label="CJ Time" value="CJ" />
        <el-option label="Other Time" value="Other" />
      </el-select>
    </el-form-item>
    <el-form-item >
      <el-date-picker
    v-model="order.date"
    type="daterange"
    start-placeholder="Start Date"
    end-placeholder="End Date"
    :default-value="[new Date(2010, 9, 1), new Date(2010, 10, 1)]"
    />
    </el-form-item>
    <el-form-item >
      <el-select
          v-model="order.region"
          placeholder="Select a shipping method"
          clearable
      >
        <el-option label="online" value="online" />
        <el-option label="offline" value="offline" />
      </el-select>
    </el-form-item>
    <el-form-item>
      <el-input v-model="order.name" placeholder="Please enter the name" clearable />
    </el-form-item>
    <el-form-item >
      <el-input v-model="order.title" placeholder="Please enter the product title" clearable />
    </el-form-item>
    <el-form-item >
      <el-input v-model="order.sku" placeholder="Please enter the SKU" clearable />
    </el-form-item>
    <el-form-item >
      <el-input v-model="order.orderNUmber" placeholder="Please enter the order number" clearable  />
    </el-form-item>
    <el-form-item >
      <el-select
          v-model="order.type"
          placeholder="Select a order type"
          clearable
      >
        <el-option label="Abnormal Orders" value="abnormal" />
        <el-option label="Normal Orders" value="normal" />
        <el-option label="Other Orders" value="other" />
      </el-select>
    </el-form-item>
    <el-form-item>
      <el-button type="warning" @click="search">Search</el-button>
    </el-form-item>
    <el-form-item>
      <el-button plain @click="clear">Clear</el-button>
    </el-form-item>
  </el-form>

</template>

<script lang="ts" setup>
import { reactive} from 'vue'

const order = reactive({
  name: '',
  title: '',
  sku: '',
  region:'',
  orderNUmber:'',
  type:'',
  method:'',
  date:'',
})
const search=()=>{
  console.log('Searching...', order);
}
const clear=()=>{
  order.name = '';
  order.title = '';
  order.sku = '';
  order.region = '';
  order.orderNUmber = '';
  order.type = '';
  order.method = '';
  order.date = '';

}


</script>

<style>
.demo-form-inline .el-input {
  --el-input-width: 220px;
}
</style>
