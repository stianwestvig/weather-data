import json from './assets/weather-history.json'
import { reactive } from 'vue'

// State and Actions central
// todo: state transitions? state machine?

// initial app state
const state = reactive({
  dialog: {
    content: null,
    visible: false
  },
  filters: {
    city: 'Town of Cary, North Carolina',
    dateRange: [],
    mustBeRain: false,
    mustBeFog: false,
    mustBeThunder: false
  },
  observations: json
})

const actions = {
  onDialogClose: () => {
    state.dialog.visible = false
    state.dialog.content = null
  },
  onDialogOpen: params => {
    state.dialog.visible = true
    state.dialog.content = params.data
  },
  onFilterChange: () => {
    state.observations = json.filter(o => {
      let dateF = true
      let rainF = true
      let fogF = true
      let thunderF = true

      // dateRange filter:
      if (state.filters.dateRange.length) {
        const obsDate = new Date(o.date)
        dateF = (obsDate >= state.filters.dateRange[0]
          && obsDate <= state.filters.dateRange[1])
      }
      if (state.filters.mustBeRain) { rainF = o.rain === 'Present' }
      if (state.filters.mustBeFog) { fogF = o.fog === 'Present' }
      if (state.filters.mustBeThunder) { thunderF = o.thunder === 'Present' }

      return dateF && rainF && fogF && thunderF
    })
  }
}

export default () => {
  return {
    state,
    actions
  }
}