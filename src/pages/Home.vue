<!-- src/pages/Home.vue -->
<template>
    <div class="home">
      <h1>Bienvenido a la Página Principal</h1>
      <!-- Aquí incluimos el componente Formulario -->
      <Formulario />
    </div>
  </template>
  
  <script>
  // Importamos el componente Formulario
  import Formulario from '@/components/Formulario.vue';
  
  export default {
    name: 'Home',
    components: {
      Formulario // Registramos el componente Formulario
    }
  }
  </script>
  
  <style scoped>
  /* Estilos específicos para esta página */
  .home {
    padding: 20px;
  }
  </style>
  