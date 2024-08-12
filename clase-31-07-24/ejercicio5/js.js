let inventarios = {
    1: 100000, // Kilos en la bodega 1
    2: 230000  // Kilos en la bodega 2
};

let ventasTotales = {
    1: 0,
    2: 0
};

function venta() {
    let bodega = parseInt(document.getElementById('bodega').value);
    let unidad = document.getElementById('unidad').value;
    let cantidad = parseFloat(document.getElementById('cantidad').value);

    switch (unidad) {
        case 'libras':
            cantidad = cantidad * 0.453592; // Libras a kilos
            break;
        case 'gramos':
            cantidad = cantidad / 1000; // Gramos a kilos
            break;
    }

    if (cantidad <= 0) {
        document.getElementById('result').innerText = 'La cantidad debe ser mayor a 0.';
        return;
    }

    if (cantidad > inventarios[bodega]) {
        document.getElementById('result').innerText = 'No hay suficiente inventario en la bodega seleccionada.';
        return;
    }

    inventarios[bodega] -= cantidad;
    ventasTotales[bodega] += cantidad;

    let msg = '';

    if (inventarios[bodega] <= 0.5 * (bodega === 1 ? 100000 : 230000)) {
        msg += 'Alerta: La bodega ' + bodega + ' ha alcanzado la mitad de su inventario.\n';
    }

    if (inventarios[bodega] <= 0.1 * (bodega === 1 ? 100000 : 230000)) {
        msg += 'Alerta: La bodega ' + bodega + ' está a menos del 10% de su inventario.\n';
    }

    document.getElementById('result').innerText =
        'Cantidad vendida: ' + cantidad.toFixed(2) + ' kilos\n' +
        'Inventario restante en la bodega ' + bodega + ': ' + inventarios[bodega].toFixed(2) + ' kilos\n' +
        'Ventas totales en la bodega ' + bodega + ': ' + ventasTotales[bodega].toFixed(2) + ' kilos\n' +
        msg;
}