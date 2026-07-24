import { createRouter, createWebHistory } from 'vue-router'
import { useAuthStore } from './components/shared/stores/auth.store.ts'

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/auth',
      redirect: {
        name: 'Login',
      },
      component: () => import('./components/views/AuthView.vue'),
      children: [
        {
          path: '/auth/login',
          component: () => import('./components/pages/auth/LoginPage.vue'),
          name: 'Login',
        },
        {
          path: '/auth/register',
          component: () => import('./components/pages/auth/RegisterPage.vue'),
          name: 'Register',
        },
      ],
    },
    {
      path: '/',
      redirect: {
        name: 'Main',
      },
      component: () => import('./components/views/MainView.vue'),
      children: [
        {
          path: '/meditations',
          component: () => import('./components/pages/main/MeditationsPage.vue'),
          name: 'Main',
        },
        {
          path: '/meditations/:id',
          component: () => import('./components/pages/main/MeditationsIdPage.vue'),
          name: 'Meditation',
        },
        {
          path: '/stats',
          component: () => import('./components/pages/main/StatsPage.vue'),
          name: 'Stats',
        },
      ],
    },
  ],
})

router.beforeEach((to) => {
  const authStore = useAuthStore()
  if (!authStore.getToken && to.name !== 'Login' && to.name !== 'Register') {
    return {
      name: 'Login',
    }
  }
})
