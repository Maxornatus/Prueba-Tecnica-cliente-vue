<template>
  <div class="row">
    <div class="col-lg-8 offset-lg-2">
      <div class="table-responsive">
        <table class="table table-bordered table-hover">
          <thead>
            <tr>
              <th>ID</th>
              <th>TIPO DE DOCUMENTO</th>
              <th>NUMERO DE CLIENTES</th>
            </tr>
          </thead>
          <tbody class="table-group-divider" id="contenido">
            <tr v-for="Documento, i in TiposDocumento" :key="Documento.tipoDocumentoId">
              <td>{{ Documento.tipoDocumento.tipoDocumentoId }}</td>
              <td>{{ Documento.tipoDocumento.tipoDocumentoNombre }}</td>
              <td>{{ Documento.documentCount }}</td>
              <td>
                <RouterLink :to="{ path: 'editTdoc/' + Documento.tipoDocumento.tipoDocumentoId }" class="btn btn-warning">
                  <i class="fa-solid fa-edit"></i>
                </RouterLink> &nbsp;
                <button class="btn btn-danger"
                  v-on:click="eliminar(Documento.tipoDocumento.tipoDocumentoId, Documento.tipoDocumento.tipoDocumentoNombre)">
                  <i class="fa-solid fa-trash"></i>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
import { confirmarTdoc } from '../funciones'
export default {
  data() {
    return { TiposDocumento: null }
  },
  mounted() {
    this.getTipoDocumento();
  },
  methods: {
    getTipoDocumento() {
      axios.get('https://localhost:7008/TiposDocumentoContador').then(
        response => (
          this.TiposDocumento = response.data
        )
      )
    },
    eliminar(id, tipoDocumentoNombre) {
      confirmarTdoc(id, tipoDocumentoNombre)

    }
  }

}
</script>