<template>
  <ag-grid-vue
    v-if="!!state.observations.length"
    :gridOptions="gridOptions"
    :rowData="state.observations"
    class="ag-theme-balham e-fill-height"
  />
  <el-empty v-else></el-empty>
</template>

<script setup>
  import { AgGridVue } from '@ag-grid-community/vue3'
  import useStore from '../use-store.js'

  const { state, actions } = useStore()

  const gridOptions = {
    columnDefs: [
      { field: 'date' },
      { headerName: 'temp min', field: 'temperaturemin', type: 'number' },
      { headerName: 'temp max', field: 'temperaturemax', type: 'number' },
      { headerName: 'wind', field: 'avgwindspeed', type: 'number' },
      { headerName: 'prec', field: 'precipitation', type: 'number' },
      { field: 'rain', type: 'boolean' },
      { field: 'fog', type: 'boolean' },
      { field: 'thunder', type: 'boolean' }
    ],
    defaultColDef: {
      sortable: true,
      width: 150
    },
    columnTypes: {
      'boolean': {
        width: 90,
        cellRenderer: 'e-boolean-cell'
      },
      'number': {
        width: 120
      }
    },
    components: {
      'e-boolean-cell': params =>
        params.value && params.value === 'Present' ? '<i class="el-icon-check" />' : null
    },
    suppressCellSelection: true,
    onFirstDataRendered: params => {
      params.columnApi.applyColumnState({
        state: [{ colId: 'date', sort: 'desc' }]
      })
    },
    onRowDoubleClicked: params => {
      actions.onDialogOpen(params)
    }
  }
  
</script>

<style>
  .e-fill-height {
    display: flex;
    flex-direction: column;
    height: 845px; /* todo... */
  }

  .el-empty { padding: 200px 0 !important; }

  .ag-cell-focus, .ag-cell-no-focus, .ag-header-cell {
    border:none !important;
  }

  .ag-cell:focus, .ag-header-cell:focus {
    border:none !important;
    outline: none;
  }

  .ag-theme-balham .ag-header {
    background-color: rgb(217, 236, 255) !important;
  }

  .ag-theme-balham .ag-row-odd {
    background-color: white !important;
  }

  .ag-theme-balham .ag-row-hover {
    background-color: rgb(236, 245, 255) !important;
  }
</style>