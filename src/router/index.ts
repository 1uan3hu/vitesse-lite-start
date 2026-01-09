import type { RouteRecordRaw } from 'vue-router'
import { createRouter, createWebHistory } from 'vue-router'

export const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('~/pages/index.vue'),
  },
  {
    path: '/:pathMatch(.*)*',
    component: () => import ('~/pages/404.vue'),
  },
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
})
