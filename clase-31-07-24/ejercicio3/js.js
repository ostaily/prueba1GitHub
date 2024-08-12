function calcularTotal() {
    // Obtener los valores de los inputs
    var estrato = parseInt(document.getElementById('estrato').value);
    var consumo = parseFloat(document.getElementById('consumo').value);
    
    // Definir tarifas por estrato
    var tarifas = {
        1: 1200,
        2: 2300,
        3: 3200
    };
    
    // Definir cargo fijo
    var cargoFijo = 5800;
    
    // Calcular costo base
    var costoBase = tarifas[estrato] * consumo;
    
    // Aplicar recargo si es necesario
    if (consumo > 20) {
        costoBase *= 1.10; // Aplicar 10% de recargo
    }
    
    // Calcular total a pagar
    var total = costoBase + cargoFijo;
    
    // Mostrar resultado
    document.getElementById('resultado').innerText = 'Total a pagar: $' + total.toFixed(2);
}