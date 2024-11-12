<template>
  <div class="form-group">
    <div class="navbar">
      <img src="https://cuscoinformatico.com/storage/iconos/cuscoinformatico-logo.png" alt="Cusco Informatico">
    </div>
    <form class="registro-equipo">
      <h2>Registro de Equipo</h2>
      <div class="registro"> 
        <!-- label de tipo de equipo-->
        <div>
          <label for="tipo-equipo">Tipo de Equipo:</label>
          <select id="tipo-equipo" required>
            <option value="laptop">Laptop</option>
            <option value="monitor">Monitor</option>
            <option value="impresora">Impresora</option>
            <option value=""></option>
          </select>
        </div>

        <!-- label de tipo de marca-->
        <div>
          <label for="marca">Marca:</label>
          <select id="marca" required>
            <option value=""></option>
            <option value=""></option>
            <option value=""></option>
            <option value=""></option>
            <option value=""></option>
            <option value=""></option>
          </select>
        </div>

        <!-- label de tipo de modelo-->
        <div>
          <label for="modelo">Modelo:</label>
          <select id="modelo">
            <option value=""></option>
            <option value=""></option>
            <option value=""></option>
            <option value=""></option>
            <option value=""></option>
          </select>
        </div>

        <!-- label de numero de serie-->
        <div>
          <label for="numero-serie">Número de Serie:</label>
          <input type="text" id="numero-serie" required>
        </div>

        <!-- label de nivel de riesgo-->
        <div>
          <label for="nivel-riesgo">Nivel de riesgo:</label>
          <select id="nivel-riesgo" required @change="mostrarDatos">
            <option value="bajo">Bajo</option>
            <option value="medio">Medio</option>
            <option value="alto">Alto</option>
          </select>
        </div>
      </div>

      <!-- Contenedor .datos -->
      <div class="datos" v-if="mostrarDatosNivel">
        <div class="fila-horizontal">
              <div class="campo-horizontal">
                  <label for="motivo-ingreso">Motivo de Ingreso:</label>
                  <select id="motivo-ingreso">
                      <option value="Garantia">Garantía</option>
                      <option value="Reparacion">Reparación</option>
                      <option value="Otros">Otros</option>
                  </select>
              </div>
              <div class="campo-horizontal">
                  <label for="estado-equipo">Estado del Equipo:</label>
                  <select id="estado-equipo" required>
                      <option value="operativo">Nuevo</option>
                      <option value="no-prende">Semi nuevo</option>
                  </select>
              </div>
          </div>
              <!-- Con qué ingresa el equipo -->
              <label>¿Con qué ingresa el equipo?</label>
              <div class="checkbox-group">
                  <label class="container">
                      Cable
                      <input type="checkbox">
                      <div class="checkmark"></div>
                  </label>
                  <label class="container">
                      Funda
                      <input type="checkbox">
                      <div class="checkmark"></div>
                  </label>
                  <label class="container">
                      Adaptador
                      <input type="checkbox">
                      <div class="checkmark"></div>
                  </label>
                  <label class="container">
                      Ratón
                      <input type="checkbox">
                      <div class="checkmark"></div>
                  </label>
                  <label class="container">
                      Otro
                      <input type="checkbox">
                      <div class="checkmark"></div>
                  </label>
              </div>

              <!-- Nuevo campo de Observaciones -->
              <label for="observaciones">Observaciones:</label>
              <textarea id="observaciones" rows="4" placeholder="Escriba cualquier observación adicional"></textarea>
              <!--label de precio-->
              <div class="campo-horizontal">
                  <label for="precio">Precio (en S/.):</label>
                  <div class="input-con-signo">
                      <span class="signo">S/</span>
                      <input type="number" id="precio" required placeholder="0.00">
                  </div>
              </div>
          </div>
      <div class="buttons-below">
        <button type="submit">Registrar</button>
        <button type="button" @click="cancelar">Cancelar</button>
      </div>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const mostrarDatosNivel = ref(false);

function mostrarDatos(event) {
  // Mostrar el div .datos si el nivel de riesgo es "Medio" o "Alto"
  const nivelSeleccionado = event.target.value;
  mostrarDatosNivel.value = nivelSeleccionado === 'medio' || nivelSeleccionado === 'alto';
}

function cancelar() {
  router.push('/'); // Cambia '/' a la ruta a la que desees redirigir
}
</script>

<style scoped>
@import '@/assets/scss/main.css';
</style>
