import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import(/* webpackChunkName: "home" */ '@/views/Home/Home')
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '@/views/About/About')
  },
  {
    path: '/consultation',
    name: 'consultation',
    component: () => import(/* webpackChunkName: "consultation" */ '@/views/Consultation/Consultation')
  }
]

const router = new VueRouter({
  routes
})

export default router
