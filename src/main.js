import '@/assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
// import { VueFire, VueFireAuth, VueFireFirestoreOptionsAPI } from 'vuefire'
import { VueFire, VueFireFirestoreOptionsAPI } from 'vuefire'
import { firebaseApp } from '@/db/firebase.js'
import App from '@/App.vue'
import router from '@/router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.use(VueFire, {
  firebaseApp: firebaseApp,
  // modules: [VueFireAuth(), VueFireFirestoreOptionsAPI()]
  modules: [VueFireFirestoreOptionsAPI()]
})

app.mount('#app')
