import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: () => import('@/components/first/index')
    },
    {
      path: '/home',
      name: 'home',
      component: () => import('@/components/home/index')
    }
  ]
})
