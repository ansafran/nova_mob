const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      { path: 'category/:id', component: () => import('pages/CategoryPage.vue'), props: true },
      {path: '/category-all',component: () => import('pages/CategoryAll.vue'),name: 'CategoryAll'},
      {path: '/category-all/:id',name: 'CategoryPage',component: () => import('src/pages/CategoryPage.vue')},
      
    
    ]
  },


]

export default routes
