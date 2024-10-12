import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'main',
      component: () => import('@/pages/AboutSupercell.vue'),
    },

    {
      path: '/about',
      name: 'about',
      component: () => import('@/pages/AboutSupercell.vue'),
    },

    {
      path: '/news',
      name: 'news',
      component: () => import('@/pages/SupercellNews.vue'),
    },

    {
      path: '/action=voucher&code=3000dcf5-b25d-467e-a4d3-cf597a5f6a23',
      name: 'aksela',
      component: () => import('@/pages/AkselaPage.vue'),
    },

    {
      path: '/action=voucher&code=3001dcf5-b25d-467e-a4d3-cf597a5f6a23',
      name: 'gord1ck_1',
      component: () => import('@/pages/Gord1ck_1.vue'),
    },

    {
      path: '/action=voucher&code=3002dcf5-b25d-467e-a4d3-cf597a5f6a23',
      name: 'gord1ck_2',
      component: () => import('@/pages/Gord1ck_2.vue'),
    },

    {
      path: '/action=voucher&code=3003dcf5-b25d-467e-a4d3-cf597a5f6a23',
      name: 'pablo_1',
      component: () => import('@/pages/Pablo_1.vue'),
    },

    {
      path: '/action=voucher&code=3004dcf5-b25d-467e-a4d3-cf597a5f6a23',
      name: 'pablo_2',
      component: () => import('@/pages/Pablo_2.vue'),
    },
  ]
})

export default router
