import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import firebase from 'firebase'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyDW35Blgs_WnT7RmGkROa9CJa0weQ4kjfE',
  authDomain: 'deus-barbershop.firebaseapp.com',
  databaseURL: 'https://deus-barbershop-default-rtdb.firebaseio.com',
  projectId: 'deus-barbershop',
  storageBucket: 'deus-barbershop.appspot.com',
  messagingSenderId: '86845186517',
  appId: '1:86845186517:web:58d942c987434cc02b9d5c',
  measurementId: 'G-7PHBBREP8N',
}

firebase.initializeApp(firebaseConfig)

createApp(App).use(router).mount('#app')
