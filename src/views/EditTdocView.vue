<template>
    <div class="row mt-3">
        <div class="col-md-6 offset-md-3">
            <div class="card">
                <div class="card-header bg-dark text-white text-center">Editar tipo de documento</div>
                <div class="card-body">
                    <form v-on:submit="guardar">
                        <div class="form-group">
                            <label for="tipoDocumentoNombre">Tipo de Documento</label>
                            <input type="text" class="form-control" id="tipoDocumentoNombre" v-model="tipoDocumentoNombre">
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
import { useRoute } from 'vue-router';

export default {
    data() {
        return {
            tipoDocumentoId: 0,
            tipoDocumentoNombre: '',
            url: 'https://localhost:7008/TiposDocumento'
        };
    },
    async mounted() {
        const route = useRoute();
        this.tipoDocumentoId = route.params.tipoDocumentoId;
        this.url = `${this.url}/${this.tipoDocumentoId}`;
        await this.gettipoDocumento();
    },
    methods: {
        async gettipoDocumento() {
            await axios.get(this.url).then(response => {
                this.tipoDocumentoId = response.data['tipoDocumentoId'];
                this.tipoDocumentoNombre = response.data['tipoDocumentoNombre'];

            }).catch(error => {
                console.error('Error al obtener los datos del cliente:', error);
            });
        },
        async guardar() {
            event.preventDefault();
            if (this.tipoDocumentoNombre.trim() === '') {
                show_alert('Escribe el tipo de documento', 'warning', 'nombre');
            } else {
                const parametros = {
                    tipoDocumentoNombre: this.tipoDocumentoNombre
                };

                envirSolicitud('PUT', parametros, this.url, 'Tipo de documento Actualizado');

            }
        },
    },
};
</script>