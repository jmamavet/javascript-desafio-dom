class Ticket {
	constructor() {
		this.fecha = null;
		this.ubicacion = null;
	}

	definirFecha(fecha) {
		this.fecha = fecha;
	}
	definirUbicacion(ubicacion) {
		this.ubicacion = ubicacion;
	}

	precioTicket() {
		let precioTicket = this.ubicacion.Precio;
		return precioTicket;
	}
}

class Compra {
	constructor(cliente) {
		this.cliente = cliente;
		this.ticket = null;
		this.estacionamiento = null;
		this.fechaEntrega = null;
	}

	agregarTicket(ticket) {
		this.ticket = ticket;
	}

	definirEstacionamiento(estacionamiento) {
		this.estacionamiento = estacionamiento;
	}

	definirFechaEntrega(fechaEntrega) {
		this.fechaEntrega = fechaEntrega;
	}

	precioFinal() {
		let precioFinal = this.estacionamiento.Precio + this.ticket.precioTicket();
		return precioFinal;
	}
}