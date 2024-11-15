import vue from '@vitejs/plugin-vue';
import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vite';

// https://vite.dev/config/
export default defineConfig({
    plugins: [vue()],
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src',
                import.meta.url)),
            '@scss': fileURLToPath(new URL('./src/styles/',
                import.meta.url)), // Define el alias correctamente
        }
    },
    define: {
        'process.env': {} // Agrega esta línea para compatibilidad
    },
    build: {
        cssCodeSplit: false, // Evita la división del CSS y asegura que todo se compile en un solo archivo
    },
    server: {
        proxy: {
            // Redirige todas las solicitudes que comiencen con /api al backend en http://localhost:3000
            '/registrarCliente': {
                target: 'http://localhost:3000',
                changeOrigin: true,
                rewrite: (path) => path.replace(/^\/registrarCliente/, '/registrarCliente'),
            },
        },
    },
});