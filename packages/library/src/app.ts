import { createApp } from 'vue'
import App from './App.vue'
import { createJiaHaoVue } from './main'
import './assets/tailwind.css'

const jiahaoVue = createJiaHaoVue()

createApp(App).use(jiahaoVue).mount('#app')
