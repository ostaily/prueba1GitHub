
const usuarios = [{
    cedula: '12345678',
    nombre: 'Bastian Ballesteros',
    telefono: '3216587425',
    edad: 18
},
{
    cedula: '987654321',
    nombre: 'Pedro Perez',
    telefono: '3256987412',
    edad: 15
}];


function getUsuarios() {
    let contAdmitidos = 0;
    let contRechazados = 0;
    const tablaUsuarios = document.getElementById('tablaUsuarios')
    tablaUsuarios.innerHTML = "";
    let estado = ''
    let fila, col;
    usuarios.map((e, i) => {
        fila = document.createElement('tr')
        col = document.createElement('td')
        col.textContent = e?.cedula
        fila.appendChild(col)

        col = document.createElement('td')
        col.textContent = e?.nombre
        fila.appendChild(col)

        col = document.createElement('td')
        col.textContent = e?.telefono
        fila.appendChild(col)

        col = document.createElement('td')
        col.textContent = e?.edad
        fila.appendChild(col)

        estado = e?.edad >= 18 ? 'Admitido' : 'Rechazado'
        if (e?.edad >= 18) {
            contAdmitidos++;
        } else {
            contRechazados++;
        }
        col = document.createElement('td')
        col.textContent = estado
        fila.appendChild(col)

        tablaUsuarios.appendChild(fila)
    });
    document.getElementById('admitidos').innerHTML = contAdmitidos
    document.getElementById('rechazados').innerHTML = contRechazados
}

function registrarUsuario() {
    const cedula = document.getElementById('cedula').value
    const nombre = document.getElementById('nombre').value
    const telefono = document.getElementById('telefono').value
    const edad = document.getElementById('edad').value
    // const estado = document.getElementById('edad').value < 18 ? 'Exitoso' : 'Rechazado'


    let newUser = {};
    let flagRegisUsuario = true;
    for (let i = 0; i < usuarios.length; i++) {
        if (usuarios[i].cedula == cedula) {
            alert("La cédula ya esta registrada");
            flagRegisUsuario = false;
            break
        } else {
            newUser = {
                cedula,
                nombre,
                telefono,
                edad,
                // estado
            }
        }
    };
    if (flagRegisUsuario) {

        usuarios.push(newUser);
        getUsuarios();
    }
}

getUsuarios();