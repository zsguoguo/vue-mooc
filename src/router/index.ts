import { AppRouteRecordRaw, AppRouteMetaConfig } from '@/types'
import { App } from 'vue'
import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import { scrollBehavior } from './scrollBehavior'

const routes: AppRouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/home',
    component: () => import('@/views/home/index.vue')
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import('@/views/home/index.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/login/index.vue'),
    meta: {
      title: '登陆',
      hideFooter: true,
      hideHeader: true,
      hideSidebar: true
    }
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  scrollBehavior: scrollBehavior,
  routes: routes as RouteRecordRaw[]
})

router.beforeEach((to, from, next) => {
  const meta = to.meta as AppRouteMetaConfig
  document.title = meta.title ? `慕课网-${meta.title}` : '慕课网-程序员的梦工厂'
  next()
})

export function setupRouter (app: App<Element>) {
  app.use(router)
}

export default router
