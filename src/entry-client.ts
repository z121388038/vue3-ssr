import { createSSRApp } from 'vue';
import { createWebHistory } from 'vue-router';
import createRouter from './router';
import App from './App.vue';

// 针对客户端的启动逻辑......

const app = createSSRApp(App);
const router = createRouter(createWebHistory());

app.use(router);
// 这里假设 App.vue 模板的根元素有 `id="app"`
// app.mount('#app');
router.isReady().then(() => {
  app.mount('#app');
});

// import { createSSRApp } from 'vue';
// import { createWebHistory } from 'vue-router';
// import createRouter from './router.js';
// import App from './App.vue';
//
// // ...
//
// const app = createSSRApp(App);
//
// const router = createRouter(createWebHistory());
//
// app.use(router);
