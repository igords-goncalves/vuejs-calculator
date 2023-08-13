import { createApp as createElement } from 'vue'
import App from './App.vue'

import '@/assets/css/tailwind.css'
import '@/assets/main.css'

const app = createElement(App)
app.mount('#app')