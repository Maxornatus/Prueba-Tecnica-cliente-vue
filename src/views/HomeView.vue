<template>
  <div class="row">
    <div class="col-lg-8 offset-lg-2">
      <div class="table-responsive">
        <table class="table table-bordered table-hover">
          <thead>
            <tr>
              <th>ID</th>
              <th>NOMBRE</th>
              <th>APELLIDOS</th>
              <th>TIPO DE DOCUMENTO</th>
              <th>NUMERO DE DOCUMENTO</th>
              <th>PAIS</th>
              <th>DEPARTAMENTO</th>
              <th>TELEFONO</th>
              <th>CORREO</th>
              <th>FECHA DE NACIMIENTO</th>
              <th>ACCION</th>
            </tr>
          </thead>
          <tbody class="table-group-divider" id="contenido">
            <tr v-for="cliente, i in clientes" :key="cliente.clienteId">
              <td>{{ (i + 1) }}</td>
              <td>{{ cliente.nombre }}</td>
              <td>{{ cliente.apellidos }}</td>
              <td>{{ cliente.tipoDocumentoNombre }}</td>
              <td>{{ cliente.numeroDocumento }}</td>
              <td>{{ cliente.pais }}</td>
              <td>{{ cliente.departamento }}</td>
              <td>{{ cliente.numeroTelefono }}</td>
              <td>{{ cliente.correoElectronico }}</td>
              <td>{{ cliente.fechaNacimiento }}</td>
              <td>
                <RouterLink :to="{ path: 'edit/' + cliente.clienteId }" class="btn btn-warning">
                  <i class="fa-solid fa-edit"></i>
                </RouterLink> &nbsp;
                <button class="btn btn-danger" v-on:click="eliminar(cliente.clienteId, cliente.nombre)">
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
import { confirmar } from '../funciones'
export default {
  data() {
    return { clientes: null }
  },
  mounted() {
    this.getClientes();
  },
  methods: {
    getClientes() {
      axios.get('https://localhost:7008/ClientesDocumentos').then(
        response => (
          this.clientes = response.data
        )
      )
    },
    eliminar(id, nombre) {
      confirmar(id, nombre)

    }
  }

}
</script>