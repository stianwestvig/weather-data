<template>
  <el-row>
    <el-col :xs="16" :sm="12" :md="9" :lg="8">
      <el-date-picker
        v-model="state.filters.dateRange"
        :shortcuts="shortcuts"
        type="daterange"
        unlink-panels
        range-separator="To"
        start-placeholder="Start date"
        end-placeholder="End date"
        @change="actions.onFilterChange"
      />
    </el-col>
    <el-col :xs="3" :sm="3" :md="2" :lg="2">
      <el-checkbox
        v-model="state.filters.mustBeRain"
        @change="actions.onFilterChange"
      >Rain</el-checkbox>
    </el-col>
    <el-col :xs="2" :sm="3" :md="2" :lg="2">
      <el-checkbox
        v-model="state.filters.mustBeFog"
        @change="actions.onFilterChange"
      >Fog</el-checkbox>
    </el-col>
    <el-col :xs="3" :sm="3" :md="2" :lg="2">
      <el-checkbox
        v-model="state.filters.mustBeThunder"
        @change="actions.onFilterChange"
      >Thunder</el-checkbox>
    </el-col>
  </el-row>
</template>

<script setup>
  import { ref } from 'vue'
  import useStore from '../use-store.js'

  const { state, actions } = useStore()
  const shortcuts = [
    {
      text: 'Last 3 months',
      value: (() => {
        const start = new Date()
        start.setTime(start.getTime() - 3600 * 1000 * 24 * 90)
        return [start, new Date()]
      })(),
    },
    {
      text: '2020',
      value: (() => [new Date('2020-01-01'), new Date('2020-12-31')])(),
    },
    {
      text: '2019',
      value: (() => [new Date('2019-01-01'), new Date('2019-12-31')])(),
    },
    {
      text: '2015',
      value: (() => [new Date('2015-01-01'), new Date('2015-12-31')])(),
    },
    {
      text: '2012',
      value: (() => [new Date('2012-01-01'), new Date('2012-12-31')])(),
    },
    {
      text: '2009',
      value: (() => [new Date('2009-01-01'), new Date('2009-12-31')])(),
    }
  ]
</script>