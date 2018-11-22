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
    },
    {
      path: '/blog',
      name: 'blog',
      component: () => import('@/components/blog/index')
    },
    {
      path: '/blogDetail',
      name: 'blogDetail',
      component: () => import('@/components/blog/blogDetail')
    },
    {
      path: '/aboutMe',
      name: 'aboutMe',
      component: () => import('@/components/aboutMe/index')
    },
    {
      path: '/contactMe',
      name: 'contactMe',
      component: () => import('@/components/contactMe/index')
    }
  ]
})
