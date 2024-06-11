console.log('logica conectada');

const usuario = 'Admin'
const clave = '1234'

function pruebaBoton(){

    let user = document.getElementById('user').value
    let pw = document.getElementById('pw').value
    localStorage.setItem("user", user)
    localStorage.setItem("pw", pw)

    if(usuario==user && clave==pw){
        window.open('calculadora.html', "_self")
        
    }else{ 
        console.log('error de credenciales');
    }
}

function cargarMensaje(){
    document.getElementById('bienvenida').innerHTML = `Bienvenido ${localStorage.getItem("user")}`;
}
