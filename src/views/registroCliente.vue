<template>
  <div>
    <h2>Registrar Cliente</h2>
    <form @submit.prevent="registrarCliente">
      <div>
        <label for="nombre">Nombre:</label>
        <input type="text" id="nombre" v-model="cliente.nombre" placeholder="Nombre" required />
      </div>
      <div>
        <label for="ruc_dni">RUC/DNI:</label>
        <input type="text" id="ruc_dni" v-model="cliente.ruc_dni" placeholder="RUC o DNI" required />
      </div>
      <div>
        <label for="direccion">Dirección:</label>
        <input type="text" id="direccion" v-model="cliente.direccion" placeholder="Dirección" required />
      </div>
      <button type="submit">Registrar</button>
    </form>
    <p v-if="message" :class="{ success: isSuccess, error: !isSuccess }">{{ message }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cliente: {
        nombre: '',
        ruc_dni: '',
        direccion: '',
      },
      message: '',
      isSuccess: false,
    };
  },
  methods: {
    async registrarCliente() {
      try {
        const response = await fetch('http://localhost:5000/api/clientes', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(this.cliente),
        });

        const data = await response.json();

        if (response.ok) {
          this.message = 'Cliente registrado exitosamente.';
          this.isSuccess = true;
        } else {
          throw new Error(data.message || 'Error al registrar cliente.');
        }

        this.limpiarFormulario();
      } catch (error) {
        this.message = error.message;
        this.isSuccess = false;
      }
    },
    limpiarFormulario() {
      this.cliente = { nombre: '', ruc_dni: '', direccion: '' };
    },
  },
};
</script>

<style scoped>
.success {
  color: green;
}
.error {
  color: red;
}
</style>
