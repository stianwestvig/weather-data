<template>
  <ul v-if="!!state.observations.length">
    <li
      v-for="(o, i) in state.observations"
      :key="`index-${i}`"
    >date: {{ o.date }} max: {{ o.temperaturemax }}</li>
  </ul>
  <el-empty v-else></el-empty>
</template>

<script setup>
  import { reactive } from 'vue'
  import json from '../assets/weather-history.json'

  const state = reactive({
    observations: []
  })

  state.observations = json.slice(0, 99)
  console.log({...state.observations[0]})

</script>