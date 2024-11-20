<template>
  <div class="formulario">
    <!-- Formulario para agregar cliente -->
    <div>
      <label for="name">Nombre</label>
      <select v-model="formData.name" id="name">
        <option v-for="cliente in clientes" :key="cliente.id" :value="cliente.nombre">
          {{ cliente.nombre }}
        </option>
      </select>

      <!-- Botón para agregar cliente -->
      <button @click="goToRegistrarCliente">Agregar Cliente</button>

      <label for="number">Número</label>
      <input type="number" v-model="formData.number" id="number" placeholder="Ingresa el número" />

      <label for="service">Tipo de servicio</label>
      <select v-model="formData.service" id="service">
        <option value="mantenimiento">Mantenimiento</option>
        <option value="instalacion">Instalación</option>
        <option value="soporte">Soporte</option>
      </select>
    </div>

    <!-- Dispositivos -->
    <div>
      <button @click="goToRegistrarEquipo">Agregar Dispositivo</button>
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
import { onMounted, ref } from 'vue'; // Importamos `ref` y `onMounted`
import { useRouter } from 'vue-router';

export default {
  setup() {
    const router = useRouter();

    // Estado para los datos del formulario y la lista de clientes
    const formData = ref({
      name: '',
      number: '',
      service: '',
      devices: [],
    });

    const clientes = ref([]); // Lista de clientes

    // Función para obtener los clientes desde la API
    const obtenerClientes = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/clientes');
        if (response.ok) {
          clientes.value = await response.json();
        } else {
          console.error('Error al obtener los clientes:', await response.text());
        }
      } catch (error) {
        console.error('Error de conexión al obtener los clientes:', error);
      }
    };

    // Llama a obtenerClientes cuando el componente se monta
    onMounted(() => {
      obtenerClientes();
    });

    // Función para redirigir al componente 'registroCliente.vue'
    const goToRegistrarCliente = () => {
      router.push({ name: 'registro-cliente' });
    };

    // Función para redirigir a registroEquipo.vue
    const goToRegistrarEquipo = () => {
      router.push({ name: 'registro-equipo' });
    };

    // Función para agregar dispositivos al formulario
    const addDevice = () => {
      const device = prompt('Ingrese el nombre del dispositivo:');
      if (device) {
        formData.value.devices.push(device);
      }
    };

    // Función para guardar el formulario y enviar los datos a la API
    const saveForm = async () => {
      // Validación de los campos del formulario
      if (
        formData.value.name &&
        formData.value.number &&
        formData.value.service &&
        formData.value.devices.length > 0
      ) {
        try {
          // Enviar los datos al backend a través de una solicitud POST
          const response = await fetch('http://localhost:5000/api/equipos', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData.value),
          });

          if (response.ok) {
            const data = await response.json();
            console.log('Formulario guardado:', data);
            alert('Formulario guardado con éxito!');
            clearForm(); // Limpiar el formulario después de guardarlo
          } else {
            console.error('Error al guardar el formulario:', await response.text());
            alert('Hubo un problema al guardar el formulario.');
          }
        } catch (error) {
          console.error('Error de conexión al guardar el formulario:', error);
          alert('Hubo un problema de conexión. Intenta nuevamente.');
        }
      } else {
        alert('Por favor, complete todos los campos obligatorios.');
      }
    };

    // Función para limpiar el formulario
    const clearForm = () => {
      formData.value = {
        name: '',
        number: '',
        service: '',
        devices: [],
      };
    };

    // Función para cancelar el formulario
    const cancelForm = () => {
      clearForm();
      alert('Formulario cancelado.');
    };

    return {
      formData,
      clientes,
      goToRegistrarCliente,
      goToRegistrarEquipo,
      addDevice,
      saveForm,
      clearForm,
      cancelForm,
    };
  },
};

</script>

<style scoped>
.list-group {
  list-style-type: none;
  padding: 0;
}

.list-group li {
  padding: 8px;
  border: 1px solid #ccc;
  margin: 5px 0;
  border-radius: 5px;
}

button {
  margin: 5px;
}
</style>
