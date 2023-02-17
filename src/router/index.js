import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: [
    { path: '/', name: 'home', component: () => import('../components/HomePage.vue') },
    { path: '/login', name: 'login', component: () => import('../components/Authencation.vue') },
  ]
})
router.replace({ path: '*', redirect: '/login' })
export default router
