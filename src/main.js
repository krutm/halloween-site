import '@/assets/styles/index.sass'
import 'vue-image-svg/dist/style.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import Image from 'vue-image-svg'

import App from '@/App.vue'
import router from '@/router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(Image)

app.mount('#app')