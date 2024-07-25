function registrarClientes() {
    let tipoDocumento = document.getElementById('tipoDocumento').value
    let numeroDocumento = document.getElementById('numeroDocumento').value
    let nombres = document.getElementById('nombres').value
    let apellidos = document.getElementById('apellidos').value
    let direccion = document.getElementById('direccion').value
    let telefono = document.getElementById('telefono').value
    let tipoCliente = document.getElementById('tipoCliente').value

    let usuario = {
        tipoDocumento,
        numeroDocumento,
        nombres,
        apellidos,
        direccion,
        telefono,
        tipoCliente
    }

    let usuariosRegistrados = [];
    if(localStorage.getItem("usuario")!="" && localStorage.getItem("usuario")!=null){
        usuariosRegistrados = JSON.parse(localStorage.getItem("usuario"));
    }
     
    usuariosRegistrados.push(usuario)
    localStorage.setItem('usuario', JSON.stringify(usuariosRegistrados))
}

/*function facturaCliente() {
    let cliente = document.getElementById('cliente').value
    let numeroDocumento = document.getElementById('numeroDocumento').value
    let nombres = document.getElementById('nombres').value
    let apellidos = document.getElementById('apellidos').value
    let servicio = document.getElementById('servicio').value
    let otros = document.getElementById('otros').value
    let total = document.getElementById('total').value

    let facturaCliente = {
        cliente,
        numeroDocumento,
        nombres,
        apellidos,
        servicio,
        otros,
        total
    }
    
    localStorage.setItem('factura', JSON.stringify(facturaCliente))

}*/
