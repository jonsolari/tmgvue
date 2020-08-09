import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/goodluck',
    name: 'GoodLuck',
    component: () => import('../views/GoodLuck.vue')
  },
  {
    path: '/scarcities',
    name: 'Scarcities',
    component: () => import('../views/Scarcities.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
