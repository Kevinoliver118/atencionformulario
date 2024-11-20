<template>
    <div class="registro-equipo">
      <h1>Registro de Equipo</h1>
      <form @submit.prevent="guardarEquipo">
        <!-- Tipo de equipo -->
        <label for="tipo-equipo">Tipo de Equipo</label>
        <select id="tipo-equipo" v-model="equipo.tipo" @change="actualizarMarcasModelos">
          <option value="" disabled>Seleccione un tipo</option>
          <option value="computadora">Computadora</option>
          <option value="impresora">Impresora</option>
          <option value="router">Router</option>
          <option value="otro">Otro</option>
        </select>
  
        <!-- Marca -->
        <label for="marca">Marca</label>
        <input
          type="text"
          id="marca"
          v-model="equipo.marca"
          placeholder="Ingrese la marca del equipo"
          @input="filtrarMarcas"
        />
        <ul v-if="marcasFiltradas.length && equipo.marca">
          <li
            v-for="(marca, index) in marcasFiltradas"
            :key="index"
            @click="seleccionarMarca(marca)"
          >
            {{ marca }}
          </li>
        </ul>
  
        <!-- Modelo -->
        <label for="modelo">Modelo</label>
        <input
          type="text"
          id="modelo"
          v-model="equipo.modelo"
          placeholder="Ingrese el modelo del equipo"
          @input="filtrarModelos"
        />
        <ul v-if="modelosFiltrados.length && equipo.modelo">
          <li
            v-for="(modelo, index) in modelosFiltrados"
            :key="index"
            @click="seleccionarModelo(modelo)"
          >
            {{ modelo }}
          </li>
        </ul>
  
        <!-- Número de serie -->
        <label for="numero-serie">Número de Serie</label>
        <input
          type="text"
          id="numero-serie"
          v-model="equipo.numeroSerie"
          placeholder="Ingrese el número de serie"
        />
  
        <!-- Motivo de ingreso -->
        <label for="motivo-ingreso">Motivo de Ingreso</label>
        <textarea
          id="motivo-ingreso"
          v-model="equipo.motivoIngreso"
          placeholder="Describa el motivo de ingreso"
        ></textarea>
  
        <!-- Accesorios -->
        <label>Accesorios</label>
        <div>
          <label>
            <input type="checkbox" v-model="equipo.accesorios" value="Cable" /> Cable
          </label>
          <label>
            <input type="checkbox" v-model="equipo.accesorios" value="Cargador" /> Cargador
          </label>
          <label>
            <input type="checkbox" v-model="equipo.accesorios" value="Funda" /> Funda
          </label>
          <label>
            <input type="checkbox" v-model="equipo.accesorios" value="Mouse" /> Mouse
          </label>
          <label>
            <input type="checkbox" v-model="equipo.accesorios" value="Otros" /> Otros
          </label>
        </div>
  
        <!-- Botón para agregar accesorios personalizados -->
        <button type="button" @click="agregarAccesorio">Agregar Accesorio</button>
  
        <!-- Mostrar accesorios personalizados -->
        <ul>
          <li v-for="(accesorio, index) in equipo.accesoriosExtra" :key="index">
            {{ accesorio }}
          </li>
        </ul>
  
        <!-- Descripción -->
        <label for="descripcion">Descripción</label>
        <textarea
          id="descripcion"
          v-model="equipo.descripcion"
          placeholder="Ingrese una descripción detallada del equipo"
        ></textarea>
  
        <!-- Precio -->
        <label for="precio">Precio</label>
        <input
          type="number"
          id="precio"
          v-model="equipo.precio"
          placeholder="Ingrese el precio estimado"
        />
  
        <!-- Botones de acción -->
        <button type="submit">Guardar Equipo</button>
        <button type="button" @click="cancelar">Cancelar</button>
      </form>
    </div>
  </template>
  
  <script>
 import axios from 'axios'; // Asegúrate de tener axios instalado

import datosEquipos from "@/data/datosEquipos.js";

export default {
  data() {
    return {
      equipo: {
        tipo: '',
        marca: '',
        modelo: '',
        numeroSerie: '',
        motivoIngreso: '',
        accesorios: [], // Para almacenar los accesorios seleccionados
        accesoriosExtra: [], // Para accesorios personalizados
        descripcion: '',
        precio: '', // Campo adicional para el precio
        clienteId: 1, // Asegúrate de obtener el clienteID de alguna parte si es necesario
      },
      marcasFiltradas: [],
      modelosFiltrados: [],
      marcasDisponibles: [],
      modelosDisponibles: [],
    };
  },
  watch: {
    // Actualizamos los modelos disponibles cada vez que se selecciona un tipo
    'equipo.tipo': function(newTipo) {
      this.marcasDisponibles = datosEquipos.marcasYModelos[newTipo] || [];
      this.marcasFiltradas = this.marcasDisponibles.map(item => item.marca);
      this.modelosFiltrados = [];
      this.equipo.marca = '';
      this.equipo.modelo = '';
    },
  },
  methods: {
    actualizarMarcasModelos() {
      if (this.equipo.tipo) {
        this.marcasDisponibles = datosEquipos.marcasYModelos[this.equipo.tipo] || [];
        this.marcasFiltradas = this.marcasDisponibles.map(item => item.marca);
        this.modelosFiltrados = [];
      }
    },
    filtrarMarcas() {
      if (this.equipo.marca) {
        this.marcasFiltradas = this.marcasDisponibles
          .filter(marca => marca.marca.toLowerCase().includes(this.equipo.marca.toLowerCase()))
          .map(marca => marca.marca);
      } else {
        this.marcasFiltradas = this.marcasDisponibles.map(marca => marca.marca);
      }
    },
    seleccionarMarca(marca) {
      this.equipo.marca = marca;
      this.modelosFiltrados = this.marcasDisponibles
        .find(item => item.marca === marca).modelos;
    },
    filtrarModelos() {
      if (this.equipo.modelo) {
        this.modelosFiltrados = this.modelosDisponibles.filter(modelo =>
          modelo.toLowerCase().includes(this.equipo.modelo.toLowerCase())
        );
      }
    },
    seleccionarModelo(modelo) {
      this.equipo.modelo = modelo;
    },
    async guardarEquipo() {
      if (
        this.equipo.tipo &&
        this.equipo.marca &&
        this.equipo.modelo &&
        this.equipo.numeroSerie &&
        this.equipo.motivoIngreso &&
        this.equipo.descripcion &&
        this.equipo.precio
      ) {
        try {
          // Hacemos la solicitud POST al backend para guardar el equipo
          const response = await axios.post('http://localhost:5000/api/equipos', this.equipo);
          
          if (response.status === 201) {
            console.log('Equipo guardado:', response.data);
            alert('Equipo guardado con éxito.');
            this.limpiarFormulario();
          }
        } catch (error) {
          console.error('Error al guardar el equipo:', error);
          alert('Hubo un problema al guardar el equipo. Intenta nuevamente.');
        }
      } else {
        alert('Por favor complete todos los campos obligatorios.');
      }
    },
    agregarAccesorio() {
      const nuevoAccesorio = prompt('Ingrese el nombre del accesorio:');
      if (nuevoAccesorio) {
        this.equipo.accesoriosExtra.push(nuevoAccesorio);
      }
    },
    cancelar() {
      this.limpiarFormulario();
      this.$router.push({ name: 'home' }); // Cambiar a la ruta principal u otra
    },
    limpiarFormulario() {
      this.equipo = {
        tipo: '',
        marca: '',
        modelo: '',
        numeroSerie: '',
        motivoIngreso: '',
        accesorios: [],
        accesoriosExtra: [],
        descripcion: '',
        precio: '',
      };
    },
  },
};
  </script>
  
  <style scoped>
  /* Aquí puedes agregar estilos específicos para la lista de sugerencias */
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    background-color: white;
    border: 1px solid #ccc;
    max-height: 150px;
    overflow-y: auto;
  }
  
  ul li {
    padding: 10px;
    cursor: pointer;
  }
  
  ul li:hover {
    background-color: #f0f0f0;
  }
  </style>
  