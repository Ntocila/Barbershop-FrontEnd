import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import firebase from 'firebase'

require('dotenv').config()

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.VUE_APP_APIKEY,
  authDomain: process.env.VUE_APP_AUTHDOMAIN,
  databaseURL: process.env.VUE_APP_DATABASEURL,
  projectId: process.env.VUE_APP_PROJECTID,
  storageBucket: process.env.VUE_APP_STORAGEBUCKER,
  messagingSenderId: process.env.VUE_APP_MESSAGINSENDERID,
  appId: process.env.VUE_APP_APPID,
  measurementId: process.env.VUE_APP_MEASUREMENTID,
}

firebase.initializeApp(firebaseConfig)

createApp(App).use(router).mount('#app')
