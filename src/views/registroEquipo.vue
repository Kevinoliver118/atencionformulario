<template>
    <div>
      <h2>Registrar Equipo</h2>
      <form @submit.prevent="registrarEquipo">
        <!-- Tipo de Equipo -->
        <div>
          <label for="tipo">Tipo de equipo:</label>
          <select v-model="equipo.tipo" @change="actualizarMarcas" id="tipo" required>
            <option v-for="tipo in tipos" :key="tipo.value" :value="tipo.value">{{ tipo.label }}</option>
          </select>
        </div>
  
        <!-- Marca del equipo -->
        <div v-if="equipo.tipo">
          <label for="marca">Marca:</label>
          <input type="text" id="marca" v-model="equipo.marca" @input="actualizarModelos" placeholder="Escribe o selecciona marca" list="marca-list" required />
          <datalist id="marca-list">
            <option v-for="marca in marcas" :key="marca.marca" :value="marca.marca"></option>
          </datalist>
        </div>
  
        <!-- Modelo del equipo -->
        <div v-if="equipo.marca">
          <label for="modelo">Modelo:</label>
          <input type="text" id="modelo" v-model="equipo.modelo" @input="filtrarModelos" placeholder="Escribe o selecciona modelo" list="modelo-list" required />
          <datalist id="modelo-list">
            <option v-for="modelo in modelosFiltrados" :key="modelo" :value="modelo"></option>
          </datalist>
        </div>
  
        <!-- Número de serie -->
        <div>
          <label for="numeroSerie">Número de Serie:</label>
          <input type="text" id="numeroSerie" v-model="equipo.numeroSerie" placeholder="Número de Serie" required />
        </div>
  
        <!-- Motivo de ingreso -->
        <div>
          <label for="motivoIngreso">Motivo de Ingreso:</label>
          <textarea id="motivoIngreso" v-model="equipo.motivoIngreso" placeholder="Describe el motivo de ingreso" rows="4" required></textarea>
        </div>
  
        <!-- Accesorios -->
        <div>
          <label>Accesorios:</label>
          <div v-for="(accesorio, index) in accesorios" :key="index">
            <label>
              <input type="checkbox" :value="accesorio" v-model="equipo.accesorios" />
              {{ accesorio }}
            </label>
          </div>
          <label>
            <input type="checkbox" value="Otro" v-model="equipo.accesorios" @change="agregarAccesorio" /> Otro
          </label>
          <div v-if="equipo.accesorios.includes('Otro')">
            <input type="text" v-model="nuevoAccesorio" placeholder="Especifica otro accesorio" />
            <button type="button" @click="agregarOtroAccesorio">Agregar</button>
          </div>
        </div>
  
        <!-- Observaciones -->
        <div>
          <label for="observaciones">Observaciones:</label>
          <textarea id="observaciones" v-model="equipo.observaciones" placeholder="Detalles adicionales sobre el equipo" rows="4"></textarea>
        </div>
  
        <!-- Precio -->
        <div>
          <label for="precio">Precio (S/):</label>
          <input type="number" id="precio" v-model="equipo.precio" placeholder="Precio" required />
        </div>
  
        <!-- Cliente -->
        <div>
          <label for="clienteId">ID del Cliente:</label>
          <select v-model="equipo.clienteId" @change="actualizarClienteId" id="clienteId" required>
            <option v-for="cliente in clientes" :key="cliente.id" :value="cliente.id">{{ cliente.nombre }}</option>
          </select>
        </div>
  
        <button type="submit">Registrar</button>
      </form>
  
      <p v-if="message" :class="{ success: isSuccess, error: !isSuccess }">{{ message }}</p>
    </div>
  </template>
  
  <script>
  import datosEquipos from '@/data/datosEquipos.js'; // Importa el archivo de datos
  
  export default {
    data() {
      return {
        tipos: datosEquipos.tipos,
        equiposData: datosEquipos.marcasYModelos,
        equipo: {
          tipo: '',
          marca: '',
          modelo: '',
          numeroSerie: '',
          motivoIngreso: '',
          accesorios: [],
          observaciones: '',
          precio: '',
          clienteId: ''
        },
        marcas: [],
        modelosFiltrados: [],
        accesorios: ['Cable', 'Cargador', 'Con funda', 'Con mouse'], // Accesorios predeterminados
        nuevoAccesorio: '',
        clientes: [],
        message: '',
        isSuccess: false,
      };
    },
    created() {
      this.cargarClientes();
    },
    methods: {
      // Función para obtener la lista de clientes desde la API
      async cargarClientes() {
        try {
          const response = await fetch('http://localhost:5000/api/clientes');
          const data = await response.json();
  
          if (response.ok) {
            this.clientes = data;
          } else {
            throw new Error(data.error || 'Error al cargar los clientes');
          }
        } catch (error) {
          console.error('Error al cargar los clientes', error);
        }
      },
  
      // Funciones de actualización de marcas y modelos
      actualizarMarcas() {
        this.marcas = this.equiposData[this.equipo.tipo] || [];
        this.modelosFiltrados = []; // Limpiar modelos al cambiar el tipo
        this.equipo.marca = ''; // Resetear la marca
        this.equipo.modelo = ''; // Resetear el modelo
      },
      actualizarModelos() {
        if (this.equipo.marca && !this.marcas.some(m => m.marca.toLowerCase() === this.equipo.marca.toLowerCase())) {
          this.marcas.push({ marca: this.equipo.marca });
        }
        this.filtrarModelos(); // Filtrar modelos después de actualizar la marca
      },
      filtrarModelos() {
        if (this.equipo.marca) {
          const marcaSeleccionada = this.equiposData[this.equipo.tipo]?.find(
            (m) => m.marca.toLowerCase() === this.equipo.marca.toLowerCase()
          );
          this.modelosFiltrados = marcaSeleccionada ? marcaSeleccionada.modelos : [];
        } else {
          this.modelosFiltrados = [];
        }
      },
  
      // Funciones de accesorios
      agregarAccesorio() {
        if (this.equipo.accesorios.includes('Otro') && this.nuevoAccesorio) {
          this.equipo.accesorios.push(this.nuevoAccesorio);
          this.nuevoAccesorio = ''; // Limpiar campo de otro accesorio
        }
      },
      agregarOtroAccesorio() {
        if (this.nuevoAccesorio && !this.equipo.accesorios.includes(this.nuevoAccesorio)) {
          this.equipo.accesorios.push(this.nuevoAccesorio);
          this.nuevoAccesorio = ''; // Limpiar campo
        }
      },
  
      // Función para registrar el equipo
      async registrarEquipo() {
        try {
          const response = await fetch('http://localhost:5000/api/equipos', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(this.equipo),
          });
  
          const data = await response.json();
  
          if (response.ok) {
            this.message = 'Equipo registrado correctamente.';
            this.isSuccess = true;
          } else {
            throw new Error(data.error || 'Error al registrar equipo.');
          }
  
          this.limpiarFormulario();
        } catch (error) {
          this.message = error.message;
          this.isSuccess = false;
        }
      },
  
      limpiarFormulario() {
        this.equipo = {
          tipo: '',
          marca: '',
          modelo: '',
          numeroSerie: '',
          motivoIngreso: '',
          accesorios: [],
          observaciones: '',
          precio: '',
          clienteId: ''
        };
      }
    }
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
  