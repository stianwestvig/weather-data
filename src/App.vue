<template>
  <el-container>
    <el-header>
      <h2>Weather observations: Town of Cary, North Carolina</h2>
      <el-button type="primary">Default</el-button>
    </el-header>
    <el-main>
      <e-weather />
    </el-main>
  </el-container>
</template>

<script setup>
import EWeather from './components/e-weather.vue'
</script>

<style>
  * { font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei",Arial,sans-serif; }
  body { margin: 0; }
</style>