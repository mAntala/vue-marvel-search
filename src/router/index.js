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
    path: '/profile/:id',
    name: 'Profile',
    component: () => import(/* webpackChunkName: "hero" */ '../views/Profile')
  },
  {
    path: '/favourites',
    name: 'Favourites',
    component: () => import(/* webpackChunkName: "hero" */ '../views/Favourites')
  },
  {
    path: '/search',
    name: 'Search',
    component: () => import(/* webpackChunkName: "hero" */ '../views/Search')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
