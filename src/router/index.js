import Vue from 'vue'
import VueRouter from 'vue-router'
import Template from '@/layout/template.vue'
import Dashboard from '@/views/Dashboard/Dashboard'
import Tree from '@/views/Example/Tree'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    component: () => import('@/views/login/login'),
    hidden: true
  },
  {
    path: '/',
    name: 'Template',
    component: Template,
    children: [
      {
        path: '/Dashboard',
        name: 'Dashboard',
        component: Dashboard,
      },
      {
        path: '/Example/Tree',
        name: 'Tree',
        component: Tree,
      },
      {
        path: '/Dashboard',
        name: 'Dashboard',
        component: Dashboard,
      },
    ]
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
