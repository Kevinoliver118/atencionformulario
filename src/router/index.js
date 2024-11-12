import Formulario from '@/views/formulario.vue';
import RegistroCliente from '@/views/registro-cliente.vue'; // Importa el componente
import RegistroEquipo from '@/views/registro-equipo.vue';
import { createRouter, createWebHistory } from 'vue-router';

const routes = [{
        path: '/',
        name: 'Formulario',
        component: Formulario,
    },
    {
        path: '/registro-equipo',
        name: 'RegistroEquipo',
        component: RegistroEquipo,
    },
    {
        path: '/registro-cliente', // Nueva ruta
        name: 'RegistroCliente',
        component: RegistroCliente,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;