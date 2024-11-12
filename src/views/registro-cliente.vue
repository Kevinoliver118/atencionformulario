<template>
  <div>
    <h2>Registrar Cliente</h2>
    <form @submit.prevent="registrarCliente">
      <div>
        <label for="nombre_cliente">Nombre:</label>
        <input
          type="text"
          id="nombre_cliente"
          v-model="cliente.nombre_cliente"
          required
        />
      </div>

      <div>
        <label for="ruc_dni">RUC/DNI:</label>
        <input
          type="text"
          id="ruc_dni"
          v-model="cliente.ruc_dni"
          required
        />
      </div>

      <div>
        <label for="direccion">Dirección:</label>
        <input
          type="text"
          id="direccion"
          v-model="cliente.direccion"
          required
        />
      </div>

      <button type="submit">Registrar Cliente</button>
    </form>

    <!-- Mensaje de éxito o error -->
    <p v-if="message" :class="messageType">{{ message }}</p>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      cliente: {
        nombre_cliente: '',
        ruc_dni: '',
        direccion: ''
      },
      message: '',
      messageType: ''
    };
  },
  methods: {
    async registrarCliente() {
      try {
        // Realizamos la solicitud POST a la API para guardar el cliente
        const response = await axios.post('http://localhost:3000/api/clientes/agregar', this.cliente);
        
        // Si la respuesta es exitosa
        this.message = response.data.message;
        this.messageType = 'success';
        
        // Limpiamos los campos del formulario
        this.cliente.nombre_cliente = '';
        this.cliente.ruc_dni = '';
        this.cliente.direccion = '';
      } catch (error) {
        // Si ocurre un error
        this.message = 'Hubo un error al registrar el cliente.';
        this.messageType = 'error';
      }
    }
  }
};
</script>

<style scoped>
/* Estilos sencillos para el formulario */
form {
  display: flex;
  flex-direction: column;
  width: 300px;
  margin: 0 auto;
}

input {
  margin-bottom: 10px;
  padding: 8px;
  font-size: 14px;
  width: 100%;
}

button {
  padding: 10px;
  font-size: 16px;
  background-color: #42b983;
  color: white;
  border: none;
  cursor: pointer;
}

button:hover {
  background-color: #3a9c72;
}

p.success {
  color: green;
}

p.error {
  color: red;
}
</style>
