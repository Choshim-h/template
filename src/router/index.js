import Vue from 'vue'
import VueRouter from 'vue-router'
import Template from '@/layout/template.vue'
import Dashboard from '@/views/Dashboard/Dashboard'
import Table from '@/views/Example/Table'
import Tree from '@/views/Example/Tree'
import Form from '@/views/Form/Form'
import Menu11 from '@/views/Nested/Nenu1/Menu11'
import Nenu2 from '@/views/Nested/Nenu2'
import Menu121 from '@/views/Nested/Nenu1/Menu12/Menu121'
import Menu122 from '@/views/Nested/Nenu1/Menu12/Menu122'
import Menu13 from '@/views/Nested/Nenu1/Menu13'
import Externallink from '@/views/Externallink/Externallink'
import Donate from '@/views/Donate/Donate'

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
        path: '/Example/Table',
        name: 'Table',
        component: Table,
      },
      {
        path: '/Example/Tree',
        name: 'Tree',
        component: Tree,
      },
      {
        path: '/Form',
        name: 'Form',
        component: Form,
      },
      {
        path: '/Nested/Nenu1/Menu11',
        name: 'Menu11',
        component: Menu11,
      },
      {
        path: '/Nested/Nenu1/Menu12/Menu121',
        name: 'Menu121',
        component: Menu121,
      },
      {
        path: '/Nested/Nenu1/Menu12/Menu122',
        name: 'Menu122',
        component: Menu122,
      },
      {
        path: '/Nested/Nenu1/Menu13',
        name: 'Menu13',
        component: Menu13,
      },
      {
        path: '/Nested/Nenu2',
        name: 'Nenu2',
        component: Nenu2,
      },
      {
        path: '/Externallink',
        name: 'Externallink',
        component: Externallink,
      },
      {
        path: '/Donate',
        name: 'Donate',
        component: Donate,
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
