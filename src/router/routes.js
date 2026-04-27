const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { 
        path: '', 
        component: () => import('pages/IndexPage.vue'),
        props: { showBanner: true }
      },
      { 
        path: 'catalog', 
        component: () => import('pages/IndexPage.vue'),
        props: { showBanner: false }
      },
      { 
        path: 'cart', 
        component: () => import('pages/CartPage.vue') 
      }
    ]
  },

  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes