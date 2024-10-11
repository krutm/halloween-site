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
  ]
})

export default router
