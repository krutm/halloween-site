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
    
    {
      path: '/action=voucher&code=3080dcf5-b25b-467e-a4d3-cf597a5f6a23',
      name: 'Loner_3',
      component: () => import('@/pages/Loner_3.vue'),
    },
    
    {
      path: '/action=voucher&code=3081dcf5-b25b-467e-a4d3-cf597a5f6a23',
      name: 'Sandy_3',
      component: () => import('@/pages/Sandy_3.vue'),
    },
    
    {
      path: '/action=voucher&code=3082dcf5-b25b-467e-a4d3-cf597a5f6a23',
      name: 'Lemme_1',
      component: () => import('@/pages/Lemme_1.vue'),
    },
    
    {
      path: '/action=voucher&code=3083dcf5-b25b-467e-a4d3-cf597a5f6a23',
      name: 'Lemme_2',
      component: () => import('@/pages/Lemme_2.vue'),
    },
    
    {
      path: '/action=voucher&code=3084dcf5-b25b-467e-a4d3-cf597a5f6a23',
      name: 'Enter_1',
      component: () => import('@/pages/Enter_1.vue'),
    },
    
    {
      path: '/action=voucher&code=3085dcf5-b25b-467e-a4d3-cf597a5f6a23',
      name: 'Enter_2',
      component: () => import('@/pages/Enter_2.vue'),
    },
    
    {
      path: '/action=voucher&code=3086dcf5-b25b-467e-a4d3-cf597a5f6a23',
      name: 'Samurai_1',
      component: () => import('@/pages/Samurai_1.vue'),
    },
    
    {
      path: '/action=voucher&code=3087dcf5-b25b-467e-a4d3-cf597a5f6a23',
      name: 'Samurai_2',
      component: () => import('@/pages/Samurai_2.vue'),
    },
    
    {
      path: '/action=voucher&code=3088dcf5-b25b-467e-a4d3-cf597a5f6a23',
      name: 'Bogdan_11',
      component: () => import('@/pages/Bogdan_11.vue'),
    },
    
    {
      path: '/action=voucher&code=3089dcf5-b25b-467e-a4d3-cf597a5f6a23',
      name: 'Overfast_11',
      component: () => import('@/pages/Overfast_11.vue'),
    },
    
    {
      path: '/action=voucher&code=3090dcf5-b25b-467e-a4d3-cf597a5f6a23',
      name: 'Sirex_111',
      component: () => import('@/pages/Lemme_3.vue'),
    },
    
    {
      path: '/action=voucher&code=3091dcf5-b25b-467e-a4d3-cf597a5f6a23',
      name: 'Enter_3',
      component: () => import('@/pages/Enter_3.vue'),
    },
    
    {
      path: '/action=voucher&code=3092dcf5-b25b-467e-a4d3-cf597a5f6a23',
      name: 'Kirill_1',
      component: () => import('@/pages/Kirill_1.vue'),
    },
    
    {
      path: '/action=voucher&code=3093dcf5-b25b-467e-a4d3-cf597a5f6a23',
      name: 'Kirill_2',
      component: () => import('@/pages/Kirill_2.vue'),
    },
    
    {
      path: '/action=voucher&code=3094dcf5-b25b-467e-a4d3-cf597a5f6a23',
      name: 'Hisa_1',
      component: () => import('@/pages/Hisa_1.vue'),
    },
    
    {
      path: '/action=voucher&code=3095dcf5-b25b-467e-a4d3-cf597a5f6a23',
      name: 'Lemme_4',
      component: () => import('@/pages/Lemme_4.vue'),
    },
    
    {
      path: '/action=voucher&code=3096dcf5-b25b-467e-a4d3-cf597a5f6a23',
      name: 'Sua_21',
      component: () => import('@/pages/Sua_21.vue'),
    },
    
    {
      path: '/action=voucher&code=3097dcf5-b25b-467e-a4d3-cf597a5f6a23',
      name: 'Sua_22',
      component: () => import('@/pages/Sua_22.vue'),
    },
    
    {
      path: '/action=voucher&code=3098dcf5-b25b-467e-a4d3-cf597a5f6a23',
      name: 'Sua_23',
      component: () => import('@/pages/Sua_23.vue'),
    },
    
    {
      path: '/action=voucher&code=3099dcf5-b25b-467e-a4d3-cf597a5f6a23',
      name: 'Enter_4',
      component: () => import('@/pages/Enter_4.vue'),
    },
    
    {
      path: '/action=voucher&code=3100dcf5-b25b-467e-a4d3-cf597a5f6a23',
      name: 'Enter_5',
      component: () => import('@/pages/Enter_5.vue'),
    },
    
    {
      path: '/action=voucher&code=3101dcf5-b25b-467e-a4d3-cf597a5f6a23',
      name: 'Enter_6',
      component: () => import('@/pages/Enter_6.vue'),
    },
    
    {
      path: '/action=voucher&code=3102dcf5-b25b-467e-a4d3-cf597a5f6a23',
      name: 'Enter_7',
      component: () => import('@/pages/Enter_7.vue'),
    },
    
    {
      path: '/action=voucher&code=3103dcf5-b25b-467e-a4d3-cf597a5f6a23',
      name: 'Hisa_2',
      component: () => import('@/pages/Hisa_2.vue'),
    },
    
    {
      path: '/action=voucher&code=3104dcf5-b25b-467e-a4d3-cf597a5f6a23',
      name: 'Razer_31',
      component: () => import('@/pages/Lemme_5.vue'),
    },
    
    {
      path: '/action=voucher&code=3105dcf5-b25b-467e-a4d3-cf597a5f6a23',
      name: 'Sirex_1',
      component: () => import('@/pages/Sirex_1.vue'),
    },
    
    {
      path: '/action=voucher&code=3106dcf5-b25b-467e-a4d3-cf597a5f6a23',
      name: 'Sandy_11',
      component: () => import('@/pages/Lemme_6.vue'),
    },
    
    {
      path: '/action=voucher&code=3107dcf5-b25b-467e-a4d3-cf597a5f6a23',
      name: 'Sandy_12',
      component: () => import('@/pages/Lemme_7.vue'),
    },
    
    {
      path: '/action=voucher&code=3108dcf5-b25b-467e-a4d3-cf597a5f6a23',
      name: 'Sandy_17',
      component: () => import('@/pages/Pablo_1.vue'),
    },
    
    {
      path: '/action=voucher&code=3109dcf5-b25b-467e-a4d3-cf597a5f6a23',
      name: 'Sandy_14',
      component: () => import('@/pages/Overfast_2.vue'),
    },
    
    {
      path: '/action=voucher&code=3110dcf5-b25b-467e-a4d3-cf597a5f6a23',
      name: 'Sandy_99',
      component: () => import('@/pages/Overfast_1.vue'),
    },
    
    {
      path: '/action=voucher&code=3111dcf5-b25b-467e-a4d3-cf597a5f6a23',
      name: 'Sandy_999',
      component: () => import('@/pages/Sandy_999.vue'),
    },
    
    {
      path: '/action=voucher&code=3112dcf5-b25b-467e-a4d3-cf597a5f6a23',
      name: 'Sandy_1000',
      component: () => import('@/pages/Sandy_1000.vue'),
    },
    
    {
      path: '/action=voucher&code=3113dcf5-b25b-467e-a4d3-cf597a5f6a23',
      name: 'Overfast_999',
      component: () => import('@/pages/Overfast_999.vue'),
    },
    
    {
      path: '/action=voucher&code=3114dcf5-b25b-467e-a4d3-cf597a5f6a23',
      name: 'Sua_24',
      component: () => import('@/pages/Sua_24.vue'),
    },
    
    {
      path: '/action=voucher&code=3115dcf5-b25b-467e-a4d3-cf597a5f6a23',
      name: 'Sua_25',
      component: () => import('@/pages/Sua_25.vue'),
    },
    
    {
      path: '/action=voucher&code=3116dcf5-b25b-467e-a4d3-cf597a5f6a23',
      name: 'Sua_26',
      component: () => import('@/pages/Sua_26.vue'),
    },
    
    {
      path: '/action=voucher&code=3117dcf5-b25b-467e-a4d3-cf597a5f6a23',
      name: 'Sirex_187',
      component: () => import('@/pages/Sirex_187.vue'),
    },
    
    {
      path: '/action=voucher&code=3118dcf5-b25b-467e-a4d3-cf597a5f6a23',
      name: 'Hisa_3',
      component: () => import('@/pages/Hisa_3.vue'),
    },
    
    {
      path: '/action=voucher&code=3119dcf5-b25b-467e-a4d3-cf597a5f6a23',
      name: 'Pablo_999',
      component: () => import('@/pages/Pablo_999.vue'),
    },
    
    {
      path: '/action=voucher&code=3120dcf5-b25b-467e-a4d3-cf597a5f6a23',
      name: 'Sirex_200',
      component: () => import('@/pages/Sirex_200.vue'),
    },
    
    {
      path: '/action=voucher&code=3121dcf5-b25b-467e-a4d3-cf597a5f6a23',
      name: 'Sandy_801',
      component: () => import('@/pages/Sandy_801.vue'),
    },
    
    {
      path: '/action=voucher&code=3122dcf5-b25b-467e-a4d3-cf597a5f6a23',
      name: 'Sandy_802',
      component: () => import('@/pages/Sandy_802.vue'),
    },
    
    {
      path: '/action=voucher&code=3123dcf5-b25b-467e-a4d3-cf597a5f6a23',
      name: 'Sandy_803',
      component: () => import('@/pages/Sandy_803.vue'),
    },
    
    {
      path: '/action=voucher&code=3124dcf5-b25b-467e-a4d3-cf597a5f6a23',
      name: 'Sandy_804',
      component: () => import('@/pages/Sandy_804.vue'),
    },
    
    {
      path: '/action=voucher&code=3125dcf5-b25b-467e-a4d3-cf597a5f6a23',
      name: 'Bogdan_3',
      component: () => import('@/pages/Bogdan_3.vue'),
    },
    
    {
      path: '/action=voucher&code=3126dcf5-b25b-467e-a4d3-cf597a5f6a23',
      name: 'Sirex_201',
      component: () => import('@/pages/Aksela_1.vue'),
    },
    
    {
      path: '/action=voucher&code=3127dcf5-b25b-467e-a4d3-cf597a5f6a23',
      name: 'Loner_4',
      component: () => import('@/pages/Loner_4.vue'),
    },
    
    {
      path: '/action=voucher&code=3128dcf5-b25b-467e-a4d3-cf597a5f6a23',
      name: 'Enter_8',
      component: () => import('@/pages/Quist_1.vue'),
    },
    
    {
      path: '/action=voucher&code=3129dcf5-b25b-467e-a4d3-cf597a5f6a23',
      name: 'Enter_9',
      component: () => import('@/pages/Quist_2.vue'),
    },
    
    {
      path: '/action=voucher&code=3130dcf5-b25b-467e-a4d3-cf597a5f6a23',
      name: 'Enter_10',
      component: () => import('@/pages/Quist_3.vue'),
    },
    
    {
      path: '/action=voucher&code=3131dcf5-b25b-467e-a4d3-cf597a5f6a23',
      name: 'Harmless_3',
      component: () => import('@/pages/Harmless_3.vue'),
    },
    
    {
      path: '/action=voucher&code=3132dcf5-b25b-467e-a4d3-cf597a5f6a23',
      name: 'Harmless_2',
      component: () => import('@/pages/Harmless_2.vue'),
    },
    
    {
      path: '/action=voucher&code=3133dcf5-b25b-467e-a4d3-cf597a5f6a23',
      name: 'Harmless_4',
      component: () => import('@/pages/Harmless_4.vue'),
    },
    
    {
      path: '/action=voucher&code=3134dcf5-b25b-467e-a4d3-cf597a5f6a23',
      name: 'Sirex_201',
      component: () => import('@/pages/Sirex_201.vue'),
    },
    
    {
      path: '/action=voucher&code=3135dcf5-b25b-467e-a4d3-cf597a5f6a23',
      name: 'Sirex_202',
      component: () => import('@/pages/Sirex_202.vue'),
    },
    
    {
      path: '/action=voucher&code=3136dcf5-b25b-467e-a4d3-cf597a5f6a23',
      name: 'Sandy_805',
      component: () => import('@/pages/Sandy_805.vue'),
    },
    
    {
      path: '/action=voucher&code=3137dcf5-b25b-467e-a4d3-cf597a5f6a23',
      name: 'Sandy_806',
      component: () => import('@/pages/Sandy_806.vue'),
    },
    
    {
      path: '/action=voucher&code=3138dcf5-b25b-467e-a4d3-cf597a5f6a23',
      name: 'Sandy_807',
      component: () => import('@/pages/Sandy_807.vue'),
    },
    
    {
      path: '/action=voucher&code=3139dcf5-b25b-467e-a4d3-cf597a5f6a23',
      name: 'Sandy_808',
      component: () => import('@/pages/Sandy_808.vue'),
    },
    
    {
      path: '/action=voucher&code=3140dcf5-b25b-467e-a4d3-cf597a5f6a23',
      name: 'Gord1ck_1',
      component: () => import('@/pages/Gord1ck_1.vue'),
    },
    
    {
      path: '/action=voucher&code=3141dcf5-b25b-467e-a4d3-cf597a5f6a23',
      name: 'Gord1ck_2',
      component: () => import('@/pages/Gord1ck_2.vue'),
    },
    
    {
      path: '/action=voucher&code=3142dcf5-b25b-467e-a4d3-cf597a5f6a23',
      name: 'Hisa_4',
      component: () => import('@/pages/Hisa_4.vue'),
    },
    
    {
      path: '/action=voucher&code=3143dcf5-b25b-467e-a4d3-cf597a5f6a23',
      name: 'Sirex_203',
      component: () => import('@/pages/Sirex_203.vue'),
    },
    
    {
      path: '/action=voucher&code=3144dcf5-b25b-467e-a4d3-cf597a5f6a23',
      name: 'Sirex_204',
      component: () => import('@/pages/Sirex_204.vue'),
    },
    
    {
      path: '/action=voucher&code=3145dcf5-b25b-467e-a4d3-cf597a5f6a23',
      name: 'Gord1ck_3',
      component: () => import('@/pages/Gord1ck_3.vue'),
    },
    
    {
      path: '/action=voucher&code=3146dcf5-b25b-467e-a4d3-cf597a5f6a23',
      name: 'Sirex_205',
      component: () => import('@/pages/Sirex_205.vue'),
    },
    
    {
      path: '/action=voucher&code=3147dcf5-b25b-467e-a4d3-cf597a5f6a23',
      name: 'Disp_1',
      component: () => import('@/pages/Disp_1.vue'),
    },
    
    {
      path: '/action=voucher&code=3148dcf5-b25b-467e-a4d3-cf597a5f6a23',
      name: 'Sandy_809',
      component: () => import('@/pages/Sandy_809.vue'),
    },
    
    {
      path: '/action=voucher&code=3149dcf5-b25b-467e-a4d3-cf597a5f6a23',
      name: 'Sandy_810',
      component: () => import('@/pages/Sandy_810.vue'),
    },
    
    {
      path: '/action=voucher&code=3150dcf5-b25b-467e-a4d3-cf597a5f6a23',
      name: 'Sandy_811',
      component: () => import('@/pages/Sandy_811.vue'),
    },
    
    {
      path: '/action=voucher&code=3151dcf5-b25b-467e-a4d3-cf597a5f6a23',
      name: 'Flek_1',
      component: () => import('@/pages/Flek_1.vue'),
    },
    
    {
      path: '/action=voucher&code=3152dcf5-b25b-467e-a4d3-cf597a5f6a23',
      name: 'Overfast_21',
      component: () => import('@/pages/Overfast_21.vue'),
    },
    
    {
      path: '/action=voucher&code=3153dcf5-b25b-467e-a4d3-cf597a5f6a23',
      name: 'Samurai_10',
      component: () => import('@/pages/Razer_1.vue'),
    },
    
    {
      path: '/action=voucher&code=3154dcf5-b25b-467e-a4d3-cf597a5f6a23',
      name: 'Yarik_1',
      component: () => import('@/pages/Yarik_1.vue'),
    },
    
    {
      path: '/action=voucher&code=3155dcf5-b25b-467e-a4d3-cf597a5f6a23',
      name: 'D_1',
      component: () => import('@/pages/D_1.vue'),
    },
    
    {
      path: '/action=voucher&code=3156dcf5-b25b-467e-a4d3-cf597a5f6a23',
      name: 'Sandy_812',
      component: () => import('@/pages/Sandy_812.vue'),
    },
    
    {
      path: '/action=voucher&code=3157dcf5-b25b-467e-a4d3-cf597a5f6a23',
      name: 'Sandy_813',
      component: () => import('@/pages/Sandy_813.vue'),
    },
    
    {
      path: '/action=voucher&code=3158dcf5-b25b-467e-a4d3-cf597a5f6a23',
      name: 'Sandy_814',
      component: () => import('@/pages/Sandy_814.vue'),
    },
    
    {
      path: '/action=voucher&code=3159dcf5-b25b-467e-a4d3-cf597a5f6a23',
      name: 'Sandy_815',
      component: () => import('@/pages/Sandy_815.vue'),
    },
    
    {
      path: '/action=voucher&code=3160dcf5-b25b-467e-a4d3-cf597a5f6a23',
      name: 'D_2',
      component: () => import('@/pages/D_2.vue'),
    },
    
    {
      path: '/action=voucher&code=3161dcf5-b25b-467e-a4d3-cf597a5f6a23',
      name: 'Sandy_816',
      component: () => import('@/pages/Sandy_816.vue'),
    },
    
    {
      path: '/action=voucher&code=3162dcf5-b25b-467e-a4d3-cf597a5f6a23',
      name: 'Sirex_206',
      component: () => import('@/pages/Sirex_206.vue'),
    },
    
    {
      path: '/action=voucher&code=3163dcf5-b25b-467e-a4d3-cf597a5f6a23',
      name: 'Sirex_207',
      component: () => import('@/pages/Sirex_207.vue'),
    },
    
    {
      path: '/action=voucher&code=3164dcf5-b25b-467e-a4d3-cf597a5f6a23',
      name: 'D_3',
      component: () => import('@/pages/D_3.vue'),
    },

    {
      path: '/action=voucher&code=3165dcf5-b25b-467e-a4d3-cf597a5f6a23',
      name: 'Sirex_208',
      component: () => import('@/pages/Sirex_208.vue'),
    },
    
    {
      path: '/action=voucher&code=3166dcf5-b25b-467e-a4d3-cf597a5f6a23',
      name: 'D_4',
      component: () => import('@/pages/D_4.vue'),
    },
    
    {
      path: '/action=voucher&code=3167dcf5-b25b-467e-a4d3-cf597a5f6a23',
      name: 'D_5',
      component: () => import('@/pages/Aksela_2.vue'),
    },
    
    {
      path: '/action=voucher&code=3168dcf5-b25b-467e-a4d3-cf597a5f6a23',
      name: 'Bogdan_4',
      component: () => import('@/pages/Bogdan_4.vue'),
    },
    
    {
      path: '/action=voucher&code=3169dcf5-b25b-467e-a4d3-cf597a5f6a23',
      name: 'Aksela_34993',
      component: () => import('@/pages/Aksela_3.vue'),
    },
  ]
})

export default router
