import Vue from 'vue'
import VueRouter from 'vue-router'
import Template from '@/layout/template.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    component: () => import('@/views/login/login'),
    hidden: true
  },
  {
    path: '/',
    name: 'Home',
    component: Template
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
