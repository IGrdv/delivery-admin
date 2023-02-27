import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import PrimeVue from 'primevue/config'
import 'primevue/resources/primevue.min.css'
import 'primeicons/primeicons.css'
import 'primevue/resources/themes/lara-light-indigo/theme.css'
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import 'bootstrap/dist/css/bootstrap.min.css'
import "bootstrap"

const app = createApp(App)

app.use(router)
app.use(PrimeVue)

app.component('DataTable', DataTable)
app.component('Column', Column)

app.mount('#app')
