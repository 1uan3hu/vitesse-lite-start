import { createApp } from 'vue'
import { router } from '~/router'
import App from './App.vue'

import './styles/main.css'
import 'uno.css'

const app = createApp(App)
app.use(pinia)
app.use(router)
app.mount('#app')
