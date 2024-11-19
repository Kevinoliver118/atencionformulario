<template>
  <div>
    <h2>Crear un nuevo Cliente</h2>
    <form @submit.prevent="registrarCliente">
      <div>
        <label for="nombre">Nombre y Apellido:</label>
        <input
          type="text"
          id="nombre"
          v-model="cliente.nombre"
          placeholder="Nombre y Apellido del Cliente"
          required
        />
      </div>

      <div>
        <label for="rucDni">RUC o DNI:</label>
        <input
          type="text"
          id="rucDni"
          v-model="cliente.ruc_dni"
          placeholder="DNI o RUC"
          required
        />
      </div>

      <div>
        <label for="direccion">Dirección:</label>
        <input
          type="text"
          id="direccion"
          v-model="cliente.direccion"
          placeholder="Dirección del Cliente"
          required
        />
      </div>

      <div>
        <button type="submit">Guardar</button>
        <button type="button" @click="vaciarFormulario">Vaciar</button>
        <button type="button" @click="cancelar">Cancelar</button>
      </div>

      <p v-if="message" :class="messageType">{{ message }}</p>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cliente: {
        nombre: '',
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
        const response = await fetch('http://localhost:5000/registrarCliente', {

          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
          body: new URLSearchParams({
            nombre: this.cliente.nombre,
            ruc_dni: this.cliente.ruc_dni,
            direccion: this.cliente.direccion,
          }),
        });

        const data = await response.json();

        if (response.ok) {
          this.message = `Cliente registrado correctamente con ID: ${data.clienteId}`;
          this.messageType = 'success';
        } else {
          throw new Error(data.message);
        }

        this.vaciarFormulario();
      } catch (error) {
        this.message = 'Hubo un error al registrar el cliente.';
        this.messageType = 'error';
      }
    },
    vaciarFormulario() {
      this.cliente.nombre = '';
      this.cliente.ruc_dni = '';
      this.cliente.direccion = '';
      this.message = '';
      this.messageType = '';
    },
    cancelar() {
      this.vaciarFormulario();
    }
  }
};
</script>

<style scoped>
/* Aquí puedes agregar tus estilos si lo deseas */
</style>
