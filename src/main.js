import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router/router'

import Vueform from '@vueform/vueform'
import vueformConfig from './../vueform.config'

import'nprogress/nprogress.css';
import Nprogress from 'nprogress'
export const progress_bar =  Nprogress.configure({
    minimum: 0.4,
    showSpinner: false,
})

// maz-ui
import 'maz-ui/css/main.css'

// VueEasyLightbox
import VueEasyLightbox from 'vue-easy-lightbox';
import 'vue-easy-lightbox/external-css/vue-easy-lightbox.css';

export const app = createApp(App)

app.use(VueEasyLightbox)
app.use(Vueform, vueformConfig)
app.use(createPinia())
app.use(router)
app.mount('#app')