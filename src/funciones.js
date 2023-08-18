import axios from "axios"
import Swal from "sweetalert2";

export function show_alert(mensaje, icon, foco = '') {
    if (foco !== '') {
        document.getElementById(foco).focus();
    }
    Swal.fire({
        title: mensaje,
        icon: icon,
        customClass: { confirmButton: 'btn btn-primary', popup: 'animated zoomIn' },
        buttonsStyling: false
    })
}

export function confirmar(id, name) {
    let url = 'https://localhost:7008/Clientes/' + id
    const swalWithBootstrapButtons = Swal.mixin({
        customClass: { confirmButton: 'btn btn-success me-3', cancelButton: 'btn btn-danger' },
        buttonsStyling: false
    })
    swalWithBootstrapButtons.fire({
        title: 'Seguro de eliminar información ' + name,
        text: 'Se perdeá la información del cliente',
        icon: 'question',
        showCancelButton: true,
        confirmButtonText: '<i class="fa-solid fa-check"></i> Si, eliminar',
        cancelButtonText: '<i class="fa-solid fa-ban"></i> Cancelar'
    }).then((ressult) => {
        if (ressult.isConfirmed) {
            envirSolicitud('DELETE', id, url, 'Cliente Eliminado')
        }
        else {
            show_alert('Operación cancelada', 'info')
        }
    })

}

export function confirmarTdoc(id, name) {
    let url = 'https://localhost:7008/TiposDocumento/' + id
    const swalWithBootstrapButtons = Swal.mixin({
        customClass: { confirmButton: 'btn btn-success me-3', cancelButton: 'btn btn-danger' },
        buttonsStyling: false
    })
    swalWithBootstrapButtons.fire({
        title: 'Seguro de eliminar información ' + name,
        text: 'Se perdeá la información del tipo de documento',
        icon: 'question',
        showCancelButton: true,
        confirmButtonText: '<i class="fa-solid fa-check"></i> Si, eliminar',
        cancelButtonText: '<i class="fa-solid fa-ban"></i> Cancelar'
    }).then((ressult) => {
        if (ressult.isConfirmed) {
            envirSolicitud('DELETE', id, url, 'tipo de docuemnto Eliminado')
        }
        else {
            show_alert('Operación cancelada', 'info')
        }
    })

}
export function envirSolicitud(metodo, parametros, url, mensaje) {
    axios({ method: metodo, url: url, data: parametros }).then(function (respuesta) {
        if (respuesta.status === 200 || respuesta.status === 201 || respuesta.status === 204) {
            show_alert(mensaje, 'success')
            window.setTimeout(function () {
                window.location.href = '/'
            }, 1000)
        }
        else {
            let listado = ''
            let errores = respuesta.data[1]['errors']
            Object.keys(errores).forEach(
                key => listado += errores[key][0] + '.'
            )
            show_alert(listado, 'error')
        }
    }).catch(function (error) {
        show_alert('Error en la solicitud', 'error')
    })

}