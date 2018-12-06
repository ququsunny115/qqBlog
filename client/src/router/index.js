import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'enter',
      component: () => import('@/views/portal/enter/index'),
      meta: { title: '欢迎进入博客' }
    },
    {
      path: '/index',
      name: 'index',
      component: () => import('@/views/portal/index'),
      children: [
        {
          path: 'home',
          name: 'home',
          component: () => import('@/views/portal/home/index'),
          meta: { title: '博客首页' }
        },
        {
          path: 'blog',
          name: 'blog',
          component: () => import('@/views/portal/blog/index'),
          meta: { title: '博客列表' }
        },
        {
          path: 'blogDetail',
          name: 'blogDetail',
          component: () => import('@/views/portal/blog/blogDetail'),
          meta: { title: '博客详情' }
        },
        {
          path: 'aboutMe',
          name: 'aboutMe',
          component: () => import('@/views/portal/aboutMe/index'),
          meta: { title: '关于我' }
        },
        {
          path: 'contactMe',
          name: 'contactMe',
          component: () => import('@/views/portal/contactMe/index'),
          meta: { title: '联系我' }
        }
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/manage/login'),
      meta: { title: '登录' }
    },
    {
      path: '/manage',
      name: 'manage',
      component: () => import('@/views/manage/index'),
      children: [
        {
          path: 'publish',
          name: 'publish',
          component: () => import('@/views/manage/publishArticle'),
          meta: { title: '发布文章' }
        },
        {
          path: 'allArticles',
          name: 'allArticles',
          component: () => import('@/views/manage/allArticles'),
          meta: { title: '所有文章' }
        }
      ]
    }
  ]
})
