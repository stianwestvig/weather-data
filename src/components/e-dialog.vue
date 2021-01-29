<template>
  <el-dialog
    :title="state.dialog.content ? state.dialog.content.date : 'Message'"
    v-model="state.dialog.visible"
    width="50%"
    :before-close="actions.onDialogClose">
    <div v-if="filteredKeys">
      <dl>
        <template
          v-for="key in filteredKeys"
        >
          <dt>{{ key }}</dt>
          <dd>{{ state.dialog.content[key] }}</dd>
        </template>
      </dl>
    </div>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="actions.onDialogClose">Close</el-button>
        <el-button type="primary" @click="actions.onDialogClose">Edit</el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script setup>
  import { computed } from 'vue'
  import useStore from '../use-store.js'

  const { state, actions } = useStore()
  const filteredKeys = computed(() => {
    if (!state.dialog.content) { return null }
    return Object.keys(state.dialog.content).filter(key => {
      return state.dialog.content[key] !== null  
    })
  })
</script>

<style>
  .el-dialog__header {
    background-color: rgb(236, 245, 255);
  }

  .el-dialog__body {
    padding: 0 20px;
  }

  dl dt {
    font-weight: bold;
  }

  dl dd {
    margin-inline-start: 10px;
  }
</style>
