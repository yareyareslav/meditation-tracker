import { createRouter, createWebHistory } from "vue-router";

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/auth",
      component: () => import("./components/views/AuthView.vue"),
      children: [
        {
          path: "/auth/login",
          component: () => import("./components/pages/auth/LoginPage.vue"),
          name: "Login"
        },
        {
          path: "/auth/register",
          component: () => import("./components/pages/auth/RegisterPage.vue"),
          name: "Register"
        }
      ]
    },
    {
      path: "/",
      component: () => import('./components/views/MainView.vue'),
      children: [
        {
          path: "/meditations",
          component: () => import("./components/pages/main/MeditationsPage.vue")
        },
        {
          path: "/meditations/:id",
          component: () => import("./components/pages/main/MeditationsIdPage.vue")
        },
        {
          path: "/stats",
          component: () => import("./components/pages/main/StatsPage.vue")
        }
      ]
    },
  ],
})
