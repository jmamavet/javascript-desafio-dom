// SELECCIONO ELEMENTOS DEL DOM
const div_listado_compra = document.querySelector('#compra_div');
const b_precioFinal = document.querySelector('#precio_final');

// RENDERIZO EN EL HTML LA INFORMACION DE LA COMPRA 
const renderCompra = (compra) => {
    const { ticket, estacionamiento, cliente, fechaEntrega } = compra;
    const { fecha, ubicacion } = ticket;

    const div_contenedor = document.createElement('div');
    const div_cliente = document.createElement('div');
    const div_fechaRecital = document.createElement('div');
    const div_ubicacion = document.createElement('div');
    const div_estacionamiento = document.createElement('div');
    const div_fechaEntrega = document.createElement('div');

    const p_cliente = document.createElement('p');
    p_cliente.textContent = 'Cliente: ';
    const p_clienteValor = document.createElement('p');
    p_clienteValor.textContent = cliente;
    const br_clienteEspacio = document.createElement('br');

    div_cliente.appendChild(p_cliente);
    div_cliente.appendChild(p_clienteValor);
    div_cliente.appendChild(br_clienteEspacio);


    const p_fecha = document.createElement('p');
    p_fecha.textContent = 'Fecha Recital: ';
    const p_fechaValor = document.createElement('p');
    p_fechaValor.textContent = fecha.Fecha;
    const br_fechaEspacio = document.createElement('br');

    div_fechaRecital.appendChild(p_fecha);
    div_fechaRecital.appendChild(p_fechaValor);
    div_fechaRecital.appendChild(br_fechaEspacio);

    const p_ubicacion = document.createElement('p');
    p_ubicacion.textContent = 'Ubicacion: ';
    const p_ubicacionValor = document.createElement('p');
    p_ubicacionValor.textContent = `${ubicacion.Nombre} - $${ubicacion.Precio}`;
    const br_ubicacionEspacio = document.createElement('br');

    div_ubicacion.appendChild(p_ubicacion);
    div_ubicacion.appendChild(p_ubicacionValor);
    div_ubicacion.appendChild(br_ubicacionEspacio);

    const p_estacionamiento = document.createElement('p');
    p_estacionamiento.textContent = 'Estacionamiento: ';
    const p_estacionamientoValor = document.createElement('p');
    p_estacionamientoValor.textContent = `${estacionamiento.Nombre} - $${estacionamiento.Precio}`;
    const br_estacionamientoEspacio = document.createElement('br');

    div_estacionamiento.appendChild(p_estacionamiento);
    div_estacionamiento.appendChild(p_estacionamientoValor);
    div_estacionamiento.appendChild(br_estacionamientoEspacio);

    const p_fechaEntrega = document.createElement('p');
    p_fechaEntrega.textContent = 'Fecha Entrega: ';
    const p_fechaEntregaValor = document.createElement('p');
    p_fechaEntregaValor.textContent = fechaEntrega.Fecha;

    div_fechaEntrega.appendChild(p_fechaEntrega);
    div_fechaEntrega.appendChild(p_fechaEntregaValor);

    div_contenedor.appendChild(div_cliente);
    div_contenedor.appendChild(div_fechaRecital);
    div_contenedor.appendChild(div_ubicacion);
    div_contenedor.appendChild(div_estacionamiento);
    div_contenedor.appendChild(div_fechaEntrega);

    div_listado_compra.appendChild(div_contenedor);

};

// RENDERIZO PRECIO FINAL
const renderizarPrecioFinal = (precio) => {
    b_precioFinal.textContent = `$${precio}`;
};