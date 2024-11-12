<template>
    <form action="">
        <div class="formulario-personal-group">
            <div class="navbar-personal">
                <img src="https://cuscoinformatico.com/storage/iconos/cuscoinformatico-logo.png" alt="Cusco Informatico">
            </div>

            <form action="#" method="POST" class="formulario-personal">
                <h2>Registro de Personal Técnico</h2>

                <!-- Datos Personales -->
                <fieldset class="fieldset-personal">
                    <legend class="legend-personal">Datos Personales</legend>
                    <label class="label-personal" for="nombre">Nombre:</label>
                    <input class="input-personal" type="text" id="nombre" name="nombre" required>
        
                    <label class="label-personal" for="apellido">Apellido:</label>
                    <input class="input-personal" type="text" id="apellido" name="apellido" required>
        
                    <label class="label-personal" for="dni">DNI:</label>
                    <input class="input-personal" type="text" id="dni" name="dni" required>
                </fieldset>

                <!-- Información Profesional -->
                <fieldset class="fieldset-personal">
                    <legend class="legend-personal">Información Profesional</legend>
                    <label class="label-personal" for="especialidad">Especialidad:</label>
                    <input class="input-personal" type="text" id="especialidad" name="especialidad" required>
        
                    <label class="label-personal" for="servicio">Servicio:</label>
                    <input class="input-personal" type="text" id="servicio" name="servicio" required>
                </fieldset>

                <!-- Información de Contacto -->
                <fieldset class="fieldset-personal">
                    <legend class="legend-personal">Información de Contacto</legend>
                    <label class="label-personal" for="direccion">Dirección:</label>
                    <input class="input-personal" type="text" id="direccion" name="direccion" required>
        
                    <label class="label-personal" for="telefono">Teléfono:</label>
                    <input class="input-personal" type="tel" id="telefono" name="telefono" required>
                </fieldset>

                <!-- Información de Contacto Laboral -->
                <fieldset class="fieldset-personal">
                    <legend class="legend-personal">Información de Contacto Laboral</legend>
                    <label class="label-personal" for="email">Correo Electrónico:</label>
                    <input class="input-personal" type="email" id="email" name="email" required>
        
                    <label class="label-personal" for="telefono_alt">Teléfono Alternativo:</label>
                    <input class="input-personal" type="tel" id="telefono_alt" name="telefono_alt">
                </fieldset>

                <!-- Información Adicional Opcional -->
                <fieldset class="fieldset-personal">
                    <legend class="legend-personal">Información Adicional Opcional</legend>
                    <label class="label-personal" for="notas">Notas Adicionales:</label>
                    <textarea class="textarea-personal" id="notas" name="notas"></textarea>
        
                    <label class="label-personal" for="experiencia">Experiencia (años):</label>
                    <input class="input-personal" type="number" id="experiencia" name="experiencia" min="0">
        
                    <label class="label-personal" for="certificaciones">Cursos o Certificaciones:</label>
                    <input class="input-personal" type="text" id="certificaciones" name="certificaciones">
                </fieldset>

                <button class="button-personal" type="submit">Registrar</button>
            </form>
        </div>
    </form>
</template>
