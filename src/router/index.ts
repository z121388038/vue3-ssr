import { createRouter, RouterHistory } from 'vue-router';

// const routes = [{ path: '/user', component: () => import('../views/AboutView.vue') }];

export default function (history: RouterHistory) {
  return createRouter({
    history,
    routes: [
      { path: '/', component: () => import('../views/HomeView.vue') },
      { path: '/about', component: () => import('../views/AboutView.vue') },
    ],
  });
}
