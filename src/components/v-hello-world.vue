<template>
  <h1>{{ msg }}</h1>
  <el-button icon="el-icon-success" type="primary" @click="state.count++">count is: {{ state.count }}</el-button>
</template>

<script setup>
  import { defineProps, reactive } from 'vue'
  
  defineProps({
    msg: String
  })
  
  const state = reactive({ count: 0 })
</script>
