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

    {
      path: '/action=voucher&code=3005dcf5-b25d-467e-a4d3-cf597a5f6a23',
      name: 'bogdan_1',
      component: () => import('@/pages/Bogdan_1.vue'),
    },

    {
      path: '/action=voucher&code=3006dcf5-b25d-467e-a4d3-cf597a5f6a23',
      name: 'quist_1',
      component: () => import('@/pages/Quist_1.vue'),
    },

    {
      path: '/action=voucher&code=3007dcf5-b25d-467e-a4d3-cf597a5f6a23',
      name: 'aksela_1',
      component: () => import('@/pages/Aksela_1.vue'),
    },

    {
      path: '/action=voucher&code=3008dcf5-b25d-467e-a4d3-cf597a5f6a23',
      name: 'harmless_1',
      component: () => import('@/pages/Harmless_1.vue'),
    },

    {
      path: '/action=voucher&code=3009dcf5-b25d-467e-a4d3-cf597a5f6a23',
      name: 'fronzes_1',
      component: () => import('@/pages/Fronzes_1.vue'),
    },

    {
      path: '/action=voucher&code=3010dcf5-b25d-467e-a4d3-cf597a5f6a23',
      name: 'gord1ck_3',
      component: () => import('@/pages/Gord1ck_3.vue'),
    },

    {
      path: '/action=voucher&code=3011dcf5-b25d-467e-a4d3-cf597a5f6a23',
      name: 'pablo_3',
      component: () => import('@/pages/Pablo_3.vue'),
    },

    {
      path: '/action=voucher&code=3012dcf5-b25d-467e-a4d3-cf597a5f6a23',
      name: 'overfast_1',
      component: () => import('@/pages/Overfast_1.vue'),
    },
  ]
})

export default router
