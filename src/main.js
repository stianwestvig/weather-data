import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'

// css
import 'element-plus/lib/theme-chalk/index.css'
import '@ag-grid-community/all-modules/dist/styles/ag-grid.css'
import '@ag-grid-community/all-modules/dist/styles/ag-theme-balham.css'

// ag-grid
import {
  ClientSideRowModelModule,
  ModuleRegistry
} from '@ag-grid-community/all-modules'

ModuleRegistry.registerModules([
    ClientSideRowModelModule
]);

createApp(App)
  .use(ElementPlus, { size: 'mini' })
  .mount('#app')
