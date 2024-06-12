function sumar(){
    let numero1 = parseInt(document.getElementById("numero1").value);//-> 1
    let numero2 = parseInt(document.getElementById("numero2").value);//"10"-> 10
    let resultado = numero1 + numero2; //1+10 -> 11

    

    document.getElementById("resultadoOperaciones").innerHTML=resultado;

}


function multiplicar(){
    let numero1 = parseInt(document.getElementById("numero1").value);//-> 1
    let numero2 = parseInt(document.getElementById("numero2").value);//"10"-> 10
    let resultado = numero1 * numero2; //1*10 -> 10

    

    document.getElementById("resultadoOperaciones").innerHTML=resultado;
    
}

function restar(){
    let numero1 = parseInt(document.getElementById("numero1").value);//-> 1
    let numero2 = parseInt(document.getElementById("numero2").value);//"10"-> 10
    let resultado = numero1 - numero2; //1-10 -> 9

    

    document.getElementById("resultadoOperaciones").innerHTML=resultado;
    
}

function dividir(){
    let numero1 = parseInt(document.getElementById("numero1").value);//-> 1
    let numero2 = parseInt(document.getElementById("numero2").value);//"10"-> 10
    let resultado = numero1 / numero2; //1/10 -> 0,1

    

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


