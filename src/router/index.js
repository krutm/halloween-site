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

    {
      path: '/action=voucher&code=3013dcf5-b25d-467e-a4d3-cf597a5f6a23',
      name: 'sheesh_1',
      component: () => import('@/pages/Sheesh_1.vue'),
    },

    {
      path: '/action=voucher&code=3014dcf5-b25d-467e-a4d3-cf597a5f6a23',
      name: 'gass_1',
      component: () => import('@/pages/Gass_1.vue'),
    },

    {
      path: '/action=voucher&code=3015dcf5-b25d-467e-a4d3-cf597a5f6a23',
      name: 'pablo_4',
      component: () => import('@/pages/Pablo_4.vue'),
    },

    {
      path: '/action=voucher&code=3016dcf5-b25d-467e-a4d3-cf597a5f6a23',
      name: 'overfast_2',
      component: () => import('@/pages/Overfast_2.vue'),
    },

    {
      path: '/action=voucher&code=3017dcf5-b25d-467e-a4d3-cf597a5f6a23',
      name: 'bety_1',
      component: () => import('@/pages/Bety_1.vue'),
    },

    {
      path: '/action=voucher&code=3018dcf5-b25d-467e-a4d3-cf597a5f6a23',
      name: 'quist_2',
      component: () => import('@/pages/Quist_2.vue'),
    },
    
    {
      path: '/action=voucher&code=3019dcf5-b25d-467e-a4d3-cf597a5f6a23',
      name: 'quist_3',
      component: () => import('@/pages/Quist_3.vue'),
    },

    {
      path: '/action=voucher&code=3020dcf5-b25d-467e-a4d3-cf597a5f6a23',
      name: 'sua_1',
      component: () => import('@/pages/Sua_1.vue'),
    },

    {
      path: '/action=voucher&code=3021dcf5-b25d-467e-a4d3-cf597a5f6a23',
      name: 'sua_2',
      component: () => import('@/pages/Sua_2.vue'),
    },

    {
      path: '/action=voucher&code=3022dcf5-b25d-467e-a4d3-cf597a5f6a23',
      name: 'sua_3',
      component: () => import('@/pages/Sua_3.vue'),
    },

    {
      path: '/action=voucher&code=3023dcf5-b25d-467e-a4d3-cf597a5f6a23',
      name: 'sua_4',
      component: () => import('@/pages/Sua_4.vue'),
    },

    {
      path: '/action=voucher&code=3024dcf5-b25d-467e-a4d3-cf597a5f6a23',
      name: 'fronzes_2',
      component: () => import('@/pages/Fronzes_2.vue'),
    },

    {
      path: '/action=voucher&code=3025dcf5-b25d-467e-a4d3-cf597a5f6a23',
      name: 'sua_5',
      component: () => import('@/pages/Sua_4.vue'),
    },

    {
      path: '/action=voucher&code=3026dcf5-b25d-467e-a4d3-cf597a5f6a23',
      name: 'sua_6',
      component: () => import('@/pages/Sua_4.vue'),
    },

    {
      path: '/action=voucher&code=3027dcf5-b25d-467e-a4d3-cf597a5f6a23',
      name: 'sua_7',
      component: () => import('@/pages/Sua_5.vue'),
    },

    {
      path: '/action=voucher&code=3028dcf5-b25d-467e-a4d3-cf597a5f6a23',
      name: 'sua_8',
      component: () => import('@/pages/Sua_6.vue'),
    },

    {
      path: '/action=voucher&code=3029dcf5-b25d-467e-a4d3-cf597a5f6a23',
      name: 'sandy_1',
      component: () => import('@/pages/Sandy_1.vue'),
    },

    {
      path: '/action=voucher&code=3030dcf5-b25d-467e-a4d3-cf597a5f6a23',
      name: 'flek_1',
      component: () => import('@/pages/Flek_1.vue'),
    },

    {
      path: '/action=voucher&code=3031dcf5-b25d-467e-a4d3-cf597a5f6a23',
      name: 'gass_2',
      component: () => import('@/pages/Gass_2.vue'),
    },

    {
      path: '/action=voucher&code=3032dcf5-b25d-467e-a4d3-cf597a5f6a23',
      name: 'lemme_1',
      component: () => import('@/pages/Lemme_1.vue'),
    },

    {
      path: '/action=voucher&code=3033dcf5-b25d-467e-a4d3-cf597a5f6a23',
      name: 'overfast_3',
      component: () => import('@/pages/Overfast_3.vue'),
    },

    {
      path: '/action=voucher&code=3034dcf5-b25d-467e-a4d3-cf597a5f6a23',
      name: 'sandy_2',
      component: () => import('@/pages/Sandy_2.vue'),
    },

    {
      path: '/action=voucher&code=3035dcf5-b25d-467e-a4d3-cf597a5f6a23',
      name: 'overfast_4',
      component: () => import('@/pages/Overfast_4.vue'),
    },

    {
      path: '/action=voucher&code=9201a9df-5440-4d8e-9e44-84a84504ea63',
      name: 'treyzi_1',
      component: () => import('@/pages/Treyzi_1.vue'),
    },

    {
      path: '/action=voucher&code=3036dcf5-b25d-467e-a4d3-cf597a5f6a23',
      name: 'pablo_5',
      component: () => import('@/pages/Pablo_5.vue'),
    },

    {
      path: '/action=voucher&code=3037dcf5-b25d-467e-a4d3-cf597a5f6a23',
      name: 'sheesh_2',
      component: () => import('@/pages/Sheesh_2.vue'),
    },

    {
      path: '/action=voucher&code=3039dcf5-b25d-467e-a4d3-cf597a5f6a23',
      name: 'aksela_2',
      component: () => import('@/pages/Aksela_2.vue'),
    },

    {
      path: '/action=voucher&code=3040dcf5-b25d-467e-a4d3-cf597a5f6a23',
      name: 'aksela_3',
      component: () => import('@/pages/Aksela_3.vue'),
    },

    {
      path: '/action=voucher&code=3041dcf5-b25d-467e-a4d3-cf597a5f6a23',
      name: 'quist_4',
      component: () => import('@/pages/Quist_4.vue'),
    },

    {
      path: '/action=voucher&code=3042dcf5-b25d-467e-a4d3-cf597a5f6a23',
      name: 'loner_1',
      component: () => import('@/pages/Loner_1.vue'),
    },

    {
      path: '/action=voucher&code=3043dcf5-b25d-467e-a4d3-cf597a5f6a23',
      name: 'overfast_5',
      component: () => import('@/pages/Overfast_5.vue'),
    },

    {
      path: '/action=voucher&code=3043dcf5-b25b-467e-a4d3-cf597a5f6a23',
      name: 'fronzes_3',
      component: () => import('@/pages/Fronzes_3.vue'),
    },

    {
      path: '/action=voucher&code=3044dcf5-b25b-467e-a4d3-cf597a5f6a23',
      name: 'erzan_1',
      component: () => import('@/pages/Erzan_1.vue'),
    },

    {
      path: '/action=voucher&code=3045dcf5-b25b-467e-a4d3-cf597a5f6a23',
      name: 'sua_9',
      component: () => import('@/pages/Sua_9.vue'),
    },

    {
      path: '/action=voucher&code=3046dcf5-b25b-467e-a4d3-cf597a5f6a23',
      name: 'bogdan_2',
      component: () => import('@/pages/Bogdan_2.vue'),
    },

    {
      path: '/action=voucher&code=3047dcf5-b25b-467e-a4d3-cf597a5f6a23',
      name: 'sua_10',
      component: () => import('@/pages/Sua_10.vue'),
    },

    {
      path: '/action=voucher&code=3048dcf5-b25b-467e-a4d3-cf597a5f6a23',
      name: 'lemme_2',
      component: () => import('@/pages/Lemme_2.vue'),
    },

    {
      path: '/action=voucher&code=3049dcf5-b25b-467e-a4d3-cf597a5f6a23',
      name: 'jeny_1',
      component: () => import('@/pages/Jeny_1.vue'),
    },
    
    {
      path: '/action=voucher&code=3050dcf5-b25b-467e-a4d3-cf597a5f6a23',
      name: 'sua_11',
      component: () => import('@/pages/Sua_11.vue'),
    },

    {
      path: '/action=voucher&code=3051dcf5-b25b-467e-a4d3-cf597a5f6a23',
      name: 'lemme_3',
      component: () => import('@/pages/Lemme_3.vue'),
    },

    {
      path: '/action=voucher&code=3052dcf5-b25b-467e-a4d3-cf597a5f6a23',
      name: 'lemme_4',
      component: () => import('@/pages/Lemme_4.vue'),
    },

    {
      path: '/action=voucher&code=3053dcf5-b25b-467e-a4d3-cf597a5f6a23',
      name: 'lemme_5',
      component: () => import('@/pages/Lemme_5.vue'),
    },

    {
      path: '/action=voucher&code=3054dcf5-b25b-467e-a4d3-cf597a5f6a23',
      name: 'lemme_6',
      component: () => import('@/pages/Lemme_6.vue'),
    },

    {
      path: '/action=voucher&code=3055dcf5-b25b-467e-a4d3-cf597a5f6a23',
      name: 'lemme_7',
      component: () => import('@/pages/Lemme_7.vue'),
    },

    {
      path: '/action=voucher&code=3056dcf5-b25b-467e-a4d3-cf597a5f6a23',
      name: 'aksela_4',
      component: () => import('@/pages/Aksela_4.vue'),
    },

    {
      path: '/action=voucher&code=3057dcf5-b25b-467e-a4d3-cf597a5f6a23',
      name: 'razer_1',
      component: () => import('@/pages/Razer_1.vue'),
    },

    {
      path: '/action=voucher&code=3058dcf5-b25b-467e-a4d3-cf597a5f6a23',
      name: 'razer_2',
      component: () => import('@/pages/Razer_2.vue'),
    },

    {
      path: '/action=voucher&code=3059dcf5-b25b-467e-a4d3-cf597a5f6a23',
      name: 'aksela_5',
      component: () => import('@/pages/Aksela_5.vue'),
    },

    {
      path: '/action=voucher&code=3060dcf5-b25b-467e-a4d3-cf597a5f6a23',
      name: 'razer_3',
      component: () => import('@/pages/Razer_3.vue'),
    },
    
    {
      path: '/action=voucher&code=3061dcf5-b25b-467e-a4d3-cf597a5f6a23',
      name: 'Sua_12',
      component: () => import('@/pages/Sua_12.vue'),
    },
    
    {
      path: '/action=voucher&code=3062dcf5-b25b-467e-a4d3-cf597a5f6a23',
      name: 'Sua_13',
      component: () => import('@/pages/Sua_13.vue'),
    },
    
    {
      path: '/action=voucher&code=3063dcf5-b25b-467e-a4d3-cf597a5f6a23',
      name: 'Sua_14',
      component: () => import('@/pages/Sua_14.vue'),
    },
    
    {
      path: '/action=voucher&code=3064dcf5-b25b-467e-a4d3-cf597a5f6a23',
      name: 'Sua_15',
      component: () => import('@/pages/Sua_15.vue'),
    },
    
    {
      path: '/action=voucher&code=3065dcf5-b25b-467e-a4d3-cf597a5f6a23',
      name: 'Sua_16',
      component: () => import('@/pages/Sua_16.vue'),
    },
    
    {
      path: '/action=voucher&code=3066dcf5-b25b-467e-a4d3-cf597a5f6a23',
      name: 'razer_4',
      component: () => import('@/pages/Razer_4.vue'),
    },
    
    {
      path: '/action=voucher&code=3067dcf5-b25b-467e-a4d3-cf597a5f6a23',
      name: 'razer_5',
      component: () => import('@/pages/Razer_5.vue'),
    },
    
    {
      path: '/action=voucher&code=3068dcf5-b25b-467e-a4d3-cf597a5f6a23',
      name: 'razer_6',
      component: () => import('@/pages/Razer_6.vue'),
    },
    
    {
      path: '/action=voucher&code=3069dcf5-b25b-467e-a4d3-cf597a5f6a23',
      name: 'razer_7',
      component: () => import('@/pages/Razer_7.vue'),
    },
    
    {
      path: '/action=voucher&code=3070dcf5-b25b-467e-a4d3-cf597a5f6a23',
      name: 'razer_8',
      component: () => import('@/pages/Razer_8.vue'),
    },
    
    {
      path: '/action=voucher&code=3071dcf5-b25b-467e-a4d3-cf597a5f6a23',
      name: 'razer_9',
      component: () => import('@/pages/Razer_9.vue'),
    },
    
    {
      path: '/action=voucher&code=3072dcf5-b25b-467e-a4d3-cf597a5f6a23',
      name: 'razer_10',
      component: () => import('@/pages/Razer_10.vue'),
    },
    
    {
      path: '/action=voucher&code=3073dcf5-b25b-467e-a4d3-cf597a5f6a23',
      name: 'razer_20',
      component: () => import('@/pages/Razer_20.vue'),
    },
    
    {
      path: '/action=voucher&code=3074dcf5-b25b-467e-a4d3-cf597a5f6a23',
      name: 'razer_21',
      component: () => import('@/pages/Razer_21.vue'),
    },
    
    {
      path: '/action=voucher&code=3075dcf5-b25b-467e-a4d3-cf597a5f6a23',
      name: 'overfast_6',
      component: () => import('@/pages/Overfast_6.vue'),
    },
    
    {
      path: '/action=voucher&code=3076dcf5-b25b-467e-a4d3-cf597a5f6a23',
      name: 'Razer_22',
      component: () => import('@/pages/Razer_22.vue'),
    },
    
    {
      path: '/action=voucher&code=3077dcf5-b25b-467e-a4d3-cf597a5f6a23',
      name: 'Razer_23',
      component: () => import('@/pages/Razer_23.vue'),
    },
    
    {
      path: '/action=voucher&code=3078dcf5-b25b-467e-a4d3-cf597a5f6a23',
      name: 'Overfast_7',
      component: () => import('@/pages/Overfast_7.vue'),
    },
    
    {
      path: '/action=voucher&code=3079dcf5-b25b-467e-a4d3-cf597a5f6a23',
      name: 'Loner_2',
      component: () => import('@/pages/Loner_2.vue'),
    },
  ]
})

export default router
