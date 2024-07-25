let usuarios = JSON.parse(localStorage.getItem("usuario")) || [];
let dataServicios = [
    { id: 1, nombre: "Lavado General", precio: 20000 },
    { id: 2, nombre: "Lavado a presion", precio: 50000 },
    { id: 3, nombre: "Encerada", precio: 40000 },
    { id: 4, nombre: "Polichado", precio: 40000 },
    { id: 5, nombre: "Servicio Completo", precio: 70000 },
    { id: 6, nombre: "Cambio de aceite", precio: 25000 },
    { id: 7, nombre: "Mecanica automotriz", precio: 0 }
]

const selectTipoCliente = document.getElementById('tipoCliente')
usuarios.forEach(element => {
    const option = document.createElement('option')
    option.value = element.tipoCliente
    option.text = `${element.nombres} ${element.apellidos}`
    selectTipoCliente.appendChild(option)
});

const selectServicios = document.getElementById('servicios')
dataServicios.forEach(element => {
    const option = document.createElement('option')
    option.value = element.precio
    option.text = element.nombre
    // option.dataset.id=element.id
    option.setAttribute("data-identi", element.id)
    selectServicios.appendChild(option)
});

function calcularTotal() {

    const servicio = document.getElementById('servicios')
    const valorServicio = parseInt(servicio.value)
    const tipoCliente = document.getElementById('tipoCliente').value
    const mecanico = parseInt(document.getElementById('mecanico').value) || 0
    const repuestos = parseInt(document.getElementById('repuestos').value) || 0
    let total = 0
    // console.log(tipoCliente);
    if (tipoCliente == 'N') {
        total = valorServicio + mecanico + repuestos
    } else {
        total = (valorServicio + mecanico + repuestos) * 0.9
    }

    if ((servicio.options[servicio.selectedIndex].dataset.identi == 6 ||
        servicio.options[servicio.selectedIndex].dataset.identi == 7) &&
        (document.getElementById('mecanico').value == "" || document.getElementById('mecanico').value == "0")) {
        alert("El valor del campo mecanico es obligatorio, cuando el servicio es Cambio de Aceite o Mecanica automotriz")
    }

    // const total= tipoCliente ==='N'? valorServicio +mecanico+repuestos:(valorServicio +mecanico+repuestos)* 0.9
    // alert(total);
    document.getElementById("valorFactura").innerHTML = `$${new Intl.NumberFormat().format(total)}`
}


