import './assets/main.scss';

import { createPinia } from 'pinia';
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.mount('#app');

export default createRouter({
  history: createWebHistory('/vue-3-crud'),
  routes: [],
});
