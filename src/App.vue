<template>
  <el-container>
    <el-header>
      <h2>WoG<span class="subtitle"> - Weather observations</span></h2>
    </el-header>
    <el-main>
      <e-filters />
      <e-dialog />
      <e-weather />
    </el-main>
  </el-container>
</template>

<script setup>
import EFilters from './components/e-filters.vue'
import EWeather from './components/e-weather.vue'
import EDialog from './components/e-dialog.vue'
</script>

<style>
  * { font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei",Arial,sans-serif; }
  body { margin: 0; }

  .el-header { color: #409EFF; }
  .subtitle { font-size: 14px; }
</style>