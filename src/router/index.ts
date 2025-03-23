import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  { path: '/', component: () => import('../pages/HomePage.vue') },
  { path: '/demo1', component: () => import('../pages/DemoPage1.vue') },
  { path: '/demo2', component: () => import('../pages/DemoPage2.vue')}
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
