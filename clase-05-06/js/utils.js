function sumar(){
    let numero1 = parseInt(document.getElementById("numero1").value);//-> 1
    let numero2 = parseInt(document.getElementById("numero2").value);//"10"-> 10
    let resultado = numero1 + numero2; //1+10 -> 11

    localStorageLog(numero1, numero2, "+", resultado);
    // imprimirLocalStorage();
    document.getElementById("resultadoOperaciones").innerHTML=resultado;

}


function multiplicar(){
    let numero1 = parseInt(document.getElementById("numero1").value);//-> 1
    let numero2 = parseInt(document.getElementById("numero2").value);//"10"-> 10
    let resultado = numero1 * numero2; //1*10 -> 10

    
    localStorageLog(numero1, numero2, "x", resultado);
    // imprimirLocalStorage();
    document.getElementById("resultadoOperaciones").innerHTML=resultado;
    
}

function restar(){
    let numero1 = parseInt(document.getElementById("numero1").value);//-> 1
    let numero2 = parseInt(document.getElementById("numero2").value);//"10"-> 10
    let resultado = numero1 - numero2; //1-10 -> 9

    localStorageLog(numero1, numero2, "-", resultado);
    // imprimirLocalStorage();

    document.getElementById("resultadoOperaciones").innerHTML=resultado;
    
}

function dividir(){
    let numero1 = parseInt(document.getElementById("numero1").value);//-> 1
    let numero2 = parseInt(document.getElementById("numero2").value);//"10"-> 10
    let resultado = numero1 / numero2; //1/10 -> 0,1

    localStorageLog(numero1, numero2, "÷", resultado);
    // imprimirLocalStorage();

    document.getElementById("resultadoOperaciones").innerHTML=resultado;
    
}

function porcentaje(){
    let numero1 = parseInt(document.getElementById("numero1").value);//-> 1
    let numero2 = parseInt(document.getElementById("numero2").value);//"10"-> 10
    let resultado = numero1 * numero2/100; //1%10 -> 11

    

    document.getElementById("resultadoOperaciones").innerHTML=resultado;
    
}

function ingresarNumero(numero){

}


function localStorageLog(numero1, numero2, operacion, resultado){
    let clave=1;
    if(localStorage.getItem('contador_calculadora')){
        clave=parseInt(localStorage.getItem('contador_calculadora'))+1;
        localStorage.setItem("contador_calculadora", clave)
    }else{
        localStorage.setItem('contador_calculadora', 1);
        clave = localStorage.getItem("contador_calculadora")
    }
    localStorage.setItem(`operacion${clave}`, `${numero1}${operacion}${numero2}=${resultado}`)
}

function imprimirLocalStorage(){
    let mensaje=``;
    for (let i = 1; i <= localStorage.getItem('contador_calculadora'); i++) {
        mensaje += localStorage.getItem(`operacion${i}`)+'<br />';
    }
    document.getElementById('resultadoLogsLocalSotrage').innerHTML=mensaje
}
