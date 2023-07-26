<template>
    <div class="row mt-3">
        <div class="col-md-6 offset-md-3">
            <div class="card">
                <div class="card-header bg-dark text-white text-center">Crear cliente</div>
                <div class="card-body">
                    <form v-on:submit="guardar">
                        <div class="form-group">
                            <label for="nombre">Nombre</label>
                            <input type="text" class="form-control" id="nombre" v-model="nombre" placeholder="Juan">
                        </div>
                        <div class="form-group">
                            <label for="apellidos">Apellidos</label>
                            <input type="text" class="form-control" id="apellidos" v-model="apellidos"
                                placeholder="Gonzales Romero">
                        </div>
                        <div class="form-group">
                            <label for="tipoDocumentoId">Tipo de documento</label>
                            <select class="form-control" id="tipoDocumentoId" v-model="tipoDocumentoId">
                                <option v-for="tipoDocumento in TiposDocumento" :key="tipoDocumento.tipoDocumentoId"
                                    :value="tipoDocumento.tipoDocumentoId">
                                    {{ tipoDocumento.tipoDocumentoNombre }}
                                </option>
                            </select>
                        </div>
                        <div class="form-group">
                            <label for="numeroDocumento">Numero de documento</label>
                            <input type="text" class="form-control" id="numeroDocumento" v-model="numeroDocumento"
                                placeholder="123456789">
                        </div>
                        <div class="form-group">
                            <label for="pais">Pais</label>
                            <input type="text" class="form-control" id="pais" v-model="pais" placeholder="Colombia">
                        </div>
                        <div class="form-group">
                            <label for="departamento">Departamento</label>
                            <input type="text" class="form-control" id="departamento" v-model="departamento"
                                placeholder="Quindío">
                        </div>
                        <div class="form-group">
                            <label for="numeroTelefono">Telefono</label>
                            <input type="text" class="form-control" id="numeroTelefono" v-model="numeroTelefono"
                                placeholder="3058796485">
                        </div>
                        <div class="form-group">
                            <label for="correoElectronico">Correo</label>
                            <input type="email" class="form-control" id="correoElectronico" v-model="correoElectronico"
                                placeholder="name@example.com">
                        </div>
                        <div class="row">
                            <label for="fechaNacimento">Fecha de naciemiento</label>
                            <div class="col-lg-2">
                                <label for="Año">Año</label>
                                <input type="text" class="form-control" id="Año" placeholder="YYYY" v-model="Año" required>
                                <div class="invalid-feedback">
                                    Campo requerido.
                                </div>
                            </div>
                            <div class="col-lg-2">
                                <label for="Mes">Mes</label>
                                <input type="text" class="form-control" id="Mes" placeholder="MM" v-model="Mes" required>
                                <div class="invalid-feedback">
                                    Campo requerido.
                                </div>
                            </div>
                            <div class="col-lg-2">
                                <label for="Dia">Dia</label>
                                <input type="text" class="form-control" id="Dia" placeholder="DD" v-model="Dia" required>
                                <div class="invalid-feedback">
                                    Campo requerido.
                                </div>
                            </div>
                        </div>
                        <br>
                        <div class="d-grid col-7 mx-auto">
                            <button class="btn btn-success"><i class="fa-solid fa-floppy-disk"></i>Guardar</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script>
import axios from 'axios';
import { show_alert, envirSolicitud } from '../funciones';

export default {
    data() {
        return {
            nombre: '',
            apellidos: '',
            tipoDocumentoId: '',
            numeroDocumento: '',
            pais: '',
            departamento: '',
            numeroTelefono: '',
            correoElectronico: '',
            fechaNacimiento: '',
            url: 'https://localhost:7008/Clientes',
            Año: '',
            Mes: '',
            Dia: '',
            TiposDocumento: [],
        };
    },
    mounted() {
        this.gettipoDocumento();
    },
    methods: {
        gettipoDocumento() {
            axios.get('https://localhost:7008/TiposDocumento').then((response) => {
                this.TiposDocumento = response.data;
            }).catch((error) => {
                console.error('Error al obtener los tipos de documento:', error);
            });
        },

        guardar(event) {
            event.preventDefault();
            if (this.nombre.trim() === '') {
                show_alert('Escribe el nombre', 'warning', 'nombre');
            } else if (this.apellidos.trim() === '') {
                show_alert('Escribe los apellidos', 'warning', 'apellidos');
            } else if (this.tipoDocumentoId === '') {
                show_alert('Selecciona el tipo de documento', 'warning', 'tipoDocumentoId');
            } else if (this.numeroDocumento.trim() === '') {
                show_alert('Escribe el número de documento', 'warning', 'numeroDocumento');
            } else if (this.pais.trim() === '') {
                show_alert('Escribe el país', 'warning', 'pais');
            } else if (this.departamento.trim() === '') {
                show_alert('Escribe el departamento', 'warning', 'departamento');
            } else if (this.numeroTelefono.trim() === '') {
                show_alert('Escribe el teléfono', 'warning', 'numeroTelefono');
            } else if (this.correoElectronico.trim() === '') {
                show_alert('Escribe el correo electrónico', 'warning', 'correoElectronico');
            } else if (this.Año.trim() === '' || this.Mes.trim() === '' || this.Dia.trim() === '') {
                show_alert('Completa la fecha de nacimiento', 'warning', 'Año');
            } else {

                this.fechaNacimiento = this.Año + '-' + this.Mes + '-' + this.Dia

                var parametros = {
                    nombre: this.nombre.trim(),
                    apellidos: this.apellidos.trim(),
                    tipoDocumentoId: this.tipoDocumentoId,
                    numeroDocumento: this.numeroDocumento.trim(),
                    pais: this.pais.trim(),
                    departamento: this.departamento.trim(),
                    numeroTelefono: this.numeroTelefono.trim(),
                    correoElectronico: this.correoElectronico.trim(),
                    fechaNacimiento: this.fechaNacimiento,
                };

                envirSolicitud('POST', parametros, this.url, 'Cliente guardado')

            }
        }

    }
}
</script>
  
  
 


