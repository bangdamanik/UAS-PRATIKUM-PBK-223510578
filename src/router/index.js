import { createRouter, createWebHistory } from 'vue-router';
import Awal from '../pages/awal.vue';
import Weather from '../components/weathernegara.vue'; 

const routes = [
  { path: '/', component: Awal },
  { path: '/weather', component: Weather },

];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;