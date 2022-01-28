import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// import axios from 'axios'
// import { initializeApp } from 'firebase/app'
// import { getAnalytics } from 'firebase/analytics'

// import firebase from 'firebase/app'
// import { initializeApp } from 'firebase/app'

const app = createApp(App)
app.use(router)
app.mount('#app')

// const firebaseConfig = {

//   apiKey: 'AIzaSyCp_fKxSvo_nW0wEqgt9xJQYYwwah8ScuI',

//   authDomain: 'login-136f0.firebaseapp.com',

//   projectId: 'login-136f0',

//   storageBucket: 'login-136f0.appspot.com',

//   messagingSenderId: '375475407476',

//   appId: '1:375475407476:web:1fc0aa3f47b1e0fe421f21',

//   measurementId: 'G-EV1JYPTXPX'

// }

