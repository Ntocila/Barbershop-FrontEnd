import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/add_Appointment',
    name: 'AddAppointment',
    component: () => import('../views/add_Appointment.vue'),
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../components/Login.vue'),
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('../components/Register.vue'),
  },
  {
    path: '/GetAppointments',
    name: 'getAppointments',
    component: () => import('../Getters/GetAppointments.vue'),
  },
  {
    path: '/GetCustomers',
    name: 'getCustomers',
    component: () => import('../Getters/GetCustomers.vue'),
  },
  {
    path: '/forgot-password',
    name: 'forgot-password',
    component: () => import('../components/ForgotPassword.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
