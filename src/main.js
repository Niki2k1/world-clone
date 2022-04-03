import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import Toast, { POSITION } from "vue-toastification";
import "vue-toastification/dist/index.css";

createApp(App)
  .use(store)
  .use(router)
  .use(Toast, { position: POSITION.BOTTOM_CENTER })
  .mount('#app')
