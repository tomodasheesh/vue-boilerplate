import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'

const pages = import.meta.glob('../views/**/route.ts', {
  import: 'default',
  eager: true
})
const routes: RouteRecordRaw[] = []
Object.values(pages).forEach((page) => {
  const route = page as RouteRecordRaw[]
  routes.push(...route)
})

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes,
  scrollBehavior() {
    return { top: 0 }
  }
})

export default router
