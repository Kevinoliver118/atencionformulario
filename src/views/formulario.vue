<template>
  <form class="formulario_group">
    <div class="navbar">
      <img
        src="https://cuscoinformatico.com/storage/iconos/cuscoinformatico-logo.png"
        alt="Cusco Informatico"
      />
    </div>

    <h2>Atención al Cliente</h2>

    <div class="form-row">
      <label for="nombre-cliente">Nombre Cliente:</label>
      <input
        v-if="!clienteSeleccionado"
        type="text"
        id="nombre-cliente"
        v-model="nuevoCliente"
        placeholder="Escriba un nuevo cliente"
      />
      <select
        v-else
        id="nombre-cliente"
        v-model="clienteSeleccionado"
        @change="handleClienteSeleccionado"
      >
        <option v-for="cliente in clientes" :key="cliente.id" :value="cliente.nombre">
          {{ cliente.nombre }}
        </option>
      </select>

      <!-- Botón de redirección -->
      <button class="button-cliente" type="button" @click="redireccionarCliente">
        Agregar Cliente
      </button>

      <label for="celular">Celular:</label>
      <input type="text" id="celular" />

    </div>

    <div class="form-row-1">
      <label for="tipo-servicio">Tipo de Servicio:</label>
      <select id="tipo-servicio" class="input-field">
        <option value="mantenimiento">Mantenimiento</option>
        <option value="reparacion">Reparación</option>
        <option value="consultoria">Consultoría</option>
      </select>
    </div>

    <div class="button-equipos">
      <button type="button" @click="redireccionar" class="button-equipos-btn">
        Agregar Dispositivos
      </button>
      <h1>Lista de Dispositivos</h1>
    </div>

    <table class="dispositivos-table">
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Modelo</th>
          <th>Motivo</th>
          <th>Precio</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td>
            <button class="edit-button">Editar</button>
            <button class="delete-button">Eliminar</button>
          </td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td>
            <button class="edit-button">Editar</button>
            <button class="delete-button">Eliminar</button>
          </td>
        </tr>
        <tr>
          <td> </td>
          <td> </td>
          <td> </td>
          <td></td>
          <td>
            <button class="edit-button">Editar</button>
            <button class="delete-button">Eliminar</button>
          </td>
        </tr>
      </tbody>
    </table>

    <button class="btn-services" type="submit">Guardar Servicio</button>
    <button class="btn-services" type="button">Vaciar Contenido</button>
    <button class="btn-services" type="button">Cancelar</button>
  </form>
</template>

<script setup lang="ts">
import axios from 'axios';
import { onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

// Variables
const clientes = ref<any[]>([]); // Lista de clientes
const nuevoCliente = ref(''); // Nuevo cliente (si no está en la lista)
const clienteSeleccionado = ref(null); // Cliente seleccionado del dropdown

// Función para obtener los clientes desde la API
const obtenerClientes = async () => {
  try {
    const response = await axios.get('http://localhost:3000/api/clientes');
    clientes.value = response.data; // Asignamos la lista de clientes
  } catch (error) {
    console.error('Error al obtener los clientes:', error);
  }
};

// Función que maneja el cambio de selección de cliente
const handleClienteSeleccionado = () => {
  if (clienteSeleccionado.value) {
    nuevoCliente.value = clienteSeleccionado.value;
  }
};

// Redirección
function redireccionar() {
  router.push('/registro-equipo');
}

function redireccionarCliente() {
  router.push('/registro-cliente');
}

// Al cargar el componente, obtenemos los clientes
onMounted(() => {
  obtenerClientes();
});
</script>

<style scoped>
@import '@/assets/scss/formulario.scss'; /* Asegúrate de que esta ruta sea correcta */
</style>
