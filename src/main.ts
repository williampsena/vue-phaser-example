import { createApp } from 'vue'
import App from './App.vue'
import vuePhaserPlugin from 'nuxtjs-phaser/vue.index'

import './assets/main.css'

const app = createApp(App)

app.use(vuePhaserPlugin)

app.mount('#app')
