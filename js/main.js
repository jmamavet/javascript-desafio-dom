const cliente = prompt('¡Bienvenid@! Por favor ingresá tu nombre');

const hacerCompra = confirm(`Hola ${cliente}, ¿querés realizar una compra?`);
let CompraFinal = null;

if (hacerCompra) {
	const NuevaCompra = new Compra(cliente);
	const NuevoTicket = new Ticket();

	let FechaRecitalID = Number(
		prompt(`Elegí la fecha del recital: ${FECHAS_RECITALES.map((fecha) => `${fecha.ID}) ${fecha.Fecha} `).join(' ')}`),
	);

	let FechaRecital = FECHAS_RECITALES.find((fecha) => fecha.ID === FechaRecitalID)

	while (!FechaRecital) {
		FechaRecitalID = Number(
			prompt(`Elegí la fecha del recital: ${FECHAS_RECITALES.map((fecha) => `${fecha.ID}) ${fecha.Fecha} `).join(' ')}`),
		);
		FechaRecital = FECHAS_RECITALES.find((fecha) => fecha.ID === FechaRecitalID);
	}

	NuevoTicket.definirFecha(FechaRecital);


	let UbicacionID = Number(
		prompt(`Elegí la ubicación: ${UBICACIONES.map((ubicacion) => `${ubicacion.ID}) ${ubicacion.Nombre} - $${ubicacion.Precio} `).join(' ')}`),
	);

	let Ubicacion = UBICACIONES.find((ubicacion) => ubicacion.ID === UbicacionID)

	while (!Ubicacion) {
		UbicaciobID = Number(
			prompt(`Elegí la ubicación: ${UBICACIONES.map((ubicacion) => `${ubicacion.ID}) ${ubicacion.Nombre} - $${ubicacion.Precio} `).join(' ')}`),
		);
		Ubicacion = UBICACIONES.find((ubicacion) => ubicacion.ID === UbicacionID);
	}

	NuevoTicket.definirUbicacion(Ubicacion);

	let EstacionamientoID = Number(
		prompt(`Elegí tu estacionamiento: ${ESTACIONAMIENTOS.map((estacionamiento) => `${estacionamiento.ID}) ${estacionamiento.Nombre} - $${estacionamiento.Precio} `).join(' ')}`),
	);

	let Estacionamiento = ESTACIONAMIENTOS.find((estacionamiento) => estacionamiento.ID === EstacionamientoID)

	while (!Estacionamiento) {
		EstacionamientoID = Number(
			prompt(`Elegí tu estacionamiento: ${ESTACIONAMIENTOS.map((estacionamiento) => `${estacionamiento.ID}) ${estacionamiento.Nombre} - $${estacionamiento.Precio} `).join(' ')}`),
		);
		Estacionamiento = ESTACIONAMIENTOS.find((estacionamiento) => estacionamiento.ID === EstacionamientoID);
	}

	NuevaCompra.definirEstacionamiento(Estacionamiento);

	NuevaCompra.agregarTicket(NuevoTicket);

	let FechaEntregaID = Number(
		prompt(`Elegí la fecha de entrega de tu ticket: ${FECHAS_ENTREGA.map((fecha) => `${fecha.ID}) ${fecha.Fecha} `).join(' ')}`),
	);

	let FechaEntrega = FECHAS_ENTREGA.find((fecha) => fecha.ID === FechaEntregaID)

	while (!FechaEntrega) {
		FechaEntregaID = Number(
			prompt(`Elegí la fecha del recital: ${FECHAS_ENTREGA.map((fecha) => `${fecha.ID}) ${fecha.Fecha} `).join(' ')}`),
		);
		FechaEntrega = FECHAS_ENTREGA.find((fecha) => fecha.ID === FechaEntregaID);
	}

	NuevaCompra.definirFechaEntrega(FechaEntrega);

	CompraFinal = NuevaCompra;

} else {
	alert('¡Te esperamos la próxima!');
}

renderCompra(CompraFinal);
renderizarPrecioFinal(CompraFinal.precioFinal());