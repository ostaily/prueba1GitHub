function calcularCuotas() {
    let monto = parseFloat(document.getElementById('monto').value);
    let cuotas = parseInt(document.getElementById('cuotas').value);
    let tipoCredito = document.getElementById('tipoCredito').value;
    
    let tasasInteres = {
        libre: 0.025,  // 2.5%
        libranza: 0.029 // 2.9%
    };
    
    let interesBase = tasasInteres[tipoCredito];
    
    if (cuotas < 6) {
        interesBase -= 0.002; // Descuento de 0.2%
    } else if (cuotas > 12 && cuotas <= 24) {
        interesBase -= 0.004; // Descuento de 0.4%
    } else if (cuotas > 24) {
        interesBase -= 0.007; // Descuento de 0.7%
    }
    
    interesBase = Math.max(interesBase, 0);

    let cuota = (monto * interesBase) / (1 - Math.pow(1 + interesBase, -cuotas));
    
    document.getElementById('resultado').innerText = 
        'Valor de cada cuota: $' + cuota.toFixed(2) + 
        '\nInterés aplicado: ' + (interesBase * 100).toFixed(2) + '%';
}