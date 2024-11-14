<template>
    <div class="formulario">
      <!-- Formulario para agregar cliente -->
      <div>
        <label for="name">Nombre</label>
        <input type="text" v-model="formData.name" id="form" placeholder="Ingresa el nombre" />
  
        <!-- Botón para agregar cliente -->
        <button @click="goToRegistrarCliente">Agregar Cliente</button>
  
        <label for="number">Número</label>
        <input type="number" v-model="formData.number" id="form" placeholder="Ingresa el número" />
  
        <label for="service">Tipo de servicio</label>
        <select v-model="formData.service" id="mantenimiento">
          <option value="mantenimiento">Mantenimiento</option>
          <option value="instalacion">Instalación</option>
          <option value="soporte">Soporte</option>
        </select>
      </div>
  
      <!-- Dispositivos -->
      <div>
        <button @click="addDevice">Agregar Dispositivo</button>
        <ul class="list-group">
          <li v-for="(device, index) in formData.devices" :key="index">{{ device }}</li>
        </ul>
      </div>
  
      <!-- Botones de acción -->
      <div>
        <button @click="saveForm">Guardar Servicios</button>
        <button @click="clearForm">Vaciar Contenido</button>
        <button @click="cancelForm">Cancelar</button>
      </div>
    </div>
  </template>
  
  <script>
  // Importamos el router para realizar la navegación
  import { useRouter } from 'vue-router';
  
  export default {
    setup() {
      // Usamos el enrutador
      const router = useRouter();
  
      const formData = {
        name: '',
        number: '',
        service: '',
        devices: [],
      };
  
      // Función para redirigir al componente 'registroCliente.vue'
      const goToRegistrarCliente = () => {
        router.push({ name: 'registro-cliente' }); // Redirige a la ruta 'registro-cliente'
      };
  
      // Agregar dispositivo a la lista
      const addDevice = () => {
        const device = prompt("Ingrese el nombre del dispositivo:");
        if (device) {
          formData.devices.push(device);
        }
      };
  
      // Guardar formulario
      const saveForm = () => {
        console.log("Formulario Guardado", formData);
        alert("Formulario guardado con éxito!");
      };
  
      // Limpiar formulario
      const clearForm = () => {
        formData.name = '';
        formData.number = '';
        formData.service = '';
        formData.devices = [];
      };
  
      // Cancelar formulario
      const cancelForm = () => {
        clearForm();
        alert("Formulario cancelado.");
      };
  
      return {
        formData,
        goToRegistrarCliente,
        addDevice,
        saveForm,
        clearForm,
        cancelForm
      };
    }
  };
  </script>
  
  <style scoped>
  /* Estilos para el formulario */
  .formulario {
    margin: 20px;
    padding: 20px;
    border: 1px solid #ddd;
    border-radius: 8px;
  }
  
  label {
    font-weight: bold;
  }
  
  input, select {
    width: 100%;
    padding: 8px;
    margin: 10px 0;
    border-radius: 4px;
    border: 1px solid #ccc;
  }
  
  button {
    background-color: #024059;
    color: white;
    padding: 10px 15px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  
  button:hover {
    background-color: #022d3a;
  }
  
  .list-group {
    list-style-type: none;
    padding: 0;
  }
  
  .list-group li {
    background-color: #f4f4f4;
    margin: 5px 0;
    padding: 8px;
    border-radius: 4px;
  }
  </style>
  