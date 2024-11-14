import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../pages/Home.vue'; // Importa el componente HomePage

const routes = [
  {
    path: '/',
    name: 'home',  // Ruta por defecto que se carga al iniciar la app
    component: HomePage,  // El componente que se cargará en la ruta raíz
  },
  {
    path: '/registro-cliente',
    name: 'registro-cliente',
    component: () => import('../views/registroCliente.vue'),  // Asegúrate de que el archivo existe en views
  },
  {
    path: '/registro-equipo',
    name: 'registro-equipo',
    component: () => import('../views/registroEquipo.vue')  // Asegúrate de que el archivo existe en views
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'notfound',
    component: () => import('../pages/NotFound.vue'),  // Página de error para rutas no encontradas
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
